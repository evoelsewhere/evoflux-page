/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { withBasePath } from "../base-path";
import { AsciiSpaceBackground } from "../components/AsciiSpaceBackground";

export const metadata: Metadata = {
  title: "AIM — AI Innovation Modernization | EvoFlux",
  description: "EvoFlux AIM is a governed AI Innovation Modernization control plane to understand legacy systems, transform safely, and prove functional equivalence.",
  keywords: ["EvoFlux AIM", "AIM", "AI Innovation Modernization", "legacy modernization", "functional equivalence"],
  alternates: { canonical: withBasePath("/aim/"), languages: { en: withBasePath("/aim/"), ja: withBasePath("/jp/aim/") } },
};

export type AimLocale = "en" | "ja";

const productSurfaces = [
  ["01", "Overview", "/screens/evoflux-aim-overview-light.jpg?v=3", "See estate progress, health, approvals, wave readiness, and the next safe work in one operating board.", "State · queue · readiness"],
  ["02", "Knowledge Base", "/screens/evoflux-aim-knowledge-light.jpg?v=3", "Keep units, rules, mappings, decisions, golden cases, and evidence as durable, reviewable project knowledge.", "Shared truth · Git-trackable"],
  ["03", "Rulebook", "/screens/evoflux-aim-rulebook-light.jpg?v=3", "Define how this source stack becomes this target stack through versioned, project-specific operating policy.", "Pinned identity · reviewed changes"],
  ["04", "Pipelines", "/screens/evoflux-aim-pipelines-light.jpg?v=3", "Run typed workflows with explicit tools, readiness checks, human gates, and linked outputs.", "10 governed workflows"],
] as const;

const chain = [
  ["01", "Assess", "Inventory the estate and plan dependency-aware waves."],
  ["02", "Understand", "Recover behavior, data, interfaces, and uncertainty with citations."],
  ["03", "Review Rules", "Confirm the business behavior that must survive."],
  ["04", "Design", "Map approved behavior into the target architecture."],
  ["05", "Convert", "Build target code, tests, and reproducible evidence."],
  ["06", "Compare", "Prove observable behavior with deterministic comparison."],
  ["07", "Cutover", "Recheck dependencies, approvals, and operational readiness."],
] as const;

const faqs = [
  ["Is AIM an automatic code converter?", "No. Conversion is one controlled stage. AIM first understands the estate, confirms rules, approves target design, then proves behavior before cutover."],
  ["Does AIM edit the legacy repository?", "No. Legacy source is mounted read-only. Writes go only to the target repository or the project knowledge base."],
  ["Do we need a finished Rulebook before starting?", "No. The Rulebook is adapted and validated during setup. Work stays blocked until the required capability is ready for the engagement."],
  ["What becomes the system of record?", "The Git-tracked knowledge base holds unit state, rules, mappings, decisions, golden cases, and evidence. Local indexes can be rebuilt from it."],
] as const;

