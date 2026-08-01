/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { withBasePath } from "../base-path";
import AimPipelineShowcase from "../components/AimPipelineShowcase";

export const metadata: Metadata = {
  title: "AIM — AI Innovation Modernization | EvoFlux FHM",
  description: "EvoFlux AIM is the governed AI Innovation Modernization control plane for FHM Q9 and FPT Japan: understand legacy systems, transform safely, and prove equivalence.",
  keywords: ["EvoFlux AIM", "AIM", "AI Innovation Modernization", "FHM Q9 modernization", "FPT Japan modernization", "FJP", "legacy modernization", "functional equivalence"],
  alternates: { canonical: withBasePath("/aim/"), languages: { en: withBasePath("/aim/"), ja: withBasePath("/jp/aim/") } },
};

export type AimLocale = "en" | "ja";

const productSurfaces = [
  {
    number: "01",
    title: "Overview",
    image: "/screens/evoflux-aim-overview-light.jpg",
    text: "The operating board: estate progress, live health, approvals, claims, wave readiness, and a dependency-aware work queue.",
    fact: "42 units · 9 waves in this pilot",
  },
  {
    number: "02",
    title: "Knowledge Base",
    image: "/screens/evoflux-aim-knowledge-light.jpg",
    text: "The durable project memory: unit docs, rules, mappings, decisions, golden cases, state, and run evidence stored as reviewable files.",
    fact: "945 files · Git-trackable",
  },
  {
    number: "03",
    title: "Rulebook",
    image: "/screens/evoflux-aim-rulebook-light.jpg",
    text: "The project-specific operating contract that tells agents how this source stack is understood, mapped, executed, and compared.",
    fact: "Pinned identity + version",
  },
  {
    number: "04",
    title: "Pipelines",
    image: "/screens/evoflux-aim-pipelines-light.jpg?v=2",
    text: "Executable migration workflows with typed inputs, explicit agents and tools, readiness checks, human gates, and inspectable run history.",
    fact: "10 standard pipelines",
  },
];

const rulebookContents = [
  ["Manifest", "Stack identity, parser strategy, capability maturity, default compare profiles, and declared operational assets."],
  ["Mappings", "Normative source-to-target translation policy: constructs, data types, interfaces, screen patterns, and architectural boundaries."],
  ["Extractors", "Supplemental structural parsers for languages or formats that need project-specific discovery logic."],
  ["Runners", "Reviewed adapters that execute the same case contract against the legacy and target systems."],
  ["Canonicalizers", "Deterministic rules that remove approved noise—timestamps, ordering, formats—before behavioral comparison."],
  ["Target base", "The architecture checklist or starter skeleton the target must satisfy before any conversion work is allowed."],
  ["Skills & agent guidance", "Reviewed, project-local expertise for agents; examples remain inert until the team intentionally activates them."],
  ["Workflow & UI patterns", "Reusable examples for delivery flow and legacy-screen-to-target-template decisions."],
];

const traceLinks = [
  ["Source evidence", "Immutable path, symbol, schema, test, or runtime observation"],
  ["Unit knowledge", "Approved understanding, dependencies, data, and uncertainty"],
  ["Business rule", "Confirmed behavior with owner and source citations"],
  ["Target mapping", "Architecture decision and implementation boundary"],
  ["Target change", "Code paths, build result, and agent run"],
  ["Proof", "Golden case, canonical diff, verdict, and approval"],
];

const modernizationChain = [
  {
    phase: "Discover",
    title: "Assess",
    input: "Legacy repositories + project policy",
    work: "Inventory technologies, files, dependencies, complexity, and safe migration boundaries.",
    gate: "Estate scope approved",
    output: "Unit inventory + dependency-aware waves",
  },
  {
    phase: "Discover",
    title: "Understand",
    input: "Selected unit + source evidence",
    work: "Reverse-engineer behavior, data, interfaces, and unresolved dependencies with citations.",
    gate: "Knowledge review complete",
    output: "Cited knowledge + rule candidates",
  },
  {
    phase: "Decide",
    title: "Review Rules",
    input: "Cited rule candidates",
    work: "Separate durable business behavior from implementation detail before rebuilding it.",
    gate: "Domain expert confirms behavior",
    output: "Versioned rules + explicit no-rule decisions",
  },
  {
    phase: "Decide",
    title: "Design",
    input: "Confirmed rules + Rulebook",
    work: "Map approved behavior into the target architecture and its declared boundaries.",
    gate: "Architect approves mapping",
    output: "Target mapping + design package",
  },
  {
    phase: "Build",
    title: "Convert",
    input: "Approved mapping + target baseline",
    work: "Implement target code, tests, linked paths, and reproducible build evidence.",
    gate: "Build and policy checks pass",
    output: "Target code + verified build",
  },
  {
    phase: "Prove",
    title: "Compare",
    input: "Golden cases + target output",
    work: "Canonicalize approved noise and compare observable behavior deterministically.",
    gate: "Reviewer resolves exceptions",
    output: "Equivalence verdict + triage findings",
  },
  {
    phase: "Prove",
    title: "Cutover",
    input: "Equivalent units grouped by wave",
    work: "Recheck dependencies, approvals, evidence coverage, and operational readiness.",
    gate: "Accountable owner signs go / no-go",
    output: "Cutover record + auditable release state",
  },
] as const;

