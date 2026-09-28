"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function ReviewCarousel({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="reviewCarousel">
      <button
        type="button"
        className="reviewNav prev"
        aria-label="Previous reviews"
        onClick={() => go(-1)}
        disabled={!canPrev}
      >
        &lsaquo;
      </button>
      <div className="reviewTrack" ref={trackRef} onScroll={update}>
        {children}
      </div>
      <button
        type="button"
        className="reviewNav next"
        aria-label="Next reviews"
        onClick={() => go(1)}
        disabled={!canNext}
      >
        &rsaquo;
      </button>
    </div>
  );
}
