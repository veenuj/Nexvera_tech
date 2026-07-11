"use client";

import React from "react";
import { ReactLenis } from "lenis/react";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true,
        wheelMultiplier: 1, // Ensures standard mouse wheel behavior
      }}
    >
      {children}
    </ReactLenis>
  );
};