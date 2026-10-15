import Image from "next/image";
import { BatteryFull, Search, Signal, TrendingUp, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

/** iPhone 17 Pro Max frame from the Figma phone simulator. Width drives everything. */
export function Phone({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative aspect-[626/1287] shrink-0 self-start drop-shadow-[0_28px_45px_rgba(0,0,0,0.55)]", className)}>
      <div className="absolute inset-[1.79%_4.47%_1.79%_4.63%] flex flex-col overflow-hidden rounded-[11.95%/5.48%] bg-black text-ink">
        {children}
      </div>
      <Image
        src="/iphone-17-pro-max.png"
        alt=""
        fill
        sizes="320px"
        className="pointer-events-none select-none"
        priority
      />
    </div>
  );
}

/** A real app screenshot filling the screen (status bar included). */
export function Shot({ src, alt = "", sizes = "320px" }: { src: string; alt?: string; sizes?: string }) {
  return <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />;
}

/** Mock screen chrome: island, status bar and padded content. */
export function Screen({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex shrink-0 items-center justify-between px-7 pb-2 pt-[12px] text-[13px] font-semibold">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <Signal className="size-3.5" strokeWidth={2.5} />
          <Wifi className="size-3.5" strokeWidth={2.5} />
          <BatteryFull className="size-4" strokeWidth={2} />
        </span>
      </div>
      <div className="min-h-0 flex-1 px-4 pt-3">{children}</div>
    </>
  );
}

/* ── shared bits ─────────────────────────────────────────────────── */

function ScreenHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-4">
      <p className="text-[22px] font-semibold leading-tight">{title}</p>
      <p className="text-[12px] text-ink/60">{sub}</p>
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={cn(
        "flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors",
        on ? "bg-[#31c46b]" : "bg-ink/15",
      )}
    >
      <span className={cn("size-4 rounded-full bg-white transition-transform", on && "translate-x-4")} />
    </span>
  );
}

/* ── FlexMax and Rise (in development, drawn by hand) ───────────── */

/** FlexMax progress by area. */
export function FlexScreen() {
  return (
    <div>
      <ScreenHeader title="Flexibility" sub="FlexMax · measured weekly" />
      <div className="mb-4 flex items-center gap-2 rounded-xl bg-mist px-3 py-2 text-[12px] text-ink/50">
        <Search className="size-3.5" />
        Search 120+ stretches
      </div>
      <p className="mb-2 text-[11px] font-semibold text-ink/50">Range of motion</p>
      <div className="space-y-2">
        {[
          ["Hips", "+14°"],
          ["Hamstrings", "+9°"],
          ["Shoulders", "+6°"],
          ["Spine", "+4°"],
        ].map(([name, delta]) => (
          <div key={name} className="flex items-center justify-between rounded-xl bg-mist px-3 py-2.5">
            <span className="text-[13px] font-medium">{name}</span>
            <span className="flex items-center gap-1 text-[12px] font-semibold text-[#2f9e5a]">
              <TrendingUp className="size-3.5" />
              {delta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Rise focus session: the apps it pauses. */
export function FocusScreen() {
  const blocked = [
    ["Instagram", true],
    ["TikTok", true],
    ["X", true],
    ["YouTube", false],
    ["Reddit", true],
    ["Mail", false],
  ] as const;
  return (
    <div>
      <ScreenHeader title="Focus session" sub="Rise · 90 minutes, then a journal prompt" />
      <div className="mb-4 space-y-1.5 rounded-2xl bg-mist p-3">
        <span className="block h-2 w-11/12 rounded-full bg-ink/15" />
        <span className="block h-2 w-full rounded-full bg-ink/15" />
        <span className="block h-2 w-3/5 rounded-full bg-ink/15" />
      </div>
      <p className="mb-2 text-[11px] font-semibold text-ink/50">Paused until 11:30</p>
      <div className="space-y-1.5">
        {blocked.map(([name, on]) => (
          <div key={name} className="flex items-center justify-between rounded-xl bg-mist px-3 py-2">
            <span className="text-[13px] font-medium">{name}</span>
            <Toggle on={on} />
          </div>
        ))}
      </div>
    </div>
  );
}
