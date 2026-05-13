import { mkdir, appendFile, readFile, writeFile } from "fs/promises";
import path from "path";

export type Lead = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  source?: string;
};

const LEADS_PATH = path.join(process.cwd(), "data", "leads.jsonl");

export async function appendLead(
  input: Omit<Lead, "id" | "createdAt">,
): Promise<Lead> {
  await mkdir(path.dirname(LEADS_PATH), { recursive: true });
  const row: Lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...input,
  };
  await appendFile(LEADS_PATH, `${JSON.stringify(row)}\n`, "utf8");
  return row;
}

/** Nieuwste eerst */
export async function readLeads(): Promise<Lead[]> {
  try {
    const raw = await readFile(LEADS_PATH, "utf8");
    const rows = raw
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line) as Lead);
    return rows.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  } catch {
    return [];
  }
}

export async function deleteLeadById(id: string): Promise<boolean> {
  try {
    const raw = await readFile(LEADS_PATH, "utf8");
    const lines = raw.trim().split("\n").filter(Boolean);
    let removed = false;
    const kept = lines.filter((line) => {
      try {
        const o = JSON.parse(line) as Lead;
        if (o.id === id) {
          removed = true;
          return false;
        }
        return true;
      } catch {
        return true;
      }
    });
    if (!removed) return false;
    await writeFile(
      LEADS_PATH,
      kept.length ? `${kept.join("\n")}\n` : "",
      "utf8",
    );
    return true;
  } catch {
    return false;
  }
}
