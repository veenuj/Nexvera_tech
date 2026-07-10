"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-brand-black/70 z-10" />
      
      {/* Subtle Background Glow (The Gold Accent) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-primary/20 rounded-full blur-[120px] pointer-events-none z-10" />
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-white/10 text-brand-lightGray text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold-primary animate-pulse" />
            NexVera AI Engine v2.0 is now live
            <ChevronRight size={16} className="text-gold-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 text-balance"
          >
            Architecting the Future of <br className="hidden md:block" />
            <span className="text-gradient-gold">Enterprise Software</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-lightGray mb-10 max-w-2xl mx-auto font-light leading-relaxed text-balance"
          >
            We build high-performance SaaS platforms, custom AI solutions, and secure digital ecosystems for industry leaders who demand excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto group">
              Request a Proposal
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="glass" className="w-full sm:w-auto">
              Explore Solutions
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};