import Link from "next/link";
import Logo from "./Logo";
import { contactDetailsPending, firm, team } from "@/lib/content";

const links = [
  { href: "/grafeio", label: "Το Γραφείο" },
  { href: "/tomeis", label: "Τομείς Δραστηριότητας" },
  { href: "/gnomodotiseis", label: "Γνωμοδοτήσεις" },
  { href: "/omada", label: "Η Ομάδα" },
  { href: "/nea", label: "Νέα" },
  { href: "/epikoinonia", label: "Επικοινωνία" },
];

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.6 8.65 23 10.9 23 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21h-4V9Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="from-bronze/0 via-bronze to-bronze/0 h-px bg-gradient-to-r" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-9 px-6 py-16 lg:px-8">
        <Logo light />

        <nav
          aria-label="Υποσέλιδο"
          className="font-display flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-bronze-light text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          {!contactDetailsPending && (
            <>
              <span>{firm.address.join(", ")}</span>
              <a
                href={`tel:${firm.phone.replace(/\s/g, "")}`}
                className="hover:text-bronze-light transition-colors"
              >
                {firm.phone}
              </a>
            </>
          )}
          <a
            href={`mailto:${firm.email}`}
            className="hover:text-bronze-light transition-colors"
          >
            {firm.email}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {team
            .filter((m) => m.linkedin)
            .map((m) => (
              <a
                key={m.slug}
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} στο LinkedIn`}
                className="hover:bg-bronze inline-flex h-9 w-9 items-center justify-center border border-white/20 transition-colors hover:border-transparent hover:text-white"
              >
                <LinkedInIcon />
              </a>
            ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="font-display mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-[11px] font-medium tracking-[0.1em] uppercase sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} {firm.name}. Με την επιφύλαξη παντός
            δικαιώματος.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://www.itdev.gr"
              target="_blank"
              rel="noopener"
              className="text-bronze hover:text-bronze-light transition-colors"
            >
              ITDEV
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
