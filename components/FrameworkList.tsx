import { siteContent } from "@/content/site";

export default function FrameworkList() {
  return (
    <div className="space-y-6">
      {siteContent.services.grc.frameworks.map((framework: { name: string; description: string }, idx: number) => (
        <div key={idx} className="bg-gray-50 rounded-lg p-6 border-l-4 border-gold">
          <h3 className="text-xl font-bold text-gray-dark mb-2">{framework.name}</h3>
          <p className="text-charcoal">{framework.description}</p>
        </div>
      ))}
    </div>
  );
}
