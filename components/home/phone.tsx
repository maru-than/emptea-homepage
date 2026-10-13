import Image from "next/image";
import { BatteryFull, Check, ChevronRight, Search, Signal, Star, TrendingUp, Wifi } from "lucide-react";
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

function Row({
  title,
  meta,
  dot,
  right,
}: {
  title: string;
  meta: string;
  dot: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-mist px-3 py-2.5">
      <span className="size-2 shrink-0 rounded-full" style={{ background: dot }} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold leading-tight">{title}</p>
        <p className="truncate text-[11px] text-ink/60">{meta}</p>
      </div>
      {right ?? <ChevronRight className="size-4 text-ink/40" />}
    </div>
  );
}

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

function Bars({ values, color }: { values: number[]; color: string }) {
  return (
    <div className="flex h-24 items-end gap-1.5">
      {values.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-t-md"
          style={{ height: `${v}%`, background: color, opacity: 0.35 + (i / values.length) * 0.65 }}
        />
      ))}
    </div>
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

/* ── Crank extras, drawn by hand where no screenshot exists ─────── */

/** Rest timer between sets. */
export function RestScreen() {
  return (
    <div>
      <ScreenHeader title="Rest" sub="Bench Press · set 3 of 4" />
      <div className="mb-4 rounded-2xl bg-mist p-3">
        <p className="text-[24px] font-semibold leading-none">1:51</p>
        <p className="mb-3 text-[11px] text-ink/60">of 3:00 · also on your lock screen</p>
        <Bars values={[100, 100, 100, 90, 70, 50, 30, 10]} color="#415eee" />
      </div>
      <div className="space-y-2">
        <Row title="Last set" meta="95 kg × 5 · matched" dot="#31c46b" right={<Check className="size-4 text-[#31c46b]" />} />
        <Row title="Next" meta="Bent Over Row · 82.5 kg × 8" dot="#f4a03b" />
      </div>
    </div>
  );
}

/** Strength Wrapped, the yearly recap. */
export function WrappedScreen() {
  return (
    <div className="grid grid-cols-2 gap-3 pt-2">
      <div className="col-span-2 rounded-3xl bg-[#2f49d8] p-4 text-white">
        <p className="text-[11px] text-white/60">Your 2026</p>
        <p className="text-[28px] font-semibold leading-none">182 workouts</p>
        <div className="mt-3">
          <Bars values={[30, 42, 38, 55, 61, 58, 80]} color="#ffffff" />
        </div>
      </div>
      <div className="aspect-square rounded-3xl bg-mist p-3">
        <p className="text-[11px] text-ink/60">Lifted</p>
        <p className="text-[24px] font-semibold leading-none">1.2M kg</p>
      </div>
      <div className="aspect-square rounded-3xl bg-[#31c46b]/20 p-3">
        <p className="text-[11px] text-ink/60">Streak</p>
        <p className="text-[24px] font-semibold leading-none">26 wk</p>
      </div>
      <div className="aspect-square rounded-3xl bg-[#7c6cf0]/25 p-3">
        <p className="text-[11px] text-ink/60">Top lift</p>
        <p className="text-[24px] font-semibold leading-none">180 kg</p>
      </div>
      <div className="aspect-square rounded-3xl bg-[#f46c41]/20 p-3">
        <p className="text-[11px] text-ink/60">PRs</p>
        <p className="flex items-center gap-1 text-[24px] font-semibold leading-none">
          41
          <Star className="size-4 fill-[#ff9500] text-[#ff9500]" strokeWidth={0} />
        </p>
      </div>
    </div>
  );
}
