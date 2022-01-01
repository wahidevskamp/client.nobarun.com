import React from 'react';
import Box from '@component/Box';
import { H2, H3, H6, Paragraph } from '@component/Typography';
import Grid from '@component/grid/Grid';
import TextField from '@component/text-field/TextField';
import TextArea from '@component/textarea/TextArea';
import Icon from '@component/icon/Icon';
import NavbarLayout from '@component/layout/NavbarLayout';
import useWindowSize from '@hook/useWindowSize';
import FlexBox from '@component/FlexBox';
import Button from '@component/buttons/Button';

const ContactPage = () => {
  const width = useWindowSize();

  return (
    <Box
      p={width < 600 ? '0px' : '20px'}
      mt={width < 900 ? '80px' : '0px'}
      mb="80px"
    >
      <Box mb={60}>
        <Grid container spacing={width < 1250 ? 5 : 20} alignItems="center">
          <Grid item lg={4} md={12}>
            <FlexBox mb="23px">
              <Icon size="4.8rem" mr="1rem" style={{ color: '#fff' }}>
                maps
              </Icon>
              <Box>
                <H3 mb=".5rem" fontSize={width < 600 ? '2rem' : '3.2rem'}>
                  Corporate Office Address
                </H3>
                <Paragraph
                  fontSize="2rem"
                  fontWeight="400"
                  mb="2px"
                  color="#333"
                >
                  Building Name: Planet Ornate House#199(1st Floor),Road#01 New
                  DOHS Mohakhali , Dhaka 1206, Bangladesh
                </Paragraph>
              </Box>
            </FlexBox>
            <FlexBox mb="30px">
              <Icon size="4.8rem" mr="1rem">
                carbon_phone-voice-filled
              </Icon>
              <Box>
                <H3 mb=".5rem" fontSize={width < 600 ? '2rem' : '3.2rem'}>
                  Phone
                </H3>
                <Paragraph
                  fontSize="2rem"
                  fontWeight="400"
                  mb="2px"
                  color="#333"
                >
                  Mobile : +88 01711 99 86 26 (Whatsapp)
                </Paragraph>
                <Paragraph
                  fontSize="2rem"
                  fontWeight="400"
                  mb="2px"
                  color="#333"
                >
                  IP Phone : +88 09610 321 421
                </Paragraph>
              </Box>
            </FlexBox>
            <FlexBox mb="20px">
              <Icon size="4.8rem" mr="1rem">
                ic_sharp-mark-email-read
              </Icon>
              <Box>
                <H3 mb=".5rem" fontSize={width < 600 ? '2rem' : '3.2rem'}>
                  Email
                </H3>
                <Paragraph
                  fontSize="2rem"
                  fontWeight="400"
                  mb="2px"
                  color="#333"
                >
                  nobarunbd@gmail.com
                </Paragraph>
              </Box>
            </FlexBox>
          </Grid>
          <Grid item lg={8} xs={12}>
            <H2
              fontSize={width < 600 ? '2.5rem' : '5rem'}
              textAlign="center"
              mb="10px"
            >
              Get in Touch
            </H2>
            <H6
              fontSize={width < 600 ? '1.8rem' : '2rem'}
              textAlign="center"
              mb="40px"
            >
              Have any questions? Reach out to us from our contact form and we
              will get back to you shortly.
            </H6>
            <Grid container spacing={width < 767 ? 0 : 5}>
              <Grid item md={6} xs={12}>
                <TextField
                  label="Your Full Name"
                  placeholder="Type Your Full Name Here"
                  fullwidth
                  required
                  mb={width < 767 ? 15 : '3px'}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  label="Your Email Address"
                  placeholder="Type Your email address"
                  fullwidth
                  required
                  mb={width < 767 ? 15 : '3px'}
                />
              </Grid>
            </Grid>
            <Grid container spacing={width < 767 ? 0 : 5}>
              <Grid item md={6} xs={12}>
                <TextField
                  label="Mobile Number"
                  placeholder="Type Your Active Mobile Number"
                  fullwidth
                  required
                  mb={width < 767 ? 15 : '3px'}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  label="Alternate Contact No"
                  placeholder="Type Your Alternate Contact Number"
                  fullwidth
                  required
                  mb={width < 767 ? 15 : '3px'}
                />
              </Grid>
            </Grid>
            <Grid container spacing={width < 767 ? 0 : 5}>
              <Grid item md={6} xs={12}>
                <TextField
                  label="Company Name"
                  placeholder="Type Your Company Name"
                  fullwidth
                  required
                  mb={width < 767 ? 15 : 0}
                />
              </Grid>
            </Grid>
            <Grid container spacing={width < 767 ? 0 : 5}>
              <Grid item xs={12}>
                <TextArea
                  fullwidth
                  label="Your Message To Us"
                  placeholder="Write Your Details Message To Nobarun International"
                  style={{ minHeight: '150px' }}
                  required
                  mb={width < 767 ? 15 : '10px'}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Button
                  fullwidth
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{
                    background: 'linear-gradient(#1ca346, #6fba1a)',
                    maxWidth: '60%',
                    margin: '1rem auto',
                  }}
                >
                  <Icon size="1.5rem" mr="1rem">
                    telegram
                  </Icon>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <H2 textAlign="center" mb="40px">
          Google Map Location
        </H2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9532234081103!2d90.396399215529!3d23.78467998457248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7404bd1656f%3A0x7ebd233d85ca7af8!2sNobarun%20International!5e0!3m2!1sen!2sbd!4v1640810467424!5m2!1sen!2sbd&zoom=12"
          // width="600"
          height="450"
          style={{ border: 0, width: '100%', zoom: 1 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};
ContactPage.layout = NavbarLayout;

export default ContactPage;

// <iframe
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9532234081103!2d90.396399215529!3d23.78467998457248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7404bd1656f%3A0x7ebd233d85ca7af8!2sNobarun%20International!5e0!3m2!1sen!2sbd!4v1640810467424!5m2!1sen!2sbd"
//   width="800"
//   height="600"
//   style="border:0;"
//   allowfullscreen=""
//   loading="lazy"
// ></iframe>;
