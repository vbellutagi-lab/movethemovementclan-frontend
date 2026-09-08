import { About } from "./_components/About";
import { Coaches } from "./_components/Coaches";
import { Contact } from "./_components/Contact";
import { CountdownGate } from "./_components/CountdownGate";
import { Hero } from "./_components/Hero";
import { Plans } from "./_components/Plans";
import { Reviews } from "./_components/Reviews";
import { SessionTypes } from "./_components/SessionTypes";
import { SyncStrip } from "./_components/SyncStrip";
import { isLaunched } from "./_lib/launch";

// Must re-check the launch time on every request — otherwise Next.js would
// statically bake in whichever state (locked/unlocked) was true at build time.
export const dynamic = "force-dynamic";

export default function LandingPage() {
  if (!isLaunched(Date.now())) {
    return (
      <CountdownGate
        eyebrow="Opening 18:00 IST · Basaveshwar Nagar"
        note="Doors open soon. Scan the QR at the venue to play the MOVE challenge while you wait."
      />
    );
  }

  return (
    <>
      <Hero />
      <SyncStrip />
      <SessionTypes />
      <About />
      <Coaches />
      <Reviews />
      <Plans />
      <Contact />
    </>
  );
}
