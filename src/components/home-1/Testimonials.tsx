import Avatar from '@component/avatar/Avatar';
import Box from '@component/Box';
import Card from '@component/Card';
import Carousel from '@component/carousel/Carousel';
import FlexBox from '@component/FlexBox';
import { GrocerySection10Wrapper } from '@component/home-2/GrocerySectionStyle';
import Icon from '@component/icon/Icon';
import { H5, SemiSpan, Span } from '@component/Typography';
import useWindowSize from '@hook/useWindowSize';
import React, { useState, useEffect } from 'react';

const Testimonials: React.FC = () => {
  const [visibleSlides, setVisibleSlides] = useState(2);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 1200) setVisibleSlides(1);
    else setVisibleSlides(2);
  }, [width]);

  return (
    <GrocerySection10Wrapper>
      <Box m="-0.25rem">
        <Carousel
          totalSlides={3}
          visibleSlides={visibleSlides}
          showDots={true}
          spacing="0px"
          arrowButtonColor="inherit"
          showArrowOnHover={true}
        >
          {cardList.map((_item) => (
            <Box p="0.25rem">
              <Card className="carousel-card">
                <FlexBox
                  className="quote-content"
                  position="relative"
                  flexWrap="wrap"
                >
                  <Icon className="quote quote-open">quote-open</Icon>
                  <Avatar
                    className="avatar"
                    src="/assets/images/faces/7.png"
                    size={64}
                  />
                  <Box maxWidth="410px">
                    <Span color="gray.700">
                      Yesterday I received my first box. I was very impressed by
                      the freshness of the produce. I had tried (another
                      delivery service) and had to cancel because of low
                      quality.
                    </Span>
                    <H5 mt="0.5rem" fontWeight="700">
                      Jonathon Doe
                    </H5>
                    <SemiSpan>Gurugram, Haryana</SemiSpan>
                  </Box>
                  <Icon className="quote quote-close">quote-close</Icon>
                </FlexBox>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </GrocerySection10Wrapper>
    // </Container>
  );
};

const cardList = [
  {
    title: '25% Special Off Today Only for Vegetables',
    subtitle: 'Till 10 Sept, 2021',
    imgUrl:
      '/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png',
    shopUrl: '/',
    bgColor: '#F6FFE5',
  },
  {
    title: '15% Off for All Product Only Need to Subscribe',
    subtitle: 'Subscribe Us',
    imgUrl:
      '/assets/images/products/kisspng-organic-food-milk-food-gift-baskets-grocery-5abeaffc1e5b25 1.png',
    shopUrl: '/',
    bgColor: '#FFF8E5',
  },
  {
    title: '25% Special Off Today Only for Vegetables',
    subtitle: 'Till 10 Sept, 2021',
    imgUrl:
      '/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png',
    shopUrl: '/',
    bgColor: '#F6FFE5',
  },
];
export default Testimonials;
