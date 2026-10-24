import Link from "next/link";
import { Wordmark } from "@/components/home/brand";
import { Pill } from "@/components/home/chrome";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-hairline">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-20">
          <Link href="/" aria-label="emptea home" className="inline-flex min-h-11 items-center">
            <Wordmark />
          </Link>
          <Pill href="/" variant="panel">
            Back to site
          </Pill>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-20">{children}</main>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 emptea studios</span>
          <nav className="flex flex-wrap gap-6">
            <Link href="/terms-of-service" className="hover:text-ink">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/eula" className="hover:text-ink">
              EULA
            </Link>
            <Link href="/support" className="hover:text-ink">
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
