import { Contact } from "@/components/contact";
import { FloatingNav } from "@/components/floating-nav";
import { Hero } from "@/components/hero";
import { IntroLoader } from "@/components/intro-loader";
import { Strengths } from "@/components/strengths";
import { Work } from "@/components/work";

export default function Page() {
  return (
    <main className="relative bg-[var(--bg)]">
      <IntroLoader />
      <Hero />
      <Strengths />
      <Work />
      <Contact />
      <FloatingNav />
    </main>
  );
}
