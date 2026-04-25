import Link from "next/link";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]">
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto flex h-16 max-w-[680px] items-center justify-between px-5 sm:h-20 sm:px-6">
          <Link
            href="/"
            aria-label="emptea studios, home"
            className="inline-flex items-center text-white"
          >
            <Logo className="h-[18px] w-auto" />
          </Link>
          <Link
            href="/"
            className="text-[12px] tracking-[0.22em] uppercase text-[var(--text-muted)] transition-colors hover:text-white"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 sm:py-24">
        <div className="mx-auto max-w-[680px] px-5 sm:px-6">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
