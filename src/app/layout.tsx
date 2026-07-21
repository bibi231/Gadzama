import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { siteConfig } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.title}, Senior Advocate of Nigeria · Chartered Arbitrator`,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    "Joe-Kyari Gadzama",
    "SAN",
    "Senior Advocate of Nigeria",
    "Chartered Arbitrator",
    "ADR",
    "Alternative Dispute Resolution",
    "JICAM",
    "J-K Gadzama LLP",
    "Arbitration Nigeria",
    "Nigerian Lawyer",
  ],
  authors: [{ name: siteConfig.title }],
  creator: siteConfig.builtBy,
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    siteName: siteConfig.title,
    title: `${siteConfig.title}, Senior Advocate of Nigeria`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@JKGadzamaLLP",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for Chief Gadzama
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe-Kyari Gadzama",
    honorificPrefix: "Chief",
    honorificSuffix: "OFR, SAN",
    jobTitle: "Senior Advocate of Nigeria · Chartered Arbitrator",
    description: siteConfig.description,
    url: siteConfig.url,
    affiliation: [
      {
        "@type": "Organization",
        name: "J-K Gadzama LLP",
        url: "https://www.j-kgadzamallp.com",
      },
      {
        "@type": "Organization",
        name: "Janada International Centre for Arbitration and Mediation (JICAM)",
      },
      {
        "@type": "EducationalOrganization",
        name: "Newgate University, Minna",
        url: "https://www.newgateuniversityminna.edu.ng",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/joe-kyari-gadzama-san/",
      "https://twitter.com/JKGadzamaLLP",
      "https://www.facebook.com/jkgadzamallp",
      "https://www.instagram.com/jkgadzamallp",
    ],
    knowsAbout: [
      "Arbitration",
      "Alternative Dispute Resolution",
      "Litigation",
      "Corporate Law",
      "Election Petitions",
      "International Law",
    ],
  };

  return (
    <html lang="en" data-theme="navy" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} min-h-full flex flex-col`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <Navbar />
        <main className="flex-1 pt-[80px]">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
