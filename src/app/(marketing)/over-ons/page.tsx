import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons — Quality Cleaning Groningen | Professioneel reinigingsbedrijf",
  description:
    "Quality Cleaning is een mobiel reinigingsbedrijf uit Groningen (050). Met Telewash osmosewater installatie reinigen wij gevels, ramen, zonnepanelen en meer. Persoonlijk en vakkundig.",
  alternates: { canonical: "/over-ons" },
};

export default function OverOnsPage() {
  return (
    <article className="page-shell page-shell--wide">
      <header className="service-header">
        <div className="section-tag">Over ons</div>
        <h1 className="page-shell-title">
          Vakmanschap uit <em>Groningen</em>
        </h1>
        <p className="page-shell-lead">
          Quality Cleaning is een mobiel reinigingsbedrijf gevestigd in Groningen.
          Wij werken met de nieuwste osmosewater technologie voor een resultaat
          dat gewoon leidingwater of chemicaliën niet kan evenaren.
        </p>
      </header>

      {/* Hero: branded worker photo */}
      <div className="service-hero-photo">
        <Image
          src="/images/quality-cleaning-medewerker-groningen.jpg"
          alt="Quality Cleaning medewerker in Groningen centrum — branded jas en telescoopsteel"
          width={900}
          height={700}
          className="service-hero-img"
          priority
        />
      </div>

      <div className="page-shell-body">
        <h2 className="page-shell-h2">Wie zijn wij?</h2>
        <p>
          Quality Cleaning is opgericht vanuit een passie voor perfecte resultaten.
          Wij reinigen <strong>gevels, ramen, zonnepanelen en auto&apos;s</strong>{" "}
          bij particulieren en bedrijven — volledig mobiel, bij u op locatie.
        </p>
        <p>
          Ons werkgebied is heel <strong>Groningen en omstreken (050)</strong>,
          maar wij zijn ook buiten de provincie actief. Wij plannen een afspraak
          die bij ú uitkomt en werken altijd netjes, professioneel en zonder
          onnodige overlast.
        </p>

        <blockquote className="over-quote-block">
          &ldquo;Schoon is niet genoeg — het moet stralend zijn.&rdquo;
        </blockquote>

        <h2 className="page-shell-h2">Onze technologie — Telewash Osmosewater</h2>
        <p>
          Wij investeerden in een professionele <strong>Telewash installatie</strong>:
          een mobiel osmosewatersysteem dat water zuivert tot <strong>0 ppm</strong>.
          Water zonder mineralen, kalk of onzuiverheden. Hierdoor droogt elk
          oppervlak na reiniging vlekkeloos — zonder witte resten, zonder strepen.
        </p>
        <ul className="page-shell-body-list">
          <li>Osmosewater 0 ppm — volledig puur</li>
          <li>Geen chemische reinigingsmiddelen</li>
          <li>Geen schade aan uw tuin, dieren of omgeving</li>
          <li>Telescoopsteel tot 12 meter hoog — geen steiger nodig</li>
          <li>Volledig mobiel — wij komen naar u toe</li>
        </ul>

        {/* Photo row */}
        <div className="service-photo-grid service-photo-grid--3col">
          <figure className="service-photo-item">
            <Image
              src="/images/glazenwassen-telescoopsteel-ramen.jpg"
              alt="Quality Cleaning aan het werk — telescoopsteel ramen wassen"
              width={400}
              height={320}
              className="service-photo-img"
            />
            <figcaption>Professionele telescooptechniek</figcaption>
          </figure>
          <figure className="service-photo-item">
            <Image
              src="/images/gevelreiniging-apparatuur-opstelling.jpg"
              alt="Quality Cleaning gevelreiniging opstelling Groningen"
              width={400}
              height={320}
              className="service-photo-img"
            />
            <figcaption>Hogedruk gevelreiniging</figcaption>
          </figure>
          <figure className="service-photo-item">
            <Image
              src="/images/woning-gevel-schoon-groningen.jpg"
              alt="Woning gevel schoon gereinigd in Groningen"
              width={400}
              height={320}
              className="service-photo-img"
            />
            <figcaption>Eindresultaat — stralend schoon</figcaption>
          </figure>
        </div>

        <h2 className="page-shell-h2">Contact &amp; locatie</h2>
        <ul className="page-shell-body-list">
          <li><strong>Adres:</strong> Iepenlaan 61, 9741 GB Groningen</li>
          <li><strong>Telefoon:</strong> <a href="tel:+31649988924">06-49988924</a></li>
          <li><strong>E-mail:</strong> <a href="mailto:info@qualitycleaning050.nl">info@qualitycleaning050.nl</a></li>
          <li><strong>Werkgebied:</strong> Groningen, heel de provincie, heel Nederland</li>
        </ul>

        <p className="page-shell-body-cta">
          <Link href="/contact">Neem contact op voor een vrijblijvende offerte →</Link>
        </p>
      </div>

      <p className="page-shell-back">
        <Link href="/">← Terug naar home</Link>
      </p>
    </article>
  );
}
