import type { Metadata } from "next";
import { Black_Han_Sans, Barlow_Condensed, Barlow } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-black-han-sans",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const barlow = Barlow({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "JIMBUD — Wyburzanie Domów i Rozbiórka Mieszkań Białystok, Podlasie",
  description:
    "Profesjonalne wyburzanie domów, rozbiórka mieszkań i budynków przemysłowych — Białystok i całe Podlasie. Kompleksowe usługi wyburzeniowe od 2001 roku. Zadzwoń i uzyskaj wycenę!",
  keywords: [
    "wyburzanie domów Białystok",
    "rozbiórka mieszkań Białystok",
    "wyburzenia Podlasie",
    "wyburzanie budynków Białystok",
    "rozbiórka domu Podlasie",
    "wyburzanie ścian Białystok",
    "rozbiórka przemysłowa Białystok",
    "wyburzenia Polska",
    "JIMBUD wyburzenia",
    "firma wyburzeniowa Białystok",
  ],
  alternates: {
    canonical: "https://jimbud.pl",
  },
  openGraph: {
    title: "JIMBUD — Wyburzanie Domów i Rozbiórka Mieszkań Białystok, Podlasie",
    description:
      "Profesjonalne wyburzanie domów, rozbiórka mieszkań i budynków przemysłowych — Białystok i całe Podlasie. Lider rozbiórek od 2001 roku.",
    url: "https://jimbud.pl",
    siteName: "JIMBUD",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${blackHanSans.variable} ${barlowCondensed.variable} ${barlow.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E0HEWN3KPQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E0HEWN3KPQ');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
