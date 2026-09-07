"use client";
import { useEffect, useRef } from "react";

export default function FloatingBird() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef  = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrapElRaw = wrapRef.current;
    const imgElRaw  = imgRef.current;
    if (!wrapElRaw || !imgElRaw) return;

    const wrapEl: HTMLDivElement  = wrapElRaw;
    const imgEl: HTMLImageElement = imgElRaw;

    let raf: number;
    let t0: number | null = null;

    // Horizontal speed as a fraction of container width per second, with a
    // floor so the bird never crawls on narrow phone viewports (a fixed
    // fraction of a 380px-wide screen is a tiny, sluggish-looking speed).
    const SPEED_FRACTION = 0.065; // ~6.5% of container width per second
    const MIN_SPEED_PX   = 70;    // floor, in px/second
    const START_PHASE    = 0.35;  // where in the loop the bird starts (0..1)

    // ── Dynamic container / bird measurements ──────────────────────
    // NOTE: `container` is only used for vertical sizing (containerHeight)
    // and to convert viewport-space x back into this element's local
    // coordinate space (since wrapEl is position:absolute inside it).
    // The horizontal travel itself is always computed against the full
    // browser viewport width, so the bird truly exits off both edges of
    // the screen even when its positioned ancestor is a narrower,
    // centered content wrapper.
    const container = (wrapEl.offsetParent as HTMLElement) || wrapEl.parentElement;

    let viewportWidth    = 0;
    let containerHeight  = 0;
    let containerLeft    = 0; // container's left edge, relative to viewport
    let birdWidth        = 0;

    function measure() {
      const rect = container
        ? container.getBoundingClientRect()
        : { left: 0, width: window.innerWidth, height: window.innerHeight };
      viewportWidth   = window.innerWidth;
      containerHeight = rect.height || window.innerHeight;
      containerLeft   = rect.left || 0;
      // Fall back to the img's own box if it hasn't rendered yet.
      birdWidth = imgEl.getBoundingClientRect().width || imgEl.offsetWidth || 250;
    }

    measure();

    const ro = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(() => measure())
      : null;
    if (ro && container) ro.observe(container);
    window.addEventListener("resize", measure);

    // Path spans from fully off-screen-left to fully off-screen-right of
    // the BROWSER VIEWPORT (not just the immediate container), with a
    // full bird-width margin on each side so it's NEVER partially
    // visible at the wrap points, regardless of screen size or how the
    // component happens to be nested.
    function getXY(t: number) {
      const span = viewportWidth + birdWidth * 2;
      const speedPx = Math.max(SPEED_FRACTION * viewportWidth, MIN_SPEED_PX);
      const startPx = START_PHASE * span;
      const viewportX = -birdWidth + ((startPx + speedPx * t) % span);
      // Convert back into this element's local (container-relative) space.
      const x = viewportX - containerLeft;

      const y = 45
        + Math.sin(t * 0.25)       * 13
        + Math.sin(t * 0.09 + 1.7) *  5;

      return { x, y };
    }

    // ── Set position at t=0 BEFORE first frame so there's no flash ──
    const p0 = getXY(0);
    wrapEl.style.left = `${p0.x}px`;
    wrapEl.style.top  = `${p0.y}%`;

    // ── Fade in smoothly ────────────────────────────────────────────
    wrapEl.style.transition = "opacity 1.1s ease 0.7s";
    requestAnimationFrame(() => requestAnimationFrame(() => {
      wrapEl.style.opacity = "1";
    }));

    function frame(ts: number) {
      if (t0 === null) t0 = ts;
      const t = (ts - t0) / 1000;

      const cur = getXY(t);
      const nxt = getXY(t + 0.05);

      const speedPx = Math.max(SPEED_FRACTION * viewportWidth, MIN_SPEED_PX);
      const dxPx  = nxt.x - cur.x;
      const dyPct = Math.abs(dxPx) < (viewportWidth * 0.02) ? nxt.y - cur.y : 0;
      // Convert the y delta (in % of height) to px so bank angle stays
      // proportionate regardless of container aspect ratio.
      const dyPx  = (dyPct / 100) * containerHeight;
      const spd   = Math.sqrt(speedPx * speedPx + dyPx * dyPx) || 1;
      const bank  = -(dyPx / spd) * 16;

      const depth = 0.88 + 0.12 * Math.sin(t * 0.07 + 0.4);
      const alpha = 0.50 + 0.16 * Math.sin(t * 0.19 + 1.1);

      wrapEl.style.left = `${cur.x}px`;
      wrapEl.style.top  = `${cur.y}%`;

      imgEl.style.transform =
        `scaleX(-1) rotate(${bank.toFixed(2)}deg) scale(${depth.toFixed(3)})`;
      imgEl.style.opacity = alpha.toFixed(3);

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        opacity: 0,                  // ← starts hidden, JS fades it in
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 1,
        willChange: "left, top",
      }}
    >
      <img
        ref={imgRef}
        src="/bird.gif"
        alt=""
        aria-hidden
        draggable={false}
        className="floating-bird-img"
        style={{
          objectFit: "contain",
          display: "block",
          userSelect: "none",
          transformOrigin: "center center",
          willChange: "transform, opacity",
          mixBlendMode: "multiply",
          filter:
            "sepia(0.18) brightness(0.48) saturate(0.30) contrast(1.18)",
        }}
      />
    </div>
  );
}
