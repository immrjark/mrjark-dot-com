import type { HeaderLinksInterface } from "@interfaces/headerLinks.interface";

export const HEADER_LINKS: HeaderLinksInterface[] = [
  {
    href: "/ensayos",
    text: "Ensayos",
    customClasses: "hover:text-mr-neon-blue text-mr-neon-blue",
  },
  {
    href: "/biblioteca",
    text: "Biblioteca",
    customClasses: "hover:text-mr-neon-gold text-mr-neon-gold",
  },
  {
    href: "/comportamiento",
    text: "Comportamiento",
    customClasses: "hover:text-mr-neon-violet text-mr-neon-violet",
  },
  {
    href: "/contexto",
    text: "Contexto",
    customClasses: "hover:text-mr-primary-green text-mr-primary-green",
  },
  // {
  //   href: "/testing",
  //   text: "Testing",
  //   customClasses: "hover:text-mr-neon-red text-mr-neon-red",
  // },
];
