import type { Metadata } from "next";
import { withBasePath } from "../base-path";
import { HomePageContent } from "../page";

export const metadata: Metadata = {
  title: "EvoFlux｜Cowork・Agentic Coding・AI Innovation Modernization",
  description: "Cowork、Agentic Coding、WebBridgeブラウザ自動化、AI Innovation Modernizationを統合するローカルファーストAIワークスペース。",
  keywords: ["EvoFlux", "Cowork", "Agentic Coding", "AIM", "AI Innovation Modernization"],
  alternates: { canonical: withBasePath("/jp/"), languages: { en: withBasePath("/"), ja: withBasePath("/jp/") } },
};

export default function JapaneseHomePage() {
  return <HomePageContent locale="ja" />;
}
