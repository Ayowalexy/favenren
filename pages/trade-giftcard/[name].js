import { useRouter } from "next/router";
import { Box, Text, VStack, HStack, useTheme, Select, Textarea, Button } from "@chakra-ui/react";
import Layout from "../../public/components/Layout";
import { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { AiFillCloseCircle } from 'react-icons/ai'
import ConfirmModal from "../../public/components/confirmModal";
import SuccessModal from "../../public/components/successModal";
import { BsFillCloudUploadFill } from 'react-icons/bs';


const TradeCard = () => {
    const theme = useTheme();
    const [name, setName] = useState("")
    const { text_2 } = theme.colors.brand;
    const [selected, setSelected] = useState('NG');
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);


    const router = useRouter();

    useEffect(() => {
        setName(router?.query?.name)
    }, [router?.query?.name])
    return (
        <Layout>
            <VStack
                align='flex-start'
                padding={{
                    lg: '45px 30px', md: '45px 30px', base: '100px 20px'
                }}
            >
                <Text
                    color={text_2}
                    fontSize={'28px'}
                    fontWeight={500}
                >
                    Trade {name} Giftcard
                </Text>
                <Text
                    color={text_2}
                    fontSize={'14px'}
                    fontWeight={400}
                >
                    Trade your Amazon giftcard with Faveremit at the market leading rate.
                </Text>
                <VStack
                    align='flex-start'
                    marginTop='40px'
                    padding={{base:"60px 20px", lg: '60px 40px', md: '60px 40px'}}
                    width={{md: '80%', lg: '80%', base: '100%'}}
                    borderRadius='7px'
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

                            placeholder='Select option'>
                            <option value='option1'>100 - 200</option>
                            <option value='option2'>200 - 200</option>
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
                        >Receipt Tyoe</Text>
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
                            <option value='option2'>200 - 200</option>
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

                            placeholder='200'>
                            <option value='option1'>200</option>
                            <option value='option2'>200 - 200</option>
                        </Select>
                    </VStack>

                    <HStack
                        width='100%'
                        paddingTop={'30px'}
                        flexWrap='wrap'
                        justify='space-between'
                    >
                        <HStack
                            justify='center'
                            align='center'
                            width={{base: '45%', md: '250px', lg: '250px'}}
                            borderRadius='10px'
                            height='198px'
                            border='1px dotted #10B6E8'
                        >
                            <HStack
                                bgPos='center'
                                bgSize='contain'
                                width='97%'
                                bgRepeat='no-repeat'
                                height='97%'
                                padding='10px'
                                justify='flex-end'
                                align='flex-start'
                                bgImage={{
                                    base: 'url("/images/img/tst.png")',
                                }}
                            >
                                <HStack

                                    height='23px'
                                    width='114px'
                                    borderRadius='2px'
                                    backgroundColor='#FFF1F1'
                                >
                                    <AiFillCloseCircle fill='red' />
                                    <Text
                                        fontSize='12px'
                                        color='red'
                                    >
                                        Remove Image
                                    </Text>
                                </HStack>

                            </HStack>
                        </HStack>

                      

                        <HStack
                            justify='center'
                            align='center'
                            flexWrap='wrap'
                            width={{base: '45%', md: '250px', lg: '250px'}}
                            borderRadius='10px'
                            height='198px'
                            border='1px dotted #10B6E8'
                        >
                            <HStack
                                bgPos='center'
                                bgSize='contain'
                                width='97%'
                                bgRepeat='no-repeat'
                                height='97%'
                                padding='10px'
                                justify='flex-end'
                                align='flex-start'
                                bgImage={{
                                    base: 'url("/images/img/tst.png")',
                                }}
                            >
                                <HStack

                                    height='23px'
                                    width='114px'
                                    borderRadius='2px'
                                    backgroundColor='#FFF1F1'
                                >
                                    <AiFillCloseCircle fill='red' />
                                    <Text
                                        fontSize='12px'
                                        color='red'
                                    >
                                        Remove Image
                                    </Text>
                                </HStack>

                            </HStack>
                        </HStack>

                        <HStack
                            justify='center'
                            align='center'
                            width={{base: '100%', md: '250px', lg: '250px'}}
                            backgroundColor='#F0FCFF'
                            borderRadius='10px'
                            height='198px'
                            marginTop={{base: '30px'}}
                            border='1px dotted #10B6E8'
                        >
                            <VStack
                                bgPos='center'
                                bgSize='contain'
                                width='97%'
                                height='97%'
                                spacing='10px'
                                padding='10px'
                                justify='center'
                                align='center'

                            >
                                <BsFillCloudUploadFill fill="#10B6E8" size={"30px"}/>
                                <Text
                                    color='#10B6E8'
                                    fontSize='18px'
                                    fontWeight={400}
                                >
                                    Add Giftcard Image
                                </Text>
                                <Text
                                    textAlign='center'
                                    color='#10B6E8'
                                    fontSize='10px'
                                    fontWeight={500}
                                >
                                    Please ensure that the card number is clearly visible and in focus along with other items in the photo you are about to submit                                </Text>

                            </VStack>
                        </HStack>


                    </HStack>

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
                        >Note (Optional)</Text>
                        <Textarea
                            color='#8896AB'
                            fontWeight={400}
                            fontSize='15px'
                            width='100%'
                            height='135px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            outline='none'
                            paddingTop='10px'
                            border='1px solid rgba(0,0,0,0.1)'

                        />
                    </VStack>

                    <HStack
                        paddingTop='30px'
                        align='center'
                        justify='space-between'
                        width='100%'
                        flexWrap='wrap'
                    >
                        <VStack
                            align='flex-start'
                            spacing='-10px'
                        >
                            <Text
                                fontSize='16px'
                                color='#333F51'
                                paddingTop='20px'
                                fontWeight={500}
                                fontFamily='Poppins'
                            >Cash Value</Text>
                            <Text
                                fontSize='66px'
                                color='#000'
                                fontWeight={500}
                                fontFamily='Poppins'
                            >₦57,000<span style={{fontSize: '14px', color: '#9B9B9B'}}>.00</span>
                            </Text>
                        </VStack>
                        <Button
                            color='#fff'
                            backgroundColor='#1EB0D9'
                            height='56px'
                            width={{base: '100%', md: '300px', lg: '300px'}}
                            onClick={() => setIsOpen(true)}
                        >
                            Submit Transaction
                        </Button>
                    </HStack>


                </VStack>
            </VStack>

            <ConfirmModal isOpen={isOpen} setIsOpen={setIsOpen} setIsSuccessOpen={setIsSuccessOpen} isSuccessOpen={isSuccessOpen} />
            <SuccessModal isOpen={isSuccessOpen} setIsOpen={setIsSuccessOpen} />
       
        </Layout >
    )
}

export default TradeCard