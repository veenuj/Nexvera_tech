import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";

// Keep your existing dynamic imports...
const TrustLogos = dynamic(() => import("@/components/sections/TrustLogos").then(mod => mod.TrustLogos), { ssr: true });
const Features = dynamic(() => import("@/components/sections/Features").then(mod => mod.Features), { ssr: true });

// Add the new Why Choose Us section as a dynamic import
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs").then(mod => mod.WhyChooseUs), { ssr: true });

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustLogos />
      <Features />
      {/* Insert it here */}
      <WhyChooseUs />
    </div>
  );
}