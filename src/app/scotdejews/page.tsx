import { cookies } from "next/headers";
import { AdminPortal } from "@/components/admin/AdminPortal";
import { cookieName, verifyAdminSessionToken } from "@/lib/admin-session";
import { readLeads } from "@/lib/leads";

export const dynamic = "force-dynamic";

export default async function ScotAdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName())?.value;
  const authed = verifyAdminSessionToken(token);
  const leads = authed ? await readLeads() : [];

  return <AdminPortal initialAuthed={authed} initialLeads={leads} />;
}
