import { NextResponse } from "next/server";
import {
  adminCredentials,
  cookieName,
  createAdminSessionToken,
} from "@/lib/admin-session";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const username =
      typeof body.username === "string" ? body.username.trim() : "";
    const password =
      typeof body.password === "string" ? body.password.trim() : "";

    const cred = adminCredentials();
    if (username !== cred.username || password !== cred.password) {
      return NextResponse.json({ error: "Onjuiste gegevens." }, { status: 401 });
    }

    const token = createAdminSessionToken();
    const res = NextResponse.json({ ok: true }, { status: 200 });
    res.cookies.set(cookieName(), token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Login mislukt." }, { status: 500 });
  }
}
