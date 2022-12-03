import Layout from "../../public/components/Layout";
import { Box, VStack, HStack, Text, useTheme, Button, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import ConfirmModal from "../../public/components/confirmModal";
import SuccessModal from "../../public/components/successModal";



const TradeCoin = () => {
    const [coin, setCoin] = useState("");
    const [address, setAddress] = useState("1wertvybunimokljhgfcdxrctfyuikmljnbhgfctyguhi1wertvybunimokljhgfcdxrctfyuikmljnbhgfctyguhi")
    const theme = useTheme();
    const router = useRouter();
    const toast = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);


    const { text_2, btn, text_3, faded_bg } = theme.colors.brand;

    useEffect(() => {
        setCoin(router?.query?.coin)
    }, [router?.query?.coin])
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
                        Trade {coin}
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        Trade your cryptocurrency with Faveremit at the market leading rate.
                    </Text>
                </VStack>

                <VStack
                    align='flex-start'
                    marginTop='40px'
                    spacing='30px'
                    padding={{ base: "60px 20px", lg: '60px 40px', md: '60px 40px' }}
                    width={{ md: '100%', lg: '80%', base: '100%' }}
                    borderRadius='7px'
                    backgroundColor='#FFFFFF'
                    border='1px solid #DFE6E9'
                >
                    <HStack
                        gap='30px'
                        width={{base: '100%'}}
                        align='flex-start'
                        flexDir={{md: 'column', base: 'column', lg: 'row'}}
                    >
                        <HStack
                            height={'fit-content'}
                            // height={{base: '300px', lg: '400px', md: '400px'}}
                            width={{base: '100%', lg: '400px', md: '400px'}}
                            borderRadius='10px'
                            align='center'
                            justify='center'
                            padding={{base: '10px'}}
                            border={`1px solid ${btn}`}
                        >
                            <QRCode
                                size={256}
                                style={{ height: "auto", maxWidth: "95%", width: "95%" }}
                                value={address}
                                viewBox={`0 0 256 256`}
                            />
                        </HStack>
                        <VStack
                            width={{base: '100%'}}
                            align='flex-start'
                        >
                            <Text
                                color={'#000'}
                                fontSize={'24px'}
                                fontWeight={500}
                                width={{lg: '400px', md: '400px', base: '100%'}}
                            >
                                1wertvybunimokljhgfcdxrctfyuikmljnbhgfctyguhi1wertvybunimokljhgfcdxrctfyuikmljnbhgfctyguhi
                            </Text>
                            <CopyToClipboard text={address}
                                onCopy={() => {
                                    toast({
                                        title: `Address copied toast`,
                                        status: 'success',
                                        isClosable: true,
                                        position: 'top-right'
                                    })
                                }}>
                                <Button
                                    color='#fff'
                                    backgroundColor={btn}
                                    height='56px'
                                    width={{ base: '100%', md: '300px', lg: '300px' }}
                                >
                                    Copy Wallet Address
                                </Button>
                            </CopyToClipboard>

                        </VStack>
                    </HStack>

                    <Text
                        color={text_3}
                        fontSize={'18px'}
                        fontWeight={400}
                        pt='10px'
                        lineHeight='28px'
                        width={{lg: '750px', md: '90%'}}
                    >
                        To complete this transaction, you are to send the sum of 0.000023432BTC to the bitcoin address above. You can click on the button abbove to copy the wallet address or scan the QR code. Upload the payment proof below as soon as done to confirm this transaction.
                    </Text>
                    <Box />
                    <VStack
                        backgroundColor={faded_bg}
                        borderRadius='10px'
                        height='208px'
                        border={`1px solid ${btn}`}
                        width='95%'
                        spacing='20px'
                        align='center'
                        justify='center'
                    >
                        <BsFillCloudUploadFill fill="#10B6E8" size={"30px"} />
                        <Text
                            color={btn}
                            fontSize={'18px'}
                            fontWeight={500}
                        >
                            Add Crypto Payment proof
                        </Text>
                        <Text
                            color={'rgba(49, 68, 96, 0.5)'}
                            fontSize={'14px'}
                            fontWeight={400}
                            width='80%'
                            textAlign='center'
                        >
                            Please ensure that the card number is clearly visible and in focus along with other items in the photo you are about to submit
                        </Text>

                    </VStack>
                    <Button
                        marginTop='40px'
                        alignSelf='center'
                        color='#fff'
                        backgroundColor={btn}
                        height='56px'
                        fontWeight={500}
                        onClick={() => setIsOpen(!isOpen)}
                        width={{ base: '100%', md: '300px', lg: '300px' }}
                    >
                        Submit Transaction
                    </Button>

                </VStack>
            </Box>
            <ConfirmModal isOpen={isOpen} setIsOpen={setIsOpen} setIsSuccessOpen={setIsSuccessOpen} isSuccessOpen={isSuccessOpen} />
            <SuccessModal isOpen={isSuccessOpen} setIsOpen={setIsSuccessOpen} />
       
        </Layout>
    )
}

export default TradeCoin