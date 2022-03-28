import { useState } from 'react'
import { Flex, Box, Text, Button, Input, FormControl, Textarea, Stack } from '@chakra-ui/react';
// import { useForm } from 'react-hook-form' 
import { motion } from 'framer-motion'
import { reveal, formAnimation } from '../utils/Animation';
import { useScroll } from '../components/useScroll'
import { useToast } from '@chakra-ui/react'

const MotionBox = motion(Box);
const MotionText = motion(Text);

function Contact() {
    const toast = useToast()
    const [element, controls] = useScroll();
   
    async function handleOnSubmit (e) {
        e.preventDefault();
        // storage
        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field => {
            if(!field.name) return
            // otherwise
            formData[field.name] = field.value
        })
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        console.log(formData);
    }
    
    return (
        <Box className="contact" id='contact_' margin='5rem 0 0 0'>
            <MotionText
            animate={controls}
            variants={reveal}
            transition={{ delay: 0.1, stiffness: 300 }} 
            fontSize='1.1rem' 
            fontWeight='bold' 
            textTransform='uppercase' 
            mb='1rem'
            >
                Contact Us
            </MotionText>
            <Flex 
            flexWrap='wrap' 
            justifyContent='space-between' 
            alignItems={'center'}
            >
                <Box
                mb='3rem'
                ref={element}
                >
                    <MotionBox
                    animate={controls}
                    variants={reveal}
                    transition={{ delay: 0.1, stiffness: 300 }} 
                    >
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
                    </MotionBox>
                </Box>
                <Box ref={element}
                w='32rem'
                >
                    <MotionBox
                    animate={controls}
                    variants={formAnimation}
                    transition={{ delay: 0.1, stiffness: 300 }}>
                        <form method="post" onSubmit={handleOnSubmit}>
                            <Stack spacing={5}>
                                <FormControl>
                                    <Text mb='10px' fontWeight='550' 
                                    fontSize='1.1rem'
                                    >
                                        Fullname
                                    </Text>
                                    <Input type='text' name='name' 
                                    border={'none'} 
                                    borderBottom='1px solid black' 
                                    placeholder='Enter fullname' 
                                    />
                                </FormControl>
                                <FormControl>
                                    <Text mb='10px' fontWeight='550' fontSize='1.1rem'
                                    >
                                        Email
                                    </Text>
                                    <Input type='email' name='email'
                                    border={'none'} 
                                    borderBottom='1px solid black' 
                                    placeholder='Enter email' 
                                    />
                                </FormControl>
                                <FormControl>
                                    <Text mb='10px' fontWeight='550' fontSize='1.1rem'
                                    >
                                        Message
                                    </Text>
                                    <Textarea name='message' placeholder='Message' />
                                </FormControl>
                                <Button type='submit' 
                                colorScheme='#296A87' 
                                bg='#242627' 
                                p='8px' 
                                color='white' 
                                fontSize='1rem' 
                                border={'none'} 
                                borderRadius='3px' 
                                mt='1rem'
                                onClick={() =>
                                    toast({
                                      title: 'Message Sent successfully.',
                                      position: 'top',
                                      status: 'success',
                                      duration: 3000,
                                      isClosable: true,
                                    })
                                  }
                                >
                                    Send
                                </Button>
                            </Stack>
                        </form>
                    </MotionBox>
                </Box>
            </Flex>
        </Box>
    )
}

export default Contact