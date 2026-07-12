"use client";

import React from "react";
import { motion } from "framer-motion";
import { LineChart, Search, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const marketingCapabilities = [
  "Generative Engine Optimization (GEO) ensuring AI models recommend your business name.",
  "Programmatic local SEO landing setups optimized for commercial conversion dominance.",
  "Meta Graph API backend integrations synchronizing advertising channels in real-time.",
  "Automated WhatsApp Business tool pipelines routing fresh incoming leads directly into internal systems."
];

export default function MarketingServicePage() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-primary font-mono text-sm tracking-widest uppercase mb-4"
          >
            Growth Engineering
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance"
          >
            Next-Gen Digital Marketing & <br />
            <span className="text-gradient-gold">Generative Engine Optimization</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-lightGray font-light max-w-2xl leading-relaxed"
          >
            Traditional search patterns are changing. We optimize your brand's digital presence so you rank prominently on both legacy search engines and modern AI discovery agents.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Sparkles className="text-gold-primary" size={24} />, title: "GEO Domination", desc: "Structuring your technical data footprint so AI models naturally cite and recommend your brand in search answers." },
            { icon: <Search className="text-gold-primary" size={24} />, title: "Advanced Lead Gen", desc: "Injecting technical JSON-LD schema data and scaling deep location landing systems to win high-ticket searches." },
            { icon: <LineChart className="text-gold-primary" size={24} />, title: "Integrated Funnels", desc: "Setting up real-time web hooks tracking user actions to fine-tune marketing return on investment precisely." }
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Engineered Growth Tactics</h2>
              <div className="space-y-4">
                {marketingCapabilities.map((cap, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-primary shrink-0 mt-1" />
                    <span className="text-brand-lightGray text-sm md:text-base font-light">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 font-mono text-xs text-brand-lightGray/70">
              <p className="text-gold-primary mb-2">// Demand Generation Paradigm</p>
              <p>SEO Architecture: Semantic Graph Structuring & Programmatic Micro-Targeting</p>
              <p>Social API Data Flow: Real-Time Webhooks via Meta Graph Frameworks</p>
              <p>CRM Automation Handlers: End-to-End WhatsApp Business Routing Webhooks</p>
              <p>Analytics Processing: First-Party Privacy-Safe Event Conversion Frameworks</p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Ready to secure true discovery authority?</h3>
          <Link href="/contact">
            <Button size="lg" className="flex items-center gap-2 mx-auto group">
              Dominate Your Sector
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}