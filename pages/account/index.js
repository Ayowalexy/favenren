import Layout from "../../public/components/Layout";
import { Box, Text, VStack, HStack, useTheme, Tabs, TabList, TabPanels, Tab, TabPanel, Select, Input, Button, useToast } from "@chakra-ui/react";
import { useAppSelector } from "../../public/redux/store";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { updatePassword } from "../../public/redux/reducers/auth/thunkAction";
import { useDispatch } from "react-redux";
import { getBanks, getUserBankAccount } from "../../public/redux/reducers/cards/thunkAction";
import AddUserBank from "./addbank";



const validationSchema = Yup.object().shape({
    old_password: Yup.string().required('Old password is required'),
    password: Yup.string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required("Password is required"),
    confirm_password: Yup.string().test(
        "passwords-match",
        "Passwords must match",
        function (value) {
            return this.parent.password === value;
        }
    ),
})

 export const VButton = ({ children, isLoading, onClick }) => {
    const theme = useTheme();
    const { text_2, btn } = theme.colors.brand;

    return (

        <Button
            marginTop='40px'
            alignSelf='center'
            color='#fff'
            onClick={onClick}
            isLoading={isLoading}
            backgroundColor={btn}
            height='56px'
            fontWeight={500}
            width={{ base: '100%', md: '300px', lg: '300px' }}
        >
            {children}
        </Button>
    )
}

const IIput = ({ label, name, value }) => {
    const [val, setVal] = useState(value)
    return (
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
            >{label}</Text>
            <Input
                color='#8896AB'
                fontWeight={400}
                fontSize='15px'
                width='100%'
                value={val}
                height='60px'
                onChange={e => setVal(e.target.value)}
                borderRadius='10px'
                backgroundColor='#F7F8F9'
                outline='none'
                paddingLeft='20px'
                border='1px solid rgba(0,0,0,0.1)'
                placeholder={name}
            />
        </VStack>
    )
}

const IIput2 = ({ label, name, value, handleChange, handleBlur, el_name }) => {
    const [val, setVal] = useState(value)
    return (
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
            >{label}</Text>
            <Input
                color='#8896AB'
                fontWeight={400}
                fontSize='15px'
                width='100%'
                value={val}
                name={el_name}
                height='60px'
                onBlur={handleBlur}
                onChange={handleChange}
                borderRadius='10px'
                backgroundColor='#F7F8F9'
                outline='none'
                paddingLeft='20px'
                border='1px solid rgba(0,0,0,0.1)'
                placeholder={name}
            />
        </VStack>
    )
}

