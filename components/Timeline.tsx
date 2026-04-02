import { siteContent } from "@/content/site";

export default function Timeline() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-12 text-center">
          Executive Career Highlights
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {siteContent.companies.map((company: { name: string; role: string; description: string }, idx: number) => (
            <div key={idx} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-gold rounded-full mt-2"></div>
                {idx < siteContent.companies.length - 1 && (
                  <div className="w-px h-full bg-gray-300 ml-1.5"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-gray-dark mb-1">{company.name}</h3>
                <p className="text-gold font-semibold mb-2">{company.role}</p>
                <p className="text-charcoal">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
