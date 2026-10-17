"use client";

import { useEffect } from "react";

/** Locomotive Scroll v5 on the whole page; skipped for reduced motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const md = window.matchMedia("(min-width: 768px)");
    let scroll: { destroy(): void } | undefined;
    let cancelled = false;
    let generation = 0;

    const start = () => {
      const gen = ++generation;
      scroll?.destroy();
      scroll = undefined;
      import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
        if (cancelled || gen !== generation) return;
        // Desktop offset clears the fixed nav. Phones have no nav, so keep only a small inset.
        scroll = new LocomotiveScroll({
          lenisOptions: { lerp: 0.1, anchors: { offset: md.matches ? -96 : -16 } },
        });
      });
    };

    start();
    md.addEventListener("change", start);
    return () => {
      cancelled = true;
      generation += 1;
      md.removeEventListener("change", start);
      scroll?.destroy();
    };
  }, []);

  return null;
}
