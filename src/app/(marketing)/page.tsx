import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <>
      <HeroSection />

<div className="usp-band">
  <div className="usp-items">
    <div className="usp-item">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      <div>
        <strong>Mobiel aan huis</strong>
        <span>Wij komen naar u toe</span>
      </div>
    </div>
    <div className="usp-divider"></div>
    <div className="usp-item">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      <div>
        <strong>Osmosewater technologie</strong>
        <span>Vlekkeloos resultaat, geen kalk</span>
      </div>
    </div>
    <div className="usp-divider"></div>
    <div className="usp-item">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      <div>
        <strong>Snelle respons</strong>
        <span>Binnen 24 uur reactie</span>
      </div>
    </div>
    <div className="usp-divider"></div>
    <div className="usp-item">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <div>
        <strong>Tevredenheidsgarantie</strong>
        <span>Niet tevreden? Gratis opnieuw</span>
      </div>
    </div>
  </div>
</div>


<section className="diensten" id="diensten">
  <div className="section-tag">Wat wij doen</div>
  <h2>Onze <em>diensten</em></h2>
  <div className="diensten-grid">
    <div className="dienst-card">
      <div className="dienst-num">01</div>
      <svg className="dienst-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
      <h3>Gevelreiniging</h3>
      <p>Gevels vrij van mos, algen en aanslag. Met osmosewater en hogedruk reinigen we iedere gevel grondig en veilig — geen schade aan voeg of baksteen.</p>
      <Link href="/gevelreiniging" className="dienst-card-more">
        Meer over gevelreiniging
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
    <div className="dienst-card">
      <div className="dienst-num">02</div>
      <svg className="dienst-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z"/></svg>
      <h3>Glazenwasser &amp; ramen</h3>
      <p>Professionele glazenwasser aan huis: ramen, kozijnen en serres. Osmosewater droogt straalvrij — ook hogere ruiten bereiken wij mobiel met telescooptechniek.</p>
      <Link href="/glazenwassen" className="dienst-card-more">
        Meer over glazenwassen
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
    <div className="dienst-card">
      <div className="dienst-num">03</div>
      <svg className="dienst-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-4 0v2M8 12h8M12 12v4"/></svg>
      <h3>Zonnepanelen reinigen</h3>
      <p>Vuile zonnepanelen leveren tot 30% minder energie. Wij reinigen met zuiver osmosewater — geen zeep, geen resten, maximaal rendement.</p>
      <Link href="/zonnepanelen-reinigen" className="dienst-card-more">
        Meer over zonnepanelen reinigen
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
    <div className="dienst-card">
      <div className="dienst-num">04</div>
      <svg className="dienst-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/><rect x="9" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="20" r="1"/><circle cx="20" cy="20" r="1"/></svg>
      <h3>Autoreiniging aan huis</h3>
      <p>Professionele autowasbeurt bij u thuis of op kantoor. Exterieur reiniging met osmosewater voor een vlekkeloos en droog resultaat.</p>
      <Link href="/autoreiniging" className="dienst-card-more">
        Meer over autoreiniging
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
    <div className="dienst-card">
      <div className="dienst-num">05</div>
      <svg className="dienst-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      <h3>Maatwerk opdrachten</h3>
      <p>Heeft u een specifieke reinigingswens? Wij denken graag met u mee voor een vrijblijvende offerte op maat.</p>
      <Link href="/contact" className="dienst-card-more">
        Neem contact op
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
  </div>
</section>


<section className="werkwijze" id="werkwijze">
  <div className="section-tag">Hoe wij werken</div>
  <h2>Onze <em>werkwijze</em></h2>
  <div className="werkwijze-inner">
    <div className="stappen">
      <div className="stap">
        <div className="stap-num">01</div>
        <div>
          <h4>Contact & offerte</h4>
          <p>U neemt contact op via WhatsApp of telefoon. Binnen 24 uur ontvangt u een heldere offerte zonder verborgen kosten.</p>
        </div>
      </div>
      <div className="stap">
        <div className="stap-num">02</div>
        <div>
          <h4>Afspraak inplannen</h4>
          <p>We plannen een datum die voor u uitkomt. Wij komen volledig uitgerust naar u toe met de Telewash installatie.</p>
        </div>
      </div>
      <div className="stap">
        <div className="stap-num">03</div>
        <div>
          <h4>Professionele reiniging</h4>
          <p>Met onze osmosewater technologie reinigen wij grondig en veilig. Osmosewater laat geen kalkaanslag of vlekken achter.</p>
        </div>
      </div>
      <div className="stap">
        <div className="stap-num">04</div>
        <div>
          <h4>Resultaat & nazorg</h4>
          <p>U inspecteert het resultaat. Niet 100% tevreden? Dan komen wij gratis terug. Uw tevredenheid is onze garantie.</p>
        </div>
      </div>
    </div>
    <div className="werkwijze-visual">
      <div className="visual-text"><p>Pure<br />water</p></div>
      <div className="osmose-badge">
        <strong>0 ppm</strong>
        <span>Osmosewater kwaliteit</span>
      </div>
    </div>
  </div>
