import { Box, Text, Flex, HStack, VStack, useMediaQuery } from '@chakra-ui/react';
import { useAppSelector } from '../../public/redux/store';
import Slider from "react-slick";
import { Carousel } from '@trendyol-js/react-carousel';


const Slider_ = () => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
    const { promotions } = useAppSelector(
        ({ authReducer }) => authReducer
    )

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            {
                isLargerThan600 ?
                    <Box
                        overflow='scroll'
                        height='200px'
                        width='100%'
                    // display='flex'
                    >
                        {/* <HStack height='100%' width='2700px'> */}
                            <Carousel show={1.1} slide={3} swiping={true}>
                                {
                                    promotions.map(element => (
                                        <Box
                                            key={element.banner_url}
                                            width='900px'
                                            height='200px'
                                            marginRight='10px'
                                            bgSize='cover'
                                            borderRadius='20px'
                                            backgroundRepeat='no-repeat'
                                            bgPos='center'
                                            backgroundColor='red'
                                            bgImage={{
                                                base: `url("${element.banner_url}")`
                                            }}
                                        />
                                    ))
                                }
                            </Carousel>
                        {/* </HStack> */}
                    </Box>
                    :
                    (
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
        </>
    )
}

export default Slider_