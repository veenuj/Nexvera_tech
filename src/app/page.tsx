import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";

// Dynamically import below-the-fold components
// This drastically reduces the initial JavaScript bundle sent to the client.
const TrustLogos = dynamic(() => import("@/components/sections/TrustLogos").then(mod => mod.TrustLogos), {
  loading: () => <div className="h-32 bg-brand-charcoal/10 animate-pulse" />, // Skeleton loader
  ssr: true, // Keep Server-Side Rendering enabled for SEO
});

const Features = dynamic(() => import("@/components/sections/Features").then(mod => mod.Features), {
  loading: () => <div className="h-[800px] bg-brand-black" />, // Prevents layout shift
  ssr: true,
});

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero is critical, loads immediately */}
      <Hero />
      
      {/* These will lazy load seamlessly in the background */}
      <TrustLogos />
      <Features />
    </div>
  );
}