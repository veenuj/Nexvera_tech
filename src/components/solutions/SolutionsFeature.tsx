"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Zap, Shield, LineChart } from "lucide-react";
import { cn } from "@/utils/cn";

const solutions = [
  {
    id: "01",
    title: "Legacy System Modernization",
    description: "Deconstruct monoliths and migrate to scalable, cloud-native microservices. We ensure zero downtime while upgrading your core infrastructure to modern standards, drastically reducing technical debt and operational costs.",
    icon: <Server size={32} className="text-gold-primary" />,
    align: "left",
  },
  {
    id: "02",
    title: "Intelligent Workflow Automation",
    description: "Replace manual, error-prone processes with custom AI agents and robotic process automation (RPA). We build bespoke internal tooling that connects your disparate platforms into a single, cohesive, and automated pipeline.",
    icon: <Zap size={32} className="text-gold-primary" />,
    align: "right",
  },
  {
    id: "03",
    title: "Enterprise Security Architecture",
    description: "Bank-grade security embedded at the code level. We architect solutions with zero-trust protocols, end-to-end encryption, and rigorous compliance standards (SOC 2, HIPAA, GDPR) to protect your most valuable data assets.",
    icon: <Shield size={32} className="text-gold-primary" />,
    align: "left",
  },
  {
    id: "04",
    title: "Data Pipelines & Predictive Analytics",
    description: "Transform siloed data into actionable intelligence. We design robust data warehouses and integrate custom machine learning models that predict trends, optimize pricing, and provide real-time dashboard visibility.",
    icon: <LineChart size={32} className="text-gold-primary" />,
    align: "right",
  },
];

export const SolutionsFeature = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-24">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id} 
              className={cn(
                "flex flex-col md:flex-row items-center gap-12 lg:gap-20",
                solution.align === "right" ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: solution.align === "left" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className="text-gold-primary font-mono text-xl mb-4 font-bold">
                  {solution.id} //
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  {solution.title}
                </h3>
                <p className="text-lg text-brand-lightGray/80 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>

              {/* Visual Side (Abstract Glass Panel representation) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="glass-panel aspect-video relative flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-24 h-24 rounded-full bg-brand-charcoal border border-brand-border flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform duration-500">
                    {solution.icon}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};