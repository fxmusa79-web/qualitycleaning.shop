import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "qualitycleaning-shop",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-09-30",
    compatibilityFlags: ["nodejs_compat"],
    assets: { notFoundHandling: "none" },
    domains: ["qualitycleaning.shop"],
    workersDev: false,
    previewUrls: false,
    env: {
      ASSETS: bindings.assets(),
      IMAGES: bindings.images(),
      DB: bindings.d1({ name: "qualitycleaning", id: "3640b0ed-f68a-41b7-98d2-d7516ffe0424" }),
    },
  }),
});
