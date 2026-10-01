import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Gevelreiniging Groningen — mos, algen en aanslag verwijderen",
  description:
    "Professionele gevelreiniging in Groningen en omstreken. Mos, algen en aanslag verwijderen met osmosewater en hogedruk — mobiel bij u thuis, bel 06-49988924.",
  alternates: { canonical: "/gevelreiniging" },
};

export default function GevelreinigingPage() {
  return (
    <PlaceholderPage
      title="Gevelreiniging"
      description="Mos, algen en aanslag verwijderd — uw gevel weer als nieuw."
    >
      <p>
        Een vervuilde gevel oogt niet alleen slecht, maar beschadigt op de lange
        termijn ook het metselwerk. Quality Cleaning reinigt gevels van{" "}
        <strong>baksteen, beton, hout en kunststof</strong> met osmosewater en
        hogedruk — grondig, veilig en zonder chemicaliën.
      </p>

      <h2 className="page-shell-h2">Wat we verwijderen</h2>
      <ul className="page-shell-body-list">
        <li>Mos en algen (groene of zwarte aanslag)</li>
        <li>Kalkuitbloeiing op baksteen</li>
        <li>Vuil en roetaanslag</li>
        <li>Schimmel op kozijnen en gevelplaten</li>
      </ul>

      <h2 className="page-shell-h2">Waarom osmosewater?</h2>
      <p>
        Osmosewater bevat geen kalk of mineralen. Na het reinigen droogt het
        oppervlak zonder witte resten of kalkstrepen — veel beter dan gewoon
        leidingwater of chemische middelen. Tegelijk schaden we uw tuin,
        bestrating en omgeving niet.
      </p>

      <h2 className="page-shell-h2">Werkgebied en offerte</h2>
      <p>
        Wij werken volledig mobiel in heel Nederland. Vraag een vrijblijvende
        offerte aan via <Link href="/contact">het contactformulier</Link> of
        WhatsApp — reactie volgt doorgaans binnen één werkdag.
      </p>

      <p className="page-shell-body-cta">
        <Link href="/#contact">Vraag een offerte aan voor gevelreiniging →</Link>
      </p>
    </PlaceholderPage>
  );
}
