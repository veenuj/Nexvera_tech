"use client";

import React from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css"; // <-- CRITICAL: This fixes the flickering

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, // Slightly lower lerp makes it feel silkier
        duration: 1.5, 
        smoothWheel: true,
        wheelMultiplier: 1, 
        touchMultiplier: 2, // Helps mobile feel more responsive
      }}
    >
      {children}
    </ReactLenis>
  );
};