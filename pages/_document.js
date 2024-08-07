import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        <meta name="robots" content="noindex, nofollow" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700&family=Montserrat:wght@300;400;700;800&family=Patrick+Hand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-primary font-lexend">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
