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
    VStack
} from '@chakra-ui/react'


const ConfirmModal = ({ isOpen, setIsOpen, setIsSuccessOpen, isSuccessOpen }) => {
    return (
        <>
            <Modal size={{base: 'sm', lg:'xl', md: 'xl'}} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        color='#2A3342'
                        fontWeight={700}
                        fontSize='20px'
                        fontFamily='Poppins'
                    >Transaction Terms & Conditions</ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody
                        color='#556987'
                        fontWeight={500}
                        lineHeight='24px'
                        fontSize='16px'
                        fontFamily='Poppins'
                    >
                        This transaction is subject to a review by Faveremit and could fail if the details of the giftcard is deemed incorrect or invalid for a successfull transaction. If Faveremit finds this giftcard to be used or incorrect, we would not bbear n\any loss as a result pf this transaction.
                    </ModalBody>

                    <ModalFooter
                        marginTop='15px'
                    >
                        <VStack width='100%'>
                            <Button
                                fontWeight={500}
                                fontSize='16px'
                                background='#fff'
                                color='#333F51'
                                width='100%'
                                fontFamily='Poppins'

                                height='46px'
                                border='1px solid #D5DAE1'
                                colorScheme='blue' mr={3} onClick={() => setIsOpen(!isOpen)}>
                                I Don't Agree
                            </Button>
                            <Button
                                fontWeight={500}
                                fontSize='16px'
                                fontFamily='Poppins'

                                background='#10B6E8'
                                width='100%'
                                height='46px'
                                color='#fff'
                                colorScheme='blue' mr={3} onClick={() => {
                                    setIsOpen(!isOpen)
                                    setTimeout(() => {
                                        setIsSuccessOpen(!isSuccessOpen)
                                    }, 2000 )
                                }}>
                                I Agree
                            </Button>
                        </VStack>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ConfirmModal