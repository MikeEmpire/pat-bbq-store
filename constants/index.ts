import localFont from "@next/font/local";

import { SizeObject } from "../@types";

export const sizes: SizeObject = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const gilroy = localFont({
  src: [
    {
      path: "../fonts/Gilroy-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "bold",
    },
    {
      path: "../fonts/Gilroy-ExtraBoldItalic.ttf",
      weight: "800",
      style: "bold italic",
    },
    {
      path: "../fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Gilroy-HeavyItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/Gilroy-Heavy.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-ThinItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/Gilroy-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy-UltraLightItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/Gilroy-UltraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
});
