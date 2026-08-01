import type { Metadata } from "next";
import { AimPageContent } from "../../aim/page";
import { withBasePath } from "../../base-path";

export const metadata: Metadata = {
  title: "AIM — AIイノベーション・モダナイゼーション | EvoFlux",
  description: "レガシーシステムを安全に理解・変換し、機能同等性を証明するための統制された移行コントロールプレーン。",
  alternates: { languages: { en: withBasePath("/aim"), ja: withBasePath("/jp/aim") } },
};

export default function JapaneseAimPage() {
  return <AimPageContent locale="ja" />;
}
