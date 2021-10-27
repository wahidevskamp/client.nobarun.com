import Box from '@component/Box';
import CarouselCard1 from '@component/carousel-cards/CarouselCard1';
import Carousel from '@component/carousel/Carousel';
import Container from '@component/Container';
import Navbar from '@component/navbar/Navbar';
import useWindowSize from '@hook/useWindowSize';
import React, { Fragment, useState, useEffect } from 'react';

const Section1: React.FC = () => {
  const [blockClient, setBlockClient] = useState(true);
  console.log(blockClient);

  const width = useWindowSize();

  useEffect(() => {
    // if (width < 500) setVisibleSlides(2);
    // else if (width < 650) setVisibleSlides(3);
    // else if (width < 950) setVisibleSlides(4);
    // else
    console.log(width);
    if (width < 1200) {
      setBlockClient(false);
    }
  }, [width]);

  return (
    <Fragment>
      <Navbar navListOpen={true} />
      <Box bg="gray.white" mb="3.75rem">
        <Container pb="2rem">
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
