import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BASE_PATH, withBasePath } from "./base-path";
import "./globals.css";

const SITE_URL = "https://evoflux.fhmq9.cloud";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EvoFlux FHM — Open Cowork AI & AIM for FPT Japan",
  description: "EvoFlux is the open cowork AI workspace for FHM Q9, FPT, FPT Japan (FJP): Work, Coding, browser automation, and AIM legacy modernization in one local-first desktop app.",
  applicationName: "EvoFlux",
  authors: [{ name: "FHM Q9", url: SITE_URL }],
  creator: "FHM Q9",
  publisher: "FHM Q9",
  category: "AI agent workspace",
  keywords: [
    "EvoFlux",
    "EvoFlux FHM",
    "FHM",
    "FHM Q9",
    "FPT",
    "FPT Japan",
    "FJP",
    "Cowork",
    "AI Cowork",
    "Open Cowork",
    "open source cowork",
    "AIM",
    "AI Innovation Modernization",
    "legacy modernization",
    "AI agents",
    "multi-agent workspace",
    "local-first AI",
    "coding agent",
    "browser automation agent",
    "WebBridge",
    "AI agent sandbox",
  ],
  alternates: { canonical: "/", languages: { en: "/", ja: "/jp/" } },
  manifest: "/site.webmanifest",
  icons: {
    icon: withBasePath("/evoflux-app-icon.png"),
    shortcut: withBasePath("/evoflux-app-icon.png"),
    apple: withBasePath("/evoflux-app-icon.png"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "EvoFlux FHM",
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    title: "EvoFlux FHM — Open Cowork AI & AIM for FPT Japan",
    description: "One local-first open cowork workspace for FHM Q9, FPT Japan, Work, Coding, browser automation, and AI Innovation Modernization.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "EvoFlux FHM open cowork AI workspace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EvoFlux FHM — Open Cowork AI & AIM",
    description: "Local-first AI cowork, Coding, browser automation, and AI Innovation Modernization for FHM Q9 and FPT Japan.",
    images: ["/og.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "EvoFlux FHM",
      alternateName: ["EvoFlux", "EvoFlux Cowork", "EvoFlux FPT Japan", "EvoFlux FJP"],
      description: "Open cowork AI workspace for FHM Q9, FPT, FPT Japan, and FJP teams.",
      inLanguage: ["en", "ja"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "EvoFlux",
      alternateName: ["EvoFlux FHM", "Open Cowork AI", "EvoFlux AIM"],
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "AI agent workspace",
      operatingSystem: "macOS, Windows",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["AI cowork", "Coding agents", "WebBridge browser automation", "Layered sandbox", "AIM legacy modernization"],
      audience: { "@type": "Audience", audienceType: "FHM Q9, FPT, FPT Japan, FJP engineering and knowledge-work teams" },
      keywords: "EvoFlux FHM, FHM Q9, FPT Japan, FJP, Cowork, Open Cowork, AIM, AI Innovation Modernization",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "FHM Q9",
      url: SITE_URL,
      brand: { "@type": "Brand", name: "EvoFlux" },
    },
  ],
};

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
