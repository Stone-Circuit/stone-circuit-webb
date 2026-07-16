import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  badge?: React.ReactNode;
  align?: "left" | "center";
  border?: boolean;
}

export function PageHeader({
  className,
  title,
  description,
  badge,
  align = "left",
  border = true,
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4 animate-in fade-in duration-200",
        align === "center" ? "mx-auto text-center max-w-2xl pb-4" : "max-w-3xl pb-8",
        border && "border-b border-border-muted",
        className
      )}
      {...props}
    >
      {badge && (
        <div className={cn("inline-flex items-center gap-1.5 text-xs font-bold font-mono tracking-widest text-turquoise-brand uppercase", align === "center" && "mx-auto")}>
          {badge}
        </div>
      )}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-[1.1]">
        {title}
      </h1>
      {description && (
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed pt-1">
          {description}
        </p>
      )}
    </div>
  );
}
