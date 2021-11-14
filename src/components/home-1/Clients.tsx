import React, { useEffect, useState } from 'react';
import Box from '@component/Box';
// import Carousel from '@component/carousel/Carousel';
import Container from '@component/Container';
import HoverBox from '@component/HoverBox';
import { H2, H4 } from '@component/Typography';
import useWindowSize from '@hook/useWindowSize';
import FlexBox from '@component/FlexBox';
import useAllFeaturedClients from '@hook/Home/useFeaturedClients';

interface ClientProps {
  slides?: number;
  isProductDetails?: boolean;
}
const Clients: React.FC<ClientProps> = ({ slides, isProductDetails }) => {
  const [clients, setClients] = useState([]);
  const [visibleSlides, setVisibleSlides] = useState(slides);
  const width = useWindowSize();

  console.log(visibleSlides);
  useEffect(() => {
    if (width < 500) setVisibleSlides(2);
    else if (width < 650) setVisibleSlides(3);
    else if (width < 1400) setVisibleSlides(6);
    else setVisibleSlides(slides);
    if (isProductDetails) {
      if (width < 768) setVisibleSlides(2);
      else if (width < 880) setVisibleSlides(4);
      else if (width < 1025) setVisibleSlides(5);
      else if (width < 1300) setVisibleSlides(4);
      else if (width < 1425) setVisibleSlides(5);
    }
  }, [width]);

  useEffect(() => {
    useAllFeaturedClients().then((data) => {
      setClients(data);
    });
  }, []);

  return (
    <Box
      pt={isProductDetails ? '4rem' : '3rem'}
      pb={isProductDetails ? '4rem' : '3rem'}
    >
      <FlexBox justifyContent="center" alignItems="center" mb="3rem">
        <FlexBox alignItems="center">
          <H2
            fontWeight="600"
            fontSize="26px"
            textAlign="center"
            lineHeight="1"
          >
            Our Clients
          </H2>
        </FlexBox>
      </FlexBox>
      <Container pb="1rem">
        <Box mb="-0.25rem">
          {/* <Carousel totalSlides={clients?.length} visibleSlides={visibleSlides}> */}
          <FlexBox justifyContent="space-between">
            {clients
              .concat(clients)
              .splice(0, 10)
              .map((item, ind) => (
                <Box key={ind} className="client client_related">
                  <HoverBox borderRadius={5} className="client__body">
                    <img
                      src={item.imgUrl}
                      style={{ width: '118px', height: '110px' }}
                    />
                  </HoverBox>
                  <H4
                    fontSize="1.4rem"
                    fontWeight="600"
                    className="client__title"
                  >
                    {item.title}
                  </H4>
                </Box>
              ))}
          </FlexBox>
          {/* </Carousel> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;
