import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Engineering Blog | NexVera Technologies",
  description: "Technical insights on enterprise SaaS architecture, Generative AI, and modern software development.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      <BlogHero />
      <BlogGrid />
      <CTASection />
    </div>
  );
}