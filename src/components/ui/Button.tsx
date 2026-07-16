import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "turquoise" | "yellow" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "turquoise", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-xl focus-ring cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none",
          // Variant styling
          variant === "turquoise" && 
            "bg-turquoise-brand hover:bg-turquoise-brand-hover text-white shadow-sm border border-turquoise-brand-hover hover:shadow-md hover:shadow-turquoise-brand/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-98",
          variant === "yellow" && 
            "bg-warm-yellow-accent hover:bg-warm-yellow-accent-hover text-slate-950 shadow-sm border border-warm-yellow-accent-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-98",
          variant === "outline" && 
            "border border-border-active bg-bg-base hover:bg-bg-element text-text-primary hover:-translate-y-0.5 active:translate-y-0 active:scale-98",
          variant === "secondary" && 
            "bg-bg-element hover:bg-border-muted border border-border-muted text-text-primary hover:-translate-y-0.5 active:translate-y-0 active:scale-98",
          variant === "ghost" && 
            "bg-transparent hover:bg-bg-element text-text-secondary hover:text-text-primary",
          // Sizes (8-point system offsets)
          size === "sm" && "px-3.5 py-1.5 text-xs font-mono tracking-wide",
          size === "md" && "px-5 py-2.5 text-sm",
          size === "lg" && "px-7 py-3 text-base",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
