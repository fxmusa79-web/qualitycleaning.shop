import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact & offerte aanvragen — Quality Cleaning Groningen",
  description:
    "Neem contact op met Quality Cleaning Groningen voor een vrijblijvende offerte. Bel 06-49988924 of stuur een WhatsApp-bericht — reactie binnen 24 uur.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage title="Contact">
      <p>
        Vrijblijvende offerte aanvragen? Neem gerust contact op via telefoon,
        WhatsApp of het onderstaande formulier.
      </p>
      <ul className="page-shell-list">
        <li>
          <strong>Telefoon:</strong>{" "}
          <a href="tel:+31649988924">06-49988924</a>
        </li>
        <li>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:info@qualitycleaning.shop">info@qualitycleaning.shop</a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/31649988924"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat direct via WhatsApp
          </a>
        </li>
        <li>
          <strong>Vestiging:</strong> Groningen &amp; omstreken
        </li>
      </ul>

      <h2 className="page-shell-subheading">Offerte aanvragen</h2>
      <p>
        Vul het formulier in — aanvragen worden opgeslagen en zijn terug te zien
        in het beheer (/scotdejews).
      </p>
      <LeadForm source="contact-pagina" />

      <p>
        Het volledige contactblok staat ook op de{" "}
        <Link href="/#contact">homepage</Link>.
      </p>
    </PlaceholderPage>
  );
}
