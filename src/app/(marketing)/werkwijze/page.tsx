import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Van offerte tot nazorg: zo werken wij bij Quality Cleaning.",
};

export default function WerkwijzePage() {
  return (
    <PlaceholderPage
      title="Werkwijze"
      description="Transparante stappen van eerste contact tot stralend resultaat."
    />
  );
}
