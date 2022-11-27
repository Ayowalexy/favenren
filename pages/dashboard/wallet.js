import { HStack, Text, Box, VStack, useTheme } from "@chakra-ui/react";
import { RiEyeCloseLine } from 'react-icons/ri';
import { useState } from "react";
import { FaWallet } from 'react-icons/fa'

const Wallet = () => {
    const theme = useTheme();
    const [showBalance, setShow] = useState(true);
    const { wallet_bg, text } = theme.colors.brand;
    return (
        <HStack
            align='center'
            justify='space-between'
            width='100%'
            height='130px'
            marginTop='30px'
            borderRadius='15px'
            padding='0px 50px'
            backgroundColor={wallet_bg}
        >
            <VStack>
                <VStack
                    align='flex-start'
                >
                    <HStack>
                        <Text
                            fontWeight={400}
                            fontSize='16px'
                            fontFamily='Poppins'
                            color={text}
                        >
                            Wallet Balance
                        </Text>
                        <Box onClick={() => setShow(!showBalance)} cursor='pointer'>
                            <RiEyeCloseLine fill={text} size={'30px'} />
                        </Box>
                    </HStack>
                    <Text
                        color='#fff'
                        fontSize='30px'
                        fontWeight={600}
                        fontFamily='Poppins'
                    >
                        {
                            showBalance
                                ?
                                <>
                                    ₦540,000<span style={{ color: text, fontSize: '14px' }}>.00</span>
                                </>
                                :
                                '* * * *'
                        }
                    </Text>
                </VStack>
            </VStack>


            <FaWallet fill={text} size={'30px'} />

        </HStack>
    )
}

export default Wallet