"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-hairline bg-white/95 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] backdrop-blur-md"
          : "border-b border-white/10 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo light={!solid} />

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
                className={`font-utility text-[12px] font-semibold tracking-[0.18em] uppercase transition-colors ${
                  active
                    ? "text-bronze"
                    : solid
                      ? "text-charcoal hover:text-bronze"
                      : "text-white/90 hover:text-bronze-light"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="font-utility bg-bronze hover:bg-bronze-light inline-flex h-10 items-center px-5 text-[12px] font-semibold tracking-[0.18em] text-white uppercase transition-colors"
          >
            Contact Us
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
            className={`h-[2px] w-6 transition-all ${solid ? "bg-charcoal" : "bg-white"} ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-[2px] w-6 transition-all ${solid ? "bg-charcoal" : "bg-white"} ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-6 transition-all ${solid ? "bg-charcoal" : "bg-white"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
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
              className="font-utility text-charcoal hover:text-bronze block border-b border-hairline py-4 text-[13px] font-semibold tracking-[0.18em] uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
