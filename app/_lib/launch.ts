// Gym launch / event start — shared by the homepage gate, /play, and /launch.
export const LAUNCH_AT = new Date("2026-09-09T18:00:00+05:30").getTime();

// Dev and production must behave identically — no environment-based bypass.
export function isLaunched(now: number) {
  return now >= LAUNCH_AT;
}
