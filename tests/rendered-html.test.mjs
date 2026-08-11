import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/", requestHeaders = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html", ...requestHeaders } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the EvoFlux landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>EvoFlux — Cowork, Agentic Coding &amp; AI Innovation Modernization<\/title>/i);
  assert.match(html, /AI agents that do/);
  assert.match(html, /Three modes\. One clear operating model\./);
  assert.match(html, /Six capabilities, organized around the work\./);
  assert.match(html, /DOCX · PPTX · XLSX/);
  assert.doesNotMatch(html, /illustrations\/(?:office-document-mockup\.svg|webbridge-browser-mockup\.png|capability-goal\.jpg|capability-code-graph\.jpg|capability-skills-mcp\.jpg)/);
  assert.doesNotMatch(html, /brand\/company-logo\.png|Company logo/);
  assert.match(html, /class="brand" href="#top" aria-label="EvoFlux home"/);
  assert.match(html, /Every · Cron · At/);
  assert.match(html, /From intent to verified outcome\./);
  assert.match(html, /Local where it matters\. Verifiable where it counts\./);
  assert.match(html, /Move legacy systems forward without losing the proof\./);
  assert.match(html, /"@type":"SoftwareApplication"/);
  assert.match(html, /rel="canonical" href="https:\/\/evoflux\.fhmq9\.cloud\//);
  assert.match(html, /One local-first AI workspace for Cowork, agentic coding/);
  assert.match(html, /Work in your real browser\./);
  assert.match(html, /archive\/extension\/EvoFlux-WebBridge\.zip/);
  assert.match(html, /Download WebBridge/);
  assert.match(html, /Keep long objectives moving\./);
  assert.match(html, /Understand code structurally\./);
  assert.doesNotMatch(html, /Coming soon/);
  assert.match(html, /Download EvoFlux/);
  assert.match(html, /github\.com\/evoelsewhere\/evoflux-page\/releases\/download\/v0\.0\.5\/EvoFlux-v0\.0\.5-macOS-Apple-Silicon\.dmg/);
  assert.match(html, /github\.com\/evoelsewhere\/evoflux-page\/releases\/download\/v0\.0\.5\/EvoFlux-v0\.0\.5-macOS-Intel\.dmg/);
  assert.match(html, /github\.com\/evoelsewhere\/evoflux-page\/releases\/download\/v0\.0\.5\/EvoFlux-v0\.0\.5-Windows-x64\.exe/);
  assert.match(html, /v0\.0\.5/);
  assert.doesNotMatch(html, /Apache 2\.0/i);
  assert.match(html, /data-auto-detect="macos"/);
  assert.match(html, /Choose Mac architecture/);
  assert.doesNotMatch(html, /EvoFlux for Mac — (?:Apple silicon|Intel)/);
  assert.doesNotMatch(html, />GitHub</i);
  assert.match(html, /GitHub Copilot/);
  assert.match(html, /@lobehub\/icons-static-svg@1\.94\.0\/icons\/openai\.svg/);
  assert.match(html, /@lobehub\/icons-static-svg@1\.94\.0\/icons\/githubcopilot\.svg/);
  assert.match(html, /Portable Agent Plugins package skills and MCP tools/);
  assert.doesNotMatch(html, /FHM Q9|FPT Japan|FJP|EvoFlux FHM/);
  assert.match(html, /EvoFlux for Mac/);
  assert.match(html, /EvoFlux for Windows/);
  assert.match(html, /platforms\/apple\.svg/);
  assert.match(html, /platforms\/windows\.svg/);
  assert.doesNotMatch(html, /Linux/i);
  assert.match(html, /evoflux-work-light\.jpg/);
  assert.match(html, /mode-session-privacy/);
  assert.match(html, /evoflux-app-icon\.png/);
  assert.match(html, /href="\/\?lang=en"/);
  assert.match(html, /href="\/jp\?lang=ja"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders the Japanese EvoFlux landing page", async () => {
  const response = await render("/jp");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /EvoFlux｜Cowork・Agentic Coding・AI Innovation Modernization/);
  assert.match(html, /実際の仕事を進める/);
  assert.match(html, /ナレッジワーク、ソフトウェア開発、統制されたモダナイゼーション/);
  assert.match(html, /3つのモード、1つの明確な運用モデル。/);
  assert.match(html, /仕事を中心に整理した6つの機能。/);
  assert.match(html, /回答ではなく、実際のファイルを作成。/);
  assert.match(html, /間隔 · Cron · 指定時刻/);
  assert.match(html, /普段のブラウザで作業。/);
  assert.match(html, /制御を保ったままEvoFluxを拡張。/);
  assert.match(html, /重要な部分はローカルに、成果は検証可能に。/);
  assert.match(html, /EvoFluxを始めよう/);
  assert.doesNotMatch(html, /Apache 2\.0/i);
  assert.match(html, /href="\/jp\/aim"/);
  assert.match(html, /href="\/\?lang=en"/);
  assert.match(html, /href="\/jp\?lang=ja"/);
  assert.doesNotMatch(html, /Linux/i);
  assert.doesNotMatch(html, /One desktop workspace/);
  assert.doesNotMatch(html, /FHM Q9|FPT Japan|FJP|EvoFlux FHM/);
});

