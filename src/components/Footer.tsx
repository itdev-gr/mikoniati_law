import Link from "next/link";
import Logo from "./Logo";
import { firm, practiceAreas } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="from-bronze/0 via-bronze to-bronze/0 h-px bg-gradient-to-r" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <h3 className="font-utility text-[11px] font-bold tracking-[0.22em] text-white uppercase">
            Practice Areas
          </h3>
          <ul className="mt-6 space-y-3 text-sm">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="hover:text-bronze-light transition-colors"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-utility text-[11px] font-bold tracking-[0.22em] text-white uppercase">
            Firm
          </h3>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-bronze-light transition-colors">
                About the Firm
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-bronze-light transition-colors">
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/practice-areas"
                className="hover:text-bronze-light transition-colors"
              >
                Practice Areas
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-bronze-light transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-utility text-[11px] font-bold tracking-[0.22em] text-white uppercase">
            Contact
          </h3>
          <ul className="mt-6 space-y-3 text-sm">
            {firm.address.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li>
              <a
                href={`tel:${firm.phone.replace(/\s/g, "")}`}
                className="hover:text-bronze-light transition-colors"
              >
                {firm.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${firm.email}`}
                className="hover:text-bronze-light transition-colors"
              >
                {firm.email}
              </a>
            </li>
            <li>{firm.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="font-utility mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-[11px] tracking-[0.14em] uppercase sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} {firm.name}. All rights reserved.
          </p>
          <p className="text-white/40">Attorney advertising</p>
        </div>
        <div className="font-utility mx-auto max-w-7xl px-6 pb-6 text-center text-[11px] tracking-[0.14em] text-white/40 uppercase lg:px-8">
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
