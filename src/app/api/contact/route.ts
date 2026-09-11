// Deprecated. On static hosting (DirectAdmin/Apache) the contact form is handled
// by the PHP endpoint at /api/contact.php. This stub is intentionally static so
// the `output: "export"` build does not fail on a dynamic route handler.
export const dynamic = "force-static";

export function GET() {
  return Response.json(
    { ok: false, note: "Use /api/contact.php on static hosting." },
    { status: 404 }
  );
}
