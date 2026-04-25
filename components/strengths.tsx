import {
  Smartphone,
  Globe,
  Database,
  Rocket,
  Bot,
  PenTool,
  type IconComponent,
} from "@/components/icons";

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

const strengths: { Icon: IconComponent; title: string; body: string }[] = [
  {
    Icon: Smartphone,
    title: "Native iOS apps",
    body: "Built and shipped two apps to the Swiss App Store — Crank for training, Rise for habits. React Native and Expo, designed solo from idea to release.",
  },
  {
    Icon: Globe,
    title: "Modern web stack",
    body: "Next.js, Tailwind, TypeScript end-to-end. Marketing pages, product UI, dashboards — same toolkit, comfortable across the seam.",
  },
  {
    Icon: Database,
    title: "Backends and infra",
    body: "Firebase and Supabase for our own apps. Postgres for heavier work. REST and SSR where they earn their keep, never just because.",
  },
  {
    Icon: PenTool,
    title: "Designed in-house",
    body: "Every product starts in Figma and lives there until the seams disappear. We don't hand designs off — we ship them.",
  },
  {
    Icon: Rocket,
    title: "Release, then refine",
    body: "Over-engineering taught us to ship earlier. We get a small thing in front of users, watch what actually happens, then sand the edges.",
  },
  {
    Icon: Bot,
    title: "Tools that compound",
    body: "Internal AI agent, automation pipelines, and a TikTok publishing flow that runs on its own. Less time on glue, more on the work.",
  },
];

export function Strengths() {
  return (
    <section id="studio" className="relative mt-24 sm:mt-32 md:mt-40">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[70px] sm:text-[110px] md:text-[150px] font-medium tracking-[-3px] md:tracking-[-6px] text-white/[0.035] whitespace-nowrap select-none">
            What we do
          </p>
        </div>
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
          <SectionEyebrow>The studio · How we work</SectionEyebrow>
          <SectionTitle>Studio</SectionTitle>
          <SectionSub>Mobile. Web. Designed and shipped end-to-end.</SectionSub>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map(({ Icon, title, body }) => (
            <StrengthCard
              key={title}
              icon={<Icon size={18} strokeWidth={1.6} />}
              title={title}
              body={body}
            />
          ))}
        </div>

        <div className="mt-5">
          <div className="card card-ring p-6 sm:p-8 relative">
            <div className="grid-bg grid-bg-fine" />
            <div className="relative">
              <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
                How to work with us
              </p>
              <p className="mt-3 text-[20px] sm:text-[22px] leading-tight text-white">
                One product at a time. A short list of outside projects per year.
              </p>
              <p className="mt-2 text-[13px] sm:text-[13.5px] text-[var(--text-muted)] max-w-[520px]">
                We pick work where the brief is open enough to design properly,
                and the timeline is honest about how long good things take.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StrengthCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="card card-ring p-6 sm:p-7 relative">
      <div className="grid-bg grid-bg-fine" />
      <div className="relative">
        <div className="w-9 h-9 rounded-full border border-[var(--border-strong)] bg-[rgba(168,0,0,0.06)] flex items-center justify-center text-[var(--accent)]">
          {icon}
        </div>
        <p className="mt-4 text-[17px] sm:text-[18px] leading-tight text-white tracking-[-0.2px]">
          {title}
        </p>
        <p className="mt-3 text-[13px] leading-relaxed text-[var(--text-muted)]">
          {body}
        </p>
      </div>
    </div>
  );
}
