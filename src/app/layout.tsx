import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SchemaMarkup from "./components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "RanchRodeo.pro - #1 Ranch Rodeo App | Points, Teams, Cards & Community",
  description:
    "The everything app for ranch rodeo. Placings become points the moment the last team runs, live standings go straight to the arena screen, rosters carry a different role per event, and card eligibility is flagged before entries close. Built for the outfits and the producers.",
  keywords:
    "ranch rodeo, ranch rodeo app, WRCA, working ranch cowboys, ranch bronc riding, wild cow milking, team branding, stray gathering, number sorting, trailer loading, doctoring, ranch rodeo points, ranch rodeo rules, working cowboy card, ranch horse, top hand, ranch rodeo producer software",
  authors: [{ name: "RanchRodeo.pro" }],
  creator: "RanchRodeo.pro",
  publisher: "RanchRodeo.pro",
  metadataBase: new URL("https://www.ranchrodeo.pro"),
  alternates: {
    canonical: "https://www.ranchrodeo.pro",
  },
  openGraph: {
    title: "RanchRodeo.pro - #1 Ranch Rodeo App",
    description:
      "The outfit, not the individual. Placings to points instantly, live standings, team rosters, card tracking, and the whole ranch rodeo community.",
    url: "https://www.ranchrodeo.pro",
    siteName: "RanchRodeo.pro",
    type: "website",
    images: [
      {
        url: "https://www.ranchrodeo.pro/logo.png",
        width: 1200,
        height: 630,
        alt: "RanchRodeo.pro",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RanchRodeo.pro - #1 Ranch Rodeo App",
    description:
      "The outfit, not the individual. Points math done between rounds, instantly.",
    images: ["https://www.ranchrodeo.pro/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable + " antialiased"}>
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
