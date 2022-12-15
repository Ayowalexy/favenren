import AuthLayout from '../../public/components/AuthLayout'
import { Text, Flex, HStack, VStack, InputGroup, Input, InputRightElement, Button, Checkbox, Image, Box, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible, AiFillInfoCircle } from 'react-icons/ai'
import { useEffect, useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReactFlagsSelect from "react-flags-select";
import '../../styles/Home.module.css'
import { checksuername, signUp, checkreferer } from '../../public/redux/reducers/auth/thunkAction'
import { useSelector, useDispatch } from 'react-redux';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import SyncLoader from "react-spinners/SyncLoader";
import { useAppSelector } from '../../public/redux/store'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react';
import { useUser } from '../../public/context/userContext'
import { useRouter } from 'next/router';


import Link from 'next/link';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Enter phone number'),
    email: Yup.string().email().required('Email is required'),
    username: Yup.string().required('Enter username'),
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



const Signup = () => {
    const [value, setValue] = useState();
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false)
    const [selected, setSelected] = useState('NG');
    const dispatch = useDispatch();
    const router = useRouter();
    const toast = useToast();
    const { setEmail } = useUser();

    const { message, isChecking, loading, isCheckingRef, msg } = useAppSelector(
        ({ authReducer }) => authReducer
    )

    const handleCheck = async (event) => {
        const { value } = event.target;
        dispatch(checksuername(value))
    }

    const handleCheckRef = async (event) => {
        const { value } = event.target;
        dispatch(checkreferer(value))
    }


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
            name: "",
            email: "",
            phone: "",
            username: "",
            password: "",
            confirm_password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            await dispatch(signUp(values)).then(res => {
                console.log(values)
                if (res.meta.requestStatus === 'fulfilled') {
                    setEmail(values.email)
                    toast({
                        title: 'Account created.',
                        description: "Check your email, we've sent you an OTP",
                        status: 'success',
                        duration: 4000,
                        isClosable: true,
                        position: 'top-right'
                    })
                    router.push('/Auth/otp')
                }
            })
        },
    });

    return (
        <AuthLayout>
            <VStack
                width={{
                    base: '90%', md: '60%', lg: '60%'
                }}
                spacing='30px'
                align='center'
                justify='center'
                marginBottom='100px'
                height='fit-content'
            >
                <Image src='/images/svg/logo.svg' paddingTop='700px' />
                <Text
                    color='#000'
                    fontSize='20px'
                    fontWeight={700}
                    fontFamily='Poppins'


                >
                    Create an account, it's free
                </Text>



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
                    >Country</Text>
                    <ReactFlagsSelect
                        selected={selected}
                        fullWidth={true}
                        className='select_country'
                        onSelect={(code) => setSelected(code)}
                    />


                </VStack>

                <FormControl
                    isInvalid={!!errors.name && touched.name}
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
                        >Full name</Text>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight={500}
                            fontSize='15px'
                            name='name'
                            paddingLeft='20px'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='FirstName LastName'
                            width='100%'
                            height='60px'
                            border='1px solid rgba(0,0,0,0.4)'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                        />

                    </VStack>
                    <FormErrorMessage
                        color={"red"}
                        alignSelf="flex-start" fontSize={14}>
                        {errors.name}
                    </FormErrorMessage>
                </FormControl>


                <FormControl
                    isInvalid={!!errors.username && touched.username}
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
                        >Username</Text>
                        <InputGroup>
                            <Input
                                color='rgba(0,0,0,5)'
                                fontWeight={500}
                                fontSize='15px'
                                paddingLeft='20px'
                                placeholder='Username'
                                width='100%'
                                height='60px'
                                name='username'
                                onBlur={handleBlur}
                                borderRadius='10px'
                                backgroundColor='#F7F8F9'
                                border='1px solid rgba(0,0,0,0.4)'
                                onChange={(event) => {
                                    handleCheck(event)
                                    handleChange(event)
                                }}
                            />
                            <InputRightElement
                                onClick={() => setShow(!show)} padding={'30px'}
                                children={
                                    <Text>
                                        {
                                            isChecking === 'idle'
                                                ? <AiFillInfoCircle size='20px' fill='#65708A' />
                                                : isChecking === 'successful' && message === 'Username is available'
                                                    ? <BsCheckCircleFill size='20px' fill='rgb(0,255,0)' />
                                                    : isChecking === 'successful' && message !== 'Username is available'
                                                        ? <MdCancel size='20px' fill='rgb(255, 0,0)' />
                                                        : isChecking === 'pending'
                                                            ? (
                                                                <Box width='50px' marginLeft='20px'>
                                                                    <SyncLoader
                                                                        color="#36d7b7"
                                                                        margin={2}
                                                                        size={3}
                                                                    />
                                                                </Box>
                                                            )
                                                            : <MdCancel size='20px' fill='rgb(255, 0,0)' />
                                        }
                                    </Text>}
                            />
                        </InputGroup>

                    </VStack>
                    <FormErrorMessage
                        color={"red"}
                        alignSelf="flex-start" fontSize={14}>
                        {errors.username}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    isInvalid={!!errors.phone && touched.phone}
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
                        >Phone number</Text>
                        <PhoneInput
                            containerStyle={{
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '10px'
                            }}
                            inputStyle={{
                                color: 'rgba(0,0,0,5)',
                                fontWeight: 500,
                                fontSize: '15px',
                                paddingLeft: '80px',
                                width: '100%',
                                height: '60px',
                                borderRadius: '10px',
                                backgroundColor: '#F7F8F9',
                                border: 'none'
                            }}
                            country={'ng'}
                            name='phone'
                            value={value}
                            onBlur={handleBlur}
                            placeholder='8X XXX XXXX'
                            onChange={phone => {
                                setFieldValue('phone', phone)
                            }}
                            buttonStyle={{
                                width: '70px',
                                border: 'none',
                                paddingLeft: '15px'
                            }}
                        />


                    </VStack>
                    <FormErrorMessage
                        color={"red"}
                        alignSelf="flex-start" fontSize={14}>
                        {errors.phone}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
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
                    >Referrer (Optional)</Text>
                    <InputGroup>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight={500}
                            fontSize='15px'
                            paddingLeft='20px'
                            placeholder="referrer's username"
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            border='1px solid rgba(0,0,0,0.4)'
                            onChange={(event) => {
                                handleCheckRef(event)
                            }}
                        />
                        <InputRightElement
                            children={
                                <Text pt='20px'>
                                    {
                                        isCheckingRef === 'idle'
                                            ? <AiFillInfoCircle size='20px' fill='#65708A' />
                                            : isCheckingRef === 'successful' && msg === 'User not found'
                                                ? <BsCheckCircleFill size='20px' fill='rgb(0,255,0)' />
                                                : isCheckingRef === 'successful' && msg !== 'User not found'
                                                    ? <MdCancel size='20px' fill='rgb(255, 0,0)' />
                                                    : isCheckingRef === 'pending'
                                                        ? (
                                                            <Box width='50px' marginLeft='20px'>
                                                                <SyncLoader
                                                                    color="#36d7b7"
                                                                    margin={2}
                                                                    size={3}
                                                                />
                                                            </Box>
                                                        )
                                                        : <MdCancel size='20px' fill='rgb(255, 0,0)' />
                                    }
                                </Text>}
                        />
                    </InputGroup>

                </VStack>

                <FormControl
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

                <FormControl
                    isInvalid={!!errors.confirm_password && touched.confirm_password}
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
                        >Confirm Password</Text>
                        <InputGroup>
                            <Input
                                color='rgba(0,0,0,5)'
                                fontWeight='bold'
                                fontSize='15px'
                                name='confirm_password'
                                paddingLeft='20px'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={show ? 'text' : 'password'}
                                placeholder='Confirm password'
                                width='100%'
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
                        {errors.confirm_password}
                    </FormErrorMessage>
                </FormControl>

                <Checkbox size='md' defaultChecked padding='20px 0px'>
                    <Text
                        fontSize='14px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >
                        I agree to the <span style={{ color: '#69ACD1', fontWeight: 500 }}>Terms & Conditions</span> and <span style={{ color: '#69ACD1', fontWeight: 500 }}>Privacy Policy </span>
                    </Text>
                </Checkbox>

                <Button
                    outline='none'
                    color='#fff'
                    onClick={handleSubmit}
                    fontSize='20px'
                    isLoading={loading === 'pending' ? true : false}
                    fontWeight={400}
                    width='100%' height='60px' borderRadius='10px' backgroundColor='#1EB0D9' border='none'
                >Login</Button>
                <HStack spacing='10px' justify='center' align='center'>
                    <Text
                        color='rgba(0,0,0.0.4)'
                        fontSize='15px'
                        fontWeight={500}
                    >Already have an account?</Text>
                    <Link href='/Auth/login'>
                        <Text
                            color='#69ACD1'
                            fontSize='15px'
                            fontWeight={500}
                        >Login</Text>
                    </Link>

                </HStack>
            </VStack>
        </AuthLayout >
    )
}

export default Signup