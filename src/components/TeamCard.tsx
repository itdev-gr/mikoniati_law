import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/lib/content";

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.6 8.65 23 10.9 23 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21h-4V9Z" />
    </svg>
  );
}

/**
 * Κάρτα μέλους της ομάδας, στο πρότυπο που ζήτησε ο πελάτης: φωτογραφία,
 * όνομα, ιδιότητα, email και LinkedIn, με μπάρα ενεργειών στο κάτω μέρος.
 *
 * Τα μέλη με κατάλογο δημοσιεύσεων (`hasPublications`) παίρνουν δεύτερο κουμπί
 * «Δημοσιεύσεις» δίπλα στο «Βιογραφικό»· τα υπόλοιπα παίρνουν ένα κουμπί σε
 * όλο το πλάτος. Έτσι δουλεύει αυτόματα και για μελλοντικά μέλη.
 */
export default function TeamCard({ member }: { member: TeamMember }) {
  const bioHref = `/omada/${member.slug}`;
  const pubHref = `/omada/${member.slug}/dimosieuseis`;

  return (
    <article className="group border-hairline flex h-full flex-col border bg-white shadow-[0_18px_50px_-30px_rgba(27,28,30,0.45)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-28px_rgba(27,28,30,0.5)]">
      <div className="px-6 pt-6 sm:px-8 sm:pt-8">
        <div className="bg-stone relative aspect-3/4 w-full overflow-hidden">
          <Image
            src={member.photo}
            alt={`${member.name} — ${member.role}`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center px-6 py-6 text-center sm:px-8">
        <h3 className="text-ink text-xl font-bold">{member.name}</h3>
        <span aria-hidden className="bg-bronze mt-3 h-px w-12" />
        <p className="text-charcoal mt-4 text-sm leading-relaxed">
          {member.credentials}
        </p>
        <a
          href={`mailto:${member.email}`}
          className="text-bronze hover:text-bronze-light mt-4 text-sm break-all transition-colors"
        >
          {member.email}
        </a>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} στο LinkedIn`}
            className="text-charcoal/60 hover:bg-bronze mt-4 inline-flex h-8 w-8 items-center justify-center transition-colors hover:text-white"
          >
            <LinkedInIcon />
          </a>
        )}
      </div>

      {/* Μπάρα ενεργειών */}
      <div
        className={`border-hairline grid border-t ${
          member.hasPublications ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        <Link
          href={bioHref}
          className="font-display text-ink hover:bg-bronze border-hairline flex h-14 items-center justify-center px-4 text-[13px] font-semibold tracking-[0.12em] uppercase transition-colors hover:text-white"
        >
          Βιογραφικό
        </Link>
        {member.hasPublications && (
          <Link
            href={pubHref}
            className="font-display text-ink hover:bg-bronze border-hairline flex h-14 items-center justify-center border-l px-4 text-[13px] font-semibold tracking-[0.12em] uppercase transition-colors hover:text-white"
          >
            Δημοσιεύσεις
          </Link>
        )}
      </div>
    </article>
  );
}
