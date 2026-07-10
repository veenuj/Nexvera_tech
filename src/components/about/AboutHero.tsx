"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-brand-border/50">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold-primary font-mono text-sm tracking-widest uppercase mb-6"
          >
            Our Genesis
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 text-balance"
          >
            Architecting the digital <br className="hidden md:block" />
            <span className="text-gradient-gold">infrastructure of tomorrow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed max-w-2xl mx-auto text-balance"
          >
            NexVera Technologies was founded on a singular principle: to bridge the gap between complex enterprise challenges and elegant, scalable software solutions.
          </motion.p>
        </div>
      </div>
    </section>
  );
};