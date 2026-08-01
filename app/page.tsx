import type { Metadata } from "next";
import { withBasePath } from "./base-path";
import { ModeShowcase } from "./components/ModeShowcase";
import { localizeHomeNode, type HomeLocale } from "./home-locales";

const RELEASE_URL = "https://github.com/khuonghung/evoflux/releases/latest";
const GITHUB_URL = "https://github.com/khuonghung/evoflux";

export const metadata: Metadata = {
  title: "EvoFlux FHM — Open Cowork AI & AIM for FPT Japan",
  description: "EvoFlux brings open cowork AI, Coding, WebBridge browser work, and AIM modernization to FHM Q9, FPT, FPT Japan, and FJP teams.",
  alternates: { canonical: withBasePath("/"), languages: { en: withBasePath("/"), ja: withBasePath("/jp/") } },
};

const steps = [
  { number: "01", label: "Plan", note: "Define scope and proof" },
  { number: "02", label: "Delegate", note: "Match the right specialist" },
  { number: "03", label: "Parallelize", note: "Run independent workstreams" },
  { number: "04", label: "Verify", note: "Check files, tools, and tests" },
  { number: "05", label: "Review", note: "Challenge and rework" },
  { number: "06", label: "Deliver", note: "Ship evidence, not promises" },
];

const providers = [
  "OpenAI",
  "Anthropic",
  "Gemini",
  "Bedrock",
  "OpenRouter",
  "Ollama",
  "DeepSeek",
  "Kimi",
  "xAI",
  "Vertex AI",
  "GitHub Copilot",
  "NVIDIA",
];

