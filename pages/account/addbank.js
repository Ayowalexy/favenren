import { Box, Select, Text, VStack, HStack, Input, useToast } from "@chakra-ui/react";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getBanks, verifyAccount, getUserBankAccount } from "../../public/redux/reducers/cards/thunkAction";
import { useEffect } from "react";
import { useAppSelector } from "../../public/redux/store";
import { VButton } from ".";
import axios from "axios";
import { getToken } from "../../public/hooks/UseAxios";
import config from "../../config/api";

const validationSchema = Yup.object().shape({
    account_number: Yup.string().required('Enter account number'),
    bank_code: Yup.string().required('Select a bank'),
    bank_name: Yup.string().required('Enter bank name')
})


const AddUserBank = () => {

    const toast = useToast()
    const dispatch = useDispatch();
    const { allBanks = [], isLoading, loading } = useAppSelector(
        ({ cardReducer }) => cardReducer
    )
    console.log(loading)
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
            bank_code: "",
            account_number: "",
            bank_name: ""
        },
        validationSchema,
        onSubmit: async (values) => {
            const data = {
                account_number: "1473741696",
                bank_code: "044",
                bank_name: 'Access Bank'
            }

            const data_2 = { "bank_code": values.bank_code.trim(), "bank_name": values.bank_name.trim(), "account_number": values.account_number.toString() }
            // const form = new FormData()
            // form.append('account_number', values.account_number.toString())
            // form.append('bank_name', values.bank_name.toString())
            // form.append('bank_code', values.bank_code.toString())

            await dispatch(verifyAccount(values)).then(res => {
                console.log(data)
                if (res.meta.requestStatus === 'fulfilled') {
                     toast({
                        title: 'Bank account verified and added successfully',
                        description: "Bank not found",
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                        position: 'top-right'
                    })
                    dispatch(getUserBankAccount())
                } else {
                    toast({
                        title: 'Failed.',
                        description: "Bank not found",
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                        position: 'top-right'
                    })
                }
            })

           
        },
    });

    useEffect(() => {
        dispatch(getBanks())
    }, [])


    return (
        <Box>
            <VStack
                align='flex-start'
                margin={{ base: '0px', md: '30px 20px', lg: '30px 20px' }}
                width={{ base: '100%', md: '80%', lg: '80%' }}
            >

                <Text
                    fontSize='16px'
                    color='#333F51'
                    paddingTop='20px'
                    fontWeight={500}
                    fontFamily='Poppins'
                >Select bank</Text>
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
                        const value = e.target.value;
                        const bank_name = value.split('|')[0]
                        const bank_code = value.split('|')[1]

                        setFieldValue('bank_name', bank_name)
                        setFieldValue('bank_code', bank_code.trimStart())
                    }}
                    placeholder='Select bank'>
                    {
                        allBanks?.map(element => (
                            <option key={element.id} value={`${element.name} | ${element.code}`}>{element.name}</option>
                        ))
                    }
                </Select>
            </VStack>

            {
                !!errors.bank_name && touched.bank_name && (
                    <Text
                        fontSize='13px'
                        color='red'
                        fontWeight={400}
                        textAlign='left'
                        alignSelf='flex-start'
                        fontFamily='Poppins'
                    >
                        {errors.bank_name}
                    </Text>
                )
            }



            <VStack
                align='flex-start'
                margin={{ base: '0px', md: '30px 20px', lg: '30px 20px' }}
                width={{ base: '100%', md: '80%', lg: '80%' }}
            >

                <Text
                    fontSize='16px'
                    color='#333F51'
                    paddingTop='20px'
                    fontWeight={500}
                    fontFamily='Poppins'
                >Account number</Text>
                <Input
                    color='#8896AB'
                    fontWeight={400}
                    fontSize='15px'
                    width='100%'
                    height='60px'
                    type='number'
                    name='account_number'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    borderRadius='10px'
                    backgroundColor='#F7F8F9'
                    outline='none'
                    paddingLeft='20px'
                    border='1px solid rgba(0,0,0,0.1)'
                    placeholder="Enter account number"
                />
            </VStack>
            {
                !!errors.account_number && touched.account_number && (
                    <Text
                        fontSize='13px'
                        color='red'
                        fontWeight={400}
                        textAlign='left'
                        alignSelf='flex-start'
                        fontFamily='Poppins'
                    >
                        {errors.account_number}
                    </Text>
                )
            }

            <VButton
                isLoading={loading === 'pending' ? true : false}
                onClick={handleSubmit}
            >
                Add bank
            </VButton>


        </Box>
    )
}

export default AddUserBank