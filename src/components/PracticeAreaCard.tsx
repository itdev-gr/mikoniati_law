import Link from "next/link";
import type { PracticeArea } from "@/lib/content";

export default function PracticeAreaCard({ area }: { area: PracticeArea }) {
  return (
    <Link
      href={`/practice-areas/${area.slug}`}
      className="group border-hairline hover:border-bronze/40 relative flex h-full flex-col border bg-white p-8 transition-all duration-300 hover:shadow-[0_20px_50px_-24px_rgba(27,28,30,0.25)]"
    >
      <span
        aria-hidden
        className="bg-bronze absolute top-8 left-0 h-10 w-px transition-all duration-300 group-hover:h-[calc(100%-4rem)]"
      />
      <h3 className="font-display text-ink group-hover:text-bronze text-2xl font-medium tracking-tight transition-colors">
        {area.name}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed">{area.short}</p>
      <span className="font-utility text-bronze mt-8 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase">
        Learn more
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
