"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, Home, ArrowRight } from "lucide-react";
import { PremiumCTA } from "@/components/ui/PremiumCTA";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-black text-white flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl">
            <AlertCircle size={32} className="text-gold-primary" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-4 text-white/20">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Signal <span className="text-gradient-gold">Lost.</span>
          </h2>
          
          <p className="text-lg text-brand-lightGray font-light leading-relaxed mb-10 max-w-lg mx-auto">
            The page you are looking for has been moved, deleted, or never existed in our architecture. Let's get you back to familiar territory.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PremiumCTA text="Return to Homepage" href="/" />
            
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300 group"
            >
              Contact Support 
              <ArrowRight size={16} className="text-brand-lightGray group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}