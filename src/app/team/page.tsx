import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TeamCard from "@/components/TeamCard";
import CTABand from "@/components/CTABand";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The team of Saitakis Mykoniati & Partners Law Firm. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="The team"
        lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 100}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
