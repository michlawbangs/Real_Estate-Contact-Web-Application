import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import {motion } from 'framer-motion';

import { headerAnimation, imageAnimation } from '../utils/Animation';
import { useScroll } from '../components/useScroll'

const MotionBox = motion(Box);
const MotionText = motion(Text);

import hero_img from '../assets/images/hero_img.png';

function Header() {
    const [element, controls] = useScroll();
    return (
        <Box ref={element} color='white'>
            <Flex 
            alignItems={['center' ,'center' ,'flex-start','flex-start']} 
            width='85vw' m='0 auto' 
            flexDir={['column-reverse', 'column-reverse', 'row', 'row']} 
            pt={['0', '3rem', '0', '0']}
            >
                <MotionBox className='header_content' variants={headerAnimation} animate={controls} transition={{ ease: "easeInOut", delay: 0.5, type: "tween" }}
                mt={[55, 55, 180, 180]}  
                mr={['0rem' ,'3px' ,'2rem', '0']} 
                textAlign={['center', 'center', 'left', 'left']}
                >
                    <MotionText
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ ease: "easeInOut", delay: 0.9, duration: 0.5 }}
                    initial={{ opacity: 0, y: 50 }}
                    fontSize={['1.8rem' ,'2.4rem', '2.2rem', '2.5rem']} fontWeight='550' /*bg='green'*/ 
                    m='0' 
                    letterSpacing='2px' 
                    >
                        Find Your Dream Home
                    </MotionText>
                    <MotionText 
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ ease: "easeInOut", delay: 1.3, duration: 0.5 }}
                    initial={{ opacity: 0, y: 50 }}
                    fontSize={['1.1rem' ,'1.1rem','1.1rem', '1.2rem']} 
                    fontWeight='500' 
                    width={['25rem', '40rem', '27rem', '28rem']} m='1rem 0' lineHeight={1.5} 
                    letterSpacing='1.5px' /*bg='red'*/
                    >
                        Having problems in finding a home of your comfort? We help make that search easy, fun and worth your while because we offer the home you are looking for.
                    </MotionText>
                    <MotionBox
                    animate={{
                        opacity: 1
                    }}
                    transition={{ ease: "easeInOut", delay: 1.7, duration: 0.5 }}
                    initial={{ opacity: 0 }}
                    >
                        <Button className='hero_btn' 
                        colorScheme='#296A87' fontSize='1.1rem'
                        >
                            <Link href='#contact_' passHref>Get In Touch</Link>
                        </Button>
                    </MotionBox>
                </MotionBox>

                <MotionBox
                variants={imageAnimation} animate={controls} transition={{ ease: "easeInOut", delay: 0.2, type: "tween" }}
                className='hero_img' /*bg='red'*/ 
                width={['96.1vw', '97.9vw', '50vw', '55vw']} 
                mt={['30px', '0', '0', '0']}
                display={['block', 'block', 'block', 'block']} pos='relative' right={['0', '0', '-8rem', '-8rem']}
                >
                    <MotionBox
                    animate={{
                    opacity: 1,
                    y: 1,
                    x: 1
                    }}
                    transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
                    initial={{ opacity: 0, y: 0, x: 0 }}
                    >
                        <Image src={hero_img} width={1300} height={1008} alt='heroImg' />
                    </MotionBox>
                </MotionBox>
                
            </Flex>
        </Box>
    )
}

export default Header