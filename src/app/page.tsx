import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import TeamCard from "@/components/TeamCard";
import ContactForm from "@/components/ContactForm";
import { aboutParagraphs, firm, stats } from "@/lib/content";
import {
  fetchPracticeAreas,
  fetchSiteCopy,
  fetchTeam,
  copyParagraphs,
} from "@/lib/cms";

const reasons = [
  "Επιστημονικά τεκμηριωμένη νομική ανάλυση σε κάθε υπόθεση",
  "Προσωπική ενασχόληση των εταίρων με τον χειρισμό και την εποπτεία",
  "Έγκαιρη αξιολόγηση των νομικών κινδύνων και σαφής στρατηγική",
  "Δικαστική εκπροσώπηση και εξωδικαστική επίλυση διαφορών",
];

export default async function Home() {
  const [areas, team, copy] = await Promise.all([
    fetchPracticeAreas(),
    fetchTeam(),
    fetchSiteCopy(),
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
              <h1 className="text-ink mt-4 text-4xl leading-[1.12] font-bold tracking-tight sm:text-5xl xl:text-[3.4rem]">
                {copy(
                  "home_hero_title",
                  "Νομική υποστήριξη με επιστημονική τεκμηρίωση",
                )}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
                {copy(
                  "home_hero_lead",
                  "Δικηγορικό γραφείο στο κέντρο της Αθήνας, με έμφαση στο Αστικό και Εμπορικό Δίκαιο, τις σύνθετες δικαστικές διαφορές και τη στρατηγική νομική συμβουλευτική.",
                )}
              </p>
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
                title="Πού μπορούμε να σας υποστηρίξουμε"
                lead="Καλύπτουμε το Αστικό και το Εμπορικό Δίκαιο σε όλο τους το εύρος, από τη συμβουλευτική υποστήριξη μέχρι τη δικαστηριακή εκπροσώπηση."
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
                title="Μια συνεργασία με συμπληρωματικές διαδρομές"
                tone="dark"
                lead={about[0]}
              />
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/55">
                {about[1]}
              </p>
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-bronze/60 border-l pl-5">
                    <p className="font-display text-4xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="font-display mt-1 text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/grafeio"
                className="font-display bg-bronze hover:bg-bronze-light mt-10 inline-flex h-12 items-center px-8 text-[13px] font-bold tracking-[0.14em] text-white uppercase transition-colors"
              >
                Περισσότερα για το Γραφείο
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Η Ομάδα */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Η Ομάδα"
              title="Οι εταίροι του Γραφείου"
              align="center"
              lead="Οι εταίροι συμμετέχουν προσωπικά στον χειρισμό και την εποπτεία κάθε υπόθεσης."
            />
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
              <ul className="space-y-4">
                {reasons.map((reason) => (
                  <li
                    key={reason}
                    className="border-hairline flex items-start gap-3 border bg-white p-5 text-sm leading-relaxed"
                  >
                    <span className="bg-bronze/15 mt-[1px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      <svg
                        aria-hidden
                        viewBox="0 0 16 16"
                        className="text-bronze h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 8.5 6 12l8-8" />
                      </svg>
                    </span>
                    {reason}
                  </li>
                ))}
              </ul>
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
                    Email
                  </p>
                  <a
                    href={`mailto:${firm.email}`}
                    className="text-bronze hover:text-bronze-light mt-1 inline-block transition-colors"
                  >
                    {firm.email}
                  </a>
                </div>
                <div>
                  <p className="font-display text-ink text-[11px] font-bold tracking-[0.16em] uppercase">
                    Ώρες λειτουργίας
                  </p>
                  <p className="mt-1">{firm.hours}</p>
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
