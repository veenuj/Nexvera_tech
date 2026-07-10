"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

// src/components/animations/SmoothScroll.tsx

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true 
      }}
    >
      {children as any}
    </ReactLenis>
  );
};