import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { cookieName, verifyAdminSessionToken } from "@/lib/admin-session";
import { readViews } from "@/lib/analytics";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName())?.value;
  if (!verifyAdminSessionToken(token)) {
    return NextResponse.json({ error: "Niet ingelogd." }, { status: 401 });
  }
  const views = await readViews(500);
  return NextResponse.json({ views });
}
