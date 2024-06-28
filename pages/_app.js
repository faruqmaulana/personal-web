import "../styles/globals.css";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";
import Script from "next/script";
import SocialSeo from "../utils/utils";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeStart", () =>
  NProgress.configure({ showSpinner: false })
);
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <SocialSeo />
      {/* <Script
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
      </Script> */}
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
