import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MapPin, Code2, TrendingUp, Layout } from "lucide-react";
import { serviceLocations } from "@/data/locations";
import { PremiumCTA } from "@/components/ui/PremiumCTA";

// 1. Pre-build paths for ultra-fast local SEO
export function generateStaticParams() {
  return serviceLocations.map((location) => ({
    city: location.id,
  }));
}

// 2. Async Meta Generation (Next.js 15+ requirement)
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ city: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const location = serviceLocations.find((loc) => loc.id.toLowerCase() === resolvedParams.city.toLowerCase());
  
  if (!location) return { title: "Location Not Found" };

  return {
    title: `Best Website, Software & Digital Marketing Company in ${location.name} | NexVera`,
    description: `NexVera Technologies is the top-rated software, web development, and digital marketing agency serving enterprise clients in ${location.name}, ${location.state}.`,
    alternates: {
      canonical: `https://nexveratechnologies.com/locations/${location.id}`,
    },
  };
}

// 3. Async Page Component (Next.js 15+ requirement)
export default async function LocationPage({ 
  params 
}: { 
  params: Promise<{ city: string }> 
}) {
  // Await the params before trying to read the city
  const resolvedParams = await params;
  
  // Find the location (using toLowerCase for safety so /Meerut and /meerut both work)
  const location = serviceLocations.find((loc) => loc.id.toLowerCase() === resolvedParams.city.toLowerCase());
  
  if (!location) notFound();

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NexVera Technologies",
    "image": "https://nexveratechnologies.com/logo.png",
    "description": `Premium Software and Digital Marketing Agency serving ${location.name}.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Meerut",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "City",
      "name": location.name
    },
    "url": `https://nexveratechnologies.com/locations/${location.id}`
  };

  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-24 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <MapPin size={16} className="text-gold-primary" />
          <span className="text-sm font-mono text-brand-lightGray tracking-widest uppercase">
            Serving {location.name}, {location.state}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-balance">
          The Best Website, Software & Digital Marketing Company in <span className="text-gradient-gold">{location.name}</span>
        </h1>

        <p className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed mb-16">
          Empowering businesses across {location.name} with enterprise-grade web architecture, scalable software development, and AI-driven marketing strategies engineered for total market dominance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-gold-primary/30 transition-colors">
            <Layout className="text-gold-primary mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">Premium Web Design</h3>
            <p className="text-brand-lightGray text-sm font-light">High-conversion websites built on Next.js designed to establish absolute authority in the {location.name} market.</p>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-gold-primary/30 transition-colors">
            <Code2 className="text-gold-primary mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">Custom Software (ERP/CRM)</h3>
            <p className="text-brand-lightGray text-sm font-light">Bespoke operational software and SaaS architectures tailored to your specific corporate workflows.</p>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-gold-primary/30 transition-colors">
            <TrendingUp className="text-gold-primary mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">AI Digital Marketing</h3>
            <p className="text-brand-lightGray text-sm font-light">Advanced SEO and Generative Engine Optimization to ensure your business captures all high-intent local traffic.</p>
          </div>
        </div>

        <PremiumCTA text={`Transform Your ${location.name} Business`} />
      </div>
    </main>
  );
}