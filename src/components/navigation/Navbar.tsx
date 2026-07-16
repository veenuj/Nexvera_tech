"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Code2, BrainCircuit, Layout, TrendingUp, MapPin } from "lucide-react";
import { PremiumCTA } from "@/components/ui/PremiumCTA";
import { cn } from "@/utils/cn";

const services = [
  { name: "Enterprise Software", href: "/services/software", icon: <Code2 size={16} /> },
  { name: "AI Automation", href: "/services/ai", icon: <BrainCircuit size={16} /> },
  { name: "Web Architecture", href: "/services/web", icon: <Layout size={16} /> },
  { name: "Digital Marketing", href: "/services/marketing", icon: <TrendingUp size={16} /> },
];

const topLocations = [
  { name: "Meerut", href: "/locations/meerut" },
  { name: "Saharanpur", href: "/locations/saharanpur" },
  { name: "Muzaffarnagar", href: "/locations/muzaffarnagar" },
  { name: "Roorkee", href: "/locations/roorkee" },
  { name: "Haridwar", href: "/locations/haridwar" },
  { name: "Shamli", href: "/locations/shamli" },
  { name: "Baghpat", href: "/locations/baghpat" },
];

const standardLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || mobileMenuOpen
            ? "bg-brand-black/80 backdrop-blur-md border-b border-brand-border py-4" 
            : "bg-transparent border-b border-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Custom Logo Area (Preserved exactly as you designed it) */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group relative z-50" 
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Part 1: The Symbol */}
            <div className="relative h-10 w-auto">
                <Image
                  src="/logos/navbar-logo-1.png"
                  alt="NexVera Icon"
                  width={100}
                  height={100}
                  className="h-10 w-auto object-contain"
                  priority
                />
            </div>

            {/* Part 2: The Text */}
            <div className="relative h-8 w-auto flex items-center hidden sm:block">
                <Image
                  src="/logos/navbar-logo-2.png"
                  alt="NexVera Text"
                  width={300}
                  height={60}
                  className="h-8 w-auto object-contain"
                  priority
                />
            </div>
          </Link>

          {/* Desktop Links with Premium Dropdowns */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors hover:text-gold-primary ${pathname === "/" ? "text-gold-primary" : "text-brand-lightGray"}`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold-primary ${pathname.includes("/services") ? "text-gold-primary" : "text-brand-lightGray"}`}>
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-64"
                  >
                    <div className="glass-panel p-2 rounded-2xl border border-white/10 shadow-2xl bg-brand-black/95 backdrop-blur-xl">
                      {services.map((service) => (
                        <Link 
                          key={service.name} 
                          href={service.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-brand-lightGray hover:text-gold-primary transition-colors group"
                        >
                          <span className="text-white/30 group-hover:text-gold-primary transition-colors">{service.icon}</span>
                          <span className="text-sm font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Service Areas Dropdown (Local SEO) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("locations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold-primary ${pathname.includes("/locations") ? "text-gold-primary" : "text-brand-lightGray"}`}>
                Service Areas <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "locations" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "locations" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[400px]"
                  >
                    <div className="glass-panel p-4 rounded-2xl border border-white/10 shadow-2xl bg-brand-black/95 backdrop-blur-xl grid grid-cols-2 gap-1">
                      <div className="col-span-2 px-3 pb-2 mb-2 border-b border-white/10 flex items-center gap-2 text-xs font-mono text-gold-primary uppercase tracking-widest">
                        <MapPin size={12} /> Target Regions
                      </div>
                      {topLocations.map((loc) => (
                        <Link 
                          key={loc.name} 
                          href={loc.href}
                          className="px-4 py-2 rounded-lg hover:bg-white/5 text-sm text-brand-lightGray hover:text-gold-primary transition-colors"
                        >
                          {loc.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Links */}
            {standardLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-gold-primary ${pathname === link.href ? "text-gold-primary" : "text-brand-lightGray"}`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <PremiumCTA text="Start Project" />
            </div>

            <button 
              className="lg:hidden text-white relative z-50 p-2 hover:text-gold-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-2xl border-b border-white/10 flex flex-col pt-28 px-6 lg:hidden h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-6 pb-20">
              <Link href="/" className="text-2xl font-bold text-white border-b border-white/5 pb-4">Home</Link>
              
              <div className="border-b border-white/5 pb-4">
                <h3 className="text-sm font-mono text-gold-primary uppercase tracking-widest mb-4">Services</h3>
                <div className="flex flex-col gap-4 pl-4">
                  {services.map(service => (
                    <Link key={service.name} href={service.href} className="text-lg text-brand-lightGray hover:text-white flex items-center gap-3">
                      {service.icon} {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-b border-white/5 pb-4">
                <h3 className="text-sm font-mono text-gold-primary uppercase tracking-widest mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4 pl-4">
                  {topLocations.map(loc => (
                    <Link key={loc.name} href={loc.href} className="text-brand-lightGray hover:text-white">
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>

              {standardLinks.map(link => (
                <Link key={link.name} href={link.href} className="text-2xl font-bold text-white border-b border-white/5 pb-4">
                  {link.name}
                </Link>
              ))}

              <div className="pt-6">
                <PremiumCTA text="Start Project" className="w-full flex justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};