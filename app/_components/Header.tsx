"use client";

import Image from "next/image";
import Link from "next/link";
import { LogIn, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  ["/#sessions", "Sessions"],
  ["/#coaches", "Coaches"],
  ["/#gallery", "Gallery"],
  ["/#pricing", "Plans"],
  ["/#contact", "Contact"],
  ["/careers", "Careers"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const loginHref = "https://web.movethemovementclan.in/";

  // While the menu is open: lock page scroll and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="mvHeader">
      <div className="mvPromo">
        Get Free Consultation Always ➟ join the clan this month
        <Link href="/#contact">Book a consultation</Link>
      </div>
      <div className="mv-max mvHeadRow">
        <Link
          href="/"
          aria-label="Move — The Movement Clan"
          style={{ display: "flex" }}
        >
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
          <a className="mvBtn primary mvLoginBtn" href={loginHref}>
            <LogIn size={14} /> Login
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="mvBtn secondary mvMenuBtn"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="mvMobileMenu" id="mobile-menu">
          <nav className="mv-max" aria-label="Mobile">
            {NAV.map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mvBtn primary block"
              onClick={() => setOpen(false)}
            >
              Book a consultation
            </Link>
            <a className="mvBtn secondary block" href={loginHref}>
              <LogIn size={14} /> Login
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
