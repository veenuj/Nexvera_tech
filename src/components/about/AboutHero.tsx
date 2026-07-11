"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden border-b border-white/5 bg-brand-black">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Premium Glassmorphism Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-primary/30 bg-gold-primary/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-gold-primary animate-pulse" />
            <span className="text-gold-primary font-mono text-xs md:text-sm tracking-widest uppercase font-semibold">
              Our Genesis
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 text-balance"
          >
            Architecting the digital <br className="hidden md:block" />
            <span className="text-gradient-gold drop-shadow-sm">infrastructure of tomorrow.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed max-w-2xl mx-auto text-balance"
          >
            NexVera Technologies was founded on a singular principle: to bridge the gap between complex enterprise challenges and elegant, scalable software solutions.
          </motion.p>
          
          {/* Elegant Animated Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 60 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
            className="w-px bg-gradient-to-b from-gold-primary/60 to-transparent mt-16"
          />
        </div>
      </div>
    </section>
  );
};