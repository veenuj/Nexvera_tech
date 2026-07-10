"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Code2, 
  LayoutTemplate, 
  TrendingUp, 
  BrainCircuit, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  Cloud, 
  Headset 
} from "lucide-react";

const features = [
  {
    icon: <Code2 size={24} />,
    title: "Enterprise Custom Software",
    description: "Scalable SaaS platforms and custom ERP solutions engineered for high-growth businesses. We are Meerut's premier software development agency.",
  },
  {
    icon: <LayoutTemplate size={24} />,
    title: "High-Conversion Web Design",
    description: "Award-winning UI/UX and bespoke web design in Meerut. We build ultra-fast, visually stunning websites that turn visitors into loyal clients.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "ROI-Driven Digital Marketing",
    description: "Dominate search engines with advanced SEO services, targeted lead generation, and data-backed social media marketing campaigns.",
  },
  {
    icon: <BrainCircuit size={24} />,
    title: "Next-Gen AI Automation",
    description: "Integrate powerful Artificial Intelligence and Machine Learning models to automate workflows and reduce operational costs effortlessly.",
  },
  {
    icon: <MapPin size={24} />,
    title: "Meerut’s Trusted Tech Partner",
    description: "Local presence, global standards. As a leading IT company in Uttar Pradesh, we provide face-to-face strategic consulting and reliable delivery.",
  },
  {
    icon: <Zap size={24} />,
    title: "Lightning-Fast Architectures",
    description: "Built on modern stacks like Next.js and React. Our web applications pass Core Web Vitals with flying colors for maximum SEO performance.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Bank-Grade Security",
    description: "Your data is your most valuable asset. We implement zero-trust architectures, end-to-end encryption, and rigorous compliance standards.",
  },
  {
    icon: <Cloud size={24} />,
    title: "Scalable Cloud Infrastructure",
    description: "Future-proof your business with seamless AWS and cloud hosting solutions designed to handle massive traffic spikes without breaking a sweat.",
  },
  {
    icon: <Headset size={24} />,
    title: "24/7 Premium Support",
    description: "Zero downtime is our standard. Our dedicated maintenance team provides round-the-clock technical support to keep your systems running flawlessly.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-black">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose <span className="text-gradient-gold">NexVera</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-lightGray font-light"
          >
            The premier partner for Web Design, Custom Software, and Digital Marketing in Meerut. We don't just build websites; we architect digital empires.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl group border border-white/5 hover:border-gold-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gold-primary mb-6 group-hover:scale-110 group-hover:bg-gold-primary/10 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-brand-lightGray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};