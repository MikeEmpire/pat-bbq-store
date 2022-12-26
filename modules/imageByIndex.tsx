import { StaticImageData } from "next/image";

import slide1 from "../public/slide-1.png";
import slide2 from "../public/slide-1.png";
import slide3 from "../public/slide-1.png";

export const images: Array<StaticImageData> = [slide1, slide2, slide3];

const imageByIndex = (index: number): StaticImageData => images[index];

export default imageByIndex;
