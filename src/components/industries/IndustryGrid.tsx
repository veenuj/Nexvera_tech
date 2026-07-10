"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, Activity, Car, Truck, ShoppingBag, ShieldCheck } from "lucide-react";

const industries = [
  {
    title: "Financial Services & FinTech",
    description: "Secure, low-latency architectures for banking, trading, and digital assets. We integrate rigorous compliance protocols (SOC-2, PCI-DSS) directly into the code.",
    icon: <Landmark size={32} className="text-gold-primary" />,
  },
  {
    title: "Automotive & Smart Dealerships",
    description: "End-to-end operational software for large dealership groups. We architect custom ERP integrations, unified CRM ecosystems, and AI-powered lead generation pipelines to accelerate sales.",
    icon: <Car size={32} className="text-gold-primary" />,
  },
  {
    title: "Healthcare Technology",
    description: "HIPAA-compliant data pipelines and telehealth platforms. We build intelligent patient management systems that prioritize extreme data privacy and interoperability.",
    icon: <Activity size={32} className="text-gold-primary" />,
  },
  {
    title: "Logistics & Supply Chain",
    description: "Global tracking ecosystems and automated fleet management. We deploy predictive AI models to optimize routing, reduce overhead, and eliminate bottlenecks.",
    icon: <Truck size={32} className="text-gold-primary" />,
  },
  {
    title: "Enterprise Retail & E-Commerce",
    description: "High-throughput omnichannel architectures designed to handle massive traffic spikes. We engineer headless commerce solutions with zero-latency inventory synchronization.",
    icon: <ShoppingBag size={32} className="text-gold-primary" />,
  },
  {
    title: "Cybersecurity & Defense",
    description: "Zero-trust architectures and threat intelligence platforms. We build the secure foundation that protects mission-critical infrastructure from evolving digital threats.",
    icon: <ShieldCheck size={32} className="text-gold-primary" />,
  },
];

export const IndustryGrid = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-10 group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gold-primary/0 group-hover:bg-gold-primary/5 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-charcoal border border-brand-border flex items-center justify-center mb-8 shadow-glass group-hover:scale-110 transition-transform duration-500">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {industry.title}
                </h3>
                <p className="text-brand-lightGray/80 leading-relaxed text-sm">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};