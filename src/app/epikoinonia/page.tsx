import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { fetchFirmContact, fetchPracticeAreas } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε με το Δικηγορικό Γραφείο Σαϊτάκης – Μυκωνιάτη στο κέντρο της Αθήνας.",
};

export default async function ContactPage() {
  const [areas, contact] = await Promise.all([
    fetchPracticeAreas(),
    fetchFirmContact(),
  ]);

  const details: { label: string; lines: string[] }[] = [
    { label: "Διεύθυνση", lines: contact.address },
    { label: "Τηλέφωνο", lines: contact.phones },
    { label: "Email", lines: [contact.email] },
  ];

  return (
    <>
      <PageHero
        eyebrow="Επικοινωνία"
        title="Επικοινωνήστε με το Γραφείο"
        lead="Περιγράψτε μας συνοπτικά την υπόθεσή σας και θα σας απαντήσουμε το συντομότερο δυνατό, με πλήρη εχεμύθεια."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[340px_1fr] lg:gap-20">
            <Reveal>
              <dl className="space-y-8">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="font-display text-ink text-[11px] font-bold tracking-[0.16em] uppercase">
                      {detail.label}
                    </dt>
                    <dd className="mt-2 space-y-1 text-sm leading-relaxed">
                      {detail.lines.map((line) => {
                        if (line.includes("@")) {
                          return (
                            <a
                              key={line}
                              href={`mailto:${line}`}
                              className="text-bronze hover:text-bronze-light block transition-colors"
                            >
                              {line}
                            </a>
                          );
                        }
                        if (/^\+?[\d\s]+$/.test(line)) {
                          return (
                            <a
                              key={line}
                              href={`tel:${line.replace(/\s/g, "")}`}
                              className="text-bronze hover:text-bronze-light block transition-colors"
                            >
                              {line}
                            </a>
                          );
                        }
                        return <p key={line}>{line}</p>;
                      })}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="border-bronze bg-stone mt-10 border-l-2 p-6 text-sm leading-relaxed">
                <p className="text-ink font-semibold">Σημείωση</p>
                <p className="mt-2">
                  Η αποστολή μηνύματος δεν συνιστά σύναψη σχέσης εντολής.
                  Παρακαλούμε μην αποστέλλετε εμπιστευτικά έγγραφα πριν από τη
                  σχετική συνεννόηση με το Γραφείο.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <ContactForm areas={areas} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
