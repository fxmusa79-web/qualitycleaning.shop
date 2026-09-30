-- Quality Cleaning — Cloudflare D1 schema
-- Run once: cf d1 execute quality-cleaning-db --file=schema.sql

CREATE TABLE IF NOT EXISTS leads (
  id          TEXT PRIMARY KEY,
  created_at  TEXT NOT NULL,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT,
  service     TEXT,
  message     TEXT NOT NULL,
  source      TEXT DEFAULT 'website'
);

CREATE TABLE IF NOT EXISTS page_views (
  id         TEXT PRIMARY KEY,
  timestamp  TEXT NOT NULL,
  path       TEXT NOT NULL,
  referrer   TEXT,
  ua         TEXT
);
