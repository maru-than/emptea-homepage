import { LocateFixed } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="intro"
      className="relative pt-20 md:pt-28 pb-12 overflow-hidden"
    >
      <div className="page-aurora absolute inset-x-0 top-0 h-[720px]" />

      <div className="hero-wordmark" aria-hidden="true">
        emptea.
      </div>

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center">
          <span className="loc-btn">
            <span className="loc-btn-inner">
              <LocateFixed
                size={14}
                strokeWidth={2}
                className="loc-btn-icon"
              />
              <span className="loc-btn-label">Switzerland</span>
            </span>
          </span>
        </div>

        <h1 className="mt-6 text-[40px] sm:text-[56px] md:text-[72px] leading-[1.05] md:leading-[1.0] font-medium tracking-[-1.5px] md:tracking-[-3px] text-white">
          We build apps for iOS
          <br />
          and the modern web.
        </h1>

        <p className="mt-5 sm:mt-6 mx-auto max-w-[560px] text-[14.5px] sm:text-[15.5px] leading-relaxed text-[var(--text-muted)]">
          A small software studio — design, code, release. TypeScript end-to-end.
          Two products live, more in the kiln.
        </p>

        <div className="mt-16 sm:mt-20 md:mt-24 max-w-[880px] mx-auto">
          <HeroHighlightCard />
        </div>
      </div>
    </section>
  );
}

function HeroHighlightCard() {
  return (
    <div className="card card-lg card-ring relative overflow-hidden pt-20 sm:pt-24 md:pt-[120px] pb-14 md:pb-20 px-5 sm:px-8 md:px-12">
      <div className="dome" />
      <div className="dome-ring" />
      <div className="dome-ring-inner" />
      <div className="grid-bg grid-bg-fine" />
      <div className="bottom-spill" />
      <div className="dots opacity-40" />

      <div className="relative text-center">
        <h3 className="text-[30px] sm:text-[40px] md:text-[54px] leading-[1.1] md:leading-[1.05] font-medium tracking-[-1px] md:tracking-[-1.8px] text-white">
          Web, mobile, and
          <br />
          everything between.
        </h3>

        <p className="mt-5 sm:mt-6 mx-auto max-w-[540px] text-[13.5px] sm:text-[14.5px] leading-relaxed text-[var(--text-soft)]">
          Two iOS apps in production, a marketplace launching, and a handful of
          smaller bets running alongside. We take on a{" "}
          <span className="u-word">few outside projects</span> a year — the kind
          where design and engineering belong{" "}
          <span className="u-word">under one roof</span>.
        </p>

        <div className="mt-7 sm:mt-8 flex justify-center">
          <a href="#contact" className="gloss-btn gloss-btn-lg">
            <span className="gloss-btn-label">Let&apos;s talk.</span>
          </a>
        </div>
      </div>
    </div>
  );
}
