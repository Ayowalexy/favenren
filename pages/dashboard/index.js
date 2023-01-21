import Layout from "../../public/components/Layout";
import { Box, Divider, useMediaQuery } from "@chakra-ui/react";
import Wallet from "./wallet";
import Slider_ from "./slider";
import Actions from "./action";
import Header from "./header";

const Dashboard = () => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    return (
        <Layout>
            <Box
               padding={{
                lg: '45px 30px', md: '45px 30px', base: '20px'
            }}
            >
                <Header />
                <Wallet />
                <Box width='100%' height='1px' backgroundColor='rgba(0,0,0,0.4)' margin='14px 0px' />
                <Slider_ />
                <Box width='100%' height='1px' backgroundColor='rgba(0,0,0,0.4)' margin='14px 0px' />
                <Actions />
            </Box>
        </Layout>
    )
}

export default Dashboard