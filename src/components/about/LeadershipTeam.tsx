"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react"; // Updated imports

const team = [
  {
    name: "Alexander Vance",
    role: "Chief Executive Officer",
    image: "bg-gradient-to-br from-brand-charcoal to-brand-black",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    image: "bg-gradient-to-bl from-brand-border to-brand-black",
  },
  {
    name: "Marcus Thorne",
    role: "Head of AI Research",
    image: "bg-gradient-to-tr from-brand-charcoal to-brand-black",
  },
  {
    name: "Sarah Jenkins",
    role: "VP of Engineering",
    image: "bg-gradient-to-tl from-[#111] to-[#050505]",
  },
];

export const LeadershipTeam = () => {
  return (
    <section className="py-24 relative bg-brand-charcoal/20 border-t border-brand-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Executive <span className="text-gradient-gold">Leadership</span>
          </h2>
          <p className="text-lg text-brand-lightGray/80">
            Guided by industry veterans with decades of experience in enterprise software, artificial intelligence, and global scale operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Portrait Placeholder */}
              <div className={`w-full aspect-[4/5] rounded-2xl mb-6 relative overflow-hidden ${member.image}`}>
                <div className="absolute inset-0 bg-gold-primary/0 group-hover:bg-gold-primary/10 transition-colors duration-500" />
                
                {/* Contact Overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-gold-primary transition-colors" aria-label="Email Contact">
                    <Mail size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-gold-primary transition-colors" aria-label="Website Profile">
                    <Globe size={18} />
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gold-primary font-medium text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};