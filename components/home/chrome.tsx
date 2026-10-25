import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_STORE, CONTACT, Wordmark } from "@/components/home/brand";
import { MobileMenu } from "@/components/home/mobile-menu";
import { cn } from "@/lib/utils";

/** Pill button. `brand` is the orange primary, `panel` the grey secondary. */
export function Pill({
  href,
  children,
  variant = "brand",
  arrow = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "brand" | "panel";
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Button
      asChild
      className={cn(
        "h-auto min-h-10 gap-2 rounded-full px-4 py-2 text-xs font-normal transition-[background-color,transform] duration-200 active:scale-[0.96] sm:min-h-11 sm:px-6 sm:py-3 sm:text-sm",
        variant === "brand" && "bg-brand text-white hover:bg-brand-hover",
        variant === "panel" && "bg-panel text-ink hover:bg-panel-hover",
        className,
      )}
    >
      <a href={href}>
        {children}
        {arrow && <ArrowRight className="size-4 shrink-0" strokeWidth={1.75} />}
      </a>
    </Button>
  );
}

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Setup", href: "#setup" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-paper/70 text-ink backdrop-blur-xl backdrop-saturate-150">
      <nav className="relative mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-3 px-4 sm:h-20 sm:px-8 lg:px-16">
        <Link href="/" aria-label="emptea home" className="inline-flex min-h-11 items-center">
          <Wordmark />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="inline-flex min-h-11 items-center transition-colors hover:text-dim">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-5">
          <a href={CONTACT} className="hidden min-h-11 items-center text-sm transition-colors hover:text-dim md:inline-flex">
            Contact
          </a>
          <Pill href={APP_STORE}>Get Crank</Pill>
          <MobileMenu links={navLinks} />
        </div>
      </nav>
    </header>
  );
}

const footerCols = [
  {
    title: "Apps",
    links: [
      { label: "Crank", href: APP_STORE },
      { label: "friggy", href: "#friggy" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "App Store", href: APP_STORE },
      { label: "Contact", href: CONTACT },
      { label: "TikTok", href: "https://www.tiktok.com/@get.crank" },
      { label: "Instagram", href: "https://www.instagram.com/get.crank" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", href: "/terms-of-service" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "EULA", href: "/eula" },
      { label: "Support", href: "/support" },
    ],
  },
];

// Social profiles open in a new tab; the App Store link stays in-tab so iOS can hand it to the App Store app.
const newTab = (href: string) => /^https?:/.test(href) && !href.includes("apps.apple.com");

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-5 pb-8 md:px-10">
      <div className="grid grid-cols-2 gap-10 px-3 py-16 text-sm md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" aria-label="emptea home" className="inline-flex min-h-11 items-center">
            <Wordmark className="text-2xl" />
          </Link>
          <p className="mt-3 text-dim">Healthmaxxing without distractions.</p>
        </div>
        {footerCols.map((col) => (
          <nav key={col.title} aria-label={col.title} className="flex flex-col items-start">
            <p className="mb-3 text-dim">{col.title}</p>
            {col.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(newTab(l.href) ? { target: "_blank", rel: "noopener" } : {})}
                className="inline-flex min-h-10 items-center transition-colors hover:text-dim"
              >
                {l.label}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-5 pl-3 text-xs text-dim">
        <span>© 2026 emptea studios</span>
        <span>Made in Switzerland</span>
      </div>
      <p className="mt-6 pl-3 text-xs text-dim">Crank is on the App Store. friggy is coming soon.</p>
    </footer>
  );
}
