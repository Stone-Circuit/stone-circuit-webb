import React from "react";
import { Terminal } from "lucide-react";
import { Container } from "@/components/ui/Container";
import BlogList from "@/components/blog/BlogList";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Blog | Stone Circuit",
  description: "Deep-dives and announcements from the Stone Circuit systems engineering, design, and AI research teams.",
  alternates: {
    canonical: "https://stonecircuit.in/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      <Container className="py-16 sm:py-24" clean>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-200">
          
          {/* Page Header */}
          <PageHeader
            title="The Stone Circuit Blog"
            description="Technical papers, implementation blueprints, design language specifications, and security audits published by our builders."
            badge={<><Terminal className="w-3.5 h-3.5" /><span>Engineering Memos</span></>}
            border={false}
          />

          {/* Blog Post List Filter Container */}
          <BlogList />

        </div>
      </Container>
    </div>
  );
}
