import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTABand from "@/components/CTABand";
import { values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Saitakis Mykoniati & Partners Law Firm. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const milestones = [
  {
    year: "1999",
    title: "The firm is founded",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    year: "2008",
    title: "Lorem ipsum dolor",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    year: "2015",
    title: "Consectetur adipiscing",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
  },
  {
    year: "2024",
    title: "Eiusmod tempor",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The firm"
        lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <ImagePlaceholder
                  label="Office interior photo"
                  icon="building"
                  className="aspect-[4/5] w-full"
                />
                <div
                  aria-hidden
                  className="border-bronze/40 absolute -bottom-4 -left-4 -z-10 h-full w-full border"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <SectionHeading
                eyebrow="Our story"
                title="Two names, one standard of counsel"
                lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
              />
              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed">
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Nullam quis risus
                  eget urna mollis ornare vel eu leo. Maecenas faucibus mollis
                  interdum. Aenean lacinia bibendum nulla sed consectetur.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec ullamcorper nulla non metus auctor
                  fringilla. Vestibulum id ligula porta felis euismod semper.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our approach"
              title="What we hold ourselves to"
              align="center"
              lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="border-hairline h-full border bg-white p-8">
                  <div className="bg-bronze h-8 w-px" aria-hidden />
                  <h3 className="font-display text-ink mt-5 text-2xl font-medium">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Milestones" title="A brief history" />
          </Reveal>
          <div className="border-hairline mt-16 max-w-3xl border-l">
            {milestones.map((item, i) => (
              <Reveal key={item.year} delay={i * 100}>
                <div className="relative pb-14 pl-10 last:pb-0">
                  <span
                    aria-hidden
                    className="bg-bronze absolute top-1 -left-[3px] h-[7px] w-[7px] rounded-full"
                  />
                  <p className="font-utility text-bronze text-[12px] font-bold tracking-[0.28em]">
                    {item.year}
                  </p>
                  <h3 className="font-display text-ink mt-2 text-2xl font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
