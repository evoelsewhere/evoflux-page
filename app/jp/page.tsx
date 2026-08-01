import type { Metadata } from "next";
import { HomePageContent } from "../page";

export const metadata: Metadata = {
  title: "EvoFlux — 実際の仕事を進めるAIエージェント",
  description: "Work、Coding、AIMを一つに統合した、ローカルファーストのデスクトップ・エージェントワークスペース。",
  alternates: { languages: { en: "/", ja: "/jp" } },
};

export default function JapaneseHomePage() {
  return <HomePageContent locale="ja" />;
}
