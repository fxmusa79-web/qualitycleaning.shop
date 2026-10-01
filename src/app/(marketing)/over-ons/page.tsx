import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Over ons — Quality Cleaning Groningen",
  description:
    "Quality Cleaning is een mobiel reinigingsbedrijf uit Groningen met Telewash-installatie en osmosewater technologie. Leer ons kennen.",
};

export default function OverOnsPage() {
  return (
    <PlaceholderPage
      title="Over ons"
      description="Passie voor vakmanschap en een schoner resultaat — met respect voor uw eigendom en het milieu."
    />
  );
}
