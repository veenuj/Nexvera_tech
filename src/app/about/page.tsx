import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionStats } from "@/components/about/MissionStats";
import { LeadershipTeam } from "@/components/about/LeadershipTeam";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | NexVera Technologies",
  description: "Learn about NexVera Technologies, our mission to engineer enterprise software, and the leadership team driving our innovation.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <MissionStats />
      <LeadershipTeam />
      <CTASection />
    </div>
  );
}