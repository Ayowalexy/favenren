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
import { useFormik } from "formik";
import * as Yup from 'yup';
import WithdrawStatusModal from './withdrawStatus'
import { withdrawReward, withdrawWallet } from '../redux/reducers/cards/thunkAction'





const WithdrawModal = ({ isOpen, setIsOpen, setShow, setAmount, type }) => {

    const { cryptoData } = useUser()
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    const validationSchema = Yup.object().shape({
        amount: Yup
            .number()
            .min(type === 'wallet' ? 10000 : 20, `Must be more than ${type === 'wallet' ? '10,000' : '20'}`)
            .max(type === 'wallet' ? 500000 : 100, `Must be lesser or equal to ${type === 'wallet' ? '500,000' : '100'}`)
            .required('Enter amount')
    })

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
        isSubmitting,
        errors,
        touched,
        values
    } = useFormik({
        initialValues: {
            amount: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            setAmount(values.amount)
            setIsOpen(false)
            if (type === 'wallet') {
                handleWalletWithdraw(values)
            } else {
                handleWithdrawReward(values)
            }

        },
    });

    const handleWithdrawReward = async (values) => {
        await dispatch(withdrawReward(values)).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
                setShow(true)
            } else {
                setShow(true)
            }
        })
    }

    const handleWalletWithdraw = async (values) => {
        await dispatch(withdrawWallet(values)).then(res => {
            if (res.meta.requestStatus === 'fulfilled') {
                setShow(true)
            } else {
                setShow(true)
            }
        })
    }


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
                        fontSize={{ base: '15px', md: '20px', lg: '20px' }}
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
                                name='amount'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.amount}
                                outline='none'
                                _focus={{
                                    outline: 'none'
                                }}

                            />
                        </InputGroup>
                        {!!errors.amount && touched.amount && (
                            <Text
                                color='red'
                                fontSize='12px'
                            >{errors.amount}</Text>
                        )}
                        <Text
                            fontSize={{ base: '12px', md: '16px', lg: '16px' }}
                            color='#000'
                            paddingTop='10px'
                            fontWeight='400'
                        >
                            {
                                type === 'wallet'
                                    ? <>
                                        Limit for this transaction is between <span style={{ fontWeight: '700' }}>₦10,000</span> and <span style={{ fontWeight: '700' }}>₦5,000,000</span>
                                    </>
                                    :
                                    <>
                                        Limit for this transaction is between <span style={{ fontWeight: '700' }}>₦20</span> and <span style={{ fontWeight: '700' }}>₦100</span>
                                    </>
                            }
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
                                background='#10B6E8'
                                width='100%'
                                onClick={handleSubmit}
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