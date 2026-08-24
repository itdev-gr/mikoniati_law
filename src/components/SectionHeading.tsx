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
      <p className="text-bronze text-[13px] font-bold tracking-[0.24em] uppercase">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl leading-[1.1] font-extrabold tracking-tight uppercase sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div
        className={`bg-bronze mt-5 h-1 w-14 ${centered ? "mx-auto" : ""}`}
        aria-hidden
      />
      {lead && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            dark ? "text-white/60" : "text-charcoal"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
