import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Autoreiniging aan huis — professionele autowas bij u thuis",
  description:
    "Professionele autoreiniging aan huis met osmosewater: geen waterstrepen, geen kalkvlekken. Mobiel bij u thuis of op kantoor in heel Nederland.",
};

export default function AutoreinigingPage() {
  return (
    <PlaceholderPage
      title="Autoreiniging aan huis"
      description="Vlekkeloos schoon zonder de deur uit — wij wassen uw auto op locatie."
    >
      <p>
        Quality Cleaning wast uw auto bij u <strong>thuis of op het werk</strong>.
        Met osmosewater spoelenwe het exterieur volledig schoon — het water bevat
        geen mineralen, waardoor uw auto na het drogen{" "}
        <strong>geen waterstrepen of kalkvlekken</strong> heeft.
      </p>

      <h2 className="page-shell-h2">Wat is inbegrepen?</h2>
      <ul className="page-shell-body-list">
        <li>Exterieur wassen (carrosserie, ramen, velgen)</li>
        <li>Osmosewater eindspoeling voor vlekkeloos resultaat</li>
        <li>Droogservice</li>
        <li>Volledig mobiel — wij komen naar u toe</li>
      </ul>

      <h2 className="page-shell-h2">Prijs</h2>
      <p>
        Autoreiniging is beschikbaar <strong>vanaf €49,99 per beurt</strong>.
        Voor vaste klanten en combinaties (auto + ramen / zonnepanelen) maken
        wij graag een passend voorstel. Vraag vrijblijvend een offerte aan.
      </p>

      <h2 className="page-shell-h2">Beschikbaarheid</h2>
      <p>
        Wij werken mobiel in heel Nederland. Neem contact op via{" "}
        <Link href="/contact">het formulier</Link> of WhatsApp voor een
        afspraak — doorgaans kunnen wij binnen enkele werkdagen bij u zijn.
      </p>

      <p className="page-shell-body-cta">
        <Link href="/#contact">Vraag een offerte aan voor autoreiniging →</Link>
      </p>
    </PlaceholderPage>
  );
}
