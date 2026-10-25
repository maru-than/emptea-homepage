import { Check } from "lucide-react";
import { APP_STORE } from "@/components/home/brand";
import { Pill } from "@/components/home/chrome";
import { Phone, Shot } from "@/components/home/phone";
import { cn } from "@/lib/utils";

/** Page column: 1200px, 20/40px gutters. */
export function Container({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <div id={id} className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-10", className)}>
      {children}
    </div>
  );
}

/** Light grey rounded surface every feature sits on. */
export function Panel({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <div id={id} className={cn("relative isolate overflow-hidden rounded-panel bg-panel", className)}>
      {children}
    </div>
  );
}

/** Two-line section heading: first line ink, second line grey. The space keeps the accessible name readable. */
export function SectionTitle({ title, sub, className }: { title: string; sub?: string; className?: string }) {
  return (
    <h2 className={cn("text-heading text-balance text-center", className)}>
      {title}
      {sub && (
        <>
          {" "}
          <span className="block text-dim">{sub}</span>
        </>
      )}
    </h2>
  );
}

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-col gap-3 text-sm", className)}>
      {items.map((p) => (
        <li key={p} className="flex items-start gap-3">
          <Check className="mt-[3px] size-3.5 shrink-0 text-brand" strokeWidth={2.5} />
          {p}
        </li>
      ))}
    </ul>
  );
}

/**
 * Feature card: one grey panel with the heading and checklist on one side and a cropped phone on the other
 * (stacked on phones). Sized to fit the viewport so it can sit in a StackedCards deck; the phone rises into
 * place as the card arrives (--enter). `anchor` picks which end of the screen survives the crop: "top" shows the
 * header, "bottom" the lower part (for a Lock Screen, where the Live Activity sits).
 */
export function FeatureRow({
  title,
  sub,
  points,
  src,
  alt,
  flip = false,
  anchor = "top",
}: {
  title: string;
  sub: string;
  points: string[];
  src: string;
  alt: string;
  flip?: boolean;
  anchor?: "top" | "bottom";
}) {
  return (
    <Panel className="grid h-[calc(100svh-10rem)] max-h-[720px] min-h-[500px] grid-rows-[auto_1fr] md:h-[560px] md:min-h-0 md:grid-cols-2 md:grid-rows-1">
      <div className={cn("flex flex-col items-start gap-5 p-6 sm:p-8 md:justify-center md:gap-8 md:p-12", flip && "md:order-2")}>
        <h2 className="text-[28px] leading-[1.08] font-normal tracking-[-0.04em] md:text-heading">
          {title}{" "}
          <span className="block text-faint md:whitespace-pre-line">{sub}</span>
        </h2>
        <CheckList items={points} className="gap-2.5 md:gap-3" />
        <Pill href={APP_STORE} arrow className="hidden md:inline-flex">
          Get Crank
        </Pill>
      </div>

      <div
        className={cn(
          "flex min-h-0 justify-center overflow-hidden px-6",
          anchor === "top" ? "pt-2 md:pt-14" : "items-end pb-6 md:pb-14",
          flip && "md:order-1",
        )}
      >
        <div
          className="will-change-transform"
          style={{ transform: "translate3d(0, calc((1 - var(--enter, 1)) * 64px), 0)" }}
        >
          <Phone className="w-[240px] sm:w-[260px] md:w-[290px]">
            <Shot src={src} alt={alt} sizes="290px" />
          </Phone>
        </div>
      </div>
    </Panel>
  );
}

/** Big number with a small grey label, pinned to the bottom of a bento card. */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="mt-auto">
      <p className="text-stat">{value}</p>
      <p className="mt-2 text-sm text-dim sm:text-[15px]">{label}</p>
    </div>
  );
}

/** White floating card used inside panels for small UI mocks. */
export function MockCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-[22px] bg-paper p-4 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.03)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
