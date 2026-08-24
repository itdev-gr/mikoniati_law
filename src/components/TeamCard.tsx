import ImagePlaceholder from "./ImagePlaceholder";
import type { TeamMember } from "@/lib/content";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden">
        <ImagePlaceholder
          label="Portrait"
          icon="portrait"
          className="aspect-[3/4] w-full transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <span
          aria-hidden
          className="bg-bronze absolute bottom-0 left-0 h-1 w-14 transition-all duration-500 group-hover:w-full"
        />
      </div>
      <h3 className="text-ink mt-5 text-lg font-bold tracking-wide uppercase">
        {member.name}
      </h3>
      <p className="text-bronze mt-1 text-[12px] font-bold tracking-[0.18em] uppercase">
        {member.role}
      </p>
      <p className="mt-3 text-sm leading-relaxed">{member.bio}</p>
    </article>
  );
}
