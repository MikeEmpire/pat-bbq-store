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
