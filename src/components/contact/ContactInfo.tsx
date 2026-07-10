"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export const ContactInfo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-1 space-y-8"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">Global Operations</h3>
        <p className="text-brand-lightGray/80">
          Our engineering hubs and client success teams are distributed worldwide to ensure zero-latency support.
        </p>
      </div>

      <div className="space-y-6">
        {/* HQ / Office 1 */}
        <div className="flex items-start gap-4 p-6 glass-panel">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
            <MapPin className="text-gold-primary" size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Meerut-UP</h4>
            <p className="text-brand-lightGray/80 text-sm leading-relaxed">
              NexVera Technologies<br />
              Meerut, UP<br />
              India, 250001
            </p>
          </div>
        </div>

        {/* Direct Contacts */}
        <div className="flex items-center gap-4 p-6 glass-panel">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
            <Mail className="text-gold-primary" size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Enterprise Sales</h4>
            <a href="mailto:info@nexveratechnologies.com" className="text-brand-lightGray/80 text-sm hover:text-gold-primary transition-colors">
              info@nexveratechnologies.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 glass-panel">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
            <Phone className="text-gold-primary" size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Consultation Desk</h4>
            <a href="tel:+917567607581" className="text-brand-lightGray/80 text-sm hover:text-gold-primary transition-colors">
              +91 (756) 760-7581
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};