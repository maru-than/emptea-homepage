"use client";

import { useEffect, useState } from "react";

export function IntroLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = prev;
    }, 2800);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, []);

  if (done) return null;

  return (
    <div className="intro-loader" aria-hidden="true">
      <div className="intro-atmosphere" />
      <div className="intro-name-wrap">
        <span className="intro-name">emptea</span>
        <div className="intro-bar-track">
          <div className="intro-bar-fill" />
        </div>
      </div>
    </div>
  );
}
