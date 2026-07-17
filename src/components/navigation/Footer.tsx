import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

// Inline SVG components to replace the deprecated lucide-react brand icons
const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={20} />, 
      href: "https://www.linkedin.com/company/nexvera-technologies/"
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={20} />, 
      href: "https://instagram.com/nexvera.technologies"
    },
    { 
      name: "Facebook", 
      icon: <Facebook size={20} />, 
      href: "https://www.facebook.com/share/1PfiSwfMAS/"
    },
  ];

  return (
    <footer className="relative bg-brand-black pt-20 pb-8 border-t border-white/10 overflow-hidden">
      
      {/* ---------------- LIQUID UI BACKGROUND ---------------- */}
      {/* Base Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[100px] z-[5]" />
      
      {/* Animated Liquid Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[1] pointer-events-none opacity-50">
        {/* Gold Liquid Blob */}
        <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] rounded-[100%] bg-gradient-to-br from-gold-primary/20 to-transparent blur-[120px] animate-[spin_25s_linear_infinite]" />
        
        {/* Secondary Blue/Gray Liquid Blob */}
        <div className="absolute -bottom-[50%] -right-[10%] w-[60%] h-[150%] rounded-[100%] bg-gradient-to-tl from-white/10 to-transparent blur-[100px] animate-[spin_30s_linear_infinite_reverse]" />
        
        {/* Center Accent Blob */}
        <div className="absolute top-[20%] left-[30%] w-[40%] h-[60%] rounded-[100%] bg-gold-primary/10 blur-[150px] animate-pulse transition-all duration-1000" />
      </div>
      
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent z-10" />
      {/* ------------------------------------------------------ */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Socials Section */}
          <div className="md:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                NexVera <span className="text-gradient-gold">Technologies</span>
              </h2>
            </Link>
            <p className="text-brand-lightGray text-sm leading-relaxed max-w-sm mb-8">
              Architecting Your Digital Empire. We deliver high-performance custom software, AI automation, and ROI-driven digital marketing for enterprise clients globally.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-lightGray hover:bg-gold-primary/20 hover:text-gold-primary transition-all duration-500 border border-white/10 hover:border-gold-primary/50 group backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/software" className="text-sm text-brand-lightGray hover:text-gold-primary transition-colors duration-300">
                  Enterprise Software
                </Link>
              </li>
              <li>
                <Link href="/services/ai" className="text-sm text-brand-lightGray hover:text-gold-primary transition-colors duration-300">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/services/web" className="text-sm text-brand-lightGray hover:text-gold-primary transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="text-sm text-brand-lightGray hover:text-gold-primary transition-colors duration-300">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas Section (Programmatic SEO Links) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-4">
              {['Meerut', 'Saharanpur', 'Muzaffarnagar', 'Roorkee', 'Haridwar', 'Shamli', 'Baghpat'].map((city) => (
                <li key={city}>
                  <Link href={`/locations/${city.toLowerCase()}`} className="text-sm text-brand-lightGray hover:text-gold-primary transition-colors duration-300">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-brand-lightGray group">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold-primary/10 group-hover:border-gold-primary/30 transition-colors duration-300">
                  <Mail size={14} className="text-gold-primary shrink-0" />
                </div>
                <a href="mailto:info@nexveratechnologies.com" className="hover:text-gold-primary transition-colors duration-300">
                  info@nexveratechnologies.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Engineered By */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative">
          
          {/* Copyright */}
          <p className="text-brand-lightGray text-sm text-center md:text-left">
            &copy; {currentYear} NexVera Technologies. All rights reserved.
          </p>

          {/* Legal Pages (Required for Ads) */}
          <div className="flex gap-6 text-sm text-brand-lightGray">
            <Link href="/privacy" className="hover:text-gold-primary transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-primary transition-colors duration-300">Terms of Service</Link>
          </div>

          {/* Engineered By */}
          <div className="text-brand-lightGray text-sm flex items-center gap-1.5">
            Engineered by
            <a 
              href="https://anujdhiman.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-gold-primary transition-colors duration-300 border-b border-transparent hover:border-gold-primary/50"
            >
              Anuj Dhiman
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};