</section>


<section className="prijzen" id="prijzen">
  <div className="section-tag">Transparante tarieven</div>
  <h2>Eerlijke <em>prijzen</em></h2>
  <div className="prijzen-grid">
    <div className="prijs-card">
      <div className="prijs-label">Particulier</div>
      <h3>Autoreiniging</h3>
      <div className="prijs-from">Vanaf</div>
      <div className="prijs-amount">€49,99</div>
      <div className="prijs-unit">per beurt</div>
      <ul className="prijs-features">
        <li>Exterieur wassen</li>
        <li>Osmosewater spoeling</li>
        <li>Vlekkeloos droog resultaat</li>
        <li>Aan huis service</li>
      </ul>
      <a href="https://wa.me/31649988924?text=Ik%20wil%20een%20offerte%20voor%20autoreiniging" className="btn-outline" target="_blank" rel="noopener noreferrer">Vraag offerte aan</a>
    </div>
    <div className="prijs-card featured">
      <div className="prijs-label">Meest gevraagd</div>
      <h3>Zonnepanelen</h3>
      <div className="prijs-from">Vanaf</div>
      <div className="prijs-amount">€79</div>
      <div className="prijs-unit">per installatie</div>
      <ul className="prijs-features">
        <li>Tot 10 panelen</li>
        <li>Reiniging met osmosewater</li>
        <li>Rendement controle</li>
        <li>Garantie op resultaat</li>
      </ul>
      <a href="https://wa.me/31649988924?text=Ik%20wil%20een%20offerte%20voor%20zonnepanelen%20reinigen" className="btn-outline solid" target="_blank" rel="noopener noreferrer">Vraag offerte aan</a>
    </div>
    <div className="prijs-card">
      <div className="prijs-label">Woning</div>
      <h3>Gevel &amp; glazen</h3>
      <div className="prijs-from">Op maat</div>
      <div className="prijs-amount">€—</div>
      <div className="prijs-unit">vrijblijvende offerte</div>
      <ul className="prijs-features">
        <li>Gevelreiniging</li>
        <li>Glazenwasser / ramen</li>
        <li>Combinatie met zonnepanelen</li>
        <li>Combinatiepakketten</li>
      </ul>
      <a href="https://wa.me/31649988924?text=Ik%20wil%20een%20offerte%20voor%20gevel%20of%20glazenwassen" className="btn-outline" target="_blank" rel="noopener noreferrer">Vraag offerte aan</a>
    </div>
  </div>
</section>


<section className="over" id="over">
  <div className="over-inner">
    <div className="over-tekst">
      <div className="section-tag">Over ons</div>
      <h2>Vakmanschap<br />met <em>passie</em></h2>
      <div className="over-quote">
        <blockquote>
          &ldquo;Schoon is niet genoeg — het moet stralend zijn.&rdquo;
        </blockquote>
      </div>
      <p>Quality Cleaning is een <strong>mobiel reinigingsbedrijf</strong> dat werkt met de nieuwste osmosewater technologie. Wij investeerden in een professionele Telewash installatie om onze klanten de allerbeste service te bieden.</p>
      <p>Osmosewater bevat <strong>geen mineralen of onzuiverheden</strong>. Dit betekent dat oppervlakken na reiniging perfect droog worden zonder kalkvlekken of strepen — iets wat met gewoon leidingwater simpelweg niet mogelijk is.</p>
      <div className="over-features">
        <div className="over-feat">Volledig mobiel</div>
        <div className="over-feat">Heel Nederland</div>
        <div className="over-feat">Telewash installatie</div>
        <div className="over-feat">Osmosewater 0 ppm</div>
        <div className="over-feat">Milieuvriendelijk</div>
        <div className="over-feat">Geen chemicaliën</div>
      </div>
    </div>
    <div className="over-visual">
      <img
        src="/images/quality-cleaning-medewerker-groningen.jpg"
        alt="Quality Cleaning medewerker in Groningen met logo en telescoopsteel"
        className="over-photo"
        loading="lazy"
      />
      <div className="osmose-badge">
        <strong>0 ppm</strong>
        <span>Osmosewater kwaliteit</span>
      </div>
    </div>
  </div>
</section>


