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
          className="bg-bronze absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
        />
      </div>
      <h3 className="font-display text-ink mt-6 text-2xl font-medium tracking-tight">
        {member.name}
      </h3>
      <p className="font-utility text-bronze mt-1 text-[11px] font-bold tracking-[0.22em] uppercase">
        {member.role}
      </p>
      <p className="mt-4 text-sm leading-relaxed">{member.bio}</p>
    </article>
  );
}
