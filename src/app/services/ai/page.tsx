"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, MessageSquareCode, Workflow, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const aiCapabilities = [
  "Advanced Retrieval-Augmented Generation (RAG) frameworks linking internal data silos securely.",
  "Autonomous Multi-Agent application systems designed to run complex operations independently.",
  "Bespoke Large Language Model integrations fine-tuned on corporate intelligence datasets.",
  "Custom algorithmic automation replacing error-prone manual administrative processing."
];

export default function AIServicePage() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-primary font-mono text-sm tracking-widest uppercase mb-4"
          >
            Intelligent Automation
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance"
          >
            Applied Artificial Intelligence & <br />
            <span className="text-gradient-gold">Multi-Agent Autonomy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-lightGray font-light max-w-2xl leading-relaxed"
          >
            Move past superficial AI chatbots. We design cognitive automation infrastructure that actively analyzes complex records, runs processes, and makes decisions safely.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <BrainCircuit className="text-gold-primary" size={24} />, title: "RAG Infrastructures", desc: "Connecting secure vector data to LLMs so your staff instantly retrieves accurate insight from thousands of enterprise files." },
            { icon: <MessageSquareCode className="text-gold-primary" size={24} />, title: "Multi-Agent Frameworks", desc: "Designing specialized digital agents that collaborate autonomously to tackle complex, multistep tasks." },
            { icon: <Workflow className="text-gold-primary" size={24} />, title: "Process Automation", desc: "Eliminating administrative friction by setting up intelligent workflows that process context and take direct action." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 relative group hover:border-gold-primary/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-brand-lightGray/80 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Next-Generation AI Implementation</h2>
              <div className="space-y-4">
                {aiCapabilities.map((cap, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-primary shrink-0 mt-1" />
                    <span className="text-brand-lightGray text-sm md:text-base font-light">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 font-mono text-xs text-brand-lightGray/70">
              <p className="text-gold-primary mb-2">// Cognitive Computing Architecture</p>
              <p>Orchestration Frameworks: LangChain / Custom Spring AI</p>
              <p>Model Integration: Enterprise API Gateways & Fined-Tuned Local Systems</p>
              <p>Vector Storage Matrix: Pinecone / pgvector Clustering</p>
              <p>Processing Foundation: Asynchronous Event Streams & Background Tasks</p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Ready to introduce true process intelligence?</h3>
          <Link href="/contact">
            <Button size="lg" className="flex items-center gap-2 mx-auto group">
              Architect Your System
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}