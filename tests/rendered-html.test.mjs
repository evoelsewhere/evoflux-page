import assert from "node:assert/strict";
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
  assert.match(html, /One harness, three modes/);
  assert.match(html, /From a prompt to a board-ready artifact/);
  assert.match(html, /illustrations\/office-presentation-mockup\.svg/);
  assert.match(html, /illustrations\/office-spreadsheet-mockup\.svg/);
  assert.match(html, /illustrations\/office-document-mockup\.svg/);
  assert.match(html, /PowerPoint · PPTX/);
  assert.match(html, /Excel · XLSX/);
  assert.match(html, /Word · DOCX/);
  assert.match(html, /brand\/company-logo\.png/);
  assert.doesNotMatch(html, /class="brand" href="#top"/);
  assert.match(html, /Set it once\./);
  assert.match(html, /Every · Cron · At/);
  assert.match(html, /Any IANA timezone/);
  assert.match(html, /evoflux-scheduler-light\.png/);
  assert.match(html, /EvoFlux for modern teams/);
  assert.match(html, /Open cowork AI for teams that do more than chat\./);
  assert.match(html, /AI Innovation Modernization connects legacy understanding/);
  assert.match(html, /"@type":"SoftwareApplication"/);
  assert.match(html, /rel="canonical" href="https:\/\/evoflux\.fhmq9\.cloud\//);
  assert.match(html, /One local-first AI workspace for Cowork, agentic coding/);
  assert.match(html, /Layered sandbox/);
  assert.match(html, /illustrations\/capability-sandbox\.jpg/);
  assert.match(html, /illustrations\/capability-webbridge\.jpg/);
  assert.match(html, /illustrations\/capability-goal\.jpg/);
  assert.match(html, /illustrations\/capability-code-graph\.jpg/);
  assert.match(html, /illustrations\/capability-memory\.jpg/);
  assert.match(html, /illustrations\/capability-skills-mcp\.jpg/);
  assert.match(html, /illustrations\/capability-engineering-lanes\.jpg/);
  assert.match(html, /illustrations\/capability-observability\.jpg/);
  assert.match(html, /Your browser is part of the workspace\./);
  assert.match(html, /Durable Goal mode/);
  assert.match(html, /Structural code graph/);
  assert.match(html, /Coming soon/);
  assert.doesNotMatch(html, /github\.com|>GitHub</i);
  assert.match(html, /GitHub Copilot/);
  assert.match(html, /@lobehub\/icons-static-svg@1\.94\.0\/icons\/openai\.svg/);
  assert.match(html, /@lobehub\/icons-static-svg@1\.94\.0\/icons\/githubcopilot\.svg/);
  assert.match(html, /id="team-workspace"/);
  assert.doesNotMatch(html, /FHM Q9|FPT Japan|FJP|EvoFlux FHM/);
  assert.match(html, /EvoFlux for Mac/);
  assert.match(html, /EvoFlux for Windows/);
  assert.match(html, /platforms\/apple\.svg/);
  assert.match(html, /platforms\/windows\.svg/);
  assert.doesNotMatch(html, /Linux/i);
  assert.match(html, /evoflux-work-light\.jpg/);
  assert.match(html, /mode-session-privacy/);
  assert.match(html, /illustrations\/sandbox-settings-mockup\.png/);
  assert.match(html, /illustrations\/webbridge-browser-mockup\.png/);
  assert.match(html, /evoflux-app-icon\.png/);
  assert.match(html, /Agent field live/);
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
  assert.match(html, /ナレッジワーク、ソフトウェア開発、レガシーモダナイゼーション/);
  assert.match(html, /一つのハーネス、三つのモード/);
  assert.match(html, /プロンプトから、経営会議に出せる成果物へ。/);
  assert.match(html, /構造化DOCX/);
  assert.match(html, /一度設定すれば、/);
  assert.match(html, /間隔 · Cron · 指定時刻/);
  assert.match(html, /任意のIANAタイムゾーン/);
  assert.match(html, /あらゆるチームのためのEvoFlux/);
  assert.match(html, /リポジトリ不要の共同作業/);
  assert.match(html, /ブラウザもワークスペースの一部/);
  assert.match(html, /EvoFluxを始めよう/);
  assert.match(html, /href="\/jp\/aim"/);
  assert.match(html, /href="\/\?lang=en"/);
  assert.match(html, /href="\/jp\?lang=ja"/);
  assert.doesNotMatch(html, /Linux/i);
  assert.doesNotMatch(html, /One desktop workspace/);
  assert.doesNotMatch(html, /FHM Q9|FPT Japan|FJP|EvoFlux FHM/);
});

test("server-renders the dedicated AIM product page", async () => {
  const response = await render("/aim");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /AIM — AI Innovation Modernization \| EvoFlux/i);
  assert.match(html, /Move legacy systems forward/);
  assert.match(html, /operating system for a migration—not a prompt wrapped around a code generator/i);
  assert.match(html, /The migration-specific operating contract\./);
  assert.match(html, /Every run declares its input, work, gate, and output\./);
  assert.match(html, /Read-only legacy estate/);
  assert.match(html, /Domain expert confirms behavior/);
  assert.match(html, /Cutover record \+ auditable release state/);
  assert.match(html, /Unit → rule → mapping → evidence/);
  assert.match(html, /Is AIM an automatic code converter\?/);
  assert.match(html, /Ask “why is this done\?” and follow the answer end to end\./);
  assert.match(html, /evoflux-aim-overview-light\.jpg/);
  assert.match(html, /evoflux-aim-rulebook-light\.jpg/);
  assert.match(html, /evoflux-aim-suggest-light\.jpg/);
  assert.match(html, /brand\/company-logo\.png/);
  assert.match(html, /brand\/aim-logo-transparent\.png/);
  assert.doesNotMatch(html, /class="brand"[^>]*aria-label="EvoFlux home"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders the Japanese AIM product page", async () => {
  const response = await render("/jp/aim");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /AIM — AI Innovation Modernization \| EvoFlux/i);
  assert.match(html, /レガシーシステムを、次の時代へ。/);
  assert.match(html, /移行プロジェクトのオペレーティングシステムです/);
  assert.match(html, /すべての実行が、入力・作業・ゲート・出力を宣言します。/);
  assert.match(html, /読み取り専用レガシー資産/);
  assert.match(html, /ドメイン専門家が動作を確認/);
  assert.match(html, /カットオーバー記録 \+ 監査可能なリリース状態/);
  assert.match(html, /ユニット → ルール → マッピング → 証拠/);
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
