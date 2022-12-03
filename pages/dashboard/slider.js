import { Carousel } from '@trendyol-js/react-carousel';
import { Box, Text, Flex, HStack, VStack } from '@chakra-ui/react';


const Slider = () => {
    return (
        <VStack
            width={{ base: '100%', lg: '800px', md: '100%' }}
            height={{ base: '130px', lg: '200px', md: '200px' }}
            borderRadius='20px'
            align='flex-start'
            paddingLeft='20px'
            justify='center'
            backgroundColor='#1D4079'
            bgSize='cover'
            backgroundRepeat='no-repeat'
            bgPos='right'
            bgImage={{
                base: 'url("/images/img/img4.png")'
            }}
        >
            <Text
                color='#fff'
                fontSize='16px'
                fontWeight={700}
                fontFamily='Poppins'
            >
                Refer and Earn
            </Text>
            <Text
                color='#F7F8F9'
                fontSize='12px'
                fontWeight={400}
                fontFamily='Poppins'
            >
                Earn cash gifts for every friend and family<br /> you refer to use Faveremit
            </Text>
            <HStack
                width='100px'
                height='20px'
                borderRadius='10px'
                align='center'
                justify='center'
                backgroundColor='#CEE0FD'
            >
                <Text
                    color='#1D4079'
                    fontSize='11px'
                    fontWeight={700}
                    fontFamily='Poppins'
                   
                >Read more</Text>
            </HStack>

        </VStack>
    )
}

export default Slider