import HTML from "../public/skills/html.svg";
import CSS from "../public/skills/css.svg";
import JavaScript from "../public/skills/js.svg";
import PHP from "../public/skills/php.svg";
import CPlus from "../public/skills/c++.svg";
import Java from "../public/skills/java.svg";
import ReactLogo from "../public/skills/react.svg";
import Jquery from "../public/skills/jquery.svg";
import Cheerio from "../public/skills/cheerio.svg";
import NextJs from "../public/skills/nextjs.svg";
import TailwindCSS from "../public/skills/tailwind.svg";
import Bootstrap from "../public/skills/bootstrap.svg";
import StyledComponents from "../public/skills/sc.svg";
import MySQL from "../public/skills/mysql.svg";
import VisualStudioCode from "../public/skills/vsc.svg";
import Git from "../public/skills/git.svg";
import Github from "../public/skills/github.svg";
import Vercel from "../public/skills/vercel.svg";
import Netlify from "../public/skills/netlify.svg";
import Herokuapp from "../public/skills/heroku.svg";

// project
import api from "../public/projects/api.png";
import merpp from "../public/projects/merpp.png";
import covidAnxiety from "../public/projects/covid-anxiety.png";
import covidBed from "../public/projects/covid-bed.png";
import roseapp from "../public/projects/roseapp.png";
import waniEkspor from "../public/projects/wani-ekspor.png";
import kanalVirtual from "../public/projects/kanal-virtual.png";

export const stack = [
  { name: "HTML", img: <HTML /> },
  { name: "CSS", img: <CSS /> },
  { name: "JavaScript", img: <JavaScript /> },
  { name: "PHP", img: <PHP /> },
  { name: "C++", img: <CPlus /> },
  { name: "Java OOP", img: <Java /> },
  { name: "React", img: <ReactLogo /> },
  { name: "jQuery", img: <Jquery /> },
  { name: "Cheerio", img: <Cheerio /> },
  { name: "NextJs", img: <NextJs /> },
  { name: "Tailwind CSS", img: <TailwindCSS /> },
  { name: "Bootstrap", img: <Bootstrap /> },
  { name: "Styled Components", img: <StyledComponents /> },
  { name: "MySQL", img: <MySQL /> },
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
      id: 1,
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
      id: 2,
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
      id: 3,
      image: kanalVirtual,
      projectTitle: "Kanal Virtual",
      descProject:
        "A blog dedicated to writers so they can archive their writings.",
      githubLink: "https://github.com/faruqmaulana/merpp-beta",
      github: "GitHub",
      demoLink: "https://kanal-virtual.vercel.app/",
      demo: "Demo",
      responsive: "(Mobile phone only)",
      stack: [
        { name: "nextjs" },
        { name: "Strapi V3" },
        { name: "bootstrap 5" },
        { name: "styled-components" },
      ],
    },
    {
      id: 4,
      image: covidAnxiety,
      projectTitle: "Covid Anxiety",
      descProject:
        "A web application that provides information related to covid in Indonesia.",
      githubLink: "https://github.com/faruqmaulana/covid-sucks",
      github: "GitHub",
      demoLink: "https://covid-anxiety.herokuapp.com/",
      demo: "Demo",
      responsive: "(Responsive Web)",
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
      id: 5,
      image: covidBed,
      projectTitle: "Covid Bed Indo",
      descProject: "Web application to check hospital room availability.",
      githubLink: "https://github.com/faruqmaulana/covid-sucks",
      github: "GitHub",
      demoLink: "https://covid-bed-indo.herokuapp.com/",
      demo: "Demo",
      responsive: "(Responsive Web)",
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
      id: 6,
      image: waniEkspor,
      projectTitle: "Wani Ekspor",
      descProject: "Import export company landing page.",
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
      id: 7,
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