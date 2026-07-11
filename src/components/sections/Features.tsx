"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  TrendingUp, 
  Workflow, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";

const services = [
  {
    title: "Enterprise SaaS Architecture",
    description: "End-to-end development of infinitely scalable web applications, engineered from scratch on modern stacks like Next.js and React for zero-latency performance.",
    icon: <Code2 size={28} className="text-white relative z-10" />,
    className: "md:col-span-2 lg:col-span-2",
    badge: "Core Engineering",
    bgGlow: "from-blue-500/10 via-transparent to-transparent",
  },
  {
    title: "Next-Gen Digital Marketing & GEO",
    description: "Traditional SEO is dead. We dominate the new digital landscape using Generative Engine Optimization (GEO), predictive lead scoring, and AI-driven content strategies that train LLMs (like ChatGPT) to recommend your business.",
    icon: <TrendingUp size={28} className="text-gold-primary relative z-10" />,
    className: "md:col-span-2 lg:col-span-2 border-gold-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.05)]",
    badge: "2026 Strategy",
    bgGlow: "from-gold-primary/20 via-transparent to-transparent",
    highlight: true,
  },
  {
    title: "Applied AI & Custom LLMs",
    description: "Integrate custom machine learning agents and data analytics directly into your existing corporate workflows.",
    icon: <BrainCircuit size={28} className="text-white relative z-10" />,
    className: "md:col-span-1 lg:col-span-1",
    bgGlow: "from-purple-500/10 via-transparent to-transparent",
  },
  {
    title: "Business Automation",
    description: "Eliminate operational bottlenecks with intelligent, automated API pipelines and seamless CRM integrations.",
    icon: <Workflow size={28} className="text-white relative z-10" />,
    className: "md:col-span-1 lg:col-span-1",
    bgGlow: "from-emerald-500/10 via-transparent to-transparent",
  },
  {
    title: "Zero-Trust Security & Cloud",
    description: "Bank-grade infrastructure audits, end-to-end encryption, and resilient cloud deployments to ensure your enterprise data remains completely impenetrable.",
    icon: <ShieldCheck size={28} className="text-white relative z-10" />,
    className: "md:col-span-2 lg:col-span-2",
    bgGlow: "from-red-500/10 via-transparent to-transparent",
  },
];

// TS bypass for Vercel build
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export const Features = () => {
  return (
    <section className="py-32 relative bg-brand-black overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Sparkles size={14} className="text-gold-primary" />
            <span className="text-brand-lightGray font-mono text-xs tracking-widest uppercase">Our Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            Engineering <span className="text-gradient-gold drop-shadow-sm">Excellence</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-lightGray font-light text-balance"
          >
            We don't just write code; we architect resilient digital ecosystems designed to capture market share, automate operations, and scale infinitely.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(280px,auto)]"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`glass-panel rounded-3xl p-8 group hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col border border-white/5 hover:border-gold-primary/40 ${service.className}`}
            >
              {/* Dynamic Internal Glows */}
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${service.bgGlow} opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-gold-primary/10 transition-colors duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-auto relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-gold-primary/30 transition-all duration-500 shadow-lg">
                  {service.icon}
                </div>
                {service.badge && (
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border ${service.highlight ? 'bg-gold-primary/10 border-gold-primary/30 text-gold-primary' : 'bg-white/5 border-white/10 text-brand-lightGray'}`}>
                    {service.badge}
                  </span>
                )}
              </div>

              <div className="mt-8 relative z-10">
                <h3 className={`text-2xl font-bold mb-3 tracking-tight ${service.highlight ? 'text-gold-primary' : 'text-white'}`}>
                  {service.title}
                </h3>
                <p className="text-brand-lightGray leading-relaxed font-light text-balance">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};