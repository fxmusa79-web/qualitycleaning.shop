import { mkdir, appendFile, readFile } from "fs/promises";
import path from "path";

export type PageView = {
  id: string;
  timestamp: string;
  path: string;
  referrer?: string;
  ua?: string;
};

const FILE = path.join(process.cwd(), "data", "analytics.jsonl");

export async function appendView(
  input: Omit<PageView, "id" | "timestamp">,
): Promise<void> {
  await mkdir(path.dirname(FILE), { recursive: true });
  const row: PageView = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    ...input,
  };
  await appendFile(FILE, `${JSON.stringify(row)}\n`, "utf8");
}

export async function readViews(limit = 500): Promise<PageView[]> {
  try {
    const raw = await readFile(FILE, "utf8");
    const rows = raw
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((l) => JSON.parse(l) as PageView);
    return rows.slice(-limit).reverse();
  } catch {
    return [];
  }
}
