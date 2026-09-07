/**
 * Οι μεγάλοι τίτλοι δεν μπαίνουν σε κεφαλαία: στα Ελληνικά τα εκτενή κεφαλαία
 * κείμενα διαβάζονται δύσκολα και χάνουν τους τόνους. Κεφαλαία κρατούν μόνο τα
 * σύντομα στοιχεία (eyebrow, κουμπιά, μενού).
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  /** Χωρίς τίτλο, το eyebrow αναλαμβάνει τον ρόλο της επικεφαλίδας. */
  title?: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const centered = align === "center";
  const Eyebrow = title ? "p" : "h2";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow className="font-display text-bronze text-[13px] font-bold tracking-[0.2em] uppercase">
        {eyebrow}
      </Eyebrow>
      {title && (
        <h2
          className={`mt-3 text-3xl leading-[1.15] font-bold tracking-tight sm:text-4xl ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      )}
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
