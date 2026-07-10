"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

const posts = [
  {
    id: "01",
    title: "Architecting Multi-Agent Systems for Enterprise Automation",
    excerpt: "Explore how orchestrating specialized AI agents can automate complex, multi-step business workflows with autonomous precision.",
    category: "Generative AI",
    date: "July 2, 2026",
    readTime: "8 min read",
    imageClass: "bg-gradient-to-br from-brand-charcoal to-brand-black",
    featured: true,
  },
  {
    id: "02",
    title: "Optimizing Retrieval-Augmented Generation (RAG) in Production",
    excerpt: "Strategies for improving vector search accuracy and reducing LLM hallucinations when deploying secure internal AI tools.",
    category: "Machine Learning",
    date: "June 28, 2026",
    readTime: "6 min read",
    imageClass: "bg-gradient-to-tr from-[#111] to-[#050505]",
    featured: false,
  },
  {
    id: "03",
    title: "Scaling Full-Stack Microservices with Spring Boot and Next.js",
    excerpt: "A technical teardown of decoupling your frontend presentation layer from heavy Java-based enterprise backend systems.",
    category: "Architecture",
    date: "June 15, 2026",
    readTime: "12 min read",
    imageClass: "bg-gradient-to-bl from-brand-border to-brand-black",
    featured: false,
  },
  {
    id: "04",
    title: "The Transition from Monolith to Event-Driven SaaS",
    excerpt: "How to handle database migrations and state management without interrupting active users across a multi-tenant platform.",
    category: "SaaS Engineering",
    date: "May 30, 2026",
    readTime: "10 min read",
    imageClass: "bg-gradient-to-tl from-gold-primary/10 to-brand-black",
    featured: false,
  },
];

export const BlogGrid = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group cursor-pointer flex flex-col",
                post.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              )}
            >
              {/* Image Container */}
              <div className={cn(
                "glass-panel overflow-hidden relative mb-6 rounded-2xl border-white/5",
                post.featured ? "aspect-[2/1] lg:h-[400px]" : "aspect-[4/3] lg:h-[240px]"
              )}>
                <div className={cn("absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105", post.imageClass)}>
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass-panel border-white/10 bg-brand-black/50 backdrop-blur-md text-xs font-medium text-brand-lightGray">
                  {post.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 px-2">
                <div className="flex items-center gap-4 text-xs font-medium text-brand-lightGray/60 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gold-primary" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gold-primary" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className={cn(
                  "font-bold text-white mb-3 tracking-tight group-hover:text-gold-highlight transition-colors",
                  post.featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                )}>
                  {post.title}
                </h3>
                
                <p className="text-brand-lightGray/80 leading-relaxed text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center text-gold-primary text-sm font-bold group-hover:translate-x-2 transition-transform duration-300">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};