import Layout from "../../public/components/Layout";
import { Box, Text, VStack, HStack, useTheme, Input, Select, Button, Image } from "@chakra-ui/react";
import ReactFlagsSelect from "react-flags-select";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCard } from "../../public/redux/reducers/cards/thunkAction";
import { useAppSelector } from "../../public/redux/store";
import { default as ISelect } from 'react-select'
import { setSingleGiftcard } from "../../public/redux/reducers/cards";
import { getSingleGiftcard } from "../../public/redux/reducers/cards/thunkAction";
import { formatNumber } from "../../public/components/utils/formatter";

const RateChecker = () => {
    const theme = useTheme();
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState('');
    const [currentRangeData, setCurrentRangeData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [rangeValue, setRangeValue] = useState("");
    const [value, setValue] = useState('')
    const [showError, setShowError] = useState(false);
    const [selectedValue, setSelectedValue] = useState('')


    console.log('categories', categories)

    const { text_2, btn } = theme.colors.brand;

    const dispatch = useDispatch();

    const { cards, loading, countryFlags, singleGiftcardId, singleGiftcard } = useAppSelector(
        ({ cardReducer }) => cardReducer
    )

    useEffect(() => {
        dispatch(getCard())
    }, [])

    useEffect(() => {
        if (singleGiftcardId) {
            dispatch(getSingleGiftcard(singleGiftcardId))
        }
    }, [singleGiftcardId])


    useEffect(() => {
        if (cards.length) {
            const data = cards.map(element => {
                return {
                    value: element.id,
                    label: <HStack align='center' justify='flex-start' gap='10px'>
                        <Image src={element.image} width='51px' height='42px' />
                        <Text fontSize={'16px'} fontWeight={600} color='#000' fontFamily='Poppins'>{element.title}</Text>
                    </HStack>
                }
            })
            setOptions(data)
        }
    }, [cards])

    console.log(countryFlags)

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
                        Giftcard Rate Calculator
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        Check out the current rate of different gift cards in Naira using Faveremit's gift card rate calculator.
                    </Text>
                </VStack>

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
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Gift Card type</Text>
                        <ISelect
                            options={options}
                            styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  backgroundColor: '#F7F8F9',
                                 
                                }),
                              }}
                            onChange={(e) => {
                                console.log(e.value)
                                dispatch(setSingleGiftcard(e.value))
                            }}
                            className='select_bill' />
                    </VStack>

                    <VStack
                        spacing='5px'
                        align='flex-start'
                        width='100%'
                    >

                        <Text
                            fontSize='16px'
                            color='#333F51'
                            fontWeight={500}
                            paddingTop='20px'
                            fontFamily='Poppins'
                        >Card Country</Text>
                        <ReactFlagsSelect
                            countries={countryFlags}
                            selected={selected}
                            fullWidth={true}
                            className='select_country'
                            onSelect={(code) => {
                                setSelected(code)
                                const current = singleGiftcard.find(element => element.country_iso === code);
                                setCurrentRangeData(current)
                            }}
                        />
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
                        >Card Range</Text>
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
                            onChange={(event) => {
                                const { value } = event.target;
                                const el1 = value.split('-')[0]
                                const el2 = value.split('-')[1]
                                const el3 = value.split('-')[2]

                                const cat = currentRangeData?.range?.find(element => Number(element.id) === Number(el1));
                                setCategories(cat?.categories)

                                setRangeValue(`${el2}-${el3}`)

                            }}
                            placeholder='Select option'>
                            {
                                currentRangeData?.range?.map(element => (
                                    <option value={`${element.id}-${element.min}-${element.max}`} key={element.id}>
                                        {`${element.min}-${element.max}`}
                                    </option>
                                ))
                            }
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
                        >Receipt Type</Text>
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
                            onChange={(e) => {
                                setSelectedValue(e.target.value)
                            }}
                            placeholder='physical'>
                            {
                                categories?.map(element => (
                                    <option value={`${element.amount}`} key={element.id}>
                                        {`${element.title}`}
                                    </option>
                                ))
                            }
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
                        >Value</Text>
                        <Input
                            color='#8896AB'
                            fontWeight={400}
                            fontSize='15px'
                            onChange={(e) => {
                                setValue(e.target.value);
                                if (Number(rangeValue?.split('-')[0]) > Number(value)) {
                                    setShowError(true)
                                } else if (Number(rangeValue?.split('-')[1]) < Number(value)) {
                                    setShowError(true)
                                } else {
                                    setShowError(false)
                                }
                            }}
                            value={value}
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            outline='none'
                            border='1px solid rgba(0,0,0,0.1)'
                            placeholder='Enter value'
                        />
                    </VStack>
                    {
                        showError && (
                            Number(rangeValue?.split('-')[0]) > Number(value)
                                ?
                                <Text color='red' fontSize='13' alignSelf='flex-start' textAlign='left'>
                                    Value must be higher than {rangeValue?.split('-')[0]}
                                </Text>
                                : Number(rangeValue?.split('-')[1]) < Number(value)
                                    ?
                                    <Text color='red'  alignSelf='flex-start' fontSize='13'  textAlign='left'>
                                        Value must be lesser than {rangeValue?.split('-')[1]}
                                    </Text>
                                    : null
                        )
                    }



                    <HStack
                        width='100%'
                        align='center'
                        justify='space-between'
                        flexDir={{ base: 'column', md: 'row', lg: 'row' }}
                    >
                        <VStack
                            align='flex-start'
                        >
                            <Text
                                fontSize='16px'
                                color='#000'
                                fontWeight={400}
                                fontFamily='Poppins'
                            >
                                Cash Value
                            </Text>
                            <Text
                                fontSize='66px'
                                color='#000'
                                fontWeight={500}
                                fontFamily='Poppins'
                            >₦{formatNumber(Number(selectedValue)* Number(value))}<span style={{ fontSize: '14px', color: '#9B9B9B' }}>.00</span>
                            </Text>
                        </VStack>

                        <Button
                            marginTop='40px'
                            alignSelf='center'
                            color='#fff'
                            backgroundColor={btn}
                            height='56px'
                            fontWeight={500}
                            width={{ base: '100%', md: '300px', lg: '300px' }}
                        >
                            Submit Transaction
                        </Button>

                    </HStack>


                </VStack>
            </Box>
        </Layout>
    )
}

export default RateChecker