type Link = {
  title: string;
  to: string;
};

export type Project = {
  alias: string;
  imgSrc: string;
  alt: string;
  url: string;
  name: string;
  img: string[];
  links: Link[];
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  date: string;
};
