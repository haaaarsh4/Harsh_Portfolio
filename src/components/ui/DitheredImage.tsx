"use client";
import { useRef, useEffect, useState } from "react";

interface Props {
  src: string;
  className?: string;
  nightMode?: boolean;
  maxSize?: number;
}

export default function DitheredImage({ src, className = "", nightMode = false, maxSize = 960 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Intersection observer: only render when near viewport
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setShouldRender(true); return; }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldRender) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    let resizeFrame = 0;
    let painted = false;
    let lastWidth = 0;

    const img = new Image();
    img.crossOrigin = "anonymous";

    const paint = () => {
      if (cancelled) return;
      // Draw at the size the image is actually displayed at, so one dither dot
      // lands on one CSS pixel. Drawing at a fixed large size and letting the
      // browser scale it down is what made the halftone collapse into a broken
      // checkerboard on narrow screens.
      // clientWidth rather than getBoundingClientRect: these canvases are
      // animated with transforms, and a scale in progress would otherwise be
      // baked into the backing-store size.
      const boxWidth = canvas.clientWidth;
      const targetWidth = Math.min(boxWidth > 0 ? boxWidth : maxSize, maxSize);
      if (painted && Math.abs(targetWidth - lastWidth) < 2) return;
      lastWidth = targetWidth;
      const w = Math.max(24, Math.round(targetWidth));
      const h = Math.max(24, Math.round((w * img.height) / img.width));

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      ctx.clearRect(0, 0, w, h);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(img, 0, 0, w, h);

      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;
      const bayer = [[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]];
      const dotR = nightMode ? 247 : 55;
      const dotG = nightMode ? 245 : 46;
      const dotB = nightMode ? 242 : 40;

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          const a = data[i + 3];
          if (a < 10) { data[i]=0; data[i+1]=0; data[i+2]=0; data[i+3]=0; continue; }
          const gray = data[i]*0.299 + data[i+1]*0.587 + data[i+2]*0.114;
          const threshold = ((bayer[y%4][x%4])/16)*255 + 80;
          data[i]=dotR; data[i+1]=dotG; data[i+2]=dotB;
          data[i+3] = gray > threshold ? 0 : a;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      painted = true;
      if (!cancelled) setIsReady(true);
    };

    const onResize = () => {
      if (!painted) return;
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(paint);
    };

    // Repaint whenever the element itself changes width (breakpoint changes,
    // font loads, sidebar layout), not just on window resize.
    const observer =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => {
            if (!painted) return;
            if (Math.abs(canvas.clientWidth - lastWidth) < 2) return;
            onResize();
          });
    observer?.observe(canvas);

    img.onload = () => {
      const w = window as Window & {
        requestIdleCallback?: (cb: IdleRequestCallback, o?: IdleRequestOptions) => number;
      };
      if (w.requestIdleCallback) w.requestIdleCallback(() => paint(), { timeout: 900 });
      else setTimeout(paint, 120);
      window.addEventListener("resize", onResize);
    };
    img.src = src;

    return () => {
      cancelled = true;
      img.onload = null;
      cancelAnimationFrame(resizeFrame);
      observer?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [src, nightMode, maxSize, shouldRender]);

  return (
    <canvas
      ref={canvasRef}
      className={`${className}${isReady ? " dither-ready" : ""}`}
    />
  );
}
