import Box from '@component/Box';
import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Image from '@component/Image';
import Rating from '@component/rating/Rating';
import { H2, H3, SemiSpan, Span } from '@component/Typography';
import useWindowSize from '@hook/useWindowSize';
import React, { Fragment } from 'react';
import Avatar from '@component/avatar/Avatar';
import Pagination from '@component/pagination/Pagination';
import Link from 'next/link';

interface ReviewProps {
  reviews: any[];
}
const Review: React.FC<ReviewProps> = ({ reviews }) => {
  const width = useWindowSize();
  return (
    <Fragment>
      <Card
        px={width < 600 ? '1.5em' : '3em'}
        py={width < 600 ? '1.5em' : '4em'}
        mb="2em"
      >
        <Box m="-0.25rem" position="relative">
          <FlexBox
            alignItems="center"
            justifyContent="space-between"
            mt={width < 600 ? '2rem' : '0'}
            mb="3rem"
            flexDirection={width < 600 ? 'column' : 'row'}
          >
            <H2
              fontWeight="bold"
              textAlign="center"
              lineHeight="1"
              color="#e94560"
              mb={width < 600 ? '.3em' : '0'}
            >
              Product Reviews
            </H2>
            <Link href="#">
              <a>
                <SemiSpan>Read all reviews</SemiSpan>
              </a>
            </Link>
          </FlexBox>
          <Box p="0.25rem">
            <FlexBox alignItems="center">
              <Avatar
                src="	https://www.artisan-outfitters.com/image/logo.png"
                size={80}
              />
              <Box ml="2em">
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
                  style={{ padding: '.5em 0 1.5em' }}
                />
              </Box>
            </FlexBox>
            <Span color="gray.700">
              Yesterday I received my first box. I was very impressed by the
              freshness of the produce. I had tried (another delivery service)
              and had to cancel because of low quality.
            </Span>
            <FlexBox my="2rem" flexWrap="wrap" justifyContent="center">
              {[1, 2, 3, 4, 1, 1, 1].map((image) => (
                <Image
                  key={image}
                  src="https://nobarun.s3.us-east-2.amazonaws.com/1584049.jpg"
                  alt=""
                  height="100px"
                  borderRadius={8}
                />
              ))}
            </FlexBox>
          </Box>
          {reviews?.map((review) => (
            <Box p="0.25rem">
              <FlexBox alignItems="center">
                <Avatar
                  src="	https://www.artisan-outfitters.com/image/logo.png"
                  size={80}
                />
                <Box ml="2em">
                  <H3 mt="0.5rem" fontWeight="700">
                    {review.name}
                  </H3>
                  <SemiSpan mt="10px">
                    From <strong>The Wood House Grill</strong> on 9 sept 2021
                  </SemiSpan>
                  <Rating
                    outof={5}
                    value={review?.rating}
                    size="large"
                    readonly
                    color="warn"
                    style={{ padding: '.5em 0 1.5em' }}
                  />
                </Box>
              </FlexBox>
              <Span color="gray.700">
                <div
                  dangerouslySetInnerHTML={{
                    __html: review?.reviewText,
                  }}
                ></div>
              </Span>
              <FlexBox my="2rem" flexWrap="wrap" justifyContent="center">
                {review?.reviewMedia.images.map((image) => (
                  <Image
                    key={image}
                    src={image}
                    alt=""
                    height="100px"
                    borderRadius={8}
                  />
                ))}
              </FlexBox>
            </Box>
          ))}
          <FlexBox justifyContent={width < 600 ? 'center' : 'flex-end'}>
            <Pagination pageCount={5} />
          </FlexBox>
        </Box>
      </Card>
    </Fragment>
  );
};

export default Review;
