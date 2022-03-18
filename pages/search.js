import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon, Grid, GridItem } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from '../utils/fetchApi';

import noresult from '../assets/images/noresult.svg';

// Search Container :: Display all properties || search properties
const Search = ({ properties }) => {
    const [searchProperty, setSearchProperty] = useState(false);
    // When a property is cicked this fires up
    const router = useRouter();

    return (
        <Box>
            {/* When clicked display the following search properties Eg purpose to choose the either rent or buy */}
            <Flex
            onClick={() => setSearchProperty(!searchProperty)}
            cursor='pointer'
            bg='gray.100'
            borderBottom='1px'
            borderColor='gray.200'
            p='5'
            fontWeight='black'
            fontSize='lg'
            justifyContent='center'
            alignItems='center'
            >
                <Text>Search Property</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            {/* When icon or the search property text is click Display {searchProperty && <SearchFilters />} */}
            {searchProperty && <SearchFilters />}
            {/* Properties Container */}
            <Box bg='#fafafa' p='2rem 0'>
                <Box className='main_container' color='#2B3437'>
                    {!router.query.purpose && (
                        <Text fontSize='2xl' p='4 0' fontWeight='bold'>
                            Showing default properties
                        </Text>
                    )}
                    {router.query.purpose && (
                        <Text fontSize='2xl' p='4 0' fontWeight='bold'>
                            Showing results {router.query.purpose} properties
                        </Text>
                    )}
                    <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap={4} mt='20px'>
                        {/* Mapping through the properties props return from the getServerSideProps */}
                        {properties.map((property) =>
                            <GridItem key={property.id}>
                                <Property property={property} />
                            </GridItem>
                        )}
                    </Grid>

                    {/* If no properties display No Result Found */}
                    {properties.length === 0 && (
                        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
                            <Image src={noresult} alt='noresult' />
                            <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
                        </Flex>
                    )}
                </Box>
            </Box>
        </Box>
    );
};


// getServerSideProps() fnx :: Server-side Rendering :: Fetch data on each request
// Getting search properties
export async function getServerSideProps({ query }) {
    // search attributes
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
    
    //   Fetching data containing the following attribute
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    //   Returning the data as a props
    return {
        props: {
          properties: data?.hits,
        },
      };
}

export default Search;
