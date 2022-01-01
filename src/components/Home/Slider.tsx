import React, { Fragment, useRef, useState, useEffect } from 'react';
import Box from '@component/Box';
import CarouselCard1 from '@component/carousel-cards/CarouselCard1';
import Carousel from '@component/carousel/Carousel';
import Container from '@component/Container';
import Navbar from '@component/navbar/Navbar';
import useWindowSize from '@hook/useWindowSize';

const Section1: React.FC = () => {
  const width = useWindowSize();
  const [height, setHeight] = useState(400);
  const isTablet = width < 1025;
  const heroContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const height = heroContainer?.current?.offsetHeight;
    setHeight(height);
  }, [heroContainer?.current?.offsetHeight]);
  return (
    <Fragment>
      <Navbar navListOpen={true} height={height} />
      <Box bg="gray.white" ref={heroContainer} mt={isTablet ? '2.5rem' : ''}>
        <Container>
          <Carousel
            totalSlides={6}
            visibleSlides={1}
            infinite={true}
            autoPlay={true}
            showDots={true}
            interval={4000}
            dotClass="hero-slider"
            showArrow={false}
            spacing="0px"
          >
            {[
              '/assets/images/banners/1 Bakery-Equipment-nobarun.png',
              '/assets/images/banners/2 Slaughterhouse-Equipment-4.png',
              '/assets/images/banners/3 Supermarket-Equipment-with-logo.png',
              '/assets/images/banners/4 Slaughterhouse-Equipment.png',
              '/assets/images/banners/5 Metal-Detector-&-Scanning-System.png',
              '/assets/images/banners/6-Slaughterhouse-Equipment-nobarun.png',
            ].map((link) => (
              <CarouselCard1 link={link} />
            ))}
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Section1;
