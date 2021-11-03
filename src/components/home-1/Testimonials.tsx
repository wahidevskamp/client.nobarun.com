import Box from '@component/Box';
import Card from '@component/Card';
import Carousel from '@component/carousel-review/Carousel';
import FlexBox from '@component/FlexBox';
import Image from '@component/Image';
import { GrocerySection10Wrapper } from '@component/home-2/GrocerySectionStyle';
import Rating from '@component/rating/Rating';
import { H2, H3, SemiSpan, Span } from '@component/Typography';
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <GrocerySection10Wrapper>
      <Box m="-0.25rem" mt="3em" position="relative">
        <H2
          fontWeight="bold"
          mb="3rem"
          textAlign="left"
          lineHeight="1"
          className="review__headline"
        >
          Whats Clients say about Us
        </H2>
        <Carousel
          totalSlides={3}
          visibleSlides={1}
          showDots={true}
          spacing="0px"
          arrowButtonColor="inherit"
          showArrowOnHover={true}
        >
          {cardList.map((_item, idx) => (
            <Box p="0.25rem" key={_item.title + idx}>
              <Card className="carousel-card">
                <Box maxWidth="800px" margin="auto" textAlign="center">
                  <H3 mt="0.5rem" fontWeight="700">
                    Shamim Ahmmed
                  </H3>
                  <SemiSpan mt="10px">
                    From <strong>The Wood House Grill</strong> on 9 sept 2021
                  </SemiSpan>
                  <Rating
                    outof={5}
                    value={4}
                    size="large"
                    readonly
                    color="warn"
                    className="review__rating"
                  />
                  <Span color="gray.700">
                    Yesterday I received my first box. I was very impressed by
                    the freshness of the produce. I had tried (another delivery
                    service) and had to cancel because of low quality.
                  </Span>
                  <FlexBox my="2rem" flexWrap="wrap" justifyContent="center">
                    {[122, 2222, 3322, 2124, 554645, 74645, 236].map(
                      (image, idx) => (
                        <Image
                          key={image + idx}
                          src="https://nobarun.s3.us-east-2.amazonaws.com/1584049.jpg"
                          alt=""
                          height="100px"
                          borderRadius={8}
                        />
                      ),
                    )}
                  </FlexBox>
                </Box>
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
