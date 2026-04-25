import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-5 sm:flex-row sm:gap-6">
        <div className="flex items-center gap-3">
          <Logo className="h-[18px] w-auto text-white" />
          <span className="text-[11px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
            © {new Date().getFullYear()}
          </span>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-[var(--text-muted)]"
        >
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span className="opacity-40">·</span>
          <Link
            href="/terms-of-service"
            className="hover:text-white transition"
          >
            Terms
          </Link>
          <span className="opacity-40">·</span>
          <Link
            href="/privacy-policy"
            className="hover:text-white transition"
          >
            Privacy
          </Link>
          <span className="opacity-40">·</span>
          <Link href="/eula" className="hover:text-white transition">
            EULA
          </Link>
        </nav>
      </div>
    </footer>
  );
}
