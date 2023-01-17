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
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../redux/store'
import { formatNumber } from './utils/formatter'
import { makecryptotransaction } from '../redux/reducers/cards/thunkAction'
import { AiOutlineArrowLeft } from 'react-icons/ai'



const WithdrawModal = ({ isOpen, setIsOpen }) => {

    const { cryptoData } = useUser()
    const dispatch = useDispatch();
    const [value, setValue] = useState('')
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')



    return (
        <>
            <Modal boxShadow={!isLargerThan600 && 'none'} size={{ base: 'sm', lg: 'xl', md: 'xl' }} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                <ModalOverlay backgroundColor={!isLargerThan600 && '#fff'} />
                <ModalContent boxShadow={!isLargerThan600 && 'none'}>
                    {
                        !isLargerThan600 && (
                            <Box onClick={() => setIsOpen(false)} paddingLeft='20px'>
                                <AiOutlineArrowLeft fill='#000' />
                            </Box>
                        )
                    }
                    <ModalHeader
                        color='#2A3342'
                        fontWeight={700}
                        fontSize={{base: '15px', md: '20px', lg: '20px'}}
                        marginTop='30px'
                        fontFamily='Poppins'
                    >Enter the amount you want to withdraw</ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody
                        color='#556987'
                        fontWeight={500}
                        lineHeight='24px'
                        fontSize='16px'
                        fontFamily='Poppins'


                    >
                        <InputGroup>
                            <InputLeftElement>
                                <Text
                                    fontSize={{ base: '25px', md: '50px', lg: '50px' }}
                                    paddingLeft='30px'
                                    paddingTop={{ base: '70px', md: '115px', lg: '115px' }}
                                    color='#000'

                                >₦</Text>
                            </InputLeftElement>
                            <Input
                                fontSize={{ base: '35px', md: '60px', lg: '60px' }}
                                height={{ base: '110px', md: '160px', lg: '160px' }}
                                color='#000'
                                backgroundColor='#F4F6F9'
                                textAlign='center'
                                value={formatNumber(value)}
                                onChange={(e) => setValue(e.target.value)}
                                outline='none'
                                _focus={{
                                    outline: 'none'
                                }}

                            />
                        </InputGroup>
                        <Text
                            fontSize={{base: '12px', md: '16px', lg: '16px'}}
                            color='#000'
                            paddingTop='10px'
                            fontWeight='400'
                        >
                            Limit for this transaction is between <span style={{ fontWeight: '700' }}>₦10,000</span> and <span style={{ fontWeight: '700' }}>₦5,000,000</span>
                        </Text>
                    </ModalBody>

                    <ModalFooter
                        marginTop='15px'
                    >
                        <VStack width='100%'>

                            <Button
                                fontWeight={500}
                                fontSize='16px'
                                fontFamily='Poppins'
                                onClick={() => setIsOpen(false)}
                                background='#10B6E8'
                                width='100%'
                                height='46px'
                                color='#fff'
                                colorScheme='blue' mr={3} >
                                Withdraw
                            </Button>
                        </VStack>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default WithdrawModal