"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { firm } from "@/lib/content";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">
      {/* Main bar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.slice(0, 4).map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] font-semibold tracking-[0.14em] uppercase transition-colors ${
                  active ? "text-bronze" : "text-ink hover:text-bronze"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-bronze hover:bg-bronze-light inline-flex h-11 items-center px-6 text-[13px] font-bold tracking-[0.14em] text-white uppercase transition-colors"
          >
            Free Consultation
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`bg-ink h-[2px] w-6 transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`bg-ink h-[2px] w-6 transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`bg-ink h-[2px] w-6 transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Dark info strip */}
      <div className="bg-ink hidden md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-[11px] font-medium tracking-[0.12em] text-white/70 uppercase lg:px-8">
          <div className="flex items-center gap-8">
            <span>{firm.address.join(", ")}</span>
            <span className="hidden lg:inline">{firm.hours}</span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href={`tel:${firm.phone.replace(/\s/g, "")}`}
              className="hover:text-bronze-light transition-colors"
            >
              {firm.phone}
            </a>
            <a
              href={`mailto:${firm.email}`}
              className="hover:text-bronze-light hidden transition-colors sm:inline"
            >
              {firm.email}
            </a>
          </div>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-hairline bg-white px-6 pt-2 pb-6 lg:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink hover:text-bronze block border-b border-hairline py-4 text-[13px] font-semibold tracking-[0.14em] uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
