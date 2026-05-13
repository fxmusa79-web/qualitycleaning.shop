import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Privacybeleid van Quality Cleaning (concept).",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      title="Privacybeleid"
      description="Deze pagina is een tijdelijke placeholder."
    >
      <p>
        Hier komt uw privacybeleid (AVG): welke gegevens u verwerkt, waarom,
        bewaartermijnen en rechten van betrokkenen. Laat deze tekst controleren door
        een jurist voordat u live gaat.
      </p>
    </PlaceholderPage>
  );
}
