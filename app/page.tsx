import Link from "next/link";

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#e7e5e4] px-6 text-center">
      <p className="text-[16px] tracking-[-0.03em] text-[#a8a29e]">
        Emptea studios, a powerhouse.
      </p>
      <h1 className="font-serif text-[36px] leading-none text-[#7c2d12]">
        Curious &amp; industrial.
      </h1>
      <a
        href="mailto:emptea.studios@gmail.com"
        className="text-[16px] tracking-[-0.02em] text-[#a8a29e] transition-colors hover:text-[#1c1917]"
      >
        emptea.studios@gmail.com
      </a>

      <Link
        href="/gallery"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[16px] tracking-[-0.03em] text-[#a8a29e] transition-colors hover:text-[#1c1917]"
      >
        Gallery
      </Link>
    </main>
  );
}
