import Image from "next/image";
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

/** A real app screen filling the display (status bar included). A .mp4/.webm source plays as a silent loop. */
export function Shot({ src, alt = "", sizes = "320px" }: { src: string; alt?: string; sizes?: string }) {
  if (/\.(mp4|webm)$/.test(src)) {
    return (
      <video
        src={src}
        aria-label={alt || undefined}
        className="absolute inset-0 size-full object-cover object-top"
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />;
}
