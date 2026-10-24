import Image from "next/image";
import { PersonStanding, Sunrise } from "lucide-react";
import { cn } from "@/lib/utils";

export const APP_STORE = "https://apps.apple.com/app/id6757124183";
export const WAITLIST = "mailto:emptea.studios@gmail.com?subject=FlexMax%20and%20Rise%20waitlist";
export const CONTACT = "mailto:emptea.studios@gmail.com";

export const apps = {
  // Crank's real App Store icon (Classic): white Atlas figure on the #004A68 gradient.
  crank: { name: "Crank", icon: null, image: "/crank-icon.png", from: "#1f5a7a", to: "#004a68" },
  friggy: { name: "friggy", icon: null, image: "/friggy-icon.png", from: "#fffdf5", to: "#fffdf5" },
  flexmax: { name: "FlexMax", icon: PersonStanding, image: null, from: "#5fdc8a", to: "#1f9e52" },
  rise: { name: "Rise", icon: Sunrise, image: null, from: "#ffb27a", to: "#f0612e" },
};

export type AppId = keyof typeof apps;

/** App icon tile, sized by className width. */
export function AppIcon({ app, className }: { app: AppId; className?: string }) {
  const { icon: Icon, image, from, to, name } = apps[app];
  return (
    <span
      role="img"
      aria-label={name}
      className={cn(
        "relative flex aspect-square w-20 items-center justify-center overflow-hidden rounded-[22.5%] shadow-[0_6px_18px_-8px_rgba(0,0,0,0.24)]",
        image && "ring-1 ring-inset ring-black/10",
        className,
      )}
      style={{ background: `linear-gradient(160deg, ${from}, ${to})` }}
    >
      {image ? (
        <Image src={image} alt="" fill sizes="96px" className="object-cover" />
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

/** Wordmark: accent teacup beside the name, set tight like a logotype. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-[0.22em] text-[22px] leading-none tracking-[-0.05em]", className)}>
      <Mark className="size-[0.95em] translate-y-[0.08em] text-brand" />
      emptea
    </span>
  );
}
