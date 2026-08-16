import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { client } from "../data/client";
import { env } from "../../env";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

export function Footer() {
  const { footer, centre, social } = client;
  const loginHref = `${env.NEXT_PUBLIC_APP_URL ?? ""}/login`;
  const clanLinks: Record<string, string> = {
    "Our coaches": "/#coaches",
    Contact: "/#contact",
    Careers: "/careers",
    "Client login": loginHref,
  };
  return (
    <footer className="mvFooter mv-max">
      <div className="grid">
        <div className="col">
          <Image src="/brand/logo-lockup-stacked-gold.png" alt="Move" width={120} height={80} />
          <p
            style={{ fontSize: "12.5px", color: "var(--text-muted)", maxWidth: 260, marginTop: 12 }}
          >
            {footer.tagline}
          </p>
          <div className="socialRow">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Move on Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Move on Facebook"
            >
              <FacebookIcon size={16} />
            </a>
            <a href={`mailto:${centre.email}`} aria-label="Email Move">
              <Mail size={16} />
            </a>
          </div>
        </div>
        <div className="col">
          <span className="h">Train</span>
          {footer.train.map((t) => (
            <Link key={t} href="/#pricing">
              {t}
            </Link>
          ))}
        </div>
        <div className="col">
          <span className="h">Centre</span>
          <Link href="/#contact">{centre.name}</Link>
        </div>
        <div className="col">
          <span className="h">Clan</span>
          {footer.clan.map((t) => (
            <Link key={t} href={clanLinks[t] ?? "#"}>
              {t}
            </Link>
          ))}
        </div>
      </div>
      <div className="bottom">
        <span className="move-tagline">The Movement Clan</span>
        <span>© {footer.year} Move</span>
      </div>
    </footer>
  );
}
