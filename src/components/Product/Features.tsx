import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Grid from '@component/grid/Grid';
import Image from '@component/Image';
import Typography, { H2 } from '@component/Typography';
import React from 'react';

const Features = () => {
  // return (
  //   {
  return (
    <>
      {[1, 2, 3].map((feature, idx) => (
        <Card px="5em" py="3em" mb="2em">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={10}
            flexDirection={idx % 2 !== 0 ? 'row-reverse' : 'row'}
          >
            <Grid item sm={3}>
              <FlexBox justifyContent="center">
                <span className="product__keypoints-image">
                  <Image
                    src="https://nobarun.s3.us-east-2.amazonaws.com/1584049.jpg"
                    alt=""
                    height="300px"
                    borderRadius={8}
                  />
                </span>
              </FlexBox>
            </Grid>
            <Grid item sm={9}>
              <H2 mb="15px">Smooth Cutting Operation</H2>
              <Typography>
                Commercial Bone Saw Machine cut bone and meat smoothly with
                suitable shape. You can customize bone and meat cutting size
                according to you needs. Its smooth operation makes you more
                comfortable and productive. This product facilitates you to
                change the thickness of meat, meat and frozen fish along with
                the smooth process {feature}.
              </Typography>
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  );
};

export default Features;
