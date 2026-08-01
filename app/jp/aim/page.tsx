import type { Metadata } from "next";
import { AimPageContent } from "../../aim/page";

export const metadata: Metadata = {
  title: "AIM — AIイノベーション・モダナイゼーション | EvoFlux",
  description: "レガシーシステムを安全に理解・変換し、機能同等性を証明するための統制された移行コントロールプレーン。",
  alternates: { languages: { en: "/aim", ja: "/jp/aim" } },
};

export default function JapaneseAimPage() {
  return <AimPageContent locale="ja" />;
}
