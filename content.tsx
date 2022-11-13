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
};

const { vercel, node, chrome, pptr, js, html, css, ubuntu, web3, sharp } =
  technologies;

interface Content {
  id: number;
  color: string;
  title: string;
  desc: string;
  imgUrl: string;
  tags: { name: string; src?: string }[];
  links?: { name: string; url?: string }[];
}

export const content: Content[] = [
  {
    id: 0,
    color: "#90cff1",
    title: "Cool Pets Wallpaper Generator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "/projects/cpwp.png",
    tags: [vercel, node, web3, sharp], // todo
    links: [
      { name: "website", url: "https://cpwp.vercel.app/" },
      { name: "github", url: "#" },
    ],
  },
  {
    id: 1,
    color: "#5d8e3b",
    title: "degen-bot (Discord Bot & Web Scraper)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "/projects/degen-bot.png", // todo
    tags: [chrome, vercel, pptr, js, html, css, ubuntu], // todo
    links: [
      { name: "github", url: "#" },
      { name: "chrome web store", url: "#" },
    ],
  },
  {
    id: 2,
    color: "#0F0F0F",
    title: "Archillect Tab Chrome Extension",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "/projects/archillect-tab.png", // todo
    tags: [chrome, vercel, pptr, js, html, css, ubuntu], // todo
    links: [
      // todo
      {
        name: "chrome web store",
        url: "https://chrome.google.com/webstore/detail/archillect-tab/lefgpjcahelbhhodfcgbiihdlcajlmma",
      },
      { name: "github", url: "#" },
    ],
  },
  {
    id: 3,
    color: "#FFE95C", // todo
    title: "ZooTools",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "/projects/zootools.png", // todo
    tags: [chrome, vercel, pptr, js, html, css, ubuntu], // todo
  },
  {
    id: 4,
    color: "#CA8ECD", // todo
    title: "Spec", // todo
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "/projects/archillect-tab.png", // todo
    tags: [chrome, vercel, pptr, js, html, css, ubuntu], // todo
    links: [
      // todo
      { name: "github", url: "#" },
      { name: "chrome web store", url: "#" },
    ],
  },
  {
    id: 5,
    color: "#FF9999", // todo
    title: "Vendo", // todo
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "/projects/archillect-tab.png", // todo
    tags: [chrome, vercel, pptr, js, html, css, ubuntu], // todo
    links: [
      // todo
      { name: "github", url: "#" },
      { name: "chrome web store", url: "#" },
    ],
  },
];
