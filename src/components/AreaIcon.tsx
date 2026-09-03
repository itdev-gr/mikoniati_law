import type { AreaIconName } from "@/lib/content";

const paths: Record<AreaIconName, React.ReactNode> = {
  // Κληρονομικό — ειλητάριο με σφραγίδα
  inheritance: (
    <path d="M8 4h13a2 2 0 0 1 2 2v20a3 3 0 0 0 3 3H11a3 3 0 0 1-3-3V4Zm0 0a2 2 0 0 0-2 2v3h2M12 11h7m-7 5h7m-7 5h4M22 29h4a3 3 0 0 0 3-3v-2h-6" />
  ),
  // Αποζημιώσεις — ζυγαριά
  scales: (
    <path d="M16 3v24M9 27h14M16 7h-6m6 0h6M10 7l-4.5 9a4.8 4.8 0 0 0 9 0L10 7Zm12 0-4.5 9a4.8 4.8 0 0 0 9 0L22 7Z" />
  ),
  // Εταιρικό — χαρτοφύλακας
  briefcase: (
    <path d="M11 9V6.5A1.5 1.5 0 0 1 12.5 5h7A1.5 1.5 0 0 1 21 6.5V9M4 9h24v16H4V9Zm0 7h24m-14 0v3h4v-3" />
  ),
  // Ακίνητα — κατοικία (διακριτή από την τράπεζα και το δημόσιο κτίριο)
  building: <path d="M3 14 16 4l13 10M6 12v15h20V12M13 27v-8h6v8" />,
  // Τραπεζικό — χαρτονόμισμα
  bank: (
    <>
      <path d="M3 9h26v14H3z" />
      <circle cx="16" cy="16" r="3.5" />
      <path d="M7 13v6M25 13v6" />
    </>
  ),
  // Διαμεσολάβηση — διάλογος. Η χειραψία γίνεται δυσανάγνωστη στα 32px.
  handshake: (
    <>
      <path d="M4 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="M24 13h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2v4l-5-4h-5a2 2 0 0 1-2-2v-2" />
    </>
  ),
  // Απαλλοτριώσεις — δημόσιο κτίριο με σήμα
  landmark: (
    <path d="M16 3l12 6v3H4V9l12-6Zm0 4.5v.01M8 12v11m8-11v11m8-11v11M4 23h24M2 28h28" />
  ),
  // Κανονιστική συμμόρφωση — ασπίδα με τικ
  shield: (
    <path d="M16 3 5 7v9c0 7 5 11.5 11 13 6-1.5 11-6 11-13V7L16 3Zm-5 13.5 3.5 3.5L21 13" />
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
