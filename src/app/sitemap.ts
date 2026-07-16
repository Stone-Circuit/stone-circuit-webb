import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/constants/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stonecircuit.com";
  
  const staticRoutes = [
    "", 
    "/products", 
    "/vision", 
    "/about", 
    "/contact", 
    "/blog", 
    "/research",
    "/legal/privacy",
    "/legal/terms"
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogEntries = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
