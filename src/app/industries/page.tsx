import type { Metadata } from "next";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustryGrid } from "@/components/industries/IndustryGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industries We Serve | NexVera Technologies",
  description: "Specialized enterprise software and AI solutions for Finance, Automotive, Healthcare, Logistics, and E-commerce sectors.",
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full">
      <IndustriesHero />
      <IndustryGrid />
      <CTASection />
    </div>
  );
}