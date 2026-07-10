"use client";

import React from "react";
import { motion } from "framer-motion";

const companies = ["Acme Corp", "GlobalBank", "Quantum AI", "Nexus Tech", "Stark Ind"];

export const TrustLogos = () => {
  return (
    <section className="py-12 border-y border-brand-border/50 bg-brand-charcoal/30">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-medium text-brand-lightGray/60 mb-8 uppercase tracking-widest">
          Trusted by innovative enterprises worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold text-white/20 grayscale hover:grayscale-0 hover:text-white/60 transition-all duration-300"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};