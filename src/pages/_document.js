import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/logo.png" />
          <meta
            property="og:title"
            content="FruitFlix"
          />
          <meta property="og:type" content="eCommerce Website" />
          <meta
            property="og:description"
            content="FruitFlix"
          />
          <meta
            property="og:url"
            content="https://kachabazar-store.vercel.app/"
          />
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
