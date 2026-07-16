"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { BLOG_POSTS } from "@/constants/blog";

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Systems", "Research", "Design"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center border-b border-border-muted pb-6">
        
        {/* Category Chips */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all duration-150 focus-ring cursor-pointer",
                  isActive
                    ? "bg-turquoise-brand text-white border-turquoise-brand shadow-sm"
                    : "text-text-secondary hover:text-text-primary border-border-muted bg-bg-panel hover:bg-bg-element"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Local Search Input */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          <Input
            type="text"
            className="pl-10 w-full"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="py-12 text-center text-sm text-text-muted">
          No articles match your query &ldquo;<span className="text-text-primary font-medium">{searchQuery}</span>&rdquo;.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full focus-ring rounded-xl">
              <Card
                interactive
                className="flex flex-col justify-between space-y-6 h-full"
              >
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center text-[10px] font-bold font-mono text-text-disabled">
                    <span className="px-2 py-0.5 rounded-md bg-bg-base border border-border-muted text-text-secondary">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-text-muted" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-text-muted" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-turquoise-brand transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="border-t border-border-muted pt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-muted">
                    By {post.author}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-turquoise-brand font-bold group-hover:translate-x-0.5 transition-transform">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
}
