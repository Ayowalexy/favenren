import Layout from "../../public/components/Layout";
import { Box, Text, VStack, HStack, useTheme, Select, Input, Button } from "@chakra-ui/react";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

const RateChecker = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState('US');

    const { text_2, btn } = theme.colors.brand;
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
                            paddingTop='20px'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Giftcard</Text>
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

                            placeholder='XBox'>
                            <option value='option1'>XBox</option>
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
                        >Card Country</Text>
                        <ReactFlagsSelect
                            selected={selected}
                            fullWidth={true}
                            className='select_country'
                            onSelect={(code) => setSelected(code)}
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

                            placeholder='100 - 200'>
                            <option value='option1'>100 - 200</option>
                            <option value='option2'>200 - 300</option>
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

                            placeholder='physical'>
                            <option value='option1'>Physical</option>
                            <option value='option2'>Virtual</option>
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
                    <HStack
                        width='100%'
                        align='center'
                        justify='space-between'
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
                            >₦57,000<span style={{ fontSize: '14px', color: '#9B9B9B' }}>.00</span>
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