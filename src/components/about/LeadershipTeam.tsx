"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Terminal, Code2, BrainCircuit, Sparkles } from "lucide-react";

const team = [
  {
    name: "Anuj Dhiman",
    role: "Principal Software Consultant & AI Architect",
    bio: "Masterminding scalable enterprise architectures, full-stack software development, and the integration of next-generation Multi-Agent AI systems.",
    website: "https://anujdhiman.com",
    email: "mailto:info@nexveratechnologies.com",
    icons: [<Terminal key="1" size={20} />, <Code2 key="2" size={24} className="text-white" />, <BrainCircuit key="3" size={20} />]
  },
];

export const LeadershipTeam = () => {
  return (
    <section className="py-32 relative bg-brand-black border-t border-white/5 overflow-hidden flex justify-center items-center min-h-[80vh]">
      
      {/* ---------------- LIQUID UI BACKGROUND ---------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Center Accent Liquid Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-[100%] bg-gradient-to-tr from-gold-primary/10 via-transparent to-blue-600/10 blur-[120px] animate-[spin_20s_linear_infinite]" />
        
        {/* Subtle Bottom Ambient Pulse */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gold-primary/5 blur-[150px] rounded-full animate-pulse transition-all duration-1000" />
      </div>
      {/* ------------------------------------------------------ */}

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-gold-primary uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            <Sparkles size={14} className="animate-pulse" /> Engineering Leadership
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl"
          >
            Executive <span className="text-gradient-gold">Leadership</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed text-balance"
          >
            Guided by elite technical expertise and a deep understanding of enterprise-scale software engineering and AI automation.
          </motion.p>
        </div>

        {/* Centered Grid for the single leader */}
        <div className="flex justify-center">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-3xl group"
            >
              <div className="glass-panel p-10 md:p-16 rounded-[2.5rem] border border-white/10 hover:border-gold-primary/40 transition-all duration-700 relative overflow-hidden flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Liquid Hover Glow Layer inside Card */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 to-transparent z-0" />
                <div className="absolute -inset-full bg-gradient-to-tr from-gold-primary/0 via-gold-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-1000 -z-10 blur-2xl" />
                
                {/* Animated Digital Core (Replaces standard photo/icons) */}
                <div className="relative w-32 h-32 mb-10 flex items-center justify-center z-10">
                  <div className="absolute inset-0 bg-gold-primary/20 rounded-full blur-xl group-hover:bg-gold-primary/40 transition-colors duration-700 animate-pulse" />
                  <div className="absolute inset-0 border border-gold-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-2 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-4 border border-white/10 rounded-full bg-brand-black/50 backdrop-blur-sm" />
                  
                  {/* Floating Icons inside Core */}
                  <div className="relative z-10 flex items-center gap-3 text-gold-primary group-hover:scale-110 transition-transform duration-500">
                    {member.icons}
                  </div>
                </div>

                {/* Typography */}
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight group-hover:text-gold-primary transition-colors duration-500">
                    {member.name}
                  </h3>
                  <p className="text-gold-primary font-mono text-sm tracking-widest uppercase mb-8">
                    {member.role}
                  </p>
                  
                  <p className="text-brand-lightGray md:text-lg leading-relaxed mb-12 max-w-xl mx-auto font-light">
                    {member.bio}
                  </p>
                </div>

                {/* Premium Liquid Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto relative z-10">
                  <a 
                    href={member.email}
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-primary text-brand-black font-semibold hover:bg-white hover:text-brand-black transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 group/btn"
                  >
                    <Mail size={18} className="group-hover/btn:animate-bounce" />
                    <span>Contact Direct</span>
                  </a>
                  
                  <a 
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-gold-primary/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md group/btn2"
                  >
                    <Globe size={18} className="text-brand-lightGray group-hover/btn2:text-gold-primary transition-colors" />
                    <span>View Portfolio</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};