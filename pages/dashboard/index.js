import Layout from "../../public/components/Layout";
import { Box, Divider} from "@chakra-ui/react";
import Wallet from "./wallet";
import Slider from "./slider";
import Actions from "./action";
import Header from "./header";

const Dashboard = () => {
    return (
        <Layout>
            <Box
                padding='45px 30px'
            >
                <Header />
                <Wallet />
                <Box width='100%' height='1px' backgroundColor='rgba(0,0,0,0.4)' margin='14px 0px' />
                <Slider />
                <Box width='100%' height='1px' backgroundColor='rgba(0,0,0,0.4)' margin='14px 0px' />
                <Actions />
            </Box>
        </Layout>
    )
}

export default Dashboard