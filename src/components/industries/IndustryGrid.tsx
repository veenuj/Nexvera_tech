"use client";

import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Landmark, Activity, Car, Truck, ShoppingBag, ShieldCheck } from "lucide-react";

const industries = [
  {
    title: "Financial Services & FinTech",
    description: "Architecting secure, low-latency infrastructure for banking and digital assets with rigorous SOC-2 and PCI-DSS compliance integrated at the code level.",
    icon: <Landmark size={28} className="text-gold-primary" />,
  },
  {
    title: "Automotive & Smart Dealerships",
    description: "Full-scale ERP and CRM ecosystems for large dealership groups. We bridge physical inventory with high-conversion AI lead generation pipelines.",
    icon: <Car size={28} className="text-gold-primary" />,
  },
  {
    title: "Healthcare Technology",
    description: "HIPAA-compliant, interoperable data pipelines for telehealth and patient management, prioritizing extreme data privacy and system resilience.",
    icon: <Activity size={28} className="text-gold-primary" />,
  },
  {
    title: "Logistics & Supply Chain",
    description: "End-to-end tracking ecosystems. We deploy predictive AI models to optimize global routing and automate warehouse operations for maximum throughput.",
    icon: <Truck size={28} className="text-gold-primary" />,
  },
  {
    title: "Enterprise Retail & E-Commerce",
    description: "High-throughput, headless omnichannel architectures built to handle massive traffic spikes without latency or synchronization errors.",
    icon: <ShoppingBag size={28} className="text-gold-primary" />,
  },
  {
    title: "Cybersecurity & Defense",
    description: "Zero-trust architectural design and threat intelligence platforms that fortify mission-critical systems against sophisticated digital threats.",
    icon: <ShieldCheck size={28} className="text-gold-primary" />,
  },
];

export const IndustryGrid = () => {
  return (
    <section className="py-32 relative bg-brand-black overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Industry <span className="text-gradient-gold">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-gold-primary to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.title} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper card component for the "Spotlight" interaction
const IndustryCard = ({ industry, index }: { industry: any; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative h-full glass-panel p-8 rounded-3xl border border-white/5 hover:border-gold-primary/30 transition-colors duration-500 overflow-hidden"
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(212, 175, 55, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-gold-primary/10 group-hover:scale-110 transition-all duration-500 shadow-lg">
          {industry.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
          {industry.title}
        </h3>
        <p className="text-brand-lightGray font-light leading-relaxed text-sm">
          {industry.description}
        </p>
      </div>
    </motion.div>
  );
};