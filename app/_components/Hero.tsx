"use client";

import { Fragment, useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { client } from "../data/client";

/* Centred, stacked hero.
   The MOVE lockup clip plays in place at the top. While it is still forming, the
   headline rises in word by word underneath, then the rest of the copy follows.
   The intro plays on every load; reduced-motion users get the settled frame straight away. */

type Phase = "intro" | "settled";

const COPY_AT = 0.8; // clip time to bring the copy in: the logo is still zooming out (it lands ~1.25s), so the two overlap
const PLAYBACK_RATE = 1.6; // the clip is a touch slow at 1×; ~1.25s to the lockup
const FAILSAFE_MS = 3500; // never hold the copy hostage if the video stalls

export function Hero() {
  const { hero } = client;
  const videoRef = useRef<HTMLVideoElement>(null);
  const settledRef = useRef(false);
  const failsafeRef = useRef<number | undefined>(undefined);
  const rafRef = useRef<number | undefined>(undefined);
  const [phase, setPhase] = useState<Phase>("intro");
  const [instant, setInstant] = useState(false);
  // Settled early (stall / blocked autoplay) while the clip is still mid-zoom → show the still lockup.
  const [stillFrame, setStillFrame] = useState(false);
  // Stage stays invisible until frames are actually moving, then fades in (no poster flash, no pop).
  const [playing, setPlaying] = useState(false);

  const settle = useCallback(() => {
    if (settledRef.current) return;
    settledRef.current = true;
    window.clearTimeout(failsafeRef.current);
    cancelAnimationFrame(rafRef.current ?? 0);
    const v = videoRef.current;
    // On time, the clip keeps playing and comes to rest on its own while the stage glides.
    // Early (stall / blocked autoplay), freeze it and show the still lockup instead.
    if (v && v.currentTime < COPY_AT - 0.1) {
      v.pause();
      setStillFrame(true);
    }
    setPhase("settled");
  }, []);

  const startIntro = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    settledRef.current = false;
    setInstant(false);
    setStillFrame(false);
    setPlaying(false);
    setPhase("intro");
    v.currentTime = 0;
    v.playbackRate = PLAYBACK_RATE;
    window.clearTimeout(failsafeRef.current);
    failsafeRef.current = window.setTimeout(settle, FAILSAFE_MS);
    // timeupdate only fires ~4×/s, too coarse to hit COPY_AT — watch the clock every frame instead.
    cancelAnimationFrame(rafRef.current ?? 0);
    const watch = () => {
      if (settledRef.current) return;
      if (v.currentTime >= COPY_AT) settle();
      else rafRef.current = requestAnimationFrame(watch);
    };
    rafRef.current = requestAnimationFrame(watch);
    // Autoplay blocked (e.g. low-power mode): the poster is the settled frame, so just settle.
    v.play().catch(settle);
  }, [settle]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlaying = () => setPlaying(true);
    v.addEventListener("playing", onPlaying);
    v.addEventListener("ended", settle);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      settledRef.current = true;
      setInstant(true);
      setPhase("settled");
    } else {
      startIntro();
    }

    return () => {
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("ended", settle);
      window.clearTimeout(failsafeRef.current);
      cancelAnimationFrame(rafRef.current ?? 0);
    };
  }, [settle, startIntro]);

  return (
    <section className="mvHero" data-phase={phase} data-instant={instant || undefined}>
      <noscript>
        <style>{`.mvHero .inner>*,.mvHero h1 .w>span{opacity:1!important;transform:none!important}`}</style>
      </noscript>

      <span className="heroGlow" aria-hidden />

      <svg className="heroSlope" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="mvSlope" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="var(--move-gold)" stopOpacity="0" />
            <stop offset="0.55" stopColor="var(--move-gold)" stopOpacity="0.55" />
            <stop offset="1" stopColor="var(--move-gold)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 196 L1200 24" pathLength={1} />
      </svg>

      <div
        className="heroStage"
        data-still={stillFrame || undefined}
        data-playing={playing || undefined}
        aria-hidden
      >
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster="/brand/move-intro-poster.jpg"
          disablePictureInPicture
        >
          <source src="/brand/move-intro.webm" type="video/webm" />
          <source src="/brand/move-intro.mp4" type="video/mp4" />
        </video>
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny static poster, layered over the video */}
        <img className="heroStill" src="/brand/move-intro-poster.jpg" alt="" />
      </div>

      <div className="inner">
        <span className="move-label" style={{ color: "var(--move-gold)" }}>
          {hero.eyebrow}
        </span>
        <h1 aria-label={hero.title}>
          {hero.title.split(" ").map((word, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <span className="w" aria-hidden style={{ "--i": i } as CSSProperties}>
                <span>{word}</span>
              </span>
            </Fragment>
          ))}
        </h1>
        <div className="rule" />
        <p>{hero.body}</p>
        <div className="ctaRow">
          <a className="mvBtn primary lg" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label} <ArrowRight size={15} />
          </a>
          <a className="mvBtn secondary lg" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>

      <button type="button" className="heroReplay" onClick={startIntro} aria-label="Replay intro">
        <RotateCcw size={13} /> Replay
      </button>
    </section>
  );
}
