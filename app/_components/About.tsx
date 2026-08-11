import Image from "next/image";
import { Fragment } from "react";
import { client } from "../data/client";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function withHighlights(text: string, terms: readonly string[]) {
  if (terms.length === 0) return text;
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    const isTerm = terms.some((term) => term.toLowerCase() === part.toLowerCase());
    return isTerm ? (
      <span className="hl" key={i}>
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    );
  });
}

export function About() {
  const { about } = client;
  return (
    <section className="mvSection mv-max">
      <div className="head">
        <span className="move-label">{about.eyebrow}</span>
        <h2>{about.title}</h2>
        <div className="rule" />
      </div>
      <div className="mvAbout">
        <div className="copy">
          <p>{about.lead}</p>
          <p className="muted">{withHighlights(about.body, about.highlights)}</p>
          <div className="mvStats">
            {about.stats.map((s) => (
              <div className="mvStat" key={s.label}>
                <div className="v">{s.value}</div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="photo">
          <Image src={about.image} alt="Move studio floor" fill sizes="(min-width: 960px) 40vw, 90vw" />
          <span className="scrim" />
        </div>
      </div>
    </section>
  );
}
