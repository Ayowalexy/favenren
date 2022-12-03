import {
    Box, Flex, Text, HStack,
    ListItem,
    ListIcon,
    List,
    Avatar,
    VStack,
    useMediaQuery,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Image
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoMdClose } from 'react-icons/io'
import { useNavigation } from '../context/navigationContext';
import { useRouter } from "next/router";
import { navigations } from "./navigations";


const MobileMenu = ({ show, setShow }) => {
    const { active, setActive } = useNavigation();
    const [hideBlur, setBlur] = useState(false);
    const initial = useRef(1)
    const router = useRouter();

    return (
        <>
            <Drawer placement={'left'} onClose={() => setShow(!show)} isOpen={show}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>
                        <Image src="/images/svg/logo.svg" />
                    </DrawerHeader>
                    <DrawerBody>
                        <List width='100%' pt={"80px"} spacing={1}>

                            {navigations.map((element, idx) => (
                                <ListItem
                                    color={active === element.name ? '#53AED5' : '#E7EFFA'}
                                    height="56px"
                                    width="100%"
                                    backgroundColor={active === element.name ? '#E7EFFA' : '#fff'}
                                    cursor="pointer"
                                    fontFamily="Poppins"
                                    transition="all ease 500ms"
                                    padding="14px 13px"
                                    key={idx}
                                    onClick={() => {
                                        setActive(element.name)
                                        router.push(`/${element.route}`)
                                    }}

                                >

                                    <HStack>
                                        {active === element.name ? (<Box transition="all ease 500ms"
                                            width='3.5px' marginLeft='-10px' height='20px' backgroundColor='#53AED5' />
                                        ) : null}
                                        <ListIcon
                                            w={25}
                                            h={25}
                                            as={element.icon}
                                            color={active === element.name ? '#53AED5' : '#63708C'}
                                        />
                                        <Text

                                            fontStyle="normal"
                                            fontWeight={active === element.name ? 600 : 400}
                                            fontSize="16px"
                                            lineHeight="20px"
                                            letterSpacing="0.2px"
                                            color={active === element.name ? '#53AED5' : '#63708C'}

                                        >
                                            {element.name}
                                        </Text>

                                    </HStack>

                                </ListItem>
                            ))}

                            <ListItem
                                position='absolute'
                                bottom='20px'
                                paddingLeft='14px'
                            >
                                <HStack>
                                    <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                    <VStack
                                        spacing='0px'
                                        align='flex-start'
                                    >
                                        <Text
                                            color='#000'
                                            fontWeight={600}
                                            fontSize='18px'
                                            fontFamily='Poppins'
                                        >
                                            Devoluwatobi
                                        </Text>
                                        <Text
                                            color='#63708C'
                                            fontWeight={400}
                                            fontSize='13px'
                                            fontFamily='Poppins'
                                        >
                                            Developer
                                        </Text>
                                    </VStack>
                                </HStack>
                            </ListItem>
                        </List>



                    </DrawerBody>
                </DrawerContent>
            </Drawer>


        </>
    )
}

export default MobileMenu