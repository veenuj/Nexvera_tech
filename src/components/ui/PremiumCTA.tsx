"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PremiumCTAProps {
  href?: string;
  text?: string;
  className?: string;
}

export const PremiumCTA = ({ 
  href = "/contact", 
  text = "Book a Consultation",
  className = ""
}: PremiumCTAProps) => {
  return (
    <Link href={href} className={`relative inline-flex group ${className}`}>
      {/* Animated Outer Glow (Expands on Hover) */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-primary/30 to-gold-primary/0 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-700 group-hover:duration-200" />
      
      {/* Main Button Body */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex items-center gap-2 px-8 py-3.5 bg-brand-black border border-white/10 rounded-full overflow-hidden transition-colors duration-300 group-hover:border-gold-primary/50"
      >
        {/* Internal Shimmer Sweep Effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-primary/10 to-transparent group-hover:animate-shimmer" />

        {/* Text and Icon */}
        <span className="relative z-10 text-sm md:text-base font-semibold text-white tracking-wide flex items-center gap-2">
          {text}
          <ArrowRight 
            size={18} 
            className="text-gold-primary group-hover:translate-x-1 transition-transform duration-300" 
          />
        </span>
      </motion.div>
    </Link>
  );
};