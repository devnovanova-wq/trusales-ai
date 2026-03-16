import { DM_Sans, Inter, Space_Grotesk } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400","500","600"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  variable: "--font-space",
});

import "./globals.css";
import { ReactNode } from "react";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Tru Sales",
  description: "Never lose a sales lead again",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}