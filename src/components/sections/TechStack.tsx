"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Server, Layout, Cloud, Network, Database, Link2, Layers, ServerCog, Wand2, Triangle, Sparkles, Brain } from "lucide-react";

// Using Devicon CDN for official tech logos & Lucide for abstract concepts
const stackCategories = [
  {
    title: "Artificial Intelligence",
    description: "Multi-Agent Systems & advanced predictive modeling.",
    icon: <BrainCircuit size={24} className="text-gold-primary" />,
    technologies: [
      { name: "Python", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Multi-Agent AI", type: "icon", Icon: <Network size={14} /> },
      { name: "LLMs (Gemini/Llama)", type: "icon", Icon: <Brain size={14} /> },
      { name: "RAG Frameworks", type: "icon", Icon: <Database size={14} /> },
      { name: "LangChain", type: "icon", Icon: <Link2 size={14} /> },
      { name: "Vector DBs", type: "icon", Icon: <Layers size={14} /> },
    ],
    glow: "from-purple-500/20",
  },
  {
    title: "Core Backend & APIs",
    description: "High-performance, secure server-side architecture.",
    icon: <Server size={24} className="text-gold-primary" />,
    technologies: [
      { name: "Java 17", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Spring Boot", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: ".NET Core", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" },
      { name: "Node.js", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "REST / GraphQL", type: "icon", Icon: <ServerCog size={14} /> },
    ],
    glow: "from-blue-500/20",
  },
  {
    title: "Frontend Architecture",
    description: "Zero-latency, responsive user interfaces.",
    icon: <Layout size={24} className="text-gold-primary" />,
    technologies: [
      { name: "React", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
      { name: "TypeScript", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", type: "icon", Icon: <Wand2 size={14} /> },
    ],
    glow: "from-gold-primary/20",
  },
  {
    title: "Cloud, DevOps & Data",
    description: "Resilient infrastructure and distributed databases.",
    icon: <Cloud size={24} className="text-gold-primary" />,
    technologies: [
      { name: "AWS", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
      { name: "Docker", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "PostgreSQL", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", type: "image", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Vercel", type: "icon", Icon: <Triangle size={14} /> },
    ],
    glow: "from-emerald-500/20",
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
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const TechStack = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-black border-y border-white/5">
      
      {/* ---------------- LIQUID UI BACKGROUND ---------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gold-primary/10 to-transparent blur-[120px] animate-[spin_30s_linear_infinite]" />
        <div className="absolute bottom-[10%] right-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-blue-600/10 to-transparent blur-[150px] animate-[spin_40s_linear_infinite_reverse]" />
      </div>
      
      {/* Ambient Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      {/* ------------------------------------------------------ */}

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          {/* Glassmorphism Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-gold-primary uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            <Sparkles size={14} className="animate-pulse" /> Technology Arsenal
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl text-balance"
          >
            Powered by <br className="hidden md:block" />
            <span className="text-gradient-gold">Enterprise Engineering</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed text-balance"
          >
            We architect solutions using the same modern, high-performance tech stacks trusted by industry leaders and global enterprises.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {stackCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-gold-primary/40 transition-all duration-700 relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]"
            >
              {/* Internal Liquid Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 to-transparent z-0" />
              <div className={`absolute -inset-full bg-gradient-to-tr ${category.glow} via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[spin_6s_linear_infinite] transition-opacity duration-1000 -z-10 blur-2xl`} />
              
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gold-primary/10 group-hover:border-gold-primary/40 transition-all duration-500 shadow-lg">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-gold-primary transition-colors duration-500">{category.title}</h3>
                  <p className="text-brand-lightGray/80 font-light leading-relaxed">{category.description}</p>
                </div>
              </div>

              {/* Tech Badges Grid with Logos */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.technologies.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-gold-primary/10 hover:border-gold-primary/40 transition-all duration-300 cursor-default group/badge hover:-translate-y-0.5"
                  >
                    {/* Render Image or Icon conditionally */}
                    {tech.type === "image" ? (
                      <img 
                        src={tech.src} 
                        alt={`${tech.name} logo`} 
                        className={`w-4 h-4 object-contain ${tech.invert ? "filter invert opacity-80 group-hover/badge:opacity-100" : ""}`}
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-brand-lightGray group-hover/badge:text-gold-primary transition-colors">
                        {tech.Icon}
                      </span>
                    )}
                    
                    <span className="text-sm font-medium text-brand-lightGray group-hover/badge:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};