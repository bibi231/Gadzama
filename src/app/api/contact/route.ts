import { NextResponse } from "next/server";

// Contact form handler.
// Delivers enquiries by email using Resend (https://resend.com) via its REST API,
// so no extra npm dependency is required. Set these environment variables in
// Vercel / .env.local:
//   RESEND_API_KEY   - your Resend API key
//   CONTACT_TO       - inbox that should receive enquiries (e.g. Chief's office)
//   CONTACT_FROM     - a verified sender, e.g. "Gadzama Website <enquiries@gadzama.com>"
//
// The visitor's email is set as reply-to, so replying to the notification email
// goes straight back to them.

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || "info@gadzama.com";
    const from =
      process.env.CONTACT_FROM || "Gadzama Website <onboarding@resend.dev>";

    if (!apiKey) {
      // Fail gracefully in development / before keys are configured.
      console.warn("Contact form submission (email not configured):", {
        name,
        email,
        message,
      });
      return NextResponse.json(
        { error: "Email service not yet configured on the server." },
        { status: 503 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry from ${name}, gadzama.com`,
        html: `
          <div style="font-family:Inter,Arial,sans-serif;color:#1C2433">
            <h2 style="color:#0F1E3D">New website enquiry</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap;border-left:3px solid #C2A14D;padding-left:12px">${escapeHtml(
              message
            )}</p>
            <hr style="border:none;border-top:1px solid #E2DBCB;margin:20px 0"/>
            <p style="font-size:12px;color:#6B7385">Sent from the contact form at www.gadzama.com</p>
          </div>`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", detail);
      return NextResponse.json(
        { error: "Could not send your message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
