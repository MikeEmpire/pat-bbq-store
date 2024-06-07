import { StaticImageData } from "next/image";

export interface SizeObject {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}

export interface PATFont {
  src: string;
  weight: string;
  style: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  image: StaticImageData;
}

export interface CarouselButtonProps {
  enabled: boolean;
  onClick: () => void;
}

export interface PTrainMenuLink {
  label: string;
  link: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}