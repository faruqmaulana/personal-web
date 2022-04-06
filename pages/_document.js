import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700&family=Montserrat:wght@300;400;700;800&family=Patrick+Hand&display=swap"
        rel="stylesheet"
      />
      <body className="font-lexend bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
