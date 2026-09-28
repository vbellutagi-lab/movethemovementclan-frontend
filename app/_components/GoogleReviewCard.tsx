"use client";

import { useState } from "react";
import type { GoogleReview } from "../_lib/googleReviews";

const LONG_TEXT = 180;

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <span className="reviewStars" role="img" aria-label={`${value} out of 5 stars`}>
      {"★".repeat(full)}
      <span className="off">{"★".repeat(5 - full)}</span>
    </span>
  );
}

export function GoogleReviewCard({ review }: { review: GoogleReview }) {
  const [open, setOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  const isLong = review.text.length > LONG_TEXT;

  const name = review.authorUrl ? (
    <a href={review.authorUrl} target="_blank" rel="noopener noreferrer">
      {review.name}
    </a>
  ) : (
    review.name
  );

  return (
    <div className="reviewCard">
      <div className="reviewTop">
        {review.photoUrl && !photoFailed ? (
          // Google avatar URLs are remote and already sized; next/image adds nothing here.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="reviewAvatar"
            src={review.photoUrl}
            alt=""
            width={40}
            height={40}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <span className="reviewAvatar fallback" aria-hidden="true">
            {review.name.charAt(0).toUpperCase()}
          </span>
        )}
        <div className="who">
          <b>{name}</b>
          <span>{review.when} · Google</span>
        </div>
      </div>
      <Stars value={review.rating} />
      <p className={isLong && !open ? "clamp" : undefined}>&ldquo;{review.text}&rdquo;</p>
      {isLong && (
        <button
          type="button"
          className="reviewMore"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
