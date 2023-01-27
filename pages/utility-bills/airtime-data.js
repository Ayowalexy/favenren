import Layout from "../../public/components/Layout";
import { Box, Text, HStack, VStack, useTheme, Image, Input, Button } from "@chakra-ui/react";
import { useUser } from "../../public/context/userContext";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import Select from 'react-select';
import { getNetworkbills, getNetworkdata, buyData, buyAirtime } from "../../public/redux/reducers/bills/thunkAction";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../public/redux/store";
import { Preloader } from "../Auth/otp";
import { useEffect } from "react";
import { formatNumber } from "../../public/components/utils/formatter";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useToast } from "@chakra-ui/react";

const validationSchema = Yup.object().shape({
    number: Yup.string().required('Phone number is required'),
    service_id: Yup.string().required('Network is required'),
    amount: Yup.string().required('Amount is required')
})



const BillsPayment = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState('');
    const { page: { name, description } } = useUser();
    const { text_2, btn, primary } = theme.colors.brand;
    const [options, setOptions] = useState([]);
    const [type, setType] = useState("");
    const [selectedData, setSelectedData] = useState({});
    const [dataPlans, setDataPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState({});
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
            number: '',
            service_id: '',
            amount: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            if (type === 'airtime') {
                await dispatch(buyAirtime(values)).then(res => {
                    if (res.meta.requestStatus === 'fulfilled') {
                        toast({
                            title: 'Success',
                            description: `You just recharged ₦${formatNumber(values.amount)}`,
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                            position: 'top-right'
                        })
                    } 
                })
            } else if (type === 'data-bundle') {
                const data = {
                    ...values,
                    variation_code: selectedPlan?.variation_code,
                    variation_name: selectedPlan?.name
                }
                await dispatch(buyData(data)).then(res => {
                    if (res.meta.requestStatus === 'fulfilled') {
                        toast({
                            title: 'Success',
                            description: `You just recharged ₦${formatNumber(values.amount)}`,
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                            position: 'top-right'
                        })
                    } 
                })

            }
        },
    });

    const billsOptions = [
        {
            value: 'data-bundle', label: 'Data Bundle'
        },
        {
            value: 'airtime', label: 'Airtime'
        },
    ]

    const { networks, loading, networkData, isLoading, isBuying } = useAppSelector(
        ({ billsReducer }) => billsReducer
    )



    useEffect(() => {
        dispatch(getNetworkbills())
    }, [])

    useEffect(() => {
        if (selectedData?.data_service_id) {
            dispatch(getNetworkdata({ billerCode: selectedData?.data_service_id }))
        }
    }, [selectedData])

    useEffect(() => {
        if (networks.length) {
            const data = networks.map(element => {
                return {
                    value: element.data_service_id,
                    label: <HStack align='center' justify='flex-start' gap='10px'>
                        <Image src={element.image} width='51px' height='42px' />
                        <Text fontSize={'16px'} fontWeight={600} color='#000' fontFamily='Poppins'>{element.Network}</Text>
                    </HStack>
                }
            })
            setOptions(data)
        }
    }, [networks])

    useEffect(() => {
        if (networkData?.content) {
            const data = networkData.content.variations.map(element => {
                return {
                    value: element.variation_code,
                    label: <HStack align='center' justify='space-between' gap='10px'>
                        <Text fontSize={'16px'} fontWeight={600} color='#000' fontFamily='Poppins'>{element.name}</Text>
                        <Text fontSize={'16px'} fontWeight={600} color='#000' fontFamily='Poppins'>₦{formatNumber(element.variation_amount)}</Text>
                    </HStack>
                }
            })
            setDataPlans(data)
        }
    }, [networkData])

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
                                    >Choose Network</Text>
                                    <Select
                                        options={options}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                              ...baseStyles,
                                              backgroundColor: '#F7F8F9',
                                             
                                            }),
                                          }}
                                        onChange={(e) => {
                                            const data = networks.find(ele => ele.data_service_id === e.value);
                                            setFieldValue('service_id', data.service_id)
                                            setSelectedData(data)
                                        }}
                                        className='select_bill' />
                                </VStack>
                                {!!errors.service_id && touched.service_id && (
                                    <Text color='red'>{errors.service_id}</Text>
                                )}

                                {
                                    Boolean(selectedData?.data_service_id) && (
                                        <VStack
                                            spacing='5px'
                                            align='flex-start'
                                            width='100%'

                                        >
                                            <Text
                                                fontSize='16px'
                                                color='#333F51'
                                                fontWeight={500}
                                                marginTop={'15px'}
                                                fontFamily='Poppins'
                                            >Service Category</Text>
                                            <Select
                                                options={billsOptions}
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                      ...baseStyles,
                                                      backgroundColor: '#F7F8F9',
                                                     
                                                    }),
                                                  }}
                                                onChange={(e) => setType(e.value)}
                                                className='select_bill' />


                                        </VStack>
                                    )
                                }

                                {
                                    Boolean(type) && (
                                        <>
                                            {
                                                type === 'airtime'
                                                    ? (
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
                                                                    placeholder='200'
                                                                />
                                                            </VStack>
                                                            {!!errors.amount && touched.amount && (
                                                                <Text color='red'>{errors.amount}</Text>
                                                            )}
                                                        </>

                                                    ) : (
                                                        <>
                                                            <VStack
                                                                spacing='5px'
                                                                align='flex-start'
                                                                width='100%'

                                                            >

                                                                <Text
                                                                    fontSize='16px'
                                                                    color='#333F51'
                                                                    fontWeight={500}
                                                                    marginTop={'15px'}
                                                                    fontFamily='Poppins'
                                                                >Data Plan</Text>
                                                                <Select
                                                                    options={dataPlans}
                                                                    styles={{
                                                                        control: (baseStyles, state) => ({
                                                                          ...baseStyles,
                                                                          backgroundColor: '#F7F8F9',
                                                                         
                                                                        }),
                                                                      }}
                                                                    isLoading={isLoading === 'pending' ? true : false}
                                                                    onChange={(e) => {
                                                                        const data = networkData?.content?.variations?.find(ele => ele.variation_code === e.value)
                                                                        setFieldValue('amount', data?.variation_amount)
                                                                        setSelectedPlan(data)
                                                                    }}
                                                                    className='select_bill' />


                                                            </VStack>
                                                            {!!errors.amount && touched.amount && (
                                                                <Text color='red'>{errors.amount}</Text>
                                                            )}
                                                        </>
                                                    )
                                            }
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
                                                >Phone Number</Text>
                                                <Input
                                                    color='#8896AB'
                                                    fontWeight={400}
                                                    fontSize='15px'
                                                    width='100%'
                                                    height='60px'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name='number'
                                                    borderRadius='10px'
                                                    backgroundColor='#F7F8F9'
                                                    outline='none'
                                                    border='1px solid rgba(0,0,0,0.1)'
                                                    placeholder='200'
                                                />
                                            </VStack>
                                            {!!errors.number && touched.number  && (
                                                <Text color='red'>{errors.number}</Text>
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