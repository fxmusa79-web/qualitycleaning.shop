import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Prijzen",
  description:
    "Transparante tarieven voor autoreiniging, zonnepanelen en maatwerk.",
};

export default function PrijzenPage() {
  return (
    <PlaceholderPage
      title="Prijzen"
      description="Heldere tarieven zonder verborgen kosten — vraag vrijblijvend een offerte aan."
    />
  );
}
