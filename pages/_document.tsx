// next.js _document in typescript as a react functional component
// with head components for google adsense with 2479144310234386
// and google analytics with trackId UA-119155027-4
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
    <Html>
        <Head>
          <script
            data-ad-client="ca-pub-2479144310234386"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-452Q9YNE0N"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '452Q9YNE0N');`,
            }}
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