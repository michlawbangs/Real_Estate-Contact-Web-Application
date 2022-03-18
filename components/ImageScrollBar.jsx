import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' position='relative' left='3rem'>
            <Icon
            as={BsArrowLeftCircleFill}
            onClick={() => scrollPrev()}
            fontSize='2xl'
            cursor='pointer'
            // d={['none','block','block','block']}
            zIndex='100'
            />
        </Flex>
    );
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' position='relative' right='3rem'>
            <Icon
            as={BsArrowRightCircleFill}
            onClick={() => scrollNext()}
            fontSize='2xl'
            cursor='pointer'
            // d={['none','none','none','block']}
        />
        </Flex>
    );
}

export default function ImageSrollbar({ data }) {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
            {data.map((item) => (
            <Box key={item.id} width={['990px', '95vw', '990px', '990px']} itemId={item.id} overflow='hidden' m='0 auto' borderRadius='5px'>
                <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={980} height={500} alt='property-img' />
            </Box>
            ))}
        </ScrollMenu>
    );
}
