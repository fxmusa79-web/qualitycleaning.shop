import { env } from "cloudflare:workers";

export type PageView = {
  id: string;
  timestamp: string;
  path: string;
  referrer?: string;
  ua?: string;
};

type PageViewRow = {
  id: string;
  timestamp: string;
  path: string;
  referrer: string | null;
  ua: string | null;
};

export async function appendView(
  input: Omit<PageView, "id" | "timestamp">,
): Promise<void> {
  const db = env.DB;
  await db
    .prepare(
      `INSERT INTO page_views (id, timestamp, path, referrer, ua)
       VALUES (?, ?, ?, ?, ?)`,
    )
    .bind(
      crypto.randomUUID(),
      new Date().toISOString(),
      input.path,
      input.referrer ?? null,
      input.ua ?? null,
    )
    .run();
}

export async function readViews(limit = 500): Promise<PageView[]> {
  const db = env.DB;
  const result = await db
    .prepare(
      "SELECT * FROM page_views ORDER BY timestamp DESC LIMIT ?",
    )
    .bind(limit)
    .all<PageViewRow>();
  return (result.results ?? []).map((r) => ({
    id: r.id,
    timestamp: r.timestamp,
    path: r.path,
    referrer: r.referrer ?? undefined,
    ua: r.ua ?? undefined,
  }));
}
