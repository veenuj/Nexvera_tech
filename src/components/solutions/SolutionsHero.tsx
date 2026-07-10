"use client";

import React from "react";
import { motion } from "framer-motion";

export const SolutionsHero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-brand-border/50">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 text-balance"
          >
            Transforming complex challenges into <br className="hidden md:block" />
            <span className="text-gradient-gold">competitive advantages.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed max-w-2xl mx-auto text-balance"
          >
            NexVera engineers strategic technological solutions that modernize legacy systems, automate workflows, and unlock exponential growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
};