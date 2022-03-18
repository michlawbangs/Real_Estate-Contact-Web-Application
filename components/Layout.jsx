import React from 'react';
import  Head  from 'next/head'
import { Box } from '@chakra-ui/react';


import Navbar from './Navbar';
import Footer from './Footer';


function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Homes</title>
      </Head>
      <Box>
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
      </Box>
    </>
  )
}

export default Layout