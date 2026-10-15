import Image from "next/image";
import { HeartPulse, LayoutGrid, Mic, Search, Timer } from "lucide-react";
import { APP_STORE, AppIcon, type AppId, Laurel } from "@/components/home/brand";
import { Footer, JoinPill, Nav, PillButton } from "@/components/home/chrome";
import { Extras } from "@/components/home/extras";
import { Hero } from "@/components/home/hero";
import { TrainingCollage } from "@/components/home/panels";
import { Phone, Shot } from "@/components/home/phone";
import { SmoothScroll } from "@/components/home/smooth-scroll";
import { StackedCards } from "@/components/home/stack";
import { StructuredData } from "@/components/home/structured-data";
import { cn } from "@/lib/utils";

// Neutral light falling onto the lower edge of a card.
const bottomGlow = {
  backgroundImage: "linear-gradient(rgba(255,255,255,0) 40%, rgba(255,255,255,0.03) 80%, rgba(255,255,255,0.07))",
};

const cornerGlow = {
  backgroundImage: "radial-gradient(circle at 75% 100%, rgba(255,255,255,0.09), rgba(255,255,255,0.04) 20%, rgba(255,255,255,0) 64%)",
};

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1376px] px-4 md:px-8", className)}>{children}</div>;
}

function SectionHead({ title, body }: { title: React.ReactNode; body?: string }) {
  return (
    <div className="reveal mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
      <h2 className="text-heading">{title}</h2>
      {body && <p className="text-lead text-ink/60">{body}</p>}
    </div>
  );
}

/* ── data ────────────────────────────────────────────────────────── */

const platforms = [
  { icon: LayoutGrid, label: "Widgets" },
  { icon: Timer, label: "Live Activities" },
  { icon: HeartPulse, label: "Apple Health" },
  { icon: Mic, label: "Siri Shortcuts" },
  { icon: Search, label: "Spotlight" },
];

// Real Crank screens, shown in phones. Swap a src for an .mp4 to play a clip instead.
const showcase = [
  { src: "/screens/home-body.jpg", alt: "Body map colored by trained muscles" },
  { src: "/screens/workout-hub.jpg", alt: "Workout tab with today's plan" },
  { src: "/screens/home-charts.jpg", alt: "Charts with the training heatmap" },
  { src: "/screens/exercise-squat.jpg", alt: "Exercise page for the barbell squat" },
  { src: "/screens/leaderboard.jpg", alt: "Leaderboard of top athletes" },
  { src: "/screens/home-standards.jpg", alt: "PR standards per muscle" },
  { src: "/screens/activity.jpg", alt: "Activity heatmap for the year" },
  { src: "/screens/share-card.jpg", alt: "Share card ready for Instagram Stories" },
  { src: "/screens/rest-timer.jpg", alt: "Rest timer Live Activity on the lock screen" },
  { src: "/screens/themes.jpg", alt: "Appearance settings with city themes" },
  { src: "/screens/languages.jpg", alt: "Analytics in German" },
  { src: "/screens/profile.jpg", alt: "Profile with workout history" },
];

// FlexMax and Rise are still under wraps: a name and a hint, nothing more.
const teasers: { app: AppId; name: string; hint: string; glow: string }[] = [
  { app: "flexmax", name: "FlexMax", hint: "Something for flexibility. That's all we'll say for now.", glow: "#1f9e52" },
  { app: "rise", name: "Rise", hint: "Something for a quieter mind. More soon.", glow: "#f0612e" },
];

const exerciseTiles = [
  { src: "/exercises/barbell-bench-press.png", pos: "left-[6%] top-[12%]", d: "0s" },
  { src: "/exercises/barbell-full-squat.png", pos: "left-[18%] top-[58%]", d: "1.2s" },
  { src: "/exercises/barbell-deadlift.png", pos: "right-[8%] top-[18%]", d: "0.6s" },
  { src: "/exercises/pull-up.png", pos: "right-[20%] top-[64%]", d: "1.8s" },
  { src: "/exercises/barbell-bent-over-row.png", pos: "left-[30%] top-[6%]", d: "2.4s" },
  { src: "/exercises/barbell-curl.png", pos: "right-[30%] top-[4%]", d: "3s" },
];

