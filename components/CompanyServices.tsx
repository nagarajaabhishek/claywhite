import { siteContent } from "@/content/site";

export default function CompanyServices() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 text-center">
          Company Services
        </h2>
        <p className="text-xl text-charcoal text-center mb-12 max-w-3xl mx-auto">
          Comprehensive GRC and executive leadership services tailored to your needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {siteContent.services.grc.coreServices?.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-gold transition-colors shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-dark mb-3">
                {service.name}
              </h3>
              <p className="text-charcoal leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
