"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Users, BrainCircuit, LineChart } from "lucide-react";
import { cn } from "@/utils/cn";

const solutions = [
  {
    id: "01",
    title: "Enterprise ERP Systems (EAPRO: Titan OS)",
    description: "Comprehensive Enterprise Resource Planning ecosystems built on high-performance frameworks like ASP.NET Core MVC. We centralize critical operations, supply chain tracking, and EPC project management for industrial and energy leaders.",
    icon: <Server size={32} className="text-gold-primary relative z-10" />,
    align: "left",
  },
  {
    id: "02",
    title: "Automated CRM Platforms (Baba Real Estates)",
    description: "Full-stack customer relationship management systems engineered with Next.js and Tailwind CSS. We integrate Meta Graph APIs and WhatsApp Business tools to create seamless, real-time lead generation and marketing pipelines.",
    icon: <Users size={32} className="text-gold-primary relative z-10" />,
    align: "right",
  },
  {
    id: "03",
    title: "AI-Powered SaaS (Autosite AI)",
    description: "Next-generation Software-as-a-Service platforms driven by Generative AI. We architect intelligent products like our automotive website builder, utilizing Multi-Agent Systems to automate digital infrastructure deployment at scale.",
    icon: <BrainCircuit size={32} className="text-gold-primary relative z-10" />,
    align: "left",
  },
  {
    id: "04",
    title: "Fintech & Financial Tracking",
    description: "Lightning-fast financial web applications engineered with modern state management (React, Vite, Zustand). We develop premium financial tools featuring smart daily budget calculations, intelligent categorization, and real-time data visualization.",
    icon: <LineChart size={32} className="text-gold-primary relative z-10" />,
    align: "right",
  },
];

export const SolutionsFeature = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-black">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-24">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id} 
              className={cn(
                "flex flex-col md:flex-row items-center gap-12 lg:gap-20 group",
                solution.align === "right" ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: solution.align === "left" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className="text-gold-primary font-mono text-xl mb-4 font-bold tracking-widest uppercase flex items-center gap-3">
                  <span className="w-8 h-px bg-gold-primary/50" />
                  {solution.id} //
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight text-balance">
                  {solution.title}
                </h3>
                <p className="text-lg text-brand-lightGray leading-relaxed font-light text-balance">
                  {solution.description}
                </p>
              </motion.div>

              {/* Visual Side (Premium Glass Panel) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="glass-panel aspect-video relative flex items-center justify-center overflow-hidden rounded-3xl border border-white/5 group-hover:border-gold-primary/30 transition-all duration-700 shadow-2xl">
                  {/* Internal Hover Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Icon Container */}
                  <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-gold-primary/40 group-hover:bg-gold-primary/10 transition-all duration-700 relative overflow-hidden">
                    {/* Icon background flare */}
                    <div className="absolute inset-0 bg-gold-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    {solution.icon}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};