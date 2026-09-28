import { client } from "../data/client";
import { getGoogleReviews } from "../_lib/googleReviews";
import { GoogleReviewCard } from "./GoogleReviewCard";
import { Reveal } from "./Reveal";
import { ReviewCarousel } from "./ReviewCarousel";

const TONE_BADGE: Record<string, string> = {
  SGPT: "sgpt-badge",
  PT: "pt-badge",
  CONDITIONING: "cond-badge",
};

function ratingLabel(avg: number) {
  if (avg >= 4.5) return "Excellent";
  if (avg >= 4) return "Very good";
  if (avg >= 3) return "Good";
  return "Rated";
}

export async function Reviews() {
  const google = await getGoogleReviews();
  const { reviews } = client;
  const average = google?.average ?? reviews.average;
  const count = google?.count ?? reviews.count;

  return (
    <div className="mvReviews">
      <section
        className="mvSection mv-max"
        style={{ paddingBottom: "var(--space-16)" }}
      >
        <div className="head">
          <span className="move-label">Reviews</span>
          <h2>What the clan says</h2>
          <div className="rule" />
        </div>
        <div className="mvRatingRow">
          <span className="num">{average.toFixed(1)}</span>
          <div>
            <span className="move-label">{ratingLabel(average)}</span>
            <div
              className="ratingStars"
              role="img"
              aria-label={`${average.toFixed(1)} out of 5 stars`}
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={i < Math.round(average) ? "on" : "off"}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="ratingCount">
              {google
                ? `${count} ${count === 1 ? "rating" : "ratings"}`
                : `${count} verified member reviews`}
            </div>
          </div>
          {google && (
            <a
              className="mvBtn primary writeReview"
              href={google.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a review
            </a>
          )}
        </div>
        {google ? (
          <ReviewCarousel>
            {google.list.map((r, i) => (
              <Reveal
                key={`${r.name}-${i}`}
                delayMs={i * 100}
                className="reviewItem"
              >
                <GoogleReviewCard review={r} />
              </Reveal>
            ))}
          </ReviewCarousel>
        ) : (
          <div className="mvCards3">
            {reviews.list.map((r, i) => (
              <Reveal key={r.name} delayMs={i * 100}>
                <div className="reviewCard">
                  <span className={`mvBadge ${TONE_BADGE[r.type] ?? ""}`}>
                    {r.type}
                  </span>
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
        )}
      </section>
    </div>
  );
}
