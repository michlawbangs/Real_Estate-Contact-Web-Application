import React from 'react'
import Image from 'next/image'
import { Flex, Box, Text, Button, Input } from '@chakra-ui/react';

import about_img from '../assets/images/about-img.png'

function About() {
  return (
    <Box className='about'>
        <Text 
        fontSize='1.1rem' 
        fontWeight='bold' 
        textTransform='uppercase' 
        margin='0'
        >
            About Us
        </Text>
        <Flex 
        justifyContent='space-between' 
        alignItems='flex-start' 
        /*bg='red'*/ margin='0'
        >
            <Box mt='1rem'>
                <Text 
                fontSize={['1.8rem', '1.5rem', '1.8rem', '2.3rem']} 
                width={['24rem', '17rem', '24rem', '24rem']} 
                m='1rem 0 0 0' 
                fontWeight='550' letterSpacing='2px'
                >
                    We provide <span>Buy</span> and <span>Rental</span> Property
                </Text>
                <Text 
                width={['25rem', '20rem', '28rem', '28rem']} 
                lineHeight={1.5} 
                fontSize={['1.1rem', '1rem', '1.1rem', '1.4rem']} 
                marginTop='0.9rem' letterSpacing='1.3px' p='0'
                >
                    Are you looking to buy or rent a house? We provide homes and better services compare to those offers by other companies.
                </Text>
                <Button  
                border='none' bg='#242627' 
                borderRadius='3px' 
                padding='3px 20px' 
                mt='1.2rem' colorScheme='#296A87'
                >
                    <Text 
                    fontSize='1rem' 
                    color='white'>
                        Read More
                    </Text>
                </Button>
            </Box>

            <Box 
            margin='0' 
            // display={['none', 'flex', 'flex', 'flex']}
            >
                <Box position='relative' top='-4rem' right={['1rem', '1rem', '1rem', '-7rem']} display={['none', 'block', 'flex', 'flex']}
                width={['96.1vw', '49vw', '50vw', '55vw']}>
                    <Image src={about_img} width={800} height={700} alt='about_img' />
                </Box>
                {/* <Box position='relative' top='-4rem' right='-2.7rem' display={['none', 'flex', 'none', 'none']}>
                    <Image src={about_img} width={900} height={1000} alt='about_img' />
                </Box> */}
            </Box>
        </Flex>
    </Box>
  )
}

export default About