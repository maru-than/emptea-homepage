"use client";

import { useEffect, useRef, useState } from "react";
import { APP_STORE } from "@/components/home/brand";
import { Pill } from "@/components/home/chrome";
import { Phone, Shot } from "@/components/home/phone";
import { cn } from "@/lib/utils";

const INTERVAL = 6000;

const tabs = [
  {
    label: "log sets in seconds",
    lead: "fast enough for between sets.",
    body: "88 ready-made plans or your own, last time's weight and reps already filled in.",
    src: "/screens/tracker.jpg",
    alt: "Crank workout tracker with sets being logged",
  },
  {
    label: "map every muscle",
    lead: "see what you trained.",
    body: "front and back, 14 muscles, colored by what you hit and what you skipped.",
    src: "/screens/body-front.jpg",
    alt: "Crank body map colored by trained muscles",
  },
  {
    label: "chase your PRs",
    lead: "know where you stand.",
    body: "every lift graded from beginner to elite against lifters worldwide, with the gap to the next tier.",
    src: "/screens/standards.jpg",
    alt: "Crank PR standards per muscle",
  },
  {
    label: "beat your friends",
    lead: "lift for lift.",
    body: "leaderboards by workouts, volume, strength or streak, worldwide or your country.",
    src: "/screens/leaderboard-world.jpg",
    alt: "Crank worldwide leaderboard podium",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  // Auto-advance until the visitor picks a tab, and never under reduced motion.
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!auto || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % tabs.length), INTERVAL);
    return () => clearTimeout(id);
  }, [active, auto, paused]);

  const select = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  const tab = tabs[active];

  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-28 md:px-10 md:pt-42">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-display text-balance">
          healthmaxxing{" "}
          <span className="block font-serif italic tracking-[-0.02em] text-faint">
            without distractions{" "}
            <span className="inline-block not-italic [font-family:'Apple_Color_Emoji','Segoe_UI_Emoji',sans-serif]">
              🍵
            </span>
          </span>
        </h1>
        <p className="mt-8 max-w-[600px] text-balance text-[16px] leading-relaxed text-dim">
          Your phone, turned into a companion for your body, mind and soul. Starting with Crank, the workout tracker
          built for strength. Made in Switzerland.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Pill href={APP_STORE} arrow>
            Get Crank
          </Pill>
          <Pill href="#features" variant="panel">
            See what it does
          </Pill>
        </div>
      </div>

      <div
        className="mt-16 flex flex-col items-center md:mt-20"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="relative h-[480px] w-full overflow-hidden sm:h-[560px]">
          <div className="flex justify-center">
            <Phone className="w-[290px] sm:w-[330px]">
              {tabs.map((t, i) => (
                <div
                  key={t.src}
                  id={`hero-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`hero-tab-${i}`}
                  className={cn("absolute inset-0 transition-opacity duration-700", i === active ? "opacity-100" : "opacity-0")}
                  aria-hidden={i !== active}
                >
                  <Shot src={t.src} alt={t.alt} sizes="330px" priority={i === 0} />
                </div>
              ))}
            </Phone>
          </div>
          {/* phone dissolves into the page */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
        </div>

        {/* wraps to two rows on phones so every tab stays visible */}
        <div
          role="tablist"
          aria-label="What Crank does"
          className="-mt-6 flex max-w-full flex-wrap justify-center gap-1 rounded-[26px] bg-panel p-1 sm:flex-nowrap sm:rounded-full"
        >
          {tabs.map((t, i) => (
            <button
              key={t.label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`hero-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={i === active}
              aria-controls={`hero-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => {
                let next: number;
                if (e.key === "ArrowRight") next = (active + 1) % tabs.length;
                else if (e.key === "ArrowLeft") next = (active + tabs.length - 1) % tabs.length;
                else if (e.key === "Home") next = 0;
                else if (e.key === "End") next = tabs.length - 1;
                else return;
                e.preventDefault();
                select(next);
                tabRefs.current[next]?.focus();
              }}
              className={cn(
                "relative shrink-0 cursor-pointer whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:px-5 sm:text-sm",
                i === active ? "text-ink" : "text-dim hover:text-ink",
              )}
            >
              {i === active && (
                <span className="absolute inset-0 rounded-full bg-paper shadow-[0_4px_28px_rgba(0,0,0,0.07)]" />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        {/* the live region stays mounted; only its text is swapped */}
        <p
          aria-live="polite"
          className="mt-6 min-h-[3.2em] max-w-[440px] text-balance text-center text-[16px] leading-relaxed text-dim"
        >
          <span key={active} className="block motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-500">
            <span className="text-ink">{tab.lead}</span> {tab.body}
          </span>
        </p>
      </div>
    </section>
  );
}
