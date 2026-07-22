import { NextResponse } from "next/server";

// Newsletter subscription handler.
// Notifies the office by email using Resend (same setup as the contact form).
// Environment variables (set in Vercel / .env.local):
//   RESEND_API_KEY   - your Resend API key
//   CONTACT_TO       - inbox that should receive subscriptions
//   CONTACT_FROM     - a verified sender
// Until a database is connected, subscribers are captured via email notification.

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    const valid = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || "info@gadzama.com";
    const from =
      process.env.CONTACT_FROM || "Gadzama Website <onboarding@resend.dev>";

    if (!apiKey) {
      console.warn("Newsletter signup (email not configured):", { email, source });
      return NextResponse.json(
        { error: "Subscriptions are not yet configured on the server." },
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
        subject: "New newsletter subscriber, gadzama.com",
        html: `
          <div style="font-family:Inter,Arial,sans-serif;color:#1C2433">
            <h2 style="color:#0F1E3D">New newsletter subscriber</h2>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Signed up from:</strong> ${escapeHtml(source || "website")}</p>
            <hr style="border:none;border-top:1px solid #E2DBCB;margin:20px 0"/>
            <p style="font-size:12px;color:#6B7385">Captured on www.gadzama.com</p>
          </div>`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", detail);
      return NextResponse.json(
        { error: "Could not complete your subscription. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter route error:", err);
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
