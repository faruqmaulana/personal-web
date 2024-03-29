import CSS from "../public/skills/css.svg";
import PHP from "../public/skills/php.svg";
import Git from "../public/skills/git.svg";
import HTML from "../public/skills/html.svg";
import CPlus from "../public/skills/c++.svg";
import Java from "../public/skills/java.svg";
import MySQL from "../public/skills/mysql.svg";
import JavaScript from "../public/skills/js.svg";
import Jquery from "../public/skills/jquery.svg";
import NextJs from "../public/skills/nextjs.svg";
import Prisma from "../public/skills/prisma.svg";
import Github from "../public/skills/github.svg";
import Vercel from "../public/skills/vercel.svg";
import ReactLogo from "../public/skills/react.svg";
import Cheerio from "../public/skills/cheerio.svg";
import Laravel from "../public/skills/laravel.svg";
import Netlify from "../public/skills/netlify.svg";
import Herokuapp from "../public/skills/heroku.svg";
import Bootstrap from "../public/skills/bootstrap.svg";
import StyledComponents from "../public/skills/sc.svg";
import TailwindCSS from "../public/skills/tailwind.svg";
import VisualStudioCode from "../public/skills/vsc.svg";
import Typescript from "../public/skills/typescript.svg";

// project
import api from "../public/projects/api.png";
import merpp from "../public/projects/merpp.png";
import flight from "../public/projects/flight.png";
import roseapp from "../public/projects/roseapp.png";
import covidBed from "../public/projects/covid-bed.png";
import inventory from "../public/projects/inventory.png";
import waniEkspor from "../public/projects/wani-ekspor.png";
import weatherApp from "../public/projects/weather-app.jpg"
import kanalVirtual from "../public/projects/kanal-virtual.png";
import covidAnxiety from "../public/projects/covid-anxiety.png";
import kanalVirtualV2 from "../public/projects/kanalvirtual-v2.jpg";

import { SocialProfileJsonLd } from "next-seo";
// seo
const SocialSeo = () => (
  <SocialProfileJsonLd
    type="Person"
    name="Faruq Maulana"
    url="https://fm-space.vercel.app"
    sameAs={[
      "http://www.facebook.com/100006480809914",
      "http://instagram.com/faruq.maulanaa/",
    ]}
  />
);

export default SocialSeo;

export const BASE_URL = "https://fm-space.vercel.app";

export const stack = [
  { name: "Typescript", img: <Typescript /> },
  { name: "JavaScript", img: <JavaScript /> },
  { name: "HTML", img: <HTML /> },
  { name: "CSS", img: <CSS /> },
  { name: "PHP", img: <PHP /> },
  // { name: "C++", img: <CPlus /> },
  // { name: "Java OOP", img: <Java /> },
  { name: "React", img: <ReactLogo /> },
  { name: "jQuery", img: <Jquery /> },
  { name: "Cheerio", img: <Cheerio /> },
  { name: "NextJs", img: <NextJs /> },
  { name: "Laravel", img: <Laravel /> },
  { name: "Tailwind CSS", img: <TailwindCSS /> },
  { name: "Bootstrap", img: <Bootstrap /> },
  { name: "Styled Components", img: <StyledComponents /> },
  { name: "MySQL", img: <MySQL /> },
  { name: "Prisma ORM", img: <Prisma /> },
  { name: "Git", img: <Git /> },
  { name: "Visual Studio Code", img: <VisualStudioCode /> },
  { name: "Github", img: <Github /> },
  { name: "Vercel", img: <Vercel /> },
  { name: "Netlify", img: <Netlify /> },
  { name: "Herokuapp", img: <Herokuapp /> },
];

