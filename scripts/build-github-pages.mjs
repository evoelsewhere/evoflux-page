import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDirectory = path.join(projectRoot, "dist", "client");
const outputDirectory = path.join(projectRoot, "dist", "pages");
const workerEntry = path.join(projectRoot, "dist", "server", "index.js");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicOrigin = process.env.PUBLIC_SITE_ORIGIN ?? "https://evoflux.fhmq9.cloud";

const routes = [
  { pathname: "/", output: "index.html", locale: "en" },
  { pathname: "/jp", output: "jp/index.html", locale: "ja" },
  { pathname: "/aim", output: "aim/index.html", locale: "en" },
  { pathname: "/jp/aim", output: "jp/aim/index.html", locale: "ja" },
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

const workerUrl = pathToFileURL(workerEntry);
workerUrl.searchParams.set("pages", String(Date.now()));
const { default: worker } = await import(workerUrl.href);

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`${publicOrigin}${route.pathname}`, {
      headers: {
        accept: "text/html",
        "accept-language": route.locale === "ja" ? "ja-JP,ja;q=0.9" : "en-US,en;q=0.9",
        cookie: `evoflux_locale=${route.locale}`,
      },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (response.status !== 200) {
    throw new Error(`Static render failed for ${route.pathname}: HTTP ${response.status}`);
  }

  const outputPath = path.join(outputDirectory, route.output);
  await mkdir(path.dirname(outputPath), { recursive: true });
  const html = (await response.text())
    .replace('<html lang="en">', `<html lang="${route.locale}">`)
    .replaceAll('href="/assets/_vinext_fonts/', `href="${basePath}/assets/_vinext_fonts/`)
    .replaceAll(`http://localhost:3000${basePath}`, `${publicOrigin}${basePath}`);

  if (/http:\/\/localhost:3000/.test(html) || (!basePath && /\b(?:href|src)="\/evoflux-page\//.test(html))) {
    throw new Error(`Static render for ${route.pathname} contains a URL that is not Pages-safe`);
  }
  await writeFile(outputPath, html);
}

await writeFile(path.join(outputDirectory, ".nojekyll"), "");
await writeFile(
  path.join(outputDirectory, "404.html"),
  `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${basePath}/"><title>EvoFlux</title><a href="${basePath}/">Open EvoFlux</a>`,
);
