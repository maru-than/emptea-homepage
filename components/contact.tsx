import Link from "next/link";

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

const EMAIL = "maruthan@outlook.com";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mt-24 sm:mt-32 md:mt-40 mb-28 sm:mb-32 md:mb-40"
    >
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <SectionEyebrow>Working on something worth making?</SectionEyebrow>
        <SectionTitle>Get in touch</SectionTitle>
        <SectionSub>One short email. One real reply within a week.</SectionSub>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-10 sm:mt-12 md:mt-14 card card-lg card-ring relative block overflow-hidden group pt-20 sm:pt-24 md:pt-[110px] pb-14 md:pb-20 px-5 sm:px-6"
        >
          <div className="dome" />
          <div className="dome-ring" />
          <div className="dome-ring-inner" />
          <div className="grid-bg grid-bg-fine" />
          <div className="bottom-spill" />

          <div className="relative text-center">
            <p className="text-[22px] sm:text-[26px] font-medium tracking-[-0.6px] text-white">
              Let&apos;s talk.
            </p>
            <p className="mt-2 text-[13px] sm:text-[13.5px] text-[var(--text-muted)] px-2">
              {EMAIL}
            </p>
            <div className="mt-6 sm:mt-7">
              <span className="gloss-btn">
                <span className="gloss-btn-label">Email us</span>
              </span>
            </div>
          </div>
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-[var(--text-muted)]">
          <a
            href="#intro"
            className="hover:text-white transition"
          >
            Top
          </a>
          <span className="opacity-40">·</span>
          <a href="#studio" className="hover:text-white transition">
            Studio
          </a>
          <span className="opacity-40">·</span>
          <a href="#work" className="hover:text-white transition">
            Work
          </a>
          <span className="opacity-40">·</span>
          <Link
            href="/terms-of-service"
            className="hover:text-white transition"
          >
            Terms
          </Link>
          <span className="opacity-40">·</span>
          <Link
            href="/privacy-policy"
            className="hover:text-white transition"
          >
            Privacy
          </Link>
          <span className="opacity-40">·</span>
          <Link href="/eula" className="hover:text-white transition">
            EULA
          </Link>
        </div>

        <p className="mt-12 sm:mt-16 text-center text-[11px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
          © emptea studios · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
