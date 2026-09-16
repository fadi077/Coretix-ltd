import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const CONTACT_EMAIL = "info@coretix.org";

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Please send a valid enquiry." },
      { status: 400 },
    );
  }

  if (typeof payload !== "object" || payload === null) {
    return NextResponse.json(
      { error: "Please send a valid enquiry." },
      { status: 400 },
    );
  }

  const data = payload as Record<string, unknown>;
  const name = clean(data.name, 120);
  const email = clean(data.email, 254);
  const organisation = clean(data.organisation, 160);
  const telephone = clean(data.telephone, 60);
  const service = clean(data.service, 120) || "Not specified";
  const message = clean(data.message, 5000);
  const website = clean(data.website, 120);

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
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  const body = [
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
      from: smtpUser,
      to: process.env.CONTACT_TO?.trim() || CONTACT_EMAIL,
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: body,
    });
  } catch (error) {
    console.error("[contact] SMTP send failed", error);
    return NextResponse.json(
      { error: "We could not send your enquiry. Please email info@coretix.org directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
