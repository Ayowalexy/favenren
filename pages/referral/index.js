import Layout from "../../public/components/Layout";
import { Box, Text, VStack, HStack, useTheme, Select, Input, Button, Image, Link, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import WithdrawModal from "../../public/components/withdrawModal";


const Referrals = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState('US');
    const [visible, setVisible] = useState(false);
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    const { text_2, btn, primary, wallet_bg } = theme.colors.brand;


    return (
        <Layout>
            <Box
                padding={{
                    lg: '45px 30px', md: '45px 30px', base: '100px 20px'
                }}
            >
                <VStack
                    align='flex-start'
                    spacing='20px'
                >
                    <Text
                        color={text_2}
                        fontSize={'28px'}
                        fontWeight={500}
                    >
                        Referrals
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        Check out the current rate of different gift cards in Naira using Faveremit's gift card rate calculator.
                    </Text>
                </VStack>

                <VStack
                    marginTop='40px'
                    // padding={{ base: "60px 20px", lg: '60px 70px', md: '60px 40px' }}
                    width='100%'
                    borderRadius='7px'
                    align='flex-start'
                    justify='center'
                >
                    <VStack
                        align='center'
                        justify='space-evenly'
                        width='100%'
                        height={{ base: '140px', lg: '230px', md: '230px' }}

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
                        <Text
                            color={'#fff'}
                            fontSize={{ base: '15px', md: '22px', lg: '22px' }}
                            fontWeight={500}
                        >Reward Points</Text>
                        <HStack>
                            <Text
                                color={'#fff'}
                                fontSize={{ base: '25px', md: '44px', lg: '44px' }}
                                fontWeight={600}
                            >🎯 100</Text>
                        </HStack>
                        {
                            isLargerThan600 && (
                                <Button
                                    background='transparent'
                                    border={`1px solid ${primary}`}
                                    width='300px'
                                    height='56px'
                                    borderRadius='7px'
                                    onClick={() => setVisible(true)}
                                    color={primary}
                                    fontSize={'18px'}
                                    fontWeight={600}
                                >Withdraw points</Button>
                            )
                        }

                    </VStack>

                    {
                        !isLargerThan600 && (
                            <Button
                                background={primary}
                                width={'100%'}
                                height='56px'
                                borderRadius='7px'
                                onClick={() => setVisible(true)}
                                color={'#fff'}
                                fontSize={'18px'}
                                fontWeight={600}
                            >Withdraw Funds</Button>
                        )
                    }

                    <Text
                        color={text_2}
                        fontSize={{base: '18px', md: '33px', lg: '33px'}}
                        fontWeight={500}
                        paddingTop={'30px'}

                    >
                        How It works
                    </Text>

                    <VStack width='100%' align='flex-start'>
                        <HStack width='100%' align='flex-start' spacing='30px' marginBottom='-20px'>
                            <VStack>
                                <VStack
                                    height={{base: '44px', lg: '66px', md: '66px'}}
                                    align='center'
                                    justify='center'
                                    backgroundColor='#10B6E8'
                                    borderRadius='50%'
                                    width={{base: '44px', lg: '66px', md: '66px'}}
                                    marginBottom={-5}
                                >
                                    <Image src="/images/svg/link.svg" height={{base: '30px'}}/>
                                </VStack>
                                <Box
                                    height='160px'
                                    width='4px'
                                    backgroundColor='#10B6E8'
                                />
                            </VStack>

                            <VStack
                                align='flex-start'
                                width='100%'
                            >
                                <Text
                                    color={'#000'}
                                    fontSize={{base: '14px', md: '20px', lg: '20px'}}
                                    fontWeight={700}
                                >
                                    Invite your Friends and Family
                                </Text>
                                <Text
                                    color={'#000'}
                                    fontSize={{base: '14px', md: '18px', lg: '18px'}}
                                    fontWeight={400}
                                >
                                    share your username to friends and family to use as referal id when registering
                                </Text>

                                <HStack width='100%' >
                                    <Input
                                        color='#8896AB'
                                        fontWeight={400}
                                        fontSize='12px'
                                        width='100%'
                                        height={{base: '40px', md: '56px', lg: '56px'}}
                                        type='number'
                                        name='usd_amount'
                                        borderRadius='10px'
                                        backgroundColor='#F7F8F9'
                                        outline='none'
                                        paddingLeft='20px'
                                        border='1px solid rgba(0,0,0,0.1)'
                                        placeholder="Enter amount in USD"
                                    />
                                    <Button
                                        color='#fff'
                                        backgroundColor='#1EB0D9'
                                        height={{base: '40px', md: '56px', lg: '56px'}}
                                        width={{ base: '50%', md: '300px', lg: '300px' }}
                                    >
                                        Share
                                    </Button>
                                </HStack>
                            </VStack>
                        </HStack>
                        <HStack align='flex-start' spacing='30px'>
                            <VStack marginBottom='-10px' >
                                <VStack
                                    height={{base: '44px', lg: '66px', md: '66px'}}
                                    align='center'
                                    justify='center'
                                    backgroundColor='#10B6E8'
                                    borderRadius='50%'
                                    width={{base: '44px', lg: '66px', md: '66px'}}
                                    marginBottom={-5}
                                >
                                    <Image src="/images/svg/cloud.svg" height={{base: '30px'}} />
                                </VStack>
                                <Box
                                    height='60px'
                                    width='4px'
                                    backgroundColor='#10B6E8'
                                />
                            </VStack>

                            <VStack
                                align='flex-start'
                                width='100%'
                            >
                                <Text
                                    color={'#000'}
                                    fontSize={{base: '14px', md: '20px', lg: '20px'}}
                                    fontWeight={700}
                                >
                                    They Download the App
                                </Text>
                                <Text
                                    color={'#000'}
                                    fontSize={{base: '14px', md: '18px', lg: '18px'}}
                                    fontWeight={400}
                                >
                                    Install and register with you as referral
                                </Text>

                                <HStack width='100%' >

                                </HStack>
                            </VStack>
                        </HStack>

                        <HStack align='flex-start' spacing='30px'>
                            <VStack>
                                <VStack
                                    height={{base: '44px', lg: '66px', md: '66px'}}
                                    align='center'
                                    justify='center'
                                    backgroundColor='#10B6E8'
                                    borderRadius='50%'
                                    width={{base: '44px', lg: '66px', md: '66px'}}
                                    marginBottom={-5}
                                >
                                    <Image src="/images/svg/hand.svg" height={{base: '30px'}} />
                                </VStack>
                                <Box
                                    height='0px'
                                    width='4px'
                                    backgroundColor='#10B6E8'
                                />
                            </VStack>

                            <VStack
                                align='flex-start'
                                width='100%'
                            >
                                <Text
                                    color={'#000'}
                                    fontSize={{base: '14px', md: '20px', lg: '20px'}}
                                    fontWeight={700}
                                >
                                    You get Reward Point
                                </Text>
                                <Text
                                    color={'#000'}
                                    fontSize={{base: '14px', md: '18px', lg: '18px'}}
                                    fontWeight={400}
                                >
                                    You can convert your reward points to cash directly to your wallet
                                </Text>

                                <HStack width='100%' >

                                </HStack>
                            </VStack>
                        </HStack>
                    </VStack>
                    <WithdrawModal isOpen={visible} setIsOpen={setVisible} />
                </VStack>
            </Box>
        </Layout>
    )
}

export default Referrals