{/* VOOR/NA SECTIE */}
<section className="voor-na" id="resultaten">
  <div className="section-tag">Bewezen resultaat</div>
  <h2>Vóór &amp; <em>na</em></h2>
  <p className="voor-na-intro">Echte projecten, echte resultaten — bij particulieren en bedrijven in Groningen.</p>

  <div className="voor-na-grid">
    <div className="voor-na-pair">
      <div className="voor-na-item">
        <img src="/images/garage-deur-voor-reiniging.jpg" alt="Garagedeur vóór reiniging — vuil en aangetast" loading="lazy" />
        <span className="voor-na-badge voor">Vóór</span>
      </div>
      <div className="voor-na-item">
        <img src="/images/garage-deur-na-reiniging.jpg" alt="Garagedeur ná reiniging — schoon resultaat" loading="lazy" />
        <span className="voor-na-badge na">Na</span>
      </div>
      <p className="voor-na-caption">Garagedeur reiniging</p>
    </div>

    <div className="voor-na-pair">
      <div className="voor-na-item">
        <img src="/images/bedrijfspand-reiniging-voor.jpg" alt="Bedrijfspand vóór reiniging Groningen" loading="lazy" />
        <span className="voor-na-badge voor">Vóór</span>
      </div>
      <div className="voor-na-item">
        <img src="/images/bedrijfspand-reiniging-na.jpg" alt="Bedrijfspand ná reiniging — stralend" loading="lazy" />
        <span className="voor-na-badge na">Na</span>
      </div>
      <p className="voor-na-caption">Bedrijfspand — gevel &amp; glas</p>
    </div>
  </div>
</section>


{/* FOTO GALERIJ */}
<section className="galerij" id="galerij">
  <div className="section-tag">Ons werk</div>
  <h2>Recente <em>projecten</em></h2>
  <p className="galerij-intro">Hieronder een selectie van recente reinigingsprojecten in en rondom Groningen.</p>

  <div className="galerij-grid">
    <figure className="galerij-item">
      <img src="/images/glazenwassen-hoog-bereik-telescoop.jpg" alt="Hoge ramen bereiken met telescoopsteel — glazenwasser Groningen" loading="lazy" />
      <figcaption>Glazenwassen op hoogte</figcaption>
    </figure>
    <figure className="galerij-item">
      <img src="/images/glazenwassen-schuifpui-schoon.jpg" alt="Schuifpui en glasdeuren gereinigd met osmosewater" loading="lazy" />
      <figcaption>Schuifpui &amp; glasdeuren</figcaption>
    </figure>
    <figure className="galerij-item">
      <img src="/images/gevelreiniging-flatgebouw-hogedruk.jpg" alt="Gevelreiniging flatgebouw Groningen hogedruk" loading="lazy" />
      <figcaption>Gevelreiniging — flatgebouw</figcaption>
    </figure>
    <figure className="galerij-item">
      <img src="/images/woning-gevel-schoon-groningen.jpg" alt="Woning gevel schoon in Groningen" loading="lazy" />
      <figcaption>Woning gevel &amp; ramen</figcaption>
    </figure>
    <figure className="galerij-item">
      <img src="/images/serre-veranda-gereinigd.jpg" alt="Serre en veranda beglazing gereinigd — Groningen" loading="lazy" />
      <figcaption>Serre &amp; veranda reiniging</figcaption>
    </figure>
    <figure className="galerij-item">
      <img src="/images/bedrijfspand-glazenwassen-detail.jpg" alt="Bedrijfspand glazenwassen detail Groningen" loading="lazy" />
      <figcaption>Zakelijk — bedrijfspanden</figcaption>
    </figure>
  </div>
</section>



<section className="contact" id="contact">
  <div className="section-tag">Direct contact</div>
  <h2>Vraag een <em>offerte</em> aan</h2>
  <div className="contact-inner">
    <div className="contact-info">
      <h3>Wij staan voor u klaar</h3>
      <p>Vrijblijvende offerte binnen 24 uur. Geen verborgen kosten, geen gedoe — gewoon een eerlijke prijs voor uitstekend werk.</p>
      <a href="https://wa.me/31649988924" className="contact-method" target="_blank" rel="noopener noreferrer">
        <div className="contact-method-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </div>
        <div className="contact-method-text">
          <strong>WhatsApp</strong>
          <span>Stuur direct een bericht</span>
        </div>
        <svg className="contact-method-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="tel:+31649988924" className="contact-method">
        <div className="contact-method-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.36a16 16 0 006.72 6.72l1.72-1.72a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        </div>
        <div className="contact-method-text">
          <strong>Telefoon</strong>
          <span>06-49988924</span>
        </div>
        <svg className="contact-method-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <div className="werkgebied">
        <p>Werkgebied</p>
        <span>Heel Nederland — wij komen naar u toe</span>
      </div>
    </div>
    <div className="contact-cta contact-cta-with-form">
      <h3>E-mail uw aanvraag</h3>
      <p className="contact-form-intro">
        Laat uw gegevens achter — wij reageren zo snel mogelijk (doorgaans binnen
        één werkdag).
      </p>
      <LeadForm source="homepage" />
      <p className="contact-quick-label">Liever direct?</p>
      <div className="contact-quick-actions">
      <a href="https://wa.me/31649988924?text=Hallo%20Quality%20Cleaning%2C%20ik%20wil%20graag%20een%20offerte%20aanvragen" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
      <a href="tel:+31649988924" className="tel-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.36a16 16 0 006.72 6.72l1.72-1.72a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        Bellen
      </a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
