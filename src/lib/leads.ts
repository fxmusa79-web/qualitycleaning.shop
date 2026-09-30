import { env } from "cloudflare:workers";

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

type LeadRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  source: string | null;
};

function rowToLead(r: LeadRow): Lead {
  return {
    id: r.id,
    createdAt: r.created_at,
    name: r.name,
    email: r.email,
    phone: r.phone ?? undefined,
    service: r.service ?? undefined,
    message: r.message,
    source: r.source ?? undefined,
  };
}

export async function appendLead(
  input: Omit<Lead, "id" | "createdAt">,
): Promise<Lead> {
  const row: Lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...input,
  };
  const db = env.DB;
  await db
    .prepare(
      `INSERT INTO leads (id, created_at, name, email, phone, service, message, source)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      row.id,
      row.createdAt,
      row.name,
      row.email,
      row.phone ?? null,
      row.service ?? null,
      row.message,
      row.source ?? "website",
    )
    .run();
  return row;
}

/** Nieuwste eerst */
export async function readLeads(): Promise<Lead[]> {
  const db = env.DB;
  const result = await db
    .prepare("SELECT * FROM leads ORDER BY created_at DESC")
    .all<LeadRow>();
  return (result.results ?? []).map(rowToLead);
}

export async function deleteLeadById(id: string): Promise<boolean> {
  const db = env.DB;
  const result = await db
    .prepare("DELETE FROM leads WHERE id = ?")
    .bind(id)
    .run();
  return (result.meta?.changes ?? 0) > 0;
}
