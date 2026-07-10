import type { Metadata } from "next";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsFeature } from "@/components/solutions/SolutionsFeature";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Enterprise Solutions | NexVera Technologies",
  description: "Strategic technological solutions for legacy modernization, workflow automation, and data analytics.",
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      <SolutionsHero />
      <SolutionsFeature />
      <CTASection />
    </div>
  );
}