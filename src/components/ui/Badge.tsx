import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "turquoise" | "yellow" | "outline" | "secondary" | "success" | "danger";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-mono font-bold tracking-wide border transition-colors",
        // Variant styling
        variant === "default" && "bg-bg-element border-border-muted text-text-primary",
        variant === "turquoise" && "bg-turquoise-brand-light/40 border-turquoise-brand/20 text-turquoise-brand",
        variant === "yellow" && "bg-warm-yellow-accent/10 border-warm-yellow-accent/20 text-warm-yellow-accent",
        variant === "outline" && "bg-transparent border-border-active text-text-secondary",
        variant === "secondary" && "bg-bg-element border-border-muted text-text-muted",
        variant === "success" && "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
        variant === "danger" && "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400",
        className
      )}
      {...props}
    />
  );
}
