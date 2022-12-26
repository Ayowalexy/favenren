import Layout from "../../public/components/Layout";
import { Text, Box, VStack, HStack, useTheme, Image, Button } from "@chakra-ui/react";
import { useUser } from "../../public/context/userContext";
import { useRouter } from "next/router";


const UtilityBills = () => {
    const theme = useTheme();
    const { text_2, btn, primary } = theme.colors.brand;
    const { setPage } = useUser();
    const router = useRouter();

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
                        Utility Bills
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        Check out the current rate of different gift cards in Naira using Faveremit's gift card rate calculator.
                    </Text>
                </VStack>

                <HStack
                    width='100%'
                    marginTop='40px'
                    flexWrap='wrap'
                    justify='space-between'
                >
                    {
                        [
                            {
                                name: 'Airtime/Data',
                                image: '/images/svg/airtime.svg',
                                tag: 'Buy Now',
                                route: '/utility-bills/airtime-data',
                                description: "Check out the current rate of different gift cards in Naira using Faveremit's gift card rate calculator."
                            },
                            {
                                name: 'Electricity Bill',
                                image: '/images/svg/electricity.svg',
                                tag: 'Pay Now',
                                route: '/utility-bills/electricity-bills',
                                description: "Check out the current rate of different gift cards in Naira using Faveremit's gift card rate calculator."
                            },
                            {
                                name: 'TV Bills',
                                image: '/images/svg/bill.svg',
                                tag: 'Pay Now',
                                route: '/utility-bills/tv-bills',
                                description: "Check out the current rate of different gift cards in Naira using Faveremit's gift card rate calculator."
                            },
                        ].map(({ name, image, route, tag, description }, idx) => (
                            <VStack
                                
                                key={idx}
                                border='1px solid #DFE6E9'
                                backgroundColor='#fff'
                                height='424px'
                                width='32%'
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
                                <Button
                                    backgroundColor={primary}
                                    color='#fff'
                                    fontWeight='400'
                                    borderRadius='7px'
                                    height='40px'
                                    width='110px'
                                    onClick={() => {
                                        setPage({
                                            name,
                                            description
                                        });
                                        router.push(route)
                                    }}
                                >
                                    {tag}
                                </Button>

                            </VStack>
                        ))
                    }
                </HStack>
            </Box>
        </Layout>
    )
}

export default UtilityBills