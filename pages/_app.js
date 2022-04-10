import "../styles/globals.css";

import "nprogress/nprogress.css"; //styles of nprogress//Binding events.
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import Script from "next/script";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeStart", () =>
  NProgress.configure({ showSpinner: false })
);
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="ga-tag"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-917GNRTVQH`}
      />
      <Script id="ga-id" strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-917GNRTVQH');
        `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
