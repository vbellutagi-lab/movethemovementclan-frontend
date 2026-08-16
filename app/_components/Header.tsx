"use client";

import Image from "next/image";
import Link from "next/link";
import { LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import { env } from "../../env";

const NAV = [
  ["/#sessions", "Sessions"],
  ["/#coaches", "Coaches"],
  ["/#pricing", "Plans"],
  ["/#contact", "Contact"],
  ["/careers", "Careers"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const loginHref = `${env.NEXT_PUBLIC_APP_URL ?? ""}/login`;

  return (
    <header className="mvHeader">
      <div className="mvPromo">
        Get Free Consultation Always ➟ join the clan this month
        <Link href="/#contact">Book a consultation</Link>
      </div>
      <div className="mv-max mvHeadRow">
        <Link href="/" aria-label="Move — The Movement Clan" style={{ display: "flex" }}>
          <Image
            src="/brand/logo-horizontal-light.png"
            alt="Move"
            width={140}
            height={30}
            priority
          />
        </Link>
        <nav className="mvNav">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="mvHeadActions">
          <a className="mvBtn primary" href={loginHref}>
            <LogIn size={14} /> Login
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="mvBtn secondary mvMenuBtn"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {open ? (
        <div style={{ borderTop: "1px solid var(--border-hairline)" }}>
          <nav
            className="mv-max"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
              padding: "var(--space-5) 0",
            }}
          >
            {NAV.map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
