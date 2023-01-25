import Layout from "../../public/components/Layout";
import { Box, Text, VStack, HStack, useTheme, Input, InputGroup, Image, InputRightElement, InputLeftElement, InputRightAddon, Flex, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsSearch } from 'react-icons/bs'
import { useNavigation } from "../../public/context/navigationContext";
import { Preloader } from "../Auth/otp";
import { useAppSelector } from "../../public/redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCard } from "../../public/redux/reducers/cards/thunkAction";
import { setSingleGiftcard } from "../../public/redux/reducers/cards";



const Card = ({ img, name, id }) => {
    const router = useRouter();
    const { setActive } = useNavigation();
    const dispatch = useDispatch();


    return (
        <Flex
            onClick={() => {
                dispatch(setSingleGiftcard(id))
                router.push(`/trade-giftcard/${name}`)
            }}
            align='center'
            width={{
                lg: '23%', md: '30%', base: '45%'
            }}
            backgroundColor={'#fff'}
            height={{ base: '200px', lg: '265px', md: '265px' }}
            cursor='pointer'
            marginBottom='10px'
            paddingTop='16px'
            justify='flex-start'
            flexDir='column'
            borderRadius='15px'
            border='1px solid #DFE6E9'
        >
            <Image
                src={img}
                width='90%'
                borderRadius='18px'
                height={{ lg: '167px', md: '167px', base: '120px' }}
            />
            <Text
                color={'#10B6E8'}
                fontSize={'18px'}
                paddingTop='20px'
                fontWeight={600}
            >
                {name}
            </Text>
        </Flex>
    )
}



const GiftCard = () => {
    const theme = useTheme();
    const { text_2, box_bg } = theme.colors.brand;
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    const [filtred, setFiltred] = useState([]);

    const dispatch = useDispatch();

    const { cards, loading } = useAppSelector(
        ({ cardReducer }) => cardReducer
    )

    useEffect(() => {
        dispatch(getCard())
    }, [])

    const handleSearch = (val) => {
        const filter = cards.filter(ele => ele?.title?.toLowerCase()?.includes(val.toLowerCase()));
        setFiltred(filter)
    }

    return (
        <Layout>
            <Box
                padding={{
                    lg: '45px 30px', md: '45px 30px', base: '100px 20px'
                }}
            >
                <VStack
                    align='flex-start'
                    spacing='20px'
                >
                    <Text
                        color={text_2}
                        fontSize={'28px'}
                        fontWeight={500}
                    >
                        Trade Giftcard
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        What kind of giftcard do you want to trade?
                    </Text>
                    {
                        isLargerThan600
                            ?
                            (
                                <InputGroup>
                                    <Input
                                        border={`1px solid ${box_bg}`}
                                        borderRadius='7px 0px 0px 7px'
                                        width='598px'
                                        paddingLeft='12px'
                                        height='48px'
                                        fontSize='14px'
                                        onChange={(e) => handleSearch(e.target.value)}
                                        color='#B2BEC3'
                                        placeholder="Search for giftcard" />
                                    <InputRightAddon
                                        width='185px'
                                        height='48px'

                                        borderRadius='0px 7px 7px 0px'
                                        backgroundColor={box_bg}
                                    >
                                        <HStack
                                            justify='center'
                                            align='center'
                                            width='100%'
                                        >
                                            <Text
                                                color={'#fff'}
                                                fontSize={'16px'}
                                                fontWeight={400}

                                            >Search</Text>
                                        </HStack>
                                    </InputRightAddon>
                                </InputGroup>
                            )
                            :
                            <InputGroup>

                                <Input
                                    border={`1px solid ${box_bg}`}
                                    borderRadius='7px 0px 0px 7px'
                                    width='100%'
                                    paddingLeft='40px'
                                    height='48px'
                                    fontSize='14px'
                                    color='#B2BEC3'
                                    placeholder="Search giftcards" />
                                <InputLeftElement padding='10px'>
                                    <BsSearch />
                                </InputLeftElement>
                            </InputGroup>
                    }
                </VStack>

                {loading === 'pending' && <Preloader />}

                <HStack
                    spacing='30px'
                    align='center'
                    justify={{ base: 'space-between', lg: 'flex-start', md: 'flex-start' }}
                    flexWrap='wrap'
                    width={{
                        lg: '80vw', md: '89vw', base: '100%'
                    }}
                    marginTop='30px'
                >
                    <Box flexWrap='wrap' width='100%' gap='20px' display='flex' justify='space-between' align='center'>
                        {
                            filtred.length ? filtred.map((element) => (
                                <Card
                                    key={element.id}
                                    name={element.title}
                                    img={element.image}
                                    id={element.id}
                                />
                            ))
                                : cards.map((element) => (
                                    <Card
                                        key={element.id}
                                        name={element.title}
                                        img={element.image}
                                        id={element.id}
                                    />
                                ))
                        }
                    </Box>
                </HStack>
            </Box>
        </Layout>
    )
}

export default GiftCard