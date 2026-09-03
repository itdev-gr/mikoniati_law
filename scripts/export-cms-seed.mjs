// scripts/export-cms-seed.mjs
//
// Παράγει το seed του ITDEV Dashboard από τα built-in δεδομένα του site, ώστε
// τα δύο να μη διαφέρουν ποτέ. Τρέξε το ξανά όποτε αλλάξει το περιεχόμενο και
// ξανατρέξε το provision script στο generaldashboard-main.
//
//   node scripts/export-cms-seed.mjs > ../generaldashboard-main/scripts/sm-legal-seed.json
//
// Το Node 22.18+/24 διαβάζει απευθείας .ts (type stripping) — τα δύο αρχεία
// περιεχομένου δεν έχουν imports, οπότε φορτώνονται χωρίς build βήμα.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

const { firm, practiceAreas, team, aboutParagraphs, opinionsParagraphs, news } =
  await import(join(root, "src/lib/content.ts"));
const { publications } = await import(join(root, "src/lib/publications.ts"));

/** Τα `services` / `bio` αποθηκεύονται ως long_text, μία εγγραφή ανά γραμμή. */
const linesOf = (arr) => arr.join("\n");
const parasOf = (arr) => arr.join("\n\n");

const seed = {
  publications: publications.map((p, i) => ({
    member: p.member,
    category: p.category,
    title: p.title,
    details: p.details,
    year: p.year ?? null,
    url: p.url ?? "",
    position: i + 1,
  })),

  news: news.map((n) => ({
    title: n.title,
    date: n.date || null,
    source: n.source,
    excerpt: n.excerpt,
    url: n.url,
    image: "",
  })),

  team: team.map((m, i) => ({
    slug: m.slug,
    name: m.name,
    role: m.role,
    credentials: m.credentials,
    short_bio: m.short,
    bio: parasOf(m.bio),
    email: m.email,
    linkedin: m.linkedin,
    photo: m.photo,
    has_publications: m.hasPublications,
    position: i + 1,
  })),

  practice_areas: practiceAreas.map((a, i) => ({
    slug: a.slug,
    name: a.name,
    short_name: a.shortName,
    icon: a.icon,
    short: a.short,
    intro: a.intro,
    body: parasOf(a.body),
    services: linesOf(a.services),
    position: i + 1,
  })),

  site_content: [
    ["home_hero_title", "Νομική υποστήριξη με επιστημονική τεκμηρίωση"],
    [
      "home_hero_lead",
      "Δικηγορικό γραφείο στο κέντρο της Αθήνας, με έμφαση στο Αστικό και Εμπορικό Δίκαιο, τις σύνθετες δικαστικές διαφορές και τη στρατηγική νομική συμβουλευτική.",
    ],
    ...aboutParagraphs.map((p, i) => [`about_body_${i + 1}`, p]),
    ...opinionsParagraphs.map((p, i) => [`opinions_body_${i + 1}`, p]),
    ["contact_address", firm.address.join(", ")],
    ["contact_phone", firm.phone],
    ["contact_email", firm.email],
    ["contact_hours", firm.hours],
    ["cta_title", "Συζητήστε την υπόθεσή σας μαζί μας"],
    [
      "cta_lead",
      "Επικοινωνήστε με το Γραφείο για μια πρώτη αξιολόγηση της υπόθεσής σας, με πλήρη εχεμύθεια.",
    ],
  ].map(([slot_key, value]) => ({ slot_key, value })),
};

const out = process.argv[2];
const json = JSON.stringify(seed, null, 2);
if (out) {
  writeFileSync(out, json + "\n");
  console.error(
    `seed → ${out}  (publications: ${seed.publications.length}, team: ${seed.team.length}, areas: ${seed.practice_areas.length}, copy: ${seed.site_content.length})`,
  );
} else {
  process.stdout.write(json + "\n");
}
