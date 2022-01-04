import Button from '@component/buttons/Button';
import IconButton from '@component/buttons/IconButton';
import Card from '@component/Card';
import FlexBox from '@component/FlexBox';
import Grid from '@component/grid/Grid';
import Icon from '@component/icon/Icon';
import Rating from '@component/rating/Rating';
import TextField from '@component/text-field/TextField';
import TextArea from '@component/textarea/TextArea';
import {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  SemiSpan,
  Span,
} from '@component/Typography';
import useWindowSize from '@hook/useWindowSize';
import React, { useState } from 'react';
import { gql } from 'graphql-request';
import Client from '../../config/GraphQLRequest';
import Alert from '@component/alert/alert';

const defaultState = {
  name: '',
  company: '',
  email: '',
  location: '',
  review: '',
};

const CREATE_REVIEW = gql`
  mutation createReview($data: CreateNewReview!) {
    createReview(data: $data) {
      id
    }
  }
`;

const AddReview = ({ productCode }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const width = useWindowSize();
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState(defaultState);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  const postReviewHandler = async () => {
    const review = {
      data: {
        title: formData.name,
        name: formData.company,
        email: formData.email,
        rating: rating,
        reviewText: formData.review,
        productCode,
        reviewMedia: {
          images,
          videos,
        },
        isPublished: false,
      },
    };
    try {
      const data = await Client.request(CREATE_REVIEW, review);
      if (data) {
        setFormData(defaultState);
        setModalOpen(true);
      }
    } catch (error) {
      console.error(JSON.stringify(error, undefined, 2));
    }
  };

  const addImageHandler = (e) => {
    const files = e.target.files;
    const tempImages: string[] = [];
    const tempVideos: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const src = URL.createObjectURL(files[i]);
      if (files[i]['type'].split('/')[0] === 'image') {
        tempImages.push(src);
      } else {
        tempVideos.push(src);
      }
    }
    tempImages.length > 0 && setImages([...images, ...tempImages]);
    tempVideos.length > 0 && setVideos([...videos, ...tempVideos]);
  };

  const formHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onClose = () => {
    setModalOpen(false);
  };
  const removeHandler = (link, type: 'video' | 'image') => {
    if (type === 'image') {
      let newImages = [...images];
      newImages = images.filter((img) => img !== link);
      setImages(newImages);
    }
    if (type === 'video') {
      let newImages = [...videos];
      newImages = videos.filter((img) => img !== link);
      setVideos(newImages);
    }
  };

  return (
    <Card px="3rem" py="4rem">
      <Alert
        modalOpen={modalOpen}
        onClose={onClose}
        message="Your Review is Pending. We will notify you when it is posted"
      />
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
          value={rating}
          onChange={(value) => setRating(value)}
        />
        <Span ml="1em" fontSize="1.6rem" color="#848484">
          Review Rating
          <span style={{ color: 'red', fontSize: '2rem' }}>*</span>
        </Span>
      </FlexBox>
      <Grid container spacing={width > 767 ? 10 : 2}>
        <Grid item md={6} xs={12}>
          <TextField
            name="name"
            label="Your Name"
            value={formData?.name}
            onChange={formHandler}
            fullwidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            name="company"
            label="Your Company Name"
            value={formData?.company}
            onChange={formHandler}
            fullwidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={width > 767 ? 10 : 2}>
        <Grid item md={6} xs={12}>
          <TextField
            name="email"
            label="Your Email Address"
            value={formData?.email}
            onChange={formHandler}
            fullwidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            name="location"
            value={formData?.location}
            onChange={formHandler}
            label="Your Location"
            fullwidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <TextArea
            fullwidth
            label="Write your Review"
            name="review"
            value={formData?.review}
            onChange={formHandler}
            my="1.5rem"
            style={{ minHeight: '150px' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Paragraph
            fontWeight="600"
            fontSize="2rem"
            color="#4B566B"
            mb="1.5rem"
          >
            Add Images & Videos to your review
          </Paragraph>
          <div className="product-images">
            {images.map((image) => (
              <figure>
                <IconButton
                  className="remove-image"
                  onClick={() => removeHandler(image, 'image')}
                >
                  <Icon size="1.5rem">close</Icon>
                </IconButton>
                <img src={image} alt="" />
              </figure>
            ))}
            {videos.map((video) => (
              <figure
                style={{
                  backgroundColor: '#eee',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <IconButton
                  className="remove-image"
                  onClick={() => removeHandler(video, 'video')}
                >
                  <Icon size="1.5rem">close</Icon>
                </IconButton>
                <video
                  src={video}
                  controls={false}
                  autoPlay
                  muted
                  style={{ height: '7.5rem', width: '7.5rem' }}
                >
                  Your browser does not support the video tag.
                </video>
              </figure>
            ))}
            <figure>
              <label className="add-new-image">
                <Icon>plus</Icon>
                <input
                  type="file"
                  multiple
                  onChange={addImageHandler}
                  style={{ display: 'none' }}
                />
              </label>
            </figure>
          </div>
          <Paragraph fontSize="1.6rem" mt="1rem" color="#4B566B">
            <strong>Allowed file types: </strong>jpg, gif, png,mp4,avi max total
            size of files: 100MB, max number of files: 8!
          </Paragraph>
        </Grid>
      </Grid>
      <FlexBox mt="3em" justifyContent="center">
        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{ backgroundColor: '#EC1C24' }}
          onClick={postReviewHandler}
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
