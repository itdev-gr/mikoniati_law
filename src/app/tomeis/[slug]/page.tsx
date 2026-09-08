import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import AreaIcon from "@/components/AreaIcon";
import CTABand from "@/components/CTABand";
import { practiceAreas as builtinAreas } from "@/lib/content";
import { fetchPracticeArea, fetchPracticeAreas } from "@/lib/cms";

export function generateStaticParams() {
  return builtinAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = await fetchPracticeArea(slug);
  if (!area) return {};
  return { title: area.shortName, description: area.short };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [area, all] = await Promise.all([
    fetchPracticeArea(slug),
    fetchPracticeAreas(),
  ]);
  if (!area) notFound();

  const others = all.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero eyebrow="Τομέας δραστηριότητας" title={area.name} lead={area.intro} />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_340px] lg:gap-20">
            <div>
              <Reveal>
                <AreaIcon name={area.icon} className="text-bronze h-14 w-14" />
              </Reveal>
              <Reveal delay={80}>
                <div className="mt-8 max-w-2xl space-y-6 text-base leading-relaxed">
                  {area.body.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </Reveal>

              {area.services.length > 0 && (
                <Reveal delay={140}>
                  <h2 className="text-ink mt-12 text-2xl font-bold">
                    Τι αναλαμβάνουμε
                  </h2>
                  <div className="bg-bronze mt-4 h-1 w-14" aria-hidden />
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {area.services.map((service) => (
                      <li
                        key={service}
                        className="border-hairline flex items-start gap-3 border-l-2 bg-stone/60 px-4 py-3 text-sm leading-relaxed"
                      >
                        <span className="bg-bronze/15 mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                          <svg
                            aria-hidden
                            viewBox="0 0 16 16"
                            className="text-bronze h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                          >
                            <path d="M2 8.5 6 12l8-8" />
                          </svg>
                        </span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>

            {/* Πλαϊνή στήλη */}
            <aside>
              <Reveal delay={120}>
                <div className="bg-ink p-7">
                  <p className="font-display text-bronze text-[12px] font-bold tracking-[0.16em] uppercase">
                    Άλλοι τομείς
                  </p>
                  <ul className="mt-5 space-y-1">
                    {others.map((other) => (
                      <li key={other.slug}>
                        <Link
                          href={`/tomeis/${other.slug}`}
                          className="group flex items-center justify-between gap-3 border-b border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-white"
                        >
                          {other.shortName}
                          <svg
                            aria-hidden
                            viewBox="0 0 16 16"
                            className="text-bronze h-3 w-3 shrink-0 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          >
                            <path d="M1 8h13M9 3l5 5-5 5" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/epikoinonia"
                    className="font-display bg-bronze hover:bg-bronze-light mt-7 inline-flex h-12 w-full items-center justify-center px-6 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors"
                  >
                    Επικοινωνήστε μαζί μας
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
