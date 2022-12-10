import Layout from "../../public/components/Layout";
import { Box, Text, VStack, HStack, useTheme, Tabs, TabList, TabPanels, Tab, TabPanel, Select, Input, Button } from "@chakra-ui/react";

const VButton = ({ children }) => {
    const theme = useTheme();
    const { text_2, btn } = theme.colors.brand;

    return (

        <Button
            marginTop='40px'
            alignSelf='center'
            color='#fff'
            backgroundColor={btn}
            height='56px'
            fontWeight={500}
            width={{ base: '100%', md: '300px', lg: '300px' }}
        >
            {children}
        </Button>
    )
}

const IIput = ({ label, name }) => (
    <VStack
        spacing='5px'
        align='flex-start'
        width='100%'
    >

        <Text
            fontSize='16px'
            color='#333F51'
            paddingTop='20px'
            fontWeight={500}
            fontFamily='Poppins'
        >{label}</Text>
        <Input
            color='#8896AB'
            fontWeight={400}
            fontSize='15px'
            width='100%'
            height='60px'
            borderRadius='10px'
            backgroundColor='#F7F8F9'
            outline='none'
            paddingLeft='20px'
            border='1px solid rgba(0,0,0,0.1)'
            placeholder={name}
        />
    </VStack>
)


const Account = () => {
    const theme = useTheme();
    const { text_2, btn } = theme.colors.brand;

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
                        Account
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        Check out the current rate of different gift cards in Naira using Faveremit's gift card rate calculator.
                    </Text>
                </VStack>

                <Box>
                    <Tabs>
                        <TabList
                            marginTop='30px'
                            backgroundColor='#F2F2F2'
                            height='75px'
                        >
                            <Tab
                                _selected={{ color: '#10B6E8', borderBottom: '3px solid #10B6E8' }}
                                fontSize={{base: '14px', lg: '24px', md: '24px'}}
                                fontWeight={500}
                                color='#000'
                                marginRight={{base: '20px', lg: '50px', md: '50px'}}
                                fontFamily='Poppins'
                            >Personal</Tab>
                            <Tab
                                _selected={{ color: '#10B6E8', borderBottom: '3px solid #10B6E8' }}
                                fontSize={{base: '14px', lg: '24px', md: '24px'}}
                                fontWeight={500}
                                color='#000'
                                marginRight={{base: '20px', lg: '50px', md: '50px'}}
                                fontFamily='Poppins'
                            >Bank Account</Tab>
                            <Tab
                                _selected={{ color: '#10B6E8', borderBottom: '3px solid #10B6E8' }}
                                fontSize={{base: '14px', lg: '24px', md: '24px'}}
                                fontWeight={500}
                                color='#000'
                                fontFamily='Poppins'
                            >Security</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <VStack
                                    margin={{base: '0px', md: '30px 20px', lg: '30px 20px'}}
                                    align='flex-start'
                                    width={{base: '100%', md: '80%', lg: '80%'}}
                                >
                                    <HStack
                                        spacing='30px'
                                    >
                                        <Box
                                            backgroundColor='#D9D9D9'
                                            borderRadius='50%'
                                            height={{base: '90px', lg: '145.48px', md: '145.48px'}}
                                            width={{base: '90px', lg: '145.48px', md: '145.48px'}}
                                        />
                                        <VStack
                                            align='flex-start'
                                        >
                                            <Text
                                                color='#000'
                                                fontSize='24px'
                                                fontWeight={500}
                                            >Oluwatobi Michael</Text>
                                            <Text
                                                color='#10B6E8'
                                                fontSize='18px'
                                                fontWeight={500}
                                            >@devoluwatobi</Text>
                                        </VStack>
                                    </HStack>

                                    <IIput
                                        label='Full name'
                                        name='full name'
                                    />
                                    <IIput
                                        label='Email'
                                        name='email'
                                    />
                                    <IIput
                                        label='phone'
                                        name='phone'
                                    />

                                    <HStack align='flex-start'>
                                        <VButton>
                                            Update Profile
                                        </VButton>
                                    </HStack>

                                </VStack>
                            </TabPanel>
                            <TabPanel>
                                <VStack
                                    align='flex-start'
                                    margin={{base: '0px', md: '30px 20px', lg: '30px 20px'}}
                                    width={{base: '100%', md: '80%', lg: '80%'}}
                                >
                                    <IIput
                                        label='Account Number'
                                        name='Account Number'
                                    />
                                    <IIput
                                        label='Bank'
                                        name='Bank'
                                    />
                                    <IIput
                                        label='Account Holder’s Name'
                                        name='name'
                                    />

                                    <HStack align='flex-start'>
                                        <VButton>
                                            Update Bank details
                                        </VButton>
                                    </HStack>
                                </VStack>
                            </TabPanel>
                            <TabPanel>
                            <VStack
                                    align='flex-start'
                                    margin={{base: '0px', md: '30px 20px', lg: '30px 20px'}}
                                    width={{base: '100%', md: '80%', lg: '80%'}}
                                >
                                    <IIput
                                        label='Current Password'
                                        name='Current Password'
                                    />
                                    <IIput
                                        label='New Password'
                                        name='New Password'
                                    />
                                    <IIput
                                        label='Confirm New Password'
                                        name='new password again'
                                    />

                                    <HStack align='flex-start'>
                                        <VButton>
                                            Update Password
                                        </VButton>
                                    </HStack>
                                </VStack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
        </Layout>
    )
}

export default Account