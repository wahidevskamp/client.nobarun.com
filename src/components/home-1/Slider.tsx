import React, { Fragment, useRef, useEffect, useState } from 'react';
import Box from '@component/Box';
import CarouselCard1 from '@component/carousel-cards/CarouselCard1';
import Carousel from '@component/carousel/Carousel';
import Container from '@component/Container';
import Navbar from '@component/navbar/Navbar';
import useWindowSize from '@hook/useWindowSize';

const Section1: React.FC = () => {
  const width = useWindowSize();
  const [noOfCategory, setNoOfCategory] = useState(12);
  const isTablet = width < 1025;

  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const slice = Math.floor(sliderRef.current.clientHeight / 45) - 1;
    setNoOfCategory(slice);
  }, []);
  console.log(noOfCategory);
  return (
    <Fragment>
      <Navbar navListOpen={true} noOfCategory={noOfCategory} />
      <Box bg="gray.white" mt={isTablet ? '2.5rem' : ''} ref={sliderRef}>
        <Container>
          <Carousel
            totalSlides={5}
            visibleSlides={1}
            infinite={true}
            autoPlay={true}
            showDots={true}
            showArrow={false}
            spacing="0px"
          >
            <CarouselCard1 />
            <CarouselCard1 />
            <CarouselCard1 />
            <CarouselCard1 />
            <CarouselCard1 />
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Section1;
