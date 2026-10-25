"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Endless row that drifts on its own and can be dragged by hand.
 * Render the content twice inside `children`; the row wraps at half its width.
 * Hover pauses the drift, a drag moves it, and a flick carries on with a little momentum.
 */
export function Marquee({
  children,
  duration = 80,
  className,
  trackClassName,
}: {
  children: React.ReactNode;
  /** Seconds for one full loop of the content. */
  duration?: number;
  className?: string;
  trackClassName?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const state = useRef({
    offset: 0,
    velocity: 0, // px per ms, from a flick
    hovered: false,
    drag: null as null | { id: number; x: number; offset: number; lastX: number; lastT: number },
  });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const s = state.current;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const half = el.scrollWidth / 2;

      if (!s.drag && half > 0) {
        if (Math.abs(s.velocity) > 0.02) {
          s.offset += s.velocity * dt;
          s.velocity *= Math.pow(0.95, dt / 16);
        } else {
          s.velocity = 0;
          if (!s.hovered && !still.matches) s.offset -= (half / (duration * 1000)) * dt;
        }
      }

      if (half > 0) s.offset = ((s.offset % half) - half) % half; // keep it in (-half, 0]
      el.style.transform = `translate3d(${s.offset}px,0,0)`;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const s = state.current;
    s.velocity = 0;
    s.drag = { id: e.pointerId, x: e.clientX, offset: s.offset, lastX: e.clientX, lastT: e.timeStamp };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = state.current.drag;
    if (!d || d.id !== e.pointerId) return;
    const dt = e.timeStamp - d.lastT;
    if (dt > 0) state.current.velocity = (e.clientX - d.lastX) / dt;
    d.lastX = e.clientX;
    d.lastT = e.timeStamp;
    state.current.offset = d.offset + (e.clientX - d.x);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const s = state.current;
    if (!s.drag || s.drag.id !== e.pointerId) return;
    // a pause before letting go means no flick
    if (e.timeStamp - s.drag.lastT > 80) s.velocity = 0;
    s.drag = null;
  };

  return (
    <div
      className={cn(
        // pan-y keeps vertical page scroll on touch; horizontal moves the row
        "cursor-grab touch-pan-y select-none active:cursor-grabbing [&_img]:pointer-events-none [&_img]:[-webkit-user-drag:none]",
        className,
      )}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") state.current.hovered = true;
      }}
      onPointerLeave={() => {
        state.current.hovered = false;
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDragStart={(e) => e.preventDefault()}
    >
      <div ref={track} className={cn("flex w-max will-change-transform", trackClassName)}>
        {children}
      </div>
    </div>
  );
}
