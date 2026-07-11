"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-black">
      {/* Ambient Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-charcoal/20 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel p-10 md:p-16 lg:p-24 text-center relative overflow-hidden rounded-[2.5rem] border border-white/10 hover:border-gold-primary/30 transition-colors duration-500 shadow-2xl"
        >
          {/* Animated Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-b from-gold-primary/10 to-transparent blur-3xl pointer-events-none rounded-full opacity-60" />
          
          {/* Enterprise Architectural Corner Accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-gold-primary/30 rounded-tl-[2.5rem] opacity-50" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-gold-primary/30 rounded-br-[2.5rem] opacity-50" />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 relative z-10 tracking-tight text-balance">
            Ready to transform your <br className="hidden md:block" />
            <span className="text-gradient-gold drop-shadow-sm">technological landscape?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-brand-lightGray mb-12 max-w-2xl mx-auto relative z-10 text-balance font-light leading-relaxed">
            Partner with NexVera Technologies to architect scalable, secure, and intelligent solutions for your enterprise. Let's build the future together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 relative z-10">
            {/* Standard Next.js internal routing for the main conversion action */}
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2 group">
                Book a Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            {/* Mailto link for direct sales inquiries */}
            <a href="mailto:info@nexveratechnologies.com" className="w-full sm:w-auto">
              <Button size="lg" variant="glass" className="w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-gold-primary/10 hover:border-gold-primary/30 hover:text-gold-primary transition-all duration-300">
                <Mail size={18} />
                Contact Sales
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};