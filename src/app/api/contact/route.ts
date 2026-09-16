import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const CONTACT_EMAIL = "info@coretix.org";

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] || character,
  );
}

function formatMessage(value: string) {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function emailLayout(content: string, preheader: string) {
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f4f3ef;color:#112235;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f3ef;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:680px;background:#ffffff;border:1px solid #dfe5ec;border-radius:18px;overflow:hidden;">
            <tr>
              <td style="padding:28px 34px;background:#07182b;color:#ffffff;">
                <div style="font-size:24px;line-height:1;font-weight:800;letter-spacing:-1.5px;">CORETIX <span style="font-size:11px;letter-spacing:3px;color:#c7d2de;">LTD</span></div>
                <div style="width:94px;height:3px;margin-top:8px;background:#1674ea;"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:36px 34px 38px;">${content}</td>
            </tr>
            <tr>
              <td style="padding:22px 34px;background:#07182b;color:#aebdca;font-size:12px;line-height:1.6;">
                <strong style="color:#ffffff;">Coretix Ltd</strong><br />
                Managed technology services for growing UK organisations.<br />
                <a href="https://coretix.org" style="color:#8bbdff;">coretix.org</a> &nbsp;·&nbsp;
                <a href="mailto:info@coretix.org" style="color:#8bbdff;">info@coretix.org</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function detailRow(label: string, value: string) {
  return `<tr>
    <td style="width:34%;padding:12px 14px;border-bottom:1px solid #e5eaf0;color:#526579;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;vertical-align:top;">${label}</td>
    <td style="padding:12px 14px;border-bottom:1px solid #e5eaf0;color:#112235;font-size:14px;line-height:1.5;vertical-align:top;">${value}</td>
  </tr>`;
}

function adminEmail(name: string, email: string, organisation: string, telephone: string, service: string, message: string) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeOrganisation = escapeHtml(organisation || "Not provided");
  const safeTelephone = escapeHtml(telephone || "Not provided");
  const safeService = escapeHtml(service);

  return emailLayout(
    `<p style="margin:0 0 10px;color:#0d5fc4;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">New website enquiry</p>
     <h1 style="margin:0;color:#112235;font-size:32px;line-height:1.12;letter-spacing:-1px;">A new enquiry has arrived.</h1>
     <p style="margin:16px 0 28px;color:#526579;font-size:15px;line-height:1.6;">The following enquiry was submitted through the Coretix website.</p>
     <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #dfe5ec;border-radius:10px;overflow:hidden;">
       ${detailRow("Name", safeName)}
       ${detailRow("Work email", `<a href="mailto:${safeEmail}" style="color:#0d5fc4;">${safeEmail}</a>`)}
       ${detailRow("Organisation", safeOrganisation)}
       ${detailRow("Telephone", safeTelephone)}
       ${detailRow("Area", safeService)}
     </table>
     <p style="margin:28px 0 10px;color:#526579;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Message</p>
     <div style="padding:18px 20px;border-left:3px solid #1674ea;background:#edf3f9;color:#112235;font-size:15px;line-height:1.65;">${formatMessage(message)}</div>`,
    `New website enquiry from ${name}`,
  );
}

function acknowledgementEmail(name: string, service: string) {
  const safeName = escapeHtml(name);
  const safeService = escapeHtml(service);

  return emailLayout(
    `<p style="margin:0 0 10px;color:#0d5fc4;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Enquiry received</p>
     <h1 style="margin:0;color:#112235;font-size:32px;line-height:1.12;letter-spacing:-1px;">Thanks for getting in touch, ${safeName}.</h1>
     <p style="margin:18px 0 0;color:#526579;font-size:16px;line-height:1.7;">We’ve received your query${service !== "Not specified" ? ` about <strong style="color:#112235;">${safeService}</strong>` : ""} and a member of the Coretix team will get back to you within 24 hours.</p>
     <div style="margin-top:28px;padding:20px;border-left:3px solid #72d49b;background:#f0faf4;color:#244b3b;font-size:14px;line-height:1.6;">Please keep this email for your records. If you need to add anything, reply to this message and it will come directly to the Coretix team.</div>
     <p style="margin:28px 0 0;color:#526579;font-size:14px;line-height:1.6;">We look forward to understanding what your organisation needs and identifying a practical next step.</p>`,
    "We’ve received your Coretix enquiry and will reply within 24 hours.",
  );
}

function isValidPayload(payload: unknown): payload is Record<string, unknown> {
  return typeof payload === "object" && payload !== null;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Please send a valid enquiry." }, { status: 400 });
  }

  if (!isValidPayload(payload)) {
    return NextResponse.json({ error: "Please send a valid enquiry." }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 254);
  const organisation = clean(payload.organisation, 160);
  const telephone = clean(payload.telephone, 60);
  const service = clean(payload.service, 120) || "Not specified";
  const message = clean(payload.message, 5000);
  const website = clean(payload.website, 120);

  // Quietly accept bot submissions without sending them.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !isEmail(email) || !message) {
    return NextResponse.json(
      { error: "Please provide your name, a valid email and a message." },
      { status: 400 },
    );
  }

  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpUser || !smtpPassword) {
    console.error("[contact] SMTP credentials are not configured.");
    return NextResponse.json(
      { error: "Please email info@coretix.org directly while delivery is configured." },
      { status: 503 },
    );
  }

  const smtpPort = Number.parseInt(process.env.SMTP_PORT || "465", 10);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: Number.isNaN(smtpPort) ? 465 : smtpPort,
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user: smtpUser, pass: smtpPassword },
  });

  const text = [
    `Name: ${name}`,
    `Work email: ${email}`,
    `Organisation: ${organisation || "Not provided"}`,
    `Telephone: ${telephone || "Not provided"}`,
    `Area: ${service}`,
    "",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `Coretix Ltd <${smtpUser}>`,
      to: process.env.CONTACT_TO?.trim() || CONTACT_EMAIL,
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text,
      html: adminEmail(name, email, organisation, telephone, service, message),
    });
  } catch (error) {
    console.error("[contact] SMTP enquiry send failed", error);
    return NextResponse.json(
      { error: "We could not send your enquiry. Please email info@coretix.org directly." },
      { status: 500 },
    );
  }

  let acknowledgementSent = true;

  try {
    await transporter.sendMail({
      from: `Coretix Ltd <${smtpUser}>`,
      to: email,
      replyTo: process.env.CONTACT_TO?.trim() || CONTACT_EMAIL,
      subject: "We’ve received your enquiry | Coretix Ltd",
      text: `Hi ${name},\n\nWe’ve received your query${service !== "Not specified" ? ` about ${service}` : ""} and a member of the Coretix team will get back to you within 24 hours.\n\nIf you need to add anything, reply to this email and it will come directly to the Coretix team.\n\nCoretix Ltd\nhttps://coretix.org\ninfo@coretix.org`,
      html: acknowledgementEmail(name, service),
    });
  } catch (error) {
    acknowledgementSent = false;
    console.error("[contact] SMTP acknowledgement send failed", error);
  }

  return NextResponse.json({ ok: true, acknowledgementSent });
}
