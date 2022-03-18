import { Box, Flex, Spacer, Text, Badge, Stack, Input, FormControl, Button, Textarea } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath, FaUserAlt } from 'react-icons/fa';
import { BsGridFill, BsFillTelephoneFill } from 'react-icons/bs';
import { GoVerified, GoLocation } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

// Destructuring
const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos, contactName, phoneNumber, location } }) => (
    <Box bg='#fafafa' p='4rem 0'>
        <Box w='85vw' m='0 auto'>
            <Flex alignContent='flex-start' justifyContent='flex-start' flexWrap='wrap'>
                <Box width={['85vw', '88vw', '60vw', '60vw']}>
                    <Box mb='2rem'>
                        <Text fontSize='1.7rem' marginBottom='2' fontWeight='550' letterSpacing='1px'
                        >
                            {title}
                        </Text>
                        <Flex m='1rem 0'>
                            <Badge variant='subtle' colorScheme='green' padding='5px'>
                                {type}
                            </Badge>
                            <Badge variant='subtle' colorScheme='green' padding='5px' m='0 2rem'>
                                {purpose}
                            </Badge>
                            {furnishingStatus && (
                                <Badge 
                                variant='subtle' 
                                colorScheme='green' 
                                padding='5px'
                                >
                                    {furnishingStatus}
                                </Badge>
                            )}
                        </Flex>
                        <Flex alignItems='center'>
                            <GoLocation size={'1.3rem'} />
                            <Flex alignItems='center' ml='5px'>
                                {location.map((loc) => 
                                    <Text key={loc.id} pr='5px' fontSize='1rem' fontWeight='550'>{loc.name}</Text>
                                )}
                            </Flex>
                            
                        </Flex>
                    </Box>
                    <Box maxWidth={['1000px', '90w', '85vw', '85vw']} ml={['-1.5rem', '0 auto', '-1.5rem', '-1.5rem']}>
                        {photos && <ImageScrollbar data={photos} />}
                    </Box>
                    <Box>
                        <Box>
                            <Text fontSize='1.4rem' fontWeight='550' mt='2rem'>Details</Text>
                            <Flex paddingTop='1rem' alignItems='center' pr='1.6rem'>
                                <Box paddingRight='3' color='green.400'>
                                    {isVerified && <GoVerified />}
                                </Box>
                                <Text fontWeight='bold' fontSize='lg'>
                                    AED {price} {rentFrequency && `/${rentFrequency}`}
                                </Text>
                                <Spacer />
                                <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                                
                            </Flex>

                            <Flex alignItems='center' p='1' justifyContent='space-between' w='240px' color='blue.400'>
                                {rooms}<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                            </Flex>
                        </Box>
                    
                        <Box marginTop='2' pr='1.2rem'>
                            <Text fontSize='1.4rem' fontWeight='550' mt='2rem' pr='1rem'>Description</Text>
                            <Text lineHeight='2' mt='10px' fontSize='1.1rem'>{description}</Text>
                        </Box>
                        
                        <Box marginTop='2'>
                            {amenities.length && 
                            <Text fontSize='1.4rem' fontWeight='550' mt='2rem' mb='10px' >Facilites</Text>}
                            <Flex flexWrap='wrap'>
                                {amenities?.map((item) => (
                                    item?.amenities?.map((amenity) => (
                                        <Text key={amenity.text} fontWeight='550' color='#242627' fontSize='l.1rem' bg='#FFFFFF' padding='8px 15px' borderRadius='5' mr='2rem' mb='2rem' w='14rem'>
                                            {amenity.text}
                                        </Text>
                                    ))
                                ))}
                            </Flex>
                        </Box>
                    </Box>
                </Box>
                <Box width={['85vw', '85vw', '30vw', '25vw']} bg='#FFFFFF' p='2rem' h='95vh' 
                mt={['9.9rem', '9.9rem', '9.9rem', '9.9rem']}>
                    <Box>
                        <Text fontSize='1.5rem' fontWeight='550' letterSpacing='1px' mb='2rem' textAlign='center' borderBottom='1px solid #707070' pb='8px'>Contact Agent</Text>
                        <Flex alignItems='center'>
                            <Avatar size='lg' src={agency?.logo?.url}></Avatar>
                            <Text fontSize='1.3rem' fontWeight='550' ml='20px'>{agency?.name}</Text>
                        </Flex>
                        <Flex m='2rem 0' justifyContent='space-between'>
                            <Flex alignItems='center'>
                                <FaUserAlt />
                                <Text fontSize='1.1rem' fontWeight='550' ml='10px'>{contactName}</Text>
                            </Flex>
                            <Flex alignItems='center'>
                                <BsFillTelephoneFill />
                                <Text fontSize='1.1rem' fontWeight='550' ml='10px'>{phoneNumber?.mobile}</Text>
                            </Flex>
                        </Flex>

                        <Box mt='1rem'>
                            <Stack spacing={5}>
                                <Box>
                                    <Text mb='10px' 
                                    fontWeight='550' 
                                    fontSize='1.1rem'
                                    >
                                        Fullname
                                    </Text>
                                    <Input 
                                    type='text'
                                    border='none'
                                    borderBottom='1px solid black' 
                                    placeholder='Enter fullname' 
                                    />
                                </Box>
                                <Box>
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
                                </Box>
                                <Box>
                                    <Text 
                                    mb='10px' 
                                    fontWeight='550' 
                                    fontSize='1.1rem'
                                    >
                                        Message
                                    </Text>
                                    <Textarea placeholder='Message' />
                                </Box>
                                <Button 
                                type='submit' 
                                colorScheme='#296A87' 
                                bg='#242627' 
                                p='8px' 
                                color='white' 
                                fontSize='1rem' 
                                border={'none'} 
                                borderRadius='3px' 
                                mt='1.2rem'
                                >
                                    Send Message
                                </Button>
                            </Stack>
                        </Box>
                        
                    </Box>
                </Box>
            </Flex>
        </Box>
    </Box>
);

export default PropertyDetails;

// Getting property detail for each property clicked
export async function getServerSideProps({ params: { id } }) {
    // Getting the data
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    // Returning the data as props
    return {
        props: {
            propertyDetails: data,
        },
    };
}
