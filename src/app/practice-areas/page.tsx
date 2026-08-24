import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import CTABand from "@/components/CTABand";
import { practiceAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Practice areas of Saitakis Mykoniati & Partners Law Firm. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Practice areas"
        lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <section className="bg-stone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 3) * 100}>
                <PracticeAreaCard area={area} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
