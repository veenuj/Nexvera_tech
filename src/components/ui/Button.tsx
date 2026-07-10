"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-gold-gradient text-brand-black font-bold shadow-gold-glow hover:shadow-gold-glow-hover hover:opacity-90",
        glass: "glass-panel bg-white/5 text-white hover:bg-white/10 border-white/10",
        outline: "border border-gold-primary/50 text-gold-primary hover:bg-gold-primary hover:text-brand-black",
        ghost: "text-brand-lightGray hover:text-white hover:bg-white/5",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6",
        lg: "h-14 px-10 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
      return (
        <motion.button
          whileHover={{ y: -2 }}
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref as any}
          {...(props as any)}
        >
          {props.children}
        </motion.button>
      );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };