import type { Metadata } from "next";
import { withBasePath } from "./base-path";
import { ModeShowcase } from "./components/ModeShowcase";
import { SmartDownloadCards } from "./components/SmartDownloadCards";
import { localizeHomeNode, type HomeLocale } from "./home-locales";

export const metadata: Metadata = {
  title: "EvoFlux — Cowork, Agentic Coding & AI Innovation Modernization",
  description: "EvoFlux brings Cowork, agentic coding, WebBridge browser automation, and governed AI Innovation Modernization into one local-first workspace.",
  alternates: { canonical: withBasePath("/"), languages: { en: withBasePath("/"), ja: withBasePath("/jp/") } },
};

const workflow = [
  ["01", "Plan", "Define the outcome and proof."],
  ["02", "Delegate", "Bring in the right specialists."],
  ["03", "Execute", "Work across files, tools, and browsers."],
  ["04", "Verify", "Run checks and attach evidence."],
  ["05", "Review", "Resolve findings and approvals."],
  ["06", "Deliver", "Ship the artifact and its proof."],
];

const capabilities = [
  { number: "01", mark: "DOC", label: "ARTIFACTS", title: "Create the file, not just the answer.", text: "Build editable Word, PowerPoint, and Excel deliverables with structure checks and visual review.", fact: "DOCX · PPTX · XLSX" },
  { number: "02", mark: "WEB", label: "BROWSER", title: "Work in your real browser.", text: "WebBridge uses your signed-in Chrome or Edge session with explicit sharing, policy checks, and human handoff.", fact: "Navigate · act · capture evidence", download: true },
  { number: "03", mark: "AT", label: "AUTOMATION", title: "Bring recurring work back on time.", text: "Schedule Work or Coding tasks by interval, exact time, or cron with a clear timezone and session policy.", fact: "Every · Cron · At" },
  { number: "04", mark: "GO", label: "AUTONOMY", title: "Keep long objectives moving.", text: "Goal mode survives reconnects and restarts with status, budgets, pause controls, and concrete blocker detection.", fact: "Persistent · bounded" },
  { number: "05", mark: "</>", label: "ENGINEERING", title: "Understand code structurally.", text: "Code graphs, isolated worktrees, tests, diffs, and independent review support safer parallel delivery.", fact: "Graph · build · test · review" },
  { number: "06", mark: "MCP", label: "PLUGINS", title: "Extend EvoFlux without losing control.", text: "Portable Agent Plugins package skills and MCP tools with reviewed permissions, isolated secrets, and local lifecycle management.", fact: "Discover · review · install · update" },
];

const PROVIDER_ICON_BASE = "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.94.0/icons";
const providers = [
  ["OpenAI", "openai"], ["Anthropic", "anthropic"], ["Gemini", "gemini"],
  ["Bedrock", "bedrock"], ["OpenRouter", "openrouter"], ["Ollama", "ollama"],
  ["DeepSeek", "deepseek"], ["Kimi", "kimi"], ["xAI", "xai"],
  ["Vertex AI", "vertexai"], ["GitHub Copilot", "githubcopilot"], ["NVIDIA", "nvidia"],
];

