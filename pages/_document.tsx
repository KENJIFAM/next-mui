import React from 'react';

import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const props = await super.getInitialProps(ctx);

    return {
      ...props,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />

          <meta name="application-name" content="StepOut" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
