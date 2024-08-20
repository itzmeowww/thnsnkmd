import type { Tool } from "./types/tools";
export type Project = {
  title: string;
  body: string;
  detail?: string;
  since?: Date;
  links: { href: string; title: string }[];
  slug: string;
  previews: Image[];
  comments: Comment[];
  tools: Tool[];
};

type Comment = {
  comment: string;
  author: string;
  date?: Date;
};

type Image = {
  url: string;
  width: number;
  height: number;
  alt?: string;
};

export const projects: Project[] = [
  {
    title: "Yondaaa",
    body: "iOS application for exchanging and giving away books.",
    detail:
      "This project is a part of creative programming class at TokyoTech.",
    since: new Date("August, 2024"),

    links: [
      {
        href: "https://apps.apple.com/jp/app/yondaaa/id6503911356?l=en-US",
        title: "App Store",
      },
      {
        href: "https://yondaaa.thnsnkmd.com",
        title: "Homepage",
      },
    ],
    previews: [
      {
        url: "/images/yondaaa/00.png",
        width: 1920,
        height: 1080,
      },
    ],
    slug: "yondaaa",
    tools: ["swiftui", "rails"],
    comments: [
      {
        comment: "I lost the source of frontend so I have remake it 😭.",
        author: "Thanasan Kumdee",
        date: new Date("Aug 19, 2024"),
      },
    ],
  },
  {
    title: "Snake: comparing search algos",
    body: "A simulation of snake using different search algorithms.",
    detail:
      "This project is a part of artificial intelligent class at TokyoTech. Five search algorithms are compared.",
    since: new Date("August, 2024"),

    links: [
      {
        href: "https://snake.thnsnkmd.com/",
        title: "Visit",
      },
    ],
    previews: [
      {
        url: "/images/snake-search/00.png",
        height: 1652,
        width: 2880,
      },
    ],
    slug: "snake-search",
    tools: ["nextjs", "tailwind", "shadcn/ui"],
    comments: [],
  },
  {
    title: "Napori Mobile Order",
    body: "An online food ordering service for Napori, a restaurant in Nishi-Koyama, Tokyo.",
    detail:
      "Customers can order by scanning the QR code on the table. The management dashboard handles inventory, order history, and statistical analysis.",
    since: new Date("December, 2023"),
    links: [
      {
        href: "https://youtu.be/uqc1EG9HlCw",
        title: "Demo Video",
      },
    ],
    slug: "napori",
    tools: ["nextjs", "tailwind", "prisma", "typescript"],

    previews: [
      {
        url: "/images/napori/01.png",
        width: 2880,
        height: 1658,
        alt: "Customer's page",
      },
      {
        url: "/images/napori/02.png",
        width: 2880,
        height: 1666,
        alt: "Admin's page - 1",
      },
      {
        url: "/images/napori/03.png",
        width: 2880,
        height: 1658,
        alt: "Admin's page - 2",
      },
      {
        url: "/images/napori/04.png",
        width: 2880,
        height: 1660,
        alt: "Admin's page - 3",
      },
    ],
    comments: [
      // {
      //   comment: "",
      //   author: "Napori (translated)",
      // },
      {
        comment:
          "I learned how to use the Notification API to send notifications to both browsers and phones.",
        author: "Thanasan Kumdee",
      },
      {
        comment:
          "Handling databases was interesting. I had to create a partially real-time admin page to optimize costs.",
        author: "Thanasan Kumdee",
      },
      {
        comment:
          "Creating statistics from the number of scanned QR codes, along with table numbers and timestamps, was one of my favorite parts.",
        author: "Thanasan Kumdee",
      },
      {
        comment:
          "Deciding the user flow for ordering and managing situations like when items are sold out was a valuable experience.",
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: "Memoiz: your second brain ",
    body: "Me and Nutchanon Taechasuk (Quatton) won the first prize from lablabai hackathon.",
    detail: "Generative AI + vector database + dairy.",
    since: new Date("April, 2023"),

    links: [
      {
        href: "https://lablab.ai/event/ai-startup-hackathon-episode-2/we-absolutely-have-no-idea/memoiz",
        title: "Visit",
      },
    ],
    previews: [],
    slug: "memoiz",
    tools: ["nextjs", "tailwind", "shadcn/ui"],
    comments: [],
  },
  {
    title: "fahprathan5939.com",
    body: "A website for a company with a restaurant and a cafe.",
    detail:
      "The website includes two subpages, one for the restaurant 'Yuan' and another for 'Etc. Cafe.' Both pages provide information such as locations, images, and menus.",
    since: new Date("March, 2023"),
    links: [
      {
        href: "https://fahprathan5939.com",
        title: "Visit Website",
      },
    ],
    slug: "fahprathan5939",
    tools: ["nextjs", "tailwind", "typescript"],
    previews: [
      {
        url: "/images/fahprathan5939/01.png",
        height: 1668,
        width: 2880,
      },
      {
        url: "/images/fahprathan5939/02.png",
        height: 1646,
        width: 2880,
      },
      {
        url: "/images/fahprathan5939/03.png",
        height: 1646,
        width: 2880,
      },
      {
        url: "/images/fahprathan5939/04.png",
        height: 1646,
        width: 2880,
      },
      {
        url: "/images/fahprathan5939/05.png",
        height: 1646,
        width: 2880,
      },
      {
        url: "/images/fahprathan5939/06.png",
        height: 1646,
        width: 2880,
      },
    ],
    comments: [
      {
        comment:
          "The website is easy to understand, with design and colors as requested. Revisions were made quickly.",
        // comment: "เว็บไซต์ดูเข้าใจง่าย ดีไซน์และสีสันตามต้องการ แก้ไขงานได้ไว",
        author: "Fahprathan 5939 (translated)",
      },

      {
        comment:
          "I learned about handling languages and sending email from form.",
        author: "Thanasan Kumdee",
      },
      {
        comment:
          "There are a lot of data for menu and locations, it was challenging to manage them and display them properly.",
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: "devvingedth.com",
    body: "A website for consulting service with individual consultation and support to students wishing to study abroad.",
    since: new Date("December, 2022"),
    links: [
      {
        href: "https://devvingedth.com",
        title: "Visit Website",
      },
    ],
    slug: "devvingedth",
    previews: [
      {
        url: "/images/devvingedth/01.jpg",
        height: 2391,
        width: 1170,
      },
      {
        url: "/images/devvingedth/02.jpg",
        height: 2399,
        width: 1170,
      },
      {
        url: "/images/devvingedth/03.jpg",
        height: 2396,
        width: 1170,
      },
      {
        url: "/images/devvingedth/04.jpg",
        height: 2392,
        width: 1170,
      },
    ],
    tools: ["nextjs", "tailwind", "typescript"],
    comments: [],
  },
  {
    title: "Comatresarch",
    body: "The official website of a Comat research group that introduces projects, publications, members, and more.",
    links: [],
    slug: "comatresearch",
    previews: [
      {
        url: "/images/comatresearch/01.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/02.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/03.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/04.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/05.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/06.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/07.jpg",
        height: 2409,
        width: 1170,
      },
      {
        url: "/images/comatresearch/08.jpg",
        height: 2409,
        width: 1170,
      },
    ],
    tools: ["nextjs", "tailwind", "typescript"],
    comments: [
      {
        comment: "This site is now unavailable and no longer maintained.",
        author: "Thanasan Kumdee",
        date: new Date("Aug 10, 2024"),
      },
    ],
  },
  {
    title: "Geacher: Find Your Tutor",
    body: "A platform that connects tutors in various subjects with students' needs.",
    detail:
      "By selecting checkboxes, you can find a tutor. You can also contact them directly from their information page",
    links: [
      {
        href: "https://geacher.thnsnkmd.com",
        title: "Visit Website",
      },
      {
        href: "https://github.com/itzmeowww/geacher",
        title: "GitHub",
      },
    ],
    previews: [
      { url: "/images/geacher/2.png", height: 800, width: 1280 },
      { url: "/images/geacher/1.jpg", height: 2296, width: 1080 },
      { url: "/images/geacher/4.jpg", height: 2296, width: 1080 },
      { url: "/images/geacher/5.jpg", height: 2296, width: 1080 },
      { url: "/images/geacher/6.jpg", height: 2296, width: 1080 },
    ],
    slug: "geacher",
    tools: ["nextjs", "tailwind"],

    comments: [
      {
        comment:
          "I learned how to create a static website using Next.js through this project.",
        author: "Thanasan Kumdee",
      },
      {
        comment:
          "I used Python to convert data from Google Forms into JSON format and to resize poster images.",
        author: "Thanasan Kumdee",
      },
      {
        comment:
          "The name was inspired by Geese and Teacher as our highschool, KVIS, has a lot of geese.",
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: "Thai Synonym Search Tool",
    body: "An online tool for finding synonyms in Thai language.",
    links: [
      {
        href: "https://thai-synonym.vercel.app",
        title: "Visit Website",
      },
    ],

    slug: "thai-synonym",
    previews: [
      {
        url: "/images/thai-synonym/00.png",
        width: 2880,
        height: 1640,
      },
      {
        url: "/images/thai-synonym/01.jpg",
        height: 2410,
        width: 1170,
      },
      {
        url: "/images/thai-synonym/02.jpg",
        height: 2410,
        width: 1170,
      },
      {
        url: "/images/thai-synonym/03.jpg",
        height: 2410,
        width: 1170,
      },
    ],

    tools: ["nextjs", "javascript"],
    comments: [],
  },

  {
    title: "Pincassociation",
    body: "Pincassociation's art pieces showcase",
    links: [
      {
        href: "https://pincassociation.com",
        title: "Visit Website",
      },
    ],

    slug: "pincassociation",
    previews: [
      {
        url: "/images/pincassociation/00.png",
        width: 2880,
        height: 1640,
      },
      {
        url: "/images/pincassociation/01.jpg",
        height: 2396,
        width: 1170,
      },
      {
        url: "/images/pincassociation/02.jpg",
        height: 2420,
        width: 1170,
      },
      {
        url: "/images/pincassociation/03.jpg",
        height: 2401,
        width: 1170,
      },
      {
        url: "/images/pincassociation/04.jpg",
        height: 2389,
        width: 1170,
      },
    ],
    tools: ["nextjs", "tailwind", "typescript"],
    comments: [
      {
        author: "Pinmook (pincassociation)",
        comment:
          "The Pincassociation website is filled with *adorable* and highly interactive features that visitors can enjoy while viewing my artwork. I personally find it enjoyable and delightful to explore.  （-＾▽＾-）",
      },
    ],
  },
  {
    title: "Beyond Tic Tac Toe",
    body: "Even more challenging tic tac toe game, with AI player.",
    links: [
      {
        href: "https://beyond-tic-tac-toe.vercel.app",
        title: "Play",
      },
      {
        href: "https://github.com/itzmeowww/beyond-tic-tac-toe",
        title: "GitHub",
      },
    ],
    previews: [
      {
        url: "/images/beyond-tic-tac-toe/screenshot_0.png",
        width: 2880,
        height: 1640,
      },
      {
        url: "/images/beyond-tic-tac-toe/screenshot_1.jpeg",
        width: 1170,
        height: 1995,
      },
      {
        url: "/images/beyond-tic-tac-toe/screenshot_2.jpeg",
        width: 1170,
        height: 1970,
      },
      {
        url: "/images/beyond-tic-tac-toe/screenshot_3.jpeg",
        width: 1170,
        height: 1993,
      },
    ],
    slug: "beyond-tic-tac-toe",
    tools: ["nextjs", "tailwind"],
    comments: [
      {
        author: "Thanasan Kumdee",
        comment:
          "There is a problem with API, I will fix that soon. Also, now that I have learned about AI, I will try to implement Q-Learning.",
        date: new Date("Aug 10, 2024"),
      },
    ],
  },

  {
    title: "Beta Task Toggler",
    body: "A Chrome extension for the competitive programming website beta.programming.in.th.",
    detail:
      "This extension allows users to search problems by status (solved, attempted, unsolved) and filter them by category and also random a problem. It also includes a dark mode feature.",
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
    previews: [
      {
        url: "/images/beta-task-toggler/preview.png",
        width: 1280,
        height: 800,
      },
      {
        url: "/images/beta-task-toggler/screenshot_1.png",
        width: 1280,
        height: 800,
      },
      {
        url: "/images/beta-task-toggler/screenshot_2.png",
        width: 1280,
        height: 800,
      },
      {
        url: "/images/beta-task-toggler/screenshot_3.png",
        width: 1280,
        height: 800,
      },
      {
        url: "/images/beta-task-toggler/screenshot_4.png",
        width: 1280,
        height: 800,
      },
    ],
    slug: "beta-task-toggler",
    tools: ["bootstrap", "javascript"],
    comments: [
      {
        comment:
          "It makes it easier to scroll and find questions you haven't completed when doing a lot of exercises. I've been using it for half a year now.",
        // "ทำให้เวลาทำโจทย์ไปเยอะๆ แล้วสามารถเลื่อนหาข้อที่ยังไม่ได้ทำได้ง่ายขึ้นครับ ใช้มาครึ่งปีแล้วว",
        author: "Nathawat Youngyim (translated)",
        date: new Date("Oct 2, 2022"),
      },
      {
        comment:
          "The website has moved from beta to the official version, including the features from this extension, making it no longer necessary.",
        author: "Thanasan Kumdee",
        date: new Date("Aug 10, 2024"),
      },
      {
        comment:
          "This extension uses classes and text to manage and identify different types of problems.",
        author: "Thanasan Kumdee",
      },
    ],
  },
  {
    title: "Menu Memo ",
    body: "A LINE chatbot for telling school's menu at my high school, KVIS.",
    detail: "It has been used since 2020, until now (2024) with over 800 friends.",
    since: new Date("July, 2020"),

    links: [
      {
        href: "https://github.com/itzmeowww/menu-memo",
        title: "GitHub",
      },
    ],
    previews: [{
      url:'/images/menumemo/01.jpeg',
      width: 1170,
      height: 2532,
    },
    {
      url:'/images/menumemo/02.jpeg',
      width: 1170,
      height: 2532,
    }],
    slug: "menu-memo",
    tools: ["javascript"],
    comments: [],
  },
];
