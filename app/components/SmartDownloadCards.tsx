"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { withBasePath } from "../base-path";

const RELEASE_VERSION = "v0.0.5";
const RELEASE_TAG = RELEASE_VERSION;
const RELEASE_BASE_URL = `https://github.com/evoelsewhere/evoflux-page/releases/download/${RELEASE_TAG}`;
const APPLE_SILICON_URL = `${RELEASE_BASE_URL}/EvoFlux-${RELEASE_VERSION}-macOS-Apple-Silicon.dmg`;
const INTEL_URL = `${RELEASE_BASE_URL}/EvoFlux-${RELEASE_VERSION}-macOS-Intel.dmg`;
const WINDOWS_URL = `${RELEASE_BASE_URL}/EvoFlux-${RELEASE_VERSION}-Windows-x64.exe`;
const ARCH_STORAGE_KEY = "evoflux_mac_architecture";

type MacArchitecture = "silicon" | "intel";
type SelectionSource = "recommended" | "detected" | "selected";
type DownloadPlatform = "macos" | "windows";
type PendingDownload = { platform: DownloadPlatform; url: string };

type NavigatorUAData = {
  getHighEntropyValues?: (hints: string[]) => Promise<{ architecture?: string }>;
};

function architectureFromValue(value = ""): MacArchitecture | null {
  const normalized = value.toLowerCase();
  if (/arm|aarch64/.test(normalized)) return "silicon";
  if (/x86|amd64|x64|intel/.test(normalized)) return "intel";
  return null;
}

function architectureFromWebGL(): MacArchitecture | null {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl || !(gl instanceof WebGLRenderingContext)) return null;
    const extension = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = extension ? String(gl.getParameter(extension.UNMASKED_RENDERER_WEBGL)) : "";
    if (/apple\s+(m\d|gpu)|apple m\d/i.test(renderer)) return "silicon";
    if (/intel/i.test(renderer)) return "intel";
  } catch {
    // Privacy-focused browsers can block renderer inspection; the recommended build remains available.
  }
  return null;
}

async function detectMacArchitecture(): Promise<MacArchitecture | null> {
  const uaData = (navigator as Navigator & { userAgentData?: NavigatorUAData }).userAgentData;
  try {
    const values = await uaData?.getHighEntropyValues?.(["architecture"]);
    const fromUA = architectureFromValue(values?.architecture);
    if (fromUA) return fromUA;
  } catch {
    // Continue with local graphics detection when high-entropy hints are unavailable.
  }
  return architectureFromWebGL();
}

