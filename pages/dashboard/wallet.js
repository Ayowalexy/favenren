import { HStack, Text, Box, VStack, useTheme, useMediaQuery } from "@chakra-ui/react";
import { RiEyeCloseLine } from 'react-icons/ri';
import { useState } from "react";
import { FaWallet } from 'react-icons/fa'

const Wallet = () => {
    const theme = useTheme();
    const [showBalance, setShow] = useState(true);
    const { wallet_bg, text, primary } = theme.colors.brand;
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    return (
        <Box>
            <HStack
                align='center'
                justify='space-between'
                width='100%'
                height='130px'
                marginTop='30px'
                borderRadius='15px'
                padding={{ base: '0px 20px', lg: '0px 50px', md: '0px 50px' }}
                backgroundColor={wallet_bg}
                bgSize='contain'
                // backgroundRepeat='no-repeat'
                bgPos='right'
                bgImage={{
                    base: 'url("/images/img/img5.png")'
                }}
            >
                <VStack>
                    <VStack
                        align='flex-start'
                    >
                        <HStack>
                            <Text
                                fontWeight={400}
                                fontSize={{ base: '14px', lg: '16px', md: '16px' }}
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
            {
                !isLargerThan600 && (
                    <HStack
                        width='100%'
                        backgroundColor={primary}
                        justify='center'
                        marginTop='15px'
                        borderRadius='10px'
                        align='center'
                        height='50px'
                    >
                        <Text
                            color='#fff'
                            fontSize='16px'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >
                            Withdraw Funds
                        </Text>
                    </HStack>
                )
            }
        </Box>
    )
}

export default Wallet