export function HomePageContent({ locale = "en" }: { locale?: HomeLocale }) {
  const page = (
    <main className="home-page home-page-condensed" lang={locale}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="EvoFlux home">
          <img src={withBasePath("/evoflux-app-icon.png")} width="34" height="34" alt="" />
          <span>EvoFlux</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#modes">Workspace</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#workflow">How it works</a>
          <a href="#trust">Trust</a>
          <a href={withBasePath(locale === "ja" ? "/jp/aim" : "/aim")}>AIM</a>
        </nav>
        <div className="header-actions">
          <div className="aim2-language-switch" aria-label="Language">
            <a href={withBasePath("/?lang=en")} className={locale === "en" ? "is-active" : ""} lang="en">EN</a>
            <a href={withBasePath("/jp?lang=ja")} className={locale === "ja" ? "is-active" : ""} lang="ja">日本語</a>
          </div>
          <a className="button button-dark button-small" href="#download">Download</a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#modes">Workspace</a><a href="#capabilities">Capabilities</a><a href="#workflow">How it works</a><a href="#trust">Trust</a>
              <a href={withBasePath(locale === "ja" ? "/jp/aim" : "/aim")}>AIM</a><a href="#download">Download</a>
            </nav>
          </details>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-aurora-background" aria-hidden="true">
          <span className="aurora-ribbon aurora-ribbon-one" /><span className="aurora-ribbon aurora-ribbon-two" /><span className="aurora-ribbon aurora-ribbon-three" />
          <div className="aurora-halo" />
          <div className="aurora-flow-trace"><i /><i /><i /><i /><i /><i /></div>
          <div className="aurora-work-signals"><span>PLAN</span><span>DELEGATE</span><span>EXECUTE</span><span>VERIFY</span><span>DELIVER</span></div>
        </div>
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="eyebrow-dot" />Local-first agent harness</div>
          <img className="hero-mark" src={withBasePath("/evoflux-app-icon.png")} width="92" height="92" alt="EvoFlux" />
          <h1>AI agents that do <em>real work.</em></h1>
          <p>One desktop workspace for knowledge work, software engineering, and governed modernization—coordinated, executed, and verified in one place.</p>
          <div className="hero-actions"><a className="button button-dark" href="#download">Download EvoFlux</a><a className="button button-ghost" href="#modes">Explore the workspace <span aria-hidden="true">↘</span></a></div>
          <div className="trust-row" aria-label="Product attributes"><span>12 model providers</span><i /><span>macOS · Windows</span></div>
        </div>
        <div className="hero-stage reveal-late">
          <div className="hero-status status-left"><span className="status-orb violet" /><div><strong>3 specialists active</strong><small>Research · Build · Review</small></div></div>
          <div className="hero-status status-right"><span className="verified-mark">✓</span><div><strong>Verified delivery</strong><small>Evidence attached</small></div></div>
          <div className="screen-frame hero-screen"><div className="screen-topbar"><span className="traffic red" /><span className="traffic amber" /><span className="traffic green" /><span className="screen-label">EvoFlux · Work</span><span className="screen-live"><i /> Local</span></div><img src={withBasePath("/screens/evoflux-work-light.jpg")} alt="EvoFlux Work mode showing a launch readiness brief" /><span className="hero-session-privacy" aria-hidden="true" /></div>
        </div>
      </section>

      <section id="modes" className="section modes-section compact-section">
        <div className="section-heading centered"><span className="section-kicker">Choose the right workspace</span><h2>Three modes. One clear operating model.</h2><p>Start with the kind of work you need. EvoFlux keeps context, policy, tools, and evidence consistent as the scope grows.</p></div>
        <ModeShowcase locale={locale} />
      </section>

      <section id="capabilities" className="section compact-capabilities">
        <div className="compact-section-head"><div><span className="section-kicker">Everything in one workspace</span><h2>Six capabilities, organized around the work.</h2></div><p>Use only what the task needs. Every capability returns to the same conversation, files, permissions, and delivery record.</p></div>
        <div className="compact-capability-grid">
          {capabilities.map((capability) => (
            <article className="compact-card" data-number={capability.number} key={capability.number}>
              <div className="compact-card-top"><span>{capability.number} · {capability.label}</span><b>{capability.mark}</b></div>
              <div className="compact-card-copy">
                <h3>{capability.title}</h3>
                <div className="compact-card-detail">
                  <p>{capability.text}</p><small>{capability.fact}</small>
                  {capability.download && <a className="compact-card-download" href={withBasePath("/archive/extension/EvoFlux-WebBridge.zip")} download>Download WebBridge <span aria-hidden="true">↓</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="compact-workflow">
        <div className="compact-section-head is-light"><div><span className="section-kicker">One delivery loop</span><h2>From intent to verified outcome.</h2></div><p>Small tasks stay direct. Larger tasks gain specialists and gates without changing the way progress is inspected.</p></div>
        <div className="compact-workflow-track" aria-label="EvoFlux delivery workflow">
          {workflow.map(([number, title, text], index) => (
            <article key={number}>
              <div className="workflow-node"><span>{number}</span>{index < workflow.length - 1 && <i aria-hidden="true">→</i>}</div>
              <div className="workflow-card"><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="trust" className="section compact-trust">
        <div className="compact-section-head"><div><span className="section-kicker">Control stays visible</span><h2>Local where it matters. Verifiable where it counts.</h2></div><p>EvoFlux wraps replaceable models in a durable execution system instead of asking a chat model to manage safety and delivery by itself.</p></div>
        <div className="compact-trust-grid">
          <article><span>LOCAL-FIRST</span><h3>Your workspace stays yours.</h3><p>Files, repositories, context, memory, and execution history stay under your control with explicit roots and permissions.</p><ul><li>Filesystem and command boundaries</li><li>Outbound data protection</li><li>Human approval for side effects</li></ul></article>
          <article><span>VERIFIED DELIVERY</span><h3>Evidence is part of execution.</h3><p>Tests, diffs, visual checks, deterministic comparisons, and reviews are attached while the work happens.</p><ul><li>Inspectable tool and agent activity</li><li>Independent review and rework</li><li>Artifacts linked to their proof</li></ul></article>
          <article><span>MODEL FLEXIBILITY</span><h3>Choose the right model per role.</h3><p>Assign providers independently to the Lead and specialists, including local inference through Ollama.</p><div className="compact-provider-cloud">{providers.map(([name, icon]) => <span key={name}><img src={`${PROVIDER_ICON_BASE}/${icon}.svg`} alt="" width="18" height="18" loading="lazy" />{name}</span>)}</div></article>
        </div>
      </section>

      <section className="section compact-aim-spotlight">
        <div className="compact-aim-copy"><img src={withBasePath("/brand/aim-logo-transparent.png")} width="1851" height="850" alt="AIM" /><span className="section-kicker">Governed modernization</span><h2>Move legacy systems forward without losing the proof.</h2><p>AIM connects estate understanding, approved rules, target work, pipelines, and equivalence evidence in one migration control plane.</p><a className="button button-dark" href={withBasePath(locale === "ja" ? "/jp/aim" : "/aim")}>Explore AIM <span>→</span></a></div>
        <div className="screen-frame compact-aim-screen"><div className="screen-topbar"><span className="traffic red" /><span className="traffic amber" /><span className="traffic green" /><span className="screen-label">EvoFlux · AIM</span></div><img src={withBasePath("/screens/evoflux-aim-overview-light.jpg?v=3")} alt="EvoFlux AIM migration overview" loading="lazy" /></div>
      </section>

      <section className="section faq-section compact-faq">
        <div className="faq-title"><span className="section-kicker">Questions</span><h2>What teams usually ask.</h2></div>
        <div className="faq-list">
          <details open><summary>Is EvoFlux a web application?</summary><p>No. EvoFlux is a desktop-first product that works directly with your files, repositories, browsers, and local tools.</p></details>
          <details><summary>Do I have to use a specific AI model?</summary><p>No. Choose models independently for the Lead and specialists across twelve providers, including local models through Ollama.</p></details>
          <details><summary>When does EvoFlux use multiple agents?</summary><p>Simple tasks stay direct. Specialists activate only when parallel research, implementation, architecture, or review adds value.</p></details>
          <details><summary>What makes AIM different from Coding?</summary><p>Coding delivers engineering changes. AIM adds estate inventory, migration governance, traceability, equivalence checks, and cutover evidence.</p></details>
        </div>
      </section>

      <section id="download" className="closing-section"><div className="closing-glow" /><span className="section-kicker">Choose your platform</span><h2>Start with EvoFlux.</h2><p>Think, build, verify, and ship from one local-first desktop workspace.</p><SmartDownloadCards locale={locale} /></section>

      <footer><div className="footer-brand"><img src={withBasePath("/evoflux-app-icon.png")} alt="" width="32" height="32" /><strong>EvoFlux</strong><p>A harness-first desktop workspace for agents that do real work.</p></div><div className="footer-links"><div><strong>Product</strong><a href="#modes">Workspace</a><a href="#capabilities">Capabilities</a><a href={withBasePath(locale === "ja" ? "/jp/aim" : "/aim")}>AIM</a></div><div><strong>Principles</strong><a href="#workflow">Inspectable</a><a href="#trust">Local-first</a><a href="#trust">Verified</a></div></div><div className="footer-bottom"><span>© 2026 EvoFlux</span><span>Built in the open</span></div></footer>
    </main>
  );
  return localizeHomeNode(page, locale);
}

export default function Home() {
  return <HomePageContent locale="en" />;
}
