import Link from "next/link";
import type { Metadata } from "next";
import { RiseVideo } from "./RiseVideo";

export const metadata: Metadata = {
  title: "Rise — emptea studios",
  description: "Rise, a journal that understands you. Join the TestFlight.",
  openGraph: {
    title: "Rise — emptea studios",
    description: "Rise, a journal that understands you. Join the TestFlight.",
    type: "website",
    url: "https://emptea.xyz/rise",
    siteName: "emptea studios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise — emptea studios",
    description: "Rise, a journal that understands you. Join the TestFlight.",
  },
};

export default function RisePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#e7e5e4] px-6 py-20 text-center">
      <div className="flex flex-col items-center gap-10">
        <div className="overflow-hidden rounded-[44px] bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]">
          <RiseVideo />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="font-serif text-[36px] leading-none text-[#7c2d12]">
            Rise
          </h1>
          <p className="text-[16px] tracking-[-0.03em] text-[#a8a29e]">
            A journal that understands you.
          </p>
        </div>

        <a
          href="https://testflight.apple.com/join/a3eJYhxP"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#1c1917] px-6 py-3 text-[15px] tracking-[-0.02em] text-[#e7e5e4] transition-colors hover:bg-[#7c2d12]"
        >
          Join the TestFlight
        </a>
      </div>

      <Link
        href="/"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[16px] tracking-[-0.03em] text-[#a8a29e] transition-colors hover:text-[#1c1917]"
      >
        Back to home
      </Link>
    </main>
  );
}
