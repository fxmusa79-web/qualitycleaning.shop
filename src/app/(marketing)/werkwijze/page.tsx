import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Werkwijze — zo werkt Quality Cleaning Groningen",
  description:
    "Van offerte tot nazorg: ontdek hoe Quality Cleaning te werk gaat. Osmosewater reiniging, mobiel aan huis, resultaat gegarandeerd.",
};

export default function WerkwijzePage() {
  return (
    <PlaceholderPage
      title="Werkwijze"
      description="Transparante stappen van eerste contact tot stralend resultaat."
    />
  );
}
