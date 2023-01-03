import type { Tool } from "../types/tools";

const name: {
  [key in Tool]: {
    title: string;
    icon: string;
  };
} = {
  javascript: {
    title: "JavaScript",
    icon: "simple-icons:javascript",
  },
  bootstrap: {
    title: "Bootstrap",
    icon: "simple-icons:bootstrap",
  },
  svelte: {
    title: "Svelte",
    icon: "simple-icons:svelte",
  },
  tailwind: {
    title: "TailwindCss",
    icon: "simple-icons:tailwindcss",
  },
  nextjs: {
    title: "NextJs",
    icon: "simple-icons:nextdotjs",
  },
};

export const ToolTag = ({ tool }: { tool: Tool }) =>
  <div
    className="text-black text-sm flex gap-1 items-center bg-neutral-100  transition-colors px-2 py-0.5 rounded-md"
  >
    {name[tool].title}
  </div>
