import * as React from 'react';
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import ServerStyleSheets from '@material-ui/styles/ServerStyleSheets';
import theme from '../src/styles/theme';

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />)
      });

    const initialProps = await NextDocument.getInitialProps(ctx);
    
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {sheets.getStyleElement()}
        </React.Fragment>
      ]
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="shortcut icon" href="static/logo/favicon.ico" />
          <meta name="application-name" content="StepOut" />
          <meta name="msapplication-TileColor" content={theme.palette.primary.main} />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Monoton&display=swap"
            rel="stylesheet"
          />
          {/* <link href="https://fonts.googleapis.com/css?family=Nunito:600,600i,700,800,900&display=swap" rel="stylesheet" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
