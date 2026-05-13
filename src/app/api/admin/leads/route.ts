import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { cookieName, verifyAdminSessionToken } from "@/lib/admin-session";
import { deleteLeadById, readLeads } from "@/lib/leads";

async function assertAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName())?.value;
  return verifyAdminSessionToken(token);
}

export async function GET() {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "Niet ingelogd." }, { status: 401 });
  }
  const leads = await readLeads();
  return NextResponse.json({ leads }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "Niet ingelogd." }, { status: 401 });
  }
  const id = req.nextUrl.searchParams.get("id");
  if (!id || id.length > 80) {
    return NextResponse.json({ error: "Ongeldige id." }, { status: 400 });
  }
  const ok = await deleteLeadById(id);
  if (!ok) {
    return NextResponse.json({ error: "Lead niet gevonden." }, { status: 404 });
  }
  return NextResponse.json({ ok: true }, { status: 200 });
}
