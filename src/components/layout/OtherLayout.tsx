import FlexBox from '@component/FlexBox';
import Footer from '@component/footer/Footer';
import Header from '@component/header/Header';
import Sticky from '@component/sticky/Sticky';
import Image from '@component/Image';
import useWindowSize from '@hook/useWindowSize';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import StyledAppLayout from './AppLayoutStyle';
import Navbar from '@component/navbar/Navbar';
import Container from '@component/Container';

type Props = {
  title?: string;
  navbar?: React.ReactChild;
};

const OtherLayout: React.FC<Props> = ({
  children,
  navbar,
  title = 'Nobarun International | Get all the equipment with a hassle-free experience',
}) => {
  const width = useWindowSize();
  const isTablet = width < 900;

  return (
    <StyledAppLayout>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isTablet && (
        <FlexBox
          justifyContent="center"
          alignItems="center"
          mr="1rem"
          bg="#fff"
        >
          <Link href="/">
            <a>
              <Image src="/assets/images/logo.png" alt="logo" />
            </a>
          </Link>
        </FlexBox>
      )}
      <Sticky fixedOn={0}>
        <div>
          <Header />
        </div>
      </Sticky>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </StyledAppLayout>
  );
};

export default OtherLayout;
