const title = "Faruq Maulana";
const description = `Hi! I'm a software developer. I love code in NextJs and make beautiful websites.`;
const siteUrl = "https://fm-space.vercel.app";

const SEO = {
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,
  description,
  canonical: siteUrl,
  openGraph: {
    type: "website",
    site_name: title,
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@faruqmaulanaa",
    site: "@faruqmaulanaa",
  },
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "apple-mobile-web-app-title", content: "Faruq Maulana" },
    { name: "application-name", content: "Faruq Maulana" },
    {
      name: "google-site-verification",
      content: "Fj76DuvElYG39on2fqf6GViLuMNC0jmyxJbHA4M6cMg",
    },
    { name: "msapplication-TileColor", content: "#da532c" },
    { name: "msapplication-config", content: "/favicon/browserconfig.xml" },
    { name: "theme-color", content: "#2a61cc" },
  ],
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    },
  ],
};

export default SEO;
