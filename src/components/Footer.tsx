import Link from "next/link";
import Logo from "./Logo";
import { firm } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="from-bronze/0 via-bronze to-bronze/0 h-px bg-gradient-to-r" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 lg:px-8">
        <Logo light />

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-bronze-light text-[12px] font-semibold tracking-[0.16em] uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
          <span>{firm.address.join(", ")}</span>
          <a
            href={`tel:${firm.phone.replace(/\s/g, "")}`}
            className="hover:text-bronze-light transition-colors"
          >
            {firm.phone}
          </a>
          <a
            href={`mailto:${firm.email}`}
            className="hover:text-bronze-light transition-colors"
          >
            {firm.email}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-[11px] font-medium tracking-[0.14em] uppercase sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} {firm.name}. All rights reserved.
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
