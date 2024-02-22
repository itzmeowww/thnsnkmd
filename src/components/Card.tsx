

export const Card = ({ title, body, href, blog, img }: {
  title: string;
  body: string;
  href: string;
  img: string;
  blog?: string;
}) => <a
  href={href}
  className="border border-neutral-500 w-full h-32 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-xl flex justify-start items-center overflow-hidden p-4 gap-4"
>
    <div className="w-24 h-24 bg-neutral-400 rounded-md overflow-hidden">
      {img && img != "" ? <img src={img} alt="" className="my-0" /> : <div />}
    </div>
    <div className="flex-1 h-24 flex-col grid grid-rows-4 gap-1">
      <p className="text-md font-medium text-neutral-100 row-span-1 truncate">
        {title}
      </p>
      <p className="text-sm font-thin text-neutral-400 row-span-3 h-full overflow-auto">{body}</p>
    </div>
  </a>
