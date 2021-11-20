import FlexBox from '@component/FlexBox';
import Footer from '@component/footer/Footer';
import Header from '@component/header/Header';
import Sticky from '@component/sticky/Sticky';
import Image from '@component/Image';

import Head from 'next/head';
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
  title = 'Nobarun International | Get all the equipment with a hassle-free experience',
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
