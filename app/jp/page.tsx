import type { Metadata } from "next";
import { withBasePath } from "../base-path";
import { HomePageContent } from "../page";

export const metadata: Metadata = {
  title: "EvoFlux — Open Cowork AI・AIM",
  description: "Work、Coding、WebBridge、AIMモダナイゼーションを一つのローカルファースト環境に統合するOpen Cowork AI。",
  keywords: ["EvoFlux", "Cowork", "Open Cowork", "AIM", "AI Innovation Modernization"],
  alternates: { canonical: withBasePath("/jp/"), languages: { en: withBasePath("/"), ja: withBasePath("/jp/") } },
};

export default function JapaneseHomePage() {
  return <HomePageContent locale="ja" />;
}
