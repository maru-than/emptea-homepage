import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row sm:gap-6">
        <div className="flex items-center gap-3">
          <Logo className="h-[18px] w-auto text-neutral-900" />
          <span className="text-xs text-neutral-500">
            © {new Date().getFullYear()}
          </span>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-neutral-600 sm:gap-6"
        >
          <a
            href="#works"
            className="transition-colors hover:text-neutral-900"
          >
            Works
          </a>
          <a
            href="#about"
            className="transition-colors hover:text-neutral-900"
          >
            About
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-neutral-900"
          >
            Contact
          </a>
          <Link
            href="/terms-of-service"
            className="transition-colors hover:text-neutral-900"
          >
            Terms
          </Link>
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-neutral-900"
          >
            Privacy
          </Link>
          <Link
            href="/eula"
            className="transition-colors hover:text-neutral-900"
          >
            EULA
          </Link>
        </nav>
      </div>
    </footer>
  );
}
