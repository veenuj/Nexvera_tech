"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {/* Logo Area */}
          
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
            <div className="relative h-8 w-auto flex items-center">
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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-brand-lightGray hover:text-gold-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact"><Button size="sm">Talk to Experts</Button></Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Render the full-screen mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} links={navLinks} />
    </>
  );
};