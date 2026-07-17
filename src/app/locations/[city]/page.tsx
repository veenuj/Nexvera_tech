import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { MapPin, Code2, TrendingUp, Layout, CheckCircle2, Shield, BrainCircuit, Server } from "lucide-react";
import { serviceLocations } from "@/data/locations";
import { PremiumCTA } from "@/components/ui/PremiumCTA";

// 1. Pre-build paths for ultra-fast local SEO (Turbopack optimization)
export function generateStaticParams() {
  return serviceLocations.map((location) => ({
    city: location.id,
  }));
}

// 2. Async Meta Generation (Next.js 15 Requirement)
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ city: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const location = serviceLocations.find((loc) => loc.id.toLowerCase() === resolvedParams.city.toLowerCase());
  
  if (!location) return { title: "Location Not Found" };

  return {
    title: `Best Website, Software & AI Development Company in ${location.name} | NexVera`,
    description: `NexVera Technologies is the top-rated enterprise software, custom web development, and digital marketing agency serving businesses in ${location.name}, ${location.state}.`,
    alternates: {
      canonical: `https://nexveratechnologies.com/locations/${location.id}`,
    },
    openGraph: {
      title: `Top Tech Agency in ${location.name} | NexVera`,
      description: `Transforming businesses in ${location.name} with custom SaaS, AI automation, and ROI-driven marketing.`,
      url: `https://nexveratechnologies.com/locations/${location.id}`,
      type: "website",
    }
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

  // Advanced JSON-LD Schema for Local Authority (No unverified street addresses)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NexVera Technologies",
    "image": "https://nexveratechnologies.com/logo.png",
    "description": `Premium Software Architecture, AI Automation, and Digital Marketing Agency serving enterprise clients in ${location.name}.`,
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
    "url": `https://nexveratechnologies.com/locations/${location.id}`,
    "knowsAbout": [
      "Custom Software Development",
      "Website Design",
      "Artificial Intelligence (AI) Automation",
      "Digital Marketing Services",
      "Enterprise Resource Planning (ERP)",
      "Next.js and React Architecture",
      "Java & Spring Boot Backends"
    ]
  };

  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-24 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---------------- LIQUID UI BACKGROUND ---------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[0%] right-[0%] w-[800px] h-[800px] rounded-[100%] bg-gradient-to-br from-gold-primary/10 to-transparent blur-[150px] animate-[spin_40s_linear_infinite]" />
        <div className="absolute bottom-[0%] left-[0%] w-[800px] h-[800px] rounded-[100%] bg-gradient-to-tr from-blue-900/20 to-transparent blur-[150px] animate-[spin_50s_linear_infinite_reverse]" />
      </div>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-[1]" />
      {/* ------------------------------------------------------ */}

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-4xl mx-auto mb-24 pt-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 shadow-[0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-primary"></span>
            </span>
            <span className="text-sm font-mono text-brand-lightGray tracking-widest uppercase font-semibold">
              Serving {location.name}, {location.state}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-balance drop-shadow-2xl">
            The Premier Tech Agency in <br className="hidden md:block" />
            <span className="text-gradient-gold">{location.name}</span>
          </h1>

          <p className="text-lg md:text-2xl text-brand-lightGray font-light leading-relaxed mb-12 max-w-3xl mx-auto text-balance">
            Empowering regional businesses with enterprise-grade web architecture, scalable custom software, and AI-driven marketing strategies engineered for total market dominance.
          </p>
          
          <PremiumCTA text={`Transform Your ${location.name} Business`} />
        </div>


        {/* ================= PREMIUM BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-24">
          
          {/* 1. Main Feature: Web Architecture (Spans 8 columns) */}
          <div className="md:col-span-12 lg:col-span-8 glass-panel rounded-[2rem] border border-white/5 overflow-hidden group hover:border-gold-primary/40 transition-all duration-700 relative flex flex-col md:flex-row min-h-[450px] shadow-2xl">
            {/* Image Side */}
            <div className="w-full md:w-5/12 relative h-64 md:h-full overflow-hidden">
              <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt={`Premium Web Design in ${location.name}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                priority
              />
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative z-20 bg-brand-black/80 backdrop-blur-md md:bg-brand-black/40">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-transparent opacity-90 hidden md:block -z-10" />
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg">
                <Layout className="text-gold-primary" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">High-Conversion Web Architecture</h2>
              <p className="text-brand-lightGray font-light leading-relaxed mb-8">
                We don't build standard websites; we engineer digital storefronts. Utilizing Next.js and React, we deliver ultra-fast, visually stunning platforms designed to convert {location.name} traffic into loyal clients.
              </p>
              <ul className="space-y-4">
                {['Zero-Latency Load Times (Core Web Vitals)', 'Bespoke, Glassmorphism UI/UX Design', 'Advanced Technical SEO Architecture'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-brand-lightGray font-medium">
                    <CheckCircle2 size={18} className="text-gold-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Secondary Feature: AI Marketing (Spans 4 columns) */}
          <div className="md:col-span-12 lg:col-span-4 glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-gold-primary/40 transition-all duration-700 group relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-gold-primary/20 transition-colors duration-700 pointer-events-none" />
            
            <div className="relative z-10 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:bg-gold-primary/10 transition-all duration-500">
                <TrendingUp className="text-gold-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">AI Digital Marketing</h2>
              <p className="text-brand-lightGray font-light leading-relaxed">
                Dominate search engines and social feeds. We utilize data-backed strategies to ensure your {location.name} business captures high-intent local and global traffic.
              </p>
            </div>
            
            {/* Abstract Decorative Image Element */}
            <div className="relative h-40 rounded-2xl overflow-hidden border border-white/10 mt-auto shadow-inner">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt={`Digital Marketing Analytics ${location.name}`}
                fill
                className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
            </div>
          </div>

          {/* 3. Deep Dive: Custom Software & ERP (Spans 12 columns horizontally) */}
          <div className="md:col-span-12 glass-panel p-8 md:p-16 rounded-[2rem] border border-white/5 hover:border-gold-primary/40 transition-all duration-700 group relative overflow-hidden shadow-2xl">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
               <div>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <Code2 className="text-gold-primary" size={24} />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:-rotate-12 transition-transform duration-500">
                      <BrainCircuit className="text-gold-primary" size={24} />
                    </div>
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-6 tracking-tight">Enterprise ERP & AI Integration</h2>
                  <p className="text-brand-lightGray font-light leading-relaxed text-lg mb-8 max-w-xl">
                    Off-the-shelf software stifles growth. We architect highly secure, bespoke Management Systems (ERP), custom billing platforms, and inventory workflows tailored exactly to how your organization operates. 
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Server className="text-gold-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Robust Backends</h4>
                        <p className="text-sm text-brand-lightGray/80">Built on scalable Java, Spring Boot, and Python infrastructures.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-gold-primary shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Bank-Grade Security</h4>
                        <p className="text-sm text-brand-lightGray/80">End-to-end encryption ensuring your corporate data is impenetrable.</p>
                      </div>
                    </div>
                  </div>
               </div>
               
               {/* Right Side Image Composition */}
               <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                 <Image 
                   src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop" 
                   alt={`Enterprise Software Development ${location.name}`}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/60 to-transparent" />
                 
                 {/* Floating Tech Badges over Image */}
                 <div className="absolute bottom-6 left-6 flex gap-3">
                    <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">Java 17</span>
                    <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">Python AI</span>
                    <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">React</span>
                 </div>
               </div>
             </div>
          </div>

        </div>

        {/* ================= FINAL CTA BLOCK ================= */}
        <div className="text-center mt-32 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your <span className="text-gradient-gold">{location.name}</span> operations?</h2>
          <p className="text-brand-lightGray font-light mb-10">Stop losing market share to competitors with faster tech. Partner with NexVera Technologies to build a digital infrastructure that drives measurable growth.</p>
          <PremiumCTA text="Schedule Technical Consultation" />
        </div>

      </div>
    </main>
  );
}