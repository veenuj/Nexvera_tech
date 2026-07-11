"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Server, Layout, Cloud } from "lucide-react";

const stackCategories = [
  {
    title: "Artificial Intelligence",
    description: "Multi-Agent Systems & advanced predictive modeling.",
    icon: <BrainCircuit size={24} className="text-gold-primary" />,
    technologies: ["GenAI", "LLMs (Gemini/Llama)", "RAG Frameworks", "LangChain", "Spring AI", "Vector Databases"],
    glow: "from-purple-500/10",
  },
  {
    title: "Core Backend & APIs",
    description: "High-performance, secure server-side architecture.",
    icon: <Server size={24} className="text-gold-primary" />,
    technologies: ["Java 17", "Spring Boot", "Python", "Node.js", "ASP.NET Core", "REST/GraphQL APIs"],
    glow: "from-blue-500/10",
  },
  {
    title: "Frontend Architecture",
    description: "Zero-latency, responsive user interfaces.",
    icon: <Layout size={24} className="text-gold-primary" />,
    technologies: ["Next.js", "ReactJS", "TypeScript", "Tailwind CSS", "Material UI", "Framer Motion"],
    glow: "from-gold-primary/10",
  },
  {
    title: "Cloud, DevOps & Data",
    description: "Resilient infrastructure and distributed databases.",
    icon: <Cloud size={24} className="text-gold-primary" />,
    technologies: ["AWS", "Docker", "PostgreSQL", "MongoDB", "Cloudflare", "Vercel / Render"],
    glow: "from-emerald-500/10",
  },
];

// TS bypass for Vercel
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export const TechStack = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-black border-y border-white/5">
      {/* Ambient background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Powered by <br className="hidden md:block" />
            <span className="text-gradient-gold drop-shadow-sm">Enterprise Technology</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-lightGray font-light leading-relaxed text-balance"
          >
            We engineer solutions using the same modern, high-performance tech stacks trusted by industry leaders and global enterprises.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {stackCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 hover:border-gold-primary/30 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Internal Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.glow} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-primary/10 group-hover:border-gold-primary/30 transition-all duration-500">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
                  <p className="text-sm text-brand-lightGray/70 font-light">{category.description}</p>
                </div>
              </div>

              {/* Tech Badges Grid */}
              <div className="flex flex-wrap gap-2 relative z-10 mt-8">
                {category.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 text-xs font-medium text-brand-lightGray bg-white/5 border border-white/10 rounded-lg hover:bg-gold-primary/10 hover:text-gold-primary hover:border-gold-primary/30 transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};