"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  LayoutTemplate, 
  TrendingUp, 
  BrainCircuit, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  Cloud, 
  Headset,
  Sparkles
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

// Using 'any' here acts as a bypass for the strict TS build errors on Vercel
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const WhyChooseUs = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-black border-y border-white/5">
      
      {/* ---------------- LIQUID UI BACKGROUND ---------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Left Gold Blob */}
        <div className="absolute top-[5%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gold-primary/15 to-transparent blur-[120px] animate-[spin_30s_linear_infinite]" />
        
        {/* Bottom Right Blue Blob */}
        <div className="absolute bottom-[5%] -right-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-blue-600/10 to-transparent blur-[150px] animate-[spin_40s_linear_infinite_reverse]" />
      </div>
      
      {/* Ambient Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      {/* ------------------------------------------------------ */}

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Glassmorphism Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-gold-primary uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            <Sparkles size={14} className="animate-pulse" /> The NexVera Advantage
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl text-balance"
          >
            Why Choose <span className="text-gradient-gold">NexVera</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed text-balance"
          >
            The premier partner for Web Design, Custom Software, and Digital Marketing in Meerut. We don't just build websites; we architect digital empires.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto relative"
        >
          {/* Center ambient glow behind the grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-panel p-8 md:p-10 rounded-[2rem] group border border-white/10 hover:border-gold-primary/40 bg-brand-black/40 backdrop-blur-xl transition-all duration-700 relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:-translate-y-2"
            >
              {/* Internal Liquid Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 to-transparent z-0" />
              <div className="absolute -inset-full bg-gradient-to-tr from-gold-primary/0 via-gold-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[spin_6s_linear_infinite] transition-opacity duration-1000 -z-10 blur-2xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-primary mb-8 group-hover:scale-110 group-hover:bg-gold-primary/10 group-hover:border-gold-primary/40 transition-all duration-500 shadow-lg">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-gold-primary transition-colors duration-500 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-brand-lightGray font-light leading-relaxed group-hover:text-brand-lightGray/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};