import Link from "next/link";

export default function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Saitakis Mykoniati & Partners — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="font-logo text-[17px] font-bold tracking-[0.08em] whitespace-nowrap">
        <span className={light ? "text-white" : "text-charcoal"}>SAITAKIS</span>{" "}
        <span className="text-bronze">MYKONIATI</span>
      </span>
      <span
        aria-hidden
        className={`h-8 w-px ${light ? "bg-white/40" : "bg-charcoal/40"}`}
      />
      <span className="font-logo flex flex-col justify-center gap-[3px] text-[9px] leading-none font-semibold tracking-[0.18em] whitespace-nowrap">
        <span className={light ? "text-white/80" : "text-charcoal"}>
          &amp; PARTNERS
        </span>
        <span className="text-bronze">LAW FIRM</span>
      </span>
    </Link>
  );
}
