import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "qc_admin";

export function cookieName(): typeof COOKIE_NAME {
  return COOKIE_NAME;
}

function sessionSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ??
    "dev-admin-session-vervang-op-productie-lang-en-random"
  );
}

export function createAdminSessionToken(): string {
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const sig = createHmac("sha256", sessionSecret())
    .update(String(exp))
    .digest("hex");
  return `${exp}.${sig}`;
}

export function verifyAdminSessionToken(token: string | undefined): boolean {
  if (!token || typeof token !== "string") return false;
  const i = token.lastIndexOf(".");
  if (i === -1) return false;
  const expStr = token.slice(0, i);
  const sig = token.slice(i + 1);
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || Date.now() > exp) return false;
  const expected = createHmac("sha256", sessionSecret())
    .update(String(exp))
    .digest("hex");
  try {
    const a = Buffer.from(sig, "utf8");
    const b = Buffer.from(expected, "utf8");
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function adminCredentials(): { username: string; password: string } {
  return {
    username: process.env.ADMIN_USERNAME ?? "admin",
    password: process.env.ADMIN_PASSWORD ?? "admin",
  };
}
