import Box from '@component/Box';
import Card from '@component/Card';
import Carousel from '@component/carousel-review/Carousel';
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
          totalSlides={cardList.length}
          visibleSlides={width > 600 ? 2 : 1}
          showDots={true}
          autoPlay
          infinite
          step={1}
          interval={5000}
          spacing="0px"
          arrowButtonColor="inherit"
          showArrowOnHover={true}
        >
          {cardList.map((_item, idx) => (
            <Box key={_item.title + idx}>
              <Card pt="3rem" pb="5rem" px="1rem" className="carousel-card">
                <Box maxWidth="80rem" margin="auto" textAlign="center">
                  <img src={_item.imgUrl} alt={_item.title} height="100px" />
                  <H3
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
                </Box>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

const cardList = [
  {
    title: '25% Special Off Today Only for Vegetables',
    subtitle: 'Till 10 Sept, 2021',
    imgUrl: 'https://nobarun.s3.us-east-2.amazonaws.com/4537382.jpg',
    shopUrl: '/',
    bgColor: '#F6FFE5',
  },
  {
    title: '15% Off for All Product Only Need to Subscribe',
    subtitle: 'Subscribe Us',
    imgUrl: 'https://nobarun.s3.us-east-2.amazonaws.com/4529688.jpg',
    shopUrl: '/',
    bgColor: '#FFF8E5',
  },
  {
    title: '25% Special Off Today Only for Vegetables',
    subtitle: 'Till 10 Sept, 2021',
    imgUrl: 'https://nobarun.s3.us-east-2.amazonaws.com/2638490.jpg',
    shopUrl: '/',
    bgColor: '#F6FFE5',
  },
  {
    title: '25% Special Off Today Only for Vegetables',
    subtitle: 'Till 10 Sept, 2021',
    imgUrl:
      '/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png',
    shopUrl: '/',
    bgColor: '#F6FFE5',
  },
  {
    title: '25% Special Off Today Only for Vegetables',
    subtitle: 'Till 10 Sept, 2021',
    imgUrl:
      '/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png',
    shopUrl: '/',
    bgColor: '#F6FFE5',
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