const jaText: Record<string, string> = {
  "EvoFlux home": "EvoFluxホーム", "Language": "言語", "Primary navigation": "メインナビゲーション", "Mobile navigation": "モバイルナビゲーション", "Open navigation": "ナビゲーションを開く",
  "Overview": "概要", "Product": "製品", "Workflow": "ワークフロー", "Pilot": "パイロット", "Home": "ホーム", "Coming soon": "近日公開",
  "AI Innovation Modernization": "AI Innovation Modernization", "Move legacy systems forward.": "レガシーシステムを、次の時代へ。", "Keep the proof attached.": "証拠を切り離さずに。",
  "AIM is EvoFlux's migration control plane. It turns legacy source into approved knowledge, bounded target work, and deterministic evidence—through workflows people can inspect and govern.": "AIMはEvoFluxの移行コントロールプレーンです。レガシーソースを、承認済み知識、境界が明確なターゲット作業、決定論的な証拠へ変換します。すべてのワークフローを人が確認・統制できます。",
  "See how AIM works ": "AIMの仕組みを見る ", "linked repositories": "接続リポジトリ", "governed workflows": "統制ワークフロー", "traceable system of record": "追跡可能な唯一の記録",
  "EvoFlux · AIM overview": "EvoFlux · AIM概要", "LIGHT MODE": "ライトモード", "LIVE PILOT": "稼働中パイロット", "42 units · 9 waves · 945 knowledge files": "42ユニット · 9ウェーブ · 945知識ファイル",
  "AIM in one minute": "1分でわかるAIM", "One migration state from first inventory to final proof.": "最初の棚卸しから最終証明まで、一つの移行状態で管理。",
  "AIM gives the program a shared answer to four questions: what exists, what is approved, what may run next, and what proves the result.": "AIMは、何が存在し、何が承認され、次に何を実行でき、何が結果を証明するかという4つの問いに、プログラム全体で共有できる答えを提供します。",
  "UNDERSTAND": "理解", "Know the estate": "資産を把握", "Inventory units, dependencies, behavior, data, interfaces, and uncertainty with source citations.": "ユニット、依存関係、動作、データ、インターフェース、不確実性をソース引用付きで棚卸しします。",
  "GOVERN": "統制", "Approve what matters": "重要事項を承認", "Version rules, mappings, readiness, responsibilities, and gates before work advances.": "作業を進める前に、ルール、マッピング、準備状況、責任、ゲートをバージョン管理します。",
  "TRANSFORM": "変換", "Bound the target work": "ターゲット作業を限定", "Write only to the approved target through explicit, inspectable workflows.": "明示的で確認可能なワークフローを通じて、承認済みターゲットだけへ書き込みます。",
  "PROVE": "証明", "Keep evidence attached": "証拠を紐づける", "Link source, rules, mappings, builds, comparisons, verdicts, and approvals end to end.": "ソース、ルール、マッピング、ビルド、比較、判定、承認を最初から最後までリンクします。",
  "Safety invariant:": "安全上の不変条件：", " legacy source is observed, never rewritten. Implementation writes only to the approved target.": " レガシーソースは観察されるだけで書き換えられません。実装は承認済みターゲットだけへ書き込みます。",
  "Product surfaces": "製品画面", "Four places to work. One connected state.": "4つの作業画面、1つの連携状態。", "Each surface answers one operational question. Traceability connects the answers across the entire migration.": "各画面が一つの運用上の問いに答え、トレーサビリティが移行全体の答えをつなぎます。",
  "See estate progress, health, approvals, wave readiness, and the next safe work in one operating board.": "資産の進捗、稼働状況、承認、ウェーブ準備状況、次の安全な作業を一つの運用ボードで確認します。", "State · queue · readiness": "状態 · キュー · 準備状況",
  "Knowledge Base": "ナレッジベース", "Keep units, rules, mappings, decisions, golden cases, and evidence as durable, reviewable project knowledge.": "ユニット、ルール、マッピング、判断、Goldenケース、証拠を永続的でレビュー可能なプロジェクト知識として保持します。", "Shared truth · Git-trackable": "共有事実 · Git追跡可能",
  "Rulebook": "ルールブック", "Define how this source stack becomes this target stack through versioned, project-specific operating policy.": "このソーススタックをターゲットスタックへ変換する方法を、バージョン管理されたプロジェクト固有の運用ポリシーで定義します。", "Pinned identity · reviewed changes": "固定ID · レビュー済み変更",
  "Pipelines": "パイプライン", "Run typed workflows with explicit tools, readiness checks, human gates, and linked outputs.": "明示的なツール、準備確認、人のゲート、リンク済み出力を備えた型付きワークフローを実行します。", "10 governed workflows": "10の統制ワークフロー",
  "The operating model": "運用モデル", "Three foundations keep the migration coherent.": "3つの基盤が移行の一貫性を保ちます。", "The product stays understandable because policy, execution, and evidence each have a clear home.": "ポリシー、実行、証拠の保存場所を明確に分けることで、製品全体を理解しやすく保ちます。",
  "POLICY": "ポリシー", "Rulebook defines the contract.": "Rulebookが契約を定義。", "Mappings, parsers, runners, canonicalizers, target boundaries, and agent guidance are versioned and reviewed together.": "マッピング、parser、runner、canonicalizer、ターゲット境界、エージェントガイドをまとめてバージョン管理・レビューします。",
  "EXECUTION": "実行", "Pipelines make work explicit.": "Pipelineが作業を明示。", "Every workflow declares its input, work, readiness, human gate, and output before anyone runs it.": "すべてのワークフローが、実行前に入力、作業、準備状況、人のゲート、出力を宣言します。",
  "EVIDENCE": "証拠", "Traceability keeps the why.": "Traceabilityが理由を保持。", "Every completion claim links back through target changes, mappings, confirmed rules, unit knowledge, and source evidence.": "すべての完了claimを、ターゲット変更、マッピング、確認済みルール、ユニット知識、ソース証拠まで遡ってリンクします。",
  "The modernization path": "モダナイゼーションの流れ", "Seven stages, shown at the right level.": "7つの段階を適切な粒度で表示。", "Each stage produces a reviewable artifact and unlocks the next only when its gate is satisfied.": "各段階がレビュー可能なartifactを生成し、ゲートを満たしたときだけ次へ進みます。",
  "Assess": "アセスメント", "Inventory the estate and plan dependency-aware waves.": "資産を棚卸しし、依存関係を考慮したウェーブを計画します。", "Understand": "理解", "Recover behavior, data, interfaces, and uncertainty with citations.": "動作、データ、インターフェース、不確実性を引用付きで復元します。", "Review Rules": "ルールレビュー", "Confirm the business behavior that must survive.": "維持すべき業務動作を確認します。", "Design": "設計", "Map approved behavior into the target architecture.": "承認済み動作をターゲットアーキテクチャへマッピングします。", "Convert": "変換", "Build target code, tests, and reproducible evidence.": "ターゲットコード、テスト、再現可能な証拠を構築します。", "Compare": "比較", "Prove observable behavior with deterministic comparison.": "決定論的比較で観測可能な動作を証明します。", "Cutover": "カットオーバー", "Recheck dependencies, approvals, and operational readiness.": "依存関係、承認、運用準備状況を再確認します。",
  "Start with one wave": "一つのウェーブから開始", "Prove the model before scaling the estate.": "資産全体へ拡大する前にモデルを実証。", "A representative pilot exposes real dependencies and comparison noise while remaining small enough to finish and measure.": "代表的なパイロットで実際の依存関係と比較ノイズを明らかにしつつ、完了・測定できる範囲に保ちます。",
  "01 · CONNECT": "01 · 接続", "Protect the source": "ソースを保護", "Map source, target, knowledge base, roles, and acceptance criteria.": "ソース、ターゲット、ナレッジベース、役割、受入基準を対応付けます。", "02 · ADAPT": "02 · 適応", "Make policy real": "ポリシーを実運用へ", "Validate the Rulebook and required capabilities for the chosen stack pair.": "選択したスタックのRulebookと必要な機能を検証します。", "03 · RUN": "03 · 実行", "Complete one loop": "一つのループを完了", "Take representative units from assessment through deterministic comparison.": "代表ユニットをアセスメントから決定論的比較まで進めます。", "04 · SCALE": "04 · 拡大", "Reuse what worked": "実証済みを再利用", "Expand with proven rules, patterns, evidence standards, and governance roles.": "実証済みルール、パターン、証拠基準、統制役割で拡大します。",
  "Customer questions": "よくある質問", "What teams ask before they trust AIM.": "AIMを信頼する前にチームが確認すること。", "Is AIM an automatic code converter?": "AIMは自動コード変換ツールですか？", "No. Conversion is one controlled stage. AIM first understands the estate, confirms rules, approves target design, then proves behavior before cutover.": "いいえ。変換は一つの統制段階です。AIMはまず資産を理解し、ルールを確認し、ターゲット設計を承認してから、カットオーバー前に動作を証明します。", "Does AIM edit the legacy repository?": "AIMはレガシーリポジトリを編集しますか？", "No. Legacy source is mounted read-only. Writes go only to the target repository or the project knowledge base.": "いいえ。レガシーソースは読み取り専用でマウントされ、書き込み先はターゲットまたはプロジェクトナレッジベースだけです。", "Do we need a finished Rulebook before starting?": "開始前に完成したRulebookが必要ですか？", "No. The Rulebook is adapted and validated during setup. Work stays blocked until the required capability is ready for the engagement.": "いいえ。Rulebookはセットアップ中に適応・検証され、必要な機能が準備できるまで作業はブロックされます。", "What becomes the system of record?": "何がsystem of recordになりますか？", "The Git-tracked knowledge base holds unit state, rules, mappings, decisions, golden cases, and evidence. Local indexes can be rebuilt from it.": "Git追跡のナレッジベースがユニット状態、ルール、マッピング、判断、Goldenケース、証拠を保持し、ローカル索引は再構築できます。",
  "Make the migration explainable.": "移行を説明可能に。", "Make the outcome provable.": "成果を証明可能に。", "Bring one legacy estate, one approved target, and the evidence that matters.": "一つのレガシー資産、一つの承認済みターゲット、そして重要な証拠から始めましょう。", "Back to EvoFlux ": "EvoFluxへ戻る ",
  "Local-first agent infrastructure for work, coding, and governed modernization.": "業務、コーディング、統制されたモダナイゼーションのためのローカルファーストなエージェント基盤。", "Work & Coding": "Work & Coding", "Built in the open": "オープンに開発",
};