export function SmartDownloadCards({ locale = "en" }: { locale?: "en" | "ja" }) {
  const [architecture, setArchitecture] = useState<MacArchitecture>("silicon");
  const [source, setSource] = useState<SelectionSource>("recommended");
  const [deviceOS, setDeviceOS] = useState<"mac" | "windows" | "other">("other");
  const [pendingDownload, setPendingDownload] = useState<PendingDownload | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    const userAgent = `${navigator.userAgent} ${navigator.platform}`;
    const isMac = /Mac/i.test(userAgent);
    const isWindows = /Win/i.test(userAgent);
    setDeviceOS(isMac ? "mac" : isWindows ? "windows" : "other");

    let stored: string | null = null;
    try {
      stored = localStorage.getItem(ARCH_STORAGE_KEY);
    } catch {
      // Storage can be unavailable in private browsing; detection still works without persistence.
    }
    if (stored === "silicon" || stored === "intel") {
      setArchitecture(stored);
      setSource("selected");
      return () => { active = false; };
    }

    if (isMac) {
      void detectMacArchitecture().then((detected) => {
        if (!active || !detected) return;
        setArchitecture(detected);
        setSource("detected");
      });
    }
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!pendingDownload) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusPrimaryAction = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("[data-dialog-primary]")?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPendingDownload(null);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusPrimaryAction);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [pendingDownload]);

  const chooseArchitecture = (next: MacArchitecture) => {
    setArchitecture(next);
    setSource("selected");
    try {
      localStorage.setItem(ARCH_STORAGE_KEY, next);
    } catch {
      // Keep the in-memory selection when the browser blocks local storage.
    }
  };

  const isJapanese = locale === "ja";
  const architectureLabel = architecture === "silicon" ? "Apple silicon" : "Intel";
  const macUrl = architecture === "silicon" ? APPLE_SILICON_URL : INTEL_URL;
  const statusLabel = source === "detected"
    ? (isJapanese ? "自動検出" : "Auto-detected")
    : source === "selected"
      ? (isJapanese ? "選択済み" : "Selected")
      : (isJapanese ? "おすすめ" : "Recommended");

  const openDownloadNotice = (event: MouseEvent<HTMLAnchorElement>, platform: DownloadPlatform, url: string) => {
    event.preventDefault();
    setPendingDownload({ platform, url });
  };

  const notice = pendingDownload?.platform === "windows"
    ? {
        eyebrow: isJapanese ? "Windows ダウンロード案内" : "Windows download note",
        title: isJapanese ? "EvoFluxを保存する前に" : "Before you save EvoFlux",
        intro: isJapanese
          ? "ブラウザーやWindowsが、インターネットから取得した新しいアプリについて確認を表示する場合があります。"
          : "Your browser or Windows may ask you to confirm a new app downloaded from the internet.",
        path: isJapanese ? "ダウンロード → 保存 → 詳細表示 → 保持する" : "Downloads → Keep → Show more → Keep anyway",
        steps: isJapanese
          ? [
              "EdgeまたはChromeで警告が表示されたら、ダウンロード一覧を開きます。",
              "「保存」を選び、「詳細表示」から「保持する」を選択します。",
              "起動時にSmartScreenが表示された場合は、「詳細情報」→「実行」を選びます。",
            ]
          : [
              "If Edge or Chrome warns about the file, open your Downloads list.",
              "Choose Keep, then Show more → Keep anyway.",
              "If SmartScreen appears when opening EvoFlux, choose More info → Run anyway.",
            ],
      }
    : {
        eyebrow: isJapanese ? "macOS セキュリティ案内" : "macOS security note",
        title: isJapanese ? "EvoFluxを開く前に" : "Before you open EvoFlux",
        intro: isJapanese
          ? "macOSがApp Store以外からダウンロードしたアプリを最初だけブロックする場合があります。"
          : "macOS may block an app downloaded outside the App Store the first time you open it.",
        path: isJapanese ? "システム設定 → プライバシーとセキュリティ" : "System Settings → Privacy & Security",
        steps: isJapanese
          ? [
              "EvoFluxをダウンロードし、通常どおり開きます。",
              "ブロックされた場合は、「システム設定」→「プライバシーとセキュリティ」を開きます。",
              "セキュリティ欄でEvoFluxの「このまま開く」を選び、確認します。",
            ]
          : [
              "Download EvoFlux and try opening it normally.",
              "If macOS blocks it, open System Settings → Privacy & Security.",
              "In Security, find EvoFlux, choose Open Anyway, then confirm.",
            ],
      };

  return (
    <>
      <div className="download-grid">
        <article
          className={`download-card download-card-mac download-card-${architecture}${deviceOS === "mac" ? " is-device-match" : ""}`}
          data-auto-detect="macos"
          data-detected-architecture={architecture}
        >
          <div className="download-visual" aria-hidden="true">
            <span className="download-device-pill"><i />{statusLabel} · {architectureLabel}</span>
            <i className="platform-mark"><img src={withBasePath("/platforms/apple.svg")} alt="" /></i>
          </div>
          <div className="download-copy">
            <strong>{isJapanese ? "Mac版EvoFlux" : "EvoFlux for Mac"}</strong>
            <small>macOS · {architectureLabel} · {RELEASE_VERSION}</small>
            <a className="download-button" href={macUrl} download onClick={(event) => openDownloadNotice(event, "macos", macUrl)}>
              {isJapanese ? "ダウンロード" : "Download"} <i aria-hidden="true">↓</i>
            </a>
          </div>
          <div className="download-arch-switch" role="group" aria-label={isJapanese ? "Macの種類を選択" : "Choose Mac architecture"}>
            <span>{isJapanese ? "Macの種類" : "Mac type"}</span>
            <button
              type="button"
              aria-pressed={architecture === "silicon"}
              data-download-url={APPLE_SILICON_URL}
              onClick={() => chooseArchitecture("silicon")}
            >Apple silicon</button>
            <button
              type="button"
              aria-pressed={architecture === "intel"}
              data-download-url={INTEL_URL}
              onClick={() => chooseArchitecture("intel")}
            >Intel</button>
          </div>
        </article>

        <a
          className={`download-card download-card-windows${deviceOS === "windows" ? " is-device-match" : ""}`}
          href={WINDOWS_URL}
          download
          onClick={(event) => openDownloadNotice(event, "windows", WINDOWS_URL)}
        >
          <span className="download-visual" aria-hidden="true">
            {deviceOS === "windows" && <span className="download-device-pill"><i />{isJapanese ? "このデバイス" : "This device"}</span>}
            <i className="platform-mark"><img src={withBasePath("/platforms/windows.svg")} alt="" /></i>
          </span>
          <span className="download-copy">
            <strong>{isJapanese ? "Windows版EvoFlux" : "EvoFlux for Windows"}</strong>
            <small>{isJapanese ? "Windows 10以降" : "Windows 10 or later"} · {RELEASE_VERSION}</small>
            <b>{isJapanese ? "ダウンロード" : "Download"} <i>↓</i></b>
          </span>
        </a>
      </div>

      {pendingDownload && (
        <div
          className="download-notice-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setPendingDownload(null);
          }}
        >
          <div
            className={`download-notice download-notice-${pendingDownload.platform}`}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-notice-title"
            aria-describedby="download-notice-description"
          >
            <button
              className="download-notice-close"
              type="button"
              aria-label={isJapanese ? "閉じる" : "Close"}
              onClick={() => setPendingDownload(null)}
            >×</button>
            <div className="download-notice-heading">
              <span className="download-notice-icon" aria-hidden="true">
                <img
                  src={withBasePath(pendingDownload.platform === "macos" ? "/platforms/apple.svg" : "/platforms/windows.svg")}
                  alt=""
                />
              </span>
              <div>
                <span className="download-notice-eyebrow">{notice.eyebrow}</span>
                <h2 id="download-notice-title">{notice.title}</h2>
              </div>
            </div>
            <p id="download-notice-description" className="download-notice-intro">{notice.intro}</p>
            <div className="download-notice-path"><span aria-hidden="true">⌁</span>{notice.path}</div>
            <ol className="download-notice-steps">
              {notice.steps.map((step, index) => (
                <li key={step}><span>{index + 1}</span><p>{step}</p></li>
              ))}
            </ol>
            <p className="download-notice-trust">
              <i aria-hidden="true">✓</i>
              {isJapanese
                ? "公式EvoFluxサイトから取得したインストーラーのみ許可してください。"
                : "Only approve the installer downloaded from the official EvoFlux website."}
            </p>
            <div className="download-notice-actions">
              <button type="button" onClick={() => setPendingDownload(null)}>
                {isJapanese ? "今はしない" : "Not now"}
              </button>
              <a data-dialog-primary href={pendingDownload.url} download onClick={() => setPendingDownload(null)}>
                {isJapanese ? `${RELEASE_VERSION}をダウンロード` : `Download ${RELEASE_VERSION}`} <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
