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

interface HomePage {
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
  headline: "Heyo, I'm Kevin — a senior product designer based in Denver",
  sub_headline:
    "In the last 10 years, I've specialized in web and iOS apps for clients ranging from startups to Fortune 100 companies, and everything in between. I'm currently working with the dope folks at Heyo.",
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

const contactPage = {
  email: "phil.tranquyet@gmail.com",
  message: "Send me a message, I will get back to you within 24 hours",
  title: "Contact me",
};

const aboutPage = {
  brief: "I am that I am",
  paragraph: "",
};

export { homePage, projects, contactPage, aboutPage };
