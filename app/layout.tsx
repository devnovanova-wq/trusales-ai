import { DM_Sans, Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ReactNode } from "react";
import Providers from "@/components/Providers";

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

export const metadata = {
  title: "Tru Sales",
  description: "Nunca vuelvas a perder un Lead",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
        
        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '924752757151274');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script
          src="https://www.clarity.ms/tag/vyb43zto4t"
          strategy="afterInteractive"
        />

        {/* Noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=924752757151274&ev=PageView&noscript=1"
          />
        </noscript>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}