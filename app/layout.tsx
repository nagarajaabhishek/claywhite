import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://whadvisory.com'),
  title: {
    default: "WH Advisory Services | Fractional COO/CRO & GRC Advisory",
    template: "%s | WH Advisory Services",
  },
  description: "Scalable compliance and investor-ready growth. Fractional COO/CRO and GRC advisory for firms that need executive-level oversight without the full-time footprint. Serving Dallas, TX and Orange County, CA.",
  keywords: [
    "GRC",
    "Fractional COO",
    "Fractional CRO",
    "SOC 2",
    "NIST",
    "HIPAA",
    "SOX",
    "SEC compliance",
    "investor-ready",
    "compliance consultant",
    "audit readiness",
    "fractional executive",
    "Dallas",
    "Orange County",
  ],
  authors: [{ name: "Clay White" }],
  creator: "WH Advisory Services",
  openGraph: {
    title: "WH Advisory Services | Fractional COO/CRO & GRC Advisory",
    description: "Scalable compliance and investor-ready growth. Fractional COO/CRO and GRC advisory for firms that need executive-level oversight without the full-time footprint.",
    type: "website",
    locale: "en_US",
    siteName: "WH Advisory Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "WH Advisory Services | Fractional COO/CRO & GRC Advisory",
    description: "Scalable compliance and investor-ready growth. Fractional COO/CRO and GRC advisory for firms that need executive-level oversight without the full-time footprint.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
