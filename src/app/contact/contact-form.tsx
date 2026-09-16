"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const organisation = String(formData.get("organisation") ?? "");
    const telephone = String(formData.get("telephone") ?? "");
    const service = String(formData.get("service") ?? "Not specified");
    const message = String(formData.get("message") ?? "");
    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Organisation: ${organisation || "Not provided"}`,
      `Telephone: ${telephone || "Not provided"}`,
      `Area: ${service}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:info@coretix.org?subject=${encodeURIComponent(
      `Website enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setNotice(true);
  }

  return (
    <form className="contact-form" onSubmit={submit} id="enquiry-form">
      <div className="form-heading">
        <p className="eyebrow">Enquiry form</p>
        <h2>Tell us what needs to improve.</h2>
        <p>A short outline is enough. We can clarify the detail together.</p>
      </div>
      <div className="form-grid">
        <label>
          Full name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Organisation
          <input name="organisation" autoComplete="organization" />
        </label>
        <label>
          Telephone <span>(optional)</span>
          <input name="telephone" type="tel" autoComplete="tel" />
        </label>
        <label className="form-wide">
          What would you like help with?
          <select name="service" defaultValue="">
            <option value="" disabled>
              Select an area
            </option>
            <option>Managed IT support</option>
            <option>Cloud and Microsoft 365</option>
            <option>Cybersecurity</option>
            <option>Infrastructure and networks</option>
            <option>Backup and recovery</option>
            <option>Software development</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="form-wide">
          How can we help?
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Briefly describe the issue, priority or change you are planning."
          />
        </label>
      </div>
      <div className="form-submit">
        <button className="button primary" type="submit">
          Email your enquiry <span aria-hidden="true">↗</span>
        </button>
        <p>We will use your details only to respond to this enquiry.</p>
      </div>
      {notice && (
        <p className="form-notice" role="status">
          <strong>
            Your email app should open with the enquiry addressed to us.
          </strong>
          If it does not, email{" "}
          <a href="mailto:info@coretix.org">info@coretix.org</a> directly.
        </p>
      )}
    </form>
  );
}
