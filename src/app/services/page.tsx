import type { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Enterprise Services | NexVera Technologies",
  description: "Explore our elite software engineering, AI integration, SaaS development, and business automation services.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <ServiceHero />
      <ServiceGrid />
      <CTASection />
    </div>
  );
}