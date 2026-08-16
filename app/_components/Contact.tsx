"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { client } from "../data/client";

export function Contact() {
  const { contact, centre, plans } = client;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centre.address)}`;
  const telHref = `tel:${centre.phone.replace(/[\s-]/g, "")}`;
  const mailHref = `mailto:${centre.email}`;
  const [program, setProgram] = useState("");

  useEffect(() => {
    const planId = new URLSearchParams(window.location.search).get("plan");
    const tier = plans.tiers.find((t) => t.id === planId);
    if (tier) setProgram(tier.name);
  }, [plans.tiers]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // UI only for v1 - no backend endpoint yet (see leads follow-up in the plan).
    e.preventDefault();
  }

  return (
    <section className="mvSection mv-max" id="contact">
      <div className="head">
        <span className="move-label">{contact.eyebrow}</span>
        <h2>{contact.title}</h2>
        <div className="rule" />
        <p className="lead">{contact.lead}</p>
      </div>
      <div className="mvSplit even">
        <div className="centreCard">
          <span className="t" style={{ fontFamily: "var(--font-display)", fontSize: "15px" }}>
            {centre.name}
          </span>
          <div className="metaRow">
            <span>
              <MapPin size={14} />
              {centre.address}
            </span>
            <span>
              <Clock size={14} />
              {centre.hours}
            </span>
            <span>
              <Phone size={14} />
              <a href={telHref}>{centre.phone}</a>
            </span>
            <span>
              <Mail size={14} />
              <a href={mailHref}>{centre.email}</a>
            </span>
          </div>
          <a
            className="mvBtn secondary block"
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
          </a>
        </div>
        <form className="formCard" onSubmit={handleSubmit}>
          <span className="move-label">Send a note</span>
          <label className="field">
            <span className="lbl">Name</span>
            <input placeholder="Your name" required />
          </label>
          <label className="field">
            <span className="lbl">Phone</span>
            <input placeholder="10-digit mobile" inputMode="tel" required />
          </label>
          <label className="field">
            <span className="lbl">Program</span>
            <select value={program} onChange={(e) => setProgram(e.target.value)}>
              <option value="">General inquiry</option>
              {plans.tiers.map((t) => (
                <option key={t.id} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="lbl">Message</span>
            <textarea rows={3} placeholder="What are you training for?" />
          </label>
          <button type="submit" className="mvBtn primary block">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
