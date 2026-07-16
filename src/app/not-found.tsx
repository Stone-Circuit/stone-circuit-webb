import React from "react";
import { AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "404: Page Not Found | Stone Circuit",
  description: "The requested route does not resolve to an active sector in our systems registry.",
};

export default function NotFound() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-1 flex flex-col items-center justify-center animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-bg-panel border border-border-muted rounded-xl p-8 shadow-md relative overflow-hidden">
        {/* Top Turquoise Warning Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-turquoise-brand" />

        {/* Content */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="p-3 bg-turquoise-brand-light border border-turquoise-brand/20 rounded-full text-turquoise-brand">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-xl font-bold font-sans text-text-primary tracking-tight">
              404: Sector Not Found
            </h1>
            <p className="text-sm text-text-secondary leading-relaxed">
              The address space you requested does not resolve to an active routing sector in the Stone Circuit systems registry.
            </p>
          </div>

          {/* Diagnostic Console Panel */}
          <div className="w-full bg-bg-base border border-border-muted p-4 rounded-xl text-left font-mono text-[11px] text-text-muted space-y-1.5">
            <div className="text-[10px] text-text-disabled uppercase tracking-widest border-b border-border-muted pb-1 mb-1 font-bold">
              System Diagnostics
            </div>
            <div className="flex items-center gap-1.5">
              <span>RESOLVE_STATUS:</span>
              <span className="text-turquoise-brand font-bold">404_NOT_FOUND</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>MEM_SECTOR:</span>
              <span>UNALLOCATED_SPACE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>ACTION:</span>
              <span>HALT_AND_REROUTE</span>
            </div>
          </div>

          {/* Return button */}
          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full font-semibold flex items-center justify-center gap-2">
              <Home className="w-4 h-4 shrink-0" />
              Reroute to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
