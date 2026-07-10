"use client";

import React from "react";
import { motion } from "framer-motion";

export const IndustriesHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-brand-border/50">
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-gold-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 text-balance"
          >
            Engineering specialized solutions for <br />
            <span className="text-gradient-gold">demanding sectors.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed max-w-2xl mx-auto text-balance"
          >
            We combine deep technical mastery with rigorous industry knowledge. From high-frequency trading platforms to complex automotive management architectures, we build systems that dominate markets.
          </motion.p>
        </div>
      </div>
    </section>
  );
};