import { Box, Text, HStack, VStack, useTheme, Image, Select, Input, Button } from "@chakra-ui/react";
import Layout from "../../public/components/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../public/redux/store";
import { Preloader } from "../Auth/otp";
import { setSingleCrypto } from "../../public/redux/reducers/cards";
import { getCard, getCryto } from "../../public/redux/reducers/cards/thunkAction";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { BsFillCloudUploadFill } from 'react-icons/bs'
import { useFileUpload } from "../../public/hooks/fileUpload";
import { AiFillCloseCircle } from 'react-icons/ai'

const validationSchema = Yup.object().shape({
    usd_amount: Yup.string().required("USD Amount is required")
})

const TradeCrypto = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState("Bitcoin")
    const { text_2 } = theme.colors.brand;
    const [val_, setValue] = useState('')
    const [crypto_amount, set_crypto_amount] = useState(0)
    const router = useRouter();
    const dispatch = useDispatch();

    const { deleteSelectedImage, fileList, handleFileUpload } =
        useFileUpload(true);


    const { cryptos, loading, singleCrypto } = useAppSelector(
        ({ cardReducer }) => cardReducer
    )

    useEffect(() => {
        dispatch(getCryto())
    }, [])

    useEffect(() => {
       if(fileList.length){
        const data = {
            crypto_amount,
            usd_amount: values.usd_amount,
            crypto_wallet_type_id: singleCrypto.crypto_wallet_type_id,
            crypto_id: singleCrypto.crypto_id,
            ngn_amount: 700 * Number(values.usd_amount),
            proof: fileList[0].file
        }
       }
    }, [singleCrypto, crypto_amount, fileList])

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            usd_amount: ""
        },
        validationSchema,
        onSubmit: async (values) => {
            router.push(`/trade-crypto/${selected.toLowerCase()}`)
        },
    });


    return (
        <Layout>
            {
                loading === 'pending'
                    ? <Preloader />
                    : (
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
                                {cryptos?.map((element, idx) => (
                                    <Box key={idx}>
                                        <HStack

                                            cursor='pointer'
                                            onClick={() => {
                                                setSelected(element.name)
                                                const data = {
                                                    crypto_id: element.id,
                                                    crypto_wallet_type_id: element.service_id
                                                }
                                                dispatch(setSingleCrypto(data))
                                            }}
                                            backgroundColor='#fff'
                                            height='100px'
                                            borderRadius='15px'
                                            width={{ base: '352px', lg: '352px', md: '352px' }}
                                            transition='ease all 300ms'
                                            paddingLeft='20px'
                                            border={`1px solid  ${element.name === selected ? '#10B6E8' : "#DFE6E9"}}`}
                                        >
                                            <Image src={element.icon} width='70px' height='70px' />
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
                                        value={val_}
                                        width='100%'
                                        height='60px'

                                        name='usd_amount'
                                        onBlur={handleBlur}
                                        onChange={(event) => {
                                            event.preventDefault()
                                            const { value } = event.target
                                            const last = value[value?.length - 1]
                                            if (Number(last)) {

                                                setValue(value)
                                                handleChange(event)
                                                const val = values.usd_amount;
                                                const amunt_ = Number(val) / 10000
                                                set_crypto_amount(amunt_)

                                            }

                                        }}
                                        borderRadius='10px'
                                        backgroundColor='#F7F8F9'
                                        outline='none'
                                        paddingLeft='20px'
                                        border='1px solid rgba(0,0,0,0.1)'
                                        placeholder="200"
                                    />
                                </VStack>
                                {
                                    errors.usd_amount && (
                                        <Text
                                            fontSize='13px'
                                            color='red'
                                            fontWeight={400}
                                            textAlign='left'
                                            alignSelf='flex-start'
                                            fontFamily='Poppins'
                                        >
                                            {errors.usd_amount}
                                        </Text>
                                    )
                                }
                                <Box height='20px' />
                                <HStack
                                    align='flex-start'
                                    width='100%'
                                    flexDirection={{base: 'column', md: 'row', lg: 'row'}}
                                    marginBottom='30px'
                                >
                                    <HStack
                                        justify='center'
                                        align='center'
                                        width={{ base: '100%', md: '250px', lg: '250px' }}
                                        borderRadius='10px'
                                        height='198px'
                                        border='1px dotted #10B6E8'
                                    >
                                        {
                                            fileList && fileList.map(ele => (
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
                                            ))
                                        }

                                    </HStack>
                                    <input id='input_form' type='file'
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
                                            {crypto_amount}BTC
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
                                            fontSize={{ base: "30px", md: '66px', lg: '66px' }}
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
                                    onClick={handleSubmit}
                                    width={{ base: '100%', md: '300px', lg: '300px' }}
                                >
                                    Proceed
                                </Button>
                            </VStack>
                        </Box>
                    )
            }
        </Layout>
    )
}

export default TradeCrypto