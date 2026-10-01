import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glazenwasser Groningen — ramen & kozijnen aan huis | Quality Cleaning",
  description:
    "Professionele glazenwasser in Groningen: ramen, kozijnen, erkers en serres aan huis. Mobiel met osmosewater-technologie — straalvrij drogen zonder kalk. Bel 06-49988924.",
  keywords: [
    "glazenwasser Groningen",
    "ramen wassen Groningen",
    "ramen lappen aan huis",
    "glazenwasser aan huis",
    "erker ramen reinigen",
    "serre glazenwassen",
    "osmosewater ramen",
  ],
  alternates: { canonical: "/glazenwassen" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Glazenwassen Groningen",
  description:
    "Professionele glazenwasser aan huis in Groningen: ramen, kozijnen, erkers en serres reinigen met osmosewater.",
  provider: {
    "@type": "LocalBusiness",
    name: "Quality Cleaning",
    telephone: "+31649988924",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Iepenlaan 61",
      postalCode: "9741 GB",
      addressLocality: "Groningen",
      addressCountry: "NL",
    },
  },
  areaServed: "Groningen",
  serviceType: "Glazenwassen",
};

const photos = [
  {
    src: "/images/glazenwassen-telescoopsteel-ramen.jpg",
    alt: "Glazenwasser met telescoopsteel reinigt ramen van buitenaf — Groningen",
    caption: "Telescoopsteel met watertoevoer",
  },
  {
    src: "/images/glazenwassen-hoog-bereik-telescoop.jpg",
    alt: "Hoge ramen bereiken met telescopische waterkopper — Groningen",
    caption: "Hoog bereik, veilig van de grond",
  },
  {
    src: "/images/glazenwassen-schuifpui-schoon.jpg",
    alt: "Schuifpui en glazen deuren gereinigd met osmosewater",
    caption: "Schuifpui & glasdeuren",
  },
  {
    src: "/images/glazenwassen-erker-na.jpg",
    alt: "Erker-ramen na reiniging — helder en streeploos",
    caption: "Erker — na reiniging",
  },
  {
    src: "/images/ramen-kozijnen-gereinigd.jpg",
    alt: "Ramen en kozijnen volledig gereinigd op Groningse woning",
    caption: "Ramen & kozijnen resultaat",
  },
  {
    src: "/images/glazenwassen-resultaat-helderblank.jpg",
    alt: "Spiegelglad resultaat na glazenwassen — geen kalk of strepen",
    caption: "Spiegelglad eindresultaat",
  },
];

