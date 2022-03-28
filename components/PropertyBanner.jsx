import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { imageAnimation, formAnimation } from '../utils/Animation';
const MotionBox = motion(Box);

function PropertyBanner({ title, desc, buttonText, linkName, imageUrl, animateCustom }) {
  return (
    <Box>
        <Flex 
        flexWrap='wrap' 
        /*justifyContent='center'*/ 
        alignItems='center' 
        m='1.5rem 0'
        >
        <MotionBox 
        variants={imageAnimation}
        animate={animateCustom}
        transition={{ delay: 0.1, stiffness: 300 }} 
        mr='20px' 
        mb='15px'
        >
            <Image 
            src={imageUrl} 
            width={450} 
            height={270} 
            alt='property_img' 
            className='home_img' 
            />
        </MotionBox>
        <MotionBox
        variants={formAnimation}
        animate={animateCustom}
        transition={{ delay: 0.1, stiffness: 300 }}
        >
            <Text
            fontSize='1.8rem' 
            fontWeight='550' 
            width='20rem' 
            lineHeight={1.4}
            letterSpacing='1.2px' 
            m='0'
            >
            {title}
            </Text>
            <Text 
            fontSize='1.3rem'  
            color='gray.700' 
            width='20rem' 
            lineHeight={1.4} 
            letterSpacing='1.2px' 
            m='20px 0'
            >
            {desc}
            </Text>
            <Button
            fontSize='1rem' 
            bg="#DEDEDE" 
            color="black" 
            border={'none'} 
            borderRadius='3px' 
            p='8px 15px' 
            fontWeight='550'
            >
            <Link href={linkName}><a>{buttonText}</a></Link>
            </Button>
        </MotionBox>
        </Flex>
    </Box>
  )
}

export default PropertyBanner