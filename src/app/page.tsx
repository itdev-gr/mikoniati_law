import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import TeamCard from "@/components/TeamCard";
import CTABand from "@/components/CTABand";
import { practiceAreas, stats, team, values } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink relative flex min-h-svh items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 16px)",
          }}
        />
        <div
          aria-hidden
          className="from-ink absolute inset-0 bg-gradient-to-r via-transparent to-transparent"
        />
        {/* Hero photograph, sitting behind the text */}
        <div className="absolute inset-y-0 right-0 hidden w-[44%] lg:block">
          <Image
            src="/images/hero-columns.jpg"
            alt="Classical courthouse columns"
            fill
            priority
            sizes="44vw"
            className="border-l border-white/10 object-cover opacity-80"
          />
          <div
            aria-hidden
            className="from-ink via-ink/40 absolute inset-0 bg-gradient-to-r to-transparent"
          />
          <div
            aria-hidden
            className="from-ink/80 absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent"
          />
        </div>
        {/* Full-bleed background image on smaller screens, kept dark for legibility */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/images/hero-columns.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div
            aria-hidden
            className="from-ink via-ink/70 to-ink/40 absolute inset-0 bg-gradient-to-r"
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <p className="font-utility text-bronze text-[12px] font-bold tracking-[0.32em] uppercase">
                Athens · Est. 1999
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-bronze mt-6 h-14 w-px" aria-hidden />
            </Reveal>
            <Reveal delay={200}>
              <h1 className="font-display mt-6 text-5xl leading-[1.05] font-medium tracking-tight text-white sm:text-7xl">
                Counsel measured in decades, not billable hours
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="font-utility bg-bronze hover:bg-bronze-light inline-flex h-12 items-center justify-center px-8 text-[12px] font-semibold tracking-[0.2em] text-white uppercase transition-colors"
                >
                  Request a Consultation
                </Link>
                <Link
                  href="/practice-areas"
                  className="font-utility inline-flex h-12 items-center justify-center border border-white/25 px-8 text-[12px] font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:border-white hover:bg-white/5"
                >
                  Our Practice Areas
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        >
          <span className="font-utility text-[10px] tracking-[0.3em] text-white/40 uppercase">
            Scroll
          </span>
          <span className="from-bronze h-8 w-px animate-pulse bg-gradient-to-b to-transparent" />
        </div>
      </section>

      {/* About intro */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="The Firm"
                title="A partnership built on precision and discretion"
                lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; sed do eiusmod tempor incididunt ut labore."
              />
              <p className="mt-6 max-w-2xl text-sm leading-relaxed">
                Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Nullam quis risus eget
                urna mollis ornare vel eu leo. Maecenas faucibus mollis
                interdum aenean lacinia bibendum.
              </p>
              <Link
                href="/about"
                className="font-utility text-bronze hover:text-bronze-light mt-8 inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase transition-colors"
              >
                About the firm
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 8h13M9 3l5 5-5 5" />
                </svg>
              </Link>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <ImagePlaceholder
                  label="Partners photo"
                  icon="portrait"
                  className="aspect-[4/5] w-full"
                />
                <div
                  aria-hidden
                  className="border-bronze/40 absolute -right-4 -bottom-4 -z-10 h-full w-full border"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="bg-stone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Expertise"
                title="Practice areas"
                lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              />
              <Link
                href="/practice-areas"
                className="font-utility text-bronze hover:text-bronze-light inline-flex items-center gap-2 pb-1 text-[12px] font-bold tracking-[0.22em] uppercase transition-colors"
              >
                View all
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 8h13M9 3l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 3) * 100}>
                <PracticeAreaCard area={area} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="border-bronze/60 border-l pl-6">
                  <p className="font-display text-5xl font-medium text-white sm:text-6xl">
                    {stat.value}
                  </p>
                  <p className="font-utility mt-3 text-[11px] font-semibold tracking-[0.22em] text-white/50 uppercase">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="How we practise law"
              align="center"
              lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="border-hairline border-t pt-6">
                  <h3 className="font-display text-ink text-2xl font-medium">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="bg-stone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Our people"
                title="The team behind the firm"
              />
              <Link
                href="/team"
                className="font-utility text-bronze hover:text-bronze-light inline-flex items-center gap-2 pb-1 text-[12px] font-bold tracking-[0.22em] uppercase transition-colors"
              >
                Meet everyone
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 8h13M9 3l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
