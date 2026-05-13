import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PlaceholderPage({ title, description, children }: Props) {
  return (
    <article className="page-shell">
      <h1 className="page-shell-title">{title}</h1>
      {description ? (
        <p className="page-shell-lead">{description}</p>
      ) : null}
      <div className="page-shell-body">
        {children ?? (
          <p>
            Deze pagina wordt binnenkort uitgebreid met meer informatie. Tot die
            tijd vindt u een volledig overzicht op de{" "}
            <Link href="/">homepage</Link> en kunt u ons bereiken via de{" "}
            <Link href="/contact">contactpagina</Link>.
          </p>
        )}
      </div>
      <p className="page-shell-back">
        <Link href="/">← Terug naar home</Link>
      </p>
    </article>
  );
}
