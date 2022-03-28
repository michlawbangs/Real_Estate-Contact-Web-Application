import { Box, Text, TabPanels, TabPanel, Tabs, TabList, Tab, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion'
// import { useRef, useEffect, useState } from "react";

import { Header, About, Steps, Benefits, Contact } from "../sections"
import { PropertyBanner, Property, ScrollToTop } from "../components"
import { baseUrl, fetchApi } from '../utils/fetchApi';


import { cardAnimation1 } from '../utils/Animation';
import { useScroll } from '../components/useScroll'

// const MotionBox = motion(Box);
// const MotionFlex = motion(Flex);
const MotionGridItem = motion(GridItem);

export default function Home({ forSaleProperties, forRentProperties }) {
  const [element, controls] = useScroll();

  return (
    <Box>
      {/* Header Component */}
      <Box className='header' color='#2B3437' h={['105vh', '143vh', '98vh', '92vh']}>
        <Header />
      </Box>
      <Box bg='#fafafa' p='7rem 0'>
        <Box className='main_container' color='#2B3437'>
          {/* About Component */}
          <About />

          {/* Steps| How It Works Component */}
          <Steps />
          
          {/* Property Components */}
          <Box className="properties" margin='5rem 0' ref={element}>
            <Text 
            fontSize='1.1rem' 
            fontWeight='bold' 
            textTransform='uppercase' 
            mb='1rem'
            >
              Properties
            </Text>
            <Text 
            fontSize={['1.9rem', '2rem', '2.2rem', '2.2rem']}  
            width='24rem' 
            m='1rem 0 0 0' 
            fontWeight='550' 
            letterSpacing='2px'
            >
              A unique balance of luxury life
            </Text>
            
            <Tabs isLazy variant='unstyled'>
              <TabList 
              mt='2.5rem' 
              outline='none'
              >
                <Tab 
                className='tab' 
                _selected={{color: '#292a2a'}} 
                fontWeight='550' 
                padding={0}
                fontSize='1.2rem'
                >
                  RENT A HOME
                </Tab>
                <Tab 
                className='tab'
                 _selected={{color: '#292a2a'}} 
                fontWeight='550' 
                padding={0}
                fontSize='1.2rem'
                >
                  BUY A HOME
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel padding={0}>
                  <PropertyBanner
                    title='Rental Homes for Everyone'
                    desc=' Explore from Apartments, building floors, villas and more'
                    buttonText='Explore Rental Homes'
                    linkName='/search?purpose=for-rent'
                    imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
                  />
                  <Grid 
                  templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} 
                  gap={4} mt='1rem'
                  >
                    {forRentProperties.map((property) =>
                      <GridItem
                      key={property.id}
                      >
                        <Property property={property} />
                      </GridItem>
                    )}
                  </Grid>
                </TabPanel>
                <TabPanel padding={0}>
                  <PropertyBanner
                    title='Find, Buy & Own Your Dream Homes'
                    desc=' Explore from Apartments, building floors, villas and more'
                    buttonText='Explore Homes For Sale'
                    linkName='/search?purpose=for-sale'
                    imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
                  />
                  <Grid 
                  templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} 
                  gap={4} 
                  mt='1rem'
                  >
                    {forSaleProperties.map((property) => 
                      <GridItem
                      key={property.id}
                      >
                        <Property property={property} />
                      </GridItem>
                    )}
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          {/* Benefit Component */}
          <Benefits />

          {/* Contact Component */}
          <Contact />

          {/* ScrollToTop Component */}
          <ScrollToTop />
        </Box>
      </Box>
    </Box>
  )
}


// getStaticProps :: Static Generation
// getStaticProps() fnx useful in fetching data at build time :: api call
export async function getStaticProps() {
  // Api call for sale properties
  const forSaleProperty = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);

  // Api call for rental properties
  const forRentProperty = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  // Returning the result as props to the home component
  return {
    props: {
      forSaleProperties: forSaleProperty?.hits,
      forRentProperties: forRentProperty?.hits,
    },
  };
}
