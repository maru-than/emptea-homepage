const pillars = [
  {
    title: "A few things, done well",
    body: "We take on a small number of products at a time, and we stay with them. Depth over breadth is the only way to ship work we're proud of.",
  },
  {
    title: "Design is the plan",
    body: "Every product starts on paper and lives in Figma before it touches code. If it isn't obvious how to use it, the design isn't finished.",
  },
  {
    title: "Respect the reader",
    body: "Software should feel calm, fast, and honest. No dark patterns, no tricks, no anxiety. Just tools that behave the way you expect them to.",
  },
];

export function Philosophy() {
  return (
    <section
      id="about"
      className="border-t border-neutral-100 px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 sm:text-sm">
            About the studio
          </p>
          <h2 className="mt-3 text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-900 sm:text-4xl lg:text-5xl">
            Small, opinionated, <span className="text-gradient">patient</span>.
          </h2>
          <p className="mt-4 text-base text-neutral-600 sm:text-lg">
            emptea is a studio, not an agency. We work on our own products and
            a short list of collaborations — the kind of work where the details
            matter and the deadline is &ldquo;when it&rsquo;s ready&rdquo;.
          </p>
        </div>

        <ul className="flex flex-col gap-3 sm:gap-4">
          {pillars.map((p, i) => (
            <li
              key={p.title}
              className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 sm:gap-5 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 font-mono text-xs font-semibold text-neutral-500"
              >
                0{i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold text-neutral-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
