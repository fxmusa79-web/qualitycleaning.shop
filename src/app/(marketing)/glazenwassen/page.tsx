import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Glazenwassen & glazenwasser aan huis",
  description:
    "Professionele glazenwasser voor ramen, kozijnen en serres. Mobiel in Nederland met osmosewater — straalvrij drogen zonder zeepresten.",
};

export default function GlazenwassenPage() {
  return (
    <PlaceholderPage
      title="Glazenwassen door uw mobiele glazenwasser"
      description="Heldere ramen zonder strepen of kalkvlekken — met osmosewater technologie op locatie."
    >
      <p>
        Zoekt u een <strong>betrouwbare glazenwasser</strong> die bij u langs
        komt? Quality Cleaning reinigt ramen en glasoppervlakken mobiel met{" "}
        <strong>osmosewater</strong>: water zonder mineralen en onzuiverheden,
        waardoor het glas tijdens het drogen niet bezwaakt en vrijwel geen vlekken
        achterlaat. Dat maakt het verschil ten opzichte van reinigen met gewoon
        leidingwater.
      </p>

      <h2 className="page-shell-h2">Waarom osmosewater bij glazenwassen?</h2>
      <p>
        Bij traditioneel ramen zemen blijven vaak zeepresten en mineralen achter —
        vooral bij zonlicht ziet u dan sneller strepen. Osmosewater spoelt het
        glas laatste stap zo zuiver dat het natuurlijke drogen veel gelijkmatiger
        verloopt. Ideaal voor woningen met veel ramen, serres en moderne kozijnen.
      </p>
      <ul className="page-shell-body-list">
        <li>Minder kalk en strepen na het drogen</li>
        <li>Geschikt voor particuliere woningen en kleinzakelijke panden</li>
        <li>Ook geschikt voor hogere bereiken met veilige telescooptechniek</li>
      </ul>

      <h2 className="page-shell-h2">Wat wij voor u kunnen reinigen</h2>
      <p>
        Als <strong>glazenwasser op locatie</strong> focussen we op het glaswerk
        waar het visueel toe doet: voor- en achterruiten waar bereikbaar, schuifpuien,
        vaste kozijnen, veel voorkomende serreadelingen en andere vlakken waar een
        heldere afwerking belangrijk is. Voor grotere maatwerkprojecten combineren we
        glazenwassen gericht met andere{" "}
        <Link href="/diensten">diensten</Link> zoals gevelreiniging of zonnepanelen.
      </p>

      <h2 className="page-shell-h2">Werkgebied &amp; planning</h2>
      <p>
        Wij werken landelijk mobiel en plannen een datum die bij u past. Via{" "}
        <Link href="/contact">contact</Link> of WhatsApp op de homepage kunt u
        direct een indicatie of offerte vragen — reactie volgt meestal binnen één
        werkdag.
      </p>

      <p className="page-shell-body-cta">
        <Link href="/#contact">Vraag een offerte aan voor glazenwassen →</Link>
      </p>
    </PlaceholderPage>
  );
}
