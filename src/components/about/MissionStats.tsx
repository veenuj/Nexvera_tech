"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

const stats = [
  { label: "Lines of Code Deployed", value: "10M+" },
  { label: "Enterprise Clients", value: "49+" },
  { label: "Global Server Uptime", value: "99.99%" },
  { label: "Years of Excellence", value: "10+" },
];

// Using 'any' to bypass strict TS build errors on Vercel
const statsContainerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const statItemVariants: any = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const MissionStats = () => {
  return (
    <section className="py-32 relative bg-brand-black border-t border-white/5 overflow-hidden">
      
      {/* ---------------- LIQUID UI BACKGROUND ---------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left Gold Liquid Blob */}
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-[100%] bg-gradient-to-br from-gold-primary/10 to-transparent blur-[120px] animate-[spin_25s_linear_infinite]" />
        
        {/* Right Blue Liquid Blob */}
        <div className="absolute top-[30%] -right-[10%] w-[600px] h-[600px] rounded-[100%] bg-gradient-to-tl from-blue-600/10 to-transparent blur-[120px] animate-[spin_30s_linear_infinite_reverse]" />
      </div>
      {/* ------------------------------------------------------ */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Mission Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            {/* Glassmorphism Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-gold-primary uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Target size={14} className="animate-pulse" /> Mission Parameters
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight text-balance drop-shadow-lg">
              Driven by <span className="text-gradient-gold">Precision</span>. <br />
              Defined by <span className="text-gradient-gold">Results</span>.
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-gold-primary via-gold-primary/50 to-transparent mb-10 rounded-full" />
            
            <p className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed mb-6 text-balance">
              We reject off-the-shelf compromises. Every architecture we design, every AI model we train, and every line of code we deploy is meticulously engineered to align with your exact operational goals.
            </p>
            <p className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed text-balance">
              By combining elite engineering talent with rigorous security standards, we empower organizations to innovate without friction and scale without limits.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-6 relative"
          >
            {/* Center ambient glow behind the grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />

            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={statItemVariants}
                className="glass-panel p-8 text-center flex flex-col justify-center items-center rounded-3xl border border-white/10 hover:border-gold-primary/40 bg-brand-black/40 backdrop-blur-xl transition-all duration-700 group relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] min-h-[200px]"
              >
                {/* Internal Liquid Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 to-transparent z-0" />
                <div className="absolute -inset-full bg-gradient-to-tr from-gold-primary/0 via-gold-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-1000 -z-10 blur-2xl" />
                
                {/* Core Number */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-3 relative z-10 tracking-tighter group-hover:scale-105 transition-transform duration-500">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-xs md:text-sm font-semibold text-gold-primary uppercase tracking-widest relative z-10 group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};