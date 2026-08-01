"use client";

import { useState } from "react";

type Pipeline = {
  id: string;
  group: "Discover" | "Design & build" | "Prove" | "Orchestrate";
  title: string;
  purpose: string;
  input: string;
  process: string;
  gate: string;
  output: string;
  image: string;
};

type Locale = "en" | "ja";
type PipelineCopy = Pick<Pipeline, "title" | "purpose" | "input" | "process" | "gate" | "output">;

const pipelines: Pipeline[] = [
  {
    id: "assess",
    group: "Discover",
    title: "Assess",
    purpose: "Turn an unknown source estate into migration units and dependency-aware waves.",
    input: "Read-only source repository set, target baseline, project Rulebook",
    process: "The aim-appraiser indexes the estate, identifies units and dependencies, scores complexity, and proposes a wave plan.",
    gate: "3 gates · approve plan, approve rework, choose whether to generate next actions",
    output: "Unit inventory, risk baseline, approved waves, suggested workflow",
    image: "/screens/evoflux-aim-pipelines-light.jpg?v=2",
  },
  {
    id: "understand",
    group: "Discover",
    title: "Understand",
    purpose: "Reverse-engineer one unit and its unresolved dependencies before target design begins.",
    input: "unit: string",
    process: "The aim-archaeologist claims the unit, snapshots source evidence, traces dependency closure, and writes structured knowledge into the KB.",
    gate: "2 gates · verify the understanding package and approve it",
    output: "Module documentation, dependency map, data knowledge, candidate business rules, phase = understood",
    image: "/screens/evoflux-aim-understand-light.jpg?v=2",
  },
  {
    id: "review-rules",
    group: "Discover",
    title: "Review Rules",
    purpose: "Separate real business behavior from implementation detail before it is rebuilt.",
    input: "unit: string",
    process: "AIM lists rule candidates with source citations for a domain expert to confirm, reject, edit, or declare that no rule exists.",
    gate: "1 gate · domain or business-rule approval",
    output: "Confirmed business rules or an explicit no-rules decision",
    image: "/screens/evoflux-aim-review-rules-light.jpg?v=2",
  },
  {
    id: "design",
    group: "Design & build",
    title: "Design Unit",
    purpose: "Map an understood unit into the approved target architecture without redesigning the platform ad hoc.",
    input: "unit: string + confirmed rules + target conventions + Rulebook mappings",
    process: "The aim-target-architect creates the target mapping, interface decisions, dependencies, acceptance criteria, and implementation boundary.",
    gate: "1 gate · architect approves the target design",
    output: "Approved mapping and design package, phase = designed",
    image: "/screens/evoflux-aim-design-light.jpg?v=2",
  },
  {
    id: "convert-unit",
    group: "Design & build",
    title: "Convert Unit",
    purpose: "Implement one approved design inside the controlled target repository.",
    input: "unit: string in phase designed",
    process: "The aim-converter applies the mapping and Rulebook, writes only to target, runs the build, and records the implementation evidence.",
    gate: "Policy gate · readiness, exclusive claim, and build verification",
    output: "Target code, tests/build result, linked paths, phase = converted",
    image: "/screens/evoflux-aim-convert-light.jpg?v=2",
  },
  {
    id: "convert-wave",
    group: "Design & build",
    title: "Convert Wave",
    purpose: "Move a batch of designed units through conversion in safe dependency order.",
    input: "wave: number",
    process: "AIM freezes the eligible set, acquires claims, revalidates readiness, then converts and verifies each selected unit sequentially.",
    gate: "1 gate · approve the batch before target writes begin",
    output: "Converted and build-verified units with batch run history",
    image: "/screens/evoflux-aim-convert-wave-light.jpg?v=2",
  },
  {
    id: "golden",
    group: "Prove",
    title: "Capture Golden",
    purpose: "Create a trusted behavioral baseline from the legacy system before comparison.",
    input: "unit: string · case_set?: enum · overwrite?: boolean",
    process: "The aim-test-engineer prepares the case contract, validates the legacy runner, captures outputs, and stores immutable expected evidence.",
    gate: "1 gate · approve the legacy baseline",
    output: "Versioned golden cases and expected outputs for the selected case set",
    image: "/screens/evoflux-aim-golden-light.jpg?v=2",
  },
  {
    id: "compare",
    group: "Prove",
    title: "Test Compare",
    purpose: "Decide functional equivalence from deterministic evidence—not an agent opinion.",
    input: "unit: string · case_set?: enum",
    process: "Legacy and target runners execute the same cases; the Rulebook canonicalizer removes approved noise; deterministic compare either passes or routes differences to triage.",
    gate: "1 gate · certify equivalence or hold for repair",
    output: "Equivalence certificate, canonical diffs, or triage findings",
    image: "/screens/evoflux-aim-compare-light.jpg?v=2",
  },
  {
    id: "cutover",
    group: "Prove",
    title: "Cutover Check",
    purpose: "Convert technical completion into an accountable go/no-go decision for one wave.",
    input: "wave: number whose units are equivalent",
    process: "AIM checks every unit and dependency, locks the eligible set, asks for accountable approval, and records the state transition.",
    gate: "1 gate · human confirms cutover",
    output: "Cutover readiness record and wave units marked cutover",
    image: "/screens/evoflux-aim-cutover-light.jpg?v=2",
  },
  {
    id: "suggest",
    group: "Orchestrate",
    title: "Suggest Workflow",
    purpose: "Tell the team what to run next from live dependency, phase, claim, and evidence state.",
    input: "No manual input · current project state",
    process: "A deterministic planner evaluates readiness and downstream impact, then creates an auditable queue instead of guessing from a backlog.",
    gate: "No approval gate · suggestions never execute themselves",
    output: "Ready-now actions, blocked actions, reasons, and recommended order",
    image: "/screens/evoflux-aim-suggest-light.jpg?v=2",
  },
];

