import FlexBox from '@component/FlexBox';
import Footer from '@component/footer/Footer';
import Header from '@component/header/Header';
import Sticky from '@component/sticky/Sticky';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import StyledProductLayout from './AppLayoutStyle';

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
      <Sticky fixedOn={0}>
        <div>
          <Header />
          {active && (
            <FlexBox className="product__sticky-tab">
              <a
                href="#details"
                className="product__sticky-btn"
                style={{ background: '#dbeed3', color: '#489e26' }}
              >
                Details
              </a>

              <a href="#keypoints" className="product__sticky-btn">
                Key Points of Product
              </a>
              <a href="#questions" className="product__sticky-btn">
                Question & Answers
              </a>
              <a href="#reviews" className="product__sticky-btn">
                Reviews
              </a>
              <a
                href="#addQuote"
                className="product__sticky-btn"
                style={{ background: '#ec1c24', color: '#fff' }}
              >
                Get a Quote
              </a>
            </FlexBox>
          )}
        </div>
      </Sticky>
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
