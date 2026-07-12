"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Cpu, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const capabilities = [
  "Bespoke Enterprise ERP ecosystems designed for industrial & manufacturing control.",
  "High-performance distributed backend architectures using Java (Spring Boot) & ASP.NET Core.",
  "Monolith deconstruction and zero-downtime migration to cloud-native microservices.",
  "Secure corporate service desks and role-based operational command centers."
];

export default function SoftwareServicePage() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-primary font-mono text-sm tracking-widest uppercase mb-4"
          >
            Core Engineering
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance"
          >
            Custom Enterprise <br />
            <span className="text-gradient-gold">Software Development</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-lightGray font-light max-w-2xl leading-relaxed"
          >
            We build robust, secure, and infinitely scalable software solutions engineered to handle heavy operational demands and complex corporate workflows.
          </motion.p>
        </div>

        {/* Technical Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Server className="text-gold-primary" size={24} />, title: "Monolithic Migration", desc: "Safely splitting legacy systems into lightning-fast cloud microservices without breaking live production workflows." },
            { icon: <Cpu className="text-gold-primary" size={24} />, title: "Robust Backend Pillars", desc: "Engineered on highly stable environments prioritizing thread-safety, absolute data consistency, and low-latency API handling." },
            { icon: <Layers className="text-gold-primary" size={24} />, title: "Unified Data Pipeline", desc: "Centralizing disparate CRM, inventory management, and operational databases into clear centralized storage hubs." }
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

        {/* Feature Focus */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Architectural Strategy & Standards</h2>
              <div className="space-y-4">
                {capabilities.map((cap, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-primary shrink-0 mt-1" />
                    <span className="text-brand-lightGray text-sm md:text-base font-light">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 font-mono text-xs text-brand-lightGray/70">
              <p className="text-gold-primary mb-2">// Corporate Infrastructure Paradigm</p>
              <p>System Architecture: Distributed Microservices</p>
              <p>Primary Engine: Java 17 / Spring Boot Ecosystem</p>
              <p>Security Strategy: Zero-Trust Layered Access Control</p>
              <p>Database Matrix: Distributed PostgreSQL Shards & Redis Cache</p>
              <p>Deployment Pipeline: Containerized Docker Swarms via AWS Cloud</p>
            </div>
          </div>
        </div>

        {/* Bottom Conversion Area */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Need a custom technical roadmap?</h3>
          <Link href="/contact">
            <Button size="lg" className="flex items-center gap-2 mx-auto group">
              Discuss Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}