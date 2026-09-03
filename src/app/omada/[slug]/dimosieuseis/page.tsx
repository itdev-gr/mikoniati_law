import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { team as builtinTeam } from "@/lib/content";
import { fetchPublications, fetchTeamMember } from "@/lib/cms";
import { groupByCategory, publicationsFor } from "@/lib/publications";

export function generateStaticParams() {
  return builtinTeam
    .filter((member) => member.hasPublications)
    .map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = await fetchTeamMember(slug);
  if (!member) return {};
  return {
    title: `Δημοσιεύσεις — ${member.name}`,
    description: `Ο κατάλογος των επιστημονικών δημοσιεύσεων του ${member.name}: βιβλία, συμβολές σε συλλογικά έργα, άρθρα και μελέτες, σχολιασμοί δικαστικών αποφάσεων.`,
  };
}

/** Σταθερό id ενότητας ανά κατηγορία, για την πλοήγηση με άγκυρες. */
const anchorFor = (index: number) => `katigoria-${index + 1}`;

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await fetchTeamMember(slug);
  if (!member || !member.hasPublications) notFound();

  const items = publicationsFor(await fetchPublications(), member.slug);
  const groups = groupByCategory(items);

  return (
    <>
      <section className="bg-ink relative overflow-hidden py-16 sm:py-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 14px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href={`/omada/${member.slug}`}
            className="font-display text-bronze hover:text-bronze-light inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase transition-colors"
          >
            <svg
              aria-hidden
              viewBox="0 0 16 16"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M15 8H2m5-5L2 8l5 5" />
            </svg>
            Βιογραφικό — {member.name}
          </Link>

          <h1 className="mt-6 text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Επιστημονικές Δημοσιεύσεις
          </h1>
          <div className="bg-bronze mt-5 h-1 w-14" aria-hidden />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60">
            {items.length} δημοσιεύσεις σε ελληνικά και διεθνή νομικά περιοδικά,
            συλλογικά έργα και αυτοτελείς εκδόσεις.
          </p>

          {/* Πλοήγηση κατηγοριών */}
          <nav aria-label="Κατηγορίες" className="mt-9 flex flex-wrap gap-3">
            {groups.map((group, i) => (
              <a
                key={group.category}
                href={`#${anchorFor(i)}`}
                className="font-display inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-[12px] font-semibold tracking-[0.1em] text-white/80 uppercase transition-colors hover:border-transparent hover:bg-white/10 hover:text-white"
              >
                {group.category}
                <span className="text-bronze-light">{group.items.length}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {groups.map((group, gi) => (
            <div
              key={group.category}
              id={anchorFor(gi)}
              className={gi > 0 ? "mt-16 scroll-mt-32" : "scroll-mt-32"}
            >
              <Reveal>
                <div className="border-hairline flex items-baseline gap-4 border-b pb-4">
                  <h2 className="text-ink text-2xl font-bold">
                    {group.category}
                  </h2>
                  <span className="font-display text-charcoal/50 text-sm">
                    {group.items.length}
                  </span>
                </div>
              </Reveal>

              <ol className="mt-2">
                {group.items.map((item, i) => (
                  <li
                    key={item.id}
                    className="border-hairline group flex gap-5 border-b py-5"
                  >
                    <span
                      aria-hidden
                      className="font-display text-charcoal/35 w-7 shrink-0 pt-0.5 text-sm tabular-nums"
                    >
                      {i + 1}.
                    </span>
                    <div className="min-w-0">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink hover:text-bronze text-base leading-snug font-semibold transition-colors"
                        >
                          {item.title}
                          <svg
                            aria-hidden
                            viewBox="0 0 16 16"
                            className="ml-1.5 inline h-3 w-3 align-baseline"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          >
                            <path d="M6 3h7v7M13 3 4 12" />
                          </svg>
                        </a>
                      ) : (
                        <p className="text-ink text-base leading-snug font-semibold">
                          {item.title}
                        </p>
                      )}
                      {item.details && (
                        <p className="text-charcoal mt-1.5 text-sm leading-relaxed">
                          {item.details}
                          {item.year && !item.details.includes(String(item.year))
                            ? `, ${item.year}`
                            : ""}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="Χρειάζεστε νομική γνωμοδότηση;"
        lead="Το Γραφείο εκπονεί πλήρως τεκμηριωμένες γνωμοδοτήσεις σε σύνθετα ζητήματα Αστικού και Εμπορικού Δικαίου."
      />
    </>
  );
}
