"use client";

import { useEffect, useRef } from "react";

/**
 * Cards stacked on top of each other. On large screens the section pins and,
 * as you scroll, the front card slides up and fades while the next one
 * steps forward. Smaller screens get a plain list.
 */
export function StackedCards({ children }: { children: React.ReactNode[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const count = children.length;

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    let frame = 0;

    const render = () => {
      frame = 0;
      const track = trackRef.current;
      if (!track) return;
      if (!wide.matches) {
        cardRefs.current.forEach((card) => card?.removeAttribute("style"));
        return;
      }
      const rect = track.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1) * (count - 1);

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const t = progress - i;
        if (t >= 0) {
          // front card: rises and fades with the scroll
          const p = Math.min(t, 1);
          card.style.transform = `translate3d(0, ${-p * 60}%, 0)`;
          // fades and softens early so it never muddles the next card
          card.style.opacity = String(Math.max(1 - p * 2.5, 0));
          card.style.filter = `blur(${p * 12}px)`;
        } else {
          // waiting cards: peeking out below, each a little smaller
          const d = Math.min(-t, 3);
          card.style.transform = `translate3d(0, ${d * 22}px, 0) scale(${1 - d * 0.05})`;
          card.style.opacity = String(d > 2 ? 3 - d : 1);
          card.style.filter = `brightness(${1 - d * 0.22})`;
        }
        card.style.zIndex = String(count - i);
        card.style.pointerEvents = t > 0.5 ? "none" : "";
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    wide.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      wide.removeEventListener("change", schedule);
    };
  }, [count]);

  return (
    <div ref={trackRef} className="lg:h-[var(--stack-h)]" style={{ "--stack-h": `${count * 100}vh` } as React.CSSProperties}>
      <div className="flex flex-col gap-4 lg:sticky lg:top-0 lg:h-screen lg:items-center lg:justify-center">
        <div className="relative flex w-full flex-col gap-4 lg:block lg:h-[620px]">
          {children.map((child, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="w-full origin-bottom will-change-transform lg:absolute lg:inset-0"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
