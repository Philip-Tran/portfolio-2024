import { Github, Linkedin, PencilLine } from "lucide-vue-next";
import type { Node } from "typescript";
import type { FunctionalComponent } from "vue";

enum TechStack {
  VueJS = "VueJS",
  Nuxt = "Nuxt",
  TypeScript = "TypeScript",
  NodeJS = "NodeJS",
  Express = "Express",
  PostgreSQL = "PostgreSQL",
}

export interface HomePage {
  image: {
    url: string;
    altText: string;
  };
  headline: string;
  sub_headline: string;
  social: {
    name: string;
    icon: FunctionalComponent;
    link: string;
  }[];
  status: "available" | "close";
}
export interface Project {
  title: string;
  brief: string;
  description: string;
  slug: string;
  isFeatured: boolean;
  linkLive: string;
  repoLink?: string;
  stack: TechStack[];
  screenShots: {
    url: string;
    altText: string;
  }[];
}

const homePage: HomePage = {
  image: {
    url: "/images/hero-image.avif",
    altText: "Phil Tran",
  },
  headline: "Hi, my name is Phil Tran — a detail-oriented web developer",
  sub_headline:
    "I'm dedicated to provide hight quality work with modern tech stack",
  social: [
    {
      name: "Git Hub",
      icon: Github,
      link: "https://trongquyet.com",
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      link: "",
    },
    {
      name: "Blog",
      icon: PencilLine,
      link: "",
    },
  ],
  status: "available",
};

const projects: Project[] = [
  {
    title: "Joy Read",
    brief: "",
    description: "Language learning platform",
    isFeatured: true,
    slug: "joy-read",
    linkLive: "",
    repoLink: "https://github.com/Philip-Tran/joy-read",
    stack: [
      TechStack.VueJS,
      TechStack.Express,
      TechStack.NodeJS,
      TechStack.Nuxt,
      TechStack.TypeScript,
    ],
    screenShots: [
      {
        url: "",
        altText: "",
      },
    ],
  },
  {
    title: "Joy Read rr34",
    brief: "",
    description: "Language learning platform",
    isFeatured: true,
    slug: "joy-read-2",
    linkLive: "",
    repoLink: "https://github.com/Philip-Tran/joy-read",
    stack: [
      TechStack.VueJS,
      TechStack.Express,
      TechStack.NodeJS,
      TechStack.Nuxt,
      TechStack.TypeScript,
    ],
    screenShots: [
      {
        url: "",
        altText: "",
      },
    ],
  },
];

const techStack = [
  {
    name: "VueJs",
  },
  {
    name: "Nuxt",
  },
  {
    name: "TypeScript",
  },
  {
    name: "TailwindCSS",
  },
  {
    name: "NodeJs",
  },
  {
    name: "Express",
  },
];

const contactPage = {
  email: "phil.tranquyet@gmail.com",
  message: "Send me a message, I will get back to you within 24 hours",
  title: "Contact me",
};

const aboutPage = {
  brief: "I am that I am",
  paragraph: "",
};

export { homePage, projects, contactPage, aboutPage, techStack };
