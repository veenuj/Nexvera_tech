import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={20} />, 
      href: "https://www.linkedin.com/company/nexvera-technologies/" // TODO: Replace with real link
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={20} />, 
      href: "https://instagram.com/nexvera.technologies" // TODO: Replace with real link
    },
    { 
      name: "Facebook", 
      icon: <Facebook size={20} />, 
      href: "https://www.facebook.com/share/1H364T1bQP/" // TODO: Replace with real link
    },
  ];

  return (
    <footer className="relative bg-brand-black pt-20 pb-8 border-t border-white/10 overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Socials Section */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold text-white">
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
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-lightGray hover:bg-gold-primary/10 hover:text-gold-primary transition-all duration-300 border border-white/5 hover:border-gold-primary/30 group"
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
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/software" className="text-sm text-brand-lightGray hover:text-gold-primary transition-colors">
                  Enterprise Software
                </Link>
              </li>
              <li>
                <Link href="/services/ai" className="text-sm text-brand-lightGray hover:text-gold-primary transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/services/web" className="text-sm text-brand-lightGray hover:text-gold-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="text-sm text-brand-lightGray hover:text-gold-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-6">Headquarters</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-brand-lightGray">
                <MapPin size={18} className="text-gold-primary shrink-0 mt-0.5" />
                <span>Meerut, Uttar Pradesh<br />India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-lightGray">
                <Mail size={18} className="text-gold-primary shrink-0" />
                <a href="mailto:info@nexveratechnologies.com" className="hover:text-gold-primary transition-colors">
                  info@nexveratechnologies.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Engineered By */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-lightGray text-sm text-center md:text-left">
            &copy; {currentYear} NexVera Technologies. All rights reserved.
          </p>
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