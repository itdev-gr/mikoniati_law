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
    <section className="bg-ink relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 14px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-display text-bronze text-[13px] font-bold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl text-3xl leading-[1.12] font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="bg-bronze mt-5 h-1 w-14" aria-hidden />
        {lead && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
