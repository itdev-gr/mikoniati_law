import Link from "next/link";
import AreaIcon from "./AreaIcon";
import type { PracticeArea } from "@/lib/content";

export default function PracticeAreaCard({ area }: { area: PracticeArea }) {
  return (
    <Link
      href={`/tomeis/${area.slug}`}
      className="group bg-ink hover:bg-ink-2 relative flex h-full flex-col p-8 transition-colors duration-300"
    >
      <span
        aria-hidden
        className="bg-bronze absolute top-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
      />
      <AreaIcon name={area.icon} className="text-bronze h-10 w-10" />
      <h3 className="mt-6 text-lg leading-snug font-bold text-white">
        {area.shortName}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
        {area.short}
      </p>
      <span className="font-display text-bronze mt-6 inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase">
        Περισσότερα
        <svg
          aria-hidden
          viewBox="0 0 16 16"
          className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M1 8h13M9 3l5 5-5 5" />
        </svg>
      </span>
    </Link>
  );
}
