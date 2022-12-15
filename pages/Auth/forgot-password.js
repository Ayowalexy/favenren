import { Flex, HStack, VStack, Text, Button, Image, FormControl, FormErrorMessage } from "@chakra-ui/react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../public/redux/store";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Input } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { forgotPassword } from "../../public/redux/reducers/auth/thunkAction";
import { useUser } from "../../public/context/userContext";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required')
})

const ForgotPassword = () => {
    const [value, setValue] = useState();
    const router = useRouter();
    const dispatch = useDispatch();
    const toast = useToast();
    const { setEmail } = useUser()

    const { loading } = useAppSelector(
        ({ authReducer }) => authReducer
    )

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            await dispatch(forgotPassword(values.email)).then(res => {
                if (res.meta.requestStatus === 'fulfilled') {
                    toast({
                        title: 'OTP sent',
                        description: "We've sent instructions on how to reset your password",
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top-right'
                    })
                    setEmail(values.email)
                    router.push('/Auth/reset-password')
                }
            })
        },
    });


    return (
        <VStack
            align='center'
            justify='center'
            backgroundColor='#F7F8F9'
            width='100%'
            height='100vh'
        >
            <VStack
                align='center'
                justify='center'
                backgroundColor='#fff'
                width={{
                    base: '90%', md: '550px', lg: '550px'
                }}
                height='500px'
                borderRadius='15px'
            >
                <Image src="/images/svg/logo.svg" />
                <Text
                    color='#000'
                    fontSize='20px'
                    fontWeight={700}
                    paddingTop="10px"
                    fontFamily='Poppins'
                >
                    Recover password
                </Text>
                <Text
                    color='#000'
                    fontSize='14px'
                    textAlign='center'
                    fontWeight={400}
                    fontFamily='Poppins'
                >
                    Enter your email to recover your forgotten password
                </Text>

                <FormControl
                    width='80%'
                    pt='20px'
                    pb='20px'
                    isInvalid={!!errors.email && touched.email}
                >
                    <VStack
                        spacing='5px'
                        align='flex-start'
                        width='100%'
                    >
                        <Text
                            fontSize='16px'
                            color='#000'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Email Address</Text>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight={500}
                            fontSize='15px'
                            paddingLeft='20px'
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='youremail@gmail.com'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            border='1px solid rgba(0,0,0,0.4)'
                        />

                    </VStack>
                    <FormErrorMessage
                        color={"red"}
                        alignSelf="flex-start" fontSize={14}>
                        {errors.email}
                    </FormErrorMessage>
                </FormControl>

                <Button
                    outline='none'
                    color='#fff'
                    isLoading={loading === 'pending' ? true : false}
                    fontSize='16px'
                    fontWeight={700}
                    onClick={handleSubmit}
                    width={{
                        base: '90%', md: '80%', lg: '80%'
                    }}
                    height='60px' borderRadius='10px' backgroundColor='#1EB0D9' border='none'
                >Send Recovery text</Button>

                <Link href='/Auth/login'>
                    <Text
                        color='#69ACD1'
                        fontSize='14px'
                        fontWeight={500}
                        paddingTop='20px'
                        fontFamily='Poppins'
                    >
                        Go back to Login
                    </Text>
                </Link>
            </VStack>
        </VStack>
    )
}

export default ForgotPassword