import Container from '@component/Container';
import FlexBox from '@component/FlexBox';
import Footer from '@component/footer/Footer';
import GoToTop from '@component/goToTop/GoToTop';
import Header from '@component/header/Header';
import Image from '@component/Image';
import Navbar from '@component/navbar/Navbar';
import Sticky from '@component/sticky/Sticky';
import useWindowSize from '@hook/useWindowSize';
import Link from 'next/link';
import React from 'react';
import StyledAppLayout from './AppLayoutStyle';

type Props = {
  title?: string;
  navbar?: React.ReactChild;
};

const OtherLayout: React.FC<Props> = ({ children }) => {
  const width = useWindowSize();
  const isTablet = width < 900;

  return (
    <StyledAppLayout>
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
      <GoToTop showBelow={250} />
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
