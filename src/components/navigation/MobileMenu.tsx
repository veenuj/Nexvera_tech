"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  links: { name: string; href: string }[];
}

export const MobileMenu = ({ isOpen, setIsOpen, links }: MobileMenuProps) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-2xl pt-28 px-6 pb-6 flex flex-col h-[100dvh]"
        >
          <div className="flex flex-col gap-6 flex-1 overflow-y-auto">
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white flex justify-between items-center py-4 border-b border-white/5 hover:text-gold-primary transition-colors"
                >
                  {link.name} <ChevronRight className="text-gold-primary opacity-50" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-auto pt-8 border-t border-white/10"
          >
            <p className="text-sm text-brand-lightGray/60 mb-4">Ready to architect your solution?</p>
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full h-14 rounded-full bg-gold-gradient text-brand-black font-bold text-lg"
            >
              Talk to Experts
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};