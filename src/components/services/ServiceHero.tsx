"use client";

import React from "react";
import { motion } from "framer-motion";

export const ServiceHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-brand-border/50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 text-balance"
          >
            Capabilities engineered for <br />
            <span className="text-gradient-gold">infinite scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed max-w-2xl text-balance"
          >
            From custom SaaS architectures to intelligent AI ecosystems, NexVera Technologies provides the technical foundation for industry leaders.
          </motion.p>
        </div>
      </div>
    </section>
  );
};