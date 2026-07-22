"use client";

import { useEffect, useState } from "react";
import NewsletterSignup from "@/components/NewsletterSignup";

const KEY = "gadzama_welcome_seen";

export default function WelcomeBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = !!localStorage.getItem(KEY);
    } catch {
      /* ignore */
    }
    if (seen) return;
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome"
      className="fixed z-[85] bottom-24 sm:bottom-6 right-4 left-4 sm:left-auto sm:right-6 sm:max-w-sm bg-surface border border-hairline shadow-2xl card-accent-top animate-fadeIn"
    >
      <div className="p-6">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-text-muted hover:text-accent-deep transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <p className="eyebrow eyebrow-line mb-3">Welcome</p>
        <h3 className="text-xl text-text font-display mb-2">
          Stay connected
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4">
          Subscribe for occasional updates on Chief Gadzama&apos;s work in
          arbitration, ADR, and the profession.
        </p>
        <NewsletterSignup source="welcome-banner" compact />
      </div>
    </div>
  );
}
