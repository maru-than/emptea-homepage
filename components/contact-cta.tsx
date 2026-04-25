export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-neutral-100 px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="emptea-orb bg-emptea-gradient-radial h-[420px] w-[420px] max-w-[110vw] rounded-full opacity-[0.12] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-900 sm:text-4xl lg:text-5xl">
          Working on something <span className="text-gradient">worth</span>{" "}
          making?
        </h2>
        <p className="mt-4 max-w-lg text-base text-neutral-600 sm:mt-5 sm:text-lg">
          We take on a handful of outside projects a year. If you have an idea
          that needs design and engineering under one roof, we&rsquo;d like to
          hear about it.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
          <a
            href="mailto:hello@emptea.studio"
            className="bg-emptea-gradient inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--grad-3)] focus-visible:ring-offset-2 sm:text-base"
          >
            hello@emptea.studio
          </a>
          <p className="px-2 text-center text-xs text-neutral-500">
            We read every email and reply within a week.
          </p>
        </div>
      </div>
    </section>
  );
}
