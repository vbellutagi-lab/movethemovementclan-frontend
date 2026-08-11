"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { client } from "../data/client";

export function Contact() {
  const { contact, centre } = client;

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
        <div className="centreCard selected">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="t" style={{ fontFamily: "var(--font-display)", fontSize: "15px" }}>
              {centre.name}
            </span>
            <span className="mvBadge sgpt-badge">Selected</span>
          </div>
          <div className="metaRow">
            <span>
              <MapPin size={13} /> {centre.address}
            </span>
            <span>
              <Clock size={13} /> {centre.hours}
            </span>
            <span>
              <Phone size={13} /> {centre.phone}
            </span>
          </div>
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
