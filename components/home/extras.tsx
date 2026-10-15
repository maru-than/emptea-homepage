"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Phone, Shot } from "@/components/home/phone";

const DURATION = 6000;

const items = [
  {
    title: "Rest timer, everywhere",
    body: "A Live Activity on your lock screen, with 15 seconds more or less one tap away.",
    screen: <Shot src="/screens/rest-timer.jpg" alt="Crank rest timer Live Activity on the lock screen" sizes="300px" />,
  },
  {
    title: "Home screen widgets",
    body: "Today's workout, your streak, steps and one wise line a day.",
    screen: <Shot src="/shots/crank-04.jpg" alt="Crank widgets on an iPhone home screen" sizes="300px" />,
  },
  {
    title: "Strength standards",
    body: "Every lift graded from beginner to elite, and how far the next tier is.",
    screen: <Shot src="/screens/home-standards.jpg" alt="Crank PR standards per muscle" sizes="300px" />,
  },
  {
    title: "Templates and folders",
    body: "Build a split once. Crank remembers every weight and rep you did last time.",
    screen: <Shot src="/screens/workout-templates.jpg" alt="Crank templates in a Push Pull Legs folder" sizes="300px" />,
  },
  {
    title: "Share cards",
    body: "A clean card for every session, ready for your story or your group chat.",
    screen: <Shot src="/screens/share-card.jpg" alt="Crank share card ready for Instagram Stories" sizes="300px" />,
  },
  {
    title: "Apple Health, both ways",
    body: "Steps and bodyweight come in. Finished workouts go out.",
    screen: <Shot src="/screens/bodyweight.jpg" alt="Crank bodyweight synced from Apple Health" sizes="300px" />,
  },
  {
    title: "28 languages",
    body: "Sprichst du Deutsch? Parles-tu français? Crank does, and 26 more.",
    screen: <Shot src="/screens/languages.jpg" alt="Crank analytics in German" sizes="300px" />,
  },
  {
    title: "9 themes",
    body: "Basel to Okinawa, each with a light and a dark side.",
    screen: <Shot src="/screens/themes.jpg" alt="Crank appearance settings with city themes" sizes="300px" />,
  },
  {
    title: "Strength Wrapped",
    body: "Your year in lifts, every December.",
    screen: <Shot src="/screens/wrapped.jpg" alt="Crank recap of muscles levelled up this year" sizes="300px" />,
  },
];

export function Extras() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const id = setTimeout(() => setActive((a) => (a + 1) % items.length), DURATION);
    return () => clearTimeout(id);
  }, [active]);

  // keep the active item centered inside the list without moving the page
  useEffect(() => {
    const list = listRef.current;
    const item = itemRefs.current[active];
    if (!list || !item) return;
    list.scrollTo({
      top: item.offsetTop - list.clientHeight / 2 + item.clientHeight / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div className="grid items-center gap-16 lg:grid-cols-2">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-heading">And there&apos;s more</h2>
          <p className="text-lead text-ink/60">Crank also comes with:</p>
        </div>
        <ul ref={listRef} className="fade-y no-scrollbar relative flex h-[524px] flex-col gap-4 overflow-y-auto py-12">
          {items.map((item, i) => {
            const on = i === active;
            return (
              <li
                key={item.title}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-3xl bg-mist p-6 text-left transition-transform duration-500",
                    on ? "scale-100" : "scale-[0.925] hover:scale-[0.94]",
                  )}
                >
                  <span className={cn("flex flex-col gap-2 transition-opacity", !on && "opacity-50")}>
                    <span className="text-[24px] font-semibold leading-[0.9]">
                      {item.title}
                    </span>
                    <span className="text-[18px] font-medium leading-snug text-ink/60">{item.body}</span>
                  </span>
                  {on ? (
                    <svg viewBox="0 0 36 36" className="size-9 shrink-0 -rotate-90" aria-hidden="true">
                      <circle cx="18" cy="18" r="15.9155" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2.5" />
                      <circle
                        key={active}
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        pathLength={100}
                        className="progress-ring"
                        style={{ "--progress-duration": `${DURATION}ms` } as React.CSSProperties}
                      />
                    </svg>
                  ) : (
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/15 opacity-50">
                      <ArrowRight className="size-4" />
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative mx-auto h-[640px] w-[300px]">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={cn(
              "absolute inset-0 transition-all duration-500",
              i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
            )}
            aria-hidden={i !== active}
          >
            <Phone className="w-[300px]">{item.screen}</Phone>
          </div>
        ))}
      </div>
    </div>
  );
}
