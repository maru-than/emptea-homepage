import Image from "next/image";

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center text-center">
        <p className="text-4xl text-black italic">
          Move fast. Break stuff.
        </p>
        <p className="text-xl text-black/50">
          A creative studio, founded by Maruthan. Functional design, industrial precision.
        </p>
      </div>
    </main>
  );
}
