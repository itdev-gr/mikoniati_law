import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ContactForm from "@/components/ContactForm";
import { firm } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Saitakis Mykoniati & Partners Law Firm. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const details = [
  {
    label: "Visit",
    lines: firm.address,
  },
  {
    label: "Call",
    lines: [firm.phone],
  },
  {
    label: "Email",
    lines: [firm.email],
  },
  {
    label: "Hours",
    lines: [firm.hours],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="bg-stone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
            {/* Details */}
            <Reveal>
              <div className="space-y-8">
                {details.map((item) => (
                  <div key={item.label} className="border-bronze/60 border-l pl-6">
                    <p className="font-utility text-bronze text-[11px] font-bold tracking-[0.24em] uppercase">
                      {item.label}
                    </p>
                    <div className="text-ink mt-2 space-y-1 text-sm leading-relaxed">
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
                <ImagePlaceholder
                  label="Map / Directions"
                  icon="map"
                  className="aspect-[4/3] w-full"
                />
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
