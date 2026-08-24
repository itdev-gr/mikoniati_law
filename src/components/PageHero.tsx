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
    <section className="bg-ink relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 14px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-bronze text-[13px] font-bold tracking-[0.24em] uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-tight text-white uppercase sm:text-5xl">
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
