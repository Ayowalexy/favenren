import { HStack, Text, Box, VStack, useTheme, useMediaQuery } from "@chakra-ui/react";
import { RiEyeCloseLine } from 'react-icons/ri';
import { useState } from "react";
import { FaWallet } from 'react-icons/fa'
import WithdrawModal from "../../public/components/withdrawModal";
import WithdrawStatusModal from "../../public/components/withdrawStatus";
import { useAppSelector } from "../../public/redux/store";
import { Preloader } from "../Auth/otp";
import { useSelector } from "react-redux";

const Wallet = () => {
    const theme = useTheme();
    const [showBalance, setShow] = useState(true);
    const { wallet_bg, text, primary } = theme.colors.brand;
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    const [visible, setVisible] = useState(false);
    const [show, setShow_] = useState(false)
    const [amount, setAmount] = useState('')


    const { wallet_balance } = useAppSelector(
        ({ authReducer }) => authReducer
    )

    const { isLoading } = useAppSelector(
        ({ cardReducer }) => cardReducer
    )


    return (
        <Box>
            {
                isLoading === 'pending' && <Preloader />
            }
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
                                        ₦{wallet_balance}<span style={{ color: text, fontSize: '14px' }}></span>
                                    </>
                                    :
                                    '* * * *'
                            }
                        </Text>
                    </VStack>
                </VStack>

                {
                    isLargerThan600 && (
                        <HStack
                            width='200px'
                            backgroundColor={primary}
                            justify='center'
                            marginTop='15px'
                            borderRadius='10px'
                            align='center'
                            height='50px'
                            cursor='pointer'
                            onClick={() => setVisible(true)}
                        >
                            <Text
                                color='#fff'
                                fontSize='16px'
                                fontWeight={500}
                                fontFamily='Poppins'
                            >
                                Withdraw
                            </Text>
                        </HStack>
                    )
                }

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
                        cursor='pointer'
                        onClick={() => setVisible(true)}

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
            <WithdrawModal setShow={setShow_} setAmount={setAmount} isOpen={visible} type='wallet' setIsOpen={setVisible} />
            <WithdrawStatusModal amount={amount} isOpen={show} setIsOpen={setShow_} type='wallet' />
        </Box>
    )
}

export default Wallet