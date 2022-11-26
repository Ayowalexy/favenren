import AuthLayout from '../../public/components/AuthLayout'
import { Text, Flex, HStack, VStack, InputGroup, Input, InputRightElement, Button, Checkbox, Image, Box } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { use, useState } from "react";
import Link from 'next/link';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



const Signup = () => {
    const [value, setValue] = useState();
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false)

    return (
        <AuthLayout>
            <VStack
                width='60%'
                spacing='10px'
                align='center'
                justify='center'
                paddingBottom='100px'
            >
                <Text
                    paddingTop='400px'
                    color='#000'
                    fontSize='20px'
                    fontWeight={400}
                    fontFamily='Poppin'
                >
                    Create an account, It's free
                </Text>

                <VStack
                    spacing='-10px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={400}
                        fontFamily='Poppin'
                    >Full name</Text>
                    <Input
                        color='rgba(0,0,0,5)'
                        fontWeight='bold'
                        fontSize='15px'
                        paddingLeft='20px'
                        type={show ? 'text' : 'password'}
                        placeholder='FirstName LastName' width='100%' height='60px' borderRadius='10px' backgroundColor='#F7F8F9' border='none' />


                </VStack>

                <VStack
                    spacing='-10px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={400}
                        fontFamily='Poppin'
                    >Username</Text>
                    <InputGroup>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight='bold'
                            fontSize='15px'
                            paddingLeft='20px'
                            type={show ? 'text' : 'password'}
                            placeholder='Username' width='100%' height='60px' borderRadius='10px' backgroundColor='#F7F8F9' border='none' />
                        <InputRightElement onClick={() => setShow(!show)} padding={'20px'} children={show ? <AiFillEye size='20px' fill='#69ACD1' /> : <AiFillEyeInvisible size='20px' fill='#69ACD1' />} />
                    </InputGroup>
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
                    spacing='-10px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={400}
                        fontFamily='Poppin'
                    >Email Address</Text>
                    <Input
                        color='rgba(0,0,0,5)'
                        fontWeight='bold'
                        fontSize='15px'
                        paddingLeft='20px'
                        type={show ? 'text' : 'password'}
                        placeholder='yourmail@gmail.com' width='100%' height='60px' borderRadius='10px' backgroundColor='#F7F8F9' border='none' />


                </VStack>


                <VStack
                    spacing='-10px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={400}
                        fontFamily='Poppin'
                    >Referrer (Optional)</Text>
                    <InputGroup>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight='bold'
                            fontSize='15px'
                            paddingLeft='20px'
                            type={show ? 'text' : 'password'}
                            placeholder="Referrer's username" width='100%' height='60px' borderRadius='10px' backgroundColor='#F7F8F9' border='none' />
                        <InputRightElement onClick={() => setShow(!show)} padding={'20px'} children={show ? <AiFillEye size='20px' fill='#69ACD1' /> : <AiFillEyeInvisible size='20px' fill='#69ACD1' />} />
                    </InputGroup>
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
                    >Confirm Password</Text>
                    <InputGroup>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight='bold'
                            fontSize='15px'
                            paddingLeft='20px'
                            type={show ? 'text' : 'password'}
                            placeholder='Confirm password' width='100%' height='60px' borderRadius='10px' backgroundColor='#F7F8F9' border='none' />
                        <InputRightElement onClick={() => setShow(!show)} padding={'20px'} children={show ? <AiFillEye size='20px' fill='#69ACD1' /> : <AiFillEyeInvisible size='20px' fill='#69ACD1' />} />
                    </InputGroup>

                </VStack>

                <HStack
                    paddingTop='20px'
                    paddingBottom='20px'
                    fontSize={'13px'}
                >
                    <Checkbox value={checked} onChange={setChecked} />
                    <Text>
                        I agree to the
                    </Text>
                    <Text
                        fontWeight='bold'
                        color='#69ACD1'
                    >
                        Terms and Conditions
                    </Text>
                    <Text>
                        and
                    </Text>
                    <Text
                        fontWeight='bold'
                        color='#69ACD1'
                    >
                        Terms and Conditions
                    </Text>
                </HStack>


                <Button
                    outline='none'
                    color='#fff'
                    fontSize='20px'
                    fontWeight={400}
                    width='100%' height='60px' borderRadius='10px' backgroundColor='#69ACD1' border='none'
                >Sign Up</Button>
                <HStack spacing='10px' justify='center' align='center'>
                    <Text
                        color='rgba(0,0,0.0.4)'
                        fontSize='15px'
                        fontWeight='bold'
                    >Already have an account?</Text>
                    <Link href='/Auth/login'>
                        <Text
                            color='#69ACD1'
                            fontSize='15px'
                            fontWeight='bold'
                        >Login</Text>
                    </Link>

                </HStack>
            </VStack>
        </AuthLayout>
    )
}

export default Signup