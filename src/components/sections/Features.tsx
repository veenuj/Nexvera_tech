"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Smartphone, Database, Workflow, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Custom SaaS Development",
    description: "End-to-end architecture and development of scalable web applications tailored to your exact business logic.",
    icon: <Code2 size={24} className="text-gold-primary" />,
  },
  {
    title: "Enterprise AI Solutions",
    description: "Integrate predictive analytics, LLMs, and custom machine learning models into your existing workflows.",
    icon: <BrainCircuit size={24} className="text-gold-primary" />,
  },
  {
    title: "Mobile Ecosystems",
    description: "Native and cross-platform mobile applications designed for high performance and exceptional user experience.",
    icon: <Smartphone size={24} className="text-gold-primary" />,
  },
  {
    title: "API Integrations",
    description: "Seamlessly connect disparate systems, CRMs, and third-party tools to create a unified data infrastructure.",
    icon: <Database size={24} className="text-gold-primary" />,
  },
  {
    title: "Business Automation",
    description: "Replace manual operational bottlenecks with intelligent, automated software workflows.",
    icon: <Workflow size={24} className="text-gold-primary" />,
  },
  {
    title: "Security & Compliance",
    description: "Bank-grade security protocols and infrastructure audits to ensure your data remains protected.",
    icon: <ShieldCheck size={24} className="text-gold-primary" />,
  },
];

export const Features = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Engineering <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-lg text-brand-lightGray">
            We don't just write code; we build resilient digital assets that drive revenue, reduce costs, and scale infinitely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-brand-lightGray/80 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};