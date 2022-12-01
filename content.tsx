import { IconType } from "react-icons/lib";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Text } from "@chakra-ui/react";

const technologies = {
  chrome: {
    name: "Chrome API",
    src: "/tech/chrome.png",
  },
  vercel: {
    name: "Vercel",
    src: "/tech/vercel.png",
  },
  pptr: {
    name: "Puppeteer",
    src: "/tech/pptr.png",
  },
  js: {
    name: "ECMAScript",
    src: "/tech/js.png",
  },
  node: {
    name: "node.js",
    src: "/tech/js.png",
  },
  express: {
    name: "Express.js",
  },
  html: {
    name: "HTML5",
    src: "/tech/html.png",
  },
  css: {
    name: "CSS3",
    src: "/tech/css.png",
  },
  ubuntu: {
    name: "Ubunutu Server",
    src: "/tech/ubuntu.png",
  },
  web3: {
    name: "web3.js",
  },
  sharp: {
    name: "sharp.js (img manipulation)",
  },
  next: {
    name: "Next.js",
    src: "/tech/next.png",
  },
  chakra: {
    name: "Chakra UI",
    src: "/tech/chakra.png",
  },
  mongo: {
    name: "MongoDB",
    src: "/tech/mongo.png",
  },
  cron: {
    name: "Cron Jobs",
  },
  discord: {
    name: "discord.js",
  },
  stripe: {
    name: "Stripe Connect",
    src: "/tech/stripe.png",
  },
  maps: {
    name: "Google Maps API",
    src: "/tech/maps.png",
  },
  firebase: {
    name: "Firebase",
    src: "/tech/firebase.png",
  },
  sendgrid: {
    name: "SendGrid",
    src: "/tech/sendgrid.png",
  },
  spring: {
    name: "react-spring",
  },
  gesture: {
    name: "@use-gesture/react",
  },
  ts: {
    name: "TypeScript",
    src: "/tech/ts.png",
  },
  ethers: {
    name: "ethers.js",
  },
  wagmi: {
    name: "wagmi",
  },
  rainbow: {
    name: "RainbowKit",
    src: "/tech/rainbow.png",
  },
  charts: {
    name: "lightweight-charts",
  },
  three: {
    name: "three.js",
    src: "/tech/three.png",
  },
  graph: {
    name: "The Graph",
    src: "/tech/graph.png",
  },
  framer: {
    name: "Framer Motion",
    src: "/tech/framer.png",
  },
};

const {
  vercel,
  node,
  chrome,
  pptr,
  js,
  html,
  css,
  ubuntu,
  web3,
  sharp,
  next,
  chakra,
  mongo,
  cron,
  express,
  discord,
  stripe,
  maps,
  firebase,
  sendgrid,
  spring,
  gesture,
  ts,
  ethers,
  wagmi,
  rainbow,
  three,
  graph,
  framer,
  charts,
} = technologies;

interface Content {
  color: string;
  title: string;
  subTitle: string;
  desc: string;
  imgUrl: string;
  tags: { name: string; src?: string }[];
  links?: { name: string; url?: string }[];
}

export const content: Content[] = [
  {
    color: "#90cff1",
    title: "cpwp",
    subTitle: "Cool Pets Wallpaper Generator",
    desc: "Built for the Cool Cats/Pets NFT communities, this simple site allows you to create a wallpaper (for mobile or desktop) using any of the 20k Cool Pets. The Cool Pets Wallpaper Generator is open source and available on GitHub.",
    imgUrl: "/projects/cpwp.png",
    tags: [next, vercel, web3, chakra, node, sharp],
    links: [
      { name: "website", url: "https://cpwp.vercel.app/" },
      { name: "github", url: "https://github.com/JulienMartel/cpwp" },
    ],
  },

  {
    color: "#5d8e3b",
    title: "degen-bot",
    subTitle: "Discord Bot & Web Scraper",
    desc: "Contracted project that was a lot of fun. This discord bot does many things, like responds to slash commands and sends automated lists. It uses puppeteer to dynamically scrape short-related info about stocks from 4+ different sites. Many challenges needed to be solved to build this scraper, while accounting for speed and consistency.",
    imgUrl: "/projects/degen-bot.png",
    tags: [node, pptr, discord, ubuntu],
  },

  {
    color: "#666666",
    title: "Archillect Tab",
    subTitle: "Archillect Chrome Extension",
    desc: "I scraped Archillect's entire archive of 400k+ images and saved them to a db. There is a cron job running that scrapes the most recent images to keep it in sync. From there, I created an unofficial Archillect API, and a chrome extension to consume it. ",
    imgUrl: "/projects/archillect-tab.png",
    tags: [
      chrome,
      vercel,
      express,
      mongo,
      js,
      html,
      css,
      ubuntu,
      cron,
      pptr,
      node,
    ],
    links: [
      {
        name: "chrome web store",
        url: "https://chrome.google.com/webstore/detail/archillect-tab/lefgpjcahelbhhodfcgbiihdlcajlmma",
      },
      {
        name: "github",
        url: "https://github.com/JulienMartel/archillect-tab",
      },
    ],
  },

  {
    color: "#d6bcfa",
    title: "◌ spec",
    subTitle: "Ethereum NFT Analytics",
    desc: "An Ethereum NFT analytics platform powered by reservoir.tools. It was created during Buildspace’s “Nights & Weekends” program, and evolved a lot over the 6 weeks. It is my largest web3 project to-date.",
    imgUrl: "/projects/spec.png",
    tags: [
      ethers,
      wagmi,
      three,
      rainbow,
      graph,
      framer,
      charts,
      next,
      vercel,
      chakra,
    ],
    links: [
      { name: "website", url: "https://spec.science/" },
      { name: "github", url: "https://github.com/JulienMartel/spec" },
    ],
  },

  {
    color: "#FCDF5F",
    title: "Portfolio",
    subTitle: "This Site",
    desc: "A fun site thrown together to showcase some of my projects & skills. I’m currently looking for employment opportunities, reach out if you’re hiring/contracting!",
    imgUrl: "/projects/portfolio.png",
    tags: [ts, spring, gesture, chakra, next, vercel],
    links: [
      { name: "github", url: "https://github.com/JulienMartel/portfolio" },
    ],
  },

  {
    color: "#f098a7",
    title: "Vendo",
    subTitle: "Referral Markeplace",
    desc: "An startup that I co-founded. We built a referral marketplace, where users could earn money by referring others to products & services. Being a 2-sided marketplace using stripe connect, this is the largest and most complex project I've built.",
    imgUrl: "/projects/vendo.png",
    tags: [stripe, maps, firebase, sendgrid, vercel, next, js, chakra],
  },
];

export const socials: { name: string; icon: IconType; href: string }[] = [
  {
    name: "github",
    href: "https://github.com/JulienMartel",
    icon: FaGithub,
  },
  {
    name: "twitter",
    href: "https://twitter.com/cc4888",
    icon: FaTwitter,
  },
  {
    name: "email",
    href: "mailto:julienbmartel@gmail.com",
    icon: MdEmail,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/julienbmartel/",
    icon: FaLinkedin,
  },
];

export const skills = [
  "typescript",
  "next.js",
  "web3",
  "design",
  "automation",
  "microservices",
];

export const bio = (
  <>
    Julien <Text as={"i"}>— online name: ju/jubag —</Text> is a fullstack web
    engineer with diverse experience. Since completing his software development
    schooling, he’s had a chance to work in different work environments like
    startups, enterprise, and contracted work/projects. He is currently pursuing
    his interests in Ethereum and AI.
  </>
);
