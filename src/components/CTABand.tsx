import Link from "next/link";
import Reveal from "./Reveal";
import { fetchFirmContact } from "@/lib/cms";

export default async function CTABand({
  title = "Συζητήστε την υπόθεσή σας μαζί μας",
  lead = "Επικοινωνήστε με το Γραφείο για μια πρώτη αξιολόγηση της υπόθεσής σας, με πλήρη εχεμύθεια.",
}: {
  title?: string;
  lead?: string;
}) {
  const { phones } = await fetchFirmContact();

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
              <p className="font-display text-bronze text-[13px] font-bold tracking-[0.2em] uppercase">
                Επικοινωνία
              </p>
              <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/60">{lead}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/epikoinonia"
                className="font-display bg-bronze hover:bg-bronze-light inline-flex h-12 items-center justify-center px-8 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors"
              >
                Φόρμα επικοινωνίας
              </Link>
              <a
                href={`tel:${phones[0].replace(/\s/g, "")}`}
                className="font-display inline-flex h-12 items-center justify-center border border-white/25 px-8 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-white hover:bg-white/5"
              >
                {phones[0]}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
