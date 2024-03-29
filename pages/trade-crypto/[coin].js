import Layout from "../../public/components/Layout";
import { Box, VStack, HStack, Text, useTheme, Button, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import ConfirmModal from "../../public/components/confirmModal";
import SuccessModal from "../../public/components/successModal";
import { useAppSelector } from "../../public/redux/store";
import { useDispatch } from "react-redux";
import { getWalletAddress } from "../../public/redux/reducers/cards/thunkAction";
import { Preloader } from "../Auth/otp";
import { AiFillCloseCircle } from 'react-icons/ai'
import { useFileUpload } from "../../public/hooks/fileUpload";
import { useUser } from "../../public/context/userContext";

const TradeCoin = () => {
    const [coin, setCoin] = useState("");
    const [address, setAddress] = useState("1wertvybunimokljhgfcdxrctfyuikmljnbhgfctyguhi1wertvybunimokljhgfcdxrctfyuikmljnbhgfctyguhi")
    const theme = useTheme();
    const router = useRouter();
    const toast = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const dispatch = useDispatch();
    const { setCryptoData, cryptoData } = useUser();

    const { singleCrypto, walletAddress, loading } = useAppSelector(
        ({ cardReducer }) => cardReducer
    )
    const { deleteSelectedImage, fileList, handleFileUpload } =

        useFileUpload(true);


    const { text_2, btn, text_3, faded_bg } = theme.colors.brand;

    useEffect(() => {
        setCoin(router?.query?.coin)
    }, [router?.query?.coin])


    useEffect(() => {
        if (singleCrypto.crypto_id && singleCrypto.crypto_wallet_type_id) {
            dispatch(getWalletAddress(singleCrypto))
        }
    }, [singleCrypto])

    useEffect(() => {
        if(fileList.length){
            setCryptoData({...cryptoData, proof: fileList[0].file})
        }
    }, [fileList])



    return (
        <Layout>
            {
                loading === 'pending'
                    ? <Preloader />
                    :
                    <>
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
                                    width={{ base: '100%' }}
                                    align='flex-start'
                                    flexDir={{ md: 'column', base: 'column', lg: 'row' }}
                                >
                                    <HStack
                                        height={'fit-content'}
                                        // height={{base: '300px', lg: '400px', md: '400px'}}
                                        width={{ base: '100%', lg: '400px', md: '400px' }}
                                        borderRadius='10px'
                                        align='center'
                                        justify='center'
                                        padding={{ base: '10px' }}
                                        border={`1px solid ${btn}`}
                                    >
                                        <QRCode
                                            size={256}
                                            style={{ height: "auto", maxWidth: "95%", width: "95%" }}
                                            value={walletAddress?.address || 'babfakebtcaddressqwertyuiopadfghjkxcvbnmftgyu'}
                                            viewBox={`0 0 256 256`}
                                        />
                                    </HStack>
                                    <VStack
                                        width={{ base: '100%' }}
                                        align='flex-start'
                                    >
                                        <Text
                                            color={'#000'}
                                            fontSize={'24px'}
                                            fontWeight={500}
                                            width={{ lg: '400px', md: '400px', base: '100%' }}
                                        >
                                            {walletAddress.address}
                                        </Text>
                                        <CopyToClipboard text={walletAddress.address}
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
                                    width={{ lg: '750px', md: '90%' }}
                                >
                                    To complete this transaction, you are to send the sum of 0.000023432BTC to the bitcoin address above. You can click on the button abbove to copy the wallet address or scan the QR code. Upload the payment proof below as soon as done to confirm this transaction.
                                </Text>
                                <Box />

                                <HStack
                                    align='flex-start'
                                    width='100%'
                                    flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
                                    marginBottom='30px'
                                >
                                    {
                                        Boolean(fileList.length) && (


                                            <HStack
                                                justify='center'
                                                align='center'
                                                width={{ base: '100%', md: '250px', lg: '250px' }}
                                                borderRadius='10px'
                                                height='198px'
                                                border='1px dotted #10B6E8'
                                            >
                                                {
                                                    fileList.slice(fileList.length - 1).map(ele => (
                                                        <HStack
                                                            key={ele.id}
                                                            bgPos='center'
                                                            bgSize='contain'
                                                            width='97%'
                                                            bgRepeat='no-repeat'
                                                            height='97%'
                                                            padding='10px'
                                                            justify='flex-end'
                                                            align='flex-start'
                                                            bgImage={{
                                                                base: `url(${ele.displayUrl})`,
                                                            }}
                                                        >
                                                            <HStack

                                                                height='23px'
                                                                width='114px'
                                                                borderRadius='2px'
                                                                backgroundColor='#FFF1F1'
                                                                onClick={() => deleteSelectedImage(ele.id)}
                                                            >
                                                                <AiFillCloseCircle fill='red' />
                                                                <Text
                                                                    fontSize='12px'
                                                                    color='red'
                                                                >
                                                                    Remove Image
                                                                </Text>
                                                            </HStack>

                                                        </HStack>
                                                    ))
                                                }

                                            </HStack>
                                        )
                                    }
                                    <input id='input_form' type='file'
                                        onChange={handleFileUpload}
                                        style={{
                                            display: 'none'
                                        }}
                                    />
                                    <label htmlFor="input_form">
                                        {
                                            !Boolean(fileList.length) && (
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
                                            )
                                        }
                                    </label>
                                </HStack>
                                {
                                    !Boolean(fileList.length) && (
                                        <Text
                                        color={'red'}
                                        alignSelf='flex-start'
                                        fontSize={'14px'}
                                        fontWeight={400}
                                        >
                                            Proof is required
                                        </Text>
                                    )
                                }

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
                        <ConfirmModal
                            isOpen={isOpen}
                            type='crypto'
                            setIsOpen={setIsOpen}
                            setIsSuccessOpen={setIsSuccessOpen}
                            isSuccessOpen={isSuccessOpen}
                            wallet_id={walletAddress?.crypto_wallet_type_id}

                        />
                        <SuccessModal isOpen={isSuccessOpen} setIsOpen={setIsSuccessOpen} />

                    </>
            }
        </Layout>
    )
}

export default TradeCoin