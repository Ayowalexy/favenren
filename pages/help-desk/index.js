import Layout from "../../public/components/Layout";
import { Box, Text, VStack, HStack, useTheme, Select, Input, Button, Image, Link } from "@chakra-ui/react";
import { useState } from "react";
import TawkTo from 'tawkto-react'
import { useEffect } from "react";


const HelpDesk = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState('US');

    const { text_2, btn, primary } = theme.colors.brand;

    useEffect(() => {

        const tawk = new TawkTo(process.env.NEXT_PUBLIC_PROPERTY_ID, process.env.NEXT_PUBLIC_TAWK_ID)

    }, [])
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
                        Help desk
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        Check out the current rate of different gift cards in Naira using Faveremit's gift card rate calculator.
                    </Text>
                </VStack>

                <VStack
                    marginTop='40px'
                    padding={{ base: "60px 20px", lg: '60px 70px', md: '60px 40px' }}
                    width='100%'
                    borderRadius='7px'
                    align='center'
                    justify='center'
                    backgroundColor='#FFFFFF'
                    border='1px solid #DFE6E9'
                >
                    <HStack width='100%' justify='flex-start' align='flex-start' gap='10px' flexWrap='wrap'>
                        {
                            [
                                {
                                    name: "Live Chat",
                                    text: 'Chat with a support agent',
                                    action: 'Chat Now',
                                    image: '/images/svg/chat.svg',
                                    to: ''
                                },
                                {
                                    name: "Email",
                                    text: 'hello@faveremit.com',
                                    action: 'Send Email',
                                    to: 'mailto:hello@faveremitgmail.com',
                                    image: '/images/svg/email.svg'
                                }, {
                                    name: "Call center",
                                    text: '+234 8138 865 6605',
                                    to: 'tel:+234 8138 865 6605',
                                    action: 'Call Now',
                                    image: '/images/svg/call.svg'
                                }, {
                                    name: "FAQs",
                                    text: 'Checkout our FAQs',
                                    action: 'Check now',
                                    image: '/images/svg/faq.svg',
                                    to: ''
                                },
                            ].map(({ name, text, action, image, to } = element, idx) => (

                                <VStack

                                    key={idx}
                                    border='1px solid #DFE6E9'
                                    backgroundColor='#fff'
                                    height='424px'
                                    marginBottom='10px'
                                    width={{
                                        base: '100%', lg: '32%', md: '32%'
                                    }}
                                    justify='space-evenly'
                                    borderRadius='7px'
                                >
                                    <Image src={image} />
                                    <Text
                                        fontFamily='Poppins'
                                        fontWeight={500}
                                        fontSize='20px'
                                        color='#111314'
                                    >
                                        {name}
                                    </Text>
                                    <Text
                                        fontFamily='Poppins'
                                        fontWeight={400}
                                        fontSize='16px'
                                        color='#10B6E8'
                                    >
                                        {text}
                                    </Text>
                                    <Link
                                        textDecoration='none'
                                        href={
                                            to ? to : '#'
                                        }>
                                        <Button
                                            backgroundColor={primary}
                                            color='#fff'
                                            textDecoration='none'
                                            fontWeight='400'
                                            borderRadius='7px'
                                            height='40px'
                                            width='110px'
                                            onClick={() => {

                                            }}
                                        >
                                            {action}
                                        </Button>
                                    </Link>


                                </VStack>
                            ))
                        }
                    </HStack>
                </VStack>
            </Box>
        </Layout>
    )
}

export default HelpDesk