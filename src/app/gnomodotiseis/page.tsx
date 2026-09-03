import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { opinionsParagraphs, team } from "@/lib/content";
import { copyParagraphs, fetchSiteCopy } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Νομικές Γνωμοδοτήσεις",
  description:
    "Πλήρως τεκμηριωμένες νομικές γνωμοδοτήσεις για ιδιώτες, επιχειρήσεις, δημόσιους οργανισμούς και επαγγελματίες, σε σύνθετα ζητήματα Αστικού και Εμπορικού Δικαίου.",
};

const offerings = [
  {
    title: "Γνωμοδοτήσεις επί σύνθετων ζητημάτων",
    text: "Διεξοδική μελέτη των πραγματικών περιστατικών και των εγγράφων, με έρευνα νομοθεσίας, νομολογίας και θεωρίας, και σαφή, πρακτικά αξιοποιήσιμα συμπεράσματα.",
  },
  {
    title: "Ανεξάρτητη δεύτερη νομική γνώμη",
    text: "Σε υποθέσεις ιδιαίτερης σημασίας ή πολυπλοκότητας, όπου χρειάζεται μια ανεξάρτητη αποτίμηση της υπάρχουσας στρατηγικής.",
  },
  {
    title: "Υποστήριξη προς δικηγόρους",
    text: "Επιστημονική νομική υποστήριξη προς δικηγόρους και δικηγορικά γραφεία, για αξιοποίηση στο πλαίσιο εκκρεμούς δικαστικής διαδικασίας.",
  },
  {
    title: "Αξιολόγηση νομικού κινδύνου",
    text: "Εντοπισμός και αποτίμηση των ενδεχόμενων νομικών κινδύνων και διαμόρφωση της κατάλληλης δικαστικής ή εξωδικαστικής στρατηγικής.",
  },
];

export default async function OpinionsPage() {
  const copy = await fetchSiteCopy();
  const paragraphs = copyParagraphs(copy, "opinions_body", opinionsParagraphs);
  const kimon = team.find((m) => m.slug === "kimon-saitakis");

  return (
    <>
      <PageHero
        eyebrow="Νομικές Γνωμοδοτήσεις"
        title="Τεκμηριωμένη νομική γνώμη σε σύνθετα ζητήματα"
        lead="Για ιδιώτες, επιχειρήσεις, δημόσιους οργανισμούς, εταιρικά όργανα και επαγγελματίες, σε όλο το φάσμα του Αστικού και του Εμπορικού Δικαίου."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl space-y-6 text-base leading-relaxed">
              {paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </Reveal>

          {kimon && (
            <Reveal delay={120}>
              <div className="border-bronze bg-stone mt-12 max-w-3xl border-l-2 p-8">
                <p className="font-display text-bronze text-[12px] font-bold tracking-[0.16em] uppercase">
                  Εκπόνηση
                </p>
                <p className="text-ink mt-3 text-lg font-bold">{kimon.name}</p>
                <p className="mt-1 text-sm leading-relaxed">
                  {kimon.credentials}
                </p>
                <div className="mt-5 flex flex-wrap gap-4">
                  <Link
                    href={`/omada/${kimon.slug}`}
                    className="font-display text-bronze hover:text-bronze-light text-[12px] font-bold tracking-[0.14em] uppercase transition-colors"
                  >
                    Βιογραφικό →
                  </Link>
                  <Link
                    href={`/omada/${kimon.slug}/dimosieuseis`}
                    className="font-display text-bronze hover:text-bronze-light text-[12px] font-bold tracking-[0.14em] uppercase transition-colors"
                  >
                    Δημοσιεύσεις →
                  </Link>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-stone py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Τι αναλαμβάνουμε"
              title="Μορφές υποστήριξης"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {offerings.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 100}>
                <div className="border-hairline h-full border bg-white p-8">
                  <span aria-hidden className="bg-bronze block h-1 w-10" />
                  <h3 className="text-ink mt-5 text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Ζητήστε νομική γνωμοδότηση"
        lead="Περιγράψτε μας συνοπτικά το ζήτημα και θα σας ενημερώσουμε για το αντικείμενο, το χρονοδιάγραμμα και το κόστος."
      />
    </>
  );
}
