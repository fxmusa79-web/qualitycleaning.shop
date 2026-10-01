"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/diensten",  label: "Diensten" },
  { href: "/projecten", label: "Projecten" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/prijzen",   label: "Prijzen" },
  { href: "/over-ons",  label: "Over ons" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  /* Sluit drawer bij Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Vergrendel scroll body als drawer open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Top bar ───────────────────────────────────── */}
      <nav className="site-nav" aria-label="Hoofdmenu">
        <Link href="/" className="logo" onClick={close}>
          Quality <span>Cleaning</span>
        </Link>

        <div className="site-nav-end">
          {/* Desktop links — hidden on mobile via CSS */}
          <ul className="site-nav-links" aria-label="Navigatie">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/31649988924?text=Hallo%20Quality%20Cleaning"
                className="nav-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger toggle — visible only on mobile */}
          <button
            type="button"
            className="site-nav-toggle"
            aria-expanded={open}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen(o => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
                : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Backdrop ──────────────────────────────────── */}
      <div
        className={`nav-backdrop${open ? " is-visible" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Drawer sidebar ────────────────────────────── */}
      <aside
        className={`nav-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobiel navigatiemenu"
      >
        {/* Drawer header */}
        <div className="nav-drawer-head">
          <Link href="/" className="logo nav-drawer-logo" onClick={close}>
            Quality <span>Cleaning</span>
          </Link>
          <button
            type="button"
            className="nav-drawer-close"
            onClick={close}
            aria-label="Menu sluiten"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="nav-drawer-nav" aria-label="Drawer navigatie">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="nav-drawer-link" onClick={close}>
              {label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Contact acties */}
        <div className="nav-drawer-contact">
          <p className="nav-drawer-contact-label">Direct contact</p>
          <a
            href="https://wa.me/31649988924?text=Hallo%20Quality%20Cleaning%2C%20ik%20wil%20graag%20een%20offerte%20aanvragen"
            className="nav-drawer-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp ons
          </a>
          <a href="tel:+31649988924" className="nav-drawer-tel" onClick={close}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.36a16 16 0 006.72 6.72l1.72-1.72a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            06-49988924
          </a>
        </div>

        {/* Footer */}
        <div className="nav-drawer-footer">
          <div className="nav-drawer-footer-brand">
            <div className="nav-drawer-dot" />
            <span>Groningen &amp; omstreken</span>
          </div>
          <span className="nav-drawer-footer-tag">Osmosewater reiniging · Mobiel</span>
        </div>
      </aside>
    </>
  );
}
