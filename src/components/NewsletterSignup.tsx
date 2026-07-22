"use client";

import { useState } from "react";

type Props = {
  source?: string;
  variant?: "light" | "dark";
  compact?: boolean;
};

export default function NewsletterSignup({
  source = "website",
  variant = "light",
  compact = false,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const dark = variant === "dark";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (res.ok) {
        setStatus("ok");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Could not subscribe. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <p className={`text-sm ${dark ? "text-accent" : "text-accent-deep"}`}>
        Thank you for subscribing. You will hear from us soon.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className={compact ? "space-y-2" : "space-y-3"}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          className={`form-input flex-1 ${
            dark
              ? "!bg-white/10 !border-white/20 !text-white placeholder:!text-white/50"
              : ""
          }`}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-filled shrink-0 disabled:opacity-60"
        >
          {status === "sending" ? "…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className={`text-xs ${dark ? "text-red-300" : "text-red-600"}`}>
          {error}
        </p>
      )}
      <p className={`text-xs ${dark ? "text-white/45" : "text-text-muted"}`}>
        Occasional updates on arbitration, ADR, and Chief Gadzama&apos;s work. No spam.
      </p>
    </form>
  );
}
