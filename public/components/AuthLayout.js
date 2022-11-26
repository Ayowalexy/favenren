import { Text, Flex, HStack, VStack, InputGroup, Input, InputRightElement, Button, Image, Box } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



const AuthLayout = ({ children }) => {

    return (
        <HStack
            align='center'
            justify='space-between'
            height='100vh'
            width='100%'
        >
            <VStack
                width='50%'
                align='center'
                justify='center'
                height='100vh'
                overflow='scroll'
            >
               {children}
            </VStack>
            <VStack
                height='100vh'
                width='50%'
                align='center'
                spacing='20px'
                justify='center'
                backgroundColor='#F7F8F9'
            >
                <VStack
                    width='50%'
                    align='center'
                    spacing='20px'
                    justify='center'
                >
                    <Text
                        color='rgba(0,0,0.0.4)'
                        fontSize='15px'
                        textAlign='center'
                    >'Love the Simplicity of the service and the prompt customer support. We can't imagine working without it.'</Text>
                    <Image />
                    <VStack
                        spacing='-10px'
                    >
                        <Text
                            color='#000'
                            fontWeight='bold'
                            fontSize='15px'
                            textAlign='center'
                        >John Doe</Text>
                        <Text
                            color='rgba(0,0,0, 0.4)'
                            fontSize='15px'
                            textAlign='center'
                        >CEO and founder of Example.com</Text>
                    </VStack>
                </VStack>
            </VStack>

        </HStack>
    )
}

export default AuthLayout