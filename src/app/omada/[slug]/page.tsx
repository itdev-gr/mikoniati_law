import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { team as builtinTeam } from "@/lib/content";
import { fetchPublications, fetchTeamMember } from "@/lib/cms";
import { publicationsFor } from "@/lib/publications";

export function generateStaticParams() {
  return builtinTeam.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = await fetchTeamMember(slug);
  if (!member) return {};
  return { title: member.name, description: member.short };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await fetchTeamMember(slug);
  if (!member) notFound();

  const publicationCount = member.hasPublications
    ? publicationsFor(await fetchPublications(), member.slug).length
    : 0;

  return (
    <>
      <section className="bg-ink relative overflow-hidden py-16 sm:py-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 14px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/omada"
            className="font-display text-bronze hover:text-bronze-light inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase transition-colors"
          >
            <svg
              aria-hidden
              viewBox="0 0 16 16"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M15 8H2m5-5L2 8l5 5" />
            </svg>
            Η Ομάδα
          </Link>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
            <div className="relative mx-auto aspect-3/4 w-full max-w-[300px]">
              <Image
                src={member.photo}
                alt={`${member.name} — ${member.role}`}
                fill
                priority
                sizes="300px"
                className="object-cover object-top"
              />
            </div>

            <div>
              <p className="font-display text-bronze text-[13px] font-bold tracking-[0.2em] uppercase">
                {member.role}
              </p>
              <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl">
                {member.name}
              </h1>
              <div className="bg-bronze mt-5 h-1 w-14" aria-hidden />
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                {member.credentials}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {/* Το δεύτερο κουμπί προς τον κατάλογο δημοσιεύσεων, όπως ζητήθηκε */}
                {member.hasPublications && (
                  <Link
                    href={`/omada/${member.slug}/dimosieuseis`}
                    className="font-display bg-bronze hover:bg-bronze-light inline-flex h-12 items-center gap-3 px-7 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors"
                  >
                    Επιστημονικές δημοσιεύσεις
                    {publicationCount > 0 && (
                      <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px]">
                        {publicationCount}
                      </span>
                    )}
                  </Link>
                )}
                <a
                  href={`mailto:${member.email}`}
                  className="font-display inline-flex h-12 items-center border border-white/25 px-7 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-white hover:bg-white/5"
                >
                  Email
                </a>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display inline-flex h-12 items-center border border-white/25 px-7 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:border-white hover:bg-white/5"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl space-y-6 text-base leading-relaxed">
              {member.bio.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </Reveal>

          {member.hasPublications && (
            <Reveal delay={100}>
              <div className="border-hairline bg-stone mt-14 max-w-3xl border p-8">
                <h2 className="text-ink text-xl font-bold">
                  Επιστημονικό και συγγραφικό έργο
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Ο πλήρης κατάλογος των δημοσιεύσεων — βιβλία, συμβολές σε
                  συλλογικά έργα, άρθρα και μελέτες, καθώς και σχολιασμοί
                  δικαστικών αποφάσεων.
                </p>
                <Link
                  href={`/omada/${member.slug}/dimosieuseis`}
                  className="font-display bg-bronze hover:bg-bronze-light mt-6 inline-flex h-12 items-center px-7 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors"
                >
                  Δείτε τον κατάλογο
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <CTABand />
    </>
  );
}
