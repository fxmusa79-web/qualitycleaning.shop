import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gevelreiniging Groningen — mos, algen en aanslag verwijderen | Quality Cleaning",
  description:
    "Professionele gevelreiniging in Groningen: mos, algen en aanslag verwijderen van baksteen, beton en hout. Mobiel met osmosewater en hogedruk — bel 06-49988924.",
  keywords: [
    "gevelreiniging Groningen",
    "mos verwijderen gevel",
    "algen verwijderen gevel",
    "gevel reinigen Groningen",
    "baksteen reinigen",
    "hogedruk gevelreiniging",
    "gevel schoonmaken 050",
  ],
  alternates: { canonical: "/gevelreiniging" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gevelreiniging Groningen",
  description:
    "Professionele gevelreiniging in Groningen: mos, algen en aanslag verwijderen van baksteen, beton en hout met osmosewater en hogedruk.",
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
  serviceType: "Gevelreiniging",
};

export default function GevelreinigingPage() {
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
            Gevelreiniging Groningen<br />
            <em>mos, algen &amp; aanslag weg</em>
          </h1>
          <p className="page-shell-lead">
            Een vervuilde gevel oogt niet alleen slecht — mos en algen beschadigen
            op den duur ook het metselwerk. Quality Cleaning reinigt gevels van
            baksteen, beton en hout grondig en veilig, met osmosewater en hogedruk.
          </p>
          <div className="service-header-actions">
            <a
              href="https://wa.me/31649988924?text=Ik%20wil%20een%20offerte%20voor%20gevelreiniging"
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
            src="/images/gevelreiniging-apparatuur-opstelling.jpg"
            alt="Professionele gevelreiniging Groningen — opstelling met hogedrukspuit"
            width={900}
            height={600}
            className="service-hero-img"
            priority
          />
        </div>

        <div className="page-shell-body">

          <h2 className="page-shell-h2">Wat wij verwijderen</h2>
          <ul className="page-shell-body-list">
            <li><strong>Mos en algen</strong> — groene of zwarte aanslag op baksteen</li>
            <li><strong>Kalkuitbloeiing</strong> — witte vlekken op metselwerk</li>
            <li><strong>Vuil en roetaanslag</strong> — van verkeer en industrie</li>
            <li><strong>Schimmel</strong> op kozijnen en gevelplaten</li>
            <li><strong>Aanslag op betonnen</strong> en houten geveldelen</li>
          </ul>

          {/* Work photos */}
          <h2 className="page-shell-h2">Gevelreiniging in de praktijk</h2>
          <div className="service-photo-grid service-photo-grid--2col">
            <figure className="service-photo-item">
              <Image
                src="/images/gevelreiniging-flatgebouw-hogedruk.jpg"
                alt="Gevelreiniging flatgebouw Groningen — telescoopsteel hogedruk"
                width={500}
                height={650}
                className="service-photo-img"
              />
              <figcaption>Flatgebouw gevelreiniging — hogedruk telescoop</figcaption>
            </figure>
            <figure className="service-photo-item">
              <Image
                src="/images/gevelreiniging-apparatuur-opstelling.jpg"
                alt="Gevelreiniging woning Groningen — opstelling apparatuur met ladder"
                width={500}
                height={650}
                className="service-photo-img"
              />
              <figcaption>Woning gevelreiniging — professionele opstelling</figcaption>
            </figure>
          </div>

          {/* Before/after */}
          <h2 className="page-shell-h2">Voor &amp; na — gevelreiniging</h2>
          <div className="before-after-grid">
            <figure className="before-after-item before">
              <Image
                src="/images/gevelreiniging-gevel-voor.jpg"
                alt="Vervuilde gevel vóór reiniging — aanslag en vuil"
                width={480}
                height={360}
                className="service-photo-img"
              />
              <figcaption>
                <span className="ba-label ba-label--before">Vóór</span>
                Gevel vol aanslag en vuil
              </figcaption>
            </figure>
            <figure className="before-after-item after">
              <Image
                src="/images/gevelreiniging-resultaat-schoon.jpg"
                alt="Schone gevel ná reiniging — als nieuw"
                width={480}
                height={360}
                className="service-photo-img"
              />
              <figcaption>
                <span className="ba-label ba-label--after">Na</span>
                Gevel als nieuw
              </figcaption>
            </figure>
          </div>

          {/* Osmose section */}
          <h2 className="page-shell-h2">Waarom osmosewater bij gevelreiniging?</h2>
          <p>
            Osmosewater bevat geen kalk of mineralen. Na het reinigen droogt de
            gevel zonder witte kalkstrepen. Dat maakt het resultaat duurzamer dan
            reinigen met gewoon leidingwater of chemische middelen. Bovendien zijn
            wij milieuvriendelijk: <strong>geen chemicaliën</strong>, geen schade
            aan uw tuin, planten of bestrating.
          </p>

          {/* Commercial */}
          <h2 className="page-shell-h2">Zakelijk — scholen, kantoren &amp; bedrijfspanden</h2>
          <div className="service-photo-grid service-photo-grid--2col">
            <figure className="service-photo-item">
              <Image
                src="/images/bedrijfspand-reiniging-voor.jpg"
                alt="Bedrijfspand voor gevelreiniging — Groningen"
                width={500}
                height={380}
                className="service-photo-img"
              />
              <figcaption>Bedrijfspand — voor reiniging</figcaption>
            </figure>
            <figure className="service-photo-item">
              <Image
                src="/images/bedrijfspand-reiniging-na.jpg"
                alt="Bedrijfspand na gevelreiniging en glazenwassen — resultaat"
                width={500}
                height={380}
                className="service-photo-img"
              />
              <figcaption>Bedrijfspand — na reiniging</figcaption>
            </figure>
          </div>
          <p>
            Quality Cleaning werkt regelmatig voor scholen, kantoorpanden en
            winkelcentra in de regio Groningen. Wij plannen buiten openingstijden
            en zorgen voor minimale overlast.
          </p>

          {/* Area */}
          <h2 className="page-shell-h2">Werkgebied</h2>
          <p>
            Wij zijn gevestigd in <strong>Groningen (050)</strong> en werken door
            heel de provincie en Nederland. Regelmatige ritten: Groningen stad,
            Haren, Hoogezand, Veendam, Leek, Winschoten en omgeving.
          </p>

          <p className="page-shell-body-cta">
            <a
              href="https://wa.me/31649988924?text=Ik%20wil%20een%20offerte%20voor%20gevelreiniging"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vraag gratis offerte aan voor gevelreiniging →
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
