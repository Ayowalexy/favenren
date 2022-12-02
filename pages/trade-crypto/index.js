import { Box, Text, HStack, VStack, useTheme, Image, Select, Input, Button } from "@chakra-ui/react";
import Layout from "../../public/components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

const TradeCrypto = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState("Bitcoin")
    const { text_2 } = theme.colors.brand;
    const router = useRouter()
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
                        Trade Cryprocurrency
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        Trade your cryptocurrency with Faveremit at the market leading rate.
                    </Text>
                </VStack>

                <HStack
                    paddingTop='40px'
                    width='100%'
                    overflow='scroll'
                    // flexWrap='wrap'
                    spacing='20px'
                >
                    {[
                        {
                            img: '/images/img/btc.png',
                            name: 'Bitcoin'
                        }, {
                            img: '/images/img/usdt.png',
                            name: 'Tether'
                        }, {
                            img: '/images/img/eth.png',
                            name: 'Ethereum'
                        },
                    ].map((element, idx) => (
                        <Box key={idx}>
                            <HStack
                                
                                cursor='pointer'
                                onClick={() => setSelected(element.name)}
                                backgroundColor='#fff'
                                height='100px'
                                borderRadius='15px'
                                width={{ base: '352px', lg: '352px', md: '352px' }}
                                transition='ease all 300ms'
                                paddingLeft='20px'
                                border={`1px solid  ${element.name === selected ? '#10B6E8' : "#DFE6E9"}}`}
                            >
                                <Image src={element.img} />
                                <Text
                                    paddingLeft='10px'
                                    color={element.name === selected ? '#10B6E8' : '#000'}
                                    fontSize={'32px'}
                                    fontWeight={600}
                                >
                                    {element.name}
                                </Text>
                            </HStack>
                        </Box>
                    ))
                    }
                </HStack>

                <VStack
                    marginTop='40px'
                    padding={{ base: "60px 20px", lg: '60px 100px', md: '60px 40px' }}
                    width='100%'
                    borderRadius='7px'
                    align='center'
                    justify='center'
                    backgroundColor='#FFFFFF'
                    border='1px solid #DFE6E9'
                >
                    <VStack
                        spacing='5px'
                        align='flex-start'
                        width='100%'
                    >

                        <Text
                            fontSize='16px'
                            color='#333F51'
                            paddingTop='20px'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Wallet Type</Text>
                        <Select
                            color='#8896AB'
                            fontWeight={400}
                            fontSize='15px'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            outline='none'
                            paddingTop='10px'
                            border='1px solid rgba(0,0,0,0.1)'

                            placeholder='Blockchain'>
                            <option value='option1'>Blockchain</option>
                            <option value='option2'>Blockchain</option>
                        </Select>
                    </VStack>


                    <VStack
                        spacing='5px'
                        align='flex-start'
                        width='100%'
                    >

                        <Text
                            fontSize='16px'
                            color='#333F51'
                            paddingTop='20px'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Amount in USD($)</Text>
                        <Input
                            color='#8896AB'
                            fontWeight={400}
                            fontSize='15px'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            outline='none'
                            paddingLeft='20px'
                            border='1px solid rgba(0,0,0,0.1)'
                            placeholder="200"
                        />
                    </VStack>
                    <Box height='40px' />
                    <VStack
                        width='100%'

                        height='249px'
                        borderRadius='10px'
                        backgroundColor='#D5DAE1'
                        outline='none'
                        paddingLeft='20px'
                        border='1px solid rgba(0,0,0,0.1)'
                    >
                        <HStack
                            width='100%'
                            padding='20px 10px'
                            justify='space-between'
                            borderBottom='1px solid rgba(0,0,0,0.1)'
                        >
                            <Text
                                fontSize='16px'
                                color='#000'
                                fontWeight={400}
                            >
                                Rate
                            </Text>
                            <Text
                                fontSize='16px'
                                color='#000000'
                                fontWeight={600}
                            >
                                707.0/$
                            </Text>
                        </HStack>

                        <HStack
                            width='100%'
                            padding='20px 10px'
                            justify='space-between'
                            borderBottom='1px solid rgba(0,0,0,0.1)'
                        >
                            <Text
                                fontSize='16px'
                                color='#000'
                                fontWeight={400}
                            >
                                Bitcoin Value
                            </Text>
                            <Text
                                fontSize='16px'
                                color='#000000'
                                fontWeight={600}
                            >
                                0.0003567BTC
                            </Text>
                        </HStack>

                        <HStack
                            width='100%'
                            padding='0px 10px'
                            justify='space-between'
                        >
                            <Text
                                fontSize='16px'
                                color='#000'
                                fontWeight={400}
                            >
                                Cash Value
                            </Text>
                            <Text
                                fontSize={{base: "30px", md: '66px', lg: '66px'}}
                                color='#000'
                                fontWeight={500}
                                fontFamily='Poppins'
                            >₦57,000<span style={{ fontSize: '14px', color: '#9B9B9B' }}>.00</span>
                            </Text>
                        </HStack>


                    </VStack>

                    <Box height='30px' />
                    <Button
                        color='#fff'
                        backgroundColor='#1EB0D9'
                        height='56px'
                        onClick={() => router.push(`/trade-crypto/${selected.toLowerCase()}`)}
                        width={{ base: '100%', md: '300px', lg: '300px' }}
                    >
                        Proceed
                    </Button>
                </VStack>
            </Box>
        </Layout>
    )
}

export default TradeCrypto