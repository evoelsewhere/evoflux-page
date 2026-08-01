import type { Metadata } from "next";
import { withBasePath } from "../base-path";
import { HomePageContent } from "../page";

export const metadata: Metadata = {
  title: "EvoFlux FHM — FPT Japan向けOpen Cowork AI・AIM",
  description: "FHM Q9、FPT、FPT Japan（FJP）のためのOpen Cowork AI。Work、Coding、WebBridge、AIMモダナイゼーションを一つのローカルファースト環境へ。",
  keywords: ["EvoFlux", "EvoFlux FHM", "FHM Q9", "FPT Japan", "FJP", "Cowork", "Open Cowork", "AIM", "AI Innovation Modernization"],
  alternates: { canonical: withBasePath("/jp/"), languages: { en: withBasePath("/"), ja: withBasePath("/jp/") } },
};

export default function JapaneseHomePage() {
  return <HomePageContent locale="ja" />;
}
