import type { Metadata } from "next";
import { AimPageContent } from "../../aim/page";
import { withBasePath } from "../../base-path";

export const metadata: Metadata = {
  title: "AIM — AI Innovation Modernization | EvoFlux FHM",
  description: "FHM Q9とFPT Japan（FJP）のためのEvoFlux AIM。レガシーを安全に理解・変換し、機能同等性を証明するAI Innovation Modernization基盤。",
  keywords: ["EvoFlux AIM", "AI Innovation Modernization", "FHM Q9", "FPT Japan", "FJP", "レガシーモダナイゼーション"],
  alternates: { canonical: withBasePath("/jp/aim/"), languages: { en: withBasePath("/aim/"), ja: withBasePath("/jp/aim/") } },
};

export default function JapaneseAimPage() {
  return <AimPageContent locale="ja" />;
}
