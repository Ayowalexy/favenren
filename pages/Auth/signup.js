import AuthLayout from '../../public/components/AuthLayout'
import { Text, Flex, HStack, VStack, InputGroup, Input, InputRightElement, Button, Checkbox, Image } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible, AiFillInfoCircle } from 'react-icons/ai'
import { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReactFlagsSelect from "react-flags-select";
import '../../styles/Home.module.css'


import Link from 'next/link';



const Signup = () => {
    const [value, setValue] = useState();
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false)
    const [selected, setSelected] = useState('NG');


    return (
        <AuthLayout>
            <VStack
                width={{
                    base: '90%', md: '60%', lg: '60%'
                }}
                spacing='30px'
                align='center'
                justify='center'
                marginBottom='100px'
                height='fit-content'
            >
                <Image src='/images/svg/logo.svg' paddingTop='700px'/>
                <Text
                    color='#000'
                    fontSize='20px'
                    fontWeight={700}
                    fontFamily='Poppins'
                    
                   
                >
                    Create an account, it's free
                </Text>


                <VStack
                    spacing='5px'
                    align='flex-start'
                    width='100%'
                >

                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >Country</Text>
                    <ReactFlagsSelect
                        selected={selected}
                        fullWidth={true}
                        className='select_country'
                        onSelect={(code) => setSelected(code)}
                    />


                </VStack>

                <VStack
                    spacing='5px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >Full name</Text>
                    <Input
                        color='rgba(0,0,0,5)'
                        fontWeight={500}
                        fontSize='15px'
                        paddingLeft='20px'
                        placeholder='FirstName LastName'
                        width='100%'
                        height='60px'
                        border='1px solid rgba(0,0,0,0.4)'
                        borderRadius='10px'
                        backgroundColor='#F7F8F9'
                    />

                </VStack>



                <VStack
                    spacing='5px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >Username</Text>
                    <InputGroup>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight={500}
                            fontSize='15px'
                            paddingLeft='20px'
                            placeholder='Username'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            border='1px solid rgba(0,0,0,0.4)'
                            />
                        <InputRightElement
                            onClick={() => setShow(!show)} padding={'30px'}
                            children={<Text>{<AiFillInfoCircle size='20px' fill='#65708A' />}</Text>}
                        />
                    </InputGroup>

                </VStack>


                <VStack
                    spacing='5px'
                    align='flex-start'
                    width='100%'
                >

                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >Phone number</Text>
                    <PhoneInput
                    containerStyle={{
                        border:'1px solid rgba(0,0,0,0.1)',
                        borderRadius: '10px'
                    }}
                        inputStyle={{
                            color: 'rgba(0,0,0,5)',
                            fontWeight: 500,
                            fontSize: '15px',
                            paddingLeft: '80px',
                            width: '100%',
                            height: '60px',
                            borderRadius: '10px',
                            backgroundColor: '#F7F8F9',
                            border: 'none'
                        }}
                        country={'ng'}
                        value={value}
                        placeholder='8X XXX XXXX'
                        onChange={phone => setValue(phone)}
                        buttonStyle={{
                            width: '70px',
                            border: 'none',
                            paddingLeft: '15px'
                        }}
                    />


                </VStack>

                <VStack
                    spacing='5px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >Email Address</Text>
                    <Input
                        color='rgba(0,0,0,5)'
                        fontWeight={500}
                        fontSize='15px'
                        paddingLeft='20px'
                        placeholder='youremail@gmail.com'
                        width='100%'
                        height='60px'
                        borderRadius='10px'
                        backgroundColor='#F7F8F9'
                        border='1px solid rgba(0,0,0,0.4)'
                    />

                </VStack>


                <VStack
                    spacing='5px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >Referrer (Optional)</Text>
                    <InputGroup>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight={500}
                            fontSize='15px'
                            paddingLeft='20px'
                            placeholder="referrer's username"
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            border='1px solid rgba(0,0,0,0.4)'
                            />
                        <InputRightElement
                            onClick={() => setShow(!show)} padding={'30px'}
                            children={<Text>{<AiFillInfoCircle size='20px' fill='#65708A' />}</Text>}
                        />
                    </InputGroup>

                </VStack>


                <VStack
                    spacing='0px'
                    align='flex-start'
                    width='100%'
                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >Password</Text>
                    <InputGroup>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight='bold'
                            fontSize='15px'
                            paddingLeft='20px'
                            type={show ? 'text' : 'password'}
                            placeholder='Your password'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            border='1px solid rgba(0,0,0,0.4)'
                            />
                        <InputRightElement
                            onClick={() => setShow(!show)} padding={'30px'}
                            children={<Text>{show ? <AiFillEye size='20px' fill='#69ACD1' /> : <AiFillEyeInvisible size='20px' fill='#69ACD1' />}</Text>}
                        />
                    </InputGroup>

                </VStack>

                <VStack
                    spacing='5px'
                    align='flex-start'
                    width='100%'

                >
                    <Text
                        fontSize='16px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >Confirm Password</Text>
                    <InputGroup>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight='bold'
                            fontSize='15px'
                            paddingLeft='20px'
                            type={show ? 'text' : 'password'}
                            placeholder='Confirm password'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            border='1px solid rgba(0,0,0,0.4)'
                            />
                        <InputRightElement
                            onClick={() => setShow(!show)} padding={'30px'}
                            children={<Text>{show ? <AiFillEye size='20px' fill='#69ACD1' /> : <AiFillEyeInvisible size='20px' fill='#69ACD1' />}</Text>}
                        />
                    </InputGroup>

                </VStack>

                <Checkbox size='md' defaultChecked padding='20px 0px'>
                    <Text
                        fontSize='14px'
                        color='#000'
                        fontWeight={500}
                        fontFamily='Poppins'
                    >
                        I agree to the <span style={{ color: '#69ACD1', fontWeight: 500 }}>Terms & Conditions</span> and <span style={{ color: '#69ACD1', fontWeight: 500 }}>Privacy Policy </span>
                    </Text>
                </Checkbox>

                <Button
                    outline='none'
                    color='#fff'
                    fontSize='20px'
                    fontWeight={400}
                    width='100%' height='60px' borderRadius='10px' backgroundColor='#69ACD1' border='none'
                >Login</Button>
                <HStack spacing='10px' justify='center' align='center'>
                    <Text
                        color='rgba(0,0,0.0.4)'
                        fontSize='15px'
                        fontWeight={500}
                    >Already have an account?</Text>
                    <Link href='/Auth/login'>
                        <Text
                            color='#69ACD1'
                            fontSize='15px'
                            fontWeight={500}
                        >Login</Text>
                    </Link>

                </HStack>
            </VStack>
        </AuthLayout >
    )
}

export default Signup