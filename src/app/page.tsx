import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import TeamCard from "@/components/TeamCard";
import ContactForm from "@/components/ContactForm";
import { aboutParagraphs, firm } from "@/lib/content";
import {
  fetchFirmContact,
  fetchPracticeAreas,
  fetchSiteCopy,
  fetchTeam,
  copyParagraphs,
} from "@/lib/cms";

export default async function Home() {
  const [areas, team, copy, contact] = await Promise.all([
    fetchPracticeAreas(),
    fetchTeam(),
    fetchSiteCopy(),
    fetchFirmContact(),
  ]);
  const about = copyParagraphs(copy, "about_body", aboutParagraphs);

  return (
    <>
      {/* Hero */}
      <section className="bg-stone relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <Reveal>
              <p className="font-display text-bronze text-[13px] font-bold tracking-[0.2em] uppercase">
                {firm.name}
              </p>
            </Reveal>
            <Reveal delay={100}>
              {/* Πρόταση, όχι σύνθημα: μικρότερη κλίμακα από τους τίτλους των
                  εσωτερικών σελίδων, ώστε να διαβάζεται σαν κείμενο. */}
              <h1 className="text-ink mt-4 max-w-xl text-2xl leading-snug font-bold tracking-tight sm:text-3xl xl:text-[2.1rem]">
                {copy(
                  "home_hero_title",
                  "Δικηγορικό γραφείο στο κέντρο της Αθήνας, με έμφαση στο Αστικό και Εμπορικό Δίκαιο, τις σύνθετες δικαστικές διαφορές και τη στρατηγική νομική συμβουλευτική.",
                )}
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/epikoinonia"
                  className="font-display bg-bronze hover:bg-bronze-light inline-flex h-13 items-center justify-center px-8 text-[13px] font-bold tracking-[0.14em] text-white uppercase transition-colors"
                >
                  Επικοινωνία
                </Link>
                <Link
                  href="/tomeis"
                  className="font-display border-ink/30 text-ink hover:border-bronze hover:text-bronze inline-flex h-13 items-center justify-center border px-8 text-[13px] font-bold tracking-[0.14em] uppercase transition-colors"
                >
                  Τομείς δραστηριότητας
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div
                aria-hidden
                className="bg-bronze/30 absolute -top-4 -right-4 h-full w-full"
              />
              <div className="relative aspect-4/3 lg:aspect-5/6">
                <Image
                  src="/images/hero-columns.jpg"
                  alt="Νεοκλασικό κτίριο με κίονες"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Τομείς */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Τομείς δραστηριότητας"
                lead="Το Γραφείο μας παρέχει εξειδικευμένες και υψηλής ποιότητας νομικές υπηρεσίες στο πεδίο του Ιδιωτικού Δικαίου."
              />
              <Link
                href="/tomeis"
                className="font-display text-bronze hover:text-bronze-light inline-flex items-center gap-2 pb-1 text-[12px] font-bold tracking-[0.14em] uppercase transition-colors"
              >
                Όλοι οι τομείς
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 8h13M9 3l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 4) * 80}>
                <PracticeAreaCard area={area} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Το Γραφείο + στοιχεία */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div
                  aria-hidden
                  className="bg-bronze absolute -top-5 -left-5 h-2/3 w-2/3"
                />
                <div className="relative aspect-4/3">
                  <Image
                    src="/images/library.jpg"
                    alt="Νομική βιβλιοθήκη"
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <SectionHeading
                eyebrow="Το Γραφείο"
                title="Μία συνεργασία με συμπληρωματικές διαδρομές"
                tone="dark"
                lead={about[0]}
              />
              {about.slice(1, 3).map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 max-w-2xl text-sm leading-relaxed text-white/55"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Η Ομάδα */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Η Ομάδα" title="Εταίροι" align="center" />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={i * 120}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Γνωμοδοτήσεις */}
      <section className="bg-stone py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Νομικές Γνωμοδοτήσεις"
                title="Τεκμηριωμένη γνώμη σε σύνθετα νομικά ζητήματα"
                lead="Το Γραφείο εκπονεί πλήρως τεκμηριωμένες νομικές γνωμοδοτήσεις για ιδιώτες, επιχειρήσεις, δημόσιους οργανισμούς και επαγγελματίες."
              />
              <p className="mt-6 max-w-xl text-sm leading-relaxed">
                Οι γνωμοδοτήσεις εκπονούνται από τον Επίκουρο Καθηγητή Αστικού
                Δικαίου στη Νομική Σχολή Αθηνών Κίμωνα Σαϊτάκη, συνδυάζοντας την
                επιστημονική εμβάθυνση με την πρακτική εφαρμογή του δικαίου.
              </p>
              <Link
                href="/gnomodotiseis"
                className="font-display bg-ink hover:bg-ink-2 mt-8 inline-flex h-12 items-center px-8 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors"
              >
                Δείτε την ενότητα
              </Link>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <div
                  aria-hidden
                  className="bg-bronze/30 absolute -top-4 -right-4 h-full w-full"
                />
                <div className="relative aspect-4/3">
                  <Image
                    src="/images/hero-justice.jpg"
                    alt="Άγαλμα της Θέμιδος"
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Επικοινωνία */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Επικοινωνία"
                title="Επικοινωνήστε με το Γραφείο"
                lead="Συμπληρώστε τη φόρμα και θα σας απαντήσουμε το συντομότερο δυνατό. Κάθε επικοινωνία αντιμετωπίζεται με πλήρη εχεμύθεια."
              />
              <div className="mt-8 space-y-6 text-sm">
                <div>
                  <p className="font-display text-ink text-[11px] font-bold tracking-[0.16em] uppercase">
                    Διεύθυνση
                  </p>
                  <p className="mt-1">{contact.address.join(", ")}</p>
                </div>
                <div>
                  <p className="font-display text-ink text-[11px] font-bold tracking-[0.16em] uppercase">
                    Τηλέφωνο
                  </p>
                  {contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-bronze hover:text-bronze-light mt-1 block transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
                <div>
                  <p className="font-display text-ink text-[11px] font-bold tracking-[0.16em] uppercase">
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-bronze hover:text-bronze-light mt-1 inline-block transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
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
