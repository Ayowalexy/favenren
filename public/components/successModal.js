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
    Text
} from '@chakra-ui/react'
import { BsCheckCircleFill } from 'react-icons/bs';


const SuccessModal = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <Modal size={{ base: 'sm', lg: 'xl', md: 'xl' }} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                <ModalOverlay />
                <ModalContent

                >

                    <ModalBody

                    >
                        <VStack
                            spacing='20px'
                            padding='30px 0px'
                            align='center'
                            justify='center'
                            width='100%'
                        >
                            <BsCheckCircleFill fill='#10B6E8' size='70px' />
                            <Text
                                color='#111314'
                                fontWeight={500}
                                lineHeight='28px'
                                fontSize='23px'
                                textAlign='center'
                                fontFamily='Poppins'
                            >
                                Giftcard Transaction Submitted <br /> Successfully
                            </Text>
                            <HStack width={{base: '90%', lg: '60%', md: '60%'}} spacing='20px'>
                                <Button
                                    fontWeight={500}
                                    fontSize='16px'
                                    fontFamily='Poppins'

                                    background='#10B6E8'
                                    width='50%'
                                    height='46px'
                                    color='#fff'
                                    colorScheme='blue' mr={3} onClick={() => setIsOpen(!isOpen)}>
                                    Continue
                                </Button>
                                <Button
                                    fontWeight={500}
                                    fontSize='16px'
                                    background='#fff'
                                    color='#10B6E8'
                                    width='50%'
                                    fontFamily='Poppins'
                                    height='46px'
                                    border='1px solid #10B6E8'
                                    colorScheme='blue' mr={3} onClick={() => setIsOpen(!isOpen)}>
                                    Trade Again
                                </Button>

                            </HStack>
                        </VStack>

                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    )
}

export default SuccessModal