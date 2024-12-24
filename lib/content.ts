import { Github, Linkedin, PencilLine } from "lucide-vue-next";
import type { FunctionalComponent } from "vue";

enum TechStack {
  VueJS = "VueJS",
  Nuxt = "Nuxt",
  Pinia = "Pinia",
  Zod = "Zod",
  Vite = "Vite",
  TailwindCSS = "Tailwind CSS",
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  Python = "Python",
  NodeJS = "NodeJS",
  Express = "Express",
  PostgreSQL = "PostgreSQL",
  MongoDB = "MongoDB",
  PrismaORM = "Prisma ORM",
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
  featureImage: string;
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
    featureImage: "/images/project/blogcms-2.png",
    slug: "joy-read",
    brief:
      "Accelerate reading experience when learning other language by creating book from the source you love with one click popup translation",
    keyFeatures: [
      "Create book by extract text from PDF file, any YouTube video or Website in any language",
      "One click Select text popup translation for single word and a sentence or prase",
      "Support every language on earth",
      "Non distracted reading mode",
      "Authentication and Authorization",
    ],
    description:
      "I've been learning Spanish over the past months and I love learning languages in general. Reading is a must if you want to grow your lexicon and being able to produce in the language you are learning in a holistic way latter on. But reading in the language we are learning is not always smooth, some time the context doesn't help you to understand the word you don't know, but if you are reading the book that doesn't have words that you don't know It's not a good book, to use to learning language at least. So I decided to create my own solution and this app is it. It's still in early stage, but it does the job and I'm happy with it, know I'm using it to learn Spanish almost everyday",
    linkLive: "https://joyread-tranquyet.vercel.app/",
    repoLink: "https://github.com/Philip-Tran/joy-read",
    stack: [
      TechStack.VueJS,
      TechStack.TypeScript,
      TechStack.JavaScript,
      TechStack.Pinia,
      TechStack.NodeJS,
      TechStack.Express,
      TechStack.Vite,
      TechStack.Zod,
      TechStack.TailwindCSS,
      TechStack.Python,
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
    title: "Phil Blog - Blogging App with full CMS for minimalistic blogger",
    brief:
      "Blogging platform with clean interface, full functionality text editor, just share your words",
    featureImage: "/images/project/blogcms-2.png",
    keyFeatures: [
      "Create, edit post with clean interface",
      "Save post as Draft of Published",
      "Easy to use dashboard",
      "Simple Authentication and Authorization system optimized for personal blog",
    ],
    description: "Blog app with CMS, rich text editor",
    isFeatured: true,
    slug: "tech-blog",
    linkLive: "https://phil-tran-blog.vercel.app/",
    repoLink: "https://github.com/Philip-Tran/personal-tech-blog",
    stack: [
      TechStack.VueJS,
      TechStack.Nuxt,
      TechStack.TypeScript,
      TechStack.JavaScript,
      TechStack.TailwindCSS,
      TechStack.PostgreSQL,
      TechStack.Pinia,
      TechStack.Zod,
    ],
    screenShots: [
      {
        url: "",
        descriptionText: "",
        altText: "",
      },
    ],
  },
  {
    title: "Portfolio site",
    brief: "My own portfolio site build with VueJs, Nuxt",
    featureImage: "/images/project/blogcms-2.png",
    keyFeatures: [
      "Static site, host every where for free",
      "Fully responsive",
      "Static content management system inspired by Nuxt Content",
    ],
    description: "Portfolio site",
    isFeatured: true,
    slug: "personal-portfolio",
    linkLive: "https://phil-tran-dev.vercel.app/",
    repoLink: "https://github.com/Philip-Tran/portfolio-2024",
    stack: [
      TechStack.VueJS,
      TechStack.Nuxt,
      TechStack.TypeScript,
      TechStack.JavaScript,
      TechStack.TailwindCSS,
    ],
    screenShots: [
      {
        url: "/images/project/blogcms-2.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms-2.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms.png",
        descriptionText: "Home screen",
        altText: "",
      },
    ],
  },
  {
    title: "Ecommerce shop - WordPress",
    brief: "Ecommerce shop built with WordPress and Page Builder",
    featureImage: "/images/project/blogcms-2.png",
    keyFeatures: ["SEO Optimized", "Fully responsive"],
    description:
      "I built this site from the ground up. I was responsible for the whole project from gathering business requirement from the client, design brand identity, design the site and bring it to live in WordPress using Elementor",
    isFeatured: false,
    slug: "wordpress-ecommerce-shop",
    linkLive: "https://chungsport.vn/",
    // repoLink: "",
    stack: [TechStack.WordPress],
    screenShots: [
      {
        url: "/images/project/blogcms-2.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms-2.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms.png",
        descriptionText: "Home screen",
        altText: "",
      },
    ],
  },
  {
    title: "Ticket support app",
    brief:
      "Allow user create ticket, reply to ticket and add notes with authentication and authorization",
    featureImage: "/images/project/blogcms-2.png",
    keyFeatures: [
      "Create ticket for product",
      "Reply to ticket, add notes and close ticket",
      "Authentication",
    ],
    description:
      "My first fullstack app built to learn CRUD, buld API and Authentication system, communicate with the database",
    isFeatured: false,
    slug: "ticket-support-app",
    linkLive: "https://ticket-mern.vercel.app/",
    repoLink: "https://github.com/Philip-Tran/ticket-mevn",
    stack: [
      TechStack.VueJS,
      TechStack.JavaScript,
      TechStack.TailwindCSS,
      TechStack.Pinia,
      TechStack.Express,
      TechStack.MongoDB,
      TechStack.NodeJS,
    ],
    screenShots: [
      {
        url: "/images/project/blogcms-2.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms-2.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms.png",
        descriptionText: "Home screen",
        altText: "",
      },
    ],
  },
  {
    title: "QTube - Youtube inspired video publishing platform",
    brief:
      "Publish your own video, podcast and writing all in one place with easy to use CMS, allow comment for authenticated user and more",
    featureImage: "/images/project/blogcms-2.png",
    keyFeatures: [
      "Fully responsive",
      "Fully functional CMS system",
      "Create with user experience in mind",
    ],
    description:
      "I built this app first for personal use, cause I've always wanted to publish my own content. Build with Brick Builder on WordPress with performance in mind and a lot of custom Javascript and Scss code",
    isFeatured: false,
    slug: "wordpress-qtube",
    linkLive: "https://ticket-mern.vercel.app/",
    repoLink: "https://github.com/Philip-Tran/ticket-mevn",
    stack: [
      TechStack.WordPress,
      TechStack.JavaScript,
      TechStack.Bem,
      TechStack.Sass,
    ],
    screenShots: [
      {
        url: "/images/project/blogcms-2.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms-2.png",
        descriptionText: "Home screen",
        altText: "",
      },
      {
        url: "/images/project/blogcms.png",
        descriptionText: "Home screen",
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
  brief:
    "As you know, my name is Philip Tran. I'm passionate about the Web, technology, writing and basically crafting stuffs that I love",
  paragraph: `<h2>A fullstack web developer specialize in Frontend technologies with modern tech stack</h2>
   <p>My background is from the design world actually, I've learned UX/UI but then I wanted to make my designs come to life so I learned web dev.</p>
   <p>
    It's been a long journey, but now I know I love creating things. Here are some key aspects about me:
    <ul>
      <li>I'm detail-oriented</li>
      <li>I'm a problem solver</li>
      <li>I have an aesthetic eye</li>
      <li>I'm very organized and disciplined</li>
      <li>I'm always willing to ask question, learn form other or help other by what I know</li>
      <li>I can't stop myself from learning new thing and upgrade my skills</li>
    </ul>
  </p>
  <p>I'm a fast learner with the ability to solve problem by intensive research</p>
  <p>I am very proactive and I believe in Interdependence where everyone can be dependence works in collaboration</p>
  
  <p><strong>More about me beyond web dev:</strong>
  I love learning languages, playing guitar from time to time and crafting useful things with my own hand
  </p>
  `,
};

export { homePage, projects, contactPage, aboutPage, techStack };
