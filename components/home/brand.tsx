import Image from "next/image";
import { PersonStanding, Sunrise } from "lucide-react";
import { cn } from "@/lib/utils";

export const APP_STORE = "https://apps.apple.com/app/id6757124183";
export const WAITLIST = "mailto:emptea.studios@gmail.com?subject=FlexMax%20and%20Rise%20waitlist";
export const CONTACT = "mailto:emptea.studios@gmail.com";

export const apps = {
  crank: { name: "Crank", icon: null, mark: "/crank-mark.svg", from: "#ffffff", to: "#f4f4f5" },
  flexmax: { name: "FlexMax", icon: PersonStanding, mark: null, from: "#5fdc8a", to: "#1f9e52" },
  rise: { name: "Rise", icon: Sunrise, mark: null, from: "#ffb27a", to: "#f0612e" },
};

export type AppId = keyof typeof apps;

/** App icon tile, sized by className width. */
export function AppIcon({ app, className }: { app: AppId; className?: string }) {
  const { icon: Icon, mark, from, to, name } = apps[app];
  return (
    <span
      role="img"
      aria-label={name}
      className={cn(
        "relative flex aspect-square w-20 items-center justify-center overflow-hidden rounded-[22.5%] shadow-[0_24px_48px_-20px_rgba(31,32,37,0.5)]",
        mark && "ring-1 ring-inset ring-night/10",
        className,
      )}
      style={{ background: `linear-gradient(160deg, ${from}, ${to})` }}
    >
      {mark ? (
        <Image src={mark} alt="" width={392} height={741} className="relative h-[58%] w-auto" />
      ) : (
        <>
          <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
          {Icon && <Icon className="relative size-[46%] text-white" strokeWidth={2.25} />}
        </>
      )}
    </span>
  );
}

/** emptea mark: a teacup. */
export const MARK_PATH =
  "M259.472 84.4406C258.206 74.395 242.659 65.4117 218.576 59.1436C199.948 54.3085 176.199 51.0668 150.005 50.2381C145.475 50.0824 140.871 50 136.199 50C116.533 50 97.9454 51.3324 81.4243 53.727C40.7751 59.5648 12.8574 71.7394 12.8574 85.7913C12.8574 150.282 40.7751 206.1 81.4243 232.935C97.9408 243.86 116.533 250 136.199 250C140.867 250 145.47 249.647 150.005 248.984C176.227 245.11 199.948 230.28 218.572 208.018C230.174 194.118 239.806 177.355 246.823 158.541C250.06 160.052 253.548 160.886 257.196 160.886C273.731 160.886 287.143 143.748 287.143 122.622C287.143 101.496 274.947 85.9561 259.472 84.4452V84.4406ZM257.196 145.607C255.216 145.607 253.324 145.016 251.6 143.981C255.573 130.058 258.151 115.232 259.111 99.7928C266.595 101.253 272.355 110.896 272.355 122.617C272.355 135.319 265.557 145.602 257.191 145.602L257.196 145.607Z";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="12 12 276 276" className={cn("size-6", className)} aria-hidden="true">
      <path fill="currentColor" d={MARK_PATH} />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 text-[20px] font-semibold", className)}>
      <Mark />
      emptea
    </span>
  );
}

/** Small laurel branch drawn from leaves along an arc. */
function Branch({ flip }: { flip?: boolean }) {
  const leaves = Array.from({ length: 6 }, (_, i) => {
    const t = i / 5;
    const angle = (200 + t * 120) * (Math.PI / 180);
    const x = 20 + Math.cos(angle) * 14;
    const y = 22 + Math.sin(angle) * -16;
    const rot = 200 + t * 120 - 90;
    return { x, y, rot };
  });
  return (
    <svg
      viewBox="0 0 24 44"
      className={cn("h-11 w-6 text-ink/70", flip && "-scale-x-100")}
      aria-hidden="true"
    >
      {leaves.map((l, i) => (
        <ellipse
          key={i}
          cx={l.x}
          cy={l.y}
          rx="2"
          ry="4.4"
          fill="currentColor"
          transform={`rotate(${-l.rot} ${l.x} ${l.y})`}
        />
      ))}
    </svg>
  );
}

export function Laurel({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div className="flex items-center gap-1">
      <Branch />
      <div className="text-center text-[13px] font-medium leading-tight text-ink/70">
        <p>{top}</p>
        <p>{bottom}</p>
      </div>
      <Branch flip />
    </div>
  );
}
