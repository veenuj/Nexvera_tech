"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Lines of Code Deployed", value: "10M+" },
  { label: "Enterprise Clients", value: "49+" },
  { label: "Global Server Uptime", value: "99.99%" },
  { label: "Years of Excellence", value: "10+" },
];

// Using 'any' to bypass strict TS build errors on Vercel
const statsContainerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const statItemVariants: any = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export const MissionStats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-charcoal/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Mission Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
              Driven by <span className="text-gradient-gold">Precision</span>. <br />
              Defined by <span className="text-gradient-gold">Results</span>.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-primary to-transparent mb-8" />
            
            <p className="text-lg text-brand-lightGray leading-relaxed mb-6 text-balance">
              We reject off-the-shelf compromises. Every architecture we design, every AI model we train, and every line of code we deploy is meticulously engineered to align with your exact operational goals.
            </p>
            <p className="text-lg text-brand-lightGray leading-relaxed text-balance">
              By combining elite engineering talent with rigorous security standards, we empower organizations to innovate without friction and scale without limits.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-6 relative"
          >
            {/* Soft glow behind the stats grid */}
            <div className="absolute inset-0 bg-gold-primary/5 blur-3xl rounded-full pointer-events-none" />

            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={statItemVariants}
                className="glass-panel p-8 text-center flex flex-col justify-center items-center rounded-2xl border border-white/5 hover:border-gold-primary/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(212,175,55,0.1)] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/0 via-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-medium text-brand-lightGray/70 uppercase tracking-widest relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};