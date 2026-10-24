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
 * Feature: grey panel with a cropped phone on one side, heading and checklist on the other.
 * `anchor` picks which end of the screen survives the crop: "top" shows the header, "bottom" the lower part
 * (for a Lock Screen, where the Live Activity sits).
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
    <section className="reveal grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <Panel className={cn("h-[420px] sm:h-[500px]", flip && "lg:order-2")}>
        <div className={cn("flex h-full justify-center px-6", anchor === "top" ? "pt-10 sm:pt-14" : "items-end pb-10 sm:pb-14")}>
          <Phone className={cn("w-[260px] sm:w-[290px]", anchor === "bottom" && "self-end")}>
            <Shot src={src} alt={alt} sizes="290px" />
          </Phone>
        </div>
      </Panel>

      <div className={cn("flex flex-col items-start gap-8 px-1", flip && "lg:order-1")}>
        <h2 className="text-heading">
          {title}{" "}
          <span className="block whitespace-pre-line text-faint">{sub}</span>
        </h2>
        <CheckList items={points} />
        <Pill href={APP_STORE} arrow>
          Get Crank
        </Pill>
      </div>
    </section>
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
