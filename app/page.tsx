import { About } from "./_components/About";
import { Careers } from "./_components/Careers";
import { Coaches } from "./_components/Coaches";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Plans } from "./_components/Plans";
import { Reviews } from "./_components/Reviews";
import { SessionTypes } from "./_components/SessionTypes";
import { SyncStrip } from "./_components/SyncStrip";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <SyncStrip />
      <SessionTypes />
      <About />
      <Coaches />
      <Reviews />
      <Plans />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
}
