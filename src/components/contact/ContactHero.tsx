"use client";

import React from "react";
import { motion } from "framer-motion";

export const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 text-balance"
          >
            Let's build something <br />
            <span className="text-gradient-gold">extraordinary.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed text-balance"
          >
            Connect with our engineering experts to discuss your architectural challenges, AI integration plans, or custom software requirements.
          </motion.p>
        </div>
      </div>
    </section>
  );
};