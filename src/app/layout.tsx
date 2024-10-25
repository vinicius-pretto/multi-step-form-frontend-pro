import type { Metadata } from "next";
import "./globals.css";


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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
