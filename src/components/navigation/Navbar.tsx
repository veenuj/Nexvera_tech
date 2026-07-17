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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled || mobileMenuOpen
            ? "bg-brand-black/60 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
            : "bg-transparent border-b border-transparent py-6"
        )}
      >
        {/* Navbar Scrolled Liquid Background */}
        <AnimatePresence>
          {isScrolled && !mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
            >
              <div className="absolute -top-[50px] left-[20%] w-[30%] h-[150px] bg-gold-primary/10 blur-[60px] rounded-full animate-[pulse_6s_ease-in-out_infinite]" />
              <div className="absolute -top-[50px] right-[20%] w-[20%] h-[150px] bg-blue-500/10 blur-[60px] rounded-full animate-[pulse_8s_ease-in-out_infinite_reverse]" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
          
          {/* Custom Logo Area */}
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
                  className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-500"
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

          {/* Desktop Links with Premium Liquid Dropdowns */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-all duration-300 hover:text-gold-primary hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] ${pathname === "/" ? "text-gold-primary" : "text-brand-lightGray"}`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:text-gold-primary hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] ${pathname.includes("/services") ? "text-gold-primary" : "text-brand-lightGray"}`}>
                Services <ChevronDown size={14} className={`transition-transform duration-500 ${activeDropdown === "services" ? "rotate-180 text-gold-primary" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-72"
                  >
                    <div className="relative p-2 rounded-2xl border border-white/10 shadow-2xl bg-brand-black/70 backdrop-blur-2xl overflow-hidden">
                      {/* Liquid internal glow */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-primary/20 blur-[40px] rounded-full animate-pulse pointer-events-none" />
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full animate-pulse pointer-events-none delay-700" />
                      
                      <div className="relative z-10">
                        {services.map((service) => (
                          <Link 
                            key={service.name} 
                            href={service.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-brand-lightGray hover:text-gold-primary transition-all duration-300 group/item"
                          >
                            <span className="text-white/30 group-hover/item:text-gold-primary group-hover/item:scale-110 transition-all duration-300">{service.icon}</span>
                            <span className="text-sm font-medium">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Service Areas Dropdown (Local SEO) */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown("locations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:text-gold-primary hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] ${pathname.includes("/locations") ? "text-gold-primary" : "text-brand-lightGray"}`}>
                Service Areas <ChevronDown size={14} className={`transition-transform duration-500 ${activeDropdown === "locations" ? "rotate-180 text-gold-primary" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "locations" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[450px]"
                  >
                    <div className="relative p-5 rounded-2xl border border-white/10 shadow-2xl bg-brand-black/70 backdrop-blur-2xl overflow-hidden">
                      {/* Liquid internal glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-primary/10 blur-[60px] rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
                      
                      <div className="relative z-10 grid grid-cols-2 gap-2">
                        <div className="col-span-2 px-3 pb-3 mb-2 border-b border-white/10 flex items-center gap-2 text-xs font-mono text-gold-primary uppercase tracking-widest">
                          <MapPin size={12} className="animate-pulse" /> Target Regions
                        </div>
                        {topLocations.map((loc) => (
                          <Link 
                            key={loc.name} 
                            href={loc.href}
                            className="px-4 py-2.5 rounded-xl hover:bg-white/5 text-sm text-brand-lightGray hover:text-gold-primary transition-all duration-300 hover:pl-6"
                          >
                            {loc.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Links */}
            {standardLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`text-sm font-medium transition-all duration-300 hover:text-gold-primary hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] ${pathname === link.href ? "text-gold-primary" : "text-brand-lightGray"}`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block relative group">
              <div className="absolute inset-0 bg-gold-primary/20 blur-md rounded-full group-hover:bg-gold-primary/40 transition-colors duration-500 opacity-0 group-hover:opacity-100" />
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

      {/* Full-Screen Mobile Menu Overlay with Liquid Background */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-brand-black/80 backdrop-blur-3xl border-b border-white/10 flex flex-col pt-28 px-6 lg:hidden h-screen overflow-y-auto"
          >
            {/* Liquid Mobile Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
              <div className="absolute -top-[10%] -left-[20%] w-[80%] h-[50%] rounded-full bg-gold-primary/20 blur-[100px] animate-[spin_20s_linear_infinite]" />
              <div className="absolute top-[40%] -right-[20%] w-[70%] h-[60%] rounded-full bg-blue-600/10 blur-[100px] animate-[spin_25s_linear_infinite_reverse]" />
            </div>

            <div className="flex flex-col gap-6 pb-20 relative z-10">
              <Link href="/" className="text-2xl font-bold text-white border-b border-white/5 pb-4 hover:text-gold-primary transition-colors">Home</Link>
              
              <div className="border-b border-white/5 pb-4">
                <h3 className="text-sm font-mono text-gold-primary uppercase tracking-widest mb-4">Services</h3>
                <div className="flex flex-col gap-4 pl-4">
                  {services.map(service => (
                    <Link key={service.name} href={service.href} className="text-lg text-brand-lightGray hover:text-white flex items-center gap-3 transition-colors">
                      <span className="text-gold-primary/70">{service.icon}</span> {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-b border-white/5 pb-4">
                <h3 className="text-sm font-mono text-gold-primary uppercase tracking-widest mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4 pl-4">
                  {topLocations.map(loc => (
                    <Link key={loc.name} href={loc.href} className="text-brand-lightGray hover:text-white transition-colors">
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>

              {standardLinks.map(link => (
                <Link key={link.name} href={link.href} className="text-2xl font-bold text-white border-b border-white/5 pb-4 hover:text-gold-primary transition-colors">
                  {link.name}
                </Link>
              ))}

              <div className="pt-6 w-full relative">
                {/* Glow behind mobile CTA */}
                <div className="absolute inset-0 bg-gold-primary/20 blur-xl rounded-full opacity-50" />
                <PremiumCTA text="Start Project" className="w-full flex justify-center relative z-10" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};