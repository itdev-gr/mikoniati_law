import { backend } from "@/data/backend";
import { restGet } from "@/lib/backendRest";
import {
  aboutParagraphs as builtinAbout,
  firm,
  news as builtinNews,
  opinionsParagraphs as builtinOpinions,
  practiceAreas as builtinAreas,
  team as builtinTeam,
  type AreaIconName,
  type NewsItem,
  type PracticeArea,
  type TeamMember,
} from "@/lib/content";
import {
  publicationCategories,
  publications as builtinPublications,
  type Publication,
  type PublicationCategory,
} from "@/lib/publications";

type CmsRecord = { id: string; data: Record<string, unknown> };

const str = (v: unknown): string => (typeof v === "string" ? v : "");

/**
 * Το dashboard αποθηκεύει άλλοτε αριθμό και άλλοτε κείμενο στο ίδιο πεδίο
 * (π.χ. το `position` της «Ομάδας» είναι "1"/"2"), οπότε δεχόμαστε και τα δύο.
 */
const num = (v: unknown): number | undefined => {
  if (typeof v === "number") return Number.isFinite(v) ? v : undefined;
  if (typeof v === "string" && v.trim()) {
    const n = Number(v);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
};

/**
 * http(s) URLs και τοπικά assets ("/team/…") περνούν ως έχουν· οτιδήποτε άλλο
 * είναι διαδρομή στη media library του project στο Supabase Storage.
 */
export function mediaImageUrl(value: unknown): string {
  const path = str(value).trim();
  if (!path) return "";
  if (/^https?:\/\//i.test(path) || path.startsWith("/")) return path;
  return `${backend.url}/storage/v1/object/public/project-${backend.projectId}/${encodeURIComponent(
    path,
  ).replace(/%2F/gi, "/")}`;
}

/** long_text → λίστα, μία εγγραφή ανά γραμμή. */
const lines = (v: unknown): string[] =>
  str(v)
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

/** long_text → παράγραφοι, χωρισμένες με κενή γραμμή. */
const paragraphs = (v: unknown): string[] =>
  str(v)
    .split(/\n\s*\n/)
    .map((s) => s.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);

async function collectionRecords(slug: string): Promise<CmsRecord[]> {
  const cols = await restGet<{ id: string }[]>(
    `collections?project_id=eq.${backend.projectId}&slug=eq.${slug}&select=id`,
  );
  if (!cols.length) throw new Error(`${slug} collection not found`);
  return restGet<CmsRecord[]>(
    `records?collection_id=eq.${cols[0].id}&deleted_at=is.null&select=id,data&order=created_at.asc&limit=500`,
  );
}

/**
 * Ταξινόμηση με βάση το πεδίο `position`· εγγραφές χωρίς position πάνε τέλος.
 *
 * Στο dashboard είναι εύκολο να δοθεί το ίδιο `position` σε δύο εγγραφές. Χωρίς
 * δεύτερο κριτήριο η σειρά τους κρινόταν από το `created_at` και άλλαζε όποτε ο
 * πελάτης ξαναποθήκευε μια εγγραφή — γι' αυτό ο τίτλος σπάει την ισοπαλία.
 */
const byPosition = (a: CmsRecord, b: CmsRecord) =>
  (num(a.data.position) ?? 9999) - (num(b.data.position) ?? 9999) ||
  str(a.data.title).localeCompare(str(b.data.title), "el") ||
  str(a.data.name).localeCompare(str(b.data.name), "el");

/* ── Δημοσιεύσεις ──────────────────────────────────────────────────────── */

const isCategory = (v: string): v is PublicationCategory =>
  (publicationCategories as readonly string[]).includes(v);

export async function fetchPublications(): Promise<Publication[]> {
  try {
    const records = (await collectionRecords("publications")).sort(byPosition);
    const items = records
      .filter((r) => str(r.data.title).trim())
      .map((r): Publication => {
        const category = str(r.data.category).trim();
        return {
          id: r.id,
          member: str(r.data.member).trim() || "kimon-saitakis",
          category: isCategory(category) ? category : "Άρθρα & Μελέτες",
          title: str(r.data.title).trim(),
          details: str(r.data.details).trim(),
          year: num(r.data.year),
          url: str(r.data.url).trim() || undefined,
        };
      });
    return items.length ? items : builtinPublications;
  } catch (err) {
    console.error("Publications fetch failed — using built-in data", err);
    return builtinPublications;
  }
}

/* ── Ομάδα ─────────────────────────────────────────────────────────────── */

export async function fetchTeam(): Promise<TeamMember[]> {
  try {
    const records = (await collectionRecords("team")).sort(byPosition);
    const items = records
      .filter((r) => str(r.data.slug).trim() && str(r.data.name).trim())
      .map((r): TeamMember => {
        const slug = str(r.data.slug).trim();
        // Το built-in μέλος με το ίδιο slug είναι το fallback ανά πεδίο, ώστε
        // ένα άδειο πεδίο στο dashboard να μη σβήνει περιεχόμενο.
        const base = builtinTeam.find((m) => m.slug === slug);
        const bio = paragraphs(r.data.bio);
        return {
          slug,
          name: str(r.data.name).trim(),
          role: str(r.data.role).trim() || base?.role || "",
          credentials: str(r.data.credentials).trim() || base?.credentials || "",
          photo: mediaImageUrl(r.data.photo) || base?.photo || "",
          email: str(r.data.email).trim() || base?.email || "",
          linkedin: str(r.data.linkedin).trim() || base?.linkedin || "",
          short: str(r.data.short_bio).trim() || base?.short || "",
          bio: bio.length ? bio : (base?.bio ?? []),
          hasPublications:
            r.data.has_publications === true || base?.hasPublications === true,
        };
      });
    return items.length ? items : builtinTeam;
  } catch (err) {
    console.error("Team fetch failed — using built-in data", err);
    return builtinTeam;
  }
}

export async function fetchTeamMember(
  slug: string,
): Promise<TeamMember | undefined> {
  const all = await fetchTeam();
  return all.find((m) => m.slug === slug);
}

/* ── Τομείς δραστηριότητας ─────────────────────────────────────────────── */

const ICON_NAMES: AreaIconName[] = [
  "inheritance",
  "scales",
  "briefcase",
  "building",
  "bank",
  "handshake",
  "landmark",
  "shield",
];

const isIcon = (v: string): v is AreaIconName =>
  (ICON_NAMES as string[]).includes(v);

export async function fetchPracticeAreas(): Promise<PracticeArea[]> {
  try {
    const records = (await collectionRecords("practice_areas")).sort(byPosition);
    const items = records
      .filter((r) => str(r.data.slug).trim() && str(r.data.name).trim())
      .map((r): PracticeArea => {
        const slug = str(r.data.slug).trim();
        const base = builtinAreas.find((a) => a.slug === slug);
        const icon = str(r.data.icon).trim();
        const body = paragraphs(r.data.body);
        const services = lines(r.data.services);
        return {
          slug,
          name: str(r.data.name).trim(),
          shortName: str(r.data.short_name).trim() || base?.shortName || str(r.data.name).trim(),
          icon: isIcon(icon) ? icon : (base?.icon ?? "scales"),
          short: str(r.data.short).trim() || base?.short || "",
          // Σκόπιμα χωρίς fallback: ο πελάτης ελέγχει το intro αποκλειστικά
          // από το dashboard — άδειο πεδίο σημαίνει «να μην εμφανίζεται».
          intro: str(r.data.intro).trim(),
          body: body.length ? body : (base?.body ?? []),
          services: services.length ? services : (base?.services ?? []),
        };
      });
    return items.length ? items : builtinAreas;
  } catch (err) {
    console.error("Practice areas fetch failed — using built-in data", err);
    return builtinAreas;
  }
}

export async function fetchPracticeArea(
  slug: string,
): Promise<PracticeArea | undefined> {
  const all = await fetchPracticeAreas();
  return all.find((a) => a.slug === slug);
}

/* ── Νέα ───────────────────────────────────────────────────────────────── */

/** Νεότερα πρώτα· εγγραφές χωρίς ημερομηνία πέφτουν στο τέλος. */
const byDateDesc = (a: NewsItem, b: NewsItem) =>
  (b.date || "").localeCompare(a.date || "");

export async function fetchNews(): Promise<NewsItem[]> {
  try {
    const records = await collectionRecords("news");
    const items = records
      .filter((r) => str(r.data.title).trim())
      .map(
        (r): NewsItem => ({
          id: r.id,
          title: str(r.data.title).trim(),
          date: str(r.data.date).trim(),
          source: str(r.data.source).trim(),
          excerpt: str(r.data.excerpt).trim(),
          url: str(r.data.url).trim(),
        }),
      )
      .sort(byDateDesc);
    return items.length ? items : builtinNews;
  } catch (err) {
    console.error("News fetch failed — using built-in data", err);
    return builtinNews;
  }
}

/* ── Κείμενα σελίδων (copy editor) ─────────────────────────────────────── */

export type SiteCopy = (slot: string, fallback: string) => string;

/**
 * Επιστρέφει έναν getter για τα κείμενα του `site_content`. Κάθε κλήση δίνει
 * fallback, ώστε ένα άδειο ή διαγραμμένο slot να μη σπάει τη σελίδα.
 */
export async function fetchSiteCopy(): Promise<SiteCopy> {
  let map = new Map<string, string>();
  try {
    const records = await collectionRecords("site_content");
    map = new Map(
      records
        .map((r) => [str(r.data.slot_key).trim(), str(r.data.value).trim()])
        .filter(([k, v]) => k && v) as [string, string][],
    );
  } catch (err) {
    console.error("Site copy fetch failed — using built-in text", err);
  }
  return (slot, fallback) => map.get(slot) || fallback;
}

/* ── Στοιχεία επικοινωνίας ─────────────────────────────────────────────── */

export type FirmContact = {
  address: string[];
  phones: string[];
  email: string;
};

/**
 * Τα στοιχεία επικοινωνίας ζουν στα slots `contact_address`, `contact_phone`
 * και `contact_email` του `site_content`, ώστε το γραφείο να τα αλλάζει μόνο
 * του. Το `contact_phone` κρατά ένα τηλέφωνο ανά γραμμή. Fallback το `firm`.
 */
export async function fetchFirmContact(): Promise<FirmContact> {
  const copy = await fetchSiteCopy();
  const fromLines = (slot: string, fallback: string[]): string[] => {
    const value = lines(copy(slot, ""));
    return value.length ? value : fallback;
  };
  return {
    address: fromLines("contact_address", firm.address),
    phones: fromLines("contact_phone", firm.phones),
    email: copy("contact_email", firm.email),
  };
}

/** Οι παράγραφοι μιας σελίδας από διαδοχικά slots (`about_body_1`, `_2`, …). */
export function copyParagraphs(
  copy: SiteCopy,
  prefix: string,
  fallback: string[],
): string[] {
  return fallback.map((text, i) => copy(`${prefix}_${i + 1}`, text));
}

export { builtinAbout as aboutFallback, builtinOpinions as opinionsFallback };
