"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Inner Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-gold-primary/10 blur-[100px] pointer-events-none rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to transform your <br className="hidden md:block" />
            <span className="text-gradient-gold">technological landscape?</span>
          </h2>
          <p className="text-lg text-brand-lightGray/80 mb-10 max-w-2xl mx-auto relative z-10 text-balance">
            Partner with NexVera Technologies to architect scalable, secure, and intelligent solutions for your enterprise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <Button size="lg" className="w-full sm:w-auto">
              Book a Consultation
            </Button>
            <Button size="lg" variant="glass" className="w-full sm:w-auto">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};