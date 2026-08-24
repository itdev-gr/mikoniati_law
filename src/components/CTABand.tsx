import Link from "next/link";
import Reveal from "./Reveal";

export default function CTABand() {
  return (
    <section className="bg-ink relative overflow-hidden">
      <div
        aria-hidden
        className="from-bronze/0 via-bronze to-bronze/0 absolute inset-x-0 top-0 h-px bg-gradient-to-r"
      />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="font-utility text-bronze text-[12px] font-bold tracking-[0.28em] uppercase">
                Get in touch
              </p>
              <h2 className="font-display mt-4 text-4xl leading-[1.1] font-medium tracking-tight text-white sm:text-5xl">
                Discuss your case with us in confidence
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="font-utility bg-bronze hover:bg-bronze-light inline-flex h-12 items-center justify-center px-8 text-[12px] font-semibold tracking-[0.2em] text-white uppercase transition-colors"
              >
                Request a Consultation
              </Link>
              <a
                href="tel:+302100000000"
                className="font-utility inline-flex h-12 items-center justify-center border border-white/25 px-8 text-[12px] font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:border-white hover:bg-white/5"
              >
                +30 210 000 0000
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
