import type { Metadata } from "next";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Enterprise Portfolio & Case Studies | NexVera Technologies",
  description: "View our track record of engineering scalable SaaS platforms, custom AI solutions, and enterprise software systems.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full">
      <PortfolioHero />
      <PortfolioGrid />
      <CTASection />
    </div>
  );
}