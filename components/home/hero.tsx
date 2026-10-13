"use client";

import { useEffect, useState } from "react";
import { APP_STORE, AppIcon, type AppId } from "@/components/home/brand";
import { PillButton } from "@/components/home/chrome";
import { FlexScreen, FocusScreen, Phone, Screen, Shot } from "@/components/home/phone";
import { cn } from "@/lib/utils";

const INTERVAL = 4500;

const slides: { screen: React.ReactNode; app: AppId; stat: string; label: string }[] = [
  { screen: <Shot src="/screens/home-charts.jpg" alt="Crank charts with the training heatmap" />, app: "crank", stat: "15 wk", label: "training streak" },
  { screen: <Screen><FlexScreen /></Screen>, app: "flexmax", stat: "+14°", label: "hip mobility this month" },
  { screen: <Screen><FocusScreen /></Screen>, app: "rise", stat: "2h 40m", label: "off social media today" },
];

/** Status cards that stream out along the tunnel. x/y is where each one ends up. */
const flyers: { app: AppId; title: string; body: string; x: string; y: string; delay: string }[] = [
  { app: "crank", title: "New PR", body: "Bench Press · 95 kg", x: "38vw", y: "-60px", delay: "0s" },
  { app: "rise", title: "Focus session", body: "Instagram paused · 90 min", x: "-40vw", y: "-90px", delay: "1.5s" },
  { app: "crank", title: "15 weeks straight", body: "Consistency widget updated", x: "42vw", y: "120px", delay: "3s" },
  { app: "flexmax", title: "Hips", body: "+14° range this month", x: "-38vw", y: "110px", delay: "4.5s" },
  { app: "crank", title: "Leaderboard", body: "#4 worldwide · strength", x: "36vw", y: "20px", delay: "6s" },
  { app: "rise", title: "Journal", body: "Evening entry saved", x: "-42vw", y: "10px", delay: "7.5s" },
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
      <div className="relative overflow-hidden rounded-3xl pt-28 md:pt-32">
        <div className="absolute inset-x-0 top-0 h-[85%] rounded-3xl bg-gradient-to-b from-[#121a33] to-paper" />
        <div className="cloud left-[-6%] top-[-4%] h-48 w-[40%]" />
        <div className="cloud right-[-4%] top-[2%] h-40 w-[36%]" />
        <div className="cloud left-[30%] top-[-8%] h-28 w-[30%] opacity-70" />
        <div className="tunnel" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
          <h1 className="text-display max-w-[760px]">The toolkit for a better you</h1>
          <p className="text-lead max-w-[600px] text-ink/60">
            Three apps for what compounds: strength, flexibility and a quiet mind.
          </p>
          <PillButton href={APP_STORE} className="mt-2">
            Get Crank
          </PillButton>
          <p className="flex items-center gap-2 text-[14px] font-medium text-ink/60">
            <span className="flex gap-1">
              <span className="size-2 rounded-full bg-ink" />
              <span className="size-2 rounded-full bg-green-700" />
              <span className="size-2 rounded-full bg-amber-700" />
            </span>
            Crank is live · FlexMax and Rise are in development
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
          {flyers.map((f) => (
            <div
              key={f.title}
              className="fly flex w-56 items-center gap-3 rounded-2xl bg-mist/90 p-3 text-left ring-1 ring-inset ring-white/10 backdrop-blur"
              style={{ "--fly-x": f.x, "--fly-y": f.y, "--fly-delay": f.delay } as React.CSSProperties}
            >
              <AppIcon app={f.app} className="w-10 shadow-none" />
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
              <div className="relative h-full">
                {slides.map((s, i) => (
                  <div
                    key={i}
                    className={cn(
                      "absolute inset-0 flex flex-col transition-opacity duration-700",
                      i === slide ? "opacity-100" : "opacity-0",
                    )}
                    aria-hidden={i !== slide}
                  >
                    {s.screen}
                  </div>
                ))}
              </div>
            </Phone>
          </div>
          <div className="absolute bottom-6 right-[-2%] flex w-44 flex-col gap-4 rounded-[36px] bg-mist p-5 text-white ring-1 ring-inset ring-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] md:right-[2%] md:w-56">
            <div className="flex gap-2">
              {(["crank", "flexmax", "rise"] as const).map((a) => (
                <AppIcon
                  key={a}
                  app={a}
                  className={cn("w-9 transition-opacity md:w-11", a !== current.app && "opacity-40")}
                />
              ))}
            </div>
            <div key={slide} className="animate-in fade-in slide-in-from-bottom-1 duration-500">
              <p className="text-[30px] font-semibold leading-none md:text-[36px]">{current.stat}</p>
              <p className="mt-1 text-[12px] text-white/60 md:text-[13px]">{current.label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
