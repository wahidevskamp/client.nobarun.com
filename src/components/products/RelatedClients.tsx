import React, { useEffect, useState } from 'react';
import Box from '@component/Box';
import Container from '@component/Container';
import HoverBox from '@component/HoverBox';
import { H2, H4 } from '@component/Typography';
import useWindowSize from '@hook/useWindowSize';
import FlexBox from '@component/FlexBox';
import Carousel from '@component/carousel/Carousel';
import styled, { keyframes } from 'styled-components';

interface ClientProps {
  slides?: number;
  isProductDetails?: boolean;
  clients: any;
}

const RelatedClients: React.FC<ClientProps> = (props) => {
  const { clients } = props;
  const width = useWindowSize();
  const slices = width > 1500 ? 7 : width > 800 ? 6 : width > 650 ? 5 : 4;

  const Clients = clients?.slice(0, 7).map((item, ind) => (
    <Box key={ind} className="client client_related" mr="1rem">
      <HoverBox borderRadius={5} className="client__body">
        <img src={item.imgUrl} className="client__image" />
      </HoverBox>
      <H4 fontSize="1.4rem" fontWeight="600" className="client__title">
        {item.title}
      </H4>
    </Box>
  ));
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
        <div className="container">
          <div className="scroll-wrapper">{Clients}</div>
          <div className="scroll-wrapper">{Clients}</div>
        </div>
      </Container>
    </Box>
  );
};

const Scroll = (props) => keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(calc(-250px * ${props.clientLength || 7}));
  }
`;

const SliderTrack = styled.div<{ clientLength: number }>`
  display: flex;
  width: ${(props) =>
    props.clientLength
      ? `calc(250px * ${props.clientLength})`
      : 'calc(250px * 7)'};
  animation: ${Scroll} 20s infinite linear;
`;
export default RelatedClients;

{
  /* <Carousel
totalSlides={clients?.length}
// totalSlides={10}
visibleSlides={7}
// autoPlay={true}
// infinite={false}
interval={2000}
autoPlay={clients?.length > slices}
infinite={clients?.length > slices}
showArrow={false}
>
{clients?.map((item, ind) => (
  <Box key={ind} className="client client_related">
    <HoverBox borderRadius={5} className="client__body">
      <img src={item.imgUrl} className="client__image" />
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
</Carousel> */
}

{
  /* <Box className="slider">
<SliderTrack clientLength={clients.length}>
  {clients?.map((item) => (
    <Box>
      <HoverBox borderRadius={5} className="client__body">
        <img src={item.imgUrl} className="client__image" />
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
  {clients?.map((item) => (
    <Box>
      <HoverBox borderRadius={5} className="client__body">
        <img src={item.imgUrl} className="client__image" />
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
</SliderTrack>
</Box> */
}
