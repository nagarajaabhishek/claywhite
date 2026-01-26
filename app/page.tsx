import { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServicesOverview from "@/components/ServicesOverview";
import CompanyServices from "@/components/CompanyServices";
import TestimonialGrid from "@/components/TestimonialGrid";
import SectorList from "@/components/SectorList";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Fractional COO/CRO & GRC Advisory | Investor-Ready Compliance",
  description: "Scalable compliance and investor-ready growth. Fractional COO/CRO and GRC advisory for firms that need executive-level oversight without the full-time footprint. SOC 2, HIPAA, SOX, NIST expertise. Serving Dallas, TX and Orange County, CA.",
  keywords: [
    "fractional coo",
    "fractional cro",
    "grc advisory",
    "investor ready",
    "soc 2 compliance",
    "audit readiness",
    "compliance consultant",
    "dallas",
    "orange county",
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <CompanyServices />
      <SectorList />
      <TestimonialGrid />
      <Clients />
      <CTA 
        primaryText="Schedule a Strategy Audit"
        secondaryText="Explore GRC Frameworks"
        primaryHref="/contact"
        secondaryHref="/services/grc-regulatory"
      />
    </>
  );
}
