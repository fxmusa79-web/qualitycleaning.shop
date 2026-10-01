import Link from "next/link";

const FOOTER_NAV = [
  { href: "/diensten",              label: "Alle diensten" },
  { href: "/gevelreiniging",        label: "Gevelreiniging" },
  { href: "/glazenwassen",          label: "Glazenwassen" },
  { href: "/zonnepanelen-reinigen", label: "Zonnepanelen reinigen" },
  { href: "/autoreiniging",         label: "Autoreiniging" },
  { href: "/projecten",             label: "Projecten & galerij" },
  { href: "/werkwijze",             label: "Werkwijze" },
  { href: "/prijzen",               label: "Prijzen" },
  { href: "/over-ons",              label: "Over ons" },
  { href: "/contact",               label: "Contact & offerte" },
] as const;

const FOOTER_LEGAL = [
  { href: "/privacy", label: "Privacybeleid" },
  { href: "/voorwaarden", label: "Algemene voorwaarden" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link href="/" className="footer-logo">
            Quality <span>Cleaning</span>
          </Link>
          <p className="site-footer-tagline">
            Mobiele reiniging met osmosewater — professioneel en milieuvriendelijk.
          </p>
        </div>

        <div className="site-footer-col">
          <h2 className="site-footer-heading">Pagina&apos;s</h2>
          <ul className="site-footer-list">
            {FOOTER_NAV.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer-col">
          <h2 className="site-footer-heading">Contact</h2>
          <ul className="site-footer-contact">
            <li>
              <span className="site-footer-label">Telefoon</span>
              <a href="tel:+31649988924">06-49988924</a>
            </li>
            <li>
              <span className="site-footer-label">E-mail</span>
              <a href="mailto:info@qualitycleaning050.nl">info@qualitycleaning050.nl</a>
            </li>
            <li>
              <span className="site-footer-label">Adres</span>
              <span>Iepenlaan 61, 9741 GB Groningen</span>
            </li>
            <li>
              <span className="site-footer-label">KvK</span>
              <span>91172314</span>
            </li>
          </ul>
        </div>

        <div className="site-footer-col">
          <h2 className="site-footer-heading">Volg ons</h2>
          <div className="site-footer-social">
            <a
              href="https://share.google/PVGPccrJqxOY3o8HN"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-social-link"
              aria-label="Quality Cleaning op Google"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google reviews
            </a>
            <a
              href="https://instagram.com/qualitycleaning.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-social-link"
              aria-label="Quality Cleaning op Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="site-footer-col">
          <h2 className="site-footer-heading">Juridisch</h2>
          <ul className="site-footer-list">
            {FOOTER_LEGAL.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer-bar">
        <p>
          © {new Date().getFullYear()} Quality Cleaning. Alle rechten voorbehouden.
        </p>
        <a
          href="https://tinsightsagency.com"
          target="_blank"
          rel="noopener noreferrer"
          className="tinsights-badge"
          aria-label="Website gebouwd door TINSIGHTS"
        >
          <img
            src="/tinsights-badge.png"
            alt="Built by TINSIGHTS"
            width={140}
            height={40}
          />
        </a>
      </div>
    </footer>
  );
}
