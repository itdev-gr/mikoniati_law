import type { MetadataRoute } from "next";
import { fetchPracticeAreas, fetchTeam } from "@/lib/cms";

const BASE = "https://sm-legal.gr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [areas, team] = await Promise.all([fetchPracticeAreas(), fetchTeam()]);

  const staticRoutes = [
    "",
    "/grafeio",
    "/tomeis",
    "/gnomodotiseis",
    "/omada",
    "/nea",
    "/epikoinonia",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      priority: path === "" ? 1 : 0.8,
    })),
    ...areas.map((area) => ({
      url: `${BASE}/tomeis/${area.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
    ...team.flatMap((member) => [
      { url: `${BASE}/omada/${member.slug}`, lastModified: new Date(), priority: 0.7 },
      ...(member.hasPublications
        ? [
            {
              url: `${BASE}/omada/${member.slug}/dimosieuseis`,
              lastModified: new Date(),
              priority: 0.6,
            },
          ]
        : []),
    ]),
  ];
}
