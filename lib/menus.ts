import {
  CircleUserRound,
  Home,
  Mail,
  PencilLine,
  Target,
} from "lucide-vue-next";

const mainMenu = [
  {
    label: "Home",
    icon: Home,
    url: "/",
    isExternal: false,
  },
  {
    label: "Projects",
    icon: Target,
    url: "/projects",
    isExternal: false,
  },
  {
    label: "My blog",
    icon: PencilLine,
    url: "https://phil-tran-blog.vercel.app/",
    isExternal: true,
  },
  {
    label: "About",
    icon: CircleUserRound,
    url: "/about",
    isExternal: false,
  },
  {
    label: "Contact",
    icon: Mail,
    url: "/contact",
  },
];

export { mainMenu };
