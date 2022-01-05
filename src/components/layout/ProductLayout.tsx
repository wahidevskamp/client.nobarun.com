import FlexBox from '@component/FlexBox';
import Footer from '@component/footer/Footer';
import Header from '@component/header/Header';
import Sticky from '@component/sticky/Sticky';
import Image from '@component/Image';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import StyledProductLayout from './AppLayoutStyle';
import useWindowSize from '@hook/useWindowSize';

type Props = {
  title?: string;
  navbar?: React.ReactChild;
};

const ProductLayout: React.FC<Props> = ({
  children,
  navbar,
  title = 'Nobarun International || The Ultimate Name of Trust',
}) => {
  const [active, setActive] = useState(false);
  const [section, setSection] = useState('#details');

  const width = useWindowSize();
  const isTablet = width < 900;

  useEffect(() => {
    const handleStickyBar = () => {
      if (window.scrollY >= 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', handleStickyBar);
  }, []);

  return (
    <StyledProductLayout>
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
      <Header />
      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? (
        <div className="section-after-sticky">{children}</div>
      ) : (
        children
      )}
      <Footer />
    </StyledProductLayout>
  );
};

export default ProductLayout;
