// Server-only: the API key never reaches the browser. The response is cached
// for a day by Next's data cache, so the Places API is hit ~once per day.

export type GoogleReview = {
  name: string;
  photoUrl?: string;
  authorUrl?: string;
  rating: number;
  when: string;
  text: string;
};

export type GoogleReviews = {
  average: number;
  count: number;
  mapsUrl?: string;
  writeReviewUrl: string;
  list: GoogleReview[];
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  googleMapsLinks?: { writeAReviewUri?: string };
  reviews?: {
    rating: number;
    relativePublishTimeDescription: string;
    text?: { text: string };
    originalText?: { text: string };
    authorAttribution: { displayName: string; uri?: string; photoUri?: string };
  }[];
};

export async function getGoogleReviews(): Promise<GoogleReviews | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) {
    console.error(
      "[googleReviews] GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID is not set",
    );
    return null;
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask":
            "rating,userRatingCount,googleMapsUri,googleMapsLinks.writeAReviewUri,reviews",
        },
        next: { revalidate: 60 * 60 * 24 },
      },
    );
    if (!res.ok) {
      console.error(
        `[googleReviews] Places API ${res.status}: ${(await res.text()).slice(0, 300)}`,
      );
      return null;
    }

    const data = (await res.json()) as PlacesResponse;
    const list = (data.reviews ?? [])
      .map((r) => ({
        name: r.authorAttribution.displayName,
        photoUrl: r.authorAttribution.photoUri,
        authorUrl: r.authorAttribution.uri,
        rating: r.rating,
        when: r.relativePublishTimeDescription,
        text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
      }))
      .filter((r) => r.text);

    if (!list.length || data.rating == null) return null;

    return {
      average: data.rating,
      count: data.userRatingCount ?? list.length,
      mapsUrl: data.googleMapsUri,
      writeReviewUrl:
        data.googleMapsLinks?.writeAReviewUri ??
        `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`,
      list,
    };
  } catch (err) {
    console.error("[googleReviews] fetch failed", err);
    return null;
  }
}
