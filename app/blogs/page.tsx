import type { Metadata } from "next";
import { siteUrl } from "../_lib/siteUrl";
import { blogPosts } from "../data/blogs";

export const metadata: Metadata = {
  title: "Blog — Move",
  description:
    "Guides on small group personal training, strength training and functional fitness from Move, Basaveshwaranagar, Bengaluru.",
  alternates: { canonical: `${siteUrl}/blogs` },
  robots: { index: true, follow: true },
};

export default function BlogsPage() {
  return (
    <div className="mvLight">
      <section className="mvSection mv-max" id="blogs">
        <div className="mvLegal">
          <div className="head">
            <span className="move-label">Blog</span>
            <h2>Training notes from Move</h2>
            <div className="rule" />
            <p className="lead">
              Practical guides on small group personal training, strength and
              functional fitness, written for West Bangalore.
            </p>
          </div>

          <div className="mvProse">
            {blogPosts.map((post, i) => (
              <div key={post.slug}>
                <h3>
                  {i + 1}. {post.title}
                </h3>
                <p>{post.keyword}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
