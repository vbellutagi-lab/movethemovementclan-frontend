import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { client } from "../data/client";

export function Hero() {
  const { hero } = client;
  return (
    <section className="mvHero">
      <div className="heroImg">
        <Image src={hero.image} alt="" fill sizes="100vw" priority className="mv-breath" />
      </div>
      <span className="scrimL" />
      <span className="scrimB" />
      <div className="inner">
        <span className="move-label" style={{ color: "var(--move-gold)" }}>
          {hero.eyebrow}
        </span>
        <h1>{hero.title}</h1>
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
    </section>
  );
}
