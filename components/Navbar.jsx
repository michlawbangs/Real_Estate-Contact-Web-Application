import React from 'react'
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Button } from '@chakra-ui/react';
import { FaHome } from "react-icons/fa";
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';


function Navbar() {
  return (
    <Box p='10px 0'>
        <Flex justifyContent='space-between' alignItems='center' maxWidth='85vw' m='0 auto'>
            <Flex alignItems={'center'} color='#296A87'>
                <FaHome size={'2rem'}/>
                <Link href='/' passHref >
                    <Button as="a" variant="ghost" aria-label="Home" fontSize='3xl'  fontWeight='550' padding='5px' >
                        Homes
                    </Button>
                </Link>
            </Flex>
            <Spacer />
            <Flex>
                <Flex display={['none', 'none', 'flex', 'flex']}>
                    <Link href='/search' passHref>
                        <Button as="a" variant="ghost" aria-label="Search" fontSize='lg' className='link'>
                        Search
                        </Button>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <Button as="a" variant="ghost" aria-label="Buy Property" fontSize='lg' className='link'>
                        Buy Property
                        </Button>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <Button as="a" variant="ghost" aria-label="Rent Property" fontSize='lg' className='link'>
                        Rent Property
                        </Button>
                    </Link>
                </Flex>
                <Box display={['block', 'block', 'none', 'none']}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<FcMenu />}  variant='outline' color='red.400' />
                        <MenuList>
                        <Link href='/' passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href='/search' passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-sale' passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-rent' passHref>
                            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                        </Link>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar