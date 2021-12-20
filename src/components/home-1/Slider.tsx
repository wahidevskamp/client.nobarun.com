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
  }, []);
  return (
    <Fragment>
      <Navbar navListOpen={true} height={height} />
      <Box bg="gray.white" ref={heroContainer} mt={isTablet ? '2.5rem' : ''}>
        <Container>
          <Carousel
            totalSlides={3}
            visibleSlides={1}
            infinite={true}
            autoPlay={true}
            showDots={true}
            showArrow={false}
            spacing="0px"
          >
            {[
              '/assets/images/banners/Uddota-sommanona-Banner 3.png',
              '/assets/images/banners/Metal-Detector-System 1.png',
              '/assets/images/banners/Supermarket-Rack-System-Banner.png',
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
