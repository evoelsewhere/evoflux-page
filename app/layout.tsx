import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { BASE_PATH, withBasePath } from "./base-path";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pagesLocaleBootstrap = BASE_PATH
  ? `(()=>{try{const b=${JSON.stringify(BASE_PATH)},u=new URL(location.href),p=u.pathname.replace(/\\/$/,"")||"/",q=u.searchParams.get("lang"),k="evoflux_locale";if(q==="en"||q==="ja"){localStorage.setItem(k,q);u.searchParams.delete("lang");history.replaceState(null,"",u.pathname+(u.search||"")+(u.hash||""));}if(p===b+"/jp"||p===b+"/jp/aim"){localStorage.setItem(k,"ja");return;}if(p===b||p===b+"/aim"){const s=localStorage.getItem(k),l=s==="en"||s==="ja"?s:(navigator.language||"").toLowerCase().startsWith("ja")?"ja":"en";if(l==="ja")location.replace(b+(p.endsWith("/aim")?"/jp/aim/":"/jp/"));}}catch{}})();`
  : "";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
  const origin = `${protocol}://${host}`;
  const socialImage = `${origin}${withBasePath("/og.png")}`;

  return {
    metadataBase: new URL(origin),
    title: "EvoFlux — AI agents that do real work",
    description:
      "A local-first desktop agent workspace with layered sandboxing, real-browser WebBridge, structural code intelligence, and governed legacy modernization.",
    keywords: [
      "AI agents",
      "agent harness",
      "local-first AI",
      "coding agent",
      "legacy modernization",
      "multi-agent workspace",
      "AI agent sandbox",
      "real browser AI agent",
      "WebBridge",
    ],
    icons: {
      icon: withBasePath("/evoflux-app-icon.png"),
      shortcut: withBasePath("/evoflux-app-icon.png"),
      apple: withBasePath("/evoflux-app-icon.png"),
    },
    openGraph: {
      type: "website",
      siteName: "EvoFlux",
      title: "EvoFlux — AI agents that do real work",
      description: "Orchestrated. Sandboxed. Real-browser capable. One local-first desktop workspace for Work, Coding, and AIM.",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "EvoFlux — AI agents that do real work" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "EvoFlux — AI agents that do real work",
      description: "Orchestrated. Sandboxed. Real-browser capable.",
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#f7f7f4",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {pagesLocaleBootstrap && <script dangerouslySetInnerHTML={{ __html: pagesLocaleBootstrap }} />}
        {children}
      </body>
    </html>
  );
}
