import { Flex, VStack, Text, Button, HStack, Box, useMediaQuery, Image } from "@chakra-ui/react";
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

export const Preloader = () => (
    <HStack
        height='100vh'
        zIndex={10000000000}
        top={0}
        left={0}
        backgroundColor='rgba(0,0,0,0.7)'
        backdropFilter='blur(5px)'
        pos='absolute'
        align='center'
        justify='center'
        width='100%'
    >

        <FadeLoader color="#36d7b7" />
    </HStack>
)


const OTP = () => {
    const [otp, setOtp] = useState("");
    const [showResend, setShowResend] = useState(false);
    const { email } = useUser();
    const dispatch = useDispatch();
    const toast = useToast();
    const router = useRouter();
    const [key, setKey] = useState(0);

    const { loading, isSending } = useAppSelector(
        ({ authReducer }) => authReducer
    )
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    const handleVerify = async () => {
        const data = { email, otp }
        await dispatch(verifyotp(data)).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
                toast({
                    title: 'Email Verified',
                    description: "You can now proceed to login",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right'
                })
                router.push('/Auth/login')
                console.log('Res', res)
            }
        })
    }


    const handleResend = async () => {

        await dispatch(sendOtp(email)).then(res => {
            if (res.meta.sendOtp === 'fulfilled') {
                toast({
                    title: 'OTP Sent',
                    description: "We've sent another OTP to your email",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right'
                })
                setKey(prev => prev + 1)
                setShowResend(false)
                console.log('Res', res)
            }
        })
    }

    useEffect(() => {
        if (otp.length === 6) {
            handleVerify()
        }
    }, [otp])

    

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
            {loading === 'pending' && <Preloader />}
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
                }} height='60px' borderRadius='10px' backgroundColor='#1EB0D9' border='none'
            >Verify OTP</Button>

            <HStack
                color='#69ACD1'
                fontSize='16px'
                fontWeight={500}
                fontFamily='Poppins'
            >
                <BiTime />
                <Countdown
                    zeroPadDays={1}
                    key={key}
                    autoStart={true}
                    onComplete={() => setShowResend(true)}
                    date={Date.now() + 60000} />,

            </HStack>

            {showResend && (
                <Text
                    fontWeight={600}
                    color='#1EB0D9'
                    fontSize={'18px'}
                    fontFamily='Poppins'
                    onClick={handleResend}

                >
                    Resend OTP
                </Text>
            )}

            {isSending === 'pending' && <FadeLoader color="#36d7b7" />}


        </VStack>
    )
}

export default OTP