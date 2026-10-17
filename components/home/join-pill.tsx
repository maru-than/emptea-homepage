"use client";

import { useEffect, useState } from "react";
import { APP_STORE, AppIcon } from "@/components/home/brand";

const pillClass =
  "fixed bottom-5 right-5 z-40 items-center gap-2.5 rounded-full bg-gradient-to-b from-[#fafafa] to-[#d4d4d6] py-2 pl-2 pr-5 text-[16px] font-semibold text-[#111] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,0,0,0.14),0_1px_2px_rgba(0,0,0,0.6),0_12px_28px_-8px_rgba(0,0,0,0.9)] ring-1 ring-black/40 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,0,0,0.14),0_2px_4px_rgba(0,0,0,0.6),0_18px_36px_-10px_rgba(0,0,0,0.9)] active:translate-y-0 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.6)]";

/** Desktop keeps the fixed "Join now" pill. Phones get "Get Crank" only after the hero. */
export function JoinPill() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href={APP_STORE} className={`${pillClass} hidden md:flex`}>
        <AppIcon
          app="crank"
          className="w-8 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.2),0_1px_1px_rgba(255,255,255,0.8)]"
        />
        Join now
      </a>
      {pastHero && (
        <a href={APP_STORE} className={`${pillClass} flex md:hidden`}>
          <AppIcon
            app="crank"
            className="w-8 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.2),0_1px_1px_rgba(255,255,255,0.8)]"
          />
          Get Crank
        </a>
      )}
    </>
  );
}
