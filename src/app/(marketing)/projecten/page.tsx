import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projecten & Galerij — Quality Cleaning Groningen",
  description:
    "Bekijk onze uitgevoerde reinigingsprojecten in Groningen en omstreken. Gevelreiniging, glazenwassen, zonnepanelen en meer — vóór & na foto's en echte resultaten.",
  alternates: { canonical: "https://qualitycleaning.shop/projecten" },
  openGraph: {
    title: "Projecten & Galerij — Quality Cleaning Groningen",
    description:
      "Echte resultaten van gevelreiniging, glazenwassen en zonnepanelenreiniging in Groningen.",
    url: "https://qualitycleaning.shop/projecten",
  },
};

/* ──────────────────────────────────────────────────────────────
   Photo data
────────────────────────────────────────────────────────────── */
const VOOR_NA = [
  {
    cat: "Garagedeur",
    voor: {
      src: "/images/garage-deur-voor-reiniging.jpg",
      alt: "Garagedeur vóór reiniging — mos en aanslag",
    },
    na: {
      src: "/images/garage-deur-na-reiniging.jpg",
      alt: "Garagedeur ná reiniging — stralend resultaat",
    },
  },
  {
    cat: "Bedrijfspand",
    voor: {
      src: "/images/bedrijfspand-reiniging-voor.jpg",
      alt: "Bedrijfspand vóór reiniging Groningen",
    },
    na: {
      src: "/images/bedrijfspand-reiniging-na.jpg",
      alt: "Bedrijfspand ná reiniging — gevel & glas",
    },
  },
  {
    cat: "Erker",
    voor: {
      src: "/images/glazenwassen-erker-voor.jpg",
      alt: "Erker vóór reiniging — vuile beglazing",
    },
    na: {
      src: "/images/glazenwassen-erker-na.jpg",
      alt: "Erker ná reiniging — heldere ruiten",
    },
  },
  {
    cat: "Gevel",
    voor: {
      src: "/images/gevelreiniging-gevel-voor.jpg",
      alt: "Gevel vóór reiniging — mos en algen",
    },
    na: {
      src: "/images/gevelreiniging-resultaat-schoon.jpg",
      alt: "Gevel ná hogedrukreiniging — schoon resultaat",
    },
  },
];

const GALLERY: Array<{ src: string; alt: string; caption: string; cat: string }> = [
  {
    src: "/images/glazenwassen-hoog-bereik-telescoop.jpg",
    alt: "Glazenwassen op hoogte met telescoopsteel — Groningen",
    caption: "Glazenwassen op hoogte",
    cat: "Glazenwassen",
  },
  {
    src: "/images/glazenwassen-schuifpui-schoon.jpg",
    alt: "Schuifpui en glasdeuren gereinigd met osmosewater",
    caption: "Schuifpui & glasdeuren",
    cat: "Glazenwassen",
  },
  {
    src: "/images/glazenwassen-telescoopsteel-ramen.jpg",
    alt: "Ramen wassen met telescoopsteel — professioneel",
    caption: "Telescoop ramen wassen",
    cat: "Glazenwassen",
  },
  {
    src: "/images/glazenwassen-resultaat-helderblank.jpg",
    alt: "Stralend schone ramen na glazenwassen",
    caption: "Helder blank resultaat",
    cat: "Glazenwassen",
  },
  {
    src: "/images/ramen-kozijnen-gereinigd.jpg",
    alt: "Ramen en kozijnen gereinigd met osmosewater",
    caption: "Ramen & kozijnen",
    cat: "Glazenwassen",
  },
  {
    src: "/images/gevelreiniging-flatgebouw-hogedruk.jpg",
    alt: "Gevelreiniging flatgebouw Groningen hogedruk",
    caption: "Gevelreiniging — flatgebouw",
    cat: "Gevelreiniging",
  },
  {
    src: "/images/woning-gevel-schoon-groningen.jpg",
    alt: "Woning gevel schoon in Groningen",
    caption: "Woning gevel & ramen",
    cat: "Gevelreiniging",
  },
  {
    src: "/images/gevelreiniging-apparatuur-opstelling.jpg",
    alt: "Gevelreiniging apparatuur opstelling op locatie",
    caption: "Opstelling — gevelreiniging",
    cat: "Gevelreiniging",
  },
  {
    src: "/images/bedrijfspand-glazenwassen-detail.jpg",
    alt: "Bedrijfspand glazenwassen detail Groningen",
    caption: "Zakelijk — bedrijfspanden",
    cat: "Bedrijfspanden",
  },
  {
    src: "/images/woning-exterieur-gereinigd.jpg",
    alt: "Woning exterieur volledig gereinigd",
    caption: "Woning exterieur totaal",
    cat: "Bedrijfspanden",
  },
  {
    src: "/images/woning-ramen-schoon-resultaat.jpg",
    alt: "Woning ramen schoon na reiniging",
    caption: "Woning ramen — schoon resultaat",
    cat: "Glazenwassen",
  },
  {
    src: "/images/serre-veranda-gereinigd.jpg",
    alt: "Serre en veranda beglazing gereinigd — Groningen",
    caption: "Serre & veranda reiniging",
    cat: "Serres & overkappingen",
  },
  {
    src: "/images/serre-overkapping-reiniging.jpg",
    alt: "Overkapping en serre gereinigd met osmosewater",
    caption: "Overkapping reiniging",
    cat: "Serres & overkappingen",
  },
  {
    src: "/images/quality-cleaning-medewerker-groningen.jpg",
    alt: "Quality Cleaning medewerker met logo en telescoopsteel",
    caption: "Quality Cleaning — in actie",
    cat: "Bedrijfspanden",
  },
];

