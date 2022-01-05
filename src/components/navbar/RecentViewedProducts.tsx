import Card from '@component/Card';
import Carousel from '@component/carousel/Carousel';
import FlexBox from '@component/FlexBox';
import HoverBox from '@component/HoverBox';
import { H4 } from '@component/Typography';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const RecentViewedProducts: React.FC = () => {
  // const [visibleSlides, setVisibleSlides] = useState(6);
  const [products, setProducts] = useState([]);
  // const width = useWindowSize();

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('recentlyViewed'));
    setProducts(products);
  }, []);

  // useEffect(() => {
  //   if (width < 370) setVisibleSlides(1);
  //   else if (width < 650) setVisibleSlides(2);
  //   else if (width < 950) setVisibleSlides(4);
  //   else setVisibleSlides(6);
  // }, [width]);

  return (
    <FlexBox
      py="1.5rem"
      px="1.5rem"
      minHeight="20rem"
      // justifyContent="space-between"
    >
      {products ? (
        <Carousel totalSlides={products.length} visibleSlides={6}>
          {products
            // .concat(products)
            // .concat(products)
            ?.map((product) => (
              <Card px="2rem" py="1rem" minWidth="20rem">
                <Link href={`/${product.id}`}>
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
            ))}
        </Carousel>
      ) : (
        'No Products Recently Viewed'
      )}
    </FlexBox>
    // </CategorySectionCreator>
  );
};

export default RecentViewedProducts;
