import { InstagramIcon } from "./SocialIcons";
import { Reveal } from "./Reveal";

const INSTAGRAM_REELS = [{ id: "Dd2sPOizS0v", title: "Move — Instagram reel" }];

export function Gallery() {
  return (
    <section className="mvSection mv-max" id="gallery">
      <div className="head">
        <span className="move-label">Gallery</span>
        <h2>Inside the clan</h2>
        <div className="rule" />
      </div>
      <div className="mvGallery">
        {INSTAGRAM_REELS.map((reel, i) => (
          <Reveal
            key={reel.id}
            id={`gallery-${reel.id}`}
            delayMs={i * 100}
            className="galleryItem"
          >
            <figure className="reelCard">
              <div className="reelMedia">
                <iframe
                  className="reelFrame"
                  src={`https://www.instagram.com/reel/${reel.id}/embed`}
                  title={reel.title}
                  loading="lazy"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
              <figcaption className="reelCaption">
                <span className="move-label">Reel</span>
                <a
                  href={`https://www.instagram.com/reel/${reel.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon size={14} /> Watch on Instagram
                </a>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
