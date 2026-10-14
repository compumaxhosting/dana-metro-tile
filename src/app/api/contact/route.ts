import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

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
      })[character] ?? character
  );
}

export async function POST(request: Request) {
  const { RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL } = process.env;

  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !RESEND_TO_EMAIL) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY, RESEND_FROM_EMAIL, or RESEND_TO_EMAIL." },
      { status: 500 }
    );
  }

  const recipients = RESEND_TO_EMAIL.split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);

  if (recipients.length === 0) {
    return NextResponse.json(
      { error: "At least one recipient email is required." },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const projectLocation = String(formData.get("projectLocation") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "(not provided)");
  const safeProjectLocation = escapeHtml(projectLocation || "(not provided)");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const html = `
    <div style="margin: 0; padding: 32px 16px; background-color: #f4f1ed; font-family: Arial, Helvetica, sans-serif; color: #211b18;">
      <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5ded7;">
        <div style="padding: 28px 32px; background-color: #211b18; color: #f5eee7;">
          <p style="margin: 0 0 10px; color: #c8a47b; font-size: 11px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase;">Tiles &amp; Stones NJ</p>
          <h1 style="margin: 0; font-size: 28px; line-height: 1.25; font-weight: normal;">New Consultation Request</h1>
          <p style="margin: 12px 0 0; color: #d8cec5; font-size: 14px; line-height: 1.6;">A new project inquiry has been submitted through the website.</p>
        </div>

        <div style="padding: 32px;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="width: 40%; padding: 0 16px 18px 0; color: #8c6a4c; font-size: 11px; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase; vertical-align: top;">Name</td>
              <td style="padding: 0 0 18px; color: #211b18; line-height: 1.5; vertical-align: top;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 0 16px 18px 0; color: #8c6a4c; font-size: 11px; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase; vertical-align: top;">Email</td>
              <td style="padding: 0 0 18px; line-height: 1.5; vertical-align: top;"><a href="mailto:${safeEmail}" style="color: #8c6a4c; text-decoration: none;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 0 16px 18px 0; color: #8c6a4c; font-size: 11px; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase; vertical-align: top;">Phone</td>
              <td style="padding: 0 0 18px; color: #211b18; line-height: 1.5; vertical-align: top;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 0 16px 0 0; color: #8c6a4c; font-size: 11px; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase; vertical-align: top;">Project location</td>
              <td style="padding: 0; color: #211b18; line-height: 1.5; vertical-align: top;">${safeProjectLocation}</td>
            </tr>
          </table>

          <div style="height: 1px; margin: 28px 0; background-color: #e5ded7;"></div>

          <p style="margin: 0 0 12px; color: #8c6a4c; font-size: 11px; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase;">Project details</p>
          <div style="padding: 18px; background-color: #f8f5f2; border-left: 3px solid #c8a47b; color: #211b18; font-size: 15px; line-height: 1.7;">${safeMessage}</div>
        </div>

        <div style="padding: 18px 32px; border-top: 1px solid #e5ded7; color: #8a817a; font-size: 12px; line-height: 1.5;">Reply directly to this email to contact ${safeName}.</div>
      </div>
    </div>
  `;

  const text = [
    "TILES & STONES NJ",
    "NEW CONSULTATION REQUEST",
    "",
    `Name              ${name}`,
    `Email             ${email}`,
    `Phone             ${phone || "(not provided)"}`,
    `Project location  ${projectLocation || "(not provided)"}`,
    "",
    "PROJECT DETAILS",
    message,
    "",
    `Reply directly to this email to contact ${name}.`,
  ].join("\n");

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `Tiles & Stones NJ <${RESEND_FROM_EMAIL}>`,
      to: recipients,
      subject: `New consultation request from ${name}`,
      reply_to: email,
      html,
      text,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    return NextResponse.json(
      { error: "Failed to send email via Resend.", details },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}