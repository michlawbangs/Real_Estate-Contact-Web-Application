import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Badge } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import house from '../assets/images/house.jpg'

const Property = ({ property: { purpose, coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } }) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex 
        flexWrap='wrap' 
        justifyContent='flex-start' 
        cursor='pointer' 
        marginBottom='1rem' 
        bg='#FFFFFF'>
            <Box>
                <Image 
                src={coverPhoto ? coverPhoto.url : house} 
                width={450} height={260} 
                alt='homeImg' 
                className='home_img' 
                />
            </Box>
            <Box w='full' p='10px 15px'>
                <Flex justifyContent="space-between" alignItems='center'>
                    <Text 
                    fontSize='1.1rem' 
                    fontWeight='550' 
                    textTransform={'uppercase'}
                    >
                        {title.length >= 30 ? `${title.substring(0, 30)}...` : title}
                    </Text>
                    <Badge variant='subtle' colorScheme='green' padding='5px'>
                        {purpose}
                    </Badge>
                </Flex>
                <Flex 
                p='10px 0' 
                alignItems='center' 
                justifyContent='space-between'
                >
                    <Flex 
                    alignItems='center'
                    pr='1.6rem'
                    >
                        <Box pr={3} color='green.400'>
                            {isVerified && <GoVerified />}
                        </Box>
                        <Text 
                        fontWeight='550' 
                        fontSize='1rem'>
                            AED {millify(price)}{rentFrequency && `/${rentFrequency}`}
                        </Text>
                    </Flex>
                    <Box>
                        <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                    </Box>
                </Flex>
                <Flex 
                alignItems='center' 
                p='1' 
                justifyContent='space-between' 
                w='250px' 
                color='blue.400'
                >
                    {rooms}
                    <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
            </Box>
        </Flex>
    </Link>
);

export default Property;