const insights = [
  {
    title: (
      <>
        Map
        <br />
        every muscle
      </>
    ),
    body: "Front and back, colored by what you trained and what you skipped. Weakest muscle first.",
    screen: <Shot src="/screens/home-body.jpg" alt="Crank body map colored by trained muscles" sizes="290px" />,
  },
  {
    title: (
      <>
        Never miss
        <br />
        a week
      </>
    ),
    body: "A heatmap of every session and a streak that counts weeks, not days.",
    screen: <Shot src="/screens/activity.jpg" alt="Crank activity heatmap for the year" sizes="290px" />,
  },
  {
    title: (
      <>
        Line up against
        <br />
        your friends
      </>
    ),
    body: "Leaderboards by strength, volume or consistency. Worldwide, or just your crew.",
    screen: <Shot src="/screens/leaderboard.jpg" alt="Crank leaderboard of top athletes" sizes="290px" />,
  },
  {
    title: (
      <>
        Share
        <br />
        every workout
      </>
    ),
    body: "Post a session to the feed, follow friends and compare lift for lift.",
    screen: <Shot src="/screens/profile.jpg" alt="Crank profile with shared workouts" sizes="290px" />,
  },
];

/* ── page ────────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <div className="bg-paper text-ink">
      <StructuredData />
      <SmoothScroll />
      <Nav />
      <JoinPill />

      <main>
        <Hero />

        {/* Platforms */}
        <section className="pt-24">
          <Container className="flex flex-col items-center gap-6">
            <h2 className="text-[24px] font-semibold leading-[0.9]">Made for iPhone, works with</h2>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[18px] font-semibold text-ink/80">
              {platforms.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="size-5" strokeWidth={2.25} />
                  {label}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Showcase */}
        <section className="py-40">
          <Container className="flex flex-col items-center gap-10">
            <div className="flex gap-8">
              <Laurel top="Made in" bottom="Switzerland" />
              <Laurel top="Available in" bottom="28 languages" />
            </div>
            <SectionHead
              title={
                <>
                  Everything between you
                  <br />
                  and your next PR
                </>
              }
            />
          </Container>
          <div className="marquee-wrap edge-fade mt-12 overflow-hidden py-12">
            <div
              className="marquee gap-8 pr-8 md:gap-10 md:pr-10"
              style={{ "--marquee-duration": "70s" } as React.CSSProperties}
            >
              {[0, 1].map((copy) =>
                showcase.map((shot) => (
                  <div key={`${copy}-${shot.src}`} aria-hidden={copy === 1}>
                    <Phone className="w-[220px] md:w-[250px]">
                      <Shot src={shot.src} alt={copy ? "" : shot.alt} sizes="250px" />
                    </Phone>
                  </div>
                )),
              )}
            </div>
          </div>
        </section>

        {/* Apps */}
        <section id="apps" className="scroll-mt-24 overflow-hidden pb-40">
          <Container className="flex flex-col gap-20">
            <SectionHead
              title={
                <>
                  One studio,
                  <br />
                  starting with Crank
                </>
              }
              body="Focused tools for the parts of life that compound. Crank is out now, two more are in the works."
            />

            <div className="grid gap-4 lg:h-[740px] lg:grid-cols-3">
              <article
                className="reveal grid overflow-hidden rounded-3xl bg-mist md:grid-cols-2 lg:col-span-2"
                style={bottomGlow}
              >
                <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
                  <p className="text-[16px] font-medium text-green-600">Live on the App Store</p>
                  <h3 className="text-heading">Crank</h3>
                  <p className="text-lead text-ink/60">
                    A workout tracker built for speed. Log sets, map muscles and see exactly where you stand.
                  </p>
                  <PillButton href={APP_STORE} className="mt-2 self-start">
                    Get
                  </PillButton>
                </div>
                <div className="flex h-[560px] justify-center md:h-auto">
                  <Phone className="w-[280px] translate-y-12">
                    <Shot src="/screens/workout-hub.jpg" alt="Crank workout tab with today's plan" sizes="280px" />
                  </Phone>
                </div>
              </article>

              <div className="flex flex-col gap-4">
                {teasers.map((t) => (
                  <article
                    key={t.app}
                    className="reveal relative flex min-h-[320px] flex-1 flex-col justify-between overflow-hidden rounded-3xl bg-mist p-8 md:p-10"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -right-20 -top-20 size-72 rounded-full opacity-20 blur-3xl"
                      style={{ background: t.glow }}
                    />
                    <AppIcon app={t.app} className="relative w-16 blur-[3px] grayscale-[0.4]" />
                    <div className="relative flex flex-col gap-2">
                      <p className="text-[16px] font-medium text-amber-600">In development</p>
                      <h3 className="text-title">{t.name}</h3>
                      <p className="text-[18px] leading-snug text-ink/60">{t.hint}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <article className="reveal grid overflow-hidden rounded-3xl bg-mist lg:h-[658px] lg:grid-cols-2" style={bottomGlow}>
              <div className="flex flex-col justify-center gap-4 p-8 md:p-16">
                <h3 className="text-heading">
                  Every rep,
                  <br />
                  counted
                </h3>
                <p className="text-lead max-w-[420px] text-ink/60">
                  Log a set and Crank does the rest: volume by muscle, PRs, standards and a share card for the ones that matter.
                </p>
              </div>
              <div className="h-[600px] lg:h-auto">
                <TrainingCollage />
              </div>
            </article>

            <article className="reveal grid overflow-hidden rounded-3xl bg-mist lg:h-[658px] lg:grid-cols-2" style={bottomGlow}>
              <div className="relative order-2 flex h-[560px] justify-center lg:order-1 lg:h-auto">
                <Phone className="w-[290px] translate-y-16">
                  <Shot src="/screens/exercise-squat.jpg" alt="Crank exercise page for the barbell squat" sizes="290px" />
                </Phone>
                {exerciseTiles.map((t, i) => (
                  <span
                    key={i}
                    className={cn(
                      "float absolute hidden size-16 items-center sm:flex justify-center rounded-[20px] bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]",
                      t.pos,
                    )}
                    style={{ animationDelay: t.d }}
                  >
                    <Image src={t.src} alt="" width={120} height={120} className="size-11 object-contain" />
                  </span>
                ))}
              </div>
              <div className="order-1 flex flex-col justify-center gap-4 p-8 md:p-16 lg:order-2">
                <h3 className="text-heading">
                  Hundreds
                  <br />
                  of exercises
                </h3>
                <p className="text-lead max-w-[420px] text-ink/60">
                  Every exercise with its graphic, its targets and your full history. Add your own in seconds.
                </p>
              </div>
            </article>
          </Container>
        </section>

        {/* Crank, dark */}
        <div className="relative">
          <section id="crank" className="scroll-mt-24 bg-night pt-40 text-white lg:pt-32">
            <Container className="flex flex-col gap-16 lg:gap-0">
              <SectionHead
                title={
                  <>
                    <span className="text-white/60">Know your body</span>
                    <br />
                    with Crank
                  </>
                }
                body="A tracker that reads your training back to you, four ways."
              />
              <StackedCards>
                {insights.map((card, i) => (
                  <article
                    key={i}
                    className="grid h-full overflow-hidden rounded-3xl bg-mist text-ink shadow-[0_-24px_60px_-24px_rgba(0,0,0,0.9)] ring-1 ring-inset ring-white/10 lg:grid-cols-2"
                    style={cornerGlow}
                  >
                    <div className="flex flex-col justify-center gap-4 p-8 md:p-16">
                      <h3 className="text-heading">{card.title}</h3>
                      <p className="text-lead max-w-[420px] text-ink/60">{card.body}</p>
                    </div>
                    <div className="flex h-[520px] justify-center overflow-hidden lg:h-auto">
                      <Phone className="w-[290px] translate-y-14">{card.screen}</Phone>
                    </div>
                  </article>
                ))}
              </StackedCards>
            </Container>
            <div className="h-24 lg:h-0" />
          </section>
          {/* shutter: dark bands thinning into the next section */}
          <div className="flex flex-col gap-[6px] bg-paper">
            {[20, 14, 9, 5, 2].map((h) => (
              <span key={h} className="shutter-bar block origin-top bg-night" style={{ height: h }} />
            ))}
          </div>
        </div>

        {/* Extras */}
        <section className="py-40">
          <Container>
            <Extras />
          </Container>
        </section>

        {/* CTA */}
        <section className="overflow-hidden">
          <Container className="flex flex-col items-center gap-6">
            <SectionHead
              title="Start today. Thank yourself later."
              body="Crank is free on the App Store. More is on the way."
            />
            <PillButton href={APP_STORE}>Get</PillButton>
          </Container>
          <div className="relative mx-auto mt-16 flex h-[420px] max-w-[1100px] items-start justify-center [mask-image:linear-gradient(#000_70%,transparent)]">
            <Phone className="w-[260px]">
              <Shot src="/screens/workout-hub.jpg" alt="Crank workout tab" sizes="260px" />
            </Phone>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
