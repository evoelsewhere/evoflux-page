"use client";

import { useEffect, useState } from "react";
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

  return (
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
          <a className="download-button" href={macUrl} download>
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

      <a className={`download-card download-card-windows${deviceOS === "windows" ? " is-device-match" : ""}`} href={WINDOWS_URL} download>
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
  );
}
