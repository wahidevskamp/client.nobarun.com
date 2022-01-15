import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import React, { Fragment, useEffect } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ThemeProvider } from 'styled-components';
import '../styles/main.scss';
import { GlobalStyles } from '../utils/globalStyles';
import { theme } from '../utils/theme';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

NProgress.configure({ showSpinner: false });

const App = ({ Component, pageProps }: any) => {
  let Layout = Component.layout || Fragment;
  useEffect(() => {
    document.addEventListener('contextmenu', (event) => event.preventDefault());
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Corporation',
              name: 'Nobarun Bangladesh',
              url: 'https://www.nobarunbd.com/',
              logo: 'https://www.nobarunbd.com/assets/images/logo.svg',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '01711998626',
                contactType: 'customer service',
                areaServed: 'BD',
                availableLanguage: 'Bengali',
              },
              sameAs: [
                'https://www.facebook.com/nobaruninternational',
                'https://twitter.com/nobarunbd',
                'https://www.youtube.com/c/NobarunInternational/videos',
                'https://www.pinterest.com/nobaruninternational/',
              ],
            }),
          }}
        />

        {/* <script
          async
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-SGG7GE7HZC"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SGG7GE7HZC');
          `,
          }}
        ></script> */}
      </Head>
      <GlobalStyles />
      <Layout
        count={pageProps?.count || 0}
        categories={pageProps?.categories || []}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
