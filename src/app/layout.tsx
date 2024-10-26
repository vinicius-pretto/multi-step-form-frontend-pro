import { merriweather } from '@/fonts/merriweather';
import { poppins } from "@/fonts/poppins";
import type { Metadata } from "next";
import "../styles/globals.css";

const fonts = [merriweather, poppins].join(', ')

export const metadata: Metadata = {
  title: "Multi-step Form - FrontendPro",
  description: "Multi-step Form is a front-end challenge from FrontendPro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts}>
      <body>
        {children}
      </body>
    </html>
  );
}
