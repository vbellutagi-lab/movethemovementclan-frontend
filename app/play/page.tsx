"use client";

import { useEffect, useState } from "react";
import { LAUNCH_AT, isLaunched } from "../_lib/launch";

function splitRemaining(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    hours: Math.floor(total / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export default function PlayPage() {
  // Starts ticking from the moment this page loads, using the visitor's own clock.
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const unlocked = isLaunched(now);
  const { hours, minutes, seconds } = splitRemaining(LAUNCH_AT - now);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#080706",
      }}
    >
      {unlocked ? (
        <iframe
          src="/game.html"
          title="MOVE — Dumbbell Challenge"
          allow="camera; geolocation; clipboard-write; web-share"
          style={{ border: 0, width: "100%", height: "100dvh", display: "block" }}
        />
      ) : (
        <div
          style={{
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            padding: 24,
            textAlign: "center",
            color: "#efefef",
            fontFamily: "Montserrat, system-ui, sans-serif",
          }}
        >
          <div style={{ fontFamily: '"Zen Dots", sans-serif', fontSize: 22, letterSpacing: "0.14em" }}>
            M<span style={{ color: "#e0b569" }}>O</span>VE
          </div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#9f9992",
              textTransform: "uppercase",
            }}
          >
            Dumbbell Challenge launches at 18:00 IST
          </div>
          <div
            suppressHydrationWarning
            style={{
              fontFamily: '"Zen Dots", sans-serif',
              fontSize: "clamp(48px, 14vw, 88px)",
              color: "#f0cf87",
              fontVariantNumeric: "tabular-nums",
              textShadow: "0 0 70px rgba(224,181,105,0.32)",
            }}
          >
            {pad(hours)}:{pad(minutes)}:{pad(seconds)}
          </div>
          <div style={{ fontSize: 12, color: "#bbb4ad", maxWidth: 320, lineHeight: 1.5 }}>
            Stay on this page — the game unlocks automatically the moment the clock hits zero.
          </div>
        </div>
      )}
    </div>
  );
}
