import { Logo } from "@/components/logo";

export function Nav() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-4 sm:top-5 sm:px-6">
      <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2">
        <a
          href="#top"
          aria-label="emptea studios, back to top"
          className="inline-flex items-center rounded-full border border-neutral-200 bg-white/85 px-3 py-2 shadow-[0_8px_30px_rgb(0_0_0/0.08)] backdrop-blur-md transition-colors hover:bg-white sm:px-3.5 sm:py-2.5"
        >
          <Logo className="h-4 w-auto text-neutral-900 sm:h-[18px]" />
        </a>

        <nav
          aria-label="Primary"
          className="rounded-full border border-neutral-200 bg-white/85 px-1 py-1 shadow-[0_8px_30px_rgb(0_0_0/0.08)] backdrop-blur-md sm:px-1.5 sm:py-1.5"
        >
          <div className="flex items-center gap-0.5">
            <a
              href="#about"
              className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 sm:inline-flex"
            >
              About
            </a>
            <a
              href="#works"
              className="inline-flex rounded-full px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              Works
            </a>
            <a
              href="#contact"
              className="bg-emptea-gradient inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--grad-3)] focus-visible:ring-offset-2 sm:ml-0.5 sm:px-4 sm:text-sm"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
