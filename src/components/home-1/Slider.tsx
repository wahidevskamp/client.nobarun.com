<<<<<<< HEAD:src/components/home-1/Slider.tsx
import Box from '@component/Box';
import CarouselCard1 from '@component/carousel-cards/CarouselCard1';
import Carousel from '@component/carousel/Carousel';
import Container from '@component/Container';
import Navbar from '@component/navbar/Navbar';
import React, { Fragment } from 'react';
import Clients from './Clients';
=======
import Box from "@component/Box";
import CarouselCard1 from "@component/carousel-cards/CarouselCard1";
import Carousel from "@component/carousel/Carousel";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
import React, { Fragment } from "react";
import Clients from "./Clients";
>>>>>>> 46ceae59b435c13f042d7fd6a47e863492570adb:src/components/home-1/Section1.tsx

const Section1: React.FC = () => {
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
<<<<<<< HEAD:src/components/home-1/Slider.tsx
          <Clients />
=======
          <Clients/>
>>>>>>> 46ceae59b435c13f042d7fd6a47e863492570adb:src/components/home-1/Section1.tsx
        </Container>
      </Box>
    </Fragment>
  );
};

export default Section1;
