import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";

// Existing dynamic imports
const TrustLogos = dynamic(() => import("@/components/sections/TrustLogos").then(mod => mod.TrustLogos), { ssr: true });
const Features = dynamic(() => import("@/components/sections/Features").then(mod => mod.Features), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs").then(mod => mod.WhyChooseUs), { ssr: true });

// Dynamic import for the new TechStack section
const TechStack = dynamic(() => import("@/components/sections/TechStack").then(mod => mod.TechStack), { ssr: true });

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustLogos />
      <Features />
      <WhyChooseUs />
      {/* Showcasing the modern tech stack to clients directly after Why Choose Us */}
      <TechStack />
    </div>
  );
}