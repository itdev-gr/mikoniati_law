import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import CTABand from "@/components/CTABand";
import { fetchPracticeAreas } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Τομείς Δραστηριότητας",
  description:
    "Κληρονομικό δίκαιο, αποζημιώσεις, εταιρικό και εμπορικό δίκαιο, ακίνητα και Κτηματολόγιο, τραπεζικό δίκαιο, διαμεσολάβηση, απαλλοτριώσεις και κανονιστική συμμόρφωση.",
};

export default async function PracticeAreasPage() {
  const areas = await fetchPracticeAreas();

  return (
    <>
      <PageHero
        eyebrow="Εξειδίκευση"
        title="Τομείς δραστηριότητας"
        lead="Παρέχουμε ολοκληρωμένες νομικές υπηρεσίες σε επιχειρήσεις, εταιρείες και ιδιώτες, με έμφαση στο Αστικό και Εμπορικό Δίκαιο."
      />
      <section className="bg-stone py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 4) * 80}>
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