function localizeText(value: string): string {
  const direct = jaText[value];
  if (direct) return direct;
  const trimmed = value.trim();
  if (!trimmed || !jaText[trimmed]) return value;
  return `${value.slice(0, value.indexOf(trimmed))}${jaText[trimmed]}${value.slice(value.indexOf(trimmed) + trimmed.length)}`;
}

function localizeNode(node: ReactNode, locale: AimLocale): ReactNode {
  if (locale !== "ja") return node;
  if (typeof node === "string") return localizeText(node);
  if (Array.isArray(node)) return Children.map(node, (child) => localizeNode(child, locale));
  if (!isValidElement<{ children?: ReactNode; alt?: string; "aria-label"?: string }>(node)) return node;
  const element = node as ReactElement<{ children?: ReactNode; alt?: string; "aria-label"?: string }>;
  const props: { children?: ReactNode; alt?: string; "aria-label"?: string } = {};
  if (element.props.children !== undefined) props.children = localizeNode(element.props.children, locale);
  if (element.props.alt) props.alt = localizeText(element.props.alt);
  if (element.props["aria-label"]) props["aria-label"] = localizeText(element.props["aria-label"]);
  return cloneElement(element, props);
}

export function AimPageContent({ locale = "en" }: { locale?: AimLocale }) {
  const page = (
    <main className="aim2-page aim2-page-condensed" lang={locale}>
      <header className="site-header aim2-header">
        <div className="brand-cluster aim-brand-cluster"><a className="brand" href={withBasePath(locale === "ja" ? "/jp" : "/")} aria-label="EvoFlux home"><img src={withBasePath("/evoflux-app-icon.png")} width="34" height="34" alt="" /><span>EvoFlux</span></a><span className="brand-divider" aria-hidden="true" /><img className="aim-brand-logo" src={withBasePath("/brand/aim-logo-transparent.png")} width="1851" height="850" alt="AIM" /></div>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="#overview">Overview</a><a href="#product">Product</a><a href="#workflow">Workflow</a><a href="#pilot">Pilot</a></nav>
        <div className="header-actions"><div className="aim2-language-switch" aria-label="Language"><a href={withBasePath("/aim?lang=en")} className={locale === "en" ? "is-active" : ""} lang="en">EN</a><a href={withBasePath("/jp/aim?lang=ja")} className={locale === "ja" ? "is-active" : ""} lang="ja">日本語</a></div><span className="button button-dark button-small is-coming-soon" aria-disabled="true">Coming soon</span><details className="mobile-menu"><summary aria-label="Open navigation"><span /><span /></summary><nav aria-label="Mobile navigation"><a href={withBasePath(locale === "ja" ? "/jp" : "/")}>Home</a><a href="#overview">Overview</a><a href="#product">Product</a><a href="#workflow">Workflow</a><a href="#pilot">Pilot</a></nav></details></div>
      </header>

      <section className="aim2-hero">
        <AsciiSpaceBackground />
        <div className="aim2-space" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}<span className="aim2-orbit aim2-orbit-a" /><span className="aim2-orbit aim2-orbit-b" /><span className="aim2-scanline" /></div>
        <div className="aim2-hero-copy"><div className="aim2-kicker"><i /> AI Innovation Modernization</div><h1>Move legacy systems forward.<br /><em>Keep the proof attached.</em></h1><p>AIM is EvoFlux&apos;s migration control plane. It turns legacy source into approved knowledge, bounded target work, and deterministic evidence—through workflows people can inspect and govern.</p><div className="hero-actions"><span className="button aim2-button-light is-coming-soon" aria-disabled="true">Coming soon</span><a className="button aim2-button-line" href="#overview">See how AIM works <span>↘</span></a></div><div className="aim2-hero-stats"><span><strong>3</strong><small>linked repositories</small></span><span><strong>10</strong><small>governed workflows</small></span><span><strong>1</strong><small>traceable system of record</small></span></div></div>
        <div className="aim2-hero-screen"><div className="aim2-window-bar"><i /><i /><i /><span>EvoFlux · AIM overview</span><b>LIGHT MODE</b></div><img src={withBasePath("/screens/evoflux-aim-overview-light.jpg?v=3")} alt="EvoFlux AIM overview" /><div className="aim2-screen-caption"><span><i /> LIVE PILOT</span><p>42 units · 9 waves · 945 knowledge files</p></div></div>
      </section>

      <section id="overview" className="section aim2-brief">
        <div className="aim2-section-head aim2-section-head-split"><div><span className="section-kicker">AIM in one minute</span><h2>One migration state from first inventory to final proof.</h2></div><p>AIM gives the program a shared answer to four questions: what exists, what is approved, what may run next, and what proves the result.</p></div>
        <div className="aim2-brief-grid"><article><span>UNDERSTAND</span><h3>Know the estate</h3><p>Inventory units, dependencies, behavior, data, interfaces, and uncertainty with source citations.</p></article><article><span>GOVERN</span><h3>Approve what matters</h3><p>Version rules, mappings, readiness, responsibilities, and gates before work advances.</p></article><article><span>TRANSFORM</span><h3>Bound the target work</h3><p>Write only to the approved target through explicit, inspectable workflows.</p></article><article><span>PROVE</span><h3>Keep evidence attached</h3><p>Link source, rules, mappings, builds, comparisons, verdicts, and approvals end to end.</p></article></div>
        <p className="aim2-system-note"><strong>Safety invariant:</strong> legacy source is observed, never rewritten. Implementation writes only to the approved target.</p>
      </section>

      <section id="product" className="aim2-tour section aim2-tour-condensed">
        <div className="aim2-section-head aim2-section-head-split"><div><span className="section-kicker">Product surfaces</span><h2>Four places to work. One connected state.</h2></div><p>Each surface answers one operational question. Traceability connects the answers across the entire migration.</p></div>
        <div className="aim2-surface-grid">{productSurfaces.map(([number, title, image, text, fact]) => <article key={title}><div className={`aim2-surface-shot${title === "Pipelines" ? " is-pipeline" : ""}`}><div className="aim2-mini-bar"><i /><i /><i /><span>{title}</span></div><img src={withBasePath(image)} alt={`EvoFlux AIM ${title}`} /></div><div className="aim2-surface-copy"><span>{number}</span><h3>{title}</h3><p>{text}</p><small>{fact}</small></div></article>)}</div>
      </section>

      <section className="aim2-operating section">
        <div className="aim2-section-head aim2-section-head-split"><div><span className="section-kicker">The operating model</span><h2>Three foundations keep the migration coherent.</h2></div><p>The product stays understandable because policy, execution, and evidence each have a clear home.</p></div>
        <div className="aim2-operating-grid"><article><span>POLICY</span><h3>Rulebook defines the contract.</h3><p>Mappings, parsers, runners, canonicalizers, target boundaries, and agent guidance are versioned and reviewed together.</p></article><article><span>EXECUTION</span><h3>Pipelines make work explicit.</h3><p>Every workflow declares its input, work, readiness, human gate, and output before anyone runs it.</p></article><article><span>EVIDENCE</span><h3>Traceability keeps the why.</h3><p>Every completion claim links back through target changes, mappings, confirmed rules, unit knowledge, and source evidence.</p></article></div>
      </section>

      <section id="workflow" className="aim2-chain section aim2-chain-condensed">
        <div className="aim2-section-head aim2-section-head-split"><div><span className="section-kicker">The modernization path</span><h2>Seven stages, shown at the right level.</h2></div><p>Each stage produces a reviewable artifact and unlocks the next only when its gate is satisfied.</p></div>
        <div className="aim2-chain-track">{chain.map(([number, title, text], index) => <article key={number}><header><span>{number}</span><small>{index < 2 ? "Discover" : index < 4 ? "Decide" : index === 4 ? "Build" : "Prove"}</small></header><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="pilot" className="aim2-start section">
        <div className="aim2-section-head aim2-section-head-split"><div><span className="section-kicker">Start with one wave</span><h2>Prove the model before scaling the estate.</h2></div><p>A representative pilot exposes real dependencies and comparison noise while remaining small enough to finish and measure.</p></div>
        <div className="aim2-start-grid"><article><span>01 · CONNECT</span><h3>Protect the source</h3><p>Map source, target, knowledge base, roles, and acceptance criteria.</p></article><article><span>02 · ADAPT</span><h3>Make policy real</h3><p>Validate the Rulebook and required capabilities for the chosen stack pair.</p></article><article><span>03 · RUN</span><h3>Complete one loop</h3><p>Take representative units from assessment through deterministic comparison.</p></article><article><span>04 · SCALE</span><h3>Reuse what worked</h3><p>Expand with proven rules, patterns, evidence standards, and governance roles.</p></article></div>
      </section>

      <section className="aim2-faq section"><div className="aim2-faq-intro"><span className="section-kicker">Customer questions</span><h2>What teams ask before they trust AIM.</h2></div><div className="faq-list aim2-faq-list">{faqs.map(([question, answer], index) => <details open={index === 0} key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="aim2-closing"><div className="aim2-closing-orbit" aria-hidden="true" /><img src={withBasePath("/evoflux-app-icon.png")} width="78" height="78" alt="" /><span className="section-kicker">AI Innovation Modernization</span><h2>Make the migration explainable.<br />Make the outcome provable.</h2><p>Bring one legacy estate, one approved target, and the evidence that matters.</p><div className="hero-actions"><span className="button aim2-button-light is-coming-soon" aria-disabled="true">Coming soon</span><a className="button aim2-button-line" href={withBasePath(locale === "ja" ? "/jp" : "/")}>Back to EvoFlux <span>→</span></a></div></section>

      <footer className="aim2-footer"><div className="footer-brand"><img src={withBasePath("/evoflux-app-icon.png")} alt="" width="32" height="32" /><strong>EvoFlux</strong><p>Local-first agent infrastructure for work, coding, and governed modernization.</p></div><div className="footer-links"><div><strong>Product</strong><a href={withBasePath(locale === "ja" ? "/jp" : "/")}>Overview</a><a href={withBasePath(locale === "ja" ? "/jp#modes" : "/#modes")}>Work & Coding</a><a href={withBasePath(locale === "ja" ? "/jp/aim" : "/aim")}>AIM</a></div><div><strong>AIM</strong><a href="#overview">Overview</a><a href="#product">Product</a><a href="#workflow">Workflow</a></div></div><div className="footer-bottom"><span>© 2026 EvoFlux</span><span>Built in the open</span></div></footer>
    </main>
  );
  return localizeNode(page, locale);
}

export default function AimPage() {
  return <AimPageContent locale="en" />;
}
