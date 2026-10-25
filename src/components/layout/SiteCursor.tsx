"use client";

import { useEffect, useRef } from "react";

/**
 * The "plus" cursor lives in the root layout, so the landing page and every
 * sub-page draw the same cursor. The hover label is driven
 * imperatively from the sections that want one, via the two exports below.
 */

let labelEl: HTMLDivElement | null = null;

export function showCursorLabel(text: string) {
  if (!labelEl) return;
  if (labelEl.textContent !== text) labelEl.textContent = text;
  labelEl.classList.add("visible");
}

export function hideCursorLabel() {
  if (!labelEl) return;
  labelEl.classList.remove("visible");
}

export default function SiteCursor() {
  const plusRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const cursorRafRef = useRef<number>(0);
  const cursorPendingRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    labelEl = cursorLabelRef.current;
    return () => {
      if (labelEl === cursorLabelRef.current) labelEl = null;
    };
  }, []);

  // Enable the custom cursor only on devices with a real mouse (fine pointer + hover).
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => {
      document.body.classList.toggle("custom-cursor-on", mq.matches);
      if (!mq.matches) {
        document.body.classList.remove("custom-cursor-visible");
        if (cursorLabelRef.current) cursorLabelRef.current.classList.remove("visible");
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      document.body.classList.remove("custom-cursor-on");
      document.body.classList.remove("custom-cursor-visible");
    };
  }, []);

  // Track the pointer and move the cursor + label, batched via rAF.
  useEffect(() => {
    const showSiteCursor = () => {
      if (document.body.classList.contains("custom-cursor-on")) {
        document.body.classList.add("custom-cursor-visible");
      }
    };
    const hideSiteCursor = () => {
      document.body.classList.remove("custom-cursor-visible");
      if (cursorLabelRef.current) cursorLabelRef.current.classList.remove("visible");
    };
    const flushCursor = () => {
      cursorRafRef.current = 0;
      const pending = cursorPendingRef.current;
      if (!pending) return;
      if (cursorLabelRef.current) {
        cursorLabelRef.current.style.transform = `translate3d(${pending.x + 16}px, ${pending.y + 16}px, 0)`;
      }
      if (plusRef.current) {
        plusRef.current.style.transform = `translate3d(${pending.x - 17}px, ${pending.y - 17}px, 0)`;
      }
      cursorPendingRef.current = null;
    };
    const onPointerMove = (e: PointerEvent) => {
      showSiteCursor();
      cursorPendingRef.current = { x: e.clientX, y: e.clientY };
      if (!cursorRafRef.current) cursorRafRef.current = window.requestAnimationFrame(flushCursor);
    };
    const onRootMouseEnter = () => showSiteCursor();
    const onRootMouseLeave = () => hideSiteCursor();
    const onVisibilityChange = () => {
      if (document.visibilityState !== "visible") hideSiteCursor();
    };
    const onWindowBlur = () => hideSiteCursor();
    const rootEl = document.documentElement;
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    rootEl.addEventListener("mouseenter", onRootMouseEnter);
    rootEl.addEventListener("mouseleave", onRootMouseLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("blur", onWindowBlur);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      rootEl.removeEventListener("mouseenter", onRootMouseEnter);
      rootEl.removeEventListener("mouseleave", onRootMouseLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("blur", onWindowBlur);
      if (cursorRafRef.current) window.cancelAnimationFrame(cursorRafRef.current);
      document.body.classList.remove("custom-cursor-visible");
    };
  }, []);

  return (
    <>
      <div ref={plusRef} className="site-cursor-plus" aria-hidden="true" />
      <div ref={cursorLabelRef} className="cursor-label" aria-hidden="true" />
    </>
  );
}
