import { useRouter } from "next/router";
import { Box, Text, VStack, HStack, useTheme, Select, Textarea, Button, Input } from "@chakra-ui/react";
import Layout from "../../public/components/Layout";
import { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { AiFillCloseCircle } from 'react-icons/ai'
import ConfirmModal from "../../public/components/confirmModal";
import SuccessModal from "../../public/components/successModal";
import { getSingleGiftcard } from "../../public/redux/reducers/cards/thunkAction";
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { useAppSelector } from "../../public/redux/store";
import { useDispatch } from "react-redux";
import { Preloader } from "../Auth/otp";
import { useFileUpload } from "../../public/hooks/fileUpload";
import { useFormik } from "formik";
import { Formik, Field } from "formik";
import { formatNumber } from "../../public/components/utils/formatter";


const TradeCard = () => {
    const theme = useTheme();
    const [name, setName] = useState("")
    const { text_2 } = theme.colors.brand;
    const [selected, setSelected] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const dispatch = useDispatch();
    const [currentRangeData, setCurrentRangeData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [value, setValue] = useState('')
    const [rangeValue, setRangeValue] = useState("");
    const [showError, setShowError] = useState(false);
    const [selectedValue, setSelectedValue] = useState('')

    const { deleteSelectedImage, fileList, handleFileUpload } =
        useFileUpload(true);
    const { singleGiftcard, loading, singleGiftcardId, countryFlags } = useAppSelector(
        ({ cardReducer }) => cardReducer
    )


    const router = useRouter();

    useEffect(() => {
        setName(router?.query?.name)
    }, [router?.query?.name])


    useEffect(() => {
        if (singleGiftcardId) {
            dispatch(getSingleGiftcard(singleGiftcardId))
        }
    }, [singleGiftcardId])



    console.log(value, rangeValue)

    return (
        <Layout>
            {
                // loading === 'pending'
                //     ? <Preloader />
                //     : 
                (

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
                            padding={{ base: "60px 20px", lg: '60px 40px', md: '60px 40px' }}
                            width={{ md: '80%', lg: '80%', base: '100%' }}
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
                                        if(Number(rangeValue?.split('-')[0]) > Number(value)){
                                            setShowError(true)
                                        } else if (Number(rangeValue?.split('-')[1]) < Number(value)){
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
                                    placeholder='200'
                                />
                            </VStack>
                            {
                                showError && (
                                    Number(rangeValue?.split('-')[0]) > Number(value)
                                        ?
                                        <Text color='red' fontSize='13'>
                                            Value must be higher than {rangeValue?.split('-')[0]}
                                        </Text>
                                        : Number(rangeValue?.split('-')[1]) < Number(value)
                                            ?
                                            <Text color='red' fontSize='13'>
                                                Value must be lesser than {rangeValue?.split('-')[1]}
                                            </Text>
                                            : null
                                )
                            }
                            <Box height='30px' />
                            <HStack
                                align='flex-start'
                                width='100%'
                                marginTop='30px'
                                gap='20px'
                                flexWrap='wrap'
                                flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
                            // marginBottom='30px'
                            >
                                {
                                    fileList && fileList.slice(0, 3).map(ele => (
                                        <HStack
                                            justify='center'
                                            align='center'
                                            width={{ base: '100%', md: '250px', lg: '250px' }}
                                            borderRadius='10px'
                                            height='198px'
                                            border='1px dotted #10B6E8'
                                        >

                                            <HStack
                                                key={ele.id}
                                                bgPos='center'
                                                bgSize='contain'
                                                width='97%'
                                                bgRepeat='no-repeat'
                                                height='97%'
                                                padding='10px'
                                                justify='flex-end'
                                                align='flex-start'
                                                bgImage={{
                                                    base: `url(${ele.displayUrl})`,
                                                }}
                                            >
                                                <HStack

                                                    height='23px'
                                                    width='114px'
                                                    borderRadius='2px'
                                                    cursor='pointer'
                                                    backgroundColor='#FFF1F1'
                                                    onClick={() => deleteSelectedImage(ele.id)}
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
                                    ))
                                }
                                <input id='input_form' type='file' multiple
                                    onChange={handleFileUpload}
                                    style={{
                                        display: 'none'
                                    }}
                                />
                                <label htmlFor="input_form">
                                    <HStack
                                        id="input_form"
                                        justify='center'
                                        align='center'
                                        width={{ base: '100%', md: '250px', lg: '250px' }}
                                        backgroundColor='#F0FCFF'
                                        borderRadius='10px'
                                        height='198px'
                                        marginTop={{ base: '30px', lg: '-3px' }}
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
                                            <BsFillCloudUploadFill fill="#10B6E8" size={"30px"} />
                                            <Text
                                                color='#10B6E8'
                                                fontSize='18px'
                                                fontWeight={400}
                                            >
                                                Add product Image
                                            </Text>
                                            <Text
                                                textAlign='center'
                                                color='#10B6E8'
                                                fontSize='10px'
                                                fontWeight={500}
                                            >
                                                Please, ensure the image is clearly visible and has the right resolutions
                                            </Text>

                                        </VStack>
                                    </HStack>
                                </label>
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
                                        >₦{formatNumber(Number(selectedValue)* Number(value))}<span style={{ fontSize: '14px', color: '#9B9B9B' }}>.00</span>
                                        </Text>
                                </VStack>
                                <Button
                                    color='#fff'
                                    backgroundColor='#1EB0D9'
                                    height='56px'
                                    width={{ base: '100%', md: '300px', lg: '300px' }}
                                    onClick={() => setIsOpen(true)}
                                >
                                    Submit Transaction
                                </Button>
                            </HStack>


                        </VStack>
                    </VStack>


                )
            }

            <ConfirmModal isOpen={isOpen} setIsOpen={setIsOpen} setIsSuccessOpen={setIsSuccessOpen} isSuccessOpen={isSuccessOpen} />
            <SuccessModal isOpen={isSuccessOpen} setIsOpen={setIsSuccessOpen} />

        </Layout >
    )
}

export default TradeCard