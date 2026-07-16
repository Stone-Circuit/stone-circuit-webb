import React from "react";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import { BLOG_POSTS } from "@/constants/blog";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Stone Circuit Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex-1 bg-bg-base text-text-primary transition-colors">
      <Container className="py-16 sm:py-24" clean>
        <div className="max-w-3xl mx-auto px-4 space-y-8 animate-in fade-in duration-200">
          
          {/* Back button */}
          <div>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="flex items-center gap-1.5 -ml-3 text-text-secondary hover:text-text-primary cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to articles</span>
              </Button>
            </Link>
          </div>

          {/* Post Header */}
          <div className="space-y-4 border-b border-border-muted pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold font-mono text-text-disabled">
              <span className="px-2 py-0.5 rounded-md bg-bg-panel border border-border-muted text-text-secondary">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-text-primary">
              {post.title}
            </h1>
            
            <div className="text-sm font-semibold text-text-secondary">
              By {post.author}
            </div>
          </div>

          {/* Post Body (parsed simply as markdown-like format) */}
          <article className="max-w-none text-text-secondary leading-relaxed space-y-6 text-sm sm:text-base font-sans">
            {post.content.trim().split("\n\n").map((block, idx) => {
              const trimmedBlock = block.trim();
              if (trimmedBlock.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-text-primary pt-4 tracking-tight">
                    {trimmedBlock.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmedBlock.startsWith("1. ") || trimmedBlock.startsWith("- ")) {
                const items = trimmedBlock.split("\n");
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-2">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        {item.replace(/^\d+\.\s+/, "").replace(/^-\s+/, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (trimmedBlock.startsWith("```")) {
                const codeLines = trimmedBlock.replace(/```/g, "").trim().split("\n");
                return (
                  <pre key={idx} className="font-mono text-xs sm:text-sm text-text-primary bg-bg-panel border border-border-muted p-4 rounded-xl overflow-x-auto leading-relaxed my-4">
                    <code>{codeLines.join("\n")}</code>
                  </pre>
                );
              }
              return (
                <p key={idx} className="whitespace-pre-line">
                  {trimmedBlock}
                </p>
              );
            })}
          </article>

        </div>
      </Container>
    </div>
  );
}
