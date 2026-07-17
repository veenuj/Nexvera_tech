"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center pt-40 pb-24 overflow-hidden border-b border-white/5 bg-brand-black">
      
      {/* ---------------- LIQUID UI BACKGROUND ---------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Right Gold Liquid Blob */}
        <div className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] rounded-[100%] bg-gradient-to-br from-gold-primary/20 to-transparent blur-[120px] animate-[spin_30s_linear_infinite]" />
        
        {/* Bottom Left Blue/Gray Liquid Blob */}
        <div className="absolute -bottom-[30%] -left-[10%] w-[700px] h-[700px] rounded-[100%] bg-gradient-to-tr from-white/5 to-transparent blur-[150px] animate-[spin_35s_linear_infinite_reverse]" />
        
        {/* Center Ambient Pulse */}
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-[100%] bg-gold-primary/5 blur-[120px] animate-pulse transition-all duration-1000" />
      </div>
      {/* ------------------------------------------------------ */}
      
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-[1]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Premium Glassmorphism Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold-primary/30 bg-white/5 backdrop-blur-xl mb-10 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-gold-primary animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <span className="text-gold-primary font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
              Our Genesis
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8 text-balance drop-shadow-2xl"
          >
            Architecting the digital <br className="hidden md:block" />
            <span className="text-gradient-gold">infrastructure of tomorrow.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-2xl text-brand-lightGray font-light leading-relaxed max-w-3xl mx-auto text-balance"
          >
            NexVera Technologies was founded on a singular principle: to bridge the gap between complex enterprise challenges and elegant, scalable software solutions.
          </motion.p>
          
          {/* Elegant Animated Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 80 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-20 flex flex-col items-center"
          >
            {/* The line */}
            <div className="w-[1px] h-20 bg-gradient-to-b from-gold-primary/60 via-gold-primary/20 to-transparent" />
            {/* The moving dot */}
            <motion.div 
              animate={{ y: [0, 60, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-1 h-3 rounded-full bg-gold-primary shadow-[0_0_10px_rgba(212,175,55,1)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};