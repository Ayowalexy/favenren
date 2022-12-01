import {
    Box, Flex, Text, HStack,
    ListItem,
    ListIcon,
    List,
    useMediaQuery
} from "@chakra-ui/react";
import { navigations } from "./navigations";
import SideBar from "./sideBar";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoNewspaper } from 'react-icons/io5';
import MobileMenu from "./mobileMenu";
import { useState } from "react";

const Layout = ({ children }) => {
    const [show, setShow] = useState(false);
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    return (
        <Flex
            width='100%'
            align='center'
            justify='center'
        >
            {isLargerThan600 ? <SideBar /> : <MobileMenu show={show} setShow={setShow} />}
            <Box
                height='100vh'
                backgroundColor='#F7F8F9'
                flexGrow={1}
                overflow='scroll'
                
            >
                {
                    !isLargerThan600 && (
                        <HStack position='fixed' backgroundColor='#fff' zIndex={1000} padding='40px 25px 20px 25px' width='100%' justify='space-between' align='center'>
                            <HiOutlineMenuAlt1 onClick={() => setShow(true)} size='30px' />
                            <IoNewspaper size='30px' />
                        </HStack>
                    )
                }
                {isLargerThan600 && <Box paddingTop={isLargerThan600 ? '0px' : '100px'} />}
                {children}
            </Box>
        </Flex >
    )
}

export default Layout