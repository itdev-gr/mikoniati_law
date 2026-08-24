type IconName = "building" | "scales" | "portrait" | "map" | "detail";

const icons: Record<IconName, React.ReactNode> = {
  building: (
    <path d="M6 34V12l10-6 10 6v22M11 34V16m5 18V13m5 21V16M2 34h28" />
  ),
  scales: (
    <path d="M16 4v26M8 30h16M16 8h-6m6 0h6m-12 0-4 9a4.5 4.5 0 0 0 9 0l-4-9m10 0-4 9a4.5 4.5 0 0 0 9 0l-4-9" />
  ),
  portrait: (
    <path d="M16 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-10 13c0-5.5 4.5-9 10-9s10 3.5 10 9" />
  ),
  map: (
    <path d="M16 29s9-8.5 9-15a9 9 0 1 0-18 0c0 6.5 9 15 9 15Zm0-11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
  ),
  detail: (
    <path d="M8 4h12l6 6v18H8V4Zm12 0v6h6M12 15h8m-8 5h8m-8 5h5" />
  ),
};

export default function ImagePlaceholder({
  label,
  icon = "detail",
  tone = "light",
  className = "",
}: {
  label: string;
  icon?: IconName;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={`relative flex items-center justify-center overflow-hidden border ${
        dark ? "border-white/15 bg-ink-2" : "border-hairline bg-stone"
      } ${className}`}
    >
      <svg aria-hidden className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`hatch-${tone}`}
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="14"
              stroke={dark ? "rgba(255,255,255,0.05)" : "rgba(88,89,91,0.08)"}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#hatch-${tone})`} />
      </svg>

      <div className="relative flex flex-col items-center gap-4 p-6 text-center">
        <svg
          aria-hidden
          viewBox="0 0 32 36"
          className="text-bronze h-9 w-9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icons[icon]}
        </svg>
        <span
          className={`font-utility text-[10px] font-semibold tracking-[0.24em] uppercase ${
            dark ? "text-white/40" : "text-charcoal/50"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
