function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--text-muted)] text-center mb-4">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-[44px] sm:text-[56px] md:text-[72px] leading-[0.98] font-medium tracking-[-1.5px] md:tracking-[-3px] text-white">
      {children}
    </h2>
  );
}

function SectionSub({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-[15px] text-[var(--text-muted)] mt-4">
      {children}
    </p>
  );
}

type Project = {
  title: string;
  category: string;
  year: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Crank",
    category: "iOS · Training tracker",
    year: "2025",
    href: "https://getcrank.app",
  },
  {
    title: "Adler",
    category: "Web · UGC marketplace, on-chain",
    year: "2025",
    href: "https://adler.gg",
  },
];

export function Work() {
  return (
    <section id="work" className="relative mt-24 sm:mt-32 md:mt-40">
      <div className="max-w-[820px] mx-auto px-4 sm:px-6">
        <SectionEyebrow>Selected work · 2025</SectionEyebrow>
        <SectionTitle>Work</SectionTitle>
        <SectionSub>Apps in stores, sites in production.</SectionSub>

        <div className="mt-10 sm:mt-14 border-t border-[var(--border)]">
          {projects.map((p) => (
            <ProjectRow key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ title, category, year, href }: Project) {
  return (
    <a
      className="work-row group relative flex items-center gap-4 sm:gap-6 py-5 sm:py-6 px-2 sm:px-3 border-b border-[var(--border)] transition-colors"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="shrink-0 w-14 sm:w-16 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
        {year}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[20px] sm:text-[24px] md:text-[28px] font-medium tracking-[-0.6px] text-white leading-tight truncate">
          {title}
        </p>
        <p className="mt-1 text-[12px] sm:text-[13px] text-[var(--text-muted)] truncate">
          {category}
        </p>
      </div>
      <span className="work-row-arrow shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[var(--border-strong)] flex items-center justify-center text-[14px] text-[var(--text-soft)] transition-all">
        ↗
      </span>
    </a>
  );
}
