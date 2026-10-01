import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Alle reinigingsdiensten — Quality Cleaning Groningen",
  description:
    "Overzicht van alle diensten: gevelreiniging, glazenwassen, zonnepanelen reinigen en autoreiniging. Mobiel bij u op locatie met osmosewater.",
};

export default function DienstenPage() {
  return (
    <PlaceholderPage
      title="Diensten"
      description="Professionele mobiele reiniging voor uw woning of bedrijf."
    />
  );
}
