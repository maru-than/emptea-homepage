"use client";

import { useEffect, useRef } from "react";

export function RiseVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.playbackRate = 2;
    }
  }, []);

  return (
    <video
      ref={ref}
      src="/rise.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="block aspect-[9/19.5] w-[260px] object-cover sm:w-[280px]"
    />
  );
}
