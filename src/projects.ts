import type { Tool } from "./types/tools";
export type Project = {
  title: string;
  body: string;
  links: { href: string; title: string }[];
  slug: string;
  img: string;
  preview: string[];
  tools: Tool[];
};

export const projects: Project[] = [
  {
    title: "Looooong Cat",
    body: "Create an extremely long cat",
    links: [
      { href: "https://looooongcat.vercel.app", title: "Looooong Cat" },
      {
        href: "https://github.com/itzmeowww/looooong-cat",
        title: "GitHub",
      },
    ],
    img: "/images/looooong-cat/icon.jpg",
    preview: [
      "/images/looooong-cat/icon.jpg",
      "/images/looooong-cat/screenshot_1.jpeg",
      "/images/looooong-cat/screenshot_2.jpeg",
    ],
    slug: "looooong-cat",
    tools: ["svelte", "tailwind"],
  },
  {
    title: "Beyond Tic Tac Toe",
    body: "Even more challenging tic tac toe game, empowered with AI player",
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
    title: "Geacher",
    body: " Find your tutors from KVIS",
    links: [
      { href: "https://geacher.thnsnkmd.com", title: "Geacher" },
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
