import Layout from "../../public/components/Layout";
import { Box, Text, VStack, HStack, useTheme, Select, Input, Button, InputGroup, InputLeftElement, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { getTransactions } from "../../public/redux/reducers/cards/thunkAction";
import { useAppSelector } from "../../public/redux/store";
import { AiOutlineUser } from 'react-icons/ai'
import { Preloader } from "../Auth/otp";
import Pagination from "./pagination";

const Transactions = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { text_2, btn } = theme.colors.brand;
    const [paginatedValues, setPaginatedValues] = useState(
        []
      );

    const { transactions, loading } = useAppSelector(
        ({ cardReducer }) => cardReducer
    )

    console.log('transactions', transactions)

    useEffect(() => {
        // dispatch(getTransactions())
    }, [])
    return (
        <Layout>
            {
                loading === 'pending'
                    ? <Preloader />
                    : (
                        <>
                            {
                                (
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

                                        {
                                            transactions[0]?.length === 0
                                                ?
                                                <Text
                                                    color={text_2}
                                                    textAlign='center'
                                                    paddingTop={'50px'}
                                                    fontSize={'30px'}
                                                    fontWeight={500}
                                                >No Transaction</Text>
                                                :
                                                (
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
                                                                        width={{ lg: '240px', md: '240px', base: '150px' }}
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
                                                                        <Th>Title</Th>
                                                                        <Th>Amount</Th>
                                                                        <Th>Date</Th>
                                                                        <Th>Icon</Th>
                                                                        <Th>Status</Th>
                                                                    </Tr>
                                                                </Thead>
                                                                <Tbody>
                                                                    {
                                                                        paginatedValues?.map(element => {
                                                                            return (
                                                                                <Tr key={element.id}>

                                                                                    <Td>
                                                                                        <Text
                                                                                            color={'#2D3436'}
                                                                                            fontSize={'14px'}
                                                                                            fontWeight={300}
                                                                                            fontFamily='Poppins'
                                                                                        >
                                                                                            {element.type}
                                                                                        </Text>

                                                                                    </Td>
                                                                                    <Td>
                                                                                        <Text
                                                                                            color={'#2D3436'}
                                                                                            fontSize={'14px'}
                                                                                            fontWeight={300}
                                                                                            fontFamily='Poppins'
                                                                                        >
                                                                                            {element.title}
                                                                                        </Text>
                                                                                    </Td>
                                                                                    <Td>
                                                                                        <Text
                                                                                            color={'#2D3436'}
                                                                                            fontSize={'14px'}
                                                                                            fontWeight={300}
                                                                                            fontFamily='Poppins'
                                                                                        >
                                                                                            {element.amount}
                                                                                        </Text>
                                                                                    </Td>
                                                                                    <Td>
                                                                                        <Text
                                                                                            color={'#2D3436'}
                                                                                            fontSize={'14px'}
                                                                                            fontWeight={300}
                                                                                            fontFamily='Poppins'
                                                                                        >
                                                                                            {new Date(element.created_at).toLocaleDateString()}
                                                                                        </Text>
                                                                                    </Td>
                                                                                    <Td>
                                                                                        <Image src={element.icon} width={'40px'} height='40px' />
                                                                                    </Td>
                                                                                    <Td>
                                                                                        <HStack
                                                                                            align='center'
                                                                                            justify='center'
                                                                                            padding='6px 10px'
                                                                                            borderRadius='10px'
                                                                                            border={
                                                                                                `1px solid ${element.status === 'Pending' ?
                                                                                                    '#FF9500'
                                                                                                    : element.status === 'Completed'
                                                                                                        ? '#10B6E8'
                                                                                                        : element.status === 'Failed'
                                                                                                            ? '#FF3B30'
                                                                                                            : '#FF3B30'
                                                                                                }`
                                                                                            }
                                                                                            backgroundColor={
                                                                                                element.status === 'Pending'
                                                                                                    ? '#FCF6E8'
                                                                                                    : element.status === 'Completed'
                                                                                                        ? '#EBF3FE'
                                                                                                        : element.status === 'Failed'
                                                                                                            ? '#FCE8EC'
                                                                                                            : '#FCE8EC'
                                                                                            }
                                                                                        >
                                                                                            <Text
                                                                                                color={
                                                                                                    element.status === 'Pending' ?
                                                                                                        '#FF9500'
                                                                                                        : element.status === 'Completed'
                                                                                                            ? '#10B6E8'
                                                                                                            : element.status === 'Failed'
                                                                                                                ? '#FF3B30'
                                                                                                                : '#FF3B30'
                                                                                                }
                                                                                                fontSize={'14px'}
                                                                                                fontWeight={400}
                                                                                                fontFamily='Poppins'
                                                                                            >{element.status}</Text>
                                                                                        </HStack>
                                                                                    </Td>
                                                                                </Tr>
                                                                            )
                                                                        })
                                                                    }


                                                                </Tbody>

                                                            </Table>
                                                        </TableContainer>


                                                    </VStack>
                                                )
                                        }
                                        <Pagination
                                            values={transactions}
                                            pageLength={5}
                                            setNewValues={setPaginatedValues}
                                        />

                                    </Box>
                                )
                            }
                        </>
                    )
            }
        </Layout>
    )
}

export default Transactions