test("shows platform-specific security guidance before installer downloads", async () => {
  const component = await readFile(new URL("../app/components/SmartDownloadCards.tsx", import.meta.url), "utf8");
  assert.match(component, /System Settings → Privacy & Security/);
  assert.match(component, /Open Anyway/);
  assert.match(component, /Downloads → Keep → Show more → Keep anyway/);
  assert.match(component, /More info → Run anyway/);
  assert.match(component, /role="dialog"/);
  assert.match(component, /aria-modal="true"/);
});

test("server-renders the dedicated AIM product page", async () => {
  const response = await render("/aim");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /AIM — AI Innovation Modernization \| EvoFlux/i);
  assert.match(html, /Move legacy systems forward/);
  assert.match(html, /One migration state from first inventory to final proof\./);
  assert.match(html, /Three foundations keep the migration coherent\./);
  assert.match(html, /Every workflow declares its input, work, readiness, human gate, and output/);
  assert.doesNotMatch(html, /Apache 2\.0/i);
  assert.match(html, /legacy source is observed, never rewritten/);
  assert.match(html, /Confirm the business behavior that must survive/);
  assert.match(html, /Recheck dependencies, approvals, and operational readiness/);
  assert.match(html, /Traceability keeps the why/);
  assert.match(html, /Is AIM an automatic code converter\?/);
  assert.match(html, /evoflux-aim-overview-light\.jpg/);
  assert.match(html, /evoflux-aim-rulebook-light\.jpg/);
  assert.match(html, /evoflux-aim-pipelines-light\.jpg/);
  assert.doesNotMatch(html, /brand\/company-logo\.png|Company logo/);
  assert.match(html, /brand\/aim-logo-transparent\.png/);
  assert.match(html, /class="brand"[^>]*aria-label="EvoFlux home"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders the Japanese AIM product page", async () => {
  const response = await render("/jp/aim");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /AIM — AI Innovation Modernization \| EvoFlux/i);
  assert.match(html, /レガシーシステムを、次の時代へ。/);
  assert.match(html, /最初の棚卸しから最終証明まで、一つの移行状態で管理。/);
  assert.match(html, /3つの基盤が移行の一貫性を保ちます。/);
  assert.match(html, /レガシーソースは観察されるだけで書き換えられません。/);
  assert.match(html, /維持すべき業務動作を確認します。/);
  assert.match(html, /依存関係、承認、運用準備状況を再確認します。/);
  assert.match(html, /Traceabilityが理由を保持。/);
  assert.match(html, /AIMは自動コード変換ツールですか？/);
  assert.match(html, /href="\/aim\?lang=en"/);
  assert.match(html, /href="\/jp\/aim\?lang=ja"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("detects Japanese from the browser language on first AIM visit", async () => {
  const response = await render("/aim", { "accept-language": "ja-JP,ja;q=0.9,en;q=0.7" });
  assert.ok([307, 308].includes(response.status));
  assert.equal(new URL(response.headers.get("location")).pathname, "/jp/aim");
  assert.match(response.headers.get("set-cookie") ?? "", /evoflux_locale=ja/);
});

test("detects Japanese from the browser language on first main-page visit", async () => {
  const response = await render("/", { "accept-language": "ja-JP,ja;q=0.9,en;q=0.7" });
  assert.ok([307, 308].includes(response.status));
  assert.equal(new URL(response.headers.get("location")).pathname, "/jp");
  assert.match(response.headers.get("set-cookie") ?? "", /evoflux_locale=ja/);
});

test("remembers an explicit English choice on the main page", async () => {
  const switchResponse = await render("/jp?lang=en", { "accept-language": "ja-JP" });
  assert.ok([307, 308].includes(switchResponse.status));
  assert.equal(new URL(switchResponse.headers.get("location")).pathname, "/");
  assert.match(switchResponse.headers.get("set-cookie") ?? "", /evoflux_locale=en/);

  const englishResponse = await render("/", {
    "accept-language": "ja-JP",
    cookie: "evoflux_locale=en",
  });
  assert.equal(englishResponse.status, 200);
  assert.match(await englishResponse.text(), /AI agents that do/);
});

test("remembers an explicit English language choice", async () => {
  const switchResponse = await render("/jp/aim?lang=en", { "accept-language": "ja-JP" });
  assert.ok([307, 308].includes(switchResponse.status));
  assert.equal(new URL(switchResponse.headers.get("location")).pathname, "/aim");
  assert.match(switchResponse.headers.get("set-cookie") ?? "", /evoflux_locale=en/);

  const englishResponse = await render("/aim", {
    "accept-language": "ja-JP",
    cookie: "evoflux_locale=en",
  });
  assert.equal(englishResponse.status, 200);
  assert.match(await englishResponse.text(), /Move legacy systems forward/);
});
