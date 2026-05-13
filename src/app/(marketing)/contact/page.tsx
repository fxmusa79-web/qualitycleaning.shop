import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Quality Cleaning voor een offerte of afspraak.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage title="Contact">
      <p>
        Voor vragen en offertes gebruikt u onderstaande gegevens — dit zijn
        tijdelijke placeholders; vervang ze door uw echte telefoonnummer en
        e-mailadres voordat u live gaat.
      </p>
      <ul className="page-shell-list">
        <li>
          <strong>Telefoon:</strong>{" "}
          <a href="tel:+31600000000">+31 6 00 00 00 00</a>
        </li>
        <li>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:info@qualitycleaning.nl">info@qualitycleaning.nl</a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/31600000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat direct
          </a>
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
