import { Plus } from "lucide-react";
import { WAITLIST } from "@/components/home/brand";

// Answers stick to what Crank's own listing states (see public/llms.txt). No prices: they show in the app.
const questions = [
  {
    q: "How much does Crank cost?",
    a: "Crank Ultra is one plan with everything in it. Eligible new subscribers start with a free trial, then it's a yearly subscription or a one-time lifetime purchase. Current prices show in the app.",
  },
  {
    q: "Does Crank remember my last workout?",
    a: "Yes. Pick one of 88 ready-made plans or build your own, and Crank fills in the weight and reps from last time.",
  },
  {
    q: "Does it work with Apple Health?",
    a: "Both ways. Weight and steps come in, finished workouts go out. Siri Shortcuts, Spotlight and Controls work too.",
  },
  {
    q: "Can I add my own exercises?",
    a: "Yes. Nearly 400 exercises come with step-by-step instructions, target muscles and your full history, and you can add your own.",
  },
  {
    q: "Which devices and languages are supported?",
    a: "Crank is made for iPhone, iOS 26 or later. It speaks 28 languages and comes with 9 city themes, each in light and dark.",
  },
  {
    q: "What are FlexMax and Rise?",
    a: "The next two emptea apps, one for flexibility and one for a quieter mind. Both are still in development.",
  },
];

export function Faq() {
  return (
    <div className="flex flex-col border-t border-hairline">
      {questions.map((item) => (
        <details key={item.q} className="faq group border-b border-hairline">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-sm transition-colors hover:text-dim focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
            {item.q}
            <Plus className="faq-plus size-4 shrink-0 text-dim transition-transform duration-300" strokeWidth={1.5} />
          </summary>
          <p className="max-w-[640px] pb-6 text-sm leading-relaxed text-dim">
            {item.a}
            {item.q.startsWith("What are") && (
              <>
                {" "}
                <a href={WAITLIST} className="text-ink underline-offset-4 hover:underline">
                  join the waitlist ↗
                </a>
              </>
            )}
          </p>
        </details>
      ))}
    </div>
  );
}
