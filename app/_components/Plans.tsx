"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { client } from "../data/client";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
const TILT_MAX_DEG = 8;

export function Plans() {
  const { plans } = client;
  const [durationIdx, setDurationIdx] = useState(0);

  function handleTilt(e: React.MouseEvent<HTMLDivElement>) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tiltX", `${(-py * TILT_MAX_DEG).toFixed(2)}deg`);
    card.style.setProperty("--tiltY", `${(px * TILT_MAX_DEG).toFixed(2)}deg`);
  }

  function resetTilt(e: React.MouseEvent<HTMLDivElement>) {
    const card = e.currentTarget;
    card.style.setProperty("--tiltX", "0deg");
    card.style.setProperty("--tiltY", "0deg");
  }

  return (
    <section className="mvSection mv-max" id="pricing">
      <div className="head">
        <span className="move-label">{plans.eyebrow}</span>
        <h2>{plans.title}</h2>
        <div className="rule" />
        <p className="lead">{plans.lead}</p>
      </div>

      <div className="planToggle" role="tablist" aria-label="Plan duration">
        {plans.durations.map((label, i) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-pressed={i === durationIdx}
            onClick={() => setDurationIdx(i)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mvPacks">
        {plans.tiers.map((tier) => {
          const price = tier.prices[durationIdx] ?? tier.prices[0];
          const months = plans.months[durationIdx] ?? 1;
          const perMonth = Math.round(price / months);
          const fullPriceAtMonthlyRate = tier.prices[0] * months;
          const savings = fullPriceAtMonthlyRate - price;
          const savingsPct = Math.round((savings / fullPriceAtMonthlyRate) * 100);
          const showSavings = durationIdx > 0 && savings > 0;

          return (
            <div
              className={`packCard${tier.featured ? " featured" : ""}`}
              key={tier.id}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              {tier.featured ? <span className="fBadge">Most popular</span> : null}
              <h3>{tier.name}</h3>
              <div className="priceRow">
                <span className="amt">{inr(price)}</span>
                <span className="per">/ {plans.durations[durationIdx]}</span>
              </div>
              {durationIdx > 0 ? <div className="permo">≈ {inr(perMonth)} / month</div> : null}
              {showSavings ? (
                <div className="saveTag">
                  Save {inr(savings)} <span className="savePct">({savingsPct}%)</span>
                </div>
              ) : (
                <div className="saveTagSpacer" />
              )}
              <ul className="planFeatures">
                {tier.features.map((f) => (
                  <li key={f}>
                    <Check size={15} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a className="mvBtn primary block" href={`/?plan=${tier.id}#contact`}>
                Choose plan
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
