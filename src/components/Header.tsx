"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import type { FirmContact } from "@/lib/cms";

const nav = [
  { href: "/", label: "Αρχική" },
  { href: "/grafeio", label: "Το Γραφείο" },
  { href: "/tomeis", label: "Τομείς" },
  { href: "/gnomodotiseis", label: "Γνωμοδοτήσεις" },
  { href: "/omada", label: "Η Ομάδα" },
  { href: "/nea", label: "Νέα" },
];

export default function Header({ contact }: { contact: FirmContact }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Κύριο μενού">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`font-display text-[13px] font-semibold tracking-[0.1em] uppercase transition-colors ${
                isActive(item.href) ? "text-bronze" : "text-ink hover:text-bronze"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/epikoinonia"
            className="font-display bg-bronze hover:bg-bronze-light inline-flex h-11 items-center px-6 text-[13px] font-bold tracking-[0.1em] text-white uppercase transition-colors"
          >
            Επικοινωνία
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`bg-ink h-[2px] w-6 transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`bg-ink h-[2px] w-6 transition-all ${open ? "opacity-0" : ""}`} />
          <span
            className={`bg-ink h-[2px] w-6 transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Σκούρα λωρίδα στοιχείων επικοινωνίας */}
      <div className="bg-ink hidden md:block">
        <div className="font-display mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-[11px] font-medium tracking-[0.1em] text-white/70 uppercase lg:px-8">
          {/* Στα 768–1024px δεν χωρούν και τα τέσσερα στοιχεία στη λωρίδα. */}
          <span className="hidden lg:inline">{contact.address.join(", ")}</span>
          <div className="flex items-center gap-8">
            {contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="hover:text-bronze-light transition-colors"
              >
                {phone}
              </a>
            ))}
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-bronze-light transition-colors"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Μενού κινητού"
          className="border-hairline border-t bg-white px-6 pt-2 pb-6 lg:hidden"
        >
          {[...nav, { href: "/epikoinonia", label: "Επικοινωνία" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
              className="font-display text-ink hover:text-bronze border-hairline block border-b py-4 text-[13px] font-semibold tracking-[0.1em] uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
