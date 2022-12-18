import { Box, Text, HStack, VStack, useTheme, Avatar, useMediaQuery } from "@chakra-ui/react";
import { RiShieldStarFill } from 'react-icons/ri'
import { useAppSelector } from "../../public/redux/store";


const Header = () => {
    const theme = useTheme();
    const { primary, text, primary_faded } = theme.colors.brand
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

    const { user: { username}, wallet_balance , reward_balance } = useAppSelector(
        ({ authReducer }) => authReducer
    )

    return (
        <HStack
            justify='space-between'
            width='100%'
        >
            <HStack>
                {!isLargerThan600 && <Avatar border={`1px solid ${primary}`} size='lg' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />}
                <VStack
                    spacing='0px'
                    align='flex-start'
                >
                    <Text
                        color='#000'
                        fontSize='18px'
                        fontWeight={600}
                        fontFamily='Poppins'
                    >Hello {username}</Text>
                    <Text
                        color={text}
                        fontSize='13px'
                        fontWeight={400}
                        fontFamily='Poppins'
                    >Working Late</Text>

                </VStack>
            </HStack>
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
                    >{reward_balance}</Text>
                </HStack>
            </HStack>
        </HStack>
    )
}

export default Header