export const projectsList = {
  projects: [
    {
      image: kanalVirtualV2,
      projectTitle: "KaVir (Kanal Virtual)",
      descProject:
        "A modern web application that I dedicate to writers. so they can archive their writings.",
      githubLink: "https://github.com/faruqmaulana/kanal-virtual-v2",
      github: "GitHub",
      demoLink: "https://www.kanalvirtual.com/",
      demo: "Demo",
      responsive: "(Mobile phone only)",
      stack: [
        { name: "typescript" },
        { name: "nextjs" },
        { name: "datocms" },
        { name: "webhooks" },
        { name: "graphql" },
        { name: "google cloud platform" },
        { name: "useSWR" },
        { name: "tailwindcss & sass" },
        { name: "jest & rtl" },
      ],
    },
    {
      image: weatherApp,
      projectTitle: "Weather App",
      descProject:
        "A web application for weather forecasting.",
      githubLink: "https://github.com/faruqmaulana/weather-app",
      github: "GitHub",
      demoLink: "https://weathers-cast.vercel.app/",
      demo: "Demo",
      responsive: "(Desktop only)",
      stack: [
        { name: "typescript" },
        { name: "nextjs" },
        { name: "react context API" },
        { name: "rest API" },
        { name: "tailwindcss" },
      ],
    },
    {
      image: inventory,
      projectTitle: "Inventory App",
      descProject:
        "Web application for stock management. Consists of two sides of the user, admin and employees.",
      githubLink: null,
      github: "GitHub",
      demoLink: "https://your-inventory.vercel.app",
      demo: "Demo",
      responsive: "(Responsive Web)",
      stack: [
        { name: "nextjs" },
        { name: "prisma ORM" },
        { name: "postgresql" },
        { name: "nextauth" },
        { name: "restfull API" },
        { name: "material ui" },
        { name: "swift alert" },
      ],
    },
    {
      image: flight,
      projectTitle: "Tiketku",
      descProject:
        "Web application for booking airline tickets.",
      githubLink: "https://github.com/faruqmaulana/project_uas/",
      github: "GitHub",
      demoLink: "https://your-ticket.herokuapp.com",
      demo: "Demo",
      responsive: "(Desktop only)",
      status: "unavailabe",
      stack: [
        { name: "laravel 9" },
        { name: "artisan" },
        { name: "faker" },
        { name: "model" },
      ],
    },
    {
      image: api,
      projectTitle: "Jakarta Post API",
      descProject:
        "A public API resulting from a scrape of the Jakarta Post news media website.",
      githubLink: "https://github.com/faruqmaulana/JAKARTA-POST-API",
      github: "GitHub",
      demoLink: "https://jakpost.vercel.app/api",
      demo: "Demo",
      responsive: null,
      stack: [
        { name: "nextjs" },
        { name: "axios" },
        { name: "cheerio" },
        { name: "puppeteer" },
        { name: "turndownjs" },
        { name: "chrome-aws-lambda" },
      ],
    },
    {
      image: merpp,
      projectTitle: "Mérpp",
      descProject:
        "A website application that makes it easier to make learning implementation plans.",
      githubLink: null,
      github: "GitHub",
      demoLink: "https://merpp-beta.vercel.app/",
      demo: "Demo",
      responsive: "(Desktop only)",
      stack: [
        { name: "html" },
        { name: "css" },
        { name: "javascript" },
        { name: "html2pdf" },
        { name: "bootstrap" },
      ],
    },
    {
      image: kanalVirtual,
      projectTitle: "KaVir (Kanal Virtual) - OLD",
      descProject:
        "A blog dedicated to writers so they can archive their writings.",
      githubLink: "https://github.com/faruqmaulana/kanal-virtual",
      github: "GitHub",
      demoLink: "https://kanal-virtual.vercel.app/",
      demo: "Demo",
      responsive: "(Mobile phone only)",
      status: "unavailabe",
      stack: [
        { name: "nextjs" },
        { name: "strapi V3" },
        { name: "bootstrap 5" },
        { name: "styled-components" },
      ],
    },
    {
      image: covidAnxiety,
      projectTitle: "Covid Anxiety",
      descProject:
        "A web application that provides information related to covid in Indonesia.",
      githubLink: "https://github.com/faruqmaulana/covid-sucks",
      github: "GitHub",
      demoLink: "https://covid-anxiety.herokuapp.com/",
      demo: "Demo",
      responsive: "(Responsive Web)",
      status: "unavailabe",
      stack: [
        { name: "html" },
        { name: "css" },
        { name: "javascript" },
        { name: "php" },
        { name: "jquery" },
        { name: "bootstrap" },
      ],
    },
    {
      image: covidBed,
      projectTitle: "Covid Bed Indo",
      descProject: "Web application to check hospital room availability.",
      githubLink: "https://github.com/faruqmaulana/covid-sucks",
      github: "GitHub",
      demoLink: "https://covid-bed-indo.herokuapp.com/",
      demo: "Demo",
      responsive: "(Responsive Web)",
      status: "unavailabe",
      stack: [
        { name: "html" },
        { name: "css" },
        { name: "javascript" },
        { name: "php" },
        { name: "jquery" },
        { name: "bootstrap" },
      ],
    },
    {
      image: waniEkspor,
      projectTitle: "Wani Fresh",
      descProject:
        "Export import company landing page. Build using bootstrap template",
      githubLink: "https://github.com/faruqmaulana/wani-ekspor",
      github: "GitHub",
      demoLink: "https://wanifresh.com/",
      demo: "Demo",
      responsive: "(Responsive Web)",
      stack: [
        { name: "html" },
        { name: "css" },
        { name: "javascript" },
        { name: "bootstrap-templates" },
      ],
    },
    {
      image: roseapp,
      projectTitle: "Your Acivity",
      descProject: "Todo List app with rose theme 🌹",
      githubLink: "https://github.com/faruqmaulana/rose-theme-application",
      github: "GitHub",
      demoLink: "https://your-activity.vercel.app/",
      demo: "Demo",
      responsive: "(Responsive Web)",
      stack: [
        { name: "nextjs" },
        { name: "tailwindcss" },
        { name: "headless-ui" },
      ],
    },
  ],
};
