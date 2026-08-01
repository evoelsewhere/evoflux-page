import type { Metadata } from "next";
import { AimPageContent } from "../../aim/page";
import { withBasePath } from "../../base-path";

export const metadata: Metadata = {
  title: "AIM — AI Innovation Modernization | EvoFlux",
  description: "レガシーを安全に理解・変換し、機能同等性を証明するEvoFluxのAI Innovation Modernization基盤。",
  keywords: ["EvoFlux AIM", "AI Innovation Modernization", "レガシーモダナイゼーション", "機能同等性"],
  alternates: { canonical: withBasePath("/jp/aim/"), languages: { en: withBasePath("/aim/"), ja: withBasePath("/jp/aim/") } },
};

export default function JapaneseAimPage() {
  return <AimPageContent locale="ja" />;
}
