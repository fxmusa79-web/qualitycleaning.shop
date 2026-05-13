import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { cookieName, verifyAdminSessionToken } from "@/lib/admin-session";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName())?.value;
  if (!verifyAdminSessionToken(token)) {
    return NextResponse.json({ error: "Niet ingelogd." }, { status: 401 });
  }

  const body = (await req.json()) as Record<string, unknown>;
  const to = typeof body.to === "string" ? body.to.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const html = typeof body.html === "string" ? body.html.trim() : "";

  if (!to || !to.includes("@") || !subject || !html) {
    return NextResponse.json({ error: "Velden onvolledig." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "noreply@qualitycleaning.shop";

  if (!key) {
    return NextResponse.json(
      { error: "RESEND_API_KEY niet geconfigureerd." },
      { status: 503 },
    );
  }

  const resend = new Resend(key);
  const { error } = await resend.emails.send({ from, to: [to], subject, html });

  if (error) {
    return NextResponse.json(
      { error: `Verzenden mislukt: ${error.message}` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
