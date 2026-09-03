import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { aboutParagraphs, stats, values } from "@/lib/content";
import { copyParagraphs, fetchSiteCopy } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Το Γραφείο",
  description:
    "Το Δικηγορικό Γραφείο Σαϊτάκης – Μυκωνιάτη ιδρύθηκε το 2017 και εδρεύει στο κέντρο της Αθήνας, παρέχοντας ολοκληρωμένες νομικές υπηρεσίες σε επιχειρήσεις και ιδιώτες.",
};

export default async function AboutPage() {
  const copy = await fetchSiteCopy();
  const paragraphs = copyParagraphs(copy, "about_body", aboutParagraphs);

  return (
    <>
      <PageHero
        eyebrow="Το Γραφείο"
        title="Ολοκληρωμένες νομικές υπηρεσίες από το 2017"
        lead="Έδρα στο κέντρο της Αθήνας, με έμφαση στο Αστικό και Εμπορικό Δίκαιο, τις σύνθετες δικαστικές διαφορές και την κανονιστική συμμόρφωση επιχειρήσεων."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_400px] lg:gap-20">
            <Reveal>
              <div className="max-w-2xl space-y-6 text-base leading-relaxed">
                {paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div
                  aria-hidden
                  className="bg-bronze/25 absolute -top-4 -right-4 h-full w-full"
                />
                <div className="relative aspect-3/4">
                  <Image
                    src="/images/library.jpg"
                    alt="Νομική βιβλιοθήκη του Γραφείου"
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Στοιχεία */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="border-bronze/60 border-l pl-5">
                  <p className="font-display text-4xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="font-display mt-1 text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Αρχές */}
      <section className="bg-stone py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Η προσέγγισή μας"
              title="Πώς δουλεύουμε"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 4) * 90}>
                <div className="border-hairline h-full border bg-white p-7">
                  <span aria-hidden className="bg-bronze block h-1 w-10" />
                  <h3 className="text-ink mt-5 text-lg font-bold">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed">{value.text}</p>
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
