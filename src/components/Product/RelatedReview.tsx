import Avatar from '@component/avatar/Avatar';
import Box from '@component/Box';
import FlexBox from '@component/FlexBox';
import Rating from '@component/rating/Rating';
import { H2, H3, SemiSpan, Span } from '@component/Typography';
import getYoutubeId from 'helpers/getYoutubeId';
import React, { useState } from 'react';
import Card from '@component/Card';
import useWindowSize from '@hook/useWindowSize';
import Link from 'next/link';
import Pagination from '@component/pagination/Pagination';
import Modal from '@component/modal/Modal';
import IconButton from '@component/buttons/IconButton';
import Icon from '@component/icon/Icon';

const RelatedReview = ({ reviews, newReview }) => {
  const width = useWindowSize();
  const [image, setImage] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setIsVideo(false);
          setVideoLink('');
        }}
      >
        <Card className="product__review_image">
          <IconButton
            className="product__review_image-close"
            onClick={() => {
              setIsOpen(false);
              setIsVideo(false);
              setVideoLink('');
            }}
          >
            <Icon>close</Icon>
          </IconButton>
          {isVideo ? (
            <iframe
              width="500"
              height="500"
              src={`https://www.youtube.com/embed/${videoLink}`}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              key={image}
              src={image}
              alt=""
              style={{ minHeight: '500px' }}
            />
          )}
        </Card>
      </Modal>
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

          {reviews.concat(newReview).map((review) => (
            <Box marginBottom="8rem">
              <FlexBox alignItems="center">
                <Avatar
                  src="	https://www.artisan-outfitters.com/image/logo.png"
                  size={80}
                />
                <Box ml="2em">
                  <H3 mt="0.5rem" fontWeight="700">
                    {review.title}
                  </H3>
                  <SemiSpan mt="10px">
                    From <strong>{review.name}</strong> on 9 sept 2021
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
              <Box className="product-images" mt="2rem">
                {review?.reviewMedia?.images.map((image) => (
                  <figure
                    onClick={() => {
                      setIsOpen(true);
                      setImage(image);
                    }}
                  >
                    <img src={image} alt="" />
                  </figure>
                ))}
                {review?.reviewMedia?.videos.map((video) => {
                  console.log(video);
                  const id = video && getYoutubeId(video);
                  const link = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
                  return (
                    <figure
                      onClick={() => {
                        setIsOpen(true);
                        setImage(link);
                        setIsVideo(true);
                        setVideoLink(id);
                      }}
                    >
                      <button type="button" className="remove-image">
                        <IconButton>
                          <Icon size="small ">close</Icon>
                        </IconButton>
                      </button>
                      <img src={link} alt="" />
                    </figure>
                  );
                })}
              </Box>
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
    </div>
  );
};

export default RelatedReview;
