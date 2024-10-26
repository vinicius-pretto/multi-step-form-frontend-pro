import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const poppins = poppinsFont.className;
