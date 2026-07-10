"use client";

import React from "react";
import { motion } from "framer-motion";

export const PortfolioHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-brand-border/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 text-balance"
          >
            Proven outcomes for <br />
            <span className="text-gradient-gold">industry leaders.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed max-w-2xl text-balance"
          >
            Explore how NexVera engineers deploy scalable SaaS platforms, intelligent AI agents, and robust digital ecosystems to drive measurable enterprise growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
};