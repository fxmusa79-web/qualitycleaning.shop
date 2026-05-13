import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Quality Cleaning: mobiele reiniging met Telewash en osmosewater.",
};

export default function OverOnsPage() {
  return (
    <PlaceholderPage
      title="Over ons"
      description="Passie voor vakmanschap en een schoner resultaat — met respect voor uw eigendom en het milieu."
    />
  );
}
