"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { LAUNCH_AT } from "../_lib/launch";

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

// Renders only the locked countdown screen. The real page content is decided
// server-side (see app/page.tsx) so it is never sent to the browser early —
// this component just ticks visibly and asks the server for a fresh render
// the moment its own clock reaches launch time.
export function CountdownGate({ eyebrow, note }: { eyebrow: string; note: string }) {
  const router = useRouter();
  const [now, setNow] = useState(() => Date.now());
  const refreshed = useRef(false);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (now >= LAUNCH_AT && !refreshed.current) {
      refreshed.current = true;
      router.refresh();
    }
  }, [now, router]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const { hours, minutes, seconds } = splitRemaining(LAUNCH_AT - now);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#080706" }}>
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
        <div style={{ fontFamily: '"Zen Dots", sans-serif', fontSize: 28, letterSpacing: "0.14em" }}>
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
          {eyebrow}
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
        <div style={{ fontSize: 12, color: "#bbb4ad", maxWidth: 320, lineHeight: 1.5 }}>{note}</div>
      </div>
    </div>
  );
}
