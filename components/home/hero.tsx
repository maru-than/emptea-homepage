"use client";

import { useEffect, useState } from "react";
import { APP_STORE, AppIcon } from "@/components/home/brand";
import { PillButton } from "@/components/home/chrome";
import { Phone, Shot } from "@/components/home/phone";
import { cn } from "@/lib/utils";

const INTERVAL = 4500;

const slides = [
  { src: "/screens/home-charts.jpg", alt: "Crank charts with the training heatmap", stat: "15 wk", label: "training streak" },
  { src: "/screens/home-body.jpg", alt: "Crank body map colored by trained muscles", stat: "13", label: "muscles levelled up" },
  { src: "/screens/workout-hub.jpg", alt: "Crank workout tab with today's plan", stat: "4,642 kg", label: "lifted today" },
];

/** Status cards that stream out along the tunnel. x/y is where each one ends up. */
const flyers = [
  { title: "New PR", body: "Bench Press · 95 kg", x: "38vw", y: "-60px", delay: "0s" },
  { title: "Rest", body: "1:51 left · set 3 of 4", x: "-40vw", y: "-90px", delay: "1.5s" },
  { title: "15 weeks straight", body: "Consistency widget updated", x: "42vw", y: "120px", delay: "3s" },
  { title: "Push A", body: "Done in 64 min · 2 PRs", x: "-38vw", y: "110px", delay: "4.5s" },
  { title: "Leaderboard", body: "#4 worldwide · strength", x: "36vw", y: "20px", delay: "6s" },
  { title: "Squat", body: "+5 kg this month", x: "-42vw", y: "10px", delay: "7.5s" },
];

export function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  const current = slides[slide];

  return (
    <section className="px-2 pt-2">
      <div className="relative overflow-hidden rounded-t-3xl pt-28 md:pt-32">
        <div className="absolute inset-x-0 top-0 h-[85%] rounded-3xl bg-gradient-to-b from-[#1c1c1e] to-paper" />
        <div className="cloud left-[-6%] top-[-4%] h-48 w-[40%]" />
        <div className="cloud right-[-4%] top-[2%] h-40 w-[36%]" />
        <div className="cloud left-[30%] top-[-8%] h-28 w-[30%] opacity-70" />
        <div className="tunnel" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
          <h1 className="text-display max-w-[760px]">The toolkit for a better you</h1>
          <p className="text-lead max-w-[600px] text-ink/60">
            Starting with Crank, the workout tracker built for speed. More is on the way.
          </p>
          <PillButton href={APP_STORE} className="mt-2">
            Get
          </PillButton>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
          {flyers.map((f) => (
            <div
              key={f.title}
              className="fly flex w-56 items-center gap-3 rounded-2xl bg-mist/90 p-3 text-left ring-1 ring-inset ring-white/10 backdrop-blur"
              style={{ "--fly-x": f.x, "--fly-y": f.y, "--fly-delay": f.delay } as React.CSSProperties}
            >
              <AppIcon app="crank" className="w-10 shadow-none" />
              <div>
                <p className="text-[13px] font-semibold leading-tight">{f.title}</p>
                <p className="text-[12px] text-ink/60">{f.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto mt-12 flex h-[520px] w-full max-w-[560px] justify-center md:h-[600px]">
          <div className="relative h-fit">
            <Phone className="w-[290px] md:w-[320px]">
              {slides.map((s, i) => (
                <div
                  key={s.src}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700",
                    i === slide ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden={i !== slide}
                >
                  <Shot src={s.src} alt={s.alt} />
                </div>
              ))}
            </Phone>
          </div>
          <div className="absolute bottom-28 right-[-2%] z-30 hidden w-44 md:flex flex-col gap-4 rounded-[36px] bg-mist p-5 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-inset ring-white/10 md:right-[2%] md:w-56">
            <div className="flex items-center justify-between">
              <AppIcon app="crank" className="w-9 md:w-11" />
              <span className="flex gap-1.5">
                {slides.map((s, i) => (
                  <span
                    key={s.src}
                    className={cn("size-1.5 rounded-full transition-colors", i === slide ? "bg-white" : "bg-white/25")}
                  />
                ))}
              </span>
            </div>
            <div key={slide} className="animate-in fade-in slide-in-from-bottom-1 duration-500">
              <p className="text-[30px] font-semibold leading-none md:text-[36px]">{current.stat}</p>
              <p className="mt-1 text-[12px] text-white/60 md:text-[13px]">{current.label}</p>
            </div>
          </div>
        </div>

        {/* fade the cut-off phone and halo into the next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-56 bg-gradient-to-b from-transparent to-paper" />
      </div>
    </section>
  );
}
