import { Metadata } from "next";
import { siteContent } from "@/content/site";
import Link from "next/link";
import CTA from "@/components/CTA";
import ChallengeInput from "@/components/ChallengeInput";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Fractional Executive Leadership | Fractional COO, CFO & GRC | WH Advisory",
  description: "Board-level strategy without the full-time cost. WH Advisory's fractional COO, CFO, and GRC executives deploy in 2–4 weeks at $60K–$240K vs $250K+ full-time. 20+ years C-suite experience across regulated industries.",
  keywords: [
    "fractional executive leadership",
    "fractional COO",
    "fractional CFO",
    "fractional CRO",
    "fractional GRC executive",
    "fractional C-suite",
    "embedded executive",
    "interim COO",
    "interim CFO",
    "on demand executive",
    "executive leadership without overhead",
    "6-12 week execution sprint",
    "cost effective executive leadership",
    "fractional executive Dallas TX",
    "fractional executive Orange County CA",
    "fractional COO Texas",
    "business execution",
    "operational leadership",
    "investor ready leadership",
  ],
  openGraph: {
    title: "Fractional COO, CFO & GRC Executive Leadership | WH Advisory Services",
    description: "C-suite impact without full-time overhead. Fractional COO, CFO, and GRC executives deployed in 2–4 weeks at $60K–$240K/year.",
    type: "article",
  },
};

export default function FractionalLeadershipPage() {
  const { fractional } = siteContent.services;
  const { fractionalDeepDive } = siteContent.about;

  return (
    <>
      <StructuredData type="Service" />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="section-padding bg-charcoal text-white text-center overflow-hidden">
          <div className="container-custom">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight">
              {fractional.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 whitespace-pre-wrap">
              {fractional.headline}
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {fractional.description}
            </p>
          </div>
        </section>

        {/* The Model Advantage */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-gray-dark mb-8">Why Choose Fractional?</h2>
                <div className="space-y-6">
                  {fractional.whyChoose.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-gold font-bold">✓</span>
                      </div>
                      <p className="text-lg text-charcoal font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-10 rounded-2xl border-2 border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-dark mb-6 text-center">Executive Outcomes</h3>
                <div className="grid grid-cols-1 gap-6">
                  {fractional.takeaways.map((takeaway, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gold">
                      <p className="font-bold text-gray-dark mb-1">{takeaway.label}</p>
                      <p className="text-gray-600 text-sm">{takeaway.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section (from About page context) */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-dark mb-4">The Economics of Fractional Leadership</h2>
              <p className="text-xl text-gray-600">Comparing the Fractional model vs. traditional Full-Time hires</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl mx-auto border-collapse bg-white rounded-xl shadow-lg">
                <thead>
                  <tr className="bg-charcoal text-white border-b-2 border-gold">
                    <th className="p-6 text-left font-medium uppercase tracking-wider">Dimension</th>
                    <th className="p-6 text-left font-bold text-xl text-gold">Fractional Executive</th>
                    <th className="p-6 text-left font-bold text-xl text-white opacity-80">Full-Time Executive</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 italic">
                  {fractional.comparisonTable.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-bold text-gray-500">{row.label}</td>
                      <td className="p-6 text-charcoal font-semibold border-x border-gray-100">{row.fractional}</td>
                      <td className="p-6 text-gray-400">{row.fullTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When to Engage */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">When to Engage</h2>
              <p className="text-xl text-gray-600 italic">
                {fractionalDeepDive.whenToEngage.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {fractionalDeepDive.whenToEngage.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-gold transition-all group">
                  <span className="text-gold text-3xl font-light scale-150 transition-transform group-hover:rotate-12">+</span>
                  <span className="text-lg font-medium text-gray-700">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When Should I Hire Detail Section */}
        <section className="section-padding bg-charcoal text-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Specific Fractional Roles</h2>
              <div className="w-20 h-1 bg-gold mx-auto"></div>
            </div>
            
            <div className="space-y-16 max-w-5xl mx-auto">
              {fractionalDeepDive.whenShouldIHire.map((role, idx) => (
                <div key={idx} className="bg-white/5 rounded-2xl p-10 border border-white/10 hover:border-gold/50 transition-all">
                  <h3 className="text-3xl font-bold text-white mb-6 underline decoration-gold decoration-4 underline-offset-8">{role.role}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300">
                    <div>
                      <h4 className="font-bold text-gold uppercase tracking-widest text-xs mb-6">Typical Triggers</h4>
                      <ul className="space-y-3">
                        {role.triggers.map((trigger, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-gold">▹</span>
                            {trigger}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-charcoal p-6 rounded-lg border border-white/5">
                      <p className="text-sm italic leading-relaxed text-gray-400">{role.conclusion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ChallengeInput />

        <CTA
          primaryText="Schedule a Strategy Audit"
          primaryHref="/contact"
          className="bg-gray-50"
        />
      </div>
    </>
  );
}
