import Image from "next/image";
import { Check, HeartPulse, Languages, LayoutGrid, Mic, Search, SlidersHorizontal, Timer } from "lucide-react";
import { APP_STORE, AppIcon, CONTACT, Mark } from "@/components/home/brand";
import { Footer, Nav, Pill } from "@/components/home/chrome";
import { Faq } from "@/components/home/faq";
import { CheckList, Container, FeatureRow, MockCard, Panel, SectionTitle, Stat } from "@/components/home/feature";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Phone, Shot } from "@/components/home/phone";
import { StackedCards } from "@/components/home/stacked-cards";
import { StructuredData } from "@/components/home/structured-data";
import { cn } from "@/lib/utils";

/* ── data ────────────────────────────────────────────────────────── */

const platforms = [
  { icon: LayoutGrid, label: "Widgets" },
  { icon: SlidersHorizontal, label: "Controls" },
  { icon: Timer, label: "Live Activities" },
  { icon: HeartPulse, label: "Apple Health" },
  { icon: Mic, label: "Siri Shortcuts" },
  { icon: Search, label: "Spotlight" },
];

const showcase = [
  { src: "/screens/body-front.jpg", alt: "Body map colored by trained muscles" },
  { src: "/screens/plan-hub.jpg", alt: "Workout tab with today's plan" },
  { src: "/screens/analytics-charts.jpg", alt: "Analytics with bodyweight, steps and volume charts" },
  { src: "/screens/exercise-bench.jpg", alt: "Exercise page for the barbell bench press" },
  { src: "/screens/leaderboard-world.jpg", alt: "Worldwide leaderboard podium" },
  { src: "/screens/standards.jpg", alt: "PR standards per muscle" },
  { src: "/screens/activity-year.jpg", alt: "Activity heatmap for the year" },
  { src: "/screens/workout-share-card.jpg", alt: "Workout share card" },
  { src: "/screens/live-activity-lockscreen.jpg", alt: "Rest timer Live Activity on the Lock Screen" },
  { src: "/screens/appearance-themes.jpg", alt: "Appearance settings with city themes" },
  { src: "/screens/compare.jpg", alt: "Head-to-head comparison with a friend" },
  { src: "/screens/profile-history.jpg", alt: "Profile with workout history" },
];

// Copy stays within what Crank's listing states (public/llms.txt).
const features: {
  title: string;
  sub: string;
  points: string[];
  src: string;
  alt: string;
  anchor?: "top" | "bottom";
}[] = [
  {
    title: "every exercise",
    sub: "nearly 400 of them,\nwith your full history",
    points: ["Step-by-step instructions and target muscles", "Every set you ever logged, per lift", "Add your own in seconds"],
    src: "/screens/exercise-bench.jpg",
    alt: "Crank exercise page for the barbell bench press",
  },
  {
    title: "every week",
    sub: "a streak that counts\nweeks, not days",
    points: ["A heatmap of every session", "Your whole year on one screen", "Gaps show up before they grow"],
    src: "/screens/activity-year.jpg",
    alt: "Crank activity heatmap for the year",
  },
  {
    title: "rest timer",
    sub: "a Live Activity\non your Lock Screen",
    points: ["Glance at it between sets", "15 seconds more or less, one tap away", "In the Dynamic Island too"],
    src: "/screens/live-activity-lockscreen.jpg",
    alt: "Crank rest timer Live Activity on the Lock Screen",
    anchor: "bottom",
  },
  {
    title: "share cards",
    sub: "ready for your story\nor the group chat",
    points: ["A clean card for every session", "Made for Instagram Stories", "Post it to the feed for your friends"],
    src: "/screens/workout-share-card.jpg",
    alt: "Crank workout share card",
  },
  {
    title: "Apple Health",
    sub: "weight in,\nworkouts out",
    points: ["Weight and steps come in without typing", "Finished workouts land in Health", "Siri Shortcuts, Spotlight and Controls too"],
    src: "/screens/bodyweight-chart.jpg",
    alt: "Crank bodyweight chart synced from Apple Health",
  },
  {
    title: "your language",
    sub: "28 of them,\nand 9 city themes",
    points: ["Every theme in light and dark", "Sprichst du Deutsch? Crank does", "Strength Wrapped, your year in lifts"],
    src: "/screens/appearance-themes.jpg",
    alt: "Crank appearance settings with city themes",
  },
];

const tiers = ["beginner", "amateur", "semi", "professional", "master", "elite"];

