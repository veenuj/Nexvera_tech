"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const stats = [
  { label: "Lines of Code Deployed", value: "10M+" },
  { label: "Enterprise Clients", value: "50+" },
  { label: "Global Server Uptime", value: "99.99%" },
  { label: "Years of Excellence", value: "10+" },
];

export const MissionStats = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Mission Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
              Driven by <span className="text-gradient-gold">Precision</span>. <br />
              Defined by <span className="text-gradient-gold">Results</span>.
            </h2>
            <p className="text-lg text-brand-lightGray/80 leading-relaxed mb-6 text-balance">
              We do not believe in off-the-shelf solutions. Every line of code we write, every architecture we design, and every AI model we train is strictly aligned with the unique operational goals of our partners.
            </p>
            <p className="text-lg text-brand-lightGray/80 leading-relaxed text-balance">
              By combining elite engineering talent with rigorous security standards, we empower organizations to innovate without friction and scale without limits.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-panel p-8 text-center flex flex-col justify-center items-center hover:border-gold-primary/30 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-brand-lightGray/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};