"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);
    
    if (result.success) {
      setIsSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  const inputClasses = "w-full bg-brand-charcoal/50 border border-brand-border rounded-xl px-4 py-3 text-white placeholder:text-brand-lightGray/40 focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/50 transition-all duration-300";

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
      >
        <CheckCircle2 size={64} className="text-gold-primary mb-6" />
        <h3 className="text-3xl font-bold text-white mb-4">Message Received</h3>
        <p className="text-brand-lightGray max-w-sm">
          Thank you for contacting us. Our engineering team will review your inquiry and get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex-1 w-full"
    >
      <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium text-brand-lightGray">First Name</label>
            <input name="firstName" type="text" id="firstName" required className={inputClasses} placeholder="John" />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium text-brand-lightGray">Last Name</label>
            <input name="lastName" type="text" id="lastName" required className={inputClasses} placeholder="Doe" />
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <label htmlFor="workEmail" className="text-sm font-medium text-brand-lightGray">Work Email</label>
          <input name="workEmail" type="email" id="workEmail" required className={inputClasses} placeholder="john@company.com" />
        </div>

        <div className="space-y-2 mb-6">
          <label htmlFor="company" className="text-sm font-medium text-brand-lightGray">Company Name</label>
          <input name="company" type="text" id="company" className={inputClasses} placeholder="Acme Corp" />
        </div>

        <div className="space-y-2 mb-6">
          <label htmlFor="budget" className="text-sm font-medium text-brand-lightGray">Estimated Project Budget</label>
          <select name="budget" id="budget" className={inputClasses}>
            <option value="" disabled selected className="bg-brand-black text-brand-lightGray/40">Select a range...</option>
            <option value="50k-100k" className="bg-brand-black text-white">₹50k - ₹100k</option>
            <option value="100k-250k" className="bg-brand-black text-white">₹100k - ₹250k</option>
            <option value="250k-500k" className="bg-brand-black text-white">₹250k - ₹500k</option>
            <option value="500k+" className="bg-brand-black text-white">₹500k+</option>
            <option value="custom" className="bg-brand-black text-white">Custom Range</option>
          </select>
        </div>

        <div className="space-y-2 mb-8">
          <label htmlFor="message" className="text-sm font-medium text-brand-lightGray">Project Details</label>
          <textarea name="message" id="message" required rows={4} className={`${inputClasses} resize-none`} placeholder="Tell us about your architectural challenges..." />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Request a Proposal"}
        </Button>

        <p className="text-xs text-brand-lightGray/40 text-center mt-6">
          By submitting this form, you agree to our Privacy Policy and Terms of Service.
        </p>
      </form>
    </motion.div>
  );
};