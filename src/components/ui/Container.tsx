import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  clean?: boolean;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, clean = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full mx-auto",
          !clean && "max-w-7xl px-4 sm:px-8 lg:px-12 py-8 sm:py-16 lg:py-24 space-y-8 sm:space-y-16",
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
