import React, { useEffect, useState } from 'react';
import Box from '@component/Box';
import Carousel from '@component/carousel/Carousel';
import Container from '@component/Container';
import HoverBox from '@component/HoverBox';
import LazyImage from '@component/LazyImage';
import { H2, H4 } from '@component/Typography';
import useWindowSize from '@hook/useWindowSize';
import FlexBox from '@component/FlexBox';

interface ClientProps {
  slides?: number;
  isProductDetails?: boolean;
}
const Clients: React.FC<ClientProps> = ({ slides, isProductDetails }) => {
  const [visibleSlides, setVisibleSlides] = useState(6);
  const width = useWindowSize();
  console.log(visibleSlides);
  useEffect(() => {
    if (width < 500) setVisibleSlides(2);
    else if (width < 650) setVisibleSlides(3);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(6);
  }, [width]);

  return (
    <Box
      pt={isProductDetails ? '4rem' : '3rem'}
      pb={isProductDetails ? '4rem' : '7rem'}
    >
      <FlexBox justifyContent="center" alignItems="center" mb="3rem">
        <FlexBox alignItems="center">
          <H2 fontWeight="bold" textAlign="center" lineHeight="1">
            Our Clients
          </H2>
        </FlexBox>
      </FlexBox>
      <Container pb="1rem">
        <Box mb="-0.25rem">
          <Carousel totalSlides={productList.length} visibleSlides={slides}>
            {productList.map((item, ind) => (
              <Box key={ind}>
                <Box>
                  <HoverBox borderRadius={5} className="client__body">
                    <LazyImage
                      src={item.imgUrl}
                      layout="fill"
                      objectFit="cover"
                      alt={item.title}
                    />
                  </HoverBox>
                  <H4
                    fontSize="14px"
                    fontWeight="600"
                    className="client__title"
                  >
                    {item.title}
                  </H4>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};

const productList = [
  {
    title: 'Sunglass',
    price: 150,
    imgUrl: '/assets/images/products/imagegoggles.png',
    productUrl: '/product/b1',
  },
  {
    title: 'Makeup',
    price: 250,
    imgUrl: '/assets/images/products/lipstick (2).png',
    productUrl: '/product/b12',
  },
  {
    title: 'Smart Watch',
    price: 350,
    imgUrl: '/assets/images/products/bgwatch.png',
    productUrl: '/product/b13',
  },
  {
    title: 'Lipstick',
    price: 15,
    imgUrl: '/assets/images/products/lipstick (1).png',
    productUrl: '/product/b14',
  },
  {
    title: 'Green plant',
    price: 55,
    imgUrl: '/assets/images/products/lipstick (4).png',
    productUrl: '/product/b15',
  },
  {
    title: 'Bonsai tree',
    price: 535,
    imgUrl: '/assets/images/products/lipstick (3).png',
    productUrl: '/product/b16',
  },
  {
    title: 'Sunglass',
    price: 150,
    imgUrl: '/assets/images/products/imagegoggles.png',
    productUrl: '/product/b17',
  },
  {
    title: 'Makeup',
    price: 250,
    imgUrl: '/assets/images/products/lipstick (2).png',
    productUrl: '/product/b18',
  },
  {
    title: 'Smart Watch',
    price: 350,
    imgUrl: '/assets/images/products/bgwatch.png',
    productUrl: '/product/b19',
  },
];

export default Clients;
