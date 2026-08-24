import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import TeamCard from "@/components/TeamCard";
import ContactForm from "@/components/ContactForm";
import { practiceAreas, stats, team, testimonials } from "@/lib/content";

const contactPoints = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Sed do eiusmod tempor incididunt ut labore et dolore",
  "Ut enim ad minim veniam, quis nostrud exercitation",
  "Duis aute irure dolor in reprehenderit in voluptate",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <Reveal>
              <p className="text-bronze text-[13px] font-bold tracking-[0.24em] uppercase">
                Saitakis Mykoniati &amp; Partners
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-ink mt-4 text-4xl leading-[1.05] font-extrabold tracking-tight uppercase sm:text-5xl xl:text-6xl">
                <span className="text-bronze">Protecting your future</span> with
                strategic legal representation
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="bg-bronze hover:bg-bronze-light inline-flex h-13 items-center justify-center px-8 text-[13px] font-bold tracking-[0.16em] text-white uppercase transition-colors"
                >
                  Free Consultation
                </Link>
                <Link
                  href="/practice-areas"
                  className="border-ink/30 text-ink hover:border-bronze hover:text-bronze inline-flex h-13 items-center justify-center border px-8 text-[13px] font-bold tracking-[0.16em] uppercase transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div
                aria-hidden
                className="bg-bronze/30 absolute -top-4 -right-4 h-full w-full"
              />
              <div className="relative aspect-[4/3] lg:aspect-[5/6]">
                <Image
                  src="/images/hero-columns.jpg"
                  alt="Classical building with columns"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Practice areas */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Our practice areas"
                title="How we can help you"
                lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              />
              <Link
                href="/practice-areas"
                className="text-bronze hover:text-bronze-light inline-flex items-center gap-2 pb-1 text-[12px] font-bold tracking-[0.18em] uppercase transition-colors"
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 3) * 100}>
                <PracticeAreaCard area={area} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About + stats */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div
                  aria-hidden
                  className="bg-bronze absolute -top-5 -left-5 h-2/3 w-2/3"
                />
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/library.jpg"
                    alt="Law library with classical busts"
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <SectionHeading
                eyebrow="About us"
                title="A partnership built on precision and discretion"
                tone="dark"
                lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
              />
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/55">
                Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Nullam quis risus eget
                urna mollis ornare vel eu leo.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-bronze/60 border-l pl-5">
                    <p className="text-4xl font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold tracking-[0.18em] text-white/50 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="bg-bronze hover:bg-bronze-light mt-10 inline-flex h-12 items-center px-8 text-[13px] font-bold tracking-[0.16em] text-white uppercase transition-colors"
              >
                About the firm
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Our team"
                title="Meet our attorneys"
                lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              />
              <Link
                href="/team"
                className="text-bronze hover:text-bronze-light inline-flex items-center gap-2 pb-1 text-[12px] font-bold tracking-[0.18em] uppercase transition-colors"
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
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What our clients say about us"
              tone="dark"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * 150}>
                <figure className="flex h-full flex-col gap-6 bg-white p-8 sm:flex-row sm:items-center sm:p-10">
                  <ImagePlaceholder
                    label="Client"
                    icon="portrait"
                    className="h-32 w-32 shrink-0 rounded-full"
                  />
                  <div>
                    <blockquote className="text-sm leading-relaxed">
                      “{item.quote}”
                    </blockquote>
                    <figcaption className="mt-4">
                      <p className="text-ink text-sm font-bold tracking-wide uppercase">
                        {item.name}
                      </p>
                      <p className="text-bronze mt-1 text-[11px] font-bold tracking-[0.18em] uppercase">
                        {item.role}
                      </p>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-stone py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Get in touch"
                title="Book your free consultation today"
                lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <ul className="mt-8 space-y-4">
                {contactPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <span className="bg-bronze/15 mt-[-2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      <svg
                        aria-hidden
                        viewBox="0 0 16 16"
                        className="text-bronze h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 8.5 6 12l8-8" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
