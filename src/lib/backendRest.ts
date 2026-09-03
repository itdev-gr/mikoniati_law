import { backend } from "@/data/backend";

const headers = {
  apikey: backend.anonKey,
  Authorization: `Bearer ${backend.anonKey}`,
  "Content-Type": "application/json",
};

/**
 * GET από το dashboard backend, με cache και revalidate κάθε 5 λεπτά, ώστε οι
 * αλλαγές του πελάτη να φτάνουν στο live site χωρίς redeploy. Το κουμπί
 * «Publish» στο dashboard (deploy hook) κάνει άμεσο rebuild όταν βιάζεται.
 */
export async function restGet<T>(pathAndQuery: string): Promise<T> {
  const res = await fetch(`${backend.url}/rest/v1/${pathAndQuery}`, {
    headers,
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Supabase GET failed: ${res.status}`);
  return res.json() as Promise<T>;
}
