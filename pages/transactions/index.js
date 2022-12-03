import Layout from "../../public/components/Layout";
import { Box, Text, VStack, HStack, useTheme, Select, Input, Button, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'

const Transactions = () => {
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
                        Transactions
                    </Text>
                    <Text
                        color={text_2}
                        fontSize={'14px'}
                        fontWeight={400}
                    >
                        Your transactions history on Faveremit
                    </Text>
                </VStack>

                <VStack
                    marginTop='40px'
                    padding={{ base: "60px 20px", lg: '30px', md: '60px 40px' }}
                    width='100%'
                    borderRadius='7px'
                    align='center'
                    justify='center'
                    backgroundColor='#FFFFFF'
                    border='1px solid #DFE6E9'
                >

                    <HStack
                        justify='space-between'
                        width='100%'
                        flexWrap='wrap'
                    >
                        <Text

                            color={text_2}
                            fontSize={'20px'}
                            fontWeight={500}
                        >
                            Transactions
                        </Text>
                        <HStack
                            spacing='15px'
                            align='center'
                            justify='center'
                        >
                            <Select
                                height='40px'
                                width='140px'
                                borderRadius='10px'
                                border='1px solid #DFE6E9'
                            >
                                <option>Latest</option>

                            </Select>
                            <InputGroup>
                                <InputLeftElement>
                                    <AiOutlineUser />
                                </InputLeftElement>
                                <Input

                                    fontSize='14px'
                                    color='#B2BEC3'
                                    placeholder="Search"
                                    height='40px'
                                    width={{lg: '240px', md: '240px', base: '150px'}}
                                    borderRadius='10px'
                                    border='1px solid #DFE6E9'
                                />
                            </InputGroup>
                        </HStack>
                    </HStack>

                    <TableContainer width='100%' paddingTop='30px'>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Type</Th>
                                    <Th>USD Amount</Th>
                                    <Th>Naira Amount</Th>
                                    <Th>Date</Th>
                                    <Th>Status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>

                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>

                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>
                                    </Td>
                                    <Td>
                                        <HStack
                                            align='center'
                                            justify='center'
                                            padding='6px 10px'
                                            borderRadius='10px'
                                            border='1px solid #FF3B30'
                                            backgroundColor='#FCE8EC'
                                        >
                                            <Text
                                                color={'#FF3B30'}
                                                fontSize={'14px'}
                                                fontWeight={400}
                                                fontFamily='Poppins'
                                            >SUSPENDED</Text>
                                        </HStack>
                                    </Td>
                                </Tr>
                                <Tr>

                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>

                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>
                                    </Td>
                                    <Td>
                                        <HStack
                                            align='center'
                                            justify='center'
                                            padding='6px 10px'
                                            borderRadius='10px'
                                            border='1px solid #10B6E8'
                                            backgroundColor='#EBF3FE'
                                        >
                                            <Text
                                                color={'#10B6E8'}
                                                fontSize={'14px'}
                                                fontWeight={400}
                                                fontFamily='Poppins'
                                            >ACTIVE</Text>
                                        </HStack>
                                    </Td>
                                </Tr>
                                <Tr>

                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>

                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#2D3436'}
                                            fontSize={'14px'}
                                            fontWeight={300}
                                            fontFamily='Poppins'
                                        >
                                            Some Text
                                        </Text>
                                    </Td>
                                    <Td>
                                        <HStack
                                            align='center'
                                            justify='center'
                                            padding='6px 10px'
                                            borderRadius='10px'
                                            border='1px solid #FF9500'
                                            backgroundColor='#FCF6E8'
                                        >
                                            <Text
                                                color={'#FF9500'}
                                                fontSize={'14px'}
                                                fontWeight={400}
                                                fontFamily='Poppins'
                                            >PENDING APPROVAL</Text>
                                        </HStack>
                                    </Td>
                                </Tr>
                            </Tbody>

                        </Table>
                    </TableContainer>


                </VStack>
            </Box>
        </Layout>
    )
}

export default Transactions