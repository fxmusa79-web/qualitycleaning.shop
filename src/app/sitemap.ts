import type { MetadataRoute } from "next";

const base =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3002";

const paths: Array<{ path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "",                       priority: 1.0, freq: "weekly"  },
  { path: "/diensten",              priority: 0.8, freq: "monthly" },
  { path: "/gevelreiniging",        priority: 0.8, freq: "monthly" },
  { path: "/glazenwassen",          priority: 0.8, freq: "monthly" },
  { path: "/zonnepanelen-reinigen", priority: 0.8, freq: "monthly" },
  { path: "/autoreiniging",         priority: 0.8, freq: "monthly" },
  { path: "/werkwijze",             priority: 0.6, freq: "monthly" },
  { path: "/prijzen",               priority: 0.7, freq: "monthly" },
  { path: "/over-ons",              priority: 0.6, freq: "monthly" },
  { path: "/contact",               priority: 0.7, freq: "monthly" },
  { path: "/privacy",               priority: 0.3, freq: "yearly"  },
  { path: "/voorwaarden",           priority: 0.3, freq: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map(({ path, priority, freq }) => ({
    url: `${base}${path === "" ? "/" : path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
