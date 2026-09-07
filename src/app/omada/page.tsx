import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TeamCard from "@/components/TeamCard";
import CTABand from "@/components/CTABand";
import { fetchTeam } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Η Ομάδα",
  description:
    "Οι εταίροι του Δικηγορικού Γραφείου Σαϊτάκης – Μυκωνιάτη: Κίμων Σαϊτάκης, Επίκουρος Καθηγητής Αστικού Δικαίου ΕΚΠΑ, και Αγγελική Μυκωνιάτη, δικηγόρος παρ’ Αρείω Πάγω και Διαπιστευμένη Διαμεσολαβήτρια.",
};

export default async function TeamPage() {
  const team = await fetchTeam();

  return (
    <>
      <PageHero
        eyebrow="Η Ομάδα"
        title="Εταίροι"
        lead="Η ταυτότητα του Γραφείου διαμορφώνεται από τη συμπληρωματική πορεία των δύο εταίρων του."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={i * 120}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
