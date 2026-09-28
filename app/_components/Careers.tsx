"use client";

import { ArrowUpRight } from "lucide-react";
import { client } from "../data/client";

export function Careers() {
  const { careers } = client;

  // No backend endpoint yet, so hand the application to the user's mail app.
  // mailto: cannot carry attachments, so the form asks them to attach the resume there.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const role = String(data.get("role") ?? "");
    const why = String(data.get("why") ?? "").trim();

    const subject = `Application: ${role || "General"} - ${name}`;
    const body = [
      `Name: ${name}`,
      `Role: ${role || "General"}`,
      "",
      `Why Move: ${why || "-"}`,
    ].join("\n");

    window.location.href = `mailto:${client.centre.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <span className="t">{role.title}</span>
                <span className="meta">{role.meta}</span>
                <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                  {role.detail}
                </span>
              </div>
              <ArrowUpRight size={18} />
            </div>
          ))}
        </div>
        <form className="formCard" onSubmit={handleSubmit}>
          <span className="move-label">Send a resume</span>
          <label className="field">
            <span className="lbl">Full name</span>
            <input name="name" placeholder="Your name" required />
          </label>
          <label className="field">
            <span className="lbl">Role</span>
            <select name="role" defaultValue="">
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
            <span className="lbl">Why Move</span>
            <textarea name="why" rows={3} placeholder="Two lines is plenty." />
          </label>
          <p
            style={{
              margin: 0,
              fontSize: "12.5px",
              color: "var(--text-muted)",
            }}
          >
            Attach your resume (PDF) to email before sending.
          </p>
          <button type="submit" className="mvBtn primary block">
            Email application
          </button>
        </form>
      </div>
    </section>
  );
}
