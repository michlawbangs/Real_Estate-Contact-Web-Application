import React from 'react'
import { Flex, Box, Text, Button, Input, FormControl, Textarea, Stack } from '@chakra-ui/react';


function Contact() {
    return (
        <Box className="contact" margin='5rem 0 0 0'>
            <Text 
            fontSize='1.1rem' 
            fontWeight='bold' 
            textTransform='uppercase' 
            mb='1rem'
            >
                Contact Us
            </Text>
            <Flex 
            flexWrap='wrap' 
            justifyContent='space-between' 
            alignItems={'center'}
            >
                <Box mb='3rem'>
                    <Text fontSize='1.8rem'
                    width='25rem' 
                    m='1rem 0' 
                    fontWeight='540' 
                    letterSpacing='2px'
                    >
                        Mama Beach, Freetown Peninsula 
                    </Text>

                    <Text fontSize='1.5rem' fontWeight='550'>
                        Email: michlawbang123@gmail.com
                    </Text>

                    <Text fontSize='1.5rem' m='1rem 0' fontWeight='550'>
                        Phone: +(232)79 596 449
                    </Text>

                    <Text w='25rem' fontSize='1.2rem' fontWeight='550' color='#6D6D6D'>
                        Give us a call or visit us anytime, we will be happy to answer all of your questions.
                    </Text>
                </Box>
                <Box 
                w='32rem'
                >
                <Stack spacing={5}>
                <FormControl>
                    <Text mb='10px' 
                    fontWeight='550' 
                    fontSize='1.1rem'
                    >
                        Fullname
                    </Text>
                    <Input 
                    type='text' 
                    id='name' 
                    border={'none'} 
                    borderBottom='1px solid black' 
                    placeholder='Enter fullname' 
                    />
                </FormControl>
                <FormControl>
                    <Text 
                    mb='10px' 
                    fontWeight='550' 
                    fontSize='1.1rem'
                    >
                        Email
                    </Text>
                    <Input 
                    type='email' 
                    id='email' 
                    border={'none'} 
                    borderBottom='1px solid black' 
                    placeholder='Enter email' 
                    />
                </FormControl>
                <FormControl>
                    <Text 
                    mb='10px' 
                    fontWeight='550' 
                    fontSize='1.1rem'
                    >
                        Message
                    </Text>
                    <Textarea placeholder='Message' />
                </FormControl>
                <Button 
                type='submit' 
                colorScheme='#296A87' 
                bg='#242627' 
                p='8px' 
                color='white' 
                fontSize='1rem' 
                border={'none'} 
                borderRadius='3px' 
                mt='1rem'
                >
                    Send
                </Button>
                </Stack>
                </Box>
            </Flex>
        </Box>
    )
}

export default Contact