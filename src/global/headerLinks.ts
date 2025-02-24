import type { HeaderLinksInterface } from "@interfaces/headerLinks.interface";

export const HEADER_LINKS: HeaderLinksInterface[] = [
  {
    href: "/ensayos",
    text: "/ensayos",
    customClasses: "hover:text-mr-neon-blue text-mr-neon-blue",
  },
  {
    href: "/biblioteca",
    text: "/biblioteca",
    customClasses: "hover:text-mr-neon-gold text-mr-neon-gold",
  },
  {
    href: "/conducta",
    text: "/conducta",
    customClasses: "hover:text-mr-neon-pink text-mr-neon-pink",
  },
  // {
  //   href: "/contexto",
  //   text: "Contexto",
  //   customClasses: "hover:text-mr-primary-green text-mr-primary-green",
  // },
  // {
  //   href: "/testing",
  //   text: "Testing",
  //   customClasses: "hover:text-mr-neon-red text-mr-neon-red",
  // },
];
