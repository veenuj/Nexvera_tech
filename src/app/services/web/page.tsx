"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Smartphone, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const webCapabilities = [
  "High-performance web applications built using Next.js, React, and strict TypeScript styles.",
  "Premium, design-forward UI/UX design schemes optimized explicitly for extreme conversion ratios.",
  "Headless layout architectures isolating client-facing presentation layers from underlying APIs.",
  "Rigorous core web vitals optimization targeting perfect layout speed metrics globally."
];

export default function WebServicePage() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-primary font-mono text-sm tracking-widest uppercase mb-4"
          >
            Digital Experiences
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance"
          >
            High-Performance Web Architecture & <br />
            <span className="text-gradient-gold">Bespoke UI/UX Design</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-lightGray font-light max-w-2xl leading-relaxed"
          >
            We eliminate sluggish rendering, generic boilerplate templates, and broken layouts. We write lightning-fast interface frameworks that command authority and load without friction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Layout className="text-gold-primary" size={24} />, title: "Next.js Engineering", desc: "Leveraging static rendering and dynamic component setups for ultra-fast load times and seamless client interaction." },
            { icon: <Smartphone className="text-gold-primary" size={24} />, title: "Fluid Adaptation", desc: "Building completely responsive web interfaces that maintain pixel-perfect precision from massive screens down to mobile devices." },
            { icon: <ShieldAlert className="text-gold-primary" size={24} />, title: "Impenetrable Security", desc: "Setting up ironclad frontend structures resistant to malicious injections, clickjacking, and structural cross-site scripting." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 relative group hover:border-gold-primary/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-brand-lightGray/80 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Frontend Design Philosophies</h2>
              <div className="space-y-4">
                {webCapabilities.map((cap, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-primary shrink-0 mt-1" />
                    <span className="text-brand-lightGray text-sm md:text-base font-light">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 font-mono text-xs text-brand-lightGray/70">
              <p className="text-gold-primary mb-2">// View Layer Specifications</p>
              <p>Core System Framework: Next.js (App Router) / React Ecosystem</p>
              <p>Type Safety Architecture: Strict Mode TypeScript Compilation</p>
              <p>Styling Foundations: Atomic Utility Tailwind Configs & Framer Micro-Accelerations</p>
              <p>Static Optimization: Granular Code Splitting & Edge Network Asset Caching</p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Want a striking digital presence?</h3>
          <Link href="/contact">
            <Button size="lg" className="flex items-center gap-2 mx-auto group">
              Launch Your Platform
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}