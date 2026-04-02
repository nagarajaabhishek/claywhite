import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";

// const inter = Inter({ subsets: ["latin"] });
const inter = { className: "font-sans" };

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://whadvisory.com'),
  title: {
    default: "WH Advisory Services | Fractional COO, CFO & GRC Advisory",
    template: "%s | WH Advisory Services",
  },
  description: "Investor-ready compliance and fractional executive leadership. WH Advisory Services provides Fractional COO, CFO, and GRC advisory — delivering C-suite impact without the full-time cost. SOC 2, HIPAA, SOX, NIST expertise. Serving Dallas, TX and Orange County, CA.",
  keywords: [
    "fractional COO",
    "fractional CFO",
    "fractional CRO",
    "fractional executive",
    "fractional C-suite",
    "GRC advisory",
    "governance risk compliance",
    "SOC 2 compliance",
    "NIST compliance",
    "HIPAA compliance",
    "SOX compliance",
    "SEC compliance",
    "ISO 27001",
    "GAPP",
    "enterprise risk management",
    "third party risk management",
    "investor-ready compliance",
    "audit readiness",
    "compliance consultant",
    "fractional executive Dallas TX",
    "fractional executive Orange County CA",
    "embedded executive leadership",
    "Clay White",
    "WH Advisory Services",
  ],
  authors: [{ name: "Clay White" }],
  creator: "WH Advisory Services",
  openGraph: {
    title: "WH Advisory Services | Fractional COO, CFO & GRC Advisory",
    description: "Investor-ready compliance and fractional executive leadership. C-suite impact without the full-time cost — COO, CFO, and GRC advisory for high-growth businesses.",
    type: "website",
    locale: "en_US",
    siteName: "WH Advisory Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "WH Advisory Services | Fractional COO, CFO & GRC Advisory",
    description: "Investor-ready compliance and fractional executive leadership. C-suite impact without the full-time cost.",
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
