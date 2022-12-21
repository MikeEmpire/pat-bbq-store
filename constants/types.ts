import { StaticImageData } from "next/image";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  image: StaticImageData;
}
