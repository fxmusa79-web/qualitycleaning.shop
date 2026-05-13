"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function SiteAnalytics() {
  const pathname = usePathname();
  const last = useRef<string | null>(null);

  useEffect(() => {
    if (last.current === pathname) return;
    last.current = pathname;
    void fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: pathname,
        referrer: document.referrer || undefined,
      }),
      keepalive: true,
    }).catch(() => null);
  }, [pathname]);

  return null;
}
