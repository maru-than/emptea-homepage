"use client";

import { Children, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * A deck of cards that pile up while you scroll. Each card sticks a little lower than the one before, the next
 * card slides over it, and the cards underneath shrink and dim with every card that lands on top.
 *
 * Exposes two CSS variables on each card for its content to use:
 * --enter  0 → 1 as the card travels from the bottom of the viewport to its resting place
 * --depth  0 → 3, how many cards (fractionally) sit on top of it
 */
export function StackedCards({ children, className }: { children: React.ReactNode; className?: string }) {
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = cards.current.filter((el): el is HTMLDivElement => !!el);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    let tops: number[] = [];
    let frame = 0;

    const measure = () => {
      tops = els.map((el) => parseFloat(getComputedStyle(el).top) || 0);
    };

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const enter = els.map((el, i) => {
        const top = el.getBoundingClientRect().top;
        return Math.min(1, Math.max(0, (vh - top) / Math.max(1, vh - tops[i])));
      });
      els.forEach((el, i) => {
        let depth = 0;
        for (let j = i + 1; j < els.length; j++) depth += enter[j];
        el.style.setProperty("--enter", still.matches ? "1" : enter[i].toFixed(3));
        el.style.setProperty("--depth", still.matches ? "0" : Math.min(depth, 3).toFixed(3));
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    still.addEventListener("change", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      still.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        // resting line under the fixed header, and how far each card peeks below the one in front
        "flex flex-col [--stack-step:10px] [--stack-top:5rem] sm:[--stack-top:6.5rem]",
        className,
      )}
    >
      {Children.toArray(children).map((child, i) => (
        <div
          key={i}
          ref={(el) => {
            cards.current[i] = el;
          }}
          className="sticky top-[calc(var(--stack-top)+var(--i)*var(--stack-step))]"
          style={{ "--i": i } as React.CSSProperties}
        >
          <div
            className="relative origin-top will-change-transform"
            style={{ transform: "scale(calc(1 - var(--depth, 0) * 0.045))" }}
          >
            {child}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-panel bg-ink"
              style={{ opacity: "calc(var(--depth, 0) * 0.05)" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