const pipelineJa: Record<string, PipelineCopy> = {
  assess: {
    title: "アセスメント",
    purpose: "未知のソース資産を移行ユニットと依存関係を考慮したウェーブへ整理します。",
    input: "読み取り専用ソースリポジトリ、ターゲット基盤、プロジェクトRulebook",
    process: "aim-appraiserが資産を索引化し、ユニットと依存関係を特定、複雑度を評価してウェーブ計画を提案します。",
    gate: "3ゲート · 計画承認、再作業承認、次アクション生成の判断",
    output: "ユニット台帳、リスク基準、承認済みウェーブ、推奨ワークフロー",
  },
  understand: {
    title: "理解",
    purpose: "ターゲット設計の前に、1つのユニットと未解決の依存関係をリバースエンジニアリングします。",
    input: "unit: string",
    process: "aim-archaeologistがユニットを確保し、ソース証拠をスナップショット化、依存関係を追跡して構造化知識をKBへ記録します。",
    gate: "2ゲート · 理解パッケージの検証と承認",
    output: "モジュール文書、依存関係マップ、データ知識、候補ビジネスルール、phase = understood",
  },
  "review-rules": {
    title: "ルールレビュー",
    purpose: "再構築前に、実際の業務動作と実装上の詳細を分離します。",
    input: "unit: string",
    process: "AIMがソース引用付きのルール候補を提示し、ドメイン専門家が確認、却下、編集、またはルールなしを明示します。",
    gate: "1ゲート · ドメイン／ビジネスルール承認",
    output: "確認済みビジネスルール、または明示的なルールなし判定",
  },
  design: {
    title: "ユニット設計",
    purpose: "理解済みユニットを、場当たり的に再設計せず承認済みターゲットアーキテクチャへ対応付けます。",
    input: "unit + 確認済みルール + ターゲット規約 + Rulebookマッピング",
    process: "aim-target-architectがターゲットマッピング、インターフェース判断、依存関係、受入基準、実装境界を作成します。",
    gate: "1ゲート · アーキテクトがターゲット設計を承認",
    output: "承認済みマッピングと設計パッケージ、phase = designed",
  },
  "convert-unit": {
    title: "ユニット変換",
    purpose: "承認済み設計を管理されたターゲットリポジトリへ実装します。",
    input: "phase designed の unit: string",
    process: "aim-converterがマッピングとRulebookを適用し、ターゲットだけへ書き込み、ビルドと実装証拠を記録します。",
    gate: "ポリシーゲート · readiness、排他claim、ビルド検証",
    output: "ターゲットコード、テスト／ビルド結果、リンク済みパス、phase = converted",
  },
  "convert-wave": {
    title: "ウェーブ変換",
    purpose: "設計済みユニット群を安全な依存順序で一括変換します。",
    input: "wave: number",
    process: "AIMが対象を固定し、claimを取得、readinessを再検証して、選択ユニットを順番に変換・検証します。",
    gate: "1ゲート · ターゲット書き込み前にバッチを承認",
    output: "変換・ビルド検証済みユニットとバッチ実行記録",
  },
  golden: {
    title: "Golden取得",
    purpose: "比較前にレガシーシステムから信頼できる動作基準を作成します。",
    input: "unit: string · case_set?: enum · overwrite?: boolean",
    process: "aim-test-engineerがケース契約を準備し、レガシーrunnerを検証、出力を取得して不変の期待証拠を保存します。",
    gate: "1ゲート · レガシー基準を承認",
    output: "選択ケースセットのバージョン付きGoldenケースと期待出力",
  },
  compare: {
    title: "テスト比較",
    purpose: "エージェントの意見ではなく、決定論的な証拠から機能同等性を判定します。",
    input: "unit: string · case_set?: enum",
    process: "レガシーとターゲットで同じケースを実行し、Rulebook canonicalizerが許容ノイズを除去。差分はtriageへ送られます。",
    gate: "1ゲート · 同等性を認証、または修正のため保留",
    output: "同等性証明、正規化差分、またはtriage結果",
  },
  cutover: {
    title: "カットオーバー確認",
    purpose: "技術的完了を、ウェーブ単位の説明可能なGo／No-Go判断へ変換します。",
    input: "全ユニットがequivalentの wave: number",
    process: "AIMが全ユニットと依存関係を確認し、対象を固定、責任者の承認を求めて状態遷移を記録します。",
    gate: "1ゲート · 人がカットオーバーを確認",
    output: "カットオーバーreadiness記録とcutover済みウェーブユニット",
  },
  suggest: {
    title: "ワークフロー提案",
    purpose: "依存関係、phase、claim、証拠の最新状態から、次に実行すべき作業を提示します。",
    input: "手動入力なし · 現在のプロジェクト状態",
    process: "決定論的plannerがreadinessと下流影響を評価し、推測ではなく監査可能なキューを生成します。",
    gate: "承認ゲートなし · 提案は自動実行されません",
    output: "今すぐ実行可能な作業、ブロック理由、推奨順序",
  },
};

