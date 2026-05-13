import { NextResponse } from "next/server";
import { appendView } from "@/lib/analytics";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const pagePath =
      typeof body.path === "string" ? body.path.slice(0, 200) : "/";
    const referrer =
      typeof body.referrer === "string" ? body.referrer.slice(0, 300) : undefined;
    const ua =
      req.headers.get("user-agent")?.slice(0, 200) ?? undefined;

    /* Geen bots tracken */
    if (ua && /bot|crawl|spider|lighthouse|prerender/i.test(ua)) {
      return NextResponse.json({ ok: true });
    }

    await appendView({ path: pagePath, referrer: referrer || undefined, ua });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
