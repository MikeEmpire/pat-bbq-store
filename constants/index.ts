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
  "/slideshow/slide-1.jpeg",
  "/slideshow/slide-2.jpeg",
  "/slideshow/slide-3.jpeg",
  "/slideshow/slide-4.jpeg",
  "/slideshow/slide-5.jpeg",
  "/slideshow/slide-6.jpeg",
  "/slideshow/slide-7.jpeg",
  "/slideshow/slide-8.jpeg",
];
