import Image from "next/image";
import { client } from "../data/client";
import { Reveal } from "./Reveal";

export function Coaches() {
  return (
    <section className="mvSection mv-max" id="coaches">
      <div className="head">
        <span className="move-label">Our coaches</span>
        <h2>The floor team</h2>
        <div className="rule" />
        <p className="lead">
          Every coach on the floor is tapped into your profile — your injury history, your current maxes, your
          daily programming.
        </p>
      </div>
      <div className="mvCards4">
        {client.coaches.map((c, i) => (
          <Reveal key={c.name} delayMs={i * 90}>
            <div className="coachCard">
              <div className="photo">
                <Image src={c.photo} alt={c.name} fill sizes="(min-width: 960px) 24vw, 50vw" />
              </div>
              <div className="body">
                <h4>{c.name}</h4>
                <span className="q">{c.qualification}</span>
                <div className="tags">
                  {c.specialisations.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
