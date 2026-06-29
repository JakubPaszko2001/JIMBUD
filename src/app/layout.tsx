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
    "wyburzanie budynków przemysłowych",
    "rozbiórka hal przemysłowych Podlasie",
    "wyburzanie kominów Białystok",
    "wyburzanie fundamentów",
    "rozbiórka obiektów budowlanych",
    "usługi wyburzeniowe Podlasie",
    "wyburzenia Łomża",
    "wyburzenia Suwałki",
    "wyburzenia Augustów",
    "wyburzenia Bielsk Podlaski",
    "wyburzenia Hajnówka",
    "burzenie domów Białystok",
    "rozbiórka z wywozem gruzu",
    "wyburzenie domu cena",
    "wyburzenie ściany nośnej",
  ],
  authors: [{ name: "fraymweb", url: "https://fraymweb.pl" }],
  creator: "fraymweb",
  publisher: "JIMBUD",
  generator: "fraymweb",
  category: "construction",
  classification: "Usługi wyburzeniowe i rozbiórkowe",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://jimbud.pl",
    languages: {
      "pl-PL": "https://jimbud.pl",
    },
  },
  openGraph: {
    title: "JIMBUD — Wyburzanie Domów i Rozbiórka Mieszkań Białystok, Podlasie",
    description:
      "Profesjonalne wyburzanie domów, rozbiórka mieszkań i budynków przemysłowych — Białystok i całe Podlasie. Lider rozbiórek od 2001 roku.",
    url: "https://jimbud.pl",
    siteName: "JIMBUD",
    locale: "pl_PL",
    type: "website",
    countryName: "Poland",
  },
  twitter: {
    card: "summary_large_image",
    title: "JIMBUD — Wyburzanie Domów i Rozbiórka Białystok, Podlasie",
    description:
      "Profesjonalne wyburzanie domów, rozbiórka mieszkań i budynków przemysłowych — Białystok i całe Podlasie. Od 2001 roku.",
  },
  verification: {
    google: "G-E0HEWN3KPQ",
  },
  other: {
    "geo.region": "PL-PD",
    "geo.placename": "Białystok",
    "geo.position": "53.1325;23.1688",
    ICBM: "53.1325, 23.1688",
    "DC.title": "JIMBUD — Wyburzanie Domów i Rozbiórka Białystok",
    "DC.creator": "fraymweb",
    "DC.subject": "wyburzanie domów, rozbiórka budynków, Białystok, Podlasie",
    "DC.language": "pl",
    "DC.coverage": "Białystok, Podlasie, Polska",
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
