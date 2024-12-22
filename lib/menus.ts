import { CircleUserRound, Home, Mail, Target } from "lucide-vue-next";

const mainMenu = [
  {
    label: "Home",
    icon: Home,
    url: "/",
  },
  {
    label: "Projects",
    icon: Target,
    url: "/projects",
  },
  {
    label: "About",
    icon: CircleUserRound,
    url: "/about",
  },
  {
    label: "Contact",
    icon: Mail,
    url: "/contact",
  },
];

export { mainMenu };
