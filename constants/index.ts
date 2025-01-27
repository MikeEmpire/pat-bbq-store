import { PTrainMenuLink, SizeObject } from "../@types";

export const sizes: SizeObject = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const links: Array<PTrainMenuLink> = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Menu",
    link: "/menu",
  },
  {
    label: "Book Us",
    link: "/bookus",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "Shop (coming soon)",
    link: "#",
  },
];

export const contactFormURL: string =
  "https://empire-api.afam.app/api/v1/ptrains/contact";

export const CAROUSEL_IMAGES: string[] = [
  "/new-slide-1.jpg",
  "/new-slide-2.jpg",
  "/new-slide-3.jpg",
  "/new-slide-4.jpg",
  "/new-slide-5.jpg",
  "/new-slide-6.jpg",
  "/new-slide-7.jpg",
  "/new-slide-8.jpg",
];