// Crank's nine city themes in light mode: the page colour with the accent on top.
const themes = [
  { city: "Basel", page: "#e5e5e5", accent: "#147fcc" },
  { city: "New York", page: "#dfe1de", accent: "#b88700" },
  { city: "Istanbul", page: "#fecaca", accent: "#d97706" },
  { city: "Tehran", page: "#fed7aa", accent: "#0891b2" },
  { city: "Bogotá", page: "#fef08a", accent: "#6366f1" },
  { city: "Oslo", page: "#a7f3d0", accent: "#ca8a04" },
  { city: "Reykjavík", page: "#bfdbfe", accent: "#ea580c" },
  { city: "Okinawa", page: "#ddd6fe", accent: "#0d9488" },
  { city: "Socotra", page: "#fbcfe8", accent: "#059669" },
];

const sets = [
  { n: 1, w: "80 kg", r: "8", done: true },
  { n: 2, w: "80 kg", r: "8", done: true },
  { n: 3, w: "82.5 kg", r: "6", done: false },
];

const muscles = [
  { m: "Chest", v: 86, c: "#ff4b2b" },
  { m: "Back", v: 64, c: "#ff8a3d" },
  { m: "Legs", v: 38, c: "#ffc15e" },
];

const story: { who: string; lines: string[]; you?: boolean }[] = [
  {
    who: "emptea",
    lines: [
      "hey 👋 we're emptea, a small app studio in Switzerland.",
      "most health apps want you to keep scrolling. we built Crank so you can log your set and get back to it. friggy is next.",
    ],
  },
  { who: "you", lines: ["i'm in 🙌"], you: true },
];

const included = [
  "Log every set, for as long as you lift",
  "88 ready-made plans, or build your own",
  "Body map, PRs and strength standards",
  "Rest timer Live Activity, widgets and controls",
  "Leaderboards, feed and share cards",
  "Apple Health, Siri Shortcuts and Spotlight",
  "28 languages and 9 city themes",
];

