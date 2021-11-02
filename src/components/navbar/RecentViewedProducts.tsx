import React, { useEffect, useState } from 'react';
import Box from '@component/Box';
import Card from '@component/Card';
import Carousel from '@component/carousel/Carousel';
import HoverBox from '@component/HoverBox';
import { H4 } from '@component/Typography';
import useWindowSize from '@hook/useWindowSize';
import Link from 'next/link';

const RecentViewedProducts: React.FC = () => {
  const [visibleSlides, setVisibleSlides] = useState(6);
  const [products, setProducts] = useState([]);
  const width = useWindowSize();

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('recentlyViewed'));
    setProducts(products);
  }, []);
  useEffect(() => {
    if (width < 370) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(6);
  }, [width]);

  return (
    <Box py=".5rem" px="1.5rem">
      <Carousel totalSlides={9} visibleSlides={visibleSlides}>
        {products.map((product) => (
          <Box py="0.25rem" key={product.id}>
            <Card p="1rem">
              <Link href={`/product/${product.id}`}>
                <a>
                  <HoverBox borderRadius={8} mb="0.5rem">
                    <img
                      src={product.image}
                      width="100%"
                      height="auto"
                      alt={product.title}
                    />
                  </HoverBox>
                  <H4 fontWeight="600" fontSize="14px" mb="0.25rem">
                    {product.title}
                  </H4>
                </a>
              </Link>
            </Card>
          </Box>
        ))}
      </Carousel>
    </Box>
    // </CategorySectionCreator>
  );
};

export default RecentViewedProducts;
