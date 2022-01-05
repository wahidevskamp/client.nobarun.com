import FlexBox from '@component/FlexBox';
import Footer from '@component/footer/Footer';
import Header from '@component/header/Header';
import Sticky from '@component/sticky/Sticky';
import Image from '@component/Image';
import useWindowSize from '@hook/useWindowSize';
import Link from 'next/link';
import React from 'react';
import StyledAppLayout from './AppLayoutStyle';

type Props = {
  title?: string;
  navbar?: React.ReactChild;
};

const AppLayout: React.FC<Props> = ({ children, navbar }) => {
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
      <Sticky fixedOn={0}>
        <div>
          <Header />
        </div>
      </Sticky>

      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? (
        <div className="section-after-sticky">{children}</div>
      ) : (
        children
      )}
      <Footer />
    </StyledAppLayout>
  );
};

export default AppLayout;
