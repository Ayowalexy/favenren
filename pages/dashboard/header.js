import { Box, Text, HStack, VStack, useTheme } from "@chakra-ui/react";
import {  RiShieldStarFill } from 'react-icons/ri'


const Header = () => {
    const theme = useTheme();
    const { primary, text, primary_faded } = theme.colors.brand

    return (
        <HStack
            justify='space-between'
            width='100%'
        >
            <VStack
                spacing='0px'
                align='flex-start'
            >
                <Text
                    color='#000'
                    fontSize='18px'
                    fontWeight={600}
                    fontFamily='Poppins'
                >Good Morning Oluwatobi</Text>
                <Text
                    color={text}
                    fontSize='13px'
                    fontWeight={400}
                    fontFamily='Poppins'
                >Working Late</Text>

            </VStack>
            <HStack>
                <RiShieldStarFill size={'35px'} fill={primary} />
                <HStack
                    width='40px'
                    backgroundColor={primary_faded}
                    justify='center'
                    align='center'
                    borderRadius='50%'
                    height='40px'
                >
                    <Text
                        fontFamily='Poppins'
                        fontWeight={500}
                        color={text}
                    >100</Text>
                </HStack>
            </HStack>
        </HStack>
    )
}

export default Header