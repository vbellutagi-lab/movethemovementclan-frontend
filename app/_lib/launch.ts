import { env } from "../../env";

// Gym launch / event start — shared by the homepage gate, /play, and /launch.
// Override per-environment via NEXT_PUBLIC_LAUNCH_AT (e.g. set it to a past
// date on Vercel's Preview environment so the develop branch tests unlocked,
// while Production keeps this real value). Baked in at build time.
const DEFAULT_LAUNCH_AT = "2026-09-09T18:00:00+05:30";
export const LAUNCH_AT = new Date(env.NEXT_PUBLIC_LAUNCH_AT ?? DEFAULT_LAUNCH_AT).getTime();

// Dev and production must behave identically — no environment-based bypass.
export function isLaunched(now: number) {
  return now >= LAUNCH_AT;
}
