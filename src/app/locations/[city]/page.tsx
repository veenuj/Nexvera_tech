import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { MapPin, Code2, TrendingUp, Layout, CheckCircle2 } from "lucide-react";
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

// 3. Async Page Component
export default async function LocationPage({ 
  params 
}: { 
  params: Promise<{ city: string }> 
}) {
  const resolvedParams = await params;
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

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <MapPin size={16} className="text-gold-primary animate-pulse" />
            <span className="text-sm font-mono text-brand-lightGray tracking-widest uppercase font-semibold">
              Serving {location.name}, {location.state}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-balance">
            The Best Website & Software Company in <br className="hidden md:block" />
            <span className="text-gradient-gold drop-shadow-sm">{location.name}</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed mb-10 max-w-2xl mx-auto text-balance">
            Empowering regional businesses with enterprise-grade web architecture, scalable software development, and AI-driven marketing strategies engineered for total market dominance.
          </p>
          
          <PremiumCTA text={`Transform Your ${location.name} Business`} />
        </div>

        {/* Premium Bento Box Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          {/* Main Feature: Web Architecture (Spans 8 columns) */}
          <div className="md:col-span-12 lg:col-span-8 glass-panel rounded-3xl border border-white/5 overflow-hidden group hover:border-gold-primary/30 transition-all duration-500 relative flex flex-col md:flex-row min-h-[400px]">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative h-64 md:h-full overflow-hidden">
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt={`Premium Web Design in ${location.name}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-20 bg-brand-black/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg">
                <Layout className="text-gold-primary" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Premium Web Architecture</h3>
              <p className="text-brand-lightGray font-light leading-relaxed mb-6">
                High-conversion websites engineered on Next.js to establish absolute digital authority in the {location.name} market.
              </p>
              <ul className="space-y-3">
                {['Lightning-Fast Load Times', 'Bespoke UI/UX Design', 'Technical SEO Core'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-brand-lightGray">
                    <CheckCircle2 size={16} className="text-gold-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary Feature: Digital Marketing (Spans 4 columns) */}
          <div className="md:col-span-12 lg:col-span-4 glass-panel p-8 md:p-10 rounded-3xl border border-white/5 hover:border-gold-primary/30 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full group-hover:bg-gold-primary/20 transition-colors duration-500 pointer-events-none" />
            
            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="text-gold-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">AI Digital Marketing</h3>
              <p className="text-brand-lightGray font-light leading-relaxed text-sm">
                Advanced SEO and Generative Engine Optimization ensuring your business captures all high-intent local traffic.
              </p>
            </div>
            
            {/* Abstract Decorative Element */}
            <div className="relative h-32 rounded-xl overflow-hidden border border-white/10 mt-auto">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt={`Digital Marketing Analytics ${location.name}`}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
            </div>
          </div>

          {/* Third Feature: Custom Software (Spans 12 columns horizontally) */}
          <div className="md:col-span-12 glass-panel p-8 md:p-12 rounded-3xl border border-white/5 hover:border-gold-primary/30 transition-all duration-500 group relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
               <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                    <Code2 className="text-gold-primary" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Enterprise ERP & Custom SaaS</h3>
                  <p className="text-brand-lightGray font-light leading-relaxed text-lg max-w-xl">
                    Replace off-the-shelf software with bespoke operational architecture. We build highly secure, custom management systems tailored exactly to how your {location.name} organization operates.
                  </p>
               </div>
               
               <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop" 
                   alt={`Enterprise Software Development ${location.name}`}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
               </div>
             </div>
          </div>
        </div>

      </div>
    </main>
  );
}