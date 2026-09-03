import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { firm, team } from "@/lib/content";
import { fetchNews } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Νέα & Αρθρογραφία",
  description:
    "Νέα του Γραφείου και αρθρογραφία των εταίρων σε νομικά και ειδησεογραφικά μέσα.",
};

/** «2026-03-14» → «Μάρτιος 2026». Κενή ημερομηνία δεν εμφανίζεται. */
function dateLabel(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("el-GR", { month: "long", year: "numeric" });
}

export default async function NewsPage() {
  const items = await fetchNews();
  const kimon = team.find((m) => m.slug === "kimon-saitakis");

  return (
    <>
      <PageHero
        eyebrow="Νέα"
        title="Νέα & Αρθρογραφία"
        lead="Δημοσιεύσεις και αρθρογραφία των εταίρων σε νομικά περιοδικά, ειδησεογραφικά και ηλεκτρονικά μέσα."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ul className="space-y-5">
            {items.map((item, i) => (
              <Reveal key={item.id} delay={(i % 4) * 80}>
                <li className="border-hairline hover:border-bronze/60 group border p-7 transition-colors">
                  <div className="font-display text-charcoal/60 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold tracking-[0.14em] uppercase">
                    {item.source && (
                      <span className="text-bronze">{item.source}</span>
                    )}
                    {item.date && (
                      <>
                        <span aria-hidden className="text-charcoal/30">
                          ·
                        </span>
                        <time dateTime={item.date}>{dateLabel(item.date)}</time>
                      </>
                    )}
                  </div>
                  <h2 className="text-ink mt-3 text-xl leading-snug font-bold">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-hover:text-bronze transition-colors"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h2>
                  {item.excerpt && (
                    <p className="mt-3 text-sm leading-relaxed">{item.excerpt}</p>
                  )}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-bronze hover:text-bronze-light mt-5 inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase transition-colors"
                    >
                      Διαβάστε περισσότερα
                      <svg
                        aria-hidden
                        viewBox="0 0 16 16"
                        className="h-3 w-3 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path d="M6 3h7v7M13 3 4 12" />
                      </svg>
                    </a>
                  )}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={100}>
            <div className="bg-ink mt-12 p-8 sm:p-10">
              <p className="font-display text-bronze text-[12px] font-bold tracking-[0.16em] uppercase">
                Αρθρογραφία
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white">
                Τα άρθρα στο NB Daily
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
                Η αρθρογραφία του Κίμωνα Σαϊτάκη στην ηλεκτρονική έκδοση NB Daily
                της Νομικής Βιβλιοθήκης, με τακτικές δημοσιεύσεις σε τρέχοντα
                ζητήματα ιδιωτικού δικαίου.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={firm.nbDaily}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display bg-bronze hover:bg-bronze-light inline-flex h-12 items-center px-7 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors"
                >
                  Δείτε στο NB Daily
                </a>
                {kimon && (
                  <Link
                    href={`/omada/${kimon.slug}/dimosieuseis`}
                    className="font-display inline-flex h-12 items-center border border-white/25 px-7 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-white hover:bg-white/5"
                  >
                    Επιστημονικές δημοσιεύσεις
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
