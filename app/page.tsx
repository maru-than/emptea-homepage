import Image from "next/image";
import { HeartPulse, LayoutGrid, Mic, Search, Star, Timer } from "lucide-react";
import { APP_STORE, AppIcon, Laurel, Mark } from "@/components/home/brand";
import { AccessCard, Footer, Nav, PillButton } from "@/components/home/chrome";
import { Extras } from "@/components/home/extras";
import { Hero } from "@/components/home/hero";
import { TrainingCollage } from "@/components/home/panels";
import { FlexScreen, FocusScreen, Phone, Screen, Shot } from "@/components/home/phone";
import { Suite } from "@/components/home/suite";
import { cn } from "@/lib/utils";

const tint = {
  blue: "65, 94, 238",
  lilac: "185, 166, 255",
  green: "49, 206, 1",
  teal: "131, 227, 222",
  red: "244, 108, 65",
  pink: "255, 150, 194",
  orange: "255, 171, 148",
};

const bottomTint = (rgb: string) => ({
  backgroundImage: `linear-gradient(rgba(0,0,0,0) 40%, rgba(${rgb},0.2) 90%, rgba(${rgb},0.4))`,
});

const cornerTint = (rgb: string) => ({
  backgroundImage: `radial-gradient(circle at 75% 100%, rgba(${rgb},0.4), rgba(${rgb},0.2) 10%, rgba(0,0,0,0) 64%)`,
});

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1376px] px-4 md:px-8", className)}>{children}</div>;
}

