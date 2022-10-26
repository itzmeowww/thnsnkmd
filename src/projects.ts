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
    body: "Create a very long cat",
    links: [
      { href: "https://looooongcat.vercel.app", title: "Looooong Cat" },
      {
        href: "https://github.com/itzmeowww/looooong-cat",
        title: "GitHub",
      },
    ],
    img: "/images/looooong-cat/icon.jpg",
    preview: [""],
    slug: "looooong-cat",
    tools: ["svelte", "tailwind"],
  },
  {
    title: "Geacher",
    body: "Website for finding tutors from KVIS",
    links: [
      { href: "https://geacher.thnsnkmd.com", title: "Geacher" },
      {
        href: "https://github.com/itzmeowww/geacher",
        title: "GitHub",
      },
    ],
    img: "/images/geacher/icon.jpg",
    preview: [""],
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
      "/images/beta-task-toggler/screenshot_1.jpg",
      "/images/beta-task-toggler/screenshot_2.jpg",
      "/images/beta-task-toggler/screenshot_3.jpg",
    ],
    slug: "beta-task-toggler",
    tools: ["bootstrap", "javascript"],
  },
];
