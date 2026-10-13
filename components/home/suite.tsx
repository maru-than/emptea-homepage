import { cn } from "@/lib/utils";

/** Crank's strength tiers, each with its own original orb character. */
const tiers = [
  { name: "Beginner", from: "#d6dae3", to: "#7d8290", eyes: "round" },
  { name: "Amateur", from: "#8ff0c0", to: "#1f9e6a", eyes: "square" },
  { name: "Semi", from: "#9fb2ff", to: "#3d55e0", eyes: "wide" },
  { name: "Professional", from: "#d3b8ff", to: "#7146e0", eyes: "squint" },
  { name: "Master", from: "#ffc39a", to: "#e0602e", eyes: "round" },
  { name: "Elite", from: "#ffe38a", to: "#d9a000", eyes: "wide" },
] as const;

function Orb({ from, to, eyes }: { from: string; to: string; eyes: (typeof tiers)[number]["eyes"] }) {
  const eye = {
    round: "h-5 w-4 rounded-full",
    square: "size-4 rounded-[5px]",
    wide: "h-4 w-6 rounded-full",
    squint: "h-1.5 w-5 rounded-full",
  }[eyes];
  return (
    <div
      className="relative size-40 rounded-full shadow-[inset_-18px_-24px_40px_rgba(0,0,0,0.25),0_30px_60px_-20px_rgba(0,0,0,0.6)]"
      style={{ background: `radial-gradient(circle at 32% 28%, ${from}, ${to} 70%)` }}
    >
      <span className="absolute left-[22%] top-[14%] h-8 w-12 rotate-[-20deg] rounded-full bg-white/35 blur-[6px]" />
      <span className="absolute inset-x-0 top-[44%] flex justify-center gap-6">
        <span className={cn("bg-night", eye)} />
        <span className={cn("bg-night", eye)} />
      </span>
    </div>
  );
}

/** Carousel of Crank's strength tiers under a spotlight. */
export function Suite() {
  return (
    <div className="relative flex justify-center">
      <div className="spotlight h-[420px] -translate-y-40" />
      <div className="marquee-wrap edge-fade relative w-full max-w-[560px] overflow-hidden">
        <div className="marquee gap-10 pr-10" style={{ "--marquee-duration": "32s" } as React.CSSProperties}>
          {[...tiers, ...tiers].map((m, i) => (
            <div key={i} className="flex w-40 shrink-0 flex-col items-center gap-3" aria-hidden={i >= tiers.length}>
              <Orb from={m.from} to={m.to} eyes={m.eyes} />
              <span className="text-[24px] font-semibold text-white">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
