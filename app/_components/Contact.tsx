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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const planId = new URLSearchParams(window.location.search).get("plan");
    const tier = plans.tiers.find((t) => t.id === planId);
    if (tier) setProgram(tier.name);
  }, [plans.tiers]);

  const enquiryType = program || "General enquiry";

  const noteBody = [
    "New enquiry from the Move website:",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Enquiry type: ${enquiryType}`,
    `Message: ${message || "-"}`,
  ].join("\n");

  function handleWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const digits = centre.whatsapp.replace(/[^\d]/g, "");
    window.open(`https://wa.me/${digits}?text=${encodeURIComponent(noteBody)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  function handleEmail(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (form && !form.reportValidity()) return;
    const subject = `Website enquiry — ${enquiryType}`;
    window.location.href = `mailto:${centre.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(noteBody)}`;
    setSent(true);
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
        <form className="formCard" onSubmit={handleWhatsApp}>
          <span className="move-label">Send a note</span>
          <label className="field">
            <span className="lbl">Name</span>
            <input
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSent(false);
              }}
            />
          </label>
          <label className="field">
            <span className="lbl">Phone</span>
            <input
              placeholder="10-digit mobile"
              inputMode="tel"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setSent(false);
              }}
            />
          </label>
          <label className="field">
            <span className="lbl">Enquiry type</span>
            <select
              value={program}
              onChange={(e) => {
                setProgram(e.target.value);
                setSent(false);
              }}
            >
              <option value="">General enquiry</option>
              {plans.tiers.map((t) => (
                <option key={t.id} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="lbl">Message</span>
            <textarea
              rows={3}
              placeholder="What are you training for?"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setSent(false);
              }}
            />
          </label>
          <div className="formCta">
            <button type="submit" className="mvBtn primary block">
              Send via WhatsApp
            </button>
            <button type="button" className="mvBtn secondary block" onClick={handleEmail}>
              Send via email
            </button>
          </div>
          {sent ? (
            <p className="formSent" role="status">
              Message sent — we&apos;ll contact you soon.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
