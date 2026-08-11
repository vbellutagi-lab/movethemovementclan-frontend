import Image from "next/image";
import { client } from "../data/client";
import { env } from "../../env";

export function Footer() {
  const { footer, centre } = client;
  const loginHref = `${env.NEXT_PUBLIC_APP_URL ?? ""}/login`;
  const clanLinks: Record<string, string> = {
    "Our coaches": "#coaches",
    Careers: "#careers",
    Contact: "#contact",
    "Client login": loginHref,
  };
  return (
    <footer className="mvFooter mv-max">
      <div className="grid">
        <div className="col">
          <Image src="/brand/logo-lockup-stacked-gold.png" alt="Move" width={120} height={80} />
          <p style={{ fontSize: "12.5px", color: "var(--text-muted)", maxWidth: 260, marginTop: 12 }}>
            {footer.tagline}
          </p>
        </div>
        <div className="col">
          <span className="h">Train</span>
          {footer.train.map((t) => (
            <a key={t} href="#pricing">
              {t}
            </a>
          ))}
        </div>
        <div className="col">
          <span className="h">Centre</span>
          <a href="#contact">{centre.name}</a>
        </div>
        <div className="col">
          <span className="h">Clan</span>
          {footer.clan.map((t) => (
            <a key={t} href={clanLinks[t] ?? "#"}>
              {t}
            </a>
          ))}
        </div>
      </div>
      <div className="bottom">
        <span className="move-tagline">The Movement Clan</span>
        <span>
          © {footer.year} Move
        </span>
      </div>
    </footer>
  );
}
