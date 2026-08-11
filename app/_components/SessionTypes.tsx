import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { client } from "../data/client";
import { Reveal } from "./Reveal";

const TONE: Record<string, { bg: string; badge: string; color: string }> = {
  SGPT: { bg: "sgpt-bg", badge: "sgpt-badge", color: "var(--sgpt)" },
  PT: { bg: "pt-bg", badge: "pt-badge", color: "var(--pt)" },
  CONDITIONING: { bg: "cond-bg", badge: "cond-badge", color: "var(--cond)" },
};

export function SessionTypes() {
  return (
    <section className="mvSection mv-max" id="sessions">
      <div className="head">
        <span className="move-label">What you can book</span>
        <h2>Three ways to train</h2>
        <div className="rule" />
        <p className="lead">
          Every session type keeps its colour and its figure everywhere it appears — on the site, in your calendar,
          in your history.
        </p>
      </div>
      <div className="mvCards3">
        {client.sessionTypes.map((s, i) => {
          const tone = TONE[s.type];
          return (
            <Reveal key={s.type} delayMs={i * 100}>
              <div className="mvCard">
                <div className={`imgWrap ${tone?.bg ?? ""}`}>
                  <Image src={s.illustration} alt="" width={140} height={140} className="mvCardIllustration" />
                </div>
                <div className="body">
                  <span className={`mvBadge ${tone?.badge ?? ""}`}>{s.type}</span>
                  <h3>{s.name}</h3>
                  <p>{s.copy}</p>
                  <a className="go" href="#pricing" style={{ color: tone?.color }}>
                    Book <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
