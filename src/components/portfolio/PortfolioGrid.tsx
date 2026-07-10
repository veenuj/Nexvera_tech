"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

const projects = [
  {
    id: "01",
    client: "GlobalFin Solutions",
    title: "AI-Powered Risk Assessment Platform",
    category: "AI & Machine Learning",
    metrics: ["+400% Processing Speed", "Zero Downtime"],
    imageClass: "bg-gradient-to-br from-brand-charcoal to-brand-black", // Placeholder for actual images
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    id: "02",
    client: "Nexus Health",
    title: "HIPAA-Compliant Telehealth Ecosystem",
    category: "SaaS Development",
    metrics: ["1M+ Active Users", "SOC-2 Certified"],
    imageClass: "bg-gradient-to-tr from-[#111] to-[#050505]",
    span: "col-span-1 lg:col-span-1",
  },
  {
    id: "03",
    client: "AeroLogistics",
    title: "Global Supply Chain Automation",
    category: "Business Automation",
    metrics: ["$2.4M Saved Annually", "99.99% Uptime"],
    imageClass: "bg-gradient-to-bl from-brand-border to-brand-black",
    span: "col-span-1 lg:col-span-1",
  },
  {
    id: "04",
    client: "Quantum Retail",
    title: "Omnichannel E-Commerce Architecture",
    category: "Web Ecosystems",
    metrics: ["65% Conversion Lift", "<100ms Latency"],
    imageClass: "bg-gradient-to-tl from-gold-primary/10 to-brand-black",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
];

export const PortfolioGrid = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn("group cursor-pointer flex flex-col", project.span)}
            >
              {/* Image Container */}
              <div className="glass-panel overflow-hidden relative aspect-[4/3] lg:aspect-auto lg:h-[400px] mb-6 rounded-2xl border-white/5">
                <div 
                  className={cn(
                    "absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105",
                    project.imageClass
                  )}
                >
                  {/* Subtle noise/texture overlay could go here */}
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                {/* Floating Category Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 rounded-full glass-panel border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-brand-lightGray">
                  {project.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-gold-primary font-mono text-sm tracking-wider uppercase">
                    {project.client}
                  </p>
                  <ArrowUpRight size={24} className="text-brand-border group-hover:text-gold-primary transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-brand-lightGray transition-colors">
                  {project.title}
                </h3>

                {/* Metrics Row */}
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.metrics.map((metric, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-medium text-brand-lightGray/80"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};