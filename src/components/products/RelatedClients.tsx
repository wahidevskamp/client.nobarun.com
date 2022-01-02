import React, { useEffect, useState } from 'react';
import Box from '@component/Box';
import Container from '@component/Container';
import HoverBox from '@component/HoverBox';
import { H2, H4 } from '@component/Typography';
import useWindowSize from '@hook/useWindowSize';
import FlexBox from '@component/FlexBox';
import Carousel from '@component/carousel/Carousel';

interface ClientProps {
  slides?: number;
  isProductDetails?: boolean;
  clients: any;
}

const RelatedClients: React.FC<ClientProps> = (props) => {
  const { clients } = props;
  const width = useWindowSize();
  const slices = width > 1500 ? 7 : width > 800 ? 6 : width > 650 ? 5 : 4;

  return (
    <Box pt="1em" mb="2rem">
      <FlexBox justifyContent="center" alignItems="center" mb="1em">
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
          <Carousel
            // totalSlides={clients?.length}
            totalSlides={10}
            visibleSlides={7}
            autoPlay={true}
            infinite={false}
            interval={1000}
            // autoPlay={clients?.length > slices}
            // infinite={clients?.length > slices}
            showArrow={false}
          >
            {clients?.map((item, ind) => (
              // <Box key={ind} className="client client_related">
              //   <HoverBox borderRadius={5} className="client__body">
              //     <img src={item.imgUrl} className="client__image" />
              //   </HoverBox>
              //   <H4
              //     fontSize="1.4rem"
              //     fontWeight="600"
              //     className="client__title"
              //   >
              //     {item.title}
              //   </H4>
              // </Box>
              <h1>{ind}</h1>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};

export default RelatedClients;
