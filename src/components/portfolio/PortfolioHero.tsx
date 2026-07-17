"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const PortfolioHero = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/10 bg-brand-black">
      
      {/* ---------------- LIQUID UI BACKGROUND ---------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Right Gold Liquid Blob */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-[100%] bg-gradient-to-br from-gold-primary/20 to-transparent blur-[120px] animate-[spin_25s_linear_infinite]" />
        
        {/* Bottom Left Blue/Dark Liquid Blob */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-[100%] bg-gradient-to-tr from-blue-600/15 to-transparent blur-[150px] animate-[spin_30s_linear_infinite_reverse]" />
        
        {/* Center Ambient Pulse */}
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-[100%] bg-gold-primary/5 blur-[120px] animate-pulse transition-all duration-1000" />
      </div>
      {/* ------------------------------------------------------ */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          
          {/* Glassmorphism Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-gold-primary uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            <Sparkles size={14} className="animate-pulse" /> Enterprise Portfolio
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8 text-balance drop-shadow-2xl"
          >
            Proven outcomes for <br />
            <span className="text-gradient-gold">industry leaders.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-2xl text-brand-lightGray font-light leading-relaxed max-w-3xl text-balance"
          >
            Explore how NexVera engineers deploy scalable SaaS platforms, intelligent AI agents, and robust digital ecosystems to drive measurable enterprise growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
};