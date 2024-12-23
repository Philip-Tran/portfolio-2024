import { Github, Linkedin, PencilLine } from "lucide-vue-next";
import type { FunctionalComponent } from "vue";

enum TechStack {
  VueJS = "VueJS",
  Nuxt = "Nuxt",
  Pinia = "Pinia",
  Zod = "Zod",
  Vite = "Vite",
  TailwindCSS = "TailwindCSS",
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  NodeJS = "NodeJS",
  Express = "Express",
  PostgreSQL = "PostgreSQL",
  WordPress = "WordPress",
  Sass = "Sass",
  Bem = "BEM",
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
  keyFeatures: string[];
  description?: string;
  slug: string;
  isFeatured: boolean;
  linkLive?: string;
  repoLink?: string;
  stack: TechStack[];
  screenShots: {
    url: string;
    descriptionText: string;
    altText?: string;
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
      link: "https://www.linkedin.com/in/philip-tran-5b1166273/",
    },
    {
      name: "Blog",
      icon: PencilLine,
      link: "https://phil-tran-blog.vercel.app/",
    },
  ],
  status: "available",
};

const projects: Project[] = [
  {
    title: "Joy Read - Language Learning tool",
    isFeatured: true,
    slug: "joy-read",
    brief:
      "Accelerate reading experience when learning other language by creating book from the source you love with one click popup translation",
    keyFeatures: [
      "Create book by extract text from PDF file, any YouTube video or Website in any language",
      "One click Select text popup translation for single word and a sentence or prase",
      "Support every language on earth",
      "Non distracted reading mode",
    ],
    description:
      "I've been learning Spanish over the past months and I love learning languages in general. Reading is a must if you want to grow your lexicon and being able to produce in the language you are learning in a holistic way latter on. But reading in the language we are learning is not always smooth, some time the context doesn't help you to understand the word you don't know, but if you are reading the book that doesn't have words that you don't know It's not a good book, to use to learning language at least. So I decided to create my own solution and this app is it. It's still in early stage, but it does the job and I'm happy with it, know I'm using it to learn Spanish almost everyday",
    linkLive: "https://joyread-tranquyet.vercel.app/",
    repoLink: "https://github.com/Philip-Tran/joy-read",
    stack: [
      TechStack.TypeScript,
      TechStack.VueJS,
      TechStack.Pinia,
      TechStack.Express,
      TechStack.NodeJS,
      TechStack.Vite,
      TechStack.Zod,
      TechStack.JavaScript,
      TechStack.TailwindCSS,
    ],
    screenShots: [
      {
        url: "/images/project/blogcms-2.png",
        descriptionText: "Create book screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms.png",
        descriptionText: "Dashboard Screen",
        altText: "",
      },
    ],
  },
  {
    title: "Phil Tech Blog",
    brief: "",
    keyFeatures: [
      "Create book by extract text from PDF file, any YouTube video or Website in any language",
      "One click Select text popup translation for single word and a sentence or prase",
      "Support every language on earth",
      "Non distracted reading mode",
    ],
    description: "Blog app with CMS, rich text editor",
    isFeatured: true,
    slug: "tech-blog",
    linkLive: "",
    repoLink: "https://github.com/Philip-Tran/personal-tech-blog",
    stack: [TechStack.VueJS, TechStack.Nuxt, TechStack.TypeScript],
    screenShots: [
      {
        url: "",
        descriptionText: "",
        altText: "",
      },
    ],
  },
];

export interface stack {
  name: string;
}
const techStack: stack[] = [
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
    name: "JavaScript",
  },
  {
    name: "WordPress",
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
  paragraph:
    "<h1>This is what I want to say</h1> <p>This is a short introduction</p>",
};

export { homePage, projects, contactPage, aboutPage, techStack };
