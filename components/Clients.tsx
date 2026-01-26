"use client";

import Image from "next/image";
import { siteContent } from "@/content/site";

export default function Clients() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-gray-dark mb-4 text-center">
          Ask our Clients
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Trusted by leading companies across financial services, technology, and real estate.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {siteContent.clients.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-white transition-colors border border-gray-100"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={150}
                height={80}
                className="object-contain max-h-16 w-auto grayscale hover:grayscale-0 transition-all"
                style={{ filter: "grayscale(100%)" }}
                onError={(e) => {
                  // Fallback to text if logo not found
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector(".client-name-fallback")) {
                    const fallback = document.createElement("div");
                    fallback.className = "client-name-fallback text-center";
                    fallback.textContent = client.name;
                    fallback.style.cssText = "color: #333740; font-weight: 600; font-size: 0.875rem; line-height: 1.25rem;";
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
