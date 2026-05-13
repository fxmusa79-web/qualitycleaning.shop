import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van Quality Cleaning (concept).",
  robots: { index: false, follow: true },
};

export default function VoorwaardenPage() {
  return (
    <PlaceholderPage
      title="Algemene voorwaarden"
      description="Deze pagina is een tijdelijke placeholder."
    >
      <p>
        Hier komt uw algemene voorwaarden voor dienstverlening: annulering,
        betaling, aansprakelijkheid en geschillen. Gebruik een door uw branche of
        accountant goedgekeurde versie.
      </p>
    </PlaceholderPage>
  );
}
