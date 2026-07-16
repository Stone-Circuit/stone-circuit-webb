"use client";

import React from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-0.5 p-0.5 bg-bg-element border border-border-muted rounded-xl">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-lg transition-all duration-150 cursor-pointer ${
          theme === "light"
            ? "bg-bg-base text-turquoise-brand shadow-sm border border-border-muted"
            : "text-text-muted hover:text-text-primary border border-transparent"
        }`}
        title="Light Mode"
        aria-label="Set light theme"
      >
        <Sun className="w-3.5 h-3.5" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-lg transition-all duration-150 cursor-pointer ${
          theme === "dark"
            ? "bg-bg-base text-turquoise-brand shadow-sm border border-border-muted"
            : "text-text-muted hover:text-text-primary border border-transparent"
        }`}
        title="Dark Mode"
        aria-label="Set dark theme"
      >
        <Moon className="w-3.5 h-3.5" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-lg transition-all duration-150 cursor-pointer ${
          theme === "system"
            ? "bg-bg-base text-turquoise-brand shadow-sm border border-border-muted"
            : "text-text-muted hover:text-text-primary border border-transparent"
        }`}
        title="System Preference"
        aria-label="Set system theme"
      >
        <Monitor className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
