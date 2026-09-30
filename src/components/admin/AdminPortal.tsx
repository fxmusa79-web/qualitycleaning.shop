"use client";

import type { Lead } from "@/lib/leads";
import type { PageView } from "@/lib/analytics";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";

type Props = { initialAuthed: boolean; initialLeads: Lead[] };
type NavKey = "overview" | "leads" | "traffic" | "mailer";

/* ── helpers ── */
function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleString("nl-NL", {
      day: "2-digit", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  } catch { return iso; }
}

function todayStart() {
  const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime();
}

/* ────────────────────────────── main ── */
export function AdminPortal({ initialAuthed, initialLeads }: Props) {
  const [nav, setNav] = useState<NavKey>("overview");
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [views, setViews] = useState<PageView[]>([]);
  const [trafficLoaded, setTrafficLoaded] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [anchor] = useState(() => Date.now());
  const trafficInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  /* compose email modal */
  const [compose, setCompose] = useState<{ to: string; name: string } | null>(null);
  const [mailSubject, setMailSubject] = useState("");
  const [mailBody, setMailBody] = useState("");
  const [mailStatus, setMailStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [mailErr, setMailErr] = useState("");

  /* ── stats ── */
  const stats = useMemo(() => {
    const weekMs = 7 * 24 * 60 * 60 * 1000;
    const week = leads.filter(l => new Date(l.createdAt).getTime() >= anchor - weekMs).length;
    const today = views.filter(v => new Date(v.timestamp).getTime() >= todayStart()).length;
    const uniquePaths = new Set(views.filter(v => new Date(v.timestamp).getTime() >= todayStart()).map(v => v.path)).size;
    return { total: leads.length, week, viewsToday: today, uniquePaths };
  }, [leads, views, anchor]);

  /* ── filtered leads ── */
  const filteredLeads = useMemo(() => {
    const q = search.toLowerCase();
    return leads.filter(l => {
      const matchSearch = !q ||
        l.name.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        (l.phone ?? "").includes(q) ||
        l.message.toLowerCase().includes(q);
      const matchService = serviceFilter === "all" || l.service === serviceFilter;
      return matchSearch && matchService;
    });
  }, [leads, search, serviceFilter]);

  const services = useMemo(() => {
    const s = new Set(leads.map(l => l.service).filter(Boolean) as string[]);
    return Array.from(s).sort();
  }, [leads]);

  /* ── refresh traffic manually ── */
  const loadTraffic = useCallback(() => {
    void fetch("/api/admin/analytics", { credentials: "include" })
      .then(r => r.ok ? r.json() as Promise<{ views: PageView[] }> : null)
      .then((d) => {
        if (!d) return;
        setViews(d.views ?? []);
        setTrafficLoaded(true);
      });
  }, []);

  useEffect(() => {
    if (nav !== "traffic") return;

    /* Fetch analytics data and update component state asynchronously */
    const run = () => {
      void fetch("/api/admin/analytics", { credentials: "include" })
        .then(r => r.ok ? r.json() as Promise<{ views: PageView[] }> : null)
        .then((d) => {
          if (!d) return;
          setViews(d.views ?? []);
          setTrafficLoaded(true);
        });
    };

    run();
    trafficInterval.current = setInterval(run, 12000);
    return () => {
      if (trafficInterval.current) clearInterval(trafficInterval.current);
    };
  }, [nav]);

  /* ── refresh leads ── */
  async function refreshLeads() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads", { credentials: "include" });
      if (!res.ok) return;
      const d = (await res.json()) as { leads: Lead[] };
      setLeads(d.leads ?? []);
    } finally { setLoading(false); }
  }

  /* ── delete lead ── */
  async function removeLead(id: string) {
    if (!confirm("Permanent verwijderen?")) return;
    const res = await fetch(`/api/admin/leads?id=${encodeURIComponent(id)}`, {
      method: "DELETE", credentials: "include",
    });
    if (!res.ok) { alert("Verwijderen mislukt."); return; }
    setLeads(p => p.filter(l => l.id !== id));
    if (expandedId === id) setExpandedId(null);
  }

  /* ── export CSV ── */
  function exportCsv() {
    const headers: (keyof Lead)[] = ["id", "createdAt", "name", "email", "phone", "service", "message", "source"];
    const esc = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
    const rows = filteredLeads.map(l => headers.map(h => esc(String((l as Record<string, unknown>)[h] ?? ""))).join(","));
    const blob = new Blob([[headers.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
    URL.revokeObjectURL(a.href);
  }

  /* ── logout ── */
  async function logout() {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    window.location.href = "/scotdejews";
  }

  /* ── send email ── */
  async function sendMail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!compose) return;
    setMailStatus("sending"); setMailErr("");
    const res = await fetch("/api/admin/send-email", {
      method: "POST", credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: compose.to,
        subject: mailSubject,
        html: mailBody.replace(/\n/g, "<br/>"),
      }),
    });
    const d = (await res.json()) as { error?: string };
    if (!res.ok) { setMailStatus("error"); setMailErr(d.error ?? "Fout."); return; }
    setMailStatus("ok");
    setTimeout(() => { setCompose(null); setMailStatus("idle"); setMailSubject(""); setMailBody(""); }, 1500);
  }

  /* ── login ── */
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoginLoading(true); setLoginError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST", headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username: fd.get("username"), password: fd.get("password") }),
      });
      if (!res.ok) { const d = (await res.json()) as { error?: string }; setLoginError(d.error ?? "Geweigerd."); return; }
      window.location.reload();
    } catch { setLoginError("Netwerkfout."); }
    finally { setLoginLoading(false); }
  }

  /* ────── LOGIN SCREEN ────── */
  if (!initialAuthed) {
    return (
      <div className="admin-login-wrap">
        <div className="admin-login-card">
          <div className="admin-login-brand">Quality Cleaning</div>
          <h1 className="admin-login-title">Beheerderlogin</h1>
          <p className="admin-login-hint">
            Standaard tijdelijk: <code>admin</code> / <code>admin</code>. Vervang via omgevingsvariabelen vóór live.
          </p>
          <form className="admin-login-form" onSubmit={handleLogin}>
            <label className="admin-login-field">
              <span>Gebruikersnaam</span>
              <input name="username" autoComplete="username" required />
            </label>
            <label className="admin-login-field">
              <span>Wachtwoord</span>
              <input name="password" type="password" autoComplete="current-password" required />
            </label>
            {loginError && <p className="admin-login-error" role="alert">{loginError}</p>}
            <button type="submit" disabled={loginLoading} className="admin-login-btn">
              {loginLoading ? "Bezig…" : "Inloggen"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ────── DASHBOARD ────── */
  const navItems: { key: NavKey; label: string; icon: string; badge?: number }[] = [
    { key: "overview", label: "Overzicht", icon: "◎" },
    { key: "leads", label: "Leads", icon: "☰", badge: leads.length },
    { key: "traffic", label: "Live traffic", icon: "◉", badge: stats.viewsToday || undefined },
    { key: "mailer", label: "Mailer", icon: "✉" },
  ];

  return (
    <div className="admin-app">
      {/* ── SIDEBAR ── */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <span className="admin-sidebar-logo">QC</span>
          <div>
            <div className="admin-sidebar-title">Quality Cleaning</div>
            <div className="admin-sidebar-sub">Beheerpanel</div>
          </div>
        </div>

        <nav className="admin-sidebar-nav" aria-label="Adminmenu">
          {navItems.map(item => (
            <button key={item.key} type="button"
              className={`admin-nav-item${nav === item.key ? " is-active" : ""}`}
              onClick={() => setNav(item.key)}>
              <span className="admin-nav-icon" aria-hidden>{item.icon}</span>
              {item.label}
              {item.badge !== undefined && (
                <span className="admin-nav-badge">{item.badge}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <button type="button" className="admin-sidebar-logout" onClick={logout}>Uitloggen</button>
          <Link href="/" className="admin-sidebar-site">Naar website →</Link>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="admin-main">

        {/* ── OVERZICHT ── */}
        {nav === "overview" && (
          <>
            <header className="admin-main-head">
              <h1 className="admin-main-title">Overzicht</h1>
              <p className="admin-main-desc">Snel inzicht in aanvragen en bezoeken.</p>
            </header>
            <div className="admin-cards">
              <div className="admin-card">
                <div className="admin-card-label">Totaal leads</div>
                <div className="admin-card-value">{stats.total}</div>
              </div>
              <div className="admin-card">
                <div className="admin-card-label">Leads (7 dagen)</div>
                <div className="admin-card-value">{stats.week}</div>
              </div>
              <div className="admin-card">
                <div className="admin-card-label">Bezoeken vandaag</div>
                <div className="admin-card-value">{stats.viewsToday}</div>
                <div className="admin-card-note-small">Klik op <em>Live traffic</em> voor details</div>
              </div>
              <div className="admin-card">
                <div className="admin-card-label">Unieke pagina&apos;s vandaag</div>
                <div className="admin-card-value">{stats.uniquePaths}</div>
              </div>
              <div className="admin-card admin-card-muted">
                <div className="admin-card-label">Mailer status</div>
                <div className="admin-card-note">
                  Resend via <code>qualitycleaning.shop</code>.<br />
                  Van: <code>noreply@qualitycleaning.shop</code>
                </div>
              </div>
            </div>
            {leads.length > 0 && (
              <>
                <h2 className="admin-section-heading">Laatste aanvragen</h2>
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead><tr><th>Datum</th><th>Naam</th><th>E-mail</th><th>Dienst</th></tr></thead>
                    <tbody>
                      {leads.slice(0, 5).map(l => (
                        <tr key={l.id} className="admin-row">
                          <td>{fmtDate(l.createdAt)}</td>
                          <td>{l.name}</td>
                          <td><a href={`mailto:${l.email}`}>{l.email}</a></td>
                          <td>{l.service ?? "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </>
        )}

        {/* ── LEADS ── */}
        {nav === "leads" && (
          <>
            <header className="admin-main-head admin-main-head-row">
              <div>
                <h1 className="admin-main-title">Leads</h1>
                <p className="admin-main-desc">Alle formulieraanvragen — zoeken, filteren, exporteren.</p>
              </div>
              <div className="admin-toolbar">
                <button type="button" className="admin-tool-btn" onClick={() => void refreshLeads()} disabled={loading}>
                  {loading ? "Laden…" : "Vernieuwen"}
                </button>
                <button type="button" className="admin-tool-btn admin-tool-primary" onClick={exportCsv} disabled={filteredLeads.length === 0}>
                  Export CSV
                </button>
              </div>
            </header>

            {/* search + filter */}
            <div className="admin-filter-bar">
              <input
                className="admin-search"
                type="search"
                placeholder="Zoek op naam, e-mail of bericht…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <select
                className="admin-filter-select"
                value={serviceFilter}
                onChange={e => setServiceFilter(e.target.value)}
              >
                <option value="all">Alle diensten</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {(search || serviceFilter !== "all") && (
                <button type="button" className="admin-tool-btn" onClick={() => { setSearch(""); setServiceFilter("all"); }}>
                  Reset
                </button>
              )}
              <span className="admin-result-count">{filteredLeads.length} resultaten</span>
            </div>

            <div className="admin-table-wrap">
              {filteredLeads.length === 0 ? (
                <p className="admin-empty">{leads.length === 0 ? "Nog geen leads." : "Geen resultaten voor deze filter."}</p>
              ) : (
                <table className="admin-table">
                  <thead>
                    <tr><th>Datum</th><th>Naam</th><th>E-mail</th><th>Dienst</th><th /></tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map(lead => (
                      <Fragment key={lead.id}>
                        <tr className={`admin-row${expandedId === lead.id ? " is-open" : ""}`}>
                          <td>{fmtDate(lead.createdAt)}</td>
                          <td>{lead.name}</td>
                          <td><a href={`mailto:${lead.email}`}>{lead.email}</a></td>
                          <td>{lead.service ?? "—"}</td>
                          <td className="admin-row-actions">
                            <button type="button" className="admin-mini-btn"
                              onClick={() => setExpandedId(id => id === lead.id ? null : lead.id)}>
                              {expandedId === lead.id ? "Sluiten" : "Details"}
                            </button>
                            <button type="button" className="admin-mini-btn mail"
                              onClick={() => { setCompose({ to: lead.email, name: lead.name }); setNav("mailer"); }}>
                              Mail
                            </button>
                            <button type="button" className="admin-mini-btn danger" onClick={() => void removeLead(lead.id)}>
                              ✕
                            </button>
                          </td>
                        </tr>
                        {expandedId === lead.id && (
                          <tr className="admin-detail-row">
                            <td colSpan={5}>
                              <div className="admin-detail">
                                <div><strong>Telefoon</strong><p>{lead.phone ?? "—"}</p></div>
                                <div><strong>Bron</strong><p>{lead.source ?? "—"}</p></div>
                                <div className="admin-detail-full"><strong>Bericht</strong><p className="admin-detail-msg">{lead.message}</p></div>
                                <div className="admin-detail-meta"><span>ID: {lead.id}</span></div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}

        {/* ── TRAFFIC ── */}
        {nav === "traffic" && (
          <>
            <header className="admin-main-head admin-main-head-row">
              <div>
                <h1 className="admin-main-title">Live traffic</h1>
                <p className="admin-main-desc">Paginabezoeken — wordt elke 12 seconden vernieuwd.</p>
              </div>
              <div className="admin-toolbar">
                <button type="button" className="admin-tool-btn" onClick={() => void loadTraffic()}>
                  Vernieuwen
                </button>
                <span className="admin-live-dot" title="Auto-refresh aan" />
              </div>
            </header>

            {!trafficLoaded ? (
              <p className="admin-empty">Laden…</p>
            ) : views.length === 0 ? (
              <p className="admin-empty">Nog geen bezoeken geregistreerd — bezoek de website om te starten.</p>
            ) : (
              <>
                <div className="admin-cards">
                  <div className="admin-card">
                    <div className="admin-card-label">Bezoeken vandaag</div>
                    <div className="admin-card-value">{stats.viewsToday}</div>
                  </div>
                  <div className="admin-card">
                    <div className="admin-card-label">Unieke pagina&apos;s vandaag</div>
                    <div className="admin-card-value">{stats.uniquePaths}</div>
                  </div>
                  <div className="admin-card">
                    <div className="admin-card-label">Totaal opgeslagen</div>
                    <div className="admin-card-value">{views.length}</div>
                  </div>
                </div>
                <h2 className="admin-section-heading">Recente bezoeken</h2>
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr><th>Tijd</th><th>Pagina</th><th>Referrer</th><th>Browser</th></tr>
                    </thead>
                    <tbody>
                      {views.slice(0, 100).map(v => (
                        <tr key={v.id} className="admin-row">
                          <td className="admin-td-mono">{fmtDate(v.timestamp)}</td>
                          <td className="admin-td-path">{v.path}</td>
                          <td className="admin-td-ref">{v.referrer ? new URL(v.referrer, "https://x").hostname.replace(/^www\./, "") : "direct"}</td>
                          <td className="admin-td-ua">{shortUa(v.ua)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </>
        )}

        {/* ── MAILER ── */}
        {nav === "mailer" && (
          <>
            <header className="admin-main-head">
              <h1 className="admin-main-title">Mailer</h1>
              <p className="admin-main-desc">Stuur een e-mail via <strong>noreply@qualitycleaning.shop</strong> (Resend).</p>
            </header>

            <div className="admin-mailer-wrap">
              <form className="admin-mailer-form" onSubmit={e => void sendMail(e)}>
                <label className="admin-mailer-field">
                  <span>Aan (e-mailadres)</span>
                  <input
                    type="email" required maxLength={254}
                    value={compose?.to ?? ""}
                    onChange={e => setCompose(c => ({ to: e.target.value, name: c?.name ?? "" }))}
                    placeholder="naam@voorbeeld.nl"
                  />
                </label>
                <label className="admin-mailer-field">
                  <span>Onderwerp</span>
                  <input type="text" required maxLength={200} value={mailSubject}
                    onChange={e => setMailSubject(e.target.value)}
                    placeholder="Uw aanvraag bij Quality Cleaning" />
                </label>
                <label className="admin-mailer-field">
                  <span>Bericht (platte tekst — newlines worden &lt;br&gt;)</span>
                  <textarea rows={8} required maxLength={8000} value={mailBody}
                    onChange={e => setMailBody(e.target.value)}
                    placeholder="Geachte …" />
                </label>
                {mailStatus === "error" && <p className="admin-mailer-error">{mailErr}</p>}
                {mailStatus === "ok" && <p className="admin-mailer-ok">Verzonden!</p>}
                <div className="admin-mailer-actions">
                  <button type="submit" className="admin-login-btn admin-mailer-submit"
                    disabled={mailStatus === "sending"}>
                    {mailStatus === "sending" ? "Verzenden…" : "Verstuur e-mail"}
                  </button>
                  {compose && (
                    <button type="button" className="admin-tool-btn"
                      onClick={() => { setCompose(null); setMailSubject(""); setMailBody(""); setMailStatus("idle"); }}>
                      Leegmaken
                    </button>
                  )}
                </div>
                {leads.length > 0 && (
                  <div className="admin-mailer-quick">
                    <p className="admin-mailer-quick-label">Snel adresseren:</p>
                    <div className="admin-mailer-quick-list">
                      {leads.slice(0, 12).map(l => (
                        <button key={l.id} type="button" className="admin-mailer-chip"
                          onClick={() => setCompose({ to: l.email, name: l.name })}>
                          {l.name} <span>{l.email}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function shortUa(ua?: string): string {
  if (!ua) return "—";
  if (/iPhone|iPad/.test(ua)) return "iOS";
  if (/Android/.test(ua)) return "Android";
  if (/Chrome/.test(ua)) return "Chrome";
  if (/Firefox/.test(ua)) return "Firefox";
  if (/Safari/.test(ua)) return "Safari";
  return ua.slice(0, 22);
}
