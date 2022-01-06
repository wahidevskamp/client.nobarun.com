import Box from '@component/Box';
import IconButton from '@component/buttons/IconButton';
import Card from '@component/Card';
import Carousel from '@component/carousel/Carousel';
import Icon from '@component/icon/Icon';
import Image from '@component/Image';
import Modal from '@component/modal/Modal';
import ProductCard12 from '@component/product-cards/HeadlineCard';
import getYoutubeId from 'helpers/getYoutubeId';
import React, { useState } from 'react';

const CustomerMedia = ({ reviews }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  let medias = [];
  reviews.forEach((review) => {
    medias = medias
      .concat(review?.reviewMedia.images)
      .concat(review?.reviewMedia.videos);
  });
  if (medias.length <= 0) {
    return <></>;
  }

  return (
    <ProductCard12 title="Customer Submitted  Photos & Videos">
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
            totalSlides={+medias.length}
            visibleSlides={1}
            currentSlide={currentSlide}
            infinite={true}
            autoPlay={false}
            showDots={false}
            showArrow={true}
            spacing="0px"
          >
            {medias.map((media: string, idx) => {
              if (media.includes('youtube')) {
                const id = media && getYoutubeId(media);
                return (
                  <div className="product__review_modal-image" key={idx + id}>
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                );
              } else {
                return (
                  <div className="product__review_modal-image">
                    <img key={media} src={media} alt="" />
                  </div>
                );
              }
            })}
          </Carousel>
        </Card>
      </Modal>
      <Box flexWrap="wrap" className="product__review_media">
        {medias.map((media: string, idx) => {
          if (media.includes('youtube')) {
            const id = media && getYoutubeId(media);
            const link = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
            return (
              <Box
                key={idx + id}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setIsOpen(true);
                  setCurrentSlide(idx);
                }}
              >
                <Image
                  key={link}
                  src={link}
                  alt={media}
                  height="100px"
                  width="100px"
                />
              </Box>
            );
          } else {
            return (
              <Box
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setIsOpen(true);
                  setCurrentSlide(idx);
                }}
              >
                <Image
                  key={media}
                  src={media}
                  alt={media}
                  height="100px"
                  width="100px"
                />
              </Box>
            );
          }
        })}
      </Box>
    </ProductCard12>
  );
};

export default CustomerMedia;
