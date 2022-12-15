import {
    Flex,
    VStack,
    Text,
    Button,
    HStack,
    Box,
    useMediaQuery,
    Image,
    FormControl,
    FormErrorMessage,
    Input,
    InputRightElement,
    InputGroup
} from "@chakra-ui/react";
import OtpInput from 'react-otp-input';
import { useState } from "react";
import { BiTime } from 'react-icons/bi'
import { verifyotp, sendOtp } from "../../public/redux/reducers/auth/thunkAction";
import { useDispatch } from "react-redux";
import { useUser } from "../../public/context/userContext";
import { useAppSelector } from "../../public/redux/store";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { FadeLoader } from "react-spinners";
import { useRouter } from "next/router";
import Countdown from 'react-countdown';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import * as Yup from 'yup';
import { useFormik } from "formik";
import { resetPassword } from "../../public/redux/reducers/auth/thunkAction";

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required("Password is required"),
    token: Yup.string().required("OTP is required")
})

const ResetPassword = () => {
    const [otp, setOtp] = useState("");
    const [showResend, setShowResend] = useState(false);
    const { email } = useUser();
    const dispatch = useDispatch();
    const toast = useToast();
    const router = useRouter();
    const [key, setKey] = useState(0);
    const [show, setShow] = useState(false);

    const { loading } = useAppSelector(
        ({ authReducer }) => authReducer
    )
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')



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
            token: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            await dispatch(resetPassword(values)).then(res => {
                console.log(values)
                if (res.meta.requestStatus === 'fulfilled') {
                    toast({
                        title: 'Password success',
                        description: "Your password has been updated successfully",
                        status: 'success',
                        duration: 4000,
                        isClosable: true,
                        position: 'top-right'
                    })
                    router.push('/Auth/login')
                }
            })
        },
    });


    return (
        <VStack
            backgroundColor='#fff'
            justify='flex-start'
            align='center'
            height='100vh'
            width='100%'
            spacing='40px'
            paddingTop='90px'

        >
            <Image src='/images/svg/logo.svg' />
            <Text
                color='#000'
                fontSize='16px'
                fontWeight={700}
                textAlign='center'
                fontFamily='Poppins'
            >
                Type the verification code we've sent to {email}
            </Text>
            <Box
            // padding={'40px'}
            >
                <OtpInput
                    value={otp}
                    onChange={otp => {
                        setFieldValue('token', otp)
                        setOtp(otp)
                    }}
                    numInputs={6}

                    inputStyle={{
                        color: 'rgba(0,0,0,5)',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        width: isLargerThan800 ? '55px' : '45px',
                        height: isLargerThan800 ? '55px' : '45px',
                        borderRadius: '7px',
                        backgroundColor: '#F7F8F9',
                        border: '1px solid rgba(0,0,0,0.1)',
                        marginLeft: isLargerThan800 ? '20px' : '10px',
                    }}
                />
                <Text
                    color={"red"}
                    pt='5px'
                    paddingLeft='20px'
                    alignSelf="flex-start" fontSize={14}>
                    {errors.token}
                </Text>

                <FormControl
                    pt='20px'
                    isInvalid={!!errors.password && touched.password}
                >
                    <VStack
                        spacing='0px'
                        align='flex-start'
                        width='100%'
                    >
                        <Text
                            fontSize='16px'
                            color='#000'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Password</Text>
                        <InputGroup>
                            <Input
                                color='rgba(0,0,0,5)'
                                fontWeight='bold'
                                fontSize='15px'
                                paddingLeft='20px'
                                name='password'
                                type={show ? 'text' : 'password'}
                                placeholder='Your password'
                                width='100%'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                height='60px'
                                borderRadius='10px'
                                backgroundColor='#F7F8F9'
                                border='1px solid rgba(0,0,0,0.4)'
                            />
                            <InputRightElement
                                onClick={() => setShow(!show)} padding={'30px'}
                                children={<Text>{show ? <AiFillEye size='20px' fill='#69ACD1' /> : <AiFillEyeInvisible size='20px' fill='#69ACD1' />}</Text>}
                            />
                        </InputGroup>

                    </VStack>
                    <FormErrorMessage
                        color={"red"}
                        alignSelf="flex-start" fontSize={14}>
                        {errors.password}
                    </FormErrorMessage>
                </FormControl>
            </Box>

            <Button
                outline='none'
                color='#fff'
                isLoading={loading === 'pending' ? true : false}
                onClick={handleSubmit}
                fontSize='16px'
                fontWeight={700}
                width={{
                    base: '90%',
                    md: '440px',
                    lg: '440px'
                }} height='60px' borderRadius='10px' backgroundColor='#1EB0D9' border='none'
            >
                Reset Password
            </Button>

        </VStack>
    )
}

export default ResetPassword