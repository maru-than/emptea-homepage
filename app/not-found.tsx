import Link from "next/link";
import { APP_STORE, Wordmark } from "@/components/home/brand";
import { Pill } from "@/components/home/chrome";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <header className="mx-auto flex h-16 w-full max-w-[1600px] items-center px-4 sm:h-20 sm:px-8 lg:px-16">
        <Link href="/" aria-label="emptea home" className="inline-flex min-h-11 items-center">
          <Wordmark />
        </Link>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-5 pb-24 text-center">
        <p className="text-sm text-dim">404</p>
        <h1 className="mt-3 text-heading text-balance">
          this page doesn&apos;t exist{" "}
          <span className="block text-dim">the app does, though</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Pill href="/" variant="panel">
            Back to emptea
          </Pill>
          <Pill href={APP_STORE} arrow>
            Get Crank
          </Pill>
        </div>
      </main>
    </div>
  );
}
