import { Merriweather } from "next/font/google";

const merriweatherFont = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["900"],
  variable: "--font-merriweather",
});

export const merriweather = merriweatherFont.className;
