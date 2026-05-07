import type { Metadata } from "next";
import { Black_Han_Sans, Barlow_Condensed, Barlow } from "next/font/google";
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
  title: "JIMBUD — Wyburzenia Profesjonalne",
  description:
    "Kompleksowe wyburzanie budynków przemysłowych i mieszkalnych z najwyższą precyzją. Lider rozbiórek w Polsce od 2001 roku.",
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
      <body>{children}</body>
    </html>
  );
}
