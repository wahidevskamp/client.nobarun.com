import Button from '@component/buttons/Button';
import Card from '@component/Card';
import DropZone from '@component/DropZone';
import FlexBox from '@component/FlexBox';
import Grid from '@component/grid/Grid';
import Icon from '@component/icon/Icon';
import Rating from '@component/rating/Rating';
import TextField from '@component/text-field/TextField';
import TextArea from '@component/textarea/TextArea';
import { H1, SemiSpan, Span } from '@component/Typography';
import useWindowSize from '@hook/useWindowSize';
import React from 'react';

const AddReview = () => {
  const width = useWindowSize();
  return (
    <Card px="3em" py="4em">
      <H1 fontSize="3.4rem" fontWeight="500">
        Submit your review
      </H1>
      <SemiSpan my="0.8em" fontSize="1.8rem" color="#848484">
        Your email address will not be published. Required fields are marked
      </SemiSpan>
      <FlexBox alignItems="center" mt="1em" mb="3em">
        <Rating
          outof={5}
          color="warn"
          size="medium"
          readonly={false}
          value={3}
          onChange={() => {}}
        />
        <Span ml="1em" fontSize="1.6rem" color="#848484">
          Review Rating{' '}
          <span style={{ color: 'red', fontSize: '2rem' }}>*</span>
        </Span>
      </FlexBox>
      <Grid container spacing={width > 767 ? 10 : 2}>
        <Grid item md={6} xs={12}>
          <TextField label="Your Name" fullwidth />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField label="Your Company Name" fullwidth />
        </Grid>
      </Grid>
      <Grid container spacing={width > 767 ? 10 : 2}>
        <Grid item md={6} xs={12}>
          <TextField label="Your Email Address" fullwidth />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField label="Your Location" fullwidth />
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <TextArea
            fullwidth
            my="1.5rem"
            // label="Write your review* (Minimum 50 Words)"
            style={{ minHeight: '150px' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <DropZone label="Add images & videos to your review" />
        </Grid>
      </Grid>
      <FlexBox mt="3em" justifyContent="center">
        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{ backgroundColor: '#EC1C24' }}
        >
          <Icon size="3rem" mr="1em">
            send-2 1
          </Icon>
          Submit Review
        </Button>
      </FlexBox>
    </Card>
  );
};

export default AddReview;
