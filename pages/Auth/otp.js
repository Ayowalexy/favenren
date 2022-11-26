import { Flex, VStack, Text, Button, HStack } from "@chakra-ui/react";
import OtpInput from 'react-otp-input';
import { useState } from "react";
import { BiTime } from 'react-icons/bi'


const OTP = () => {
    const [otp, setOtp] = useState("")
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
            <Text
                color='#000'
                fontSize='16px'
                fontWeight={700}
                fontFamily='Poppins'
            >
                Type the verification code we've sent to +2348145405006
            </Text>
            <OtpInput
                value={otp}
                onChange={otp => setOtp(otp)}
                numInputs={6}
                inputStyle={{
                    color: 'rgba(0,0,0,5)',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    width: '55px',
                    height: '55px',
                    borderRadius: '7px',
                    backgroundColor: '#F7F8F9',
                    border: '1px solid rgba(0,0,0,0.1)',
                    marginLeft: '20px'
                }}
            />

            <Button
                outline='none'
                color='#fff'
                fontSize='16px'
                fontWeight={700}
                width='440px' height='60px' borderRadius='10px' backgroundColor='#69ACD1' border='none'
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