import { NextResponse } from "next/server";
import { Resend } from "resend";
import { appendLead } from "@/lib/leads";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const website = typeof body.website === "string" ? body.website : "";
    if (website.trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const service =
      typeof body.service === "string" ? body.service.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const source =
      typeof body.source === "string" ? body.source.trim() : "website";

    if (!name || name.length > 120) {
      return NextResponse.json({ error: "Naam ontbreekt of te lang." }, { status: 400 });
    }
    if (!email || email.length > 254 || !email.includes("@")) {
      return NextResponse.json({ error: "Geldig e-mailadres vereist." }, { status: 400 });
    }
    if (!message || message.length > 8000) {
      return NextResponse.json({ error: "Bericht ontbreekt of te lang." }, { status: 400 });
    }

    const lead = await appendLead({
      name,
      email,
      phone: phone || undefined,
      service: service || undefined,
      message,
      source: source || "website",
    });

    const key = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (key && from && to) {
      const resend = new Resend(key);
      await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `Nieuwe aanvraag — ${name}`,
        html: `
          <p><strong>Naam:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Telefoon:</strong> ${escapeHtml(phone)}</p>` : ""}
          ${service ? `<p><strong>Dienst:</strong> ${escapeHtml(service)}</p>` : ""}
          <p><strong>Bron:</strong> ${escapeHtml(source)}</p>
          <p><strong>Bericht:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p style="font-size:12px;color:#666;">Lead-id: ${escapeHtml(lead.id)}</p>
        `,
      });
    }

    return NextResponse.json({ ok: true, id: lead.id }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 },
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
