import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { SiteAnalytics } from "@/components/SiteAnalytics";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteAnalytics />
      <SiteNav />
      <main id="hoofdinhoud" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
