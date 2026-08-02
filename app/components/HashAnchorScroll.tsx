"use client";

import { useEffect } from "react";

function targetFromHash(hash: string): HTMLElement | null {
  if (!hash || hash === "#") return null;

  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return document.getElementById(hash.slice(1));
  }
}

export function HashAnchorScroll() {
  useEffect(() => {
    let firstFrame = 0;
    let secondFrame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const scrollToHash = (hash: string, smooth: boolean) => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(() => {
          targetFromHash(hash)?.scrollIntoView({
            behavior: smooth && !reducedMotion.matches ? "smooth" : "auto",
            block: "start",
          });
        });
      });
    };

    const syncCurrentHash = () => scrollToHash(window.location.hash, false);
    const onHashChange = () => scrollToHash(window.location.hash, true);
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const origin = event.target;
      if (!(origin instanceof Element)) return;
      const anchor = origin.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (
        !destination.hash ||
        destination.origin !== window.location.origin ||
        destination.pathname !== window.location.pathname ||
        destination.search !== window.location.search
      ) {
        return;
      }

      event.preventDefault();
      if (window.location.hash !== destination.hash) {
        window.history.pushState(null, "", destination.hash);
      }
      scrollToHash(destination.hash, true);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", syncCurrentHash);
    if (document.readyState === "complete") syncCurrentHash();
    else window.addEventListener("load", syncCurrentHash, { once: true });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", syncCurrentHash);
      window.removeEventListener("load", syncCurrentHash);
    };
  }, []);

  return null;
}
