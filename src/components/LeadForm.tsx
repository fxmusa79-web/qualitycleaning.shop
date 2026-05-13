"use client";

import { useState } from "react";

type Props = {
  source?: string;
};

export function LeadForm({ source = "website" }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const website = String(fd.get("website") ?? "");
    if (website.trim() !== "") return;

    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      service: String(fd.get("service") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      source,
      website: "",
    };

    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Versturen mislukt.");
        return;
      }
      setStatus("ok");
      setMessage("Bedankt! We nemen zo snel mogelijk contact met u op.");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Netwerkfout. Probeer het later opnieuw.");
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="lead-form-honeypot"
        aria-hidden="true"
      />
      <div className="lead-form-grid">
        <label className="lead-form-field">
          <span>Naam *</span>
          <input name="name" type="text" required maxLength={120} />
        </label>
        <label className="lead-form-field">
          <span>E-mail *</span>
          <input name="email" type="email" required maxLength={254} />
        </label>
        <label className="lead-form-field">
          <span>Telefoon</span>
          <input name="phone" type="tel" maxLength={40} />
        </label>
        <label className="lead-form-field">
          <span>Dienst</span>
          <select name="service" defaultValue="">
            <option value="">Kies een optie</option>
            <option value="Gevelreiniging">Gevelreiniging</option>
            <option value="Dak / dakpannen">Dak / dakpannen</option>
            <option value="Zonnepanelen">Zonnepanelen</option>
            <option value="Glazen wassen">Glazen wassen</option>
            <option value="Autoreiniging">Autoreiniging</option>
            <option value="Maatwerk / overig">Maatwerk / overig</option>
          </select>
        </label>
      </div>
      <label className="lead-form-field lead-form-field-full">
        <span>Uw bericht *</span>
        <textarea name="message" required rows={4} maxLength={8000} />
      </label>
      {status !== "idle" && (
        <p
          className={`lead-form-feedback ${status === "ok" ? "is-ok" : ""} ${status === "error" ? "is-error" : ""}`}
          role="status"
        >
          {message}
        </p>
      )}
      <button
        type="submit"
        className="btn-primary lead-form-submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Versturen…" : "Verstuur aanvraag"}
      </button>
    </form>
  );
}
