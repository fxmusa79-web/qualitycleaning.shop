/**
 * Patches the `cf` package to disable strict mode during Worker deployment.
 *
 * The `cf` CLI hardcodes `strict: true` in its deploy input builder, which
 * causes deployments to abort when the local worker.config.json differs from
 * the remote Cloudflare Worker configuration (e.g. new bindings or route metadata).
 *
 * This postinstall script finds the deploy-input file and replaces `strict:!0`
 * (i.e. strict: true) with `strict:!1` (strict: false) so deploys succeed.
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const distDir = join(root, 'node_modules', 'cf', 'dist');

let patched = 0;

try {
  const files = readdirSync(distDir).filter(f => f.startsWith('deploy-input-') && f.endsWith('.mjs'));

  for (const file of files) {
    const filePath = join(distDir, file);
    const original = readFileSync(filePath, 'utf8');

    // Replace all occurrences of strict:!0 (strict: true) with strict:!1 (strict: false)
    const modified = original.replaceAll('strict:!0', 'strict:!1');

    if (modified !== original) {
      writeFileSync(filePath, modified, 'utf8');
      patched++;
      console.log(`[patch-cf-strict] Patched: ${file}`);
    } else {
      console.log(`[patch-cf-strict] Already patched or pattern not found: ${file}`);
    }
  }

  if (files.length === 0) {
    console.warn('[patch-cf-strict] Warning: No deploy-input-*.mjs files found in cf/dist. Skipping.');
  }
} catch (err) {
  // Non-fatal: if cf package isn't installed yet or dist folder missing, skip silently
  if (err.code === 'ENOENT') {
    console.log('[patch-cf-strict] cf/dist not found, skipping patch.');
  } else {
    console.warn('[patch-cf-strict] Unexpected error:', err.message);
  }
}
