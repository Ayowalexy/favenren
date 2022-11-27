import {
    Box, Flex, Text, HStack,
    ListItem,
    ListIcon,
    List,
} from "@chakra-ui/react";
import { navigations } from "./navigations";
import SideBar from "./sideBar";

const Layout = ({children}) => {
    return (
        <Flex
            width='100%'
            align='center'
            justify='center'
        >
            <SideBar />
            <Box
                height='100vh'
                backgroundColor='#F7F8F9'
                flexGrow={1}
                overflow='scroll'
            >
                {children}
            </Box>
        </Flex >
    )
}

export default Layout