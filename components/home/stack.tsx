"use client";

import { useEffect, useRef } from "react";

/**
 * Cards stacked on top of each other. On large screens the section pins and,
 * as you scroll, the front card slides up and fades while the next one
 * steps forward. Phones get a shorter version of that sequence. In between,
 * and when motion is reduced, the cards are a plain list.
 */
export function StackedCards({ children }: { children: React.ReactNode[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const count = children.length;

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const phone = window.matchMedia("(max-width: 767px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;

    const clear = () => {
      cardRefs.current.forEach((card) => card?.removeAttribute("style"));
    };

    const paint = (progressIndex: number, blur: boolean) => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const t = progressIndex - i;
        if (t >= 0) {
          const p = Math.min(t, 1);
          card.style.transform = `translate3d(0, ${-p * 60}%, 0)`;
          card.style.opacity = String(Math.max(1 - p * 2.5, 0));
          card.style.filter = blur ? `blur(${p * 12}px)` : "";
        } else {
          const d = Math.min(-t, 3);
          card.style.transform = `translate3d(0, ${d * 22}px, 0) scale(${1 - d * 0.05})`;
          card.style.opacity = String(d > 2 ? 3 - d : 1);
          card.style.filter = blur ? `brightness(${1 - d * 0.22})` : "";
        }
        card.style.zIndex = String(count - i);
        card.style.pointerEvents = t > 0.5 ? "none" : "";
      });
    };

    const render = () => {
      frame = 0;
      const track = trackRef.current;
      if (!track) return;
      if (phone.matches) {
        const rect = track.getBoundingClientRect();
        const travel = Math.max(rect.height - window.innerHeight * 0.78, 1);
        const progress = Math.min(Math.max(-rect.top / travel, 0), 1) * (count - 1);
        paint(progress, false);
        return;
      }
      if (!wide.matches) {
        clear();
        return;
      }
      const rect = track.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1) * (count - 1);
      paint(progress, true);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    wide.addEventListener("change", schedule);
    phone.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      wide.removeEventListener("change", schedule);
      phone.removeEventListener("change", schedule);
    };
  }, [count]);

  return (
    <div
      ref={trackRef}
      className="mobile-seq lg:h-[var(--stack-h)]"
      style={{ "--stack-h": `${count * 100}vh` } as React.CSSProperties}
    >
      <div className="mobile-seq-sticky flex flex-col gap-4 lg:sticky lg:top-0 lg:h-screen lg:items-center lg:justify-center">
        <div className="mobile-seq-stage relative flex w-full flex-col gap-4 lg:block lg:h-[620px]">
          {children.map((child, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="mobile-seq-card w-full origin-bottom lg:absolute lg:inset-0 lg:will-change-transform"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
