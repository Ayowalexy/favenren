import AuthLayout from '../../public/components/AuthLayout'
import { Text, Flex, HStack, VStack, InputGroup, Input, InputRightElement, Button, Image, Box } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Link from 'next/link';



const Login = () => {
    const [value, setValue] = useState();
    const [show, setShow] = useState(false)

    return (
        <AuthLayout>
            <VStack
                width='60%'
                spacing='20px'
                align='center'
                justify='center'
            >
                <Text
                    color='#000'
                    fontSize='20px'
                    fontWeight={400}
                    fontFamily='Poppin'
                >
                    Welcome back, Sign in.
                </Text>

                <VStack
                    spacing='0px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={400}
                        fontFamily='Poppin'
                    >Phone number</Text>
                    <PhoneInput
                        style={{
                            width: '100%'
                        }}
                        inputComponent={() => {
                            return (
                                <Input
                                    color='rgba(0,0,0,5)'
                                    fontWeight='bold'
                                    fontSize='15px'
                                    paddingLeft='20px'
                                    placeholder="8X XXX XXXX" width='100%' height='60px' borderRadius='10px' backgroundColor='#F7F8F9' border='none' />
                            )
                        }}
                        smartCaret={false}
                        withCountryCallingCode={true}

                        value={value}
                        defaultCountry='NG'
                        onChange={setValue} />


                </VStack>

                <VStack
                    spacing='0px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={400}
                        fontFamily='Poppin'
                    >Password</Text>
                    <InputGroup>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight='bold'
                            fontSize='15px'
                            paddingLeft='20px'
                            type={show ? 'text' : 'password'}
                            placeholder='Your password' width='100%' height='60px' borderRadius='10px' backgroundColor='#F7F8F9' border='none' />
                        <InputRightElement onClick={() => setShow(!show)} padding={'20px'} children={show ? <AiFillEye size='20px' fill='#69ACD1' /> : <AiFillEyeInvisible size='20px' fill='#69ACD1' />} />
                    </InputGroup>

                </VStack>
                <Text alignSelf='flex-end' color='#69ACD1'>Forgot Password</Text>
                <Button
                    outline='none'
                    color='#fff'
                    fontSize='20px'
                    fontWeight={400}
                    width='100%' height='60px' borderRadius='10px' backgroundColor='#69ACD1' border='none'
                >Login</Button>
                <HStack spacing='10px' justify='center' align='center'>
                    <Text
                        color='rgba(0,0,0.0.4)'
                        fontSize='15px'
                        fontWeight='bold'
                    >Don't have an account</Text>
                   <Link href='/Auth/signup'>
                   <Text
                        color='#69ACD1'
                        fontSize='15px'
                        fontWeight='bold'
                    >Sign up</Text></Link>

                </HStack>
            </VStack>
        </AuthLayout>
    )
}

export default Login