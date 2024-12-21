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
}
interface Project {
  title: string;
  brief: string;
  description: string;
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
};

const projects: Project[] = [
  {
    title: "Joy Read",
    brief: "",
    description: "Language learning platform",
    isFeatured: true,
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

export { homePage, projects };
