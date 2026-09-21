"use client";

import Image from "next/image";
import { useState } from "react";
import { client } from "../data/client";
import { Reveal } from "./Reveal";

type Coach = (typeof client.coaches)[number];

const COACH_IMAGES: Record<Coach["name"], string> = {
  "Akshay Krishna Bharadwaj": "/images/coach/Akshay%20Bharadwaj.jpeg",
  "Sampath PK": "/images/coach/SAMPATH%20PK.jpeg",
  "Pavan Kumar TH": "/images/coach/Pavan%20Kumar.jpeg",
};

function CoachCard({ coach }: { coach: Coach }) {
  const [flipped, setFlipped] = useState(false);

  function toggle() {
    setFlipped((f) => !f);
  }

  return (
    <div
      className={`coachFlip${flipped ? " is-flipped" : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${coach.name} — press for details`}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className="coachFlipInner">
        <div className="coachFace front">
          <div className="photo">
            <Image
              src={COACH_IMAGES[coach.name]}
              alt={coach.name}
              fill
              sizes="(max-width: 700px) 100vw, 33vw"
            />
          </div>
          <div className="body">
            <h4>{coach.name}</h4>
            <span className="role">{coach.role}</span>
            <span className="exp">{coach.experience} experience</span>
            <span className="flipHint">For details →</span>
          </div>
        </div>
        <div className="coachFace back">
          <div className="body">
            <h4>{coach.name}</h4>
            <span className="role">{coach.role}</span>
            <span className="q">{coach.qualification}</span>
            <span className="exp">{coach.experience} experience</span>
            <div className="tags">
              {coach.specialisations.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Coaches() {
  return (
    <section className="mvSection mv-max" id="coaches">
      <div className="head">
        <span className="move-label">Our coaches</span>
        <h2>The floor team</h2>
        <div className="rule" />
        <p className="lead">
          Every coach on the floor is tapped into your profile — your injury
          history, your current maxes, your daily programming.
        </p>
      </div>
      <div className="mvCards4">
        {client.coaches.map((c, i) => (
          <Reveal key={c.name} delayMs={i * 90}>
            <CoachCard coach={c} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
