import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_STORE, CONTACT, WAITLIST, Wordmark } from "@/components/home/brand";
import { cn } from "@/lib/utils";

export function PillButton({
  href,
  children,
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <Button
      asChild
      className={cn(
        "h-auto rounded-full bg-ink font-medium text-paper hover:bg-ink/90 [&_svg:not([class*='size-'])]:size-5",
        size === "sm" ? "px-5 py-2 text-[16px]" : "px-6 py-3 text-[16px]",
        className,
      )}
    >
      <a href={href}>
        {children}
      </a>
    </Button>
  );
}

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 hidden justify-center px-4 md:flex">
      <nav className="flex items-center gap-2 rounded-[32px] bg-mist/70 p-2 ring-1 ring-inset ring-white/10 text-[18px] font-medium text-ink backdrop-blur-xl">
        <Link href="/" className="px-4 py-1.5" aria-label="emptea home">
          <Wordmark />
        </Link>
        <div className="flex items-center gap-1">
          <a href="#apps" className="hidden rounded-full px-4 py-1.5 transition-colors hover:bg-white/10 sm:block">
            Apps
          </a>
          <a href="#crank" className="hidden rounded-full px-4 py-1.5 transition-colors hover:bg-white/10 sm:block">
            Crank
          </a>
          <PillButton href={APP_STORE} size="sm">
            Get
          </PillButton>
        </div>
      </nav>
    </header>
  );
}

const footerCols = [
  {
    title: "Apps",
    links: [
      { label: "Crank", href: "#crank" },
      { label: "friggy", href: "#friggy" },
      { label: "FlexMax", href: "#apps" },
      { label: "Rise", href: "#apps" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "App Store", href: APP_STORE },
      { label: "Waitlist", href: WAITLIST },
      { label: "Contact", href: CONTACT },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "EULA", href: "/eula" },
    ],
  },
];

const glyph = "size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]";

// Fill in the handles; entries without an href stay hidden.
const socials: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@get.crank",
    icon: (
      <svg viewBox="0 0 24 24" className={glyph}>
        <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5" />
        <path d="M14 4c.5 2.8 2.3 4.4 5 4.5" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "",
    icon: (
      <svg viewBox="0 0 24 24" className={glyph}>
        <path d="M4 4l16 16M20 4L4 20" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/get.crank",
    icon: (
      <svg viewBox="0 0 24 24" className={glyph}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" className="fill-current" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "",
    icon: (
      <svg viewBox="0 0 24 24" className={glyph}>
        <rect x="2.5" y="5" width="19" height="14" rx="4" />
        <path d="M10 9.5v5l4.5-2.5z" className="fill-current" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="px-6 pb-16 pt-16 md:px-8 md:pt-24">
      <div className="mx-auto grid max-w-[1376px] gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-2">
          <Wordmark />
          <p className="text-[14px] text-ink/60">© emptea studios 2026</p>
        </div>
        {footerCols.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h2 className="text-[18px] font-semibold text-ink/60">{col.title}</h2>
            <ul className="flex flex-col gap-2 text-[16px] font-medium">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-opacity hover:opacity-60">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-24 flex max-w-[1376px] flex-wrap items-center justify-between gap-6">
        <ul className="flex items-center gap-5">
          {socials
            .filter((s) => s.href)
            .map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} className="block text-ink transition-opacity hover:opacity-60">
                  {s.icon}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </footer>
  );
}