const groupJa: Record<Pipeline["group"], string> = {
  Discover: "発見",
  "Design & build": "設計・構築",
  Prove: "検証",
  Orchestrate: "オーケストレーション",
};

export default function AimPipelineShowcase({ locale = "en" }: { locale?: Locale }) {
  const [activeId, setActiveId] = useState("understand");
  const activeBase = pipelines.find((pipeline) => pipeline.id === activeId) ?? pipelines[0];
  const active = locale === "ja" ? { ...activeBase, ...pipelineJa[activeBase.id] } : activeBase;
  const localized = (pipeline: Pipeline) => locale === "ja" ? { ...pipeline, ...pipelineJa[pipeline.id] } : pipeline;

  return (
    <div className="aim2-pipeline-showcase">
      <div className="aim2-pipeline-thumbs" aria-label={locale === "ja" ? "AIMパイプライン一覧" : "AIM pipeline catalog"}>
        {pipelines.map((pipeline, index) => {
          const shown = localized(pipeline);
          return (
          <button
            type="button"
            key={pipeline.id}
            className={pipeline.id === active.id ? "is-active" : ""}
            onClick={() => setActiveId(pipeline.id)}
            aria-pressed={pipeline.id === active.id}
          >
            <span className="aim2-thumb-shot"><img src={pipeline.image} alt="" /></span>
            <span className="aim2-thumb-meta">
              <small>{String(index + 1).padStart(2, "0")} · {locale === "ja" ? groupJa[pipeline.group] : pipeline.group}</small>
              <strong>{shown.title}</strong>
              <span>{shown.purpose}</span>
              <em>{locale === "ja" ? "入力" : "In"} · {shown.input}</em>
              <em>{locale === "ja" ? "出力" : "Out"} · {shown.output}</em>
            </span>
          </button>
        )})}
      </div>

      <article className="aim2-pipeline-detail" aria-live="polite">
        <div className="aim2-detail-copy">
          <div className="aim2-detail-heading">
            <span>{locale === "ja" ? groupJa[activeBase.group] : active.group}</span>
            <h3>{active.title}</h3>
            <p>{active.purpose}</p>
          </div>
          <dl>
            <div><dt>{locale === "ja" ? "入力" : "Input"}</dt><dd>{active.input}</dd></div>
            <div><dt>{locale === "ja" ? "実行内容" : "What runs"}</dt><dd>{active.process}</dd></div>
            <div><dt>{locale === "ja" ? "人による統制" : "Human control"}</dt><dd>{active.gate}</dd></div>
            <div><dt>{locale === "ja" ? "出力" : "Output"}</dt><dd>{active.output}</dd></div>
          </dl>
        </div>
        <div className="aim2-detail-screen">
          <div className="aim2-window-bar"><i /><i /><i /><span>EvoFlux · AIM · {active.title}</span><b>{locale === "ja" ? "ライトモード" : "LIGHT MODE"}</b></div>
          <img src={active.image} alt={locale === "ja" ? `EvoFlux AIM ${active.title} パイプライン` : `EvoFlux AIM ${active.title} pipeline in light mode`} />
        </div>
      </article>
    </div>
  );
}
