import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mark } from "@/components/home/brand";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Mark className="size-5" />
            emptea
          </Link>
          <Button asChild size="sm" variant="outline">
            <Link href="/">Back to site</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-20">{children}</main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>emptea · 2026</span>
          <nav className="flex flex-wrap gap-6">
            <Link href="/terms-of-service" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/eula" className="hover:text-foreground">
              EULA
            </Link>
            <Link href="/support" className="hover:text-foreground">
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
