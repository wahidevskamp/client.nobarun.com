import React, { Fragment } from 'react';
import Box from '@component/Box';
import CarouselCard1 from '@component/carousel-cards/CarouselCard1';
// import Carousel from '@component/carousel/Carousel';
import Container from '@component/Container';
import Navbar from '@component/navbar/Navbar';
import useWindowSize from '@hook/useWindowSize';

const Section1: React.FC = () => {
  const width = useWindowSize();
  const isTablet = width < 1025;

  return (
    <Fragment>
      <Navbar navListOpen={true} />
      <Box bg="gray.white" mt={isTablet ? '2.5rem' : ''}>
        <Container>
          {/* <Carousel
            totalSlides={5}
            visibleSlides={1}
            infinite={true}
            autoPlay={true}
            showDots={true}
            showArrow={false}
            spacing="0px"
          > */}
          <CarouselCard1 />
          {/* <CarouselCard1 />
            <CarouselCard1 />
            <CarouselCard1 />
            <CarouselCard1 />
          </Carousel> */}
        </Container>
      </Box>
    </Fragment>
  );
};

export default Section1;
