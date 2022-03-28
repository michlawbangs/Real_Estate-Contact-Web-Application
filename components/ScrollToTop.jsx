import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import { BiUpArrow } from 'react-icons/bi';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
    }, [])
    
    return (
        <>
            {visible && (
                <Box className="scrollToTop" onClick={scrollToTop}>
                    <BiUpArrow
                    color='white'
                    fontSize='2rem'
                    />
                </Box>
            )}
        </>
    )
}
