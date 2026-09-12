"use server";

import nodemailer from "nodemailer";

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

/**
 * Sends the partner inquiry form to the business email.
 *
 * Configure these environment variables in .env.local:
 *   SMTP_HOST     – e.g. smtp.gmail.com
 *   SMTP_PORT     – e.g. 465 (SSL) or 587 (TLS)
 *   SMTP_USER     – your sending email address
 *   SMTP_PASS     – app password (Gmail: myaccount.google.com/apppasswords)
 *   SMTP_SECURE   – "true" for port 465, "false" for 587
 */
export async function sendContactEmail(
  payload: ContactPayload,
): Promise<{ ok: boolean; error?: string }> {
  const { name, company, email, phone, message } = payload;

  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT ?? "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !user || !pass) {
    return {
      ok: false,
      error:
        "Email delivery is not configured yet. Please contact us directly at director@nordicspiritstrade.com or call +358 45 206 7538.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Nordic Spirits Trade Website" <${user}>`,
      to: "director@nordicspiritstrade.com",
      replyTo: email,
      subject: `Partnership Inquiry — ${name} (${company})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1a1a2e;">
          <h2 style="color: #1a1a2e; border-bottom: 2px solid #c8102e; padding-bottom: 8px;">
            New Partnership Inquiry
          </h2>
          <table style="width:100%; border-collapse:collapse; margin-top:16px;">
            <tr><td style="padding:8px 0; color:#666; width:120px"><strong>Name</strong></td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 0; color:#666"><strong>Company</strong></td><td style="padding:8px 0">${company}</td></tr>
            <tr><td style="padding:8px 0; color:#666"><strong>Email</strong></td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0; color:#666"><strong>Phone</strong></td><td style="padding:8px 0">${phone || "—"}</td></tr>
          </table>
          <div style="margin-top:20px; padding:16px; background:#f8f6f0; border-radius:8px;">
            <strong>Message:</strong>
            <p style="margin-top:8px; line-height:1.6; white-space:pre-wrap;">${message}</p>
          </div>
          <p style="margin-top:24px; font-size:12px; color:#999;">
            Sent via nordicspiritstrade.com contact form
          </p>
        </div>
      `,
    });

    return { ok: true };
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
