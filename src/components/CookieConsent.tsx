"use client";

import { useEffect, useState } from "react";

const KEY = "gadzama_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed z-[90] bottom-4 left-4 right-4 sm:right-auto sm:max-w-md animate-fadeIn"
    >
      <div className="relative bg-navy-deep text-white rounded-xl border border-navy-line shadow-[0_24px_70px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-accent-deep via-accent to-accent-deep" />
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <span className="shrink-0 w-11 h-11 rounded-full bg-accent/15 text-accent flex items-center justify-center">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 2a10 10 0 1 0 9.54 13.06 3.5 3.5 0 0 1-4.6-4.6A3.5 3.5 0 0 1 12.5 5.9 10 10 0 0 0 12 2z" />
                <circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none" />
                <circle cx="13.5" cy="14" r="0.9" fill="currentColor" stroke="none" />
                <circle cx="8.5" cy="15" r="0.7" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg text-white mb-1">
                Your privacy
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We use cookies to keep this site working and to understand how it
                is used. You choose what to allow.
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <button
              type="button"
              onClick={() => decide("declined")}
              className="flex-1 px-4 py-2.5 text-[11px] font-semibold tracking-[0.14em] uppercase rounded-md border border-white/20 text-white/80 hover:border-accent hover:text-accent transition-colors"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="flex-1 px-4 py-2.5 text-[11px] font-semibold tracking-[0.14em] uppercase rounded-md bg-accent text-navy hover:bg-accent-deep transition-colors"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
