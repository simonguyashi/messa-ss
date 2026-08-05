import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { SCHOOL } from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.messasecondary.sc.tz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Messa Secondary School | Excellence in Mwanza, Tanzania",
    template: "%s | Messa Secondary School",
  },
  description:
    "Messa Secondary School (S4575) is a private boarding and day school in Buhongwa, Mwanza City Council — offering O-Level and A-Level education with a 100% ACSEE pass rate and 31 subjects across Sciences, Business, Languages and ICT.",
  keywords: [
    "Messa Secondary School",
    "Messa SS",
    "S4575",
    "secondary school Mwanza",
    "boarding school Tanzania",
    "A-Level Mwanza",
    "O-Level Tanzania",
    "Buhongwa school",
    "ACSEE results Mwanza",
    "private school Mwanza",
  ],
  authors: [{ name: "Messa Secondary School" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Messa Secondary School",
    title: "Messa Secondary School | Excellence in Mwanza, Tanzania",
    description:
      "A private boarding and day secondary school in Mwanza offering O-Level and A-Level education with a proven record of academic excellence.",
    images: [{ url: SCHOOL.logo, width: 512, height: 512, alt: "Messa Secondary School logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Messa Secondary School | Excellence in Mwanza, Tanzania",
    description:
      "A private boarding and day secondary school in Mwanza offering O-Level and A-Level education with a proven record of academic excellence.",
    images: [SCHOOL.logo],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: SCHOOL.logo, apple: SCHOOL.logo },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: SCHOOL.name,
    logo: SCHOOL.logo,
    image: SCHOOL.logo,
    telephone: SCHOOL.phone,
    email: SCHOOL.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Buguku",
      addressLocality: "Buhongwa, Mwanza City Council",
      addressRegion: "Mwanza",
      addressCountry: "TZ",
    },
    sameAs: [SCHOOL.instagram, SCHOOL.profileUrl],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