const CATEGORIES = ["Alles", "Glazenwassen", "Gevelreiniging", "Bedrijfspanden", "Serres & overkappingen"];

export default function ProjectenPage() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────── */}
      <section className="page-header">
        <div className="container">
          <div className="section-tag">Ons werk</div>
          <h1 className="page-header-h1">
            Onze <em>projecten</em>
          </h1>
          <p className="page-header-sub">
            Echte resultaten bij particulieren en bedrijven in Groningen en omstreken.
            Van gevelreiniging tot glazenwassen — wij leveren stralend schoon werk.
          </p>
        </div>
      </section>

      {/* ── VOOR / NA ───────────────────────────────── */}
      <section className="projecten-voor-na">
        <div className="container">
          <div className="section-tag">Bewezen resultaat</div>
          <h2>Vóór &amp; <em>na</em></h2>
          <p className="voor-na-intro">Zie het verschil — elk project spreekt voor zich.</p>

          <div className="pvoorna-grid">
            {VOOR_NA.map((item) => (
              <div key={item.cat} className="pvoorna-pair">
                <div className="pvoorna-items">
                  <div className="pvoorna-item">
                    <img src={item.voor.src} alt={item.voor.alt} loading="lazy" />
                    <span className="voor-na-badge voor">Vóór</span>
                  </div>
                  <div className="pvoorna-item">
                    <img src={item.na.src} alt={item.na.alt} loading="lazy" />
                    <span className="voor-na-badge na">Na</span>
                  </div>
                </div>
                <p className="pvoorna-caption">{item.cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL GALLERY ────────────────────────────── */}
      <section className="projecten-galerij">
        <div className="container">
          <div className="section-tag">Fotogalerij</div>
          <h2>Alle <em>projecten</em></h2>
          <p className="galerij-intro">Klik op een foto voor volledig beeld.</p>

          <div className="pg-grid">
            {GALLERY.map((item) => (
              <figure key={item.src} className="pg-item">
                <a href={item.src} target="_blank" rel="noopener noreferrer" className="pg-link" aria-label={item.caption}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="pg-overlay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </a>
                <figcaption>
                  <span className="pg-cat">{item.cat}</span>
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="projecten-cta">
        <div className="container">
          <div className="projecten-cta-inner">
            <div>
              <h2>Uw woning of bedrijfspand ook <em>stralend</em>?</h2>
              <p>Vraag vrijblijvend een offerte aan — reactie binnen 24 uur.</p>
            </div>
            <div className="projecten-cta-actions">
              <a
                href="https://wa.me/31649988924?text=Hallo%20Quality%20Cleaning%2C%20ik%20wil%20graag%20een%20offerte%20aanvragen"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp offerte
              </a>
              <Link href="/contact" className="btn-outline">
                Contactformulier
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
