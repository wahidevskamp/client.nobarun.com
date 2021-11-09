import Footer from '@component/footer/Footer';
import Header from '@component/header/Header';
import Head from 'next/head';
import React from 'react';
import StyledProductLayout from './AppLayoutStyle';

type Props = {
  title?: string;
  navbar?: React.ReactChild;
};

const ProductLayout: React.FC<Props> = ({
  children,
  navbar,
  title = 'Nobarun International | Get all the equipment with a hassle-free experience',
}) => (
  <StyledProductLayout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
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

export default ProductLayout;
