import React from 'react';
import  Head  from 'next/head'
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion'


import Navbar from './Navbar';
import Footer from './Footer';

const MotionBox = motion(Box);

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Homes</title>
      </Head>
      <MotionBox initial="hidden" animate="show">
        <header className='navbar'>
          <Navbar />
          {/* Navbar */}
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </MotionBox>
    </>
  )
}

export default Layout