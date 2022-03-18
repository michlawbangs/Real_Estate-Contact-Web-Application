import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { Box, Flex, Text, Button } from '@chakra-ui/react';

import hero_img from '../assets/images/hero_img.png';

function Header() {
  return (
    <Flex 
    alignItems={['center' ,'center' ,'flex-start','flex-start']} 
    width='85vw' m='0 auto' 
    flexDir={['column-reverse', 'column-reverse', 'row', 'row']} 
    pt={['0', '3rem', '0', '0']}
     >
        <Box className='header_content'
        mt={[55, 55, 180, 180]}  
        mr={['0rem' ,'3px' ,'2rem', '0']} 
        textAlign={['center', 'center', 'left', 'left']}
        >
            <Text 
            fontSize={['1.8rem' ,'2.4rem', '2.2rem', '2.5rem']} fontWeight='550' /*bg='green'*/ 
            m='0' 
            letterSpacing='2px' 
            >
                Find Your Dream Home
            </Text>
            <Text 
            fontSize={['1.1rem' ,'1.1rem','1.1rem', '1.2rem']} 
            fontWeight='500' 
            width={['25rem', '40rem', '27rem', '28rem']} m='1rem 0' lineHeight={1.5} 
            letterSpacing='1.5px' /*bg='red'*/
            >
                Having problems in finding a home of your comfort? We help make that search easy, fun and worth your while because we offer the home you are looking for.
            </Text>
            <Button className='hero_btn' 
            colorScheme='#296A87' fontSize='1.1rem'
            >
                <Link href='/'>Get In Touch</Link>
            </Button>
        </Box>
        <Box className='hero_img' /*bg='red'*/ 
        width={['96.1vw', '97.9vw', '50vw', '55vw']} 
        mt={['30px', '0', '0', '0']}
        display={['block', 'block', 'block', 'block']} pos='relative' right={['0', '0', '-8rem', '-8rem']}>
            <Image src={hero_img} width={1300} height={1010} alt='heroImg' />
        </Box>
        {/* <Box maxWidth={{ md: '100vw'}} display={['none', 'block', 'none', 'none']} className='hero_img'  pos='relative' right='-1.2rem'>
            <Image src="/../public/assets/heroImg.png" width='1200rem' height='1200rem' alt='heroImg' />
        </Box> */}
        {/* <Box width={{ sm: '100vw'}} display={['block', 'none', 'none', 'none']} className='hero_img'  pos='relative' right='-1.2rem' top='2rem'>
            <Image src="/../public/assets/heroImg.png" width='1200rem' height='1200rem' alt='heroImg' />
        </Box> */}
    </Flex>
  )
}

export default Header