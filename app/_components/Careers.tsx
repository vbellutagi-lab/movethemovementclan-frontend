"use client";

import { ArrowUpRight } from "lucide-react";
import { client } from "../data/client";

export function Careers() {
  const { careers } = client;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // UI only for v1 - no backend endpoint yet (see leads follow-up in the plan).
    e.preventDefault();
  }

  return (
    <section className="mvSection mv-max" id="careers">
      <div className="head">
        <span className="move-label">{careers.eyebrow}</span>
        <h2>{careers.title}</h2>
        <div className="rule" />
        <p className="lead">{careers.lead}</p>
      </div>
      <div className="mvSplit">
        <div>
          {careers.roles.map((role) => (
            <div className="roleCard" key={role.title}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                <span className="t">{role.title}</span>
                <span className="meta">{role.meta}</span>
                <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{role.detail}</span>
              </div>
              <ArrowUpRight size={18} />
            </div>
          ))}
        </div>
        <form className="formCard" onSubmit={handleSubmit}>
          <span className="move-label">Send a resume</span>
          <label className="field">
            <span className="lbl">Full name</span>
            <input placeholder="Your name" required />
          </label>
          <label className="field">
            <span className="lbl">Role</span>
            <select defaultValue="">
              <option value="" disabled>
                Choose a role
              </option>
              {careers.roles.map((role) => (
                <option key={role.title} value={role.title}>
                  {role.title}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="lbl">Resume (PDF, up to 5 MB)</span>
            <input type="file" accept="application/pdf" />
          </label>
          <label className="field">
            <span className="lbl">Why Move</span>
            <textarea rows={3} placeholder="Two lines is plenty." />
          </label>
          <button type="submit" className="mvBtn primary block">
            Submit application
          </button>
        </form>
      </div>
    </section>
  );
}
