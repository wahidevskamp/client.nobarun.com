import Box from '@component/Box';
import FlexBox from '@component/FlexBox';
import Rating from '@component/rating/Rating';
import { H2, H3, SemiSpan, Span } from '@component/Typography';
import getYoutubeId from 'helpers/getYoutubeId';
import React, { useState, useEffect } from 'react';
import Card from '@component/Card';
import useWindowSize from '@hook/useWindowSize';
import Link from 'next/link';
import Pagination from '@component/pagination/Pagination';
import Modal from '@component/modal/Modal';
import IconButton from '@component/buttons/IconButton';
import Icon from '@component/icon/Icon';
import Carousel from '@component/carousel/Carousel';
import { format } from 'date-fns';

const RelatedReview = ({ title, reviews, slug }) => {
  const width = useWindowSize();
  const MAX_INITIAL_DISPLAY = title === 'Read all reviews' ? 5 : 10;
  const [slice, setSlice] = useState(MAX_INITIAL_DISPLAY);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [reviewDetail, setReviewDetail] = useState<any>({});
  // useEffect(() => {
  //   title === 'Read all reviews' ? setSlice(5) : setSlice(10);
  // }, []);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Card className="product__review_image">
          <IconButton
            className="product__review_image-close"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Icon>close</Icon>
          </IconButton>
          <Carousel
            totalSlides={
              +reviewDetail?.reviewMedia?.images.length +
              +reviewDetail?.reviewMedia?.videos.length
            }
            visibleSlides={1}
            currentSlide={currentSlide}
            infinite={true}
            autoPlay={false}
            showDots={false}
            showArrow={true}
            spacing="0px"
          >
            {reviewDetail?.reviewMedia?.images.map((image) => (
              <div className="product__review_modal-image">
                <img key={image} src={image} alt="" />
              </div>
            ))}
            {reviewDetail?.reviewMedia?.videos.map((video) => {
              const id = video && getYoutubeId(video);
              return (
                <div className="product__review_modal-image">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              );
            })}
          </Carousel>
        </Card>
      </Modal>
      <Card
        px={width < 600 ? '1.5rem' : '3rem'}
        py={width < 600 ? '1.5rem' : '8rem'}
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
            {title === 'Load All Reviews' && reviews && reviews.length > 10 && (
              <a
                className="product__review_btn"
                onClick={(e) => {
                  e.preventDefault();
                  if (reviews.length === slice) {
                    setSlice(10);
                  } else {
                    setSlice(reviews.length);
                  }
                }}
              >
                {reviews.length !== slice ? title : 'Show Less Review'}
              </a>
            )}
            {title === 'Read all reviews' && reviews && reviews.length > 0 && (
              <Link href={`/${slug}/reviews`}>
                <a className="product__review_btn">{title}</a>
              </Link>
            )}
          </FlexBox>

          {reviews.slice(0, slice).map((review) => (
            <Box marginBottom="8rem">
              <FlexBox alignItems="center">
                <img
                  src={review.featuredImage}
                  style={{ height: '8rem', width: '8rem' }}
                />
                <Box ml="2em">
                  <H3 mt="0.5rem" fontWeight="700" fontSize="2.5rem">
                    {review.name}
                  </H3>
                  <SemiSpan mt="10px" fontSize="1.8rem">
                    From <strong>{review.title}</strong> on{' '}
                    {review?.createdAt &&
                      format(new Date(review?.createdAt), 'do LLL, yyyy')}
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
              <Span color="gray.700" fontSize="2.2rem">
                <div
                  dangerouslySetInnerHTML={{
                    __html: review?.reviewText,
                  }}
                />
              </Span>
              <Box className="product-images" mt="2rem">
                {review?.reviewMedia?.images.map((image, idx) => (
                  <figure
                    onClick={() => {
                      setIsOpen(true);
                      setReviewDetail(review);
                      setCurrentSlide(idx);
                    }}
                  >
                    <img src={image} alt="" />
                  </figure>
                ))}
                {review?.reviewMedia?.videos.map((video, idx) => {
                  const id = video && getYoutubeId(video);
                  const link = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
                  return (
                    <figure
                      onClick={() => {
                        setIsOpen(true);
                        setReviewDetail(review);
                        setCurrentSlide(
                          review?.reviewMedia?.images.length + idx,
                        );
                      }}
                    >
                      <Icon size="3rem" className="product__intro-video-icon">
                        play-solid
                      </Icon>
                      <img src={link} alt="" />
                    </figure>
                  );
                })}
              </Box>
            </Box>
          ))}
          {reviews?.length > MAX_INITIAL_DISPLAY && (
            <Box textAlign="center" mt="4rem">
              <button
                className="client_load-btn"
                onClick={() => {
                  if (slice < reviews?.length) setSlice(reviews?.length);
                  else if (slice === reviews.length)
                    setSlice(MAX_INITIAL_DISPLAY);
                }}
              >
                {slice === reviews?.length ? 'Show Less' : 'Load More'}
              </button>
            </Box>
          )}
        </Box>
      </Card>
    </div>
  );
};

export default RelatedReview;
