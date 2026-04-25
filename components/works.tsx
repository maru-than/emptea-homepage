type IconProps = { className?: string };

function DumbbellIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 6.5l11 11M21 21l-1-1M3 3l1 1M18 22l4-4M2 6l4-4M7 17l-3 3M17 7l3-3M14 14l-3-3" />
    </svg>
  );
}

function FeatherIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

const works = [
  {
    name: "Crank",
    tagline: "Training, tracked properly.",
    description:
      "A workout tracker built for lifters who care about progression. Clean logging, honest charts, no gamification.",
    href: "https://getcrank.app",
    Icon: DumbbellIcon,
    status: "Live",
  },
  {
    name: "Adler",
    tagline: "UGC, on-chain.",
    description:
      "A Solana-native marketplace for UGC creators and brands. Sell video packages, take custom briefs, get paid in seconds.",
    href: "https://adler.gg",
    Icon: FeatherIcon,
    status: "Pre-launch",
  },
];

export function Works() {
  return (
    <section
      id="works"
      className="border-t border-neutral-100 px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 sm:text-sm">
            Works
          </p>
          <h2 className="mt-3 text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-900 sm:text-4xl lg:text-5xl">
            Things we&rsquo;ve <span className="text-gradient">made</span>.
          </h2>
          <p className="mt-4 text-base text-neutral-600 sm:text-lg">
            A short list, on purpose. Each product gets our full attention — we
            don&rsquo;t believe in shipping ten things badly.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4">
          {works.map(({ name, tagline, description, href, Icon, status }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="bg-emptea-gradient inline-flex size-10 items-center justify-center rounded-xl text-white"
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-500">
                    {status}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                      {name}
                    </h3>
                    <ArrowUpRightIcon className="size-4 shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-900" />
                  </div>
                  <p className="mt-1 text-sm font-medium text-neutral-900">
                    {tagline}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                    {description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
