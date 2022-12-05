import AuthLayout from '../../public/components/AuthLayout'
import { Text, Flex, HStack, VStack, InputGroup, Input, InputRightElement, Button, Image, Box } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible, AiFillAccountBook } from 'react-icons/ai'
import { useState } from "react";
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2'
import { CheckboxIcon } from '@chakra-ui/react';

import Link from 'next/link';



const Login = () => {
    const [value, setValue] = useState();
    const [show, setShow] = useState(false);
    const router = useRouter();

    return (
        <AuthLayout>
            <VStack
                width={{
                    base: '90%', md: '60%', lg: '60%'
                }}
                spacing='30px'
                align='center'
                justify='center'
            >
                <Image src='/images/svg/logo.svg' />
                <Text
                    color='#000'
                    fontSize='20px'
                    fontWeight={700}
                    fontFamily='Poppins'
                >
                    Welcome back, Sign in.
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
                    >Phone number</Text>
                    <PhoneInput
                        containerStyle={{
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '10px'
                        }}
                        inputStyle={{
                            color: 'rgba(0,0,0,5)',
                            fontWeight: 'bold',
                            fontSize: '15px',
                            paddingLeft: '80px',
                            width: '100%',
                            height: '60px',
                            borderRadius: '10px',
                            backgroundColor: '#F7F8F9',
                            border: 'none'
                        }}
                        country={'ng'}
                        value={value}
                        placeholder='8X XXX XXXX'
                        onChange={phone => setValue(phone)}
                        buttonStyle={{
                            width: '70px',
                            border: 'none',
                            paddingLeft: '15px'
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
                            type={show ? 'text' : 'password'}
                            placeholder='Your password'
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

                <HStack  alignSelf='flex-end'>
                    <Link href='/Auth/forgot-password'>
                        <Text fontFamily='Poppins' textAlign='left' fontWeight={500} padding='10px 0px' color='#69ACD1'>Forgot Password</Text>
                    </Link>
                </HStack>
                <Button
                    outline='none'
                    color='#fff'
                    fontSize='20px'
                    fontWeight={400}
                    onClick={() => router.push('/dashboard')}
                    width='100%' height='60px' borderRadius='10px' backgroundColor='#1EB0D9' border='none'
                >Login</Button>
                <HStack spacing='10px' justify='center' align='center'>
                    <Text
                        color='rgba(0,0,0.0.4)'
                        fontSize='15px'
                        fontWeight={500}
                    >Don't have an account?</Text>
                    <Link href='/Auth/signup'>
                        <Text
                            color='#69ACD1'
                            fontSize='15px'
                            fontWeight={500}
                        >Sign up</Text>
                    </Link>

                </HStack>
            </VStack>
        </AuthLayout>
    )
}

export default Login