/* ── page ────────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <div className="bg-paper text-ink">
      <StructuredData />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />

      <main id="main">
        <Hero />

        <div className="flex flex-col gap-36 pt-28 md:gap-44 md:pt-36">
          {/* Platforms */}
          <Container>
            <p className="text-center text-sm">Made for iPhone, works with</p>
            <ul className="mx-auto mt-3 grid max-w-[520px] grid-cols-2 gap-x-6 gap-y-3 text-sm text-dim sm:grid-cols-3 lg:flex lg:max-w-none lg:justify-center lg:gap-x-8">
              {platforms.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center justify-center gap-2">
                  <Icon className="size-4" strokeWidth={1.75} />
                  {label}
                </li>
              ))}
            </ul>
          </Container>

          {/* Proof */}
          <Container className="reveal">
            <SectionTitle title="don't take our word" sub="take the numbers" />
            <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-3">
              <Panel className="flex min-h-[300px] flex-col p-8 md:row-span-2 md:min-h-[536px]">
                <div className="flex gap-3">
                  <AppIcon app="crank" className="w-11" />
                  <AppIcon app="friggy" className="w-11" />
                </div>
                <h3 className="mt-auto text-[24px] leading-[1.08] tracking-[-0.045em] lg:text-[32px]">
                  1 app out{" "}
                  <span className="block text-dim">1 on the way</span>
                </h3>
              </Panel>

              <Panel className="flex min-h-[260px] flex-col gap-10 p-8 md:col-span-2">
                <MockCard className="flex items-center gap-2 self-start rounded-full px-4 py-2 text-[13px]">
                  <Languages className="size-4 text-dim" strokeWidth={1.75} />
                  Sprichst du Deutsch?
                </MockCard>
                <Stat value="28" label="languages" />
              </Panel>

              <Panel className="flex min-h-[260px] flex-col gap-10 p-8">
                <ul className="flex flex-wrap gap-1.5" aria-hidden="true">
                  {themes.map((t) => (
                    <li
                      key={t.city}
                      title={t.city}
                      className="flex size-5 items-center justify-center rounded-full ring-1 ring-inset ring-black/5"
                      style={{ background: t.page }}
                    >
                      <span className="size-2 rounded-full" style={{ background: t.accent }} />
                    </li>
                  ))}
                </ul>
                <Stat value="9" label="city themes, light and dark" />
              </Panel>

              <Panel className="flex min-h-[260px] flex-col gap-10 p-8">
                <div className="flex h-12 items-end gap-1.5" aria-hidden="true">
                  {tiers.map((t, i) => (
                    <span
                      key={t}
                      className="w-3 rounded-full bg-brand"
                      style={{ height: `${30 + i * 14}%`, opacity: 0.3 + i * 0.14 }}
                    />
                  ))}
                </div>
                <Stat value="6" label="strength tiers, beginner to elite" />
              </Panel>
            </div>
          </Container>

          {/* Showcase */}
          <Container className="reveal">
            <SectionTitle title="everything between you" sub="and your next PR" />
            <Panel className="mt-14 md:mt-16">
              <Marquee
                duration={80}
                className="edge-fade overflow-hidden py-12"
                trackClassName="gap-6 pr-6 md:gap-8 md:pr-8"
              >
                {[0, 1].map((copy) =>
                  showcase.map((shot) => (
                    <div key={`${copy}-${shot.src}`} aria-hidden={copy === 1 || undefined}>
                      <Phone className="w-[190px] md:w-[220px]">
                        <Shot src={shot.src} alt={copy ? "" : shot.alt} sizes="220px" />
                      </Phone>
                    </div>
                  )),
                )}
              </Marquee>
            </Panel>
          </Container>

          {/* Features */}
          <Container id="features" className="scroll-mt-28">
            <StackedCards className="gap-6 md:gap-10">
              {features.map((f, i) => (
                <FeatureRow key={f.title} {...f} flip={i % 2 === 1} />
              ))}
            </StackedCards>
          </Container>

          {/* Setup */}
          <Container id="setup" className="reveal scroll-mt-28">
            <SectionTitle title="quick start" sub="training in minutes" />
            <StackedCards className="mx-auto mt-14 max-w-[760px] gap-4 md:mt-16">
              <SetupStep n={1} title="download Crank" body="on the App Store">
                <MockCard className="flex w-full max-w-[260px] items-center gap-3">
                  <AppIcon app="crank" className="w-12" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm">Crank</p>
                    <p className="truncate text-xs text-dim">Gym & Workout Tracker</p>
                  </div>
                  <span className="rounded-full bg-panel px-4 py-1.5 text-xs text-[#0071e3]">Get</span>
                </MockCard>
              </SetupStep>

              <SetupStep n={2} title="log your first set" body="88 ready-made plans, 3 to 6 days a week">
                <MockCard className="w-full max-w-[260px]">
                  <p className="mb-2 text-sm">Bench Press</p>
                  <ul className="flex flex-col gap-1.5 text-xs tabular-nums">
                    {sets.map((s) => (
                      <li key={s.n} className="flex items-center gap-3 rounded-xl bg-panel px-3 py-2">
                        <span className="w-3 text-dim">{s.n}</span>
                        <span className="flex-1">
                          {s.w} <span className="text-dim">×</span> {s.r}
                        </span>
                        <span
                          className={cn(
                            "flex size-4 items-center justify-center rounded-full",
                            s.done ? "bg-brand text-white" : "ring-1 ring-inset ring-faint",
                          )}
                        >
                          {s.done && <Check className="size-2.5" strokeWidth={3.5} />}
                        </span>
                      </li>
                    ))}
                  </ul>
                </MockCard>
              </SetupStep>

              <SetupStep n={3} title="watch the map fill in" body="every muscle you trained lights up">
                <MockCard className="w-full max-w-[260px]">
                  <p className="mb-3 text-xs text-dim">Volume this week</p>
                  <ul className="flex flex-col gap-2.5 text-xs">
                    {muscles.map((m) => (
                      <li key={m.m} className="flex items-center gap-3">
                        <span className="w-10">{m.m}</span>
                        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-panel">
                          <span className="block h-full rounded-full" style={{ width: `${m.v}%`, background: m.c }} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </MockCard>
              </SetupStep>
            </StackedCards>
          </Container>

          {/* Apps */}
          <Container id="apps" className="reveal scroll-mt-28">
            <SectionTitle title="one studio" sub="starting with Crank" />
            <div className="mt-14 grid gap-4 md:mt-16">
              <Panel className="grid md:grid-cols-2">
                <div className="flex flex-col items-start justify-center gap-5 p-8 md:p-12">
                  <AppIcon app="crank" className="w-14" />
                  <h3 className="text-title">
                    Crank{" "}
                    <span className="block text-dim">out now</span>
                  </h3>
                  <p className="max-w-[320px] text-sm leading-relaxed text-dim">
                    A workout tracker built for strength. Log sets, map muscles and see exactly where you stand.
                  </p>
                  <Pill href={APP_STORE} arrow>
                    Get Crank
                  </Pill>
                </div>
                <div className="flex h-[380px] justify-center overflow-hidden pt-10 md:h-[480px]">
                  <Phone className="w-[250px]">
                    <Shot src="/screens/plan-hub.jpg" alt="Crank workout tab with today's plan" sizes="250px" />
                  </Phone>
                </div>
              </Panel>

              <Panel id="friggy" className="grid scroll-mt-28 md:grid-cols-2">
                <div className="order-2 flex h-[380px] justify-center overflow-hidden pt-10 md:order-1 md:h-[480px]">
                  <Phone className="w-[250px]">
                    <Shot
                      src="/screens/friggy-explore.jpg"
                      alt="friggy Explore tab with recipes for what's in the fridge"
                      sizes="250px"
                    />
                  </Phone>
                </div>
                <div className="order-1 flex flex-col items-start justify-center gap-5 p-8 md:order-2 md:p-12">
                  <AppIcon app="friggy" className="w-14" />
                  <h3 className="text-title">
                    friggy{" "}
                    <span className="block text-dim">coming soon</span>
                  </h3>
                  <p className="max-w-[360px] text-sm leading-relaxed text-dim">
                    <span className="text-ink">Snap your fridge. Find your next meal.</span> Three recipes from what you
                    already have, a timer while you cook and a log of every plate.
                  </p>
                </div>
              </Panel>
            </div>
          </Container>

          {/* Story */}
          <Container className="reveal">
            <SectionTitle title="by lifters" sub="for lifters" />
            <div className="mx-auto mt-14 flex max-w-[640px] flex-col gap-6 md:mt-16">
              {story.map((m, i) => (
                <div key={i} className={cn("flex items-end gap-3", m.you && "flex-row-reverse")}>
                  {!m.you && (
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-panel text-brand">
                      <Mark className="size-4" />
                    </span>
                  )}
                  <div className={cn("flex min-w-0 flex-col gap-1.5", m.you ? "items-end" : "items-start")}>
                    <p className="px-1 text-xs text-dim">{m.who}</p>
                    {m.lines.map((line) => (
                      <p
                        key={line}
                        className={cn(
                          "max-w-[480px] rounded-[22px] px-4 py-2.5 text-sm leading-relaxed",
                          m.you ? "bg-[#007aff] text-white" : "bg-panel text-ink",
                        )}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>

          {/* Pricing */}
          <Container id="pricing" className="reveal scroll-mt-28">
            <SectionTitle title="no bulls**t pricing" sub="one plan for Crank, everything in it" />
            <div className="mt-14 grid gap-4 md:mt-16 lg:grid-cols-2">
              <Panel className="flex flex-col justify-between gap-12 p-8 md:p-12">
                <div>
                  <p className="text-stat">
                    Ultra <span className="text-sm tracking-normal text-dim">Crank&apos;s only plan</span>
                  </p>
                  <p className="mt-6 max-w-[360px] text-sm leading-relaxed text-dim">
                    Eligible new subscribers start with a free trial. After that it&apos;s a yearly plan, or one payment
                    for lifetime. <span className="text-ink">Nothing is locked behind a higher tier.</span>
                  </p>
                  <p className="mt-3 max-w-[360px] text-sm leading-relaxed text-dim">
                    Every emptea app has its own subscription. Crank Ultra covers Crank.
                  </p>
                </div>
                <Pill href={APP_STORE} arrow className="self-start">
                  Get Crank
                </Pill>
              </Panel>
              <Panel className="p-8 md:p-12">
                <h3 className="text-[22px] leading-tight tracking-[-0.03em]">everything in Crank Ultra, included</h3>
                <CheckList items={included} className="mt-6" />
                <p className="mt-8 text-sm text-dim">
                  Something missing?{" "}
                  <a href={CONTACT} className="text-ink underline-offset-4 hover:underline">
                    tell us ↗
                  </a>
                </p>
              </Panel>
            </div>
          </Container>

          {/* FAQ */}
          <Container id="faq" className="reveal scroll-mt-28">
            <div className="mx-auto max-w-[760px]">
              <h2 className="text-heading">your questions, answered</h2>
              <div className="mt-10">
                <Faq />
              </div>
            </div>
          </Container>

          {/* CTA */}
          <Container className="reveal">
            <div className="relative mx-auto flex aspect-[4/5] max-w-[440px] flex-col justify-end overflow-hidden rounded-panel bg-night p-8 text-white sm:p-10">
              <Image src="/photos/crank-05.jpg" alt="" fill sizes="440px" className="object-cover object-bottom" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.75),rgba(0,0,0,0.3)_40%,transparent_65%)]" />
              <div className="relative flex flex-col items-start gap-6">
                <h2 className="text-balance text-[clamp(30px,3.6vw,40px)] leading-[1.1] tracking-[-0.04em]">
                  start today. thank yourself later.
                </h2>
                <Pill href={APP_STORE} arrow>
                  Get Crank
                </Pill>
              </div>
            </div>
          </Container>
        </div>
      </main>

      <div className="mt-24 md:mt-32">
        <Footer />
      </div>
    </div>
  );
}

function SetupStep({ n, title, body, children }: { n: number; title: string; body: string; children: React.ReactNode }) {
  return (
    <Panel className="grid items-center gap-8 p-6 sm:grid-cols-2 sm:gap-10 sm:p-10">
      <div className="flex justify-center">{children}</div>
      <div>
        <p className="text-sm text-dim">
          <span className="sr-only">Step </span>
          {n}
        </p>
        <h3 className="mt-3 text-[24px] leading-tight tracking-[-0.03em]">{title}</h3>
        <p className="mt-1 text-sm text-dim">{body}</p>
      </div>
    </Panel>
  );
}
