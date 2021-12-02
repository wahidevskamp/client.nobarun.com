import Avatar from '@component/avatar/Avatar';
import Box from '@component/Box';
import Button from '@component/buttons/Button';
import FlexBox from '@component/FlexBox';
import Rating from '@component/rating/Rating';
import { H2, H3, SemiSpan, Span } from '@component/Typography';
import getYoutubeId from 'helpers/getYoutubeId';
import React from 'react';
import Image from '@component/Image';
import Card from '@component/Card';
import useWindowSize from '@hook/useWindowSize';
import Link from 'next/link';
import Pagination from '@component/pagination/Pagination';

const RelatedReview = ({ reviews }) => {
  const width = useWindowSize();
  return (
    <ul>
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
              color="#EC1C24"
              fontSize="32px"
              mb={width < 600 ? '.3em' : '0'}
            >
              Product Reviews
            </H2>
            {reviews && reviews.length > 0 && (
              <Link href="#">
                <a className="product__review_btn">Read all reviews</a>
              </Link>
            )}
          </FlexBox>

          {reviews.map((review) => (
            <Box>
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
                />
              </Span>
              <FlexBox my="2rem" flexWrap="wrap" justifyContent="center">
                {review?.reviewMedia.images.map((image) => (
                  <Button
                    borderRadius={8}
                    mt="1.5em"
                    // onClick={() => {
                    //   setIsOpen(true);
                    //   setImage(image);
                    // }}
                  >
                    <Image key={image} src={image} alt="" height="100px" />
                  </Button>
                ))}
                {review?.reviewMedia?.videos.map((video) => {
                  console.log(video);
                  const id = video && getYoutubeId(video);
                  const link = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
                  return (
                    <Button
                      borderRadius={8}
                      mt="1.5em"
                      // onClick={() => {
                      //   setIsOpen(true);
                      //   setImage(link);
                      //   setIsVideo(true);
                      //   setVideoLink(id);
                      // }}
                    >
                      <Image key={link} src={link} alt="" height="100px" />
                    </Button>
                  );
                })}
              </FlexBox>
            </Box>
          ))}
          {reviews?.length > 5 && (
            <FlexBox
              mt="3em"
              justifyContent={width < 600 ? 'center' : 'flex-end'}
            >
              <Pagination pageCount={5} />
            </FlexBox>
          )}
        </Box>
      </Card>
    </ul>
  );
};

export default RelatedReview;
