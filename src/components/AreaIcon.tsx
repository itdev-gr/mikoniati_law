import type { AreaIconName } from "@/lib/content";

const paths: Record<AreaIconName, React.ReactNode> = {
  briefcase: (
    <path d="M11 9V6.5A1.5 1.5 0 0 1 12.5 5h7A1.5 1.5 0 0 1 21 6.5V9M4 9h24v16H4V9Zm0 7h24m-14 0v3h4v-3" />
  ),
  building: (
    <path d="M5 27V9l11-6 11 6v18M10.5 27V13m5.5 14V10m5.5 17V13M2 27h28" />
  ),
  scales: (
    <path d="M16 3v24M9 27h14M16 7h-6m6 0h6M10 7l-4.5 9a4.8 4.8 0 0 0 9 0L10 7Zm12 0-4.5 9a4.8 4.8 0 0 0 9 0L22 7Z" />
  ),
  family: (
    <path d="M11 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM3 28c0-5 3.5-8.5 8-8.5s8 3.5 8 8.5m1.5-9c3.5.5 6 3.5 6 7.5" />
  ),
  users: (
    <path d="M12 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm8-1a4 4 0 1 0-1.5-7.7M3 27c0-5 4-8.5 9-8.5s9 3.5 9 8.5m2-8c3.5.7 6 3.7 6 7.5" />
  ),
  document: (
    <path d="M7 3h12l6 6v20H7V3Zm12 0v6h6M11 14h10m-10 5h10m-10 5h6" />
  ),
};

export default function AreaIcon({
  name,
  className = "h-9 w-9",
}: {
  name: AreaIconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
