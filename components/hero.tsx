export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center"
      >
        <div className="emptea-orb bg-emptea-gradient-radial h-[620px] w-[620px] max-w-[120vw] translate-y-[-20%] rounded-full opacity-20 blur-3xl sm:opacity-25" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-medium text-neutral-600 shadow-sm sm:mb-6 sm:text-xs">
          <span className="bg-emptea-gradient size-1.5 rounded-full" />
          A small software studio
        </span>

        <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.02em] text-neutral-900 sm:text-6xl lg:text-7xl">
          Software
          <br />
          worth <span className="text-gradient">keeping</span>.
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-xl">
          emptea studios designs and builds apps with precision and craft. We
          work on a few products at a time, and we make them the way we would
          want to use them.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center">
          <a
            href="#works"
            className="bg-emptea-gradient inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--grad-3)] focus-visible:ring-offset-2"
          >
            See our works
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition-colors hover:border-neutral-300"
          >
            About the studio
          </a>
        </div>

        <ul className="mt-10 flex flex-col items-center gap-2 text-xs font-medium text-neutral-500 sm:mt-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2">
          <li>Designed in-house</li>
          <li aria-hidden="true" className="hidden text-neutral-300 sm:inline">
            ·
          </li>
          <li>Built with intent</li>
          <li aria-hidden="true" className="hidden text-neutral-300 sm:inline">
            ·
          </li>
          <li>Shipped when ready</li>
        </ul>
      </div>
    </section>
  );
}
