import React from 'react'
import Image from 'next/image'
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';

import john from '../assets/images/john.jpg'
import jane from '../assets/images/jane.jpeg'

// Agents functional component
export const Agent = ({ imageUrl, agentName, role }) => (
    <Box bg='#FFFFFF' 
    borderRadius='3px' 
    mb='25px'
    >
        <Image src={imageUrl} width={450} height={450} alt="agent_img" />
        <Box 
        p='10px' 
        textAlign={'center'}
        >
            <Text 
            fontSize='1.25rem' 
            fontWeight='550' 
            m='0 0 5px 0' 
            letterSpacing='1.1px'
            >
                {agentName}
            </Text>
            <Text 
            fontSize='1rem' 
            fontWeight='550' 
            m='0' 
            letterSpacing='1.2px'
            >
                {role}
            </Text>
        </Box>
    </Box>
)

function Agents() {
    return (
        <Box 
        className="agents" 
        margin='5rem 0'>
            <Text 
            fontSize='1rem' 
            fontWeight='bold' 
            textTransform='uppercase' 
            margin='0'
            >
                Agents
            </Text>
            <Text 
            fontSize='1.8rem' 
            width='25rem' 
            m='1rem 0 0 0' 
            fontWeight='540' 
            letterSpacing='2px'
            >
                Our Trusted Agents
            </Text>
            <Grid 
            templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} 
            gap={5} mt='20px'
            >
                <GridItem>
                    <Agent 
                    imageUrl={john}
                    agentName="John Doe"
                    role="Senior Consultant"
                    />
                </GridItem>
                <GridItem>
                    <Agent
                    imageUrl={jane}
                    agentName="Jane Doe"
                    role="Finance"
                    />
                </GridItem>
                <GridItem>
                    <Agent
                    imageUrl={john}
                    agentName="Joe Doe"
                    role="IT"
                    />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Agents