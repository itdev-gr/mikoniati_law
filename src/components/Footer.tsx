import Link from "next/link";
import Logo from "./Logo";
import { firm, type PracticeArea, type TeamMember } from "@/lib/content";
import type { FirmContact } from "@/lib/cms";

/* Οι «Τομείς» και οι «Εταίροι» έχουν δικές τους στήλες, με την επικεφαλίδα να
   λειτουργεί ως σύνδεσμος προς τη σελίδα-κόμβο· εδώ μένουν οι υπόλοιπες. */
const pages = [
  { href: "/", label: "Αρχική" },
  { href: "/grafeio", label: "Το Γραφείο" },
  { href: "/gnomodotiseis", label: "Νομικές γνωμοδοτήσεις" },
  { href: "/nea", label: "Νέα & αρθρογραφία" },
  { href: "/epikoinonia", label: "Επικοινωνία" },
];

/** Τα δύο τηλέφωνα του γραφείου έχουν σταθερή σειρά — βλ. `firm.phones`. */
const phoneLabels = ["Σταθερό", "Κινητό"];

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.6 8.65 23 10.9 23 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21h-4V9Z" />
    </svg>
  );
}

function ColumnHeading({
  children,
  href,
  id,
}: {
  children: React.ReactNode;
  href?: string;
  id?: string;
}) {
  const classes =
    "font-display text-bronze text-[11px] font-bold tracking-[0.18em] uppercase";
  return (
    <h2 id={id} className={classes}>
      {href ? (
        <Link href={href} className="hover:text-bronze-light transition-colors">
          {children}
        </Link>
      ) : (
        children
      )}
    </h2>
  );
}

const linkClasses = "hover:text-bronze-light block transition-colors";

/**
 * Το υποσέλιδο δουλεύει σαν το κάτω μέρος ενός δικογράφου: πρώτα η ταυτότητα
 * και η έδρα του Γραφείου, μετά το ευρετήριο (τομείς, σελίδες, εταίροι) και
 * τέλος η νομική γραμμή. Οι τομείς μπαίνουν ολόκληροι επειδή είναι ο πιο
 * χρήσιμος τρόπος για να βρει κάποιος την ενότητα που τον αφορά.
 */
export default function Footer({
  contact,
  areas,
  team,
}: {
  contact: FirmContact;
  areas: PracticeArea[];
  team: TeamMember[];
}) {
  return (
    <footer className="bg-ink text-white/55">
      <div className="from-bronze/0 via-bronze to-bronze/0 h-px bg-gradient-to-r" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Επιστολόχαρτο: σήμα και έδρα */}
        <div className="flex flex-col gap-10 py-14 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Δικηγορικό γραφείο στο κέντρο της Αθήνας, με έμφαση στο Αστικό και
              Εμπορικό Δίκαιο.
            </p>
          </div>

          <address className="text-sm leading-relaxed not-italic sm:text-right">
            {contact.address.map((line) => (
              <span key={line} className="block text-white/70">
                {line}
              </span>
            ))}
            <span className="mt-4 block space-y-1">
              {contact.phones.map((phone, i) => (
                <span key={phone} className="block">
                  {phoneLabels[i] && (
                    <span className="text-white/35">{phoneLabels[i]} </span>
                  )}
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-bronze-light text-white/70 transition-colors"
                  >
                    {phone}
                  </a>
                </span>
              ))}
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-bronze hover:text-bronze-light mt-4 inline-block transition-colors"
            >
              {contact.email}
            </a>
          </address>
        </div>

        {/* Ευρετήριο */}
        <div className="grid gap-10 border-t border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <nav aria-labelledby="footer-areas" className="lg:col-span-6">
            <ColumnHeading id="footer-areas" href="/tomeis">
              Τομείς δραστηριότητας
            </ColumnHeading>
            {/* Κάθετη ροή, ώστε η λίστα να διαβάζεται προς τα κάτω και όχι
                εναλλάξ ανάμεσα στις δύο στήλες. */}
            <ul className="mt-5 grid grid-flow-row justify-start gap-x-14 gap-y-3 text-sm sm:grid-flow-col sm:grid-cols-[auto_auto] sm:grid-rows-4">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/tomeis/${area.slug}`} className={linkClasses}>
                    {area.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-pages" className="lg:col-span-3">
            <ColumnHeading id="footer-pages">Πλοήγηση</ColumnHeading>
            <ul className="mt-5 space-y-3 text-sm">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className={linkClasses}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <ColumnHeading href="/omada">Εταίροι</ColumnHeading>
            <ul className="mt-5 space-y-4 text-sm">
              {team.map((member) => (
                <li key={member.slug}>
                  <Link
                    href={`/omada/${member.slug}`}
                    className="hover:text-bronze-light text-white/70 transition-colors"
                  >
                    {member.name}
                  </Link>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} στο LinkedIn`}
                      className="hover:text-bronze-light ml-3 inline-block align-middle text-white/35 transition-colors"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                  {member.hasPublications && (
                    <Link
                      href={`/omada/${member.slug}/dimosieuseis`}
                      className={`${linkClasses} mt-1 text-[13px] text-white/40`}
                    >
                      Επιστημονικές δημοσιεύσεις
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Νομική γραμμή */}
      <div className="border-t border-white/10">
        <div className="font-display mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-[11px] font-medium tracking-[0.1em] text-white/40 uppercase sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {firm.name}
            {firm.vat && ` · ΑΦΜ ${firm.vat}`}
            {firm.vat && firm.taxOffice && ` · ΔΟΥ ${firm.taxOffice}`}
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/politiki-aporritou"
              className="hover:text-bronze-light transition-colors"
            >
              Πολιτική Απορρήτου
            </Link>
            <span>
              Powered by{" "}
              <a
                href="https://www.itdev.gr"
                target="_blank"
                rel="noopener"
                className="text-bronze hover:text-bronze-light transition-colors"
              >
                ITDEV
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
