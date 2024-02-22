import type { Tool } from "./types/tools";
export type Project = {
  title: string;
  body: string;
  detail?: string;
  links: { href: string; title: string }[];
  slug: string;
  img: string;
  preview: string[];
  tools: Tool[];
};

export const projects: Project[] = [
  {
    title: "Napori Mobile Order Service",
    body: "An easy-to-use ordering app for a shop name Napori located in Nishi-Koyama.",
    detail:
      "Orders can be placed by scanning the QR code on the table. The management dashboard allows for inventory management, order history, and statistical analysis. (The images below are mock data fo demo purpose)",
    links: [
      {
        href: "https://youtu.be/uqc1EG9HlCw",
        title: "Demo Video",
      },
    ],
    img: "/images/napori/icon.jpg",
    slug: "napori",
    tools: ["nextjs", "tailwind", "prisma", "typescript"],
    preview: [
      "/images/napori/01.jpg",
      "/images/napori/02.jpg",
      "/images/napori/03.jpg",
      "/images/napori/04.jpg",
      "/images/napori/05.jpg",
    ],
  },
  {
    title: "Fahprathan5939 Website",
    body: "A website for restaurants and cafes that includes detailed menus for food and drinks.",
    links: [
      {
        href: "https://fahprathan5939.com",
        title: "Fahprathan5939 Website",
      },
    ],
    img: "/images/fahprathan5939/01.jpg",
    slug: "fahprathan5939",
    tools: ["nextjs", "tailwind", "typescript"],
    preview: [
      "/images/fahprathan5939/01.jpg",
      "/images/fahprathan5939/02.jpg",
      "/images/fahprathan5939/03.jpg",
      "/images/fahprathan5939/04.jpg",
      "/images/fahprathan5939/05.jpg",
    ],
  },
  {
    title: "Devvingedth, Consultation Service",
    body: "A website for providing individual consultation and support to students wishing to study abroad.",
    links: [
      {
        href: "https://devvingedth.com",
        title: "Devvingedth Website",
      },
    ],

    img: "/images/devvingedth/01.jpg",
    slug: "devvingedth",
    preview: [
      "/images/devvingedth/01.jpg",
      "/images/devvingedth/02.jpg",
      "/images/devvingedth/03.jpg",
      "/images/devvingedth/04.jpg",
    ],
    tools: ["nextjs", "tailwind", "typescript"],
  },
  {
    title: "Comatresarch Website",
    body: "The official website of a Comat research group that introduces projects, publications, members, and more.",
    links: [
      {
        href: "https://comatresearch.com",
        title: "Comatresearch Website",
      },
    ],
    img: "/images/comatresearch/01.jpg",
    slug: "comatresearch",
    preview: [
      "/images/comatresearch/01.jpg",
      "/images/comatresearch/02.jpg",
      "/images/comatresearch/03.jpg",
      "/images/comatresearch/04.jpg",
      "/images/comatresearch/05.jpg",
      "/images/comatresearch/06.jpg",
      "/images/comatresearch/07.jpg",
      "/images/comatresearch/08.jpg",
    ],
    tools: ["nextjs", "tailwind", "typescript"],
  },
  {
    title: "Geacher, Find your tutor",
    body: "A platform that connects tutors covering various subjects with students' need.",
    links: [
      {
        href: "https://geacher.thnsnkmd.com",
        title: "Geacher Website",
      },
      {
        href: "https://github.com/itzmeowww/geacher",
        title: "GitHub",
      },
    ],
    img: "/images/geacher/icon.jpg",

    preview: [
      "/images/geacher/icon.jpg",
      "/images/geacher/4.jpg",
      "/images/geacher/5.jpg",
      "/images/geacher/6.jpg",
    ],
    slug: "geacher",
    tools: ["nextjs", "tailwind"],
  },
  {
    title: "Thai Synonym Search Tool",
    body: "An online tool for finding synonyms in Thai language.",
    links: [
      {
        href: "https://thai-synonym.vercel.app",
        title: "Thai Synonym Website",
      },
    ],
    img: "/images/thai-synonym/01.jpg",
    slug: "thai-synonym",
    preview: [
      "/images/thai-synonym/01.jpg",
      "/images/thai-synonym/02.jpg",
      "/images/thai-synonym/03.jpg",
    ],

    tools: ["nextjs", "javascript"],
  },
  {
    title: "Pincassociation",
    body: "Pincassociation's art pieces showcase",
    links: [
      {
        href: "https://pincassociation.com",
        title: "Website",
      },
    ],

    slug: "pincassociation",
    preview: [
      "/images/pincassociation/01.jpg",
      "/images/pincassociation/02.jpg",
      "/images/pincassociation/03.jpg",
      "/images/pincassociation/04.jpg",
    ],
    img: "/images/pincassociation/01.jpg",
    tools: ["nextjs", "tailwind", "typescript"],
  },
  {
    title: "Beyond Tic Tac Toe",
    body: "Even more challenging tic tac toe game, with AI player",
    links: [
      {
        href: "https://beyond-tic-tac-toe.vercel.app",
        title: "Beyond Tic Tac Toe",
      },
      {
        href: "https://github.com/itzmeowww/beyond-tic-tac-toe",
        title: "GitHub",
      },
    ],
    img: "/images/beyond-tic-tac-toe/icon.jpeg",
    preview: [
      "/images/beyond-tic-tac-toe/screenshot_1.jpeg",
      "/images/beyond-tic-tac-toe/screenshot_2.jpeg",
      "/images/beyond-tic-tac-toe/screenshot_3.jpeg",
    ],
    slug: "beyond-tic-tac-toe",
    tools: ["nextjs", "tailwind"],
  },

  {
    title: "Beta Task Toggler",
    body: "Chrome extension for beta.programming.in.th",
    links: [
      {
        href: "https://chrome.google.com/webstore/detail/beta-task-toggler/mgicmhhkcdbopogdbphnecplndijgfbn",
        title: "Chrome Webstore",
      },
      {
        href: "https://github.com/itzmeowww/beta-task-toggler",
        title: "GitHub",
      },
    ],
    img: "/images/beta-task-toggler/icon.jpg",
    preview: [
      "/images/beta-task-toggler/preview.png",
      "/images/beta-task-toggler/screenshot_1.png",
      "/images/beta-task-toggler/screenshot_2.png",
      "/images/beta-task-toggler/screenshot_3.png",
      "/images/beta-task-toggler/screenshot_4.png",
    ],
    slug: "beta-task-toggler",
    tools: ["bootstrap", "javascript"],
  },
];
