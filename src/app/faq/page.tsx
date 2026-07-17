"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, MessageSquare, ShieldCheck, Code2, BrainCircuit } from "lucide-react";
import { cn } from "@/utils/cn";

const faqs = [
  {
    category: "Enterprise Software & Tech Stack",
    icon: <Code2 size={20} className="text-gold-primary" />,
    questions: [
      {
        q: "What technologies do you use to build enterprise software?",
        a: "We engineer high-performance backends using Java (Spring Boot), Python, .NET Core, and Node.js. For zero-latency user interfaces, we utilize Next.js, React, and TypeScript. Our database architectures span PostgreSQL, MongoDB, and vector databases for AI integration."
      },
      {
        q: "Can you integrate custom ERP modules into our existing legacy systems?",
        a: "Absolutely. We specialize in building and integrating bespoke ERP modules, billing software, and inventory tracking systems that synchronize seamlessly with your legacy architecture via secure REST and GraphQL APIs without causing downtime."
      }
    ]
  },
  {
    category: "AI Automation & Intelligence",
    icon: <BrainCircuit size={20} className="text-gold-primary" />,
    questions: [
      {
        q: "How do you implement Generative AI into business workflows?",
        a: "We deploy advanced Multi-Agent AI systems, Large Language Models (Gemini/Llama), and Retrieval-Augmented Generation (RAG) frameworks. This allows your software to analyze proprietary data, automate reporting, and execute complex workflows securely."
      },
      {
        q: "Is our proprietary data safe when using your AI solutions?",
        a: "Data security is our top priority. We implement zero-trust architectures and deploy local or private cloud AI models ensuring your corporate data is never used to train public LLMs. We maintain strict compliance with enterprise security protocols."
      }
    ]
  },
  {
    category: "Partnership & Operations",
    icon: <ShieldCheck size={20} className="text-gold-primary" />,
    questions: [
      {
        q: "Where are you located, and do you serve international clients?",
        a: "We are headquartered in Meerut, Uttar Pradesh, serving as a premier tech partner for the surrounding regions (Saharanpur, Roorkee, etc.) while successfully deploying scalable software and digital marketing solutions for enterprise clients globally."
      },
      {
        q: "What is your ongoing support and maintenance policy?",
        a: "Zero downtime is our standard. We provide 24/7 premium technical support, rigorous digital audits, and continuous performance optimization to ensure your cloud infrastructure and web architectures operate flawlessly."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0"); // First question open by default

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <main className="min-h-screen relative bg-brand-black pt-40 pb-32 overflow-hidden border-b border-white/5">
      
      {/* ---------------- LIQUID UI BACKGROUND ---------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-[100%] bg-gradient-to-br from-gold-primary/10 to-transparent blur-[120px] animate-[spin_25s_linear_infinite]" />
        <div className="absolute bottom-[10%] right-[10%] w-[700px] h-[700px] rounded-[100%] bg-gradient-to-tl from-blue-600/10 to-transparent blur-[150px] animate-[spin_35s_linear_infinite_reverse]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-primary/5 rounded-full blur-[150px] pointer-events-none" />
      </div>
      
      {/* Ambient Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-[1]" />
      {/* ------------------------------------------------------ */}

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-gold-primary uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            <MessageSquare size={14} className="text-gold-primary" /> Knowledge Base
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl text-balance"
          >
            Frequently Asked <br />
            <span className="text-gradient-gold">Questions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-brand-lightGray font-light leading-relaxed text-balance"
          >
            Clear, technical, and transparent answers regarding our software architecture, AI automation frameworks, and partnership processes.
          </motion.p>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((section, sectionIndex) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + (sectionIndex * 0.1), ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 px-2">
                {section.icon}
                <h2 className="text-2xl font-bold text-white tracking-tight">{section.category}</h2>
              </div>

              {/* Accordion Container */}
              <div className="flex flex-col gap-4">
                {section.questions.map((faq, qIndex) => {
                  const id = `${sectionIndex}-${qIndex}`;
                  const isOpen = openIndex === id;

                  return (
                    <div 
                      key={id}
                      className={cn(
                        "glass-panel rounded-2xl border transition-all duration-500 overflow-hidden relative group",
                        isOpen 
                          ? "border-gold-primary/40 bg-brand-black/60 shadow-[0_10px_30px_rgba(212,175,55,0.1)]" 
                          : "border-white/10 hover:border-gold-primary/30 bg-white/5 hover:bg-white/10"
                      )}
                    >
                      {/* Interactive Header */}
                      <button
                        onClick={() => toggleFAQ(id)}
                        className="w-full flex items-center justify-between p-6 md:px-8 text-left relative z-10"
                      >
                        <span className={cn(
                          "text-lg font-semibold transition-colors duration-300 pr-8",
                          isOpen ? "text-gold-primary" : "text-white group-hover:text-gold-primary/80"
                        )}>
                          {faq.q}
                        </span>
                        
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500",
                          isOpen 
                            ? "border-gold-primary/50 bg-gold-primary/10 text-gold-primary rotate-180" 
                            : "border-white/20 bg-white/5 text-white/50 group-hover:border-gold-primary/30 group-hover:text-gold-primary"
                        )}>
                          <ChevronDown size={16} />
                        </div>
                      </button>

                      {/* Animated Answer Body */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-brand-lightGray font-light leading-relaxed relative z-10">
                              <div className="w-full h-px bg-gradient-to-r from-gold-primary/20 to-transparent mb-6" />
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Internal Liquid Glow (Visible when open) */}
                      {isOpen && (
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold-primary/5 to-transparent pointer-events-none z-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}