const faqs = [
  ["Is AIM an automatic code converter?", "No. Conversion is only one controlled pipeline. AIM first inventories and understands the estate, confirms business rules, approves target design, then converts and proves behavior with deterministic comparison."],
  ["What exactly is a migration unit?", "A unit is the smallest independently trackable modernization scope—such as a module, service, batch job, screen family, database capability, or protocol area. It has source paths, dependencies, wave, phase, evidence, and target links."],
  ["Does AIM ever edit the legacy repository?", "No. Base source repositories are mounted read-only at the infrastructure level. Agents can inspect and index them, but all writes go to the target repository or the knowledge-base repository."],
  ["Do we need a finished Rulebook before starting?", "The Rulebook should be adapted and validated during setup. A new project begins with safe template capabilities; a pipeline stays blocked until the required parser, runner, mapping, or compare profile is ready for that engagement."],
  ["Who approves what?", "Program leads approve waves, domain experts confirm business rules, architects approve target mappings, reviewers decide equivalence exceptions, and accountable owners confirm cutover."],
  ["What becomes the system of record?", "The Git-tracked knowledge-base repository holds shared project truth: aim.yaml, unit state, rules, mappings, decisions, golden cases, and append-only run reports. Local indexes can be rebuilt from it."],
];

const jaText: Record<string, string> = {
  "EvoFlux home": "EvoFluxホーム",
  "Language": "言語",
  "Primary navigation": "メインナビゲーション",
  "Mobile navigation": "モバイルナビゲーション",
  "Open navigation": "ナビゲーションを開く",
  "Product tour": "製品ツアー",
  "Rulebook": "ルールブック",
  "Pipelines": "パイプライン",
  "Traceability": "トレーサビリティ",
  "Coming soon": "近日公開",
  "Home": "ホーム",
  "Move legacy systems forward.": "レガシーシステムを、次の時代へ。",
  "Keep the proof attached.": "証拠を切り離さずに。",
  "AIM is EvoFlux's migration control plane. It turns legacy source into approved knowledge, bounded target work, and deterministic evidence—through pipelines people can inspect and govern.": "AIMはEvoFluxの移行コントロールプレーンです。レガシーソースを、承認済みの知識、境界が明確なターゲット作業、決定論的な証拠へ変換します。すべてのパイプラインは人が確認し、統制できます。",
  "See how AIM works ": "AIMの仕組みを見る ",
  "linked repositories": "接続リポジトリ",
  "executable pipelines": "実行可能なパイプライン",
  "traceable system of record": "追跡可能な唯一の記録",
  "EvoFlux · AIM overview": "EvoFlux · AIM概要",
  "LIGHT MODE": "ライトモード",
  "LIVE PILOT": "稼働中パイロット",
  "42 units · 9 waves · 945 knowledge files": "42ユニット · 9ウェーブ · 945知識ファイル",
  "AIM in one minute": "1分でわかるAIM",
  "It is the operating system for a migration—not a prompt wrapped around a code generator.": "AIMはコード生成器を包んだプロンプトではなく、移行プロジェクトのオペレーティングシステムです。",
  "AIM gives the whole program one shared model of what exists, what is approved, what may run next, what changed, and what proves the result.": "現状、承認内容、次に実行できる作業、変更点、結果を証明するものを、プログラム全体で共有できる一つのモデルに統合します。",
  "Inputs": "入力",
  "What the customer connects": "お客様が接続するもの",
  "Base source": "ベースソース",
  "Legacy repositories, mounted read-only": "読み取り専用でマウントされたレガシーリポジトリ",
  "Target source": "ターゲットソース",
  "Approved architecture skeleton and CI": "承認済みアーキテクチャ基盤とCI",
  "Existing evidence": "既存の証拠",
  "Schemas, tests, documents, runtime samples": "スキーマ、テスト、文書、実行サンプル",
  "People & policy": "担当者とポリシー",
  "SMEs, architects, reviewers, acceptance criteria": "SME、アーキテクト、レビュアー、受入基準",
  "AIM control plane": "AIMコントロールプレーン",
  "Overview": "概要",
  "state + queue": "状態 + キュー",
  "Knowledge Base": "ナレッジベース",
  "shared truth": "共有された事実",
  "operating policy": "運用ポリシー",
  "execution + gates": "実行 + ゲート",
  "links + evidence": "リンク + 証拠",
  "Outputs": "出力",
  "What the program receives": "プログラムが受け取るもの",
  "Estate & wave plan": "資産・ウェーブ計画",
  "Units, dependencies, complexity, order": "ユニット、依存関係、複雑度、順序",
  "Approved understanding": "承認済みの理解",
  "Rules, data, interfaces, decisions": "ルール、データ、インターフェース、判断",
  "Target implementation": "ターゲット実装",
  "Controlled code, builds, and linked paths": "管理されたコード、ビルド、リンク済みパス",
  "Proof package": "証明パッケージ",
  "Golden cases, diffs, verdicts, approvals": "Goldenケース、差分、判定、承認",
  "Safety invariant:": "安全上の不変条件：",
  " source is observed, never rewritten. Knowledge and evidence live in the KB. Implementation writes only to the target.": " ソースは観察されるだけで、書き換えられません。知識と証拠はKBに保存され、実装はターゲットだけへ書き込まれます。",
  "Complete product tour": "製品ツアー",
  "Five surfaces. One migration state.": "5つの画面、1つの移行状態。",
  "The screens use the light UI and data vocabulary of a working PostgreSQL-to-Rust pilot. Each surface answers a different operational question.": "稼働中のPostgreSQL→RustパイロットのライトUIと実データを使用しています。各画面が異なる運用上の問いに答えます。",
  "The operating board: estate progress, live health, approvals, claims, wave readiness, and a dependency-aware work queue.": "資産全体の進捗、稼働状況、承認、claim、ウェーブreadiness、依存関係を考慮した作業キューを表示する運用ボードです。",
  "42 units · 9 waves in this pilot": "このパイロットでは42ユニット · 9ウェーブ",
  "The durable project memory: unit docs, rules, mappings, decisions, golden cases, state, and run evidence stored as reviewable files.": "ユニット文書、ルール、マッピング、判断、Goldenケース、状態、実行証拠をレビュー可能なファイルとして保持する永続的なプロジェクト記憶です。",
  "945 files · Git-trackable": "945ファイル · Gitで追跡可能",
  "The project-specific operating contract that tells agents how this source stack is understood, mapped, executed, and compared.": "このソーススタックをどう理解し、マッピングし、実行し、比較するかをエージェントへ示すプロジェクト固有の運用契約です。",
  "Pinned identity + version": "固定されたID + バージョン",
  "Executable migration workflows with typed inputs, explicit agents and tools, readiness checks, human gates, and inspectable run history.": "型付き入力、明示されたエージェントとツール、readiness確認、人のゲート、検査可能な実行記録を備えた移行ワークフローです。",
  "10 standard pipelines": "10の標準パイプライン",
  "Reindex": "再索引化",
  "units": "ユニット",
  "understood": "理解済み",
  "rules": "ルール",
  "attention": "要確認",
  "Search units, rules, target paths…": "ユニット、ルール、ターゲットパスを検索…",
  "Unit → rule → mapping → evidence coverage": "ユニット → ルール → マッピング → 証拠の網羅性",
  "24 rules · 2 dependents": "24ルール · 依存先2件",
  "31 rules · 6 dependents": "31ルール · 依存先6件",
  "12 rules · ready for review": "12ルール · レビュー可能",
  "SELECTED UNIT": "選択中のユニット",
  "Every completion claim is linked through the artifacts that justify it.": "すべての完了claimは、その根拠となるartifactへリンクされます。",
  "Source paths": "ソースパス",
  "24 rules": "24ルール",
  "Target mapping": "ターゲットマッピング",
  "Run evidence": "実行証拠",
  "Next action · Review Rules": "次のアクション · ルールレビュー",
  "The impact and evidence view: follow any unit through source paths, confirmed rules, target mapping, runs, issues, and downstream dependents.": "任意のユニットを、ソースパス、確認済みルール、ターゲットマッピング、実行、課題、下流依存まで追跡できる影響・証拠ビューです。",
  "Unit → rule → proof": "ユニット → ルール → 証明",
  "The Rulebook, clearly explained": "Rulebookを明確に理解する",
  "The migration-specific operating contract.": "移行プロジェクト固有の運用契約。",
  "A Rulebook tells AIM how ": "RulebookはAIMに、",
  "this source stack": "このソーススタック",
  " must become ": "をどのように",
  "this target stack": "このターゲットスタック",
  " for ": "へ変換するかを、",
  "this customer": "このお客様",
  ". Its identity and version are pinned by ": "向けに定義します。IDとバージョンは",
  ", and its behavior-changing files are reviewed in Git.": "で固定され、動作を変えるファイルはGitでレビューされます。",
  "It is not": "Rulebookではないもの",
  "a hidden system prompt": "隠されたシステムプロンプト",
  "a generic coding standard": "汎用コーディング標準",
  "an unversioned folder of examples": "バージョン管理されないサンプル集",
  "ACTIVE": "有効",
  "Manifest": "マニフェスト",
  "Stack identity, parser strategy, capability maturity, default compare profiles, and declared operational assets.": "スタックID、parser戦略、capability成熟度、既定の比較profile、宣言済み運用asset。",
  "Mappings": "マッピング",
  "Normative source-to-target translation policy: constructs, data types, interfaces, screen patterns, and architectural boundaries.": "構造、データ型、インターフェース、画面pattern、アーキテクチャ境界を定める標準変換ポリシー。",
  "Extractors": "Extractor",
  "Supplemental structural parsers for languages or formats that need project-specific discovery logic.": "プロジェクト固有の発見ロジックが必要な言語・形式向けの補助構造parser。",
  "Runners": "Runner",
  "Reviewed adapters that execute the same case contract against the legacy and target systems.": "同一のケース契約をレガシーとターゲットで実行するレビュー済みadapter。",
  "Canonicalizers": "Canonicalizer",
  "Deterministic rules that remove approved noise—timestamps, ordering, formats—before behavioral comparison.": "動作比較前にtimestamp、順序、形式など許容済みノイズを除去する決定論的ルール。",
  "Target base": "ターゲット基盤",
  "The architecture checklist or starter skeleton the target must satisfy before any conversion work is allowed.": "変換開始前にターゲットが満たすべきアーキテクチャchecklist／starter skeleton。",
  "Skills & agent guidance": "Skillとエージェントガイド",
  "Reviewed, project-local expertise for agents; examples remain inert until the team intentionally activates them.": "レビュー済みのプロジェクト固有知識。サンプルはチームが明示的に有効化するまで動作しません。",
  "Workflow & UI patterns": "ワークフローとUI pattern",
  "Reusable examples for delivery flow and legacy-screen-to-target-template decisions.": "delivery flowとレガシー画面→ターゲットtemplate判断の再利用可能な例。",
  "Change policy": "ポリシー変更",
  "Version Rulebook + aim.yaml": "Rulebook + aim.yamlをversion化",
  "Review in Git": "Gitでレビュー",
  "Re-run affected health, target, and golden checks": "影響するhealth、target、golden checkを再実行",
  "10 executable pipelines": "10の実行可能なパイプライン",
  "Every run declares its input, work, gate, and output.": "すべての実行が、入力・作業・ゲート・出力を宣言します。",
  "Select any captured screen below. The UI graph is the executable path: agent work, deterministic tools, branches, claims, notifications, and human approval gates are all visible before anyone presses Run.": "下の画面を選択してください。UI graphは実行経路そのものです。Runを押す前に、エージェント作業、決定論的tool、branch、claim、通知、人の承認ゲートを確認できます。",
  "The core modernization chain": "モダナイゼーションの中核チェーン",
  "Artifacts—not chat history—move the work forward.": "作業を前へ進めるのは、チャット履歴ではなくartifactです。",
  "Starts with": "開始点",
  "Read-only legacy estate": "読み取り専用レガシー資産",
  "Governed through": "統制された工程",
  "7 declared stages": "宣言済み7ステージ",
  "Finishes with": "完了点",
  "Cutover evidence package": "カットオーバー証拠パッケージ",
  "Discover": "発見",
  "Decide": "判断",
  "Build": "構築",
  "Prove": "証明",
  "Input": "入力",
  "Work": "作業",
  "Gate": "ゲート",
  "Output": "出力",
  "Assess": "アセスメント",
  "Legacy repositories + project policy": "レガシーリポジトリ + プロジェクトポリシー",
  "Inventory technologies, files, dependencies, complexity, and safe migration boundaries.": "技術、ファイル、依存関係、複雑度、安全な移行境界を棚卸しします。",
  "Estate scope approved": "資産スコープ承認済み",
  "Unit inventory + dependency-aware waves": "ユニット一覧 + 依存関係を考慮したウェーブ",
  "Source estate": "ソース資産",
  "Units + waves": "ユニット + ウェーブ",
  "Understand": "理解",
  "Selected unit + source evidence": "選択ユニット + ソース証拠",
  "Reverse-engineer behavior, data, interfaces, and unresolved dependencies with citations.": "動作、データ、インターフェース、未解決依存関係を引用付きで解析します。",
  "Knowledge review complete": "知識レビュー完了",
  "Cited knowledge + rule candidates": "引用付き知識 + ルール候補",
  "Selected unit": "選択ユニット",
  "Knowledge + rule candidates": "知識 + ルール候補",
  "Review Rules": "ルールレビュー",
  "Cited rule candidates": "引用付きルール候補",
  "Separate durable business behavior from implementation detail before rebuilding it.": "再構築前に、永続すべき業務動作と実装詳細を分離します。",
  "Domain expert confirms behavior": "ドメイン専門家が動作を確認",
  "Versioned rules + explicit no-rule decisions": "バージョン管理ルール + 明示的な非ルール判断",
  "Cited candidates": "引用付き候補",
  "Confirmed behavior": "確認済み動作",
  "Design": "設計",
  "Confirmed rules + Rulebook": "確認済みルール + Rulebook",
  "Map approved behavior into the target architecture and its declared boundaries.": "承認済み動作をターゲットアーキテクチャと宣言済み境界へマッピングします。",
  "Architect approves mapping": "アーキテクトがマッピングを承認",
  "Target mapping + design package": "ターゲットマッピング + 設計パッケージ",
  "Rules + Rulebook": "ルール + Rulebook",
  "Convert": "変換",
  "Approved mapping + target baseline": "承認済みマッピング + ターゲット基盤",
  "Implement target code, tests, linked paths, and reproducible build evidence.": "ターゲットコード、テスト、リンク済みパス、再現可能なビルド証拠を実装します。",
  "Build and policy checks pass": "ビルド・ポリシーチェック合格",
  "Target code + verified build": "ターゲットコード + 検証済みビルド",
  "Approved mapping": "承認済みマッピング",
  "Target code + build": "ターゲットコード + ビルド",
  "Compare": "比較",
  "Golden cases + target output": "Goldenケース + ターゲット出力",
  "Canonicalize approved noise and compare observable behavior deterministically.": "許容済みノイズを正規化し、観測可能な動作を決定論的に比較します。",
  "Reviewer resolves exceptions": "レビュアーが例外を解決",
  "Equivalence verdict + triage findings": "同等性判定 + triage結果",
  "Golden + target output": "Golden + ターゲット出力",
  "Verdict or triage": "判定またはtriage",
  "Cutover": "カットオーバー",
  "Equivalent units grouped by wave": "ウェーブ別にまとめた同等性確認済みユニット",
  "Recheck dependencies, approvals, evidence coverage, and operational readiness.": "依存関係、承認、証拠網羅性、運用readinessを再確認します。",
  "Accountable owner signs go / no-go": "責任ownerがGo／No-Goを承認",
  "Cutover record + auditable release state": "カットオーバー記録 + 監査可能なリリース状態",
  "Equivalent wave": "同等性確認済みウェーブ",
  "Go / no-go record": "Go／No-Go記録",
  "In": "入力",
  "Out": "出力",
  "Batch lane": "バッチレーン",
  "Convert Wave": "ウェーブ変換",
  "Freezes a dependency-safe batch and converts designed units sequentially with one approval and per-unit evidence.": "依存関係上安全なバッチを固定し、1回の承認とユニット別証拠により設計済みユニットを順番に変換します。",
  "Planning loop": "計画ループ",
  "Suggest Workflow": "ワークフロー提案",
  "Recomputes the next safe actions whenever unit, dependency, claim, or evidence state changes. Suggestions never self-execute.": "ユニット、依存関係、claim、証拠の状態が変わるたびに次の安全な作業を再計算します。提案は自動実行されません。",
  "Unit → rule → mapping → evidence": "ユニット → ルール → マッピング → 証拠",
  "Ask “why is this done?” and follow the answer end to end.": "「なぜ完了と言えるのか」を、最初から最後まで追跡できます。",
  "Traceability is not a final report bolted on after delivery. Every pipeline adds typed links while the work happens, so downstream impact and missing proof are visible early.": "トレーサビリティはdelivery後に付け足す報告書ではありません。各パイプラインが作業中に型付きリンクを追加するため、下流影響と不足証拠を早期に把握できます。",
  "Source evidence": "ソース証拠",
  "Immutable path, symbol, schema, test, or runtime observation": "変更不能なpath、symbol、schema、test、実行観測",
  "Unit knowledge": "ユニット知識",
  "Approved understanding, dependencies, data, and uncertainty": "承認済み理解、依存関係、データ、不確実性",
  "Business rule": "ビジネスルール",
  "Confirmed behavior with owner and source citations": "ownerとソース引用を伴う確認済み動作",
  "Architecture decision and implementation boundary": "アーキテクチャ判断と実装境界",
  "Target change": "ターゲット変更",
  "Code paths, build result, and agent run": "コードpath、build結果、agent実行",
  "Proof": "証明",
  "Golden case, canonical diff, verdict, and approval": "Golden case、canonical diff、判定、承認",
  "LINKED": "リンク済み",
  "CERTIFIED": "認証済み",
  "AIM makes these questions answerable": "AIMが答えられる問い",
  "Which source behavior caused this target change?": "どのソース動作がこのターゲット変更を生んだのか？",
  "Which units are affected if this rule changes?": "このルール変更で影響を受けるユニットは？",
  "Who approved the acceptable difference?": "許容差分を誰が承認したのか？",
  "What still blocks this wave from cutover?": "このウェーブのcutoverをまだ妨げているものは？",
  "Start with one representative wave": "代表的な1ウェーブから開始",
  "Prove the operating model before scaling the estate.": "資産全体へ拡大する前に運用モデルを実証します。",
  "A good pilot is large enough to expose real dependencies, business rules, and comparison noise—but bounded enough to finish and measure.": "良いパイロットは実際の依存関係、業務ルール、比較ノイズを明らかにできる規模でありながら、完了・測定できる範囲に収まります。",
  "01 · Connect": "01 · 接続",
  "Source, target, and KB": "ソース、ターゲット、KB",
  "Map repository roles, protect legacy as read-only, and establish the Git-tracked knowledge base.": "リポジトリ役割を対応付け、レガシーを読み取り専用で保護し、Git追跡のナレッジベースを構築します。",
  "02 · Adapt": "02 · 適応",
  "Make the Rulebook real": "Rulebookを実運用へ",
  "Validate mappings, extractors, runners, canonicalizers, target baseline, and capability readiness for the chosen stack pair.": "選択stack pairのmapping、extractor、runner、canonicalizer、target baseline、capability readinessを検証します。",
  "03 · Run": "03 · 実行",
  "Complete one evidence loop": "証拠ループを完了",
  "Assess through compare on representative units, resolve exceptions, and measure first-pass build and equivalence rates.": "代表ユニットでAssessからCompareまで実行し、例外を解決して初回build率と同等性率を測定します。",
  "04 · Scale": "04 · 拡大",
  "Reuse what was proven": "実証済み資産を再利用",
  "Expand waves using validated rules, patterns, evidence standards, and governance roles from the pilot.": "パイロットで検証したルール、pattern、証拠標準、governance roleを使ってウェーブを拡大します。",
  "Customer questions": "よくある質問",
  "The details teams ask before they trust the system.": "チームがシステムを信頼する前に確認するポイント。",
  "Is AIM an automatic code converter?": "AIMは自動コード変換ツールですか？",
  "No. Conversion is only one controlled pipeline. AIM first inventories and understands the estate, confirms business rules, approves target design, then converts and proves behavior with deterministic comparison.": "いいえ。変換は管理されたパイプラインの一つです。AIMはまず資産を棚卸し・理解し、業務ルールとターゲット設計を承認してから変換し、決定論的比較で動作を証明します。",
  "What exactly is a migration unit?": "移行ユニットとは何ですか？",
  "A unit is the smallest independently trackable modernization scope—such as a module, service, batch job, screen family, database capability, or protocol area. It has source paths, dependencies, wave, phase, evidence, and target links.": "ユニットは、独立して追跡できる最小のモダナイゼーション範囲です。モジュール、サービス、batch job、画面群、DB capability、protocol領域などが該当し、source path、依存関係、wave、phase、証拠、target linkを持ちます。",
  "Does AIM ever edit the legacy repository?": "AIMはレガシーリポジトリを編集しますか？",
  "No. Base source repositories are mounted read-only at the infrastructure level. Agents can inspect and index them, but all writes go to the target repository or the knowledge-base repository.": "いいえ。ベースソースはインフラ層で読み取り専用です。エージェントは検査・索引化できますが、書き込み先はターゲットまたはナレッジベースだけです。",
  "Do we need a finished Rulebook before starting?": "開始前に完成したRulebookが必要ですか？",
  "The Rulebook should be adapted and validated during setup. A new project begins with safe template capabilities; a pipeline stays blocked until the required parser, runner, mapping, or compare profile is ready for that engagement.": "Rulebookはsetup中に適応・検証します。新規projectは安全なtemplate capabilityから始まり、必要なparser、runner、mapping、compare profileがreadyになるまでpipelineはblockされます。",
  "Who approves what?": "誰が何を承認しますか？",
  "Program leads approve waves, domain experts confirm business rules, architects approve target mappings, reviewers decide equivalence exceptions, and accountable owners confirm cutover.": "program leadがwave、domain expertがbusiness rule、architectがtarget mapping、reviewerがequivalence例外、責任ownerがcutoverを承認します。",
  "What becomes the system of record?": "何がsystem of recordになりますか？",
  "The Git-tracked knowledge-base repository holds shared project truth: aim.yaml, unit state, rules, mappings, decisions, golden cases, and append-only run reports. Local indexes can be rebuilt from it.": "Git追跡のナレッジベースがprojectの共有事実を保持します。aim.yaml、unit state、rule、mapping、decision、golden case、追記専用run reportを含み、local indexは再構築できます。",
  "Make the migration explainable.": "移行を説明可能に。",
  "Make the outcome provable.": "成果を証明可能に。",
  "Bring one legacy estate, one approved target, and the evidence that matters.": "一つのレガシー資産、一つの承認済みターゲット、そして重要な証拠から始めましょう。",
  "Back to EvoFlux ": "EvoFluxへ戻る ",
  "Local-first agent infrastructure for work, coding, and governed modernization.": "業務、コーディング、統制されたモダナイゼーションのためのローカルファーストなエージェント基盤。",
  "Product": "製品",
  "Work & Coding": "Work & Coding",
  "Open source": "オープンソース",
  "Quick start": "クイックスタート",
  "License": "ライセンス",
  "Apache 2.0 · Built in the open": "Apache 2.0 · オープンに開発",
  "EvoFlux AIM overview in light mode with migration progress, health, and dependency-aware work queue": "移行の進捗、稼働状況、依存関係を考慮した作業キューを表示するEvoFlux AIMのライトモード概要",
  "EvoFlux AIM Overview light-mode screen": "EvoFlux AIM概要のライトモード画面",
  "EvoFlux AIM Knowledge Base light-mode screen": "EvoFlux AIMナレッジベースのライトモード画面",
  "EvoFlux AIM Rulebook light-mode screen": "EvoFlux AIM Rulebookのライトモード画面",
  "EvoFlux AIM Pipelines light-mode screen": "EvoFlux AIMパイプラインのライトモード画面",
  "AIM Traceability product view": "AIMトレーサビリティの製品画面",
  "EvoFlux AIM Rulebook file open in the Knowledge Base": "ナレッジベースで開いたEvoFlux AIM Rulebookファイル",
};

