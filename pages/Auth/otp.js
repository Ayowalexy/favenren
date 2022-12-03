import { Flex, VStack, Text, Button, HStack, Box, useMediaQuery, Image } from "@chakra-ui/react";
import OtpInput from 'react-otp-input';
import { useState } from "react";
import { BiTime } from 'react-icons/bi'


const OTP = () => {
    const [otp, setOtp] = useState("");
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

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
                Type the verification code we've sent to +2348145405006
            </Text>
            <Box 
                // padding={'40px'}
            >
                <OtpInput
                    value={otp}
                    onChange={otp => setOtp(otp)}
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
            </Box>

            <Button
                outline='none'
                color='#fff'
                fontSize='16px'
                fontWeight={700}
                width={{
                    base: '90%',
                    md: '440px',
                    lg: '440px'
                }} height='60px' borderRadius='10px' backgroundColor='#69ACD1' border='none'
            >Verify OTP</Button>

            <HStack
                color='#69ACD1'
                fontSize='16px'
                fontWeight={500}
                fontFamily='Poppins'
            >
                <BiTime />
                <Text>0:52</Text>
            </HStack>
        </VStack>
    )
}

export default OTP