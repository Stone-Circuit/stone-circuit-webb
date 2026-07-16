"use client";

import React, { useState } from "react";
import { BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Metric {
  name: string;
  unit: string;
  data: { label: string; value: number; displayValue: string; percentage: number; isOperant: boolean }[];
}

export default function BenchmarkChart() {
  const [metricKey, setMetricKey] = useState<"time" | "setup">("time");

  const metrics: Record<"time" | "setup", Metric> = {
    time: {
      name: "Average Workflow Processing Time",
      unit: "Minutes (Lower is Better)",
      data: [
        { label: "Operant OS (Automated)", value: 1.25, displayValue: "1.25 min", percentage: 15, isOperant: true },
        { label: "Custom Scripting Pipelines", value: 5.12, displayValue: "5.12 min", percentage: 60, isOperant: false },
        { label: "Manual Workflow Handoffs", value: 8.45, displayValue: "8.45 min", percentage: 100, isOperant: false }
      ]
    },
    setup: {
      name: "Integration Setup Overhead",
      unit: "Hours (Lower is Better)",
      data: [
        { label: "Operant OS (Connector Bus)", value: 4, displayValue: "4 hours", percentage: 5, isOperant: true },
        { label: "Custom API Integration", value: 40, displayValue: "40 hours", percentage: 50, isOperant: false },
        { label: "Manual Sync Configuration", value: 80, displayValue: "80 hours", percentage: 100, isOperant: false }
      ]
    }
  };

  const activeMetric = metrics[metricKey];

  return (
    <div className="bg-bg-panel border border-border-muted rounded-xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold font-mono text-turquoise-brand">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>OPERATIONAL METRICS</span>
          </div>
          <h4 className="text-base font-bold text-text-primary">
            {activeMetric.name}
          </h4>
        </div>

        {/* Toggle Controls */}
        <div className="flex bg-bg-base border border-border-muted rounded-xl p-0.5 self-start">
          <button
            onClick={() => setMetricKey("time")}
            className={cn(
              "px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 focus-ring cursor-pointer",
              metricKey === "time"
                ? "bg-bg-element text-turquoise-brand border border-border-active shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Processing Time
          </button>
          <button
            onClick={() => setMetricKey("setup")}
            className={cn(
              "px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 focus-ring cursor-pointer",
              metricKey === "setup"
                ? "bg-bg-element text-turquoise-brand border border-border-active shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Setup Overhead
          </button>
        </div>
      </div>

      {/* Visual Chart Bars */}
      <div className="space-y-4 pt-2">
        {activeMetric.data.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className={cn("font-medium", item.isOperant ? "text-turquoise-brand font-bold" : "text-text-secondary")}>
                {item.label}
              </span>
              <span className="text-text-primary font-bold">{item.displayValue}</span>
            </div>
            
            {/* Outer Bar */}
            <div className="h-6 w-full bg-bg-base border border-border-muted rounded-xl overflow-hidden p-0.5">
              {/* Inner Animating Fill */}
              <div
                style={{ width: `${item.percentage}%` }}
                className={cn(
                  "h-full rounded-lg transition-all duration-500 ease-entrance",
                  item.isOperant 
                    ? "bg-turquoise-brand shadow-md shadow-turquoise-brand/20" 
                    : "bg-bg-element"
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-[10px] font-mono text-text-disabled text-right leading-relaxed">
        * Estimates based on average enterprise workflow deployment logs.
      </div>
    </div>
  );
}
