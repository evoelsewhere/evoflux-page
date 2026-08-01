"use client";

import { useEffect } from "react";
import { withBasePath } from "../base-path";

const AUTO_ADVANCE_MS = 3400;
const MANUAL_PAUSE_MS = 8000;

export function AimChainAutoScroll() {
  useEffect(() => {
    const stepIcons = ["connect", "adapt", "run", "scale"];
    document.querySelectorAll<HTMLElement>(".aim2-start-grid article").forEach((card, index) => {
      const icon = stepIcons[index];
      if (!icon) return;
      card.style.setProperty("--aim-step-icon", `url("${withBasePath(`/illustrations/aim-step-${icon}.png`)}")`);
      card.classList.add("has-generated-icon");
    });

    const track = document.querySelector<HTMLElement>(".aim2-chain-track");
    if (!track) return;

    const mobile = window.matchMedia("(max-width: 800px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cards = Array.from(track.querySelectorAll<HTMLElement>("article"));
    let pauseUntil = 0;
    let hovered = false;

    const cardLeft = (card: HTMLElement) => card.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    const pause = () => { pauseUntil = Date.now() + MANUAL_PAUSE_MS; };
    const enter = () => { hovered = true; };
    const leave = () => { hovered = false; pause(); };

    const advance = () => {
      if (!mobile.matches || reducedMotion.matches || hovered || Date.now() < pauseUntil || cards.length < 2) return;
      const positions = cards.map(cardLeft);
      const current = positions.reduce((best, left, index) => Math.abs(left - track.scrollLeft) < Math.abs(positions[best] - track.scrollLeft) ? index : best, 0);
      const next = (current + 1) % cards.length;
      track.scrollTo({ left: positions[next], behavior: "smooth" });
    };

    track.addEventListener("pointerdown", pause, { passive: true });
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("wheel", pause, { passive: true });
    track.addEventListener("focusin", pause);
    track.addEventListener("mouseenter", enter);
    track.addEventListener("mouseleave", leave);
    const timer = window.setInterval(advance, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(timer);
      track.removeEventListener("pointerdown", pause);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("wheel", pause);
      track.removeEventListener("focusin", pause);
      track.removeEventListener("mouseenter", enter);
      track.removeEventListener("mouseleave", leave);
    };
  }, []);

  return null;
}
