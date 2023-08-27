import React from 'react';
import { Box, Heading, Image, Container, Stack, Text} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}
const Home = () => {
    return (
        <Box >
            <MyCarousel />

            <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
                <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
                    Services
                </Heading>

                <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column', 'row']}>
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg'}/>

                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus unde impedit veniam officiis atque accusantium, alias nulla eos ipsa placeat maxime distinctio reprehenderit vel. Sapiente, inventore optio placeat, ipsam, earum voluptatibus porro dolore quis perspiciatis minima soluta corporis? Nemo consequuntur iure earum, autem sapiente quisquam ad modi ex dignissimos, eaque optio deleniti nobis. Tempora minima doloribus itaque quasi nobis officiis a, dicta aut sequi, sapiente optio quibusdam est explicabo aspernatur cum sit perspiciatis recusandae. Optio rerum, maiores aliquam sed, libero hic nemo distinctio tenetur modi quasi saepe. Provident necessitatibus quasi vitae ipsum tenetur autem cupiditate voluptatem fuga optio blanditiis? 
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}
const MyCarousel = () =>
(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>

        <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Future Is Gaming</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Gaming On Console</Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Night Life Is Dumb!</Heading>
        </Box>
    </Carousel>
)




export default Home;
