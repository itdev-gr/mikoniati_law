import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTABand from "@/components/CTABand";
import { practiceAreas } from "@/lib/content";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return { title: area.name, description: area.short };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const others = practiceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero eyebrow="Practice Area" title={area.name} lead={area.intro} />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_360px]">
            {/* Main content */}
            <div>
              <Reveal>
                <ImagePlaceholder
                  label={`${area.name} photo`}
                  icon="scales"
                  className="aspect-[16/9] w-full"
                />
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-12 max-w-3xl space-y-5 text-base leading-relaxed">
                  {area.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={150}>
                <h2 className="font-display text-ink mt-14 text-3xl font-medium tracking-tight">
                  How we can help
                </h2>
                <div className="bg-bronze mt-4 h-8 w-px" aria-hidden />
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {area.services.map((service) => (
                    <li
                      key={service}
                      className="border-hairline flex items-start gap-3 border-b pb-4 text-sm"
                    >
                      <svg
                        aria-hidden
                        viewBox="0 0 16 16"
                        className="text-bronze mt-[2px] h-4 w-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M2 8.5 6 12l8-8" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside>
              <Reveal delay={200}>
                <div className="border-hairline border bg-white p-8">
                  <h3 className="font-utility text-ink text-[12px] font-bold tracking-[0.24em] uppercase">
                    Other practice areas
                  </h3>
                  <ul className="mt-6 space-y-1">
                    {others.map((other) => (
                      <li key={other.slug}>
                        <Link
                          href={`/practice-areas/${other.slug}`}
                          className="group border-hairline hover:text-bronze flex items-center justify-between border-b py-3 text-sm transition-colors"
                        >
                          {other.name}
                          <svg
                            aria-hidden
                            viewBox="0 0 16 16"
                            className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M1 8h13M9 3l5 5-5 5" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-ink mt-6 p-8">
                  <div className="bg-bronze h-8 w-px" aria-hidden />
                  <h3 className="font-display mt-5 text-2xl font-medium text-white">
                    Need advice on this matter?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                  <Link
                    href="/contact"
                    className="font-utility bg-bronze hover:bg-bronze-light mt-6 inline-flex h-11 items-center px-6 text-[11px] font-semibold tracking-[0.2em] text-white uppercase transition-colors"
                  >
                    Contact us
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
