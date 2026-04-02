import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/content/site";


import CTA from "@/components/CTA";
import ChallengeInput from "@/components/ChallengeInput";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Clay White | CRMA, CRISC, CISA, CIA | Fractional C-Suite Executive",
  description: "Clay White brings 20+ years of C-suite experience in GRC, operational leadership, and business execution. CRMA, CRISC, CISA, CIA certified. Executive leadership at Maximus, Title365, Aseptic Technology. Founder of Casablanca Cocktails. Serving Dallas, TX and Orange County, CA.",
  keywords: [
    "Clay White",
    "CRMA",
    "CRISC",
    "CISA",
    "CIA certification",
    "GRC executive",
    "compliance executive",
    "fractional COO",
    "fractional CFO",
    "fractional GRC executive",
    "C-suite experience",
    "fractional executive",
    "Maximus executive",
    "WH Advisory Services",
    "compliance consultant Dallas TX",
    "compliance consultant Orange County CA",
    "beverage manufacturing compliance",
    "CEO fractional leadership",
  ],
  openGraph: {
    title: "About Clay White | CRMA, CRISC, CISA — WH Advisory Services",
    description: "20+ years of C-suite GRC experience. Fractional COO, CFO, and GRC executive. Executive leadership at Maximus, Title365, and Aseptic Technology.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData type="Person" />
      <div className="bg-white">
        {/* Clay White Bio Section */}
        <section className="section-padding bg-white text-charcoal border-b border-gray-100">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image
                  src="/images/clay-white.jpg"
                  alt="Clay White - Founder & Principal, WH Advisory Services"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-dark">Clay White</h1>
                <p className="text-xl text-gold font-semibold mb-8 uppercase tracking-widest">
                  {siteContent.principal.title}
                </p>
                <div className="prose prose-lg max-w-none text-charcoal mb-8">
                  <p className="text-xl leading-relaxed whitespace-pre-wrap italic text-gray-600 mb-8 border-l-4 border-gold pl-6">
                    {siteContent.about.narrative}
                  </p>
                  <p className="text-lg leading-relaxed whitespace-pre-wrap">
                    {siteContent.principal.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Hierarchy */}
        <section className="section-padding bg-gray-dark text-white">
          <div className="container-custom max-w-6xl mx-auto space-y-8">

            {/* The Vision — full-width manifesto */}
            <div className="border-l-4 border-gold pl-8 py-4">
              <p className="text-2xl md:text-3xl font-light text-white leading-snug tracking-tight">
                {siteContent.principal.additionalBio[0]}
              </p>
            </div>

            {/* The Model & The Expert — balanced 2-column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* The Model */}
              <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-gold">The Model</p>
                </div>
                <p className="text-lg text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                  {siteContent.principal.additionalBio[1]}
                </p>
              </div>

              {/* The Expert */}
              <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-gold">The Experience</p>
                </div>
                <p className="text-lg text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                  {siteContent.principal.additionalBio[2]}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why WH Advisory — closing bio section */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
                  Built for Execution,<br /> Not Observation.
                </h2>
                <div className="w-16 h-1 bg-gold mb-8"></div>
                <p className="text-lg text-charcoal leading-relaxed mb-6">
                  {siteContent.about.fractionalDeepDive.execution.description.split('\n\n')[0]}
                </p>
                <p className="text-lg text-charcoal leading-relaxed">
                  {siteContent.about.fractionalDeepDive.execution.description.split('\n\n')[2]}
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 space-y-6">
                {siteContent.about.fractionalDeepDive.deliverables.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="text-gold text-xl mt-0.5">✓</span>
                    <div>
                      <p className="font-bold text-gray-dark">{item.name}</p>
                      <p className="text-sm text-charcoal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA — link to Fractional Leadership page */}
        <section className="section-padding bg-charcoal text-white text-center">
          <div className="container-custom max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Working Together?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Explore how fractional executive leadership can accelerate your business — without the full-time cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/fractional-leadership" className="bg-gold text-charcoal px-10 py-4 rounded-lg font-bold hover:bg-white transition-all shadow-lg">
                Explore Fractional Leadership
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-charcoal transition-all">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

