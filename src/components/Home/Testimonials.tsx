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
          {cardList.map((item, idx) => (
            <Box key={item.company + idx}>
              <Card
                pt="3rem"
                pb="5rem"
                px="1rem"
                minHeight="40rem"
                className="carousel-card"
              >
                <Box maxWidth="80rem" margin="auto" textAlign="center">
                  <img src={item.imgUrl} alt={item.company} height="100px" />
                  <H3
                    mb=".5rem"
                    fontWeight="500"
                    fontSize="2.2rem"
                    color="#000"
                  >
                    {item.name}
                  </H3>
                  <SemiSpan mt="1.5rem" fontSize="2rem" color="#6A6A6A">
                    From <strong>{item.company}</strong>
                  </SemiSpan>
                  <Rating
                    outof={5}
                    value={+item.rating}
                    size="large"
                    readonly
                    color="warn"
                    className="review__rating"
                  />
                  <Span color="#848484">{item.testimonial}</Span>
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
    company: 'The ACME Laboratories Ltd.',
    name: 'Major Syed Tamur Hasan (Retd)',
    imgUrl: '/assets/images/clients/ACME.png',
    rating: '5',
    testimonial:
      'We bought a rubber speed breaker from Nobarun International for Court De La ACME (Kallayanpur). The quality was very high. Their support team came and Installed it in time. Even after a few years, the quality of the product remains the same. Good luck with this company',
  },
  {
    company: 'PITZA',
    name: 'Nahid Hasan',
    imgUrl: '/assets/images/clients/Pitza.png',
    rating: '5',
    testimonial:
      'We bought a lot of goods for our restaurant from Nobarun International. The quality of the goods made from their workshop is really very good. I am also getting after-sales service on time. Highly recommended.',
  },
  {
    company: 'Roser Misty',
    name: 'Mohammad Hanif',
    imgUrl: '/assets/images/clients/Roser-Misti.png',
    rating: '5',
    testimonial:
      'We have many outlets in Dhaka and outside Dhaka, most of the products were supplied by Nobarun International. One of the reasons they like it is because of the quality of their products and the timely support. I have bought goods from many business places, but I have seldom got companies like these. Inshallah I will buy from them again if needed.',
  },
  {
    company: 'Honda (Bangladesh)',
    name: 'Shakhawat Hossain',
    imgUrl: '/assets/images/clients/Honda.png',
    rating: '5',
    testimonial:
      "I bought some goods for our factory in Bangladesh from Nobarun International. Nobarun's product quality was superior to other companies. Even though they are out of Dhaka, they came on time and installed us. You can also try it once.",
  },
  {
    company: 'Creative IT',
    name: 'Monir Hosen',
    imgUrl: '/assets/images/clients/Creative-IT-Ins..png',
    rating: '5',
    testimonial:
      'Many of you may know that Creative IT is one of the best educational institutions in Bangladesh. Since we are the best, we have confidence in Nobarun International for the best quality products. They like the quality and timely support of their products. Good luck to Nobarun International',
  },
  {
    company: 'MAX Group',
    name: 'Gouranga Sikder',
    imgUrl: '/assets/images/clients/MAX-Group.png',
    rating: '5',
    testimonial:
      'We have purchased a number of products for our project from Nobarun. Their greatest quality is to select the right product at the right time. We are happy with both product quality and service. Good luck to Nobarun.',
  },
];
export default Testimonials;
