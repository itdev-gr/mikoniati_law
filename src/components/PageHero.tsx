export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="bg-ink relative overflow-hidden pt-40 pb-20 sm:pt-48 sm:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 14px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-utility text-bronze text-[12px] font-bold tracking-[0.28em] uppercase">
          {eyebrow}
        </p>
        <div className="bg-bronze mt-4 h-10 w-px" aria-hidden />
        <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] font-medium tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
