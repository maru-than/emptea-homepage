import { Check } from "lucide-react";
import { AppIcon } from "@/components/home/brand";

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-raised p-3 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.6)] ${className}`}>
      {children}
    </div>
  );
}

function Meter({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <Panel className="flex items-center gap-3">
      <span className="w-24 shrink-0 text-[12px] font-semibold">{label}</span>
      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10">
        <span className="block h-full rounded-full" style={{ width: `${value}%`, background: color }} />
      </span>
      <span className="w-8 text-right text-[11px] font-semibold tabular-nums text-ink/60">{value}</span>
    </Panel>
  );
}

/** Three columns of floating UI panels for the Crank analytics card. */
export function TrainingCollage() {
  return (
    <div className="grid h-full grid-cols-3 gap-3 overflow-hidden px-6 [mask-image:linear-gradient(transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex flex-col gap-3 pt-24">
        <p className="px-1 text-[11px] font-semibold text-ink/50">Volume by muscle</p>
        <Meter label="Chest" value={86} color="#f46c41" />
        <Meter label="Back" value={72} color="#415eee" />
        <Meter label="Legs" value={64} color="#e6e6e6" />
        <Meter label="Shoulders" value={41} color="#f4a03b" />
        <Meter label="Arms" value={33} color="#2f6fd6" />
        <Meter label="Core" value={22} color="#7c6cf0" />
        <Panel>
          <p className="text-[11px] font-semibold text-ink/50">This week</p>
          <p className="text-[13px] font-semibold">4 sessions · 18,420 kg</p>
        </Panel>
      </div>

      <div className="flex flex-col gap-3 pt-8">
        <Panel className="flex items-center gap-3">
          <AppIcon app="crank" className="w-10 shadow-none" />
          <div>
            <p className="text-[13px] font-semibold leading-tight">Push A</p>
            <p className="text-[11px] text-ink/60">Today · 18:30</p>
          </div>
        </Panel>
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-[#2f49d8] via-[#7c6cf0] to-[#ff96c2] p-4 text-white shadow-[0_16px_40px_-24px_rgba(31,32,37,0.5)]">
          <p className="text-[11px] font-semibold text-white/70">Share card · Upper · Strength</p>
          <p className="mt-2 text-[20px] font-semibold leading-tight">
            4,642 kg in 64 minutes, two of them PRs
          </p>
          <div className="absolute inset-x-4 bottom-4 space-y-1.5">
            <span className="block h-2 w-full rounded-full bg-white/40" />
            <span className="block h-2 w-4/5 rounded-full bg-white/40" />
            <span className="block h-2 w-3/5 rounded-full bg-white/40" />
          </div>
        </div>
        <Panel className="flex items-center justify-between">
          <span className="text-[13px] font-semibold">New PR · Bench 95 kg</span>
          <span className="flex size-6 items-center justify-center rounded-full bg-[#31c46b] text-white">
            <Check className="size-3.5" strokeWidth={3} />
          </span>
        </Panel>
      </div>

      <div className="flex flex-col gap-3 pt-16">
        <Panel>
          <p className="text-[11px] font-semibold text-ink/50">Lifted this month</p>
          <p className="text-[24px] font-semibold leading-none">212k kg</p>
          <div className="mt-3 flex h-2 overflow-hidden rounded-full">
            <span className="w-[38%] bg-[#f46c41]" />
            <span className="w-[27%] bg-[#415eee]" />
            <span className="w-[20%] bg-[#e6e6e6]" />
            <span className="flex-1 bg-[#f4a03b]" />
          </div>
        </Panel>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Workouts", "510"],
            ["Exercises", "27"],
            ["Minutes", "36.5k"],
            ["PRs", "41"],
          ].map(([k, v]) => (
            <Panel key={k}>
              <p className="text-[11px] text-ink/60">{k}</p>
              <p className="text-[17px] font-semibold">{v}</p>
            </Panel>
          ))}
        </div>
        <Panel>
          <p className="mb-2 text-[11px] font-semibold text-ink/50">Busiest training hour</p>
          <div className="flex h-12 items-end gap-1">
            {[20, 35, 60, 90, 70, 45, 30, 50, 65, 40].map((v, i) => (
              <span key={i} className="flex-1 rounded-sm bg-[#415eee]" style={{ height: `${v}%`, opacity: v > 60 ? 1 : 0.35 }} />
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
