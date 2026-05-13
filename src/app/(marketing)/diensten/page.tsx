import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Gevelreiniging, glazenwassen, zonnepanelen en autoreiniging met osmosewater — mobiel bij u op locatie.",
};

export default function DienstenPage() {
  return (
    <PlaceholderPage
      title="Diensten"
      description="Professionele mobiele reiniging voor uw woning of bedrijf."
    />
  );
}
