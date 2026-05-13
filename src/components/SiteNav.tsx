"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/diensten", label: "Diensten" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/prijzen", label: "Prijzen" },
  { href: "/over-ons", label: "Over ons" },
] as const;

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeNav = () => setMenuOpen(false);

  return (
    <nav className="site-nav" aria-label="Hoofdmenu">
      <Link href="/" className="logo" onClick={closeNav}>
        Quality <span>Cleaning</span>
      </Link>
      <div className="site-nav-end">
        <button
          type="button"
          className="site-nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg
            className="site-nav-toggle-icon"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 12h16M4 16h16" />
            )}
          </svg>
          <span className="sr-only">
            {menuOpen ? "Menu sluiten" : "Menu openen"}
          </span>
        </button>
        <ul
          id="site-nav-menu"
          className={`site-nav-links${menuOpen ? " is-open" : ""}`}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={closeNav}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta" onClick={closeNav}>
              Offerte
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
