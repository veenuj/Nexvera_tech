"use client";

import React from "react";
import { motion } from "framer-motion";

export const BlogHero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden border-b border-brand-border/50">
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[300px] bg-gold-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 text-balance"
          >
            Engineering Insights & <br className="hidden md:block" />
            <span className="text-gradient-gold">Technical Perspectives.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed max-w-2xl mx-auto text-balance"
          >
            Deep dives into enterprise software architecture, Generative AI integration, and the future of scalable digital ecosystems by the NexVera engineering team.
          </motion.p>
        </div>
      </div>
    </section>
  );
};