import Box from '@component/Box';
import Card from '@component/Card';
import Carousel from '@component/carousel-review/Carousel';
import FlexBox from '@component/FlexBox';
import Image from '@component/Image';
import Rating from '@component/rating/Rating';
import { H2, H3, SemiSpan, Span } from '@component/Typography';
import React from 'react';
import useWindowSize from '@hook/useWindowSize';
import Container from '@component/Container';

const Testimonials: React.FC = () => {
  const width = useWindowSize();
  return (
    <Container mb="10rem">
      <Box m="-0.25rem" mt="3em" position="relative">
        <H2
          fontWeight="bold"
          fontSize={width > 600 ? '32px' : '26px'}
          mb={width > 600 ? '3rem' : '1rem'}
          textAlign={width > 600 ? 'left' : 'center'}
          lineHeight="1"
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
            <Box key={_item.title + idx}>
              <Card py="2rem" className="carousel-card">
                <Box maxWidth="80rem" margin="auto" textAlign="center">
                  <H3
                    mt=".8rem"
                    mb=".5rem"
                    fontWeight="500"
                    fontSize="2.2rem"
                    color="#000"
                  >
                    Shamim Ahmmed
                  </H3>
                  <SemiSpan mt="1.5rem" fontSize="2rem" color="#6A6A6A">
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
                  <Span color="#848484">
                    Yesterday I received my first box. I was very impressed by
                    the freshness of the produce. I had tried (another delivery
                    service) and had to cancel because of low quality.
                  </Span>
                  <FlexBox my="3rem" flexWrap="wrap" justifyContent="center">
                    {[
                      'https://nobarun.s3.us-east-2.amazonaws.com/3978459.jpg',
                      'https://nobarun.s3.us-east-2.amazonaws.com/6181282.jpg',
                      'https://nobarun.s3.us-east-2.amazonaws.com/7207919.jpg',
                      'https://nobarun.s3.us-east-2.amazonaws.com/7831385.jpg',
                      'https://nobarun.s3.us-east-2.amazonaws.com/5193139.jpg',
                    ].map((image) => (
                      <Image
                        key={image}
                        src={image}
                        alt=""
                        height="100px"
                        borderRadius={8}
                        mr="1.5rem"
                      />
                    ))}
                  </FlexBox>
                </Box>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Container>
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