export default function GlazenwassenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <article className="page-shell page-shell--wide">
        {/* Header */}
        <header className="service-header">
          <div className="section-tag">Dienst</div>
          <h1 className="page-shell-title">
            Glazenwasser Groningen<br />
            <em>ramen &amp; kozijnen aan huis</em>
          </h1>
          <p className="page-shell-lead">
            Heldere ramen zonder strepen of kalkvlekken — met osmosewater technologie
            op locatie bij u thuis. Bereiken tot 4 verdiepingen hoog, volledig veilig
            en zonder steiger.
          </p>
          <div className="service-header-actions">
            <a
              href="https://wa.me/31649988924?text=Ik%20wil%20een%20offerte%20voor%20glazenwassen"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp offerte
            </a>
            <a href="tel:+31649988924" className="btn-secondary">
              06-49988924
            </a>
          </div>
        </header>

        {/* Hero photo */}
        <div className="service-hero-photo">
          <Image
            src="/images/glazenwassen-telescoopsteel-ramen.jpg"
            alt="Professionele glazenwasser Groningen — telescoopsteel met osmosewater"
            width={900}
            height={600}
            className="service-hero-img"
            priority
          />
        </div>

        <div className="page-shell-body">

          {/* Why osmose */}
          <h2 className="page-shell-h2">Waarom osmosewater bij glazenwassen?</h2>
          <p>
            Bij traditioneel ramen wassen blijven zeepresten en mineralen achter —
            zeker bij zonlicht ziet u daarna sneller strepen. Wij werken met{" "}
            <strong>osmosewater (0 ppm)</strong>: water zonder mineralen of
            onzuiverheden. Tijdens het drogen laat het glas vrijwel geen enkel residu
            achter. Het resultaat: helderblanke ramen die <em>langer schoon blijven</em>.
          </p>
          <ul className="page-shell-body-list">
            <li>Geen kalkaanslag of witte vlekken na het drogen</li>
            <li>Geen chemische reinigingsmiddelen nodig</li>
            <li>Schoner resultaat dan traditionele rubberstrip-methode</li>
            <li>Veilig voor mensen, dieren en tuin</li>
          </ul>

          {/* Photo grid */}
          <h2 className="page-shell-h2">Ons werk in beeld</h2>
          <div className="service-photo-grid">
            {photos.map((p) => (
              <figure key={p.src} className="service-photo-item">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={500}
                  height={380}
                  className="service-photo-img"
                />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>

          {/* What we clean */}
          <h2 className="page-shell-h2">Wat wij voor u reinigen</h2>
          <p>
            Als <strong>glazenwasser op locatie</strong> reinigen we alle glasoppervlakken
            die er toe doen:
          </p>
          <ul className="page-shell-body-list">
            <li><strong>Ramen &amp; kozijnen</strong> — voor, achter en zijkant</li>
            <li><strong>Erkers</strong> — ook schuine en moeilijk bereikbare vlakken</li>
            <li><strong>Schuifpuien &amp; glazen deuren</strong></li>
            <li><strong>Serre en veranda beglazing</strong></li>
            <li><strong>Bedrijfspanden</strong> — kantoren, winkels en scholen</li>
            <li><strong>Dakkapellen</strong> (tot 4 verdiepingen hoog)</li>
          </ul>

          {/* Before/After erker */}
          <h2 className="page-shell-h2">Voor &amp; na — erker reiniging</h2>
          <div className="before-after-grid">
            <figure className="before-after-item before">
              <Image
                src="/images/glazenwassen-erker-voor.jpg"
                alt="Erker ramen vóór reiniging — vuil en besloten"
                width={480}
                height={360}
                className="service-photo-img"
              />
              <figcaption>
                <span className="ba-label ba-label--before">Vóór</span>
                Erker — beslaan en vuil
              </figcaption>
            </figure>
            <figure className="before-after-item after">
              <Image
                src="/images/glazenwassen-erker-na.jpg"
                alt="Erker ramen ná reiniging — helder en streeploos"
                width={480}
                height={360}
                className="service-photo-img"
              />
              <figcaption>
                <span className="ba-label ba-label--after">Na</span>
                Erker — helder en streeploos
              </figcaption>
            </figure>
          </div>

          {/* Pricing indication */}
          <h2 className="page-shell-h2">Tarieven &amp; offerte</h2>
          <p>
            De prijs is afhankelijk van de omvang en bereikbaarheid. Wij geven
            altijd een <strong>vrijblijvende offerte op maat</strong> — geen
            verborgen kosten. Gemiddeld rekenen particulieren:
          </p>
          <ul className="page-shell-body-list">
            <li>Kleine woning (tot 8 ramen) — <em>vanaf €45</em></li>
            <li>Middelgrote woning (8–16 ramen) — <em>vanaf €65</em></li>
            <li>Grote woning / bedrijfspand — <em>op offerte</em></li>
          </ul>

          {/* Service area */}
          <h2 className="page-shell-h2">Werkgebied — Groningen &amp; omstreken</h2>
          <p>
            Wij zijn <strong>mobiel gevestigd in Groningen</strong> en werken door
            heel Nederland. Regelmatig rijden wij door: Groningen, Haren, Hoogezand,
            Leek, Winschoten, Veendam en omliggende gemeenten in de provincie.
            Ook buiten de regio beschikbaar op aanvraag.
          </p>

          <p className="page-shell-body-cta">
            <a
              href="https://wa.me/31649988924?text=Ik%20wil%20een%20offerte%20voor%20glazenwassen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vraag gratis offerte aan via WhatsApp →
            </a>
          </p>
        </div>

        <p className="page-shell-back">
          <Link href="/">← Terug naar home</Link>
        </p>
      </article>
    </>
  );
}
