import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Lorem,
    Button,
    HStack,
    VStack,
    Input,
    InputLeftElement,
    InputGroup,
    Text,
    useMediaQuery,
    Box
} from '@chakra-ui/react'
import { useUser } from '../context/userContext'
import { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { formatNumber } from './utils/formatter';

const WithdrawStatusModal = ({ isOpen, setIsOpen, amount, type }) => {

    const { cryptoData } = useUser()
    const [value, setValue] = useState('')
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    const { loading, errMsg } = useSelector(state => state.cardReducer);

    console.log('errr', errMsg)

    return (
        <>
            <Modal boxShadow={!isLargerThan600 && 'none'} size={{ base: 'sm', lg: 'xl', md: 'xl' }} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                <ModalOverlay backgroundColor={!isLargerThan600 && '#fff'} />
                <ModalContent boxShadow={!isLargerThan600 && 'none'}>


                    <ModalBody
                        color='#556987'
                        fontWeight={500}
                        lineHeight='24px'
                        fontSize='16px'

                        fontFamily='Poppins'
                        marginTop='100px'

                    >
                        <VStack>
                            <HStack
                                align='center'
                                justify='center'
                                backgroundColor={
                                    loading === 'successful'
                                        ? '#E9F4F7'
                                        : loading === 'failed'
                                            ? '#F7E9E9'
                                            : null
                                }
                                borderRadius='50%'
                                width='60px'
                                height='60px'
                            >
                                <HStack
                                    align='center'
                                    justify='center'
                                    backgroundColor={
                                        loading === 'successful'
                                            ? '#4396B0'
                                            : loading === 'failed'
                                                ? '#B04343'
                                                : null
                                    }
                                    borderRadius='50%'
                                    width='45px'
                                    height='45px'
                                >
                                    <AiOutlineCheck fill='#fff' size={20} />
                                </HStack>
                            </HStack>


                            <Text
                                fontWeight='300'
                                color='#000'
                                textAlign='center'
                                fontSize='15px'
                                paddingTop="100px"
                            >
                                {
                                    loading === 'successful' && type !== 'wallet'
                                        ? (
                                            `
                                        Your withdrawal was successful <br />
                                        You successfully withdrew {amount}.0 points from your wallet. <br />
                                        This is equivalent to
                                        `
                                        ) : loading === 'successful' && type === 'wallet'
                                        ? 'Wallet withdrawal request created successfully'
                                        : loading === 'failed'
                                            ? errMsg.toString()
                                            : null
                                }

                            </Text>

                            {
                                loading === 'successful' && (
                                    <Text
                                        fontWeight='700'
                                        color='#000'
                                        textAlign='center'
                                        fontSize='30px'
                                        paddingTop="30px"
                                        paddingBottom='90px'
                                    >₦{formatNumber(amount)}.00</Text>
                                )
                            }
                        </VStack>


                    </ModalBody>

                    <ModalFooter
                        marginTop='15px'
                        marginBottom='60px'
                    >
                        <VStack width='100%'>

                            <Button
                                fontWeight={500}
                                fontSize='16px'
                                fontFamily='Poppins'
                                background='#10B6E8'
                                onClick={() => setIsOpen(false)}
                                width='100%'
                                height='46px'
                                color='#fff'
                                colorScheme='blue' mr={3} >
                                Done
                            </Button>
                        </VStack>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default WithdrawStatusModal