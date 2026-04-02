import { siteContent } from "@/content/site";

export default function SectorList() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 text-center uppercase tracking-tight">
          {siteContent.sectors.heading}
        </h2>
        <p className="text-xl text-charcoal text-center mb-12 max-w-4xl mx-auto whitespace-pre-wrap">
          {siteContent.sectors.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.sectors.list.map((sector, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border-2 ${
                sector.highlight ? 'bg-charcoal text-white transform scale-105 shadow-xl border-gold' : 'bg-white border-gray-100 uppercase'
                }`}
            >
              <h3 className={`text-lg font-bold mb-4 leading-tight ${
                sector.highlight ? 'text-white' : 'text-gray-dark'
                }`}>
                {sector.name}
              </h3>
              <div className={`w-12 h-1 mb-4 ${sector.highlight ? 'bg-gold' : 'bg-gray-200'}`}></div>
              <p className={
                sector.highlight ? 'text-gray-300 text-sm leading-relaxed italic' : 'text-charcoal text-sm leading-relaxed'
              }>
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
