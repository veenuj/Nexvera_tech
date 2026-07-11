"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Terminal, Code2, BrainCircuit } from "lucide-react";

const team = [
  {
    name: "Anuj Dhiman",
    role: "Principal Software Consultant & AI Architect",
    bio: "Masterminding scalable enterprise architectures, full-stack software development, and the integration of next-generation Multi-Agent AI systems.",
    website: "https://anujdhiman.com",
    email: "mailto:info@nexveratechnologies.com",
    icons: [<Terminal key="1" size={16} />, <Code2 key="2" size={16} />, <BrainCircuit key="3" size={16} />]
  },
];

export const LeadershipTeam = () => {
  return (
    <section className="py-24 relative bg-brand-charcoal/20 border-t border-brand-border/50 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Executive <span className="text-gradient-gold">Leadership</span>
          </h2>
          <p className="text-lg text-brand-lightGray/80">
            Guided by elite technical expertise and a deep understanding of enterprise-scale software engineering and AI automation.
          </p>
        </div>

        {/* Centered Grid for the single leader */}
        <div className="flex justify-center">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-2xl group"
            >
              <div className="glass-panel p-10 md:p-12 rounded-3xl border border-white/5 hover:border-gold-primary/30 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center">
                
                {/* Subtle internal gradient sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-primary/0 via-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Abstract Tech Icons (replaces the image) */}
                <div className="flex gap-4 mb-8 text-gold-primary/60 group-hover:text-gold-primary transition-colors duration-500">
                  {member.icons}
                </div>

                {/* Details */}
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-gold-primary font-medium text-lg mb-6">
                  {member.role}
                </p>
                
                <p className="text-brand-lightGray leading-relaxed mb-10 max-w-lg mx-auto">
                  {member.bio}
                </p>

                {/* Contact & Links */}
                <div className="flex justify-center gap-6 relative z-10">
                  <a 
                    href={member.email}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold-primary/10 hover:text-gold-primary hover:border-gold-primary/30 transition-all duration-300"
                  >
                    <Mail size={18} />
                    <span className="text-sm font-medium">Contact</span>
                  </a>
                  <a 
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold-primary/10 hover:text-gold-primary hover:border-gold-primary/30 transition-all duration-300"
                  >
                    <Globe size={18} />
                    <span className="text-sm font-medium">Portfolio</span>
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