export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center text-center">
        <p
          className="font-serif text-black"
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "clamp(20px, 2.4vw, 28px)",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            maxWidth: "32ch",
          }}
        >
          emptea studios is a creative software studio building thoughtful apps
          and digital experiences.
        </p>
        <p
          className="mt-6 text-black/50"
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontStyle: "italic",
            fontSize: "clamp(13px, 1.1vw, 15px)",
            letterSpacing: "0.01em",
          }}
        >
          Founded by Maru.
        </p>
      </div>
    </main>
  );
}
