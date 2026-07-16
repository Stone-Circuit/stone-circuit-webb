import React from "react";

export default function Loading() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 flex flex-col justify-center animate-in fade-in duration-200">
      <div className="space-y-8 w-full max-w-3xl">
        {/* Breadcrumb Skeleton */}
        <div className="flex gap-2">
          <div className="h-4 w-12 bg-bg-element rounded-md animate-pulse" />
          <span className="text-text-disabled text-xs">/</span>
          <div className="h-4 w-20 bg-bg-element rounded-md animate-pulse" />
          <span className="text-text-disabled text-xs">/</span>
          <div className="h-4 w-16 bg-bg-element rounded-md animate-pulse" />
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3">
          <div className="h-10 w-2/3 bg-bg-element rounded-md animate-pulse" />
          <div className="h-5 w-1/2 bg-bg-element/70 rounded-md animate-pulse" />
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-border-muted" />

        {/* Body Text Blocks Skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-bg-element/60 rounded-md animate-pulse" />
          <div className="h-4 w-full bg-bg-element/60 rounded-md animate-pulse" />
          <div className="h-4 w-[95%] bg-bg-element/60 rounded-md animate-pulse" />
          <div className="h-4 w-[90%] bg-bg-element/60 rounded-md animate-pulse" />
          <div className="h-4 w-[85%] bg-bg-element/50 rounded-md animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-bg-panel border border-border-muted space-y-4"
            >
              <div className="h-6 w-1/3 bg-bg-element rounded-md animate-pulse" />
              <div className="space-y-2">
                <div className="h-4.5 w-full bg-bg-element/60 rounded-md animate-pulse" />
                <div className="h-4.5 w-[90%] bg-bg-element/60 rounded-md animate-pulse" />
              </div>
              <div className="h-4 w-16 bg-bg-element/85 rounded-md animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
