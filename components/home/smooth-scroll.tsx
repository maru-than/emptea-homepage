"use client";

import { useEffect } from "react";

/** Locomotive Scroll v5. Off for reduced motion, and for coarse pointers below md. */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const md = window.matchMedia("(min-width: 768px)");
    const coarse = window.matchMedia("(pointer: coarse)");
    let scroll: { destroy(): void } | undefined;
    let cancelled = false;
    let generation = 0;

    const want = () => !reduce.matches && !(coarse.matches && !md.matches);

    const start = () => {
      const gen = ++generation;
      scroll?.destroy();
      scroll = undefined;
      if (!want()) return;
      import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
        if (cancelled || gen !== generation || !want()) return;
        // Desktop offset clears the fixed nav. A narrow fine pointer still has no nav.
        scroll = new LocomotiveScroll({
          lenisOptions: { lerp: 0.1, anchors: { offset: md.matches ? -96 : -16 } },
        });
      });
    };

    start();
    reduce.addEventListener("change", start);
    md.addEventListener("change", start);
    coarse.addEventListener("change", start);
    return () => {
      cancelled = true;
      generation += 1;
      reduce.removeEventListener("change", start);
      md.removeEventListener("change", start);
      coarse.removeEventListener("change", start);
      scroll?.destroy();
    };
  }, []);

  return null;
}
