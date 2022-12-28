import Layout from "../../public/components/Layout";
import { Box, Text, HStack, VStack, useTheme, Image, Input, Button } from "@chakra-ui/react";
import { useUser } from "../../public/context/userContext";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import Select from 'react-select';
import { buyElectricity, getElectricity } from "../../public/redux/reducers/bills/thunkAction";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../public/redux/store";
import { Preloader } from "../Auth/otp";
import { useEffect } from "react";
import { formatNumber } from "../../public/components/utils/formatter";
import { useFormik } from "formik";
import * as Yup from 'yup';

import { useToast } from "@chakra-ui/react";

const validationSchema = Yup.object().shape({
    meter_number: Yup.string().required('Meter number is required'),
    service_id: Yup.string().required('Provider is required'),
    amount: Yup.string().required('Amount is required'),
    meter_type: Yup.string().required('Meter Type is required')
})



const BillsPayment = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState('');
    const { page: { name, description } } = useUser();
    const { text_2, btn, primary } = theme.colors.brand;
    const [options, setOptions] = useState([]);
    const [selectedData, setSelectedData] = useState({});
    const toast = useToast();

    const dispatch = useDispatch();

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
        isSubmitting,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            meter_number: '',
            service_id: '',
            amount: '',
            meter_type: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log(values)
            await dispatch(buyElectricity(values)).then(res => {
                if(res.meta.requestStatus === 'fulfilled'){
                    toast({
                        title: 'Success',
                        description: `You just paid for your electricity bill`,
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                        position: 'top-right'
                    })
                }
            })
        },
    });

   

    const { loading, isBuying, eletricity } = useAppSelector(
        ({ billsReducer }) => billsReducer
    )

    useEffect(() => {
        dispatch(getElectricity())
    }, [])

   

    useEffect(() => {
        if (eletricity.length) {
            const data = eletricity.map(element => {
                return {
                    value: element.service_id,
                    label: <HStack align='center' justify='flex-start' gap='10px'>
                        <Image src={element.image} width='51px' height='42px' />
                        <Text fontSize={'16px'} textTransform='capitalize' fontWeight={600} color='#000' fontFamily='Poppins'>{element.location}</Text>
                    </HStack>
                }
            })
            setOptions(data)
        }
    }, [eletricity])


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
                                    {
                                        name === 'Airtime/Data'
                                            ? `${name} Payment`
                                            : `Pay ${name}s`
                                    }
                                </Text>
                                <Text
                                    color={text_2}
                                    fontSize={'14px'}
                                    fontWeight={400}
                                >
                                    {description}
                                </Text>
                            </VStack>

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
                                    >Choose Provider</Text>
                                    <Select
                                        options={options}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                              ...baseStyles,
                                              backgroundColor: '#F7F8F9',
                                             
                                            }),
                                          }}
                                        onChange={(e) => {
                                            const data = eletricity.find(ele => ele.service_id === e.value);
                                            setFieldValue('service_id', data.service_id)
                                            setSelectedData(data)
                                        }}
                                        className='select_bill' />
                                </VStack>
                                {!!errors.service_id && touched.service_id && (
                                    <Text color='red'>{errors.service_id}</Text>
                                )}

                                {
                                    Boolean(selectedData?.service_id) && (
                                        <>
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
                                                >Meter Number</Text>
                                                <Input
                                                    color='#8896AB'
                                                    fontWeight={400}
                                                    fontSize='15px'
                                                    width='100%'
                                                    height='60px'
                                                    name='meter_number'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    borderRadius='10px'
                                                    backgroundColor='#F7F8F9'
                                                    outline='none'
                                                    border='1px solid rgba(0,0,0,0.1)'
                                                    placeholder='Enter meter number'
                                                />
                                            </VStack>

                                            {!!errors.meter_number && touched.meter_number && (
                                                <Text color='red'>{errors.meter_number}</Text>
                                            )}

                                            <Text
                                                fontSize='16px'
                                                color='#333F51'
                                                paddingTop='20px'
                                                fontWeight={500}
                                                fontFamily='Poppins'
                                            >Meter Type</Text>

                                            <HStack
                                                gap='20px'
                                                align='center'
                                                justify='center'
                                            >
                                                <VStack
                                                    justify='center'
                                                    align='center'
                                                    width='185px'
                                                    height='56px'
                                                    backgroundColor='#fff'
                                                    borderRadius='8px'
                                                    cursor='pointer'
                                                    onClick={() => {
                                                        setFieldValue('meter_type', 'prepaid')
                                                        setSelected('prepaid')
                                                    }}
                                                    border={`2px solid ${selected === 'prepaid' ? '#10B6E8' : '#BBC3CF'}`}
                                                >
                                                    <Text
                                                        color={selected === 'prepaid' ? '#10B6E8' : '#BBC3CF'}
                                                        fontFamily='Poppins'
                                                        fontWeight={400}
                                                        fontSize='20px'
                                                    >Prepaid</Text>
                                                </VStack>

                                                <VStack
                                                    justify='center'
                                                    align='center'
                                                    width='185px'
                                                    height='56px'
                                                    cursor='pointer'
                                                    onClick={() => {
                                                        setFieldValue('meter_type', 'postpaid')
                                                        setSelected('postpaid')
                                                    }}
                                                    backgroundColor='#fff'
                                                    borderRadius='8px'
                                                    border={`2px solid ${selected === 'postpaid' ? '#10B6E8' : '#BBC3CF'}`}
                                                >
                                                    <Text
                                                        color={selected === 'postpaid' ? '#10B6E8' : '#BBC3CF'}
                                                        fontFamily='Poppins'
                                                        fontWeight={400}
                                                        fontSize='20px'
                                                    >Postpaid</Text>
                                                </VStack>
                                            </HStack>
                                            
                                            {!!errors.meter_type && touched.meter_type && (
                                                <Text color='red'>{errors.meter_type}</Text>
                                            )}


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
                                                >Amount</Text>
                                                <Input
                                                    color='#8896AB'
                                                    fontWeight={400}
                                                    fontSize='15px'
                                                    width='100%'
                                                    height='60px'
                                                    name='amount'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    borderRadius='10px'
                                                    backgroundColor='#F7F8F9'
                                                    outline='none'
                                                    border='1px solid rgba(0,0,0,0.1)'
                                                    placeholder='Enter amount'
                                                />
                                            </VStack>
                                            
                                             {!!errors.amount && touched.amount && (
                                                <Text color='red'>{errors.amount}</Text>
                                            )}
                                        </>
                                    )
                                }



                                <HStack width='100%' align='flex-end' justify='flex-end' marginTop={30}>
                                    <Button
                                        backgroundColor={primary}
                                        color='#fff'
                                        fontWeight='400'
                                        borderRadius='7px'
                                        height='40px'
                                        isLoading={isBuying === 'pending' ? true : false}
                                        width='210px'
                                        onClick={handleSubmit}
                                    >Pay Now</Button>
                                </HStack>
                            </VStack>



                        </Box>
                    )
            }
        </Layout>
    )
}

export default BillsPayment