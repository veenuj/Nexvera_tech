"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MonitorSmartphone, 
  CloudCog, 
  Cpu, 
  LayoutTemplate, 
  Network, 
  Repeat, 
  Megaphone 
} from "lucide-react";

const services = [
  {
    title: "Custom Software Engineering",
    description: "Bespoke, high-performance software tailored to your complex business logic. We build resilient architectures that evolve with your enterprise.",
    icon: <MonitorSmartphone size={28} className="text-gold-primary" />
  },
  {
    title: "SaaS Platform Development",
    description: "End-to-end multi-tenant SaaS development. We handle subscription logic, global state, microservices, and secure user provisioning.",
    icon: <CloudCog size={28} className="text-gold-primary" />
  },
  {
    title: "AI & Machine Learning",
    description: "Integrate LLMs, predictive algorithms, and custom AI agents to automate decision-making and extract deep insights from your data.",
    icon: <Cpu size={28} className="text-gold-primary" />
  },
  {
    title: "Web & Mobile Ecosystems",
    description: "Next-generation web applications and cross-platform native mobile apps designed with world-class UI/UX and zero-latency performance.",
    icon: <LayoutTemplate size={28} className="text-gold-primary" />
  },
  {
    title: "Advanced API Integrations",
    description: "Secure, real-time data pipelines. We connect disparate legacy systems, modern CRMs, and third-party tools into a unified infrastructure.",
    icon: <Network size={28} className="text-gold-primary" />
  },
  {
    title: "Business Automation",
    description: "Eliminate manual bottlenecks. We deploy intelligent robotic process automation (RPA) to streamline operations and reduce overhead.",
    icon: <Repeat size={28} className="text-gold-primary" />
  },
  {
    title: "Enterprise Digital Marketing",
    description: "Data-driven growth strategies, technical SEO, and conversion rate optimization (CRO) tailored for B2B and enterprise software markets.",
    icon: <Megaphone size={28} className="text-gold-primary" />
  }
];

export const ServiceGrid = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-10 md:p-12 hover:border-gold-primary/30 transition-colors duration-500 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-brand-lightGray/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};