export function HomePageContent({ locale = "en" }: { locale?: HomeLocale }) {
  const page = (
    <main lang={locale}>
      <header className="site-header">
        <div className="brand-cluster">
          <a className="brand" href="#top" aria-label="EvoFlux home">
            <img src={withBasePath("/evoflux-app-icon.png")} alt="" width="34" height="34" />
            <span>EvoFlux</span>
          </a>
          <span className="brand-divider" aria-hidden="true" />
          <img
            className="company-brand"
            src={withBasePath("/brand/fpt-software-fhm-q9.png")}
            width="885"
            height="241"
            alt="FPT Software, FHM and Q9 Quy Nhon Delivery Unit"
          />
        </div>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#modes">Modes</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#orchestration">Orchestration</a>
          <a href="#local-first">Local-first</a>
          <a href={withBasePath(locale === "ja" ? "/jp/aim" : "/aim")}>AIM</a>
        </nav>

        <div className="header-actions">
          <div className="aim2-language-switch" aria-label="Language">
            <a href={withBasePath("/?lang=en")} className={locale === "en" ? "is-active" : ""} lang="en">EN</a>
            <a href={withBasePath("/jp?lang=ja")} className={locale === "ja" ? "is-active" : ""} lang="ja">日本語</a>
          </div>
          <a className="text-link desktop-only" href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="button button-dark button-small" href={RELEASE_URL} target="_blank" rel="noreferrer">
            Download
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#modes">Modes</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#orchestration">Orchestration</a>
              <a href="#local-first">Local-first</a>
              <a href="#architecture">Architecture</a>
              <a href={withBasePath(locale === "ja" ? "/jp/aim" : "/aim")}>AIM</a>
              <a href={GITHUB_URL}>GitHub</a>
            </nav>
          </details>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="flux-atmosphere" aria-hidden="true">
          <div className="flux-ring flux-ring-one" />
          <div className="flux-ring flux-ring-two" />
          <div className="flux-pulse pulse-one" />
          <div className="flux-pulse pulse-two" />
          <div className="flux-pulse pulse-three" />
        </div>
        <div className="space-field" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
          <span className="space-beam beam-one" />
          <span className="space-beam beam-two" />
          <span className="space-beam beam-three" />
        </div>

        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="eyebrow-dot" />Local-first agent harness</div>
          <img className="hero-mark" src={withBasePath("/evoflux-app-icon.png")} width="92" height="92" alt="EvoFlux" />
          <h1>AI agents that do <em>real work.</em></h1>
          <p>One desktop workspace for knowledge work, software engineering, and legacy modernization—orchestrated in parallel and verified before delivery.</p>
          <div className="hero-actions">
            <a className="button button-dark" href={RELEASE_URL} target="_blank" rel="noreferrer">
              Download EvoFlux <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href="#modes">Explore the workspace <span aria-hidden="true">↘</span></a>
          </div>
          <div className="trust-row" aria-label="Product attributes">
            <span>Apache 2.0</span><i />
            <span>12 model providers</span><i />
            <span>macOS · Windows</span>
          </div>
        </div>

        <div className="hero-stage reveal-late">
          <div className="hero-status status-left">
            <span className="status-orb violet" />
            <div><strong>3 specialists active</strong><small>Research · Build · Review</small></div>
          </div>
          <div className="hero-status status-right">
            <span className="verified-mark">✓</span>
            <div><strong>Verified delivery</strong><small>Evidence attached</small></div>
          </div>
          <div className="screen-frame hero-screen">
            <div className="screen-topbar">
              <span className="traffic red" /><span className="traffic amber" /><span className="traffic green" />
              <span className="screen-label">EvoFlux · Work</span>
              <span className="screen-live"><i /> Local</span>
            </div>
            <img src={withBasePath("/screens/evoflux-work-light.jpg")} alt="EvoFlux Work mode showing a launch readiness brief" />
          </div>
        </div>
      </section>

      <section id="modes" className="section modes-section">
        <div className="section-heading centered">
          <span className="section-kicker">One harness, three modes</span>
          <h2>Different work. One operating model.</h2>
          <p>Move from a quick research task to a production repository or a governed migration without changing how work is controlled.</p>
        </div>
        <ModeShowcase locale={locale} />
      </section>

      <section id="office" className="section office-section">
        <div className="office-heading">
          <div>
            <span className="section-kicker">Office · artifact creation</span>
            <h2>From a prompt to a board-ready artifact.</h2>
          </div>
          <p>EvoFlux builds the actual editable file—not a wall of suggestions. Specialist workflows create the content, validate the structure, and visually inspect the result before delivery.</p>
        </div>

        <div className="office-showcase-grid">
          <article className="office-card office-card-featured">
            <div className="office-art office-art-word">
              <img src={withBasePath("/screens/evoflux-office-word-light.png")} alt="EvoFlux creating and previewing a structured Word transformation report" loading="lazy" />
              <span className="office-artifact-badge"><i className="docx" /> Structured DOCX</span>
            </div>
            <div className="office-card-copy">
              <span>01 · DOCUMENTS</span>
              <h3>Long-form reports that stay coherent.</h3>
              <p>Cover, table of contents, branded sections, styled tables, diagrams, citations, headers, footers, and page-by-page layout QA.</p>
              <div className="office-metrics"><b>20 pages</b><b>Auto TOC</b><b>Visual QA</b></div>
            </div>
          </article>

          <article className="office-card office-card-compact">
            <div className="office-art office-art-slides">
              <img src={withBasePath("/screens/evoflux-office-powerpoint-light.png")} alt="EvoFlux creating and previewing an executive PowerPoint deck" loading="lazy" />
              <span className="office-artifact-badge"><i className="ppt" /> Editable PPTX</span>
            </div>
            <div className="office-card-copy">
              <span>02 · PRESENTATIONS</span>
              <h3>Strategy decks with a real visual system.</h3>
              <p>Executive narrative, native charts, architecture diagrams, roadmaps, speaker notes, and consistent slide hierarchy—assembled and checked as one deliverable.</p>
              <div className="office-metrics"><b>12 slides</b><b>4 native charts</b><b>16:9 verified</b></div>
            </div>
          </article>

          <article className="office-card office-card-compact">
            <div className="office-art office-art-excel">
              <img src={withBasePath("/screens/evoflux-office-excel-light.png")} alt="EvoFlux creating and previewing a multi-sheet Excel portfolio model" loading="lazy" />
              <span className="office-artifact-badge"><i className="xlsx" /> Formula-ready XLSX</span>
            </div>
            <div className="office-card-copy">
              <span>03 · SPREADSHEETS</span>
              <h3>Models that calculate, explain, and update.</h3>
              <p>Linked sheets, robust formulas, scenario controls, dashboards, risk heatmaps, validation, and clean number formats.</p>
              <div className="office-metrics"><b>6 sheets</b><b>18 initiatives</b><b>0 formula errors</b></div>
            </div>
          </article>
        </div>

        <div className="office-proof-line">
          <span><i /> Native files</span>
          <span><i /> Editable objects</span>
          <span><i /> Formula and structure checks</span>
          <span><i /> Rendered visual review</span>
        </div>
      </section>

      <section id="automation" className="section scheduler-section">
        <div className="scheduler-shell">
          <div className="scheduler-copy">
            <span className="section-kicker">Automation · Scheduler</span>
            <h2>Set it once.<br />EvoFlux brings it back on time.</h2>
            <p>Turn repeatable Work or Coding prompts into scheduled tasks. Run them on a simple interval, at an exact time, or with cron—using the timezone and session strategy you choose.</p>
            <div className="scheduler-capabilities">
              <span><small>Schedule</small><strong>Every · Cron · At</strong></span>
              <span><small>Routing</small><strong>Work or Coding</strong></span>
              <span><small>Session</small><strong>New or continued</strong></span>
              <span><small>Timezone</small><strong>IANA aware</strong></span>
            </div>
            <p className="scheduler-note"><i>✓</i><span><strong>Clear, inspectable automation</strong><small>The task keeps its prompt, route, cadence, timezone, and session policy together.</small></span></p>
          </div>

          <div className="scheduler-visual">
            <div className="scheduler-orbit scheduler-orbit-one" aria-hidden="true" />
            <div className="scheduler-orbit scheduler-orbit-two" aria-hidden="true" />
            <div className="scheduler-screen-card">
              <img src={withBasePath("/screens/evoflux-scheduler-light.png")} alt="EvoFlux Scheduler creating a timezone-aware recurring task" />
            </div>
            <div className="scheduler-float scheduler-float-left"><small>Schedule types</small><strong>Every · Cron · At</strong></div>
            <div className="scheduler-float scheduler-float-right"><i /><span><small>Timezone aware</small><strong>Any IANA timezone</strong></span></div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="section product-capabilities">
        <div className="section-heading centered capability-heading">
          <span className="section-kicker">More than a chat surface</span>
          <h2>The capabilities you feel in every run.</h2>
          <p>EvoFlux wraps replaceable models in a local execution system for safe action, real-browser work, durable objectives, and structural code understanding.</p>
        </div>

        <div className="capability-primer-grid">
          <article><span>01 · SAFETY</span><div className="capability-primer-art"><img src={withBasePath("/illustrations/capability-sandbox.jpg")} alt="" width="720" height="720" loading="lazy" /></div><h3>Layered sandbox</h3><p>Workspace boundaries, outbound redaction, native process isolation, command checks, and explicit network controls.</p><small>Local policy · per run</small></article>
          <article><span>02 · BROWSER</span><div className="capability-primer-art"><img src={withBasePath("/illustrations/capability-webbridge.jpg")} alt="" width="720" height="720" loading="lazy" /></div><h3>WebBridge</h3><p>Drive your real signed-in Chrome or Edge session and bring selected page context back into the same agent conversation.</p><small>Two-way · policy checked</small></article>
          <article><span>03 · AUTONOMY</span><div className="capability-primer-art"><img src={withBasePath("/illustrations/capability-goal.jpg")} alt="" width="720" height="720" loading="lazy" /></div><h3>Durable Goal mode</h3><p>Long objectives survive reconnects and restarts with status, token budgets, pause controls, and concrete blocker detection.</p><small>Persistent · bounded</small></article>
          <article><span>04 · CODE</span><div className="capability-primer-art"><img src={withBasePath("/illustrations/capability-code-graph.jpg")} alt="" width="720" height="720" loading="lazy" /></div><h3>Structural code graph</h3><p>Twenty-five parsers, typed relationships, incremental freshness, and deterministic cross-repository resolution.</p><small>Graph first · token efficient</small></article>
        </div>

        <article className="capability-feature capability-feature-sandbox">
          <div className="capability-feature-copy">
            <span className="capability-feature-label"><i /> Sandbox · security boundary</span>
            <h3>Let agents act.<br />Keep the boundary explicit.</h3>
            <p>The sandbox is enforced around tools and provider requests—not left as an instruction in a prompt. Each session receives only the roots and host capabilities its work actually needs.</p>
            <ul>
              <li><b>Workspace scope</b><span>Active workspace, attached repositories, read-only roots, and session artifacts only.</span></li>
              <li><b>Outbound protection</b><span>Mask or block credentials and personal data in the provider copy while local history stays intact.</span></li>
              <li><b>Process controls</b><span>Native isolation, network access, shell environment, timeout, and output limits are configurable.</span></li>
              <li><b>Deny rules</b><span>Sensitive glob patterns and denied-path checks still apply inside otherwise allowed roots.</span></li>
            </ul>
            <div className="capability-facts"><span><strong>4</strong>boundary layers</span><span><strong>120s</strong>default command cap</span><span><strong>128 KiB</strong>inline output cap</span></div>
          </div>
          <div className="capability-screen-shell">
            <div className="capability-screen-bar"><i /><i /><i /><span>EvoFlux · Settings · Sandbox</span><b>LIGHT MODE</b></div>
            <img src={withBasePath("/screens/evoflux-sandbox-light.jpg")} alt="EvoFlux Sandbox settings showing outbound data protection and process security" />
          </div>
        </article>

        <article id="webbridge" className="capability-feature capability-feature-webbridge">
          <div className="capability-screen-shell webbridge-screen-shell">
            <img src={withBasePath("/screens/evoflux-webbridge-extension-light.png")} alt="EvoFlux WebBridge connected to the EvoFlux website in a real browser" />
          </div>
          <div className="capability-feature-copy">
            <span className="capability-feature-label"><i /> WebBridge · real browser</span>
            <h3>Your browser is part of the workspace.</h3>
            <p>WebBridge pairs EvoFlux with the Chrome or Edge session you already use—including its authenticated pages—through a local, policy-checked relay.</p>
            <ul>
              <li><b>Agent → browser</b><span>Navigate tabs, inspect semantic elements, fill forms, capture evidence, and work across grouped tabs.</span></li>
              <li><b>Browser → agent</b><span>Send a selection, link, page, element, file, or screen region into editable Side Chat context.</span></li>
              <li><b>Human handoff</b><span>Take control for login, secrets, or manual steps, then return the same tab to the agent.</span></li>
              <li><b>Policy and audit</b><span>Domain allow/block lists, sharing rules, scoped credentials, one-time tickets, and a complete action trail.</span></li>
            </ul>
            <div className="capability-facts"><span><strong>2-way</strong>context flow</span><span><strong>CDP</strong>real tab control</span><span><strong>0</strong>raw secret reads</span></div>
          </div>
        </article>

        <div className="capability-detail-grid">
          <article><span>05</span><div className="capability-detail-copy"><h3>Memory that stays inspectable</h3><p>Dream consolidates sessions into a Markdown wiki with citations, confidence, related pages, and an append-only log.</p></div><div className="capability-detail-art"><img src={withBasePath("/illustrations/capability-memory.jpg")} alt="" width="720" height="720" loading="lazy" /></div></article>
          <article><span>06</span><div className="capability-detail-copy"><h3>54 skills + MCP</h3><p>Built-in methods for research, TDD, security, docs, browser work, and migration; connected MCP tools inherit native permissions.</p></div><div className="capability-detail-art"><img src={withBasePath("/illustrations/capability-skills-mcp.jpg")} alt="" width="720" height="720" loading="lazy" /></div></article>
          <article><span>07</span><div className="capability-detail-copy"><h3>Isolated engineering lanes</h3><p>Managed Git worktrees, full source control, diff review, tests, and independent specialist review keep parallel changes separated.</p></div><div className="capability-detail-art"><img src={withBasePath("/illustrations/capability-engineering-lanes.jpg")} alt="" width="720" height="720" loading="lazy" /></div></article>
          <article><span>08</span><div className="capability-detail-copy"><h3>Observable by default</h3><p>Streaming activity, tool timing, execution history, OpenTelemetry, Prometheus, and DuckDB summaries make runs inspectable.</p></div><div className="capability-detail-art"><img src={withBasePath("/illustrations/capability-observability.jpg")} alt="" width="720" height="720" loading="lazy" /></div></article>
        </div>
      </section>

      <section id="orchestration" className="orchestration-section">
        <div className="orchestration-grid" aria-hidden="true" />
        <div className="section-heading light">
          <span className="section-kicker">Lead + specialists</span>
          <h2>Parallel when it helps.<br />Direct when it doesn&apos;t.</h2>
          <p>The Lead keeps small work fast, then activates specialists only when scope, risk, or depth justify orchestration.</p>
        </div>

        <div className="flow-line" aria-label="EvoFlux orchestration flow">
          {steps.map((step, index) => (
            <div className="flow-step" key={step.label}>
              <div className="step-head"><span>{step.number}</span>{index === 3 && <b>Proof gate</b>}</div>
              <strong>{step.label}</strong>
              <p>{step.note}</p>
            </div>
          ))}
        </div>

        <div className="orchestration-proof" id="agent-model">
          <div className="agent-model-visual" aria-label="EvoFlux Lead delegates work to four specialists before verification">
            <div className="agent-map" aria-hidden="true">
              <div className="map-lead"><img src={withBasePath("/evoflux-app-icon.png")} alt="" /><span>Lead</span></div>
              <div className="map-workers">
                {["Explore", "Build", "Design", "Review"].map((agent, index) => (
                  <div className="map-worker" key={agent}><i data-tone={index} /><p><strong>{agent}</strong><small>Active</small></p></div>
                ))}
              </div>
              <div className="map-gate"><span>✓</span><small>Verify</small></div>
              <div className="map-output"><span>✓</span><p><strong>Ready</strong><small>Evidence linked</small></p></div>
              <i className="map-packet packet-one" /><i className="map-packet packet-two" /><i className="map-packet packet-three" /><i className="map-packet packet-four" />
            </div>
            <div className="model-live"><i /> Agent field live</div>
          </div>
          <div className="proof-copy">
            <div className="proof-label"><i /> Evidence received from 4 specialists</div>
            <h3>A team that stays inspectable.</h3>
            <p>Every handoff, tool call, test, review, and rework loop stays in one observable execution history.</p>
            <div className="proof-metrics">
              <span><strong>4</strong> parallel streams</span>
              <span><strong>18</strong> checks passed</span>
              <span><strong>0</strong> hidden steps</span>
            </div>
          </div>
        </div>
      </section>

      <section id="local-first" className="section evidence-section">
        <article className="feature-row">
          <div className="feature-copy">
            <span className="section-kicker">Local-first by design</span>
            <h2>Your workspace stays yours.</h2>
            <p>EvoFlux runs as a desktop application with a local sidecar. Files, repositories, context, memory, and execution history remain under your control.</p>
            <ul className="feature-list">
              <li><span>01</span>Explicit tool permissions and approval gates</li>
              <li><span>02</span>Filesystem sandboxing and command checks</li>
              <li><span>03</span>Bring your own model from twelve providers</li>
            </ul>
          </div>
          <div className="control-panel visual-panel">
            <div className="panel-shine" />
            <div className="control-top"><span>Execution policy</span><b><i /> Enforced</b></div>
            <div className="control-row"><span>Read workspace files</span><b className="allow">Allow</b></div>
            <div className="control-row"><span>Run verified commands</span><b className="allow">Allow</b></div>
            <div className="control-row"><span>Write outside project</span><b className="ask">Ask</b></div>
            <div className="control-row"><span>External side effects</span><b className="ask">Ask</b></div>
            <div className="control-footer"><span className="lock-icon">◆</span><p><strong>Local policy engine</strong><small>Rules apply to native and MCP tools</small></p></div>
          </div>
        </article>

        <article className="feature-row reversed">
          <div className="feature-copy">
            <span className="section-kicker">Verified by construction</span>
            <h2>Evidence is part of execution.</h2>
            <p>Tests, diffs, visual checks, deterministic comparisons, and human gates are woven into the workflow—not added as an afterthought.</p>
            <a className="inline-link" href="#architecture">See the architecture <span>→</span></a>
          </div>
          <div className="verification-panel visual-panel">
            <div className="verification-head"><span>Delivery evidence</span><b>Ready to ship</b></div>
            {[
              ["Implementation", "42 files inspected", "100%"],
              ["Automated tests", "186 passing", "100%"],
              ["Independent review", "2 findings resolved", "100%"],
              ["Human approval", "Recorded at 14:32", "100%"],
            ].map(([name, note, progress]) => (
              <div className="check-row" key={name}>
                <span className="check">✓</span><p><strong>{name}</strong><small>{note}</small></p>
                <div className="mini-progress"><i style={{ width: progress }} /></div>
              </div>
            ))}
            <div className="verified-banner"><span>✓</span><p><strong>Outcome verified</strong><small>All required evidence is attached</small></p></div>
          </div>
        </article>
      </section>

      <section className="providers-section" aria-labelledby="providers-title">
        <p id="providers-title">Use the right model for every specialist</p>
        <div className="provider-track">
          {providers.map((provider) => <span key={provider}>{provider}</span>)}
        </div>
      </section>

      <section id="fhm-cowork" className="section ecosystem-section">
        <div className="ecosystem-intro">
          <span className="section-kicker">EvoFlux for FHM Q9 · FPT Japan · FJP</span>
          <h2>Open cowork AI for teams that do more than chat.</h2>
          <p>EvoFlux gives FHM Q9, FPT, and FPT Japan teams one inspectable workspace for knowledge work, software delivery, browser automation, and governed modernization.</p>
        </div>
        <div className="ecosystem-grid">
          <article><span>01 · COWORK</span><h3>Work together with AI</h3><p>Research, documents, data, and browser tasks become reviewable artifacts—not disposable chat answers.</p><small>Open cowork · local-first</small></article>
          <article><span>02 · ENGINEERING</span><h3>Build with Coding agents</h3><p>Use repositories, worktrees, tests, code graphs, sandbox policy, and specialist review in one controlled delivery loop.</p><small>FHM · FPT · FJP</small></article>
          <article><span>03 · MODERNIZATION</span><h3>Prove change with AIM</h3><p>AI Innovation Modernization connects legacy understanding, Rulebooks, target mappings, conversion, comparison, and cutover evidence.</p><small>AIM · governed evidence</small></article>
        </div>
      </section>

      <section id="architecture" className="section architecture-section">
        <div className="architecture-card">
          <div className="architecture-copy">
            <span className="section-kicker">The harness is the product</span>
            <h2>Models reason.<br />EvoFlux makes work happen.</h2>
            <p>A replaceable model sits inside a durable system for context, action, policy, verification, and state.</p>
          </div>
          <div className="architecture-stack" aria-label="EvoFlux technical architecture">
            <div className="stack-layer layer-ui"><span>01</span><strong>Tauri desktop</strong><small>Native shell and secure workspace access</small></div>
            <div className="stack-connector"><i /><i /><i /></div>
            <div className="stack-layer layer-harness"><span>02</span><strong>Agent harness</strong><small>Context · Tools · Policy · Verification · State</small></div>
            <div className="stack-connector"><i /><i /><i /></div>
            <div className="stack-layer layer-model"><span>03</span><strong>Any model</strong><small>Cloud APIs or local inference</small></div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="faq-title">
          <span className="section-kicker">Questions</span>
          <h2>What teams usually ask.</h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>Is EvoFlux a web application?</summary>
            <p>No. EvoFlux is a desktop-first product built with Tauri. Its React interface connects to a local sidecar and works directly with your files, repositories, and tools.</p>
          </details>
          <details>
            <summary>Do I have to use a specific AI model?</summary>
            <p>No. Choose models independently for the Lead and every specialist across twelve provider integrations, including local models through Ollama.</p>
          </details>
          <details>
            <summary>When does EvoFlux use multiple agents?</summary>
            <p>Simple tasks stay with the Lead. Specialists activate on demand when work benefits from parallel research, implementation, architecture, or independent review.</p>
          </details>
          <details>
            <summary>What makes AIM different from Coding?</summary>
            <p>Coding focuses on engineering in active repositories. AIM adds inventory, traceability, migration waves, equivalence checks, human gates, and cutover readiness for governed modernization.</p>
          </details>
          <details>
            <summary>What does the sandbox protect?</summary>
            <p>It scopes filesystem access to approved roots, applies denied patterns, validates command paths, controls network and shell inheritance, and can mask or block sensitive data before a provider request leaves the machine.</p>
          </details>
          <details>
            <summary>Does WebBridge use a separate headless browser?</summary>
            <p>No. WebBridge connects EvoFlux to your real Chrome or Edge session. Domain policy, explicit context sharing, human-control leases, scoped credentials, and auditing govern what the agent may do.</p>
          </details>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-glow" />
        <span className="section-kicker">Choose your platform</span>
        <h2>Start with EvoFlux.</h2>
        <p>Think, build, verify, and ship from one local-first desktop workspace.</p>
        <div className="download-grid">
          <a className="download-card download-card-mac" href={RELEASE_URL} target="_blank" rel="noreferrer" aria-label="Download EvoFlux for macOS">
            <span className="download-visual" aria-hidden="true"><i className="platform-mark"><img src={withBasePath("/platforms/apple.svg")} alt="" /></i></span>
            <span className="download-copy"><strong>EvoFlux for Mac</strong><small>macOS · Apple silicon</small><b>Download <i>↓</i></b></span>
          </a>
          <a className="download-card download-card-windows" href={RELEASE_URL} target="_blank" rel="noreferrer" aria-label="Download EvoFlux for Windows">
            <span className="download-visual" aria-hidden="true"><i className="platform-mark"><img src={withBasePath("/platforms/windows.svg")} alt="" /></i></span>
            <span className="download-copy"><strong>EvoFlux for Windows</strong><small>Windows 10 or later</small><b>Download <i>↓</i></b></span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src={withBasePath("/evoflux-app-icon.png")} alt="" width="32" height="32" /><strong>EvoFlux</strong>
          <p>A harness-first desktop workspace for agents that do real work.</p>
        </div>
        <div className="footer-links">
          <div><strong>Product</strong><a href="#modes">Work</a><a href="#modes">Coding</a><a href={withBasePath(locale === "ja" ? "/jp/aim" : "/aim")}>AIM</a></div>
          <div><strong>Resources</strong><a href={GITHUB_URL}>GitHub</a><a href={`${GITHUB_URL}#quick-start`}>Quick start</a><a href={`${GITHUB_URL}/blob/main/LICENSE`}>License</a></div>
          <div><strong>Principles</strong><a href="#local-first">Local-first</a><a href="#orchestration">Orchestrated</a><a href="#architecture">Verified</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 EvoFlux</span><span>Apache 2.0 · Built in the open</span></div>
      </footer>
    </main>
  );
  return localizeHomeNode(page, locale);
}

export default function Home() {
  return <HomePageContent locale="en" />;
}
