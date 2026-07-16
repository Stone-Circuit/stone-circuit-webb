"use client";

import React, { useEffect } from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("System error detected:", error);
  }, [error]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 flex flex-col items-center justify-center animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-bg-panel border border-red-500/20 rounded-xl p-8 shadow-md relative overflow-hidden">
        {/* Top Warning Banner Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-500" />

        {/* Content */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="p-3 bg-red-500/10 border border-red-500/25 rounded-full text-red-500">
            <AlertCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-xl font-bold font-sans text-text-primary tracking-tight">
              Application Error: Execution Halted
            </h1>
            <p className="text-sm text-text-muted">
              An unexpected error occurred in the website routing interface.
            </p>
          </div>

          {/* Diagnostic Code Block */}
          <div className="w-full bg-bg-base border border-border-muted p-4 rounded-xl text-left">
            <div className="text-[10px] font-bold font-mono text-text-disabled uppercase tracking-widest mb-1.5 border-b border-border-muted pb-1">
              Diagnostics
            </div>
            <div className="font-mono text-xs text-red-500 line-clamp-3 overflow-y-auto max-h-20 select-all leading-normal">
              {error.message || "Unknown execution exception"}
              {error.digest && <div className="text-text-disabled mt-1 text-[10px]">Digest: {error.digest}</div>}
            </div>
          </div>

          {/* Action Pair */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button
              onClick={reset}
              variant="outline"
              className="flex-1 font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4 shrink-0" />
              Retry Request
            </Button>
            <Link href="/" className="flex-1">
              <Button
                variant="turquoise"
                className="w-full font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Home className="w-4 h-4 shrink-0" />
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
