import { client } from "../data/client";
import { Reveal } from "./Reveal";

const TONE_BADGE: Record<string, string> = {
  SGPT: "sgpt-badge",
  PT: "pt-badge",
  CONDITIONING: "cond-badge",
};

export function Reviews() {
  const { reviews } = client;
  return (
    <div className="mvReviews">
      <section className="mvSection mv-max" style={{ paddingBottom: "var(--space-16)" }}>
        <div className="head">
          <span className="move-label">Reviews</span>
          <h2>What the clan says</h2>
          <div className="rule" />
        </div>
        <div className="mvRatingRow">
          <span className="num">{reviews.average.toFixed(1)}</span>
          <div>
            <span className="move-label">Average rating</span>
            <div style={{ fontSize: "12.5px", color: "var(--text-muted)", marginTop: 4 }}>
              {reviews.count} verified member reviews
            </div>
          </div>
        </div>
        <div className="mvCards3">
          {reviews.list.map((r, i) => (
            <Reveal key={r.name} delayMs={i * 100}>
              <div className="reviewCard">
                <span className={`mvBadge ${TONE_BADGE[r.type] ?? ""}`}>{r.type}</span>
                <p>&ldquo;{r.quote}&rdquo;</p>
                <div className="goldDivider" />
                <div className="who">
                  <b>{r.name}</b>
                  <span>{r.since}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
