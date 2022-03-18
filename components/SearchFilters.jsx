import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData';
import { baseUrl, fetchApi } from '../utils/fetchApi';

import noresult from '../assets/images/noresult.svg';

export default function SearchFilters() {
   const [filters] = useState(filterData);
   // Initially the search value == ''(empty string) :: searchTerm = input value || typing something fires up the setSearchTerm 
   const [searchTerm, setSearchTerm] = useState('');
   const [locationData, setLocationData] = useState();
   const [showLocations, setShowLocations] = useState(false);
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   // This fnx holds the search properties and append it to the url
   const searchProperties = (filterValues) => {
      // Holding the pathname in the router array 
      const path = router.pathname;

      // Getting query from router
      const { query } = router;
      // Getting filter values :: when searching
      const values = getFilterValues(filterValues)

      // Looping through the filtered result
      values.forEach((item) => {
         // If the attribute(s) matches the name in getFilterValue values array
         if(item.value && filterValues?.[item.name]) {
            // Then update the query
            query[item.name] = item.value
         }
      })
      // Pushing the path of the filtered properties + search query :: Eg localhost:3000/search?purpose=&rentFrequency=....
      // concatinating the url path and the query
      router.push({ pathname: path, query: query });
   };

   useEffect(() => {
      if (searchTerm !== '') {
         const fetchData = async () => {
         setLoading(true);
         const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
         setLoading(false);
         setLocationData(data?.hits);
         };

         fetchData();
      }
   }, [searchTerm]);

   return (
      // Search Container
      <Flex bg='gray.300' p='4' justifyContent='center' flexWrap='wrap'>
         {/* Maping through flterData from utils */}
         {filters?.map((filter) => (
         <Box key={filter.queryName}>
            {/* When clicked the searchProperties() fnx is called  */}
            <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} w='fit-content' p='2' variant='outline'>
               {filter?.items?.map((item) => (
                  // Filled the select box
               <option value={item.value} key={item.value}>
                  {item.name}
               </option>
               ))}
            </Select>
         </Box>
         ))}
         {/* Search by location */}
         <Flex flexDir='column'>
            {/* When clicked showLocation changes to true */}
            <Button onClick={() => setShowLocations(!showLocations)} border='1px' borderColor='gray.200' marginTop='2' >
               Search Location
            </Button>
            {/* So when showLocation == true an input box is display in which you can type the location you want to search for */}
            {showLocations && (
               <Flex flexDir='column' pos='relative' paddingTop='2'>
                  <Input
                  placeholder='Type Here'
                  value={searchTerm}
                  w='300px'
                  focusBorderColor='gray.300'
                  onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {/* If the searchTerm is not empty show this icon */}
                  {searchTerm !== '' && (
                  <Icon
                     as={MdCancel}
                     pos='absolute'
                     cursor='pointer'
                     right='5'
                     top='5'
                     zIndex='100'
                     onClick={() => setSearchTerm('')}
                  />
                  )}
                  {/* When the icon is clicked the following actions takes place */}
                  {loading && <Spinner margin='auto' marginTop='3' />}
                  {showLocations && (
                  <Box height='300px' overflow='auto'>
                     {/* Map through the locationData targetting all the properties available */}
                     {locationData?.map((location) => (
                        <Box
                        key={location.id}
                        onClick={() => {
                           searchProperties({ locationExternalIDs: location.externalID });
                           setShowLocations(false);
                           setSearchTerm(location.name);
                        }}
                        >
                        <Text cursor='pointer' bg='gray.200' p='2' borderBottom='1px' borderColor='gray.100' >
                           {location.name}
                        </Text>
                        </Box>
                     ))}
                     {/* If the no locationData */}
                     {!loading && !locationData?.length && (
                        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5' >
                        <Image src={noresult} alt='noresult' />
                        <Text fontSize='xl' marginTop='3'>
                           Waiting to search!
                        </Text>
                        </Flex>
                     )}
                  </Box>
                  )}
               </Flex>
            )}
         </Flex>
      </Flex>
   );
}