const Account = () => {
    const theme = useTheme();
    const { text_2, btn } = theme.colors.brand;
    const dispatch = useDispatch();
    const toast = useToast();
    const { user: { username, name, email, phone }, loading } = useAppSelector(
        ({ authReducer }) => authReducer
    )

    const { allBanks, isLoading, bankAccount: { account_number, account_name, bank_name }, gettingUserBankAccount } = useAppSelector(
        ({ cardReducer }) => cardReducer
    )

    useEffect(() => {
        dispatch(getUserBankAccount())
    }, [])

    console.log(account_number, account_name)

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            old_password: '',
            password: '',
            confirm_password: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            const data = {
                old_password: values.old_password,
                password: values.password
            }
            await dispatch(updatePassword(data)).then(res => {
                if (res.meta.requestStatus === 'fulfilled') {
                    toast({
                        title: 'Success',
                        description: "Password updated successfully",
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                        position: 'top-right'
                    })
                }
            })
        },
    });



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
                        Account
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        Check out the current rate of different gift cards in Naira using Faveremit's gift card rate calculator.
                    </Text>
                </VStack>

                <Box>
                    <Tabs>
                        <TabList
                            marginTop='30px'
                            backgroundColor='#F2F2F2'
                            height='75px'
                        >
                            <Tab
                                _selected={{ color: '#10B6E8', borderBottom: '3px solid #10B6E8' }}
                                fontSize={{ base: '14px', lg: '24px', md: '24px' }}
                                fontWeight={500}
                                color='#000'
                                marginRight={{ base: '20px', lg: '50px', md: '50px' }}
                                fontFamily='Poppins'
                            >Personal</Tab>
                            <Tab
                                _selected={{ color: '#10B6E8', borderBottom: '3px solid #10B6E8' }}
                                fontSize={{ base: '14px', lg: '24px', md: '24px' }}
                                fontWeight={500}
                                color='#000'
                                marginRight={{ base: '20px', lg: '50px', md: '50px' }}
                                fontFamily='Poppins'
                            >Bank Account</Tab>
                            <Tab
                                _selected={{ color: '#10B6E8', borderBottom: '3px solid #10B6E8' }}
                                fontSize={{ base: '14px', lg: '24px', md: '24px' }}
                                fontWeight={500}
                                color='#000'
                                fontFamily='Poppins'
                            >Security</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <VStack
                                    margin={{ base: '0px', md: '30px 20px', lg: '30px 20px' }}
                                    align='flex-start'
                                    width={{ base: '100%', md: '80%', lg: '80%' }}
                                >
                                    <HStack
                                        spacing='30px'
                                    >
                                        <Box
                                            backgroundColor='#D9D9D9'
                                            borderRadius='50%'
                                            height={{ base: '90px', lg: '145.48px', md: '145.48px' }}
                                            width={{ base: '90px', lg: '145.48px', md: '145.48px' }}
                                        />
                                        <VStack
                                            align='flex-start'
                                        >
                                            <Text
                                                color='#000'
                                                fontSize='24px'
                                                fontWeight={500}
                                            >{name}</Text>
                                            <Text
                                                color='#10B6E8'
                                                fontSize='18px'
                                                fontWeight={500}
                                            >@{username}</Text>
                                        </VStack>
                                    </HStack>

                                    <IIput
                                        label='Full name'
                                        name='full name'
                                        value={name}
                                    />
                                    <IIput
                                        label='Email'
                                        name='email'
                                        value={email}
                                    />
                                    <IIput
                                        label='phone'
                                        name='phone'
                                        value={phone}
                                    />

                                    <HStack align='flex-start'>
                                        <VButton>
                                            Update Profile
                                        </VButton>
                                    </HStack>

                                </VStack>
                            </TabPanel>
                            <TabPanel>
                                {
                                    account_name && account_number ? (
                                        <VStack
                                            align='flex-start'
                                            margin={{ base: '0px', md: '30px 20px', lg: '30px 20px' }}
                                            width={{ base: '100%', md: '80%', lg: '80%' }}
                                        >
                                            <IIput
                                                label='Account Number'
                                                name='Account Number'
                                                value={account_number}

                                            />
                                            <IIput
                                                label='Bank'
                                                name='Bank'
                                                value={bank_name}
                                            />
                                            <IIput
                                                label='Account Holder’s Name'
                                                name='name'
                                                value={account_name}
                                            />

                                            <HStack align='flex-start'>
                                                <VButton>
                                                    Update Bank details
                                                </VButton>
                                            </HStack>
                                        </VStack>
                                    )
                                        :
                                        <AddUserBank />
                                }
                            </TabPanel>
                            <TabPanel>
                                <VStack
                                    align='flex-start'
                                    margin={{ base: '0px', md: '30px 20px', lg: '30px 20px' }}
                                    width={{ base: '100%', md: '80%', lg: '80%' }}
                                >
                                    <IIput2
                                        label='Current Password'
                                        name='Current Password'
                                        handleBlur={handleBlur}
                                        handleChange={handleChange}
                                        el_name='old_password'
                                    />
                                    {
                                        errors.old_password && (
                                            <Text color='red' fontSize='13px'>
                                                {errors.old_password}
                                            </Text>
                                        )
                                    }
                                    <IIput2
                                        label='New Password'
                                        name='New Password'
                                        handleBlur={handleBlur}
                                        handleChange={handleChange}
                                        el_name='password'
                                    />
                                    {
                                        errors.password && (
                                            <Text color='red' fontSize='13px'>
                                                {errors.password}
                                            </Text>
                                        )
                                    }
                                    <IIput2
                                        label='Confirm New Password'
                                        name='new password again'
                                        handleBlur={handleBlur}
                                        handleChange={handleChange}
                                        el_name='confirm_password'
                                    />
                                    {
                                        errors.confirm_password && (
                                            <Text color='red' fontSize='13px'>
                                                {errors.confirm_password}
                                            </Text>
                                        )
                                    }

                                    <HStack align='flex-start'>
                                        <VButton onClick={handleSubmit} isLoading={loading === 'pending' ? true : false}>
                                            Update Password
                                        </VButton>
                                    </HStack>
                                </VStack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
        </Layout>
    )
}

export default Account