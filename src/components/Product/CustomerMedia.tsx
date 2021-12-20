import React, { useState } from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';
import Grid from '@component/grid/Grid';
import Image from '@component/Image';
import Button from '@component/buttons/Button';
import getYoutubeId from 'helpers/getYoutubeId';
import FlexBox from '@component/FlexBox';
import Box from '@component/Box';
import IconButton from '@component/buttons/IconButton';
import Card from '@component/Card';
import Icon from '@component/icon/Icon';
import Modal from '@component/modal/Modal';

const CustomerMedia = ({ reviews }) => {
  const [image, setImage] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  return (
    <ProductCard12 title="Customer Submitted  Photos & Videos">
      {reviews &&
        reviews.length > 0 &&
        reviews.map((review, index) => {
          const images = review?.reviewMedia.images.map((image) => (
            <Box
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setIsOpen(true);
                setImage(image);
              }}
            >
              <Image
                key={image}
                src={image}
                alt=""
                height="100px"
                width="100px"
              />
            </Box>
          ));
          const videos = review?.reviewMedia?.videos.map((video) => {
            const id = video && getYoutubeId(video);
            const link = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
            return (
              <Box
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setIsOpen(true);
                  setImage(link);
                  setIsVideo(true);
                  setVideoLink(id);
                }}
              >
                <Image
                  key={link}
                  src={link}
                  alt=""
                  height="100px"
                  width="100px"
                />
              </Box>
            );
          });
          return (
            <>
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
                      className="product__review_modal-image product__review_modal-image--video"
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
                      className="product__review_modal-image"
                    />
                  )}
                </Card>
              </Modal>
              <Box flexWrap="wrap" className="product__review_media">
                {images}
                {videos}
              </Box>
            </>
          );
        })}
    </ProductCard12>
  );
};

export default CustomerMedia;
