"use client";

import { useEffect } from "react";

/** Locomotive Scroll v5 on the whole page; skipped for reduced motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let scroll: { destroy(): void } | undefined;
    let cancelled = false;
    import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
      if (cancelled) return;
      // offset keeps anchored sections clear of the fixed nav
      scroll = new LocomotiveScroll({ lenisOptions: { lerp: 0.1, anchors: { offset: -96 } } });
    });
    return () => {
      cancelled = true;
      scroll?.destroy();
    };
  }, []);

  return null;
}
