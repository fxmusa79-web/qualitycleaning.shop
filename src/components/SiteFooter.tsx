import Link from "next/link";

const FOOTER_NAV = [
  { href: "/diensten",              label: "Alle diensten" },
  { href: "/gevelreiniging",        label: "Gevelreiniging" },
  { href: "/glazenwassen",          label: "Glazenwassen" },
  { href: "/zonnepanelen-reinigen", label: "Zonnepanelen reinigen" },
  { href: "/autoreiniging",         label: "Autoreiniging" },
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
              <a href="mailto:info@qualitycleaning.shop">info@qualitycleaning.shop</a>
            </li>
            <li>
              <span className="site-footer-label">Vestiging</span>
              <span>Groningen &amp; omstreken</span>
            </li>
            <li>
              <span className="site-footer-label">KvK</span>
              <span>Volgt spoedig</span>
            </li>
            <li>
              <span className="site-footer-label">BTW</span>
              <span>Volgt spoedig</span>
            </li>
          </ul>
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
