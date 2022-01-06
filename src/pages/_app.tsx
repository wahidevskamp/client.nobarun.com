import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import React, { Fragment } from 'react';
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

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
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
        ></script>
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
