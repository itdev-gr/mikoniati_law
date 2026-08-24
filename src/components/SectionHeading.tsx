export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="font-utility text-bronze text-[12px] font-bold tracking-[0.28em] uppercase">
        {eyebrow}
      </p>
      <div
        className={`bg-bronze mt-4 h-10 w-px ${centered ? "mx-auto" : ""}`}
        aria-hidden
      />
      <h2
        className={`font-display mt-4 text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/60" : "text-charcoal"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
