import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Prijzen & tarieven reiniging — Quality Cleaning Groningen",
  description:
    "Transparante tarieven voor autoreiniging, zonnepanelen, gevelreiniging en glazenwassen. Vraag een vrijblijvende offerte aan — geen verborgen kosten.",
};

export default function PrijzenPage() {
  return (
    <PlaceholderPage
      title="Prijzen"
      description="Heldere tarieven zonder verborgen kosten — vraag vrijblijvend een offerte aan."
    />
  );
}
