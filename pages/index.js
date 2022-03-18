import Image from 'next/image';
import Link from 'next/link';
import { Flex, Box, Text, Button, TabPanels, TabPanel, Tabs, TabList, Tab, Grid, GridItem } from '@chakra-ui/react';
// import { motion } from 'framer-motion'

import { Header, About, Steps, FeaturedProperty, Property, Benefits, Contact, Agents } from "../components"
import { baseUrl, fetchApi } from '../utils/fetchApi';

// Properties functional component
export const BannerProperty = ({ /*purpose,*/ title, desc, buttonText, linkName, imageUrl }) => (
  <Box>
    <Flex 
    flexWrap='wrap' 
    /*justifyContent='center'*/ 
    alignItems='center' 
    m='1.5rem 0'
    >
      <Box 
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
      </Box>
      <Box>
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
      </Box>
    </Flex>
  </Box>
)


export default function Home({ forSaleProperties, forRentProperties }) {
  // console.log(forSaleProperties, forRentProperties);
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

          {/* Featured Properties Component */}
          <Box m='5rem 0'>
            <Text 
            fontSize='1.1rem' 
            fontWeight='bold' 
            textTransform='uppercase' 
            mb='3rem'
            >
                Featured Properties
            </Text>
            <Grid 
            templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} 
            gap={4} 
            mt='20px'
            >
              {forSaleProperties.map((property) => 
                <GridItem key={property.id} >
                  <FeaturedProperty property={property} />
                </GridItem>
              )}
            </Grid>
            <Flex justifyContent='center' alignItems='center' mt='1rem'>
              <Box className='slide_property'></Box>
              <Box className='slide_property'></Box>
            </Flex>
            
          </Box>

          {/* Property Components */}
          <Box className="properties" margin='5rem 0'>
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
                  <BannerProperty
                    // purpose='RENT A HOME'
                    title='Rental Homes for Everyone'
                    desc=' Explore from Apartments, building floors, villas and more'
                    buttonText='Explore Rental Homes'
                    linkName='/search?purpose=for-rent'
                    imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
                    // imageUrl='/../public/Images/rent.png'
                  />
                  <Grid 
                  templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} 
                  gap={4} mt='1rem'
                  >
                    {forRentProperties.map((property) =>
                      <GridItem key={property.id}>
                        <Property property={property} />
                      </GridItem>
                    )}
                  </Grid>
                </TabPanel>
                <TabPanel padding={0}>
                  <BannerProperty
                    // purpose='RENT A HOME'
                    title='Find, Buy & Own Your Dream Homes'
                    desc=' Explore from Apartments, building floors, villas and more'
                    buttonText='Explore Homes For Sale'
                    linkName='/search?purpose=for-sale'
                    imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
                    // imageUrl='/../public/Images/rent.png'
                  />
                  <Grid 
                  templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} 
                  gap={4} 
                  mt='1rem'
                  >
                    {forSaleProperties.map((property) => 
                      <GridItem key={property.id}>
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

          {/* Agents Component */}
          <Agents />

          {/* Contact Component */}
          <Contact />
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