"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [acknowledgementSent, setAcknowledgementSent] = useState(true);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        error?: string;
        acknowledgementSent?: boolean;
      };

      if (!response.ok) {
        throw new Error(result.error || "We could not send your enquiry.");
      }

      form.reset();
      setAcknowledgementSent(result.acknowledgementSent !== false);
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please email info@coretix.org directly.",
      );
      setStatus("error");
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={submit}
      id="enquiry-form"
      aria-busy={status === "sending"}
    >
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
            <option>AI development and automation</option>
            <option>AI chatbot development</option>
            <option>Web development</option>
            <option>Mobile app development</option>
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
        <input
          className="form-trap"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>
      <div className="form-submit">
        <button className="button primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending enquiry…" : "Send enquiry"}{" "}
          <span aria-hidden="true">↗</span>
        </button>
        <p>Your enquiry will be sent securely to info@coretix.org.</p>
      </div>
      {status === "success" && (
        <p className="form-notice success" role="status">
          <strong>Your enquiry has been sent.</strong>{" "}
          {acknowledgementSent
            ? "We’ve emailed a confirmation and will reply within 24 hours."
            : "We’ll review it and reply within 24 hours. Please email info@coretix.org if you need to add anything."}
        </p>
      )}
      {status === "error" && (
        <p className="form-notice error" role="alert">
          <strong>We couldn’t send your enquiry.</strong> {errorMessage}
        </p>
      )}
    </form>
  );
}
