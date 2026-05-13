import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Zonnepanelen reinigen — maximaal rendement met osmosewater",
  description:
    "Zonnepanelen reinigen met zuiver osmosewater: geen zeep, geen resten, maximaal rendement. Mobiele service in heel Nederland.",
};

export default function ZonnepanelenReinigenPage() {
  return (
    <PlaceholderPage
      title="Zonnepanelen reinigen"
      description="Tot 30% meer rendement door schone panelen — wij komen bij u langs."
    >
      <p>
        Vuil, stof en vogelpoep op zonnepanelen kunnen het rendement met{" "}
        <strong>15 tot 30%</strong> verlagen. Quality Cleaning reinigt uw
        panelen met <strong>zuiver osmosewater (0 ppm)</strong> — geen zeep,
        geen chemicaliën, geen resten op het glas.
      </p>

      <h2 className="page-shell-h2">Voordelen van osmosewater bij zonnepanelen</h2>
      <ul className="page-shell-body-list">
        <li>Geen zeep of wasmiddel — geen residu op het paneel</li>
        <li>Geen kalkaanslag na het drogen</li>
        <li>Veilig voor de coating van het paneel</li>
        <li>Milieuvriendelijk: alleen water</li>
      </ul>

      <h2 className="page-shell-h2">Hoe vaak reinigen?</h2>
      <p>
        Afhankelijk van uw locatie en omgeving adviseren wij een reiniging{" "}
        <strong>één tot twee keer per jaar</strong>. Na reiniging controleren wij
        visueel of alle panelen vrij zijn van beschadigingen of losse verbindingen.
      </p>

      <h2 className="page-shell-h2">Offerte aanvragen</h2>
      <p>
        Wij werken mobiel in heel Nederland. Vraag een offerte aan via{" "}
        <Link href="/contact">het contactformulier</Link> of rechtstreeks via
        WhatsApp — wij reageren doorgaans binnen één werkdag.
      </p>

      <p className="page-shell-body-cta">
        <Link href="/#contact">Vraag een offerte aan voor zonnepanelen →</Link>
      </p>
    </PlaceholderPage>
  );
}
