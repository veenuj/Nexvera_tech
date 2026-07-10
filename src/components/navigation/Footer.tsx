"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-border pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 bg-gold-gradient rounded-lg flex items-center justify-center font-bold text-brand-black text-lg">
                N
              </div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-gold-primary transition-colors">
                NexVera
              </span>
            </Link>
            <p className="text-brand-lightGray/60 text-sm leading-relaxed mb-6">
              Architecting the digital infrastructure of tomorrow with scalable, secure, and intelligent solutions for enterprise leaders.
            </p>
            <a 
              href="mailto:info@nexveratechnologies.com" 
              className="flex items-center gap-2 text-sm text-brand-lightGray hover:text-gold-primary transition-colors"
            >
              <Mail size={16} className="text-gold-primary" />
              info@nexveratechnologies.com
            </a>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-brand-lightGray/60">
              <li><Link href="/services" className="hover:text-gold-primary transition-colors">Custom Software</Link></li>
              <li><Link href="/services" className="hover:text-gold-primary transition-colors">SaaS Development</Link></li>
              <li><Link href="/services" className="hover:text-gold-primary transition-colors">Enterprise AI Agents</Link></li>
              <li><Link href="/services" className="hover:text-gold-primary transition-colors">Cloud Architecture</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-brand-lightGray/60">
              <li><Link href="/about" className="hover:text-gold-primary transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-gold-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/industries" className="hover:text-gold-primary transition-colors">Industries</Link></li>
              <li><Link href="/blog" className="hover:text-gold-primary transition-colors">Engineering Blog</Link></li>
            </ul>
          </div>

          {/* Legal & Support Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-brand-lightGray/60">
              <li><Link href="#" className="hover:text-gold-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gold-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-gold-primary transition-colors">Security & SOC-2</Link></li>
              <li><Link href="/contact" className="hover:text-gold-primary transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-lightGray/40">
            © {currentYear} NexVera Technologies. All rights reserved.
          </p>
          <div className="text-xs text-brand-lightGray/40">
            Engineered for infinite scale.
          </div>
        </div>
      </div>
    </footer>
  );
};