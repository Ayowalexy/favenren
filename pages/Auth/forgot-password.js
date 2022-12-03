import { Flex, HStack, VStack, Text, Button, Image } from "@chakra-ui/react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const ForgotPassword = () => {
    const [value, setValue] = useState();
    const router = useRouter();

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
                    Enter your phone number to recover your forgotten password
                </Text>

                <VStack
                    spacing='5px'
                    align='flex-start'
                    width={{
                        base: '90%', md: '80%', lg: '80%'
                    }}
                    paddingTop='20px'
                    paddingBottom='40px'
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
                            border: 'none',

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
                <Button
                    outline='none'
                    color='#fff'
                    fontSize='16px'
                    fontWeight={700}
                    onClick={() => router.push('/Auth/otp')}
                    width={{
                        base: '90%', md: '80%', lg: '80%'
                    }}
                     height='60px' borderRadius='10px' backgroundColor='#69ACD1' border='none'
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