"use client";

import { useState } from "react";
import { withBasePath } from "../base-path";

const modes = [
  {
    id: "work",
    number: "01",
    label: "Work",
    title: "Cowork without a repository",
    description: "Research, documents, data, browser work, and quick scripts in a focused execution sandbox.",
    proof: "Artifact and tool-result review",
    image: "/screens/evoflux-work-light.jpg",
    alt: "EvoFlux Work mode showing a launch readiness brief and verification scorecard",
  },
  {
    id: "coding",
    number: "02",
    label: "Coding",
    title: "Engineering in your real workspace",
    description: "Navigate structural code knowledge, edit across repositories, run tests, inspect diffs, and use the full git surface.",
    proof: "Tests, diffs, code graph, and git",
    image: "/screens/evoflux-coding-light.jpg",
    alt: "EvoFlux Coding mode working in a multi-repository software project",
  },
  {
    id: "aim",
    number: "03",
    label: "AIM",
    title: "A governed modernization factory",
    description: "Inventory legacy estates, preserve traceability, manage migration waves, and prove deterministic equivalence.",
    proof: "Human gates and equivalence checks",
    image: "/screens/evoflux-aim-light.jpg",
    alt: "EvoFlux AIM mode showing migration health, evidence, and a dependency-aware work queue",
  },
];

const japaneseModes = [
  {
    ...modes[0],
    title: "リポジトリ不要の共同作業",
    description: "調査、文書、データ、ブラウザ作業、短いスクリプトを、集中できる実行サンドボックスで進めます。",
    proof: "成果物とツール結果のレビュー",
    alt: "ローンチ準備ブリーフと検証スコアカードを表示するEvoFlux Workモード",
  },
  {
    ...modes[1],
    title: "実際のワークスペースで開発",
    description: "構造化されたコード知識をたどり、複数リポジトリを編集し、テスト、差分確認、Git操作を一つの画面で行います。",
    proof: "テスト、差分、コードグラフ、Git",
    alt: "複数リポジトリのソフトウェアプロジェクトで作業するEvoFlux Codingモード",
  },
  {
    ...modes[2],
    title: "統制されたモダナイゼーション基盤",
    description: "レガシー資産を棚卸しし、トレーサビリティを保ち、移行ウェーブを管理して、決定論的な同等性を証明します。",
    proof: "人のゲートと同等性チェック",
    alt: "移行ヘルス、証拠、依存関係を考慮した作業キューを表示するEvoFlux AIMモード",
  },
];

export function ModeShowcase({ locale = "en" }: { locale?: "en" | "ja" }) {
  const [active, setActive] = useState(0);
  const localizedModes = locale === "ja" ? japaneseModes : modes;
  const mode = localizedModes[active];

  return (
    <div className="mode-showcase" id="mode-demo">
      <div className="mode-tabs" role="tablist" aria-label={locale === "ja" ? "EvoFluxのモード" : "EvoFlux modes"}>
        {localizedModes.map((item, index) => (
          <button
            key={item.id}
            id={`mode-tab-${item.id}`}
            role="tab"
            aria-selected={active === index}
            aria-controls="mode-panel"
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
          >
            <span>{item.number}</span>
            <strong>{item.label}</strong>
            <i aria-hidden="true">↗</i>
          </button>
        ))}
      </div>

      <div className={`mode-panel mode-${mode.id}`} id="mode-panel" role="tabpanel" aria-labelledby={`mode-tab-${mode.id}`}>
        <div className="mode-copy" key={`${mode.id}-copy`}>
          <span className="mode-badge">{mode.label} {locale === "ja" ? "モード" : "mode"}</span>
          <h3>{mode.title}</h3>
          <p>{mode.description}</p>
          <div className="mode-proof"><span>✓</span><p><small>{locale === "ja" ? "検証" : "Verification"}</small><strong>{mode.proof}</strong></p></div>
          {mode.id === "aim" && <a className="mode-deep-link" href={withBasePath(locale === "ja" ? "/jp/aim" : "/aim")}>{locale === "ja" ? "AIMを詳しく見る" : "Explore AIM in depth"} <span aria-hidden="true">→</span></a>}
        </div>
        <div className="mode-screen-wrap" key={`${mode.id}-image`}>
          <div className="mode-screen-glow" />
          <div className="screen-frame mode-screen">
            <div className="screen-topbar"><span className="traffic red" /><span className="traffic amber" /><span className="traffic green" /><span className="screen-label">EvoFlux · {mode.label}</span></div>
            <img src={withBasePath(mode.image)} alt={mode.alt} />
            {mode.id === "work" && <span className="mode-session-privacy" aria-hidden="true" />}
          </div>
        </div>
      </div>
    </div>
  );
}
