"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

const projects = [
  {
    id: "01",
    client: "Corporate Automotive Group",
    title: "Multi-Agent GenAI Workflow & Diagnostics",
    category: "AI & Machine Learning",
    metrics: ["RAG Integration", "LLM Orchestration"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    id: "02",
    client: "Enterprise Retail",
    title: "Custom ERP & Inventory Architecture",
    category: "Full Stack (Spring Boot/React)",
    metrics: ["Zero Downtime", "Real-Time Sync"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    span: "col-span-1 lg:col-span-1",
  },
  {
    id: "03",
    client: "National Banking Sector",
    title: "Branch Network Digital Audit Platform",
    category: "Business Automation",
    metrics: ["Data Compliance", "Automated Reporting"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    span: "col-span-1 lg:col-span-1",
  },
  {
    id: "04",
    client: "Commercial Services",
    title: "Omnichannel Brand Identity & Marketing",
    category: "Digital Marketing & Design",
    metrics: ["Conversion Optimized", "Premium Assets"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
];

export const PortfolioGrid = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-black">
      
      {/* Background Liquid Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative cursor-pointer rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-gold-primary/40 transition-all duration-700 min-h-[450px] flex flex-col justify-end",
                project.span
              )}
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 w-full h-full -z-20">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Liquid Hover Glow (Activates on Hover) */}
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold-primary/30 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

              {/* Floating Category Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full border border-white/10 bg-brand-black/50 backdrop-blur-md text-xs font-semibold text-brand-lightGray z-10 group-hover:border-gold-primary/30 transition-colors duration-500">
                {project.category}
              </div>

              {/* Top Right Arrow */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/10 bg-brand-black/50 backdrop-blur-md flex items-center justify-center z-10 group-hover:bg-gold-primary/20 group-hover:border-gold-primary/50 transition-all duration-500">
                <ArrowUpRight size={20} className="text-white group-hover:text-gold-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>

              {/* Content Container (Bottom Heavy) */}
              <div className="relative z-10 p-8 pt-32 w-full">
                <motion.div
                  initial={{ y: 20, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-gold-primary font-mono text-xs tracking-widest uppercase mb-3">
                    {project.client}
                  </p>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>

                  {/* Metrics Row */}
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-medium text-white shadow-lg"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};