function localizeText(value: string): string {
  const direct = jaText[value];
  if (direct) return direct;
  const trimmed = value.trim();
  if (!trimmed || !jaText[trimmed]) return value;
  const leading = value.slice(0, value.indexOf(trimmed));
  const trailing = value.slice(value.indexOf(trimmed) + trimmed.length);
  return `${leading}${jaText[trimmed]}${trailing}`;
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
    <main className="aim2-page" lang={locale}>
      <header className="site-header aim2-header">
        <div className="brand-cluster aim-brand-cluster">
          <a className="company-brand-link" href={withBasePath(locale === "ja" ? "/jp" : "/")} aria-label="Home">
            <img className="company-brand aim-company-brand" src={withBasePath("/brand/fpt-software-fhm-q9.png")} width="885" height="241" alt="Company logo" />
          </a>
          <img className="aim-brand-logo" src={withBasePath("/brand/aim-logo.png")} width="196" height="90" alt="AIM" />
        </div>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#product-tour">Product tour</a>
          <a href="#rulebook">Rulebook</a>
          <a href="#pipelines">Pipelines</a>
          <a href="#traceability">Traceability</a>
        </nav>
        <div className="header-actions">
          <div className="aim2-language-switch" aria-label="Language">
            <a href={withBasePath("/aim?lang=en")} className={locale === "en" ? "is-active" : ""} lang="en">EN</a>
            <a href={withBasePath("/jp/aim?lang=ja")} className={locale === "ja" ? "is-active" : ""} lang="ja">日本語</a>
          </div>
          <span className="button button-dark button-small is-coming-soon" aria-disabled="true">Coming soon</span>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /></summary>
            <nav aria-label="Mobile navigation"><a href={withBasePath(locale === "ja" ? "/jp" : "/")}>Home</a><a href="#product-tour">Product tour</a><a href="#rulebook">Rulebook</a><a href="#pipelines">Pipelines</a><a href="#traceability">Traceability</a></nav>
          </details>
        </div>
      </header>

      <section className="aim2-hero">
        <div className="aim2-space" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => <i key={index} />)}
          <span className="aim2-orbit aim2-orbit-a" /><span className="aim2-orbit aim2-orbit-b" />
          <span className="aim2-scanline" />
        </div>
        <div className="aim2-hero-copy">
          <div className="aim2-kicker"><i /> AI Innovation Modernization</div>
          <h1>Move legacy systems forward.<br /><em>Keep the proof attached.</em></h1>
          <p>AIM is EvoFlux&apos;s migration control plane. It turns legacy source into approved knowledge, bounded target work, and deterministic evidence—through pipelines people can inspect and govern.</p>
          <div className="hero-actions">
            <span className="button aim2-button-light is-coming-soon" aria-disabled="true">Coming soon</span>
            <a className="button aim2-button-line" href="#product-tour">See how AIM works <span>↘</span></a>
          </div>
          <div className="aim2-hero-stats">
            <span><strong>3</strong><small>linked repositories</small></span>
            <span><strong>10</strong><small>executable pipelines</small></span>
            <span><strong>1</strong><small>traceable system of record</small></span>
          </div>
        </div>
        <div className="aim2-hero-screen">
          <div className="aim2-window-bar"><i /><i /><i /><span>EvoFlux · AIM overview</span><b>LIGHT MODE</b></div>
          <img src={withBasePath("/screens/evoflux-aim-overview-light.jpg")} alt="EvoFlux AIM overview in light mode with migration progress, health, and dependency-aware work queue" />
          <div className="aim2-screen-caption"><span><i /> LIVE PILOT</span><p>42 units · 9 waves · 945 knowledge files</p></div>
        </div>
      </section>

      <section className="aim2-definition section">
        <div className="aim2-section-head">
          <span className="section-kicker">AIM in one minute</span>
          <h2>It is the operating system for a migration—not a prompt wrapped around a code generator.</h2>
          <p>AIM gives the whole program one shared model of what exists, what is approved, what may run next, what changed, and what proves the result.</p>
        </div>
        <div className="aim2-system-map">
          <article className="aim2-system-column">
            <span>Inputs</span><h3>What the customer connects</h3>
            <ul><li><b>Base source</b><small>Legacy repositories, mounted read-only</small></li><li><b>Target source</b><small>Approved architecture skeleton and CI</small></li><li><b>Existing evidence</b><small>Schemas, tests, documents, runtime samples</small></li><li><b>People & policy</b><small>SMEs, architects, reviewers, acceptance criteria</small></li></ul>
          </article>
          <div className="aim2-system-core">
            <span>AIM control plane</span>
            <div><b>Overview</b><small>state + queue</small></div><div><b>Knowledge Base</b><small>shared truth</small></div><div><b>Rulebook</b><small>operating policy</small></div><div><b>Pipelines</b><small>execution + gates</small></div><div><b>Traceability</b><small>links + evidence</small></div>
          </div>
          <article className="aim2-system-column aim2-system-output">
            <span>Outputs</span><h3>What the program receives</h3>
            <ul><li><b>Estate & wave plan</b><small>Units, dependencies, complexity, order</small></li><li><b>Approved understanding</b><small>Rules, data, interfaces, decisions</small></li><li><b>Target implementation</b><small>Controlled code, builds, and linked paths</small></li><li><b>Proof package</b><small>Golden cases, diffs, verdicts, approvals</small></li></ul>
          </article>
        </div>
        <p className="aim2-system-note"><strong>Safety invariant:</strong> source is observed, never rewritten. Knowledge and evidence live in the KB. Implementation writes only to the target.</p>
      </section>

      <section id="product-tour" className="aim2-tour section">
        <div className="aim2-section-head aim2-section-head-split">
          <div><span className="section-kicker">Complete product tour</span><h2>Five surfaces. One migration state.</h2></div>
          <p>The screens use the light UI and data vocabulary of a working PostgreSQL-to-Rust pilot. Each surface answers a different operational question.</p>
        </div>
        <div className="aim2-surface-grid">
          {productSurfaces.map((surface) => (
            <article key={surface.title}>
              <div className={`aim2-surface-shot${surface.title === "Pipelines" ? " is-pipeline" : ""}`}><div className="aim2-mini-bar"><i /><i /><i /><span>{surface.title}</span></div><img src={withBasePath(surface.image)} alt={`EvoFlux AIM ${surface.title} light-mode screen`} /></div>
              <div className="aim2-surface-copy"><span>{surface.number}</span><h3>{surface.title}</h3><p>{surface.text}</p><small>{surface.fact}</small></div>
            </article>
          ))}
          <article className="aim2-surface-trace">
            <div className="aim2-trace-app" aria-label="AIM Traceability product view">
              <div className="aim2-mini-bar"><i /><i /><i /><span>Traceability</span></div>
              <div className="aim2-trace-app-body">
                <aside><b>AIM</b><span>Overview</span><span>Knowledge Base</span><span className="is-active">Traceability</span><span>Pipelines</span></aside>
                <div className="aim2-trace-app-main">
                  <header><div><h4>Traceability</h4><p>Unit → rule → mapping → evidence coverage</p></div><button type="button">Reindex</button></header>
                  <div className="aim2-trace-app-metrics"><span><b>42</b><small>units</small></span><span><b>30</b><small>understood</small></span><span><b>629</b><small>rules</small></span><span><b>3</b><small>attention</small></span></div>
                  <div className="aim2-trace-app-workspace">
                    <div className="aim2-trace-app-list"><div className="aim2-fake-filter">Search units, rules, target paths…</div>{[["parser/parser","understood","24 rules · 2 dependents"],["storage/buffer","understood","31 rules · 6 dependents"],["common-platform/portability","understood","12 rules · ready for review"]].map(([unit,phase,meta], index) => <div className={index === 0 ? "is-selected" : ""} key={unit}><b>{unit}</b><span>{phase}</span><small>{meta}</small></div>)}</div>
                    <div className="aim2-trace-app-detail"><span>SELECTED UNIT</span><h4>parser/parser</h4><p>Every completion claim is linked through the artifacts that justify it.</p><div className="aim2-mini-trace"><b>Source paths</b><i>→</i><b>24 rules</b><i>→</i><b>Target mapping</b><i>→</i><b>Run evidence</b></div><small>Next action · Review Rules</small></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aim2-surface-copy"><span>05</span><h3>Traceability</h3><p>The impact and evidence view: follow any unit through source paths, confirmed rules, target mapping, runs, issues, and downstream dependents.</p><small>Unit → rule → proof</small></div>
          </article>
        </div>
      </section>

      <section id="rulebook" className="aim2-rulebook">
        <div className="aim2-rulebook-intro">
          <span className="section-kicker">The Rulebook, clearly explained</span>
          <h2>The migration-specific operating contract.</h2>
          <p>A Rulebook tells AIM how <strong>this source stack</strong> must become <strong>this target stack</strong> for <strong>this customer</strong>. Its identity and version are pinned by <code>aim.yaml</code>, and its behavior-changing files are reviewed in Git.</p>
          <div className="aim2-not-list"><span>It is not</span><p>a hidden system prompt</p><p>a generic coding standard</p><p>an unversioned folder of examples</p></div>
        </div>
        <div className="aim2-rulebook-screen">
          <div className="aim2-window-bar"><i /><i /><i /><span>pgrust-rulebook · README.md</span><b>ACTIVE</b></div>
          <img src={withBasePath("/screens/evoflux-aim-rulebook-light.jpg")} alt="EvoFlux AIM Rulebook file open in the Knowledge Base" />
        </div>
        <div className="aim2-rulebook-grid">
          {rulebookContents.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
        <div className="aim2-rulebook-flow">
          <span>Change policy</span><i>→</i><span>Version Rulebook + aim.yaml</span><i>→</i><span>Review in Git</span><i>→</i><span>Re-run affected health, target, and golden checks</span>
        </div>
      </section>

      <section id="pipelines" className="aim2-pipelines section">
        <div className="aim2-section-head aim2-section-head-split aim2-section-head-dark">
          <div><span className="section-kicker">10 executable pipelines</span><h2>Every run declares its input, work, gate, and output.</h2></div>
          <p>Select any captured screen below. The UI graph is the executable path: agent work, deterministic tools, branches, claims, notifications, and human approval gates are all visible before anyone presses Run.</p>
        </div>
        <AimPipelineShowcase locale={locale} />
      </section>

      <section className="aim2-chain section">
        <div className="aim2-section-head">
          <span className="section-kicker">The core modernization chain</span>
          <h2>Artifacts—not chat history—move the work forward.</h2>
        </div>
        <div className="aim2-chain-summary">
          <span><small>Starts with</small><strong>Read-only legacy estate</strong></span>
          <i aria-hidden="true">→</i>
          <span><small>Governed through</small><strong>7 declared stages</strong></span>
          <i aria-hidden="true">→</i>
          <span><small>Finishes with</small><strong>Cutover evidence package</strong></span>
        </div>
        <div className="aim2-chain-track">
          {modernizationChain.map((stage, index) => (
            <article key={stage.title} data-phase={stage.phase.toLowerCase()}>
              <header><span>{String(index + 1).padStart(2, "0")}</span><small>{stage.phase}</small></header>
              <h3>{stage.title}</h3>
              <dl>
                <div><dt>Input</dt><dd>{stage.input}</dd></div>
                <div className="is-work"><dt>Work</dt><dd>{stage.work}</dd></div>
                <div className="is-gate"><dt>Gate</dt><dd>{stage.gate}</dd></div>
                <div className="is-output"><dt>Output</dt><dd>{stage.output}</dd></div>
              </dl>
            </article>
          ))}
        </div>
        <div className="aim2-side-flows"><article><span>Batch lane</span><h3>Convert Wave</h3><p>Freezes a dependency-safe batch and converts designed units sequentially with one approval and per-unit evidence.</p></article><article><span>Planning loop</span><h3>Suggest Workflow</h3><p>Recomputes the next safe actions whenever unit, dependency, claim, or evidence state changes. Suggestions never self-execute.</p></article></div>
      </section>

      <section id="traceability" className="aim2-trace">
        <div className="aim2-trace-copy"><span className="section-kicker">Unit → rule → mapping → evidence</span><h2>Ask “why is this done?” and follow the answer end to end.</h2><p>Traceability is not a final report bolted on after delivery. Every pipeline adds typed links while the work happens, so downstream impact and missing proof are visible early.</p></div>
        <div className="aim2-trace-map">
          {traceLinks.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div><b>{index === traceLinks.length - 1 ? "CERTIFIED" : "LINKED"}</b></article>)}
        </div>
        <div className="aim2-trace-questions"><span>AIM makes these questions answerable</span><p>Which source behavior caused this target change?</p><p>Which units are affected if this rule changes?</p><p>Who approved the acceptable difference?</p><p>What still blocks this wave from cutover?</p></div>
      </section>

      <section className="aim2-start section">
        <div className="aim2-section-head aim2-section-head-split"><div><span className="section-kicker">Start with one representative wave</span><h2>Prove the operating model before scaling the estate.</h2></div><p>A good pilot is large enough to expose real dependencies, business rules, and comparison noise—but bounded enough to finish and measure.</p></div>
        <div className="aim2-start-grid">
          <article><span>01 · Connect</span><h3>Source, target, and KB</h3><p>Map repository roles, protect legacy as read-only, and establish the Git-tracked knowledge base.</p></article>
          <article><span>02 · Adapt</span><h3>Make the Rulebook real</h3><p>Validate mappings, extractors, runners, canonicalizers, target baseline, and capability readiness for the chosen stack pair.</p></article>
          <article><span>03 · Run</span><h3>Complete one evidence loop</h3><p>Assess through compare on representative units, resolve exceptions, and measure first-pass build and equivalence rates.</p></article>
          <article><span>04 · Scale</span><h3>Reuse what was proven</h3><p>Expand waves using validated rules, patterns, evidence standards, and governance roles from the pilot.</p></article>
        </div>
      </section>

      <section id="faq" className="aim2-faq section">
        <div className="aim2-faq-intro"><span className="section-kicker">Customer questions</span><h2>The details teams ask before they trust the system.</h2></div>
        <div className="faq-list aim2-faq-list">{faqs.map(([question, answer], index) => <details open={index === 0} key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="aim2-closing">
        <div className="aim2-closing-orbit" aria-hidden="true" />
        <img src={withBasePath("/evoflux-app-icon.png")} width="78" height="78" alt="" />
        <span className="section-kicker">AI Innovation Modernization</span>
        <h2>Make the migration explainable.<br />Make the outcome provable.</h2>
        <p>Bring one legacy estate, one approved target, and the evidence that matters.</p>
        <div className="hero-actions"><span className="button aim2-button-light is-coming-soon" aria-disabled="true">Coming soon</span><a className="button aim2-button-line" href={withBasePath(locale === "ja" ? "/jp" : "/")}>Back to EvoFlux <span>→</span></a></div>
      </section>

      <footer className="aim2-footer">
        <div className="footer-brand"><img src={withBasePath("/evoflux-app-icon.png")} alt="" width="32" height="32" /><strong>EvoFlux</strong><p>Local-first agent infrastructure for work, coding, and governed modernization.</p></div>
        <div className="footer-links"><div><strong>Product</strong><a href={withBasePath(locale === "ja" ? "/jp" : "/")}>Overview</a><a href={withBasePath(locale === "ja" ? "/jp#modes" : "/#modes")}>Work & Coding</a><a href={withBasePath(locale === "ja" ? "/jp/aim" : "/aim")}>AIM</a></div><div><strong>AIM</strong><a href="#product-tour">Product tour</a><a href="#rulebook">Rulebook</a><a href="#pipelines">Pipelines</a><a href="#traceability">Traceability</a></div></div>
        <div className="footer-bottom"><span>© 2026 EvoFlux</span><span>Apache 2.0 · Built in the open</span></div>
      </footer>
    </main>
  );
  return localizeNode(page, locale);
}

export default function AimPage() {
  return <AimPageContent locale="en" />;
}
