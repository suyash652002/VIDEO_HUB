import React from 'react'
import { Box, Stack, Heading, VStack, HStack, Button, Input, Text} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai'
const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'}
            color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'} alignItems={['center', 'left']}>
                        Subcribe to get updates
                    </Heading>

                    <HStack borderBottom={'2px solid white'}>
                        <Input placeholder='Enter Email Here...' border={"none"} borderRight={'none'} outline={'none'} focusBorderColor='none' />

                        <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend size={'20'} />
                        </Button>
                    </HStack>
                </VStack>

                <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                    <Heading textAlign={'center'} textTransform={'uppercase'}> VIDEO HUB</Heading>
                    <Text> All Rights Reserved</Text>
                </VStack>

                <VStack w={'full'} >
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a href="https://instagram.com/suyash_164/" target={'blank'}>Instagram</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a href="https://www.linkedin.com/in/suyash-bhadgaonkar-9860b6243/" target={"blank"}>Linkdin</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a href="https://github.com/suyash652002" target={"blank"}>GitHub</a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer
