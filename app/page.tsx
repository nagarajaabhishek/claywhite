import { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ChallengeInput from "@/components/ChallengeInput";
import ServicesOverview from "@/components/ServicesOverview";
import CompanyServices from "@/components/CompanyServices";

import SectorList from "@/components/SectorList";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Fractional COO, CFO & GRC Advisory | Investor-Ready Compliance | WH Advisory",
  description: "WH Advisory Services delivers fractional COO, CFO, and GRC executive leadership — investor-ready compliance and scalable operations from $60K/year vs $250K+ full-time. SOC 2, HIPAA, SOX, NIST. Serving Dallas, TX and Orange County, CA.",
  keywords: [
    "fractional COO",
    "fractional CFO",
    "fractional CRO",
    "fractional executive",
    "fractional C-suite",
    "fractional GRC executive",
    "GRC advisory",
    "governance risk compliance",
    "investor ready compliance",
    "SOC 2 compliance",
    "HIPAA compliance",
    "SOX compliance",
    "NIST compliance",
    "SEC compliance",
    "enterprise risk management",
    "third party risk management",
    "audit readiness",
    "compliance consultant Dallas TX",
    "compliance consultant Orange County CA",
    "fractional executive Texas",
    "embedded executive leadership",
    "vendor management",
    "board readiness",
  ],
  openGraph: {
    title: "Fractional COO, CFO & GRC Advisory | WH Advisory Services",
    description: "C-suite impact without the full-time cost. Fractional COO, CFO, and GRC advisory — SOC 2, HIPAA, SOX, NIST expertise. Serving Dallas, TX and Orange County, CA.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ChallengeInput />
      <ServicesOverview />
      <CompanyServices />
      <SectorList />

      <CTA
        primaryText="Schedule a Consultation"
        primaryHref="/contact"
      />
    </>
  );
}