function SectionHead({ title, body, dark }: { title: React.ReactNode; body?: string; dark?: boolean }) {
  return (
    <div className="reveal mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
      <h2 className="text-heading">{title}</h2>
      {body && <p className={cn("text-lead", dark ? "text-white/60" : "text-ink/60")}>{body}</p>}
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

// Crank's App Store screenshots, in store order.
const screenshots = [
  { src: "/screenshots/crank-01.jpg", alt: "Improve your body like never before" },
  { src: "/screenshots/crank-07.jpg", alt: "Designed to track workouts in lightspeed" },
  { src: "/screenshots/crank-03.jpg", alt: "Identify your weaknesses, muscle by muscle" },
  { src: "/screenshots/crank-08.jpg", alt: "Line up against your friends" },
  { src: "/screenshots/crank-04.jpg", alt: "Track your progress from your home screen" },
  { src: "/screenshots/crank-09.jpg", alt: "Share every workout, follow your friends" },
  { src: "/screenshots/crank-06.jpg", alt: "Hundreds of built-in exercises with graphics and instructions" },
  { src: "/screenshots/crank-10.jpg", alt: "Beautiful visualizations, made in Switzerland" },
  { src: "/screenshots/crank-02.jpg", alt: "100% personalized for you" },
  { src: "/screenshots/crank-05.jpg", alt: "Available in 28 languages" },
];

const suite = [
  {
    name: "Crank",
    body: "A workout tracker built for speed. Log sets, map muscles and see exactly where you stand.",
    rgb: tint.blue,
    screen: <Shot src="/screens/workout-hub.jpg" alt="Crank workout tab with today's plan" sizes="280px" />,
  },
  {
    name: "FlexMax",
    body: "A stretching app for flexibility that lasts. Short routines, measured range, visible progress.",
    rgb: tint.green,
    screen: <Screen><FlexScreen /></Screen>,
  },
  {
    name: "Rise",
    body: "A mindfulness app for a quieter mind. Meditate, journal and take time off the apps that take yours.",
    rgb: tint.lilac,
    screen: <Screen><FocusScreen /></Screen>,
  },
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
    rgb: tint.lilac,
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
    rgb: tint.red,
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
    rgb: tint.pink,
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
    rgb: tint.teal,
    screen: <Shot src="/screens/profile.jpg" alt="Crank profile with shared workouts" sizes="290px" />,
  },
];

// Paste real store reviews here; the principle cards show until then.
const reviews: { title: string; author: string; date: string; body: string }[] = [];

const principles = [
  { title: "Focused", body: "Each app does one job and does it well. No feature sprawl." },
  { title: "Fast", body: "Native Swift. Every screen opens instantly, offline included." },
  { title: "Fair", body: "Priced for people, not procurement. The core stays free." },
  { title: "Honest", body: "No dark patterns, no surprise renewals, no data resale." },
  { title: "Small", body: "A tiny studio that reads every email you send." },
  { title: "Native", body: "Widgets, Live Activities, Apple Health and Shortcuts, done properly." },
];

// Photo collage: one entry per column, tiles stacked top to bottom.
type Tile = { h: number; src?: string; alt?: string };
const collage: { offset: number; tiles: Tile[] }[] = [
  { offset: 36, tiles: [{ h: 230, src: "/photos/crank-01.jpg" }, { h: 230, src: "/photos/crank-02.jpg" }] },
  { offset: 0, tiles: [{ h: 166, src: "/photos/crank-03.jpg" }, { h: 166, src: "/photos/crank-04.jpg" }, { h: 166, src: "/photos/crank-05.jpg" }] },
  { offset: 88, tiles: [{ h: 370, src: "/photos/crank-06.jpg" }] },
  { offset: 0, tiles: [{ h: 370, src: "/photos/crank-14.jpg" }] },
  { offset: 0, tiles: [{ h: 370, src: "/photos/crank-12.jpg" }] },
  { offset: 88, tiles: [{ h: 370, src: "/photos/crank-07.jpg" }] },
  { offset: 0, tiles: [{ h: 166, src: "/photos/crank-08.jpg" }, { h: 166, src: "/photos/crank-09.jpg" }, { h: 166, src: "/photos/crank-10.jpg" }] },
  { offset: 36, tiles: [{ h: 230, src: "/photos/crank-11.jpg" }, { h: 230, src: "/photos/crank-13.jpg" }] },
];
const cards = reviews.length
  ? reviews.map((r) => ({ title: r.title, meta: `${r.author}, ${r.date}`, body: r.body, rated: true }))
  : principles.map((p) => ({ ...p, meta: "emptea principle", rated: false }));

const tileTints = ["#161a2a", "#1c1828", "#14211a", "#261a16", "#142221", "#261722", "#26221a"];

/* ── page ────────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <AccessCard />

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

        {/* Screenshots */}
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
          <Container className="mt-20">
            <div className="marquee-wrap edge-fade overflow-hidden">
              <div
                className="marquee gap-6 pr-6 md:gap-8 md:pr-8"
                style={{ "--marquee-duration": "60s" } as React.CSSProperties}
              >
                {[0, 1].map((copy) =>
                  screenshots.map((shot, i) => (
                    <div
                      key={`${copy}-${i}`}
                      className="relative aspect-[9/16] w-[200px] shrink-0 overflow-hidden rounded-2xl bg-mist md:w-[236px]"
                      aria-hidden={copy === 1}
                    >
                      <Image src={shot.src} alt={copy ? "" : shot.alt} fill sizes="236px" className="object-cover" />
                    </div>
                  )),
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Suite */}
        <section id="apps" className="scroll-mt-24 overflow-hidden pb-40">
          <Container className="flex flex-col gap-20">
            <SectionHead
              title={
                <>
                  One studio,
                  <br />
                  three apps
                </>
              }
              body="Focused tools for the parts of life that compound: strength, flexibility and focus."
            />

            <div className="grid gap-4 lg:grid-cols-3">
              {suite.map((app) => (
                <article
                  key={app.name}
                  className="reveal flex h-[680px] flex-col overflow-hidden rounded-3xl bg-mist md:h-[740px]"
                  style={bottomTint(app.rgb)}
                >
                  <div className="flex flex-col gap-4 p-8 md:p-12">
                    <h3 className="text-title">{app.name}</h3>
                    <p className="text-lead text-ink/60">{app.body}</p>
                  </div>
                  <div className="flex flex-1 justify-center">
                    <Phone className="w-[280px] translate-y-6">{app.screen}</Phone>
                  </div>
                </article>
              ))}
            </div>

            <article
              className="reveal grid overflow-hidden rounded-3xl bg-mist lg:h-[658px] lg:grid-cols-2"
              style={bottomTint(tint.lilac)}
            >
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

            <article
              className="reveal grid overflow-hidden rounded-3xl bg-mist lg:h-[658px] lg:grid-cols-2"
              style={bottomTint(tint.teal)}
            >
              <div className="relative order-2 flex h-[560px] justify-center lg:order-1 lg:h-auto">
                <Phone className="w-[290px] translate-y-16">
                  <Shot src="/screens/exercise-squat.jpg" alt="Crank exercise page for the barbell squat" sizes="290px" />
                </Phone>
                {exerciseTiles.map((t, i) => (
                  <span
                    key={i}
                    className={cn(
                      "float absolute flex size-16 items-center justify-center rounded-[20px] bg-white shadow-[0_10px_30px_-10px_rgba(31,32,37,0.25)]",
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
          <section id="crank" className="scroll-mt-24 bg-night py-40 text-white">
            <Container className="flex flex-col gap-20">
              <Suite />
              <SectionHead
                dark
                title={
                  <>
                    <span className="text-white/60">Know your body</span>
                    <br />
                    with Crank
                  </>
                }
                body="A tracker that reads your training back to you, four ways."
              />
              <div className="flex flex-col gap-4">
                {insights.map((card, i) => (
                  <article
                    key={i}
                    className="reveal grid overflow-hidden rounded-3xl bg-mist text-ink lg:h-[620px] lg:grid-cols-2"
                    style={cornerTint(card.rgb)}
                  >
                    <div className="flex flex-col justify-center gap-4 p-8 md:p-16">
                      <h3 className="text-heading">{card.title}</h3>
                      <p className="text-lead max-w-[420px] text-ink/60">{card.body}</p>
                    </div>
                    <div className="flex h-[520px] justify-center lg:h-auto">
                      <Phone className="w-[290px] translate-y-14">{card.screen}</Phone>
                    </div>
                  </article>
                ))}
              </div>
            </Container>
          </section>
          {/* shutter: dark bands thinning into the light section */}
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

        {/* Privacy */}
        <section className="pb-40">
          <Container>
            <div
              className="reveal relative flex h-[560px] flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl bg-night px-6 text-center text-white ring-1 ring-inset ring-white/10 md:h-[650px]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 0, rgba(255,255,255,0) 40%, rgba(63,255,194,0.2) 90%, rgba(63,255,194,0.4))",
              }}
            >
              <Mark className="absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 text-white/[0.04]" />
              <h2 className="text-heading relative">Private by default</h2>
              <p className="text-lead relative max-w-[560px] text-white/60">
                Your lifts, your body, your data. Export everything any time. We never sell it.
              </p>
            </div>
          </Container>
        </section>

        {/* Care */}
        <section className="overflow-hidden">
          <Container>
            <div className="flex justify-center gap-4 overflow-hidden">
              {collage.map((col, c) => (
                <div
                  key={c}
                  className={cn(
                    "reveal flex w-[143px] shrink-0 flex-col gap-4",
                    (c === 0 || c === 7) && "hidden xl:flex",
                    (c === 1 || c === 6) && "hidden lg:flex",
                    (c === 2 || c === 5) && "hidden sm:flex",
                  )}
                  style={{ paddingTop: col.offset }}
                >
                  {col.tiles.map((t, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-[28px]"
                      style={{ height: t.h, background: tileTints[(c * 3 + i) % tileTints.length] }}
                    >
                      {t.src ? (
                        <Image src={t.src} alt={t.alt ?? ""} fill sizes="143px" className="object-cover" />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Mark className="size-8 text-ink/10" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Container>
          <Container className="mt-16 flex flex-col gap-16">
            <SectionHead
              title={
                <>
                  Made with care,
                  <br />
                  in Switzerland
                </>
              }
              body="We're a small studio making focused apps. No bloat, no dark patterns, just software that does its job."
            />
          </Container>
          <Container className="mt-16">
            <div className="marquee-wrap edge-fade overflow-hidden">
              <div className="marquee gap-6 pr-6" style={{ "--marquee-duration": "60s" } as React.CSSProperties}>
                {[0, 1].map((copy) =>
                  cards.map((r, i) => (
                    <article
                      key={`${copy}-${i}`}
                      className="flex h-[358px] w-[300px] shrink-0 flex-col gap-4 rounded-[32px] bg-mist p-8 md:w-[384px]"
                      aria-hidden={copy === 1}
                    >
                      {r.rated ? (
                        <span className="flex gap-1 text-[#ff9500]" aria-label="5 out of 5">
                          {Array.from({ length: 5 }, (_, k) => (
                            <Star key={k} className="size-[18px] fill-current" strokeWidth={0} />
                          ))}
                        </span>
                      ) : (
                        <Mark className="size-[18px] text-[#ff9500]" />
                      )}
                      <div className="flex flex-col gap-1">
                        <h3 className="text-[18px] font-semibold">{r.title}</h3>
                        <p className="text-[18px] text-ink/60">{r.meta}</p>
                      </div>
                      <p className="text-[18px] leading-snug">{r.body}</p>
                    </article>
                  )),
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="overflow-hidden pt-40">
          <Container className="flex flex-col items-center gap-6">
            <SectionHead
              title="Start today. Thank yourself later."
              body="Crank is free on the App Store. FlexMax and Rise are on the way."
            />
            <PillButton href={APP_STORE}>Get Crank</PillButton>
          </Container>
          <div className="relative mx-auto mt-16 flex h-[420px] max-w-[1100px] items-start justify-center [mask-image:linear-gradient(#000_70%,transparent)]">
            <AppIcon app="crank" className="absolute left-[8%] top-24 hidden w-36 rotate-[-12deg] md:flex" />
            <AppIcon app="flexmax" className="absolute left-[24%] top-60 hidden w-24 rotate-[8deg] lg:flex" />
            <Phone className="w-[260px]">
              <Shot src="/screens/workout-hub.jpg" alt="Crank workout tab" sizes="260px" />
            </Phone>
            <AppIcon app="rise" className="absolute right-[10%] top-20 hidden w-36 rotate-[10deg] md:flex" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
