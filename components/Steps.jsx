import React from 'react'
import Image from 'next/image';
import { Box, Text, Grid, GridItem, Flex } from '@chakra-ui/react';
import { MdRealEstateAgent } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

import deal from '../assets/images/deal.png'

function Steps() {
  return (
    <Box m={['5rem 0', '1rem 0', '5rem 0', '5rem 0']}>
        <Text 
        fontSize='1.1rem' 
        fontWeight='bold' 
        textTransform='uppercase' 
        margin='0'
        >
            How We Work
        </Text>
        <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap={4} mt='2rem'>
            <GridItem className='step'>
                <Box>
                    <Flex alignItems='flex-end'>
                        <GoChecklist size='3.5rem' />
                        <Text 
                        fontSize={['1.5rem', '1.3rem', '1.5rem', '1.5rem']} 
                        ml='1rem' 
                        fontWeight='550'
                        >
                            Evaluate Property
                        </Text>
                    </Flex>
                </Box>
                <Text 
                mt='1rem' 
                fontSize='1.05rem'
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim blanditiis quo harum libero modi saepe, laborum commodi molestias quisquam aut explicabo suscipit sed, deleniti voluptates tenetur accusantium dolore eius nulla.
                </Text>
            </GridItem>

            <GridItem className='step'>
                <Box>
                    <Flex alignItems='flex-end'>
                        <MdRealEstateAgent size='3.5rem' />
                        <Text 
                        fontSize={['1.5rem', '1.3rem', '1.5rem', '1.5rem']} 
                        ml='1rem' 
                        fontWeight='550'
                        >
                            Meet Agent
                        </Text>
                    </Flex>
                </Box>
                <Text
                mt='1rem' 
                fontSize='1.05rem'
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim blanditiis quo harum libero modi saepe, laborum commodi molestias quisquam aut explicabo suscipit sed, deleniti voluptates tenetur accusantium dolore eius nulla.
                </Text>
            </GridItem>
            <GridItem className='step'>
                <Box>
                    <Flex alignItems='flex-end'>
                        <Image src={deal} width='50px' height='50px' alt='deal_img' />
                        <Text
                        fontSize={['1.5rem', '1.3rem', '1.5rem', '1.5rem']} 
                        ml='1rem' 
                        fontWeight='550'
                        >
                            Close Deal
                        </Text>
                    </Flex>
                </Box>
                <Text
                mt='1rem' 
                fontSize='1.05rem'
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim blanditiis quo harum libero modi saepe, laborum commodi molestias quisquam aut explicabo suscipit sed, deleniti voluptates tenetur accusantium dolore eius nulla.
                </Text>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default Steps