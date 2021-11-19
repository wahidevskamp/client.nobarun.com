import React, { useState } from 'react';
import ProductCard12 from '@component/product-cards/ProductCard12';
import Grid from '@component/grid/Grid';
import Image from '@component/Image';
import HoverBox from '@component/HoverBox';
import Button from '@component/buttons/Button';
import image from 'next/image';
import getYoutubeId from 'helpers/getYoutubeId';

const CustomerMedia = ({ reviews }) => {
  const [image, setImage] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  console.log(reviews);
  return (
    <ProductCard12 title="Customer Submitted  Photos & Videos">
      {reviews &&
        reviews.length > 0 &&
        reviews.map((review, index) => {
          const images = review?.reviewMedia.images.map((image) => (
            <Grid item xs={3} key={image + Math.random() + index}>
              <Button
                onClick={() => {
                  setIsOpen(true);
                  setImage(image);
                }}
              >
                <Image key={image} src={image} alt="" height="100px" />
              </Button>
            </Grid>
          ));
          const videos = review?.reviewMedia?.videos.map((video) => {
            const id = video && getYoutubeId(video);
            const link = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
            return (
              <Grid item spacing={4} xs={4} key={link}>
                <div
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
                    width="100%"
                  />
                </div>
              </Grid>
            );
          });
          return (
            <Grid container spacing={4}>
              {images}
              {videos}
              <Grid item>
                <span>&nbsp;</span>
              </Grid>
            </Grid>
          );
        })}
      {/* <Grid item>
        <span>&nbsp;</span>
      </Grid> */}
    </ProductCard12>
  );
};

export default CustomerMedia;
