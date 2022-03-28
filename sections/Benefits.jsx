import React from 'react'
import Image from 'next/image'
import { Flex, Box, Text, Grid, GridItem } from '@chakra-ui/react';
import {motion } from 'framer-motion';

import consultant from '../assets/images/consultant.png'
import safe_transaction from '../assets/images/save_transaction.png'
import buy from '../assets/images/pay.png'
import response from '../assets/images/respo.png'

import { useScroll } from '../components/useScroll'
import { cardAnimation1 } from '../utils/Animation';

const MotionGridItem = motion(GridItem);

// Benefits functional component
export const Benefit = ({icon, headText, paraText}) => (
    <Box>
        <Flex alignItems='flex-end'>
            <Image src={icon} width='60px' height='60px' alt='deal_img' />
            <Text 
            fontSize='1.3rem' 
            ml='1rem' 
            fontWeight='550'
            >
                {headText}
            </Text>
        </Flex>
        
        <Text 
        mt='1rem' 
        fontSize='1.05rem'
        >
            {paraText}
        </Text>
    </Box>
)

function Benefits() {
    const [element, controls] = useScroll();
    return (
        <Box 
        className='benefits' 
        margin='5rem 0'
        >
            <Text 
            fontSize='1.1rem' 
            fontWeight='bold' 
            textTransform='uppercase' 
            mb='1rem'
            >
                Benefits
            </Text>
            <Text 
            fontSize={['1.9rem', '2rem', '2.2rem', '2.2rem']} 
            width={'24rem'} 
            m='1rem 0 0 0' 
            fontWeight='540' 
            letterSpacing='2px'
            >
                Why Choose Us
            </Text>
            <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)']} gap={4} mt='2rem' ref={element}>
                <MotionGridItem
                variants={cardAnimation1}
                animate={controls}
                transition={{ stiffness: 5000 }}
                className='benefit'>
                    <Benefit
                    icon= {consultant}
                    headText="Consultation"
                    paraText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim blanditiis quo harum libero modi saepe, laborum commodi molestias quisquam aut explicabo suscipit sed, deleniti voluptates tenetur accusantium dolore eius nulla."
                    />
                </MotionGridItem>

                <MotionGridItem
                variants={cardAnimation1}
                animate={controls}
                transition={{ stiffness: 5000 }}
                className='benefit'>
                    <Benefit
                    icon={safe_transaction}
                    headText="Safe and Trustworthy Transaction"
                    paraText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim blanditiis quo harum libero modi saepe, laborum commodi molestias quisquam aut explicabo suscipit sed, deleniti voluptates tenetur accusantium dolore eius nulla."
                    />
                </MotionGridItem>

                <MotionGridItem
                variants={cardAnimation1}
                animate={controls}
                transition={{ stiffness: 5000 }}
                className='benefit'>
                    <Benefit
                    icon={buy}
                    headText="Buy with Confidence"
                    paraText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim blanditiis quo harum libero modi saepe, laborum commodi molestias quisquam aut explicabo suscipit sed, deleniti voluptates tenetur accusantium dolore eius nulla."
                    />
                </MotionGridItem>

                <MotionGridItem
                variants={cardAnimation1}
                animate={controls}
                transition={{ stiffness: 5000 }}
                className='benefit'>
                    <Benefit
                    icon={response}
                    headText="Fast Response"
                    paraText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim blanditiis quo harum libero modi saepe, laborum commodi molestias quisquam aut explicabo suscipit sed, deleniti voluptates tenetur accusantium dolore eius nulla."
                    />
                </MotionGridItem>
            </Grid>
        </Box>
    )
}

export default Benefits