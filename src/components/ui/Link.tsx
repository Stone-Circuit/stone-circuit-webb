import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { cn } from "@/lib/utils";

export interface LinkProps extends NextLinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  variant?: "default" | "turquoise" | "underline" | "hover-underline";
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        className={cn(
          "transition-all duration-150 focus-ring rounded-md cursor-pointer",
          variant === "default" && "text-text-secondary hover:text-text-primary",
          variant === "turquoise" && "text-turquoise-brand hover:text-turquoise-brand-hover font-semibold",
          variant === "underline" && "text-turquoise-brand underline hover:text-turquoise-brand-hover",
          variant === "hover-underline" && "text-text-secondary hover:text-turquoise-brand hover:underline",
          className
        )}
        {...props}
      />
    );
  }
);

Link.displayName = "Link";
