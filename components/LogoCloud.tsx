import { siteContent } from "@/content/site";

export default function LogoCloud() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-dark mb-8 text-center">
          Prior Companies & Experience
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteContent.companies.map((company: { name: string; role: string }, idx: number) => (
            <div key={idx} className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm h-full flex flex-col justify-center items-center">
                <h3 className="text-lg font-bold text-gray-dark mb-2">{company.name}</h3>
                <p className="text-sm text-gray-600">{company.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
