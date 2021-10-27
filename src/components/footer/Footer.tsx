import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { getTheme } from '../../utils/utils';
import Box from '../Box';
import Container from '../Container';
import FlexBox from '../FlexBox';
import Grid from '../grid/Grid';
import Icon from '../icon/Icon';
import Typography, { Paragraph } from '../Typography';

const StyledLink = styled.a`
  position: relative;
  display: block;
  padding: 0.3rem 0rem;
  color: ${getTheme('colors.gray.500')};
  cursor: pointer;
  border-radius: 4px;
  :hover {
    color: ${getTheme('colors.gray.100')};
  }
`;

const Footer: React.FC = () => {
  return (
    <footer>
      <Box
        style={{
          backgroundImage: 'linear-gradient(#1CA346,#6FBA1A)',
        }}
      >
        <Container p="1rem" color="white">
          <Box py="5rem" overflow="hidden">
            <Grid container spacing={6}>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Typography
                  fontSize="25px"
                  fontWeight="600"
                  mb="1.25rem"
                  lineHeight="1"
                >
                  Corporate Office
                </Typography>
                <Typography py="0.3rem">Planet Ornate</Typography>
                <Typography py="0.3rem">
                  H#199(1st Floor), R#01,Mohakhali New DOHS
                </Typography>
                <Typography py="0.3rem">Dhaka 1206, Bangladesh.</Typography>
                <Typography py="0.3rem" mb="1rem">
                  Email: nobarunbd@gmail.com
                  <br />
                  Phone: +8801711 998626
                </Typography>
              </Grid>

              <Grid item lg={5} md={6} sm={6} xs={12}>
                <Typography
                  fontSize="25px"
                  fontWeight="600"
                  mb="1.25rem"
                  lineHeight="1"
                >
                  Recent Blog Post
                </Typography>

                <div>
                  {[1, 2, 3].map((blog) => (
                    <Link href="/" key={blog}>
                      <StyledLink style={{ color: '#fff' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Atque molestiae officiis quas. Commodi, dolor
                        minus.
                      </StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Paragraph mb="1.25rem" textAlign="justify">
                  <strong>NOBARUN INTERNATIONAL</strong> is leading supplier of
                  Digital Safety & Security Products, Supermarket Equipments,
                  Slaughterhouse Equipments & Commercial Kitchen Equipments in
                  Bangladesh.
                </Paragraph>
                <FlexBox className="flex" mx="-5px">
                  {iconList.map((item) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={item.iconName}
                    >
                      <Box
                        m="5px"
                        size="small"
                        p="10px"
                        bg="rgba(0,0,0,0.36)"
                        borderRadius="50%"
                      >
                        <Icon size="12px" defaultcolor="auto">
                          {item.iconName}
                        </Icon>
                      </Box>
                    </a>
                  ))}
                </FlexBox>
                <Typography py="0.8rem" fontWeight="bold">
                  Copyright @Nobarun International (2017-2021)
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

const iconList = [
  {
    iconName: 'facebook',
    url: 'hhttps://www.facebook.com/nobaruninternational',
  },
  { iconName: 'twitter', url: 'https://twitter.com/nobarunbd' },
  {
    iconName: 'youtube',
    url: '/',
  },
  { iconName: 'google', url: '/' },
  { iconName: 'instagram', url: '/' },
];

export default Footer;
