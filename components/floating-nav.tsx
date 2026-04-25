"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "intro", label: "Intro" },
  { id: "studio", label: "Studio" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function FloatingNav() {
  const [active, setActive] = useState("intro");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => s && io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <nav className="floating-nav" aria-label="Section navigation">
        {NAV_ITEMS.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={active === i.id ? "active" : ""}
          >
            {i.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="mobile-nav-trigger"
        aria-label="Open navigation"
        aria-expanded={open}
        aria-controls="mobile-nav-sheet"
        onClick={() => setOpen(true)}
      >
        <span className="hamburger-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {open && (
        <div
          className="nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          onClick={() => setOpen(false)}
        >
          <div
            id="mobile-nav-sheet"
            className="nav-overlay-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nav-overlay-header">
              <span className="eyebrow">Navigate</span>
              <button
                type="button"
                className="nav-overlay-close"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="nav-overlay-items">
              {NAV_ITEMS.map((i, idx) => (
                <a
                  key={i.id}
                  href={`#${i.id}`}
                  className={active === i.id ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  <span>{i.label}</span>
                  <span className="num">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
