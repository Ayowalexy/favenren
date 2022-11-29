import { Box, Text, HStack, VStack } from "@chakra-ui/react";

const Actions = () => {
    return (
        <HStack
            width='100%'
            justify='center'
            align='center'
            gap='20px'
            // border='1px solid red'
            flexWrap='wrap'
            marginInlineStart={0}
        >
            <HStack
                width='100%'
                justify='flex-start'
                align='center'
            >
                <Text
                    color='#000'
                    fontSize='12px'
                    textAlign='left'
                    justify='flex-start'
                    alignSelf='flex-start'
                    fontWeight={500}
                    fontFamily='Poppins'
                >
                    Quick Actions
                </Text>
            </HStack>
            <VStack
                spacing='0px'
                width={{ base: '100%', md: '46%', lg: '48%' }}
                height='120px'
                borderRadius='15px'
                align='flex-start'
                padding='30px'
                backgroundColor='#E6F2F6'
            >
                <Text
                    color='#3D7D98'
                    fontSize='17px'
                    fontWeight={500}
                    fontFamily='Poppins'
                >Trade Gift Cards</Text>
                <Text
                    color='#000'
                    fontSize='14px'
                    fontWeight={400}
                    fontFamily='Poppins'
                >Sell your Gift cards at market leading rates</Text>
            </VStack>
            <VStack
                spacing='0px'
                width={{ base: '100%', md: '46%', lg: '48%' }}
                height='120px'
                borderRadius='15px'
                align='flex-start'
                padding='30px'
                boxSizing='border-box'
                marginInlineStart={0}
                backgroundColor='#E6F2F6'
            >
                <Text
                    color='#3D7D98'
                    fontSize='17px'
                    fontWeight={500}
                    fontFamily='Poppins'
                >Trade Cryptocurrency</Text>
                <Text
                    color='#000'
                    fontSize='14px'
                    fontWeight={400}
                    fontFamily='Poppins'
                >Sell your Gift cards at market leading rates</Text>
            </VStack>
            <VStack
                flexGrow={1}
                spacing='0px'
                width={{ base: '100%', md: '48%', lg: '48%' }}
                height='120px'
                borderRadius='15px'
                align='flex-start'
                marginInlineStart={0}
                padding='30px'
                backgroundColor='#E6F2F6'
            >
                <Text
                    color='#3D7D98'
                    fontSize='17px'
                    fontWeight={500}
                    fontFamily='Poppins'
                >Pay Bills, Buy Airtime & Data</Text>
                <Text
                    color='#000'
                    fontSize='14px'
                    fontWeight={400}
                    fontFamily='Poppins'
                >Sell your Gift cards at market leading rates</Text>
            </VStack>
        </HStack>
    )
}

export default Actions