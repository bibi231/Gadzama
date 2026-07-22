"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import SocialIcon from "@/components/SocialIcon";
import NewsletterSignup from "@/components/NewsletterSignup";
import { contact, socials } from "@/content/site";

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  contact.address.full
)}`;
const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  contact.address.full
)}&output=embed`;
const telHref = `tel:${contact.phone.replace(/[^\d+]/g, "")}`;

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("ok");
        setFormState({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Could not send your message.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        subtitle="For enquiries regarding arbitration, mediation, speaking engagements or consultations."
      />

      <section className="py-16 md:py-24 bg-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact info */}
            <RevealOnScroll>
              <div className="space-y-4">
                {/* Office */}
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 items-start p-5 bg-surface border border-hairline rounded-lg hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,30,61,0.08)] transition-all"
                >
                  <span className="shrink-0 w-11 h-11 rounded-full bg-accent/10 text-accent-deep flex items-center justify-center group-hover:bg-accent group-hover:text-navy transition-colors">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow mb-1.5">Office</p>
                    <address className="not-italic text-text text-[15px] leading-relaxed">
                      {contact.address.line1}
                      <br />
                      {contact.address.line2}
                      <br />
                      {contact.address.line3}
                    </address>
                    <span className="inline-flex items-center gap-1 text-text-muted text-xs mt-2 group-hover:text-accent-deep transition-colors">
                      Open in Google Maps <span aria-hidden>↗</span>
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={telHref}
                  className="group flex gap-4 items-center p-5 bg-surface border border-hairline rounded-lg hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,30,61,0.08)] transition-all"
                >
                  <span className="shrink-0 w-11 h-11 rounded-full bg-accent/10 text-accent-deep flex items-center justify-center group-hover:bg-accent group-hover:text-navy transition-colors">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <p className="eyebrow mb-1">Phone</p>
                    <p className="text-text text-[15px] group-hover:text-accent-deep transition-colors">
                      {contact.phone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex gap-4 items-center p-5 bg-surface border border-hairline rounded-lg hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,30,61,0.08)] transition-all"
                >
                  <span className="shrink-0 w-11 h-11 rounded-full bg-accent/10 text-accent-deep flex items-center justify-center group-hover:bg-accent group-hover:text-navy transition-colors">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow mb-1">Email</p>
                    <p className="text-text text-[15px] group-hover:text-accent-deep transition-colors break-all">
                      {contact.email}
                    </p>
                  </div>
                </a>

                {/* Connect */}
                <div className="p-5">
                  <p className="eyebrow mb-4">Connect</p>
                  <div className="flex gap-3">
                    {socials.map((s) =>
                      s.pending ? (
                        <span
                          key={s.platform}
                          title={`${s.platform}, coming soon`}
                          className="w-11 h-11 flex items-center justify-center border border-hairline text-text-muted/50 rounded-full cursor-default"
                        >
                          <SocialIcon icon={s.icon} />
                        </span>
                      ) : (
                        <a
                          key={s.platform}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.platform}
                          className="w-11 h-11 flex items-center justify-center border border-hairline text-text hover:bg-navy hover:text-accent hover:border-navy transition-all rounded-full"
                        >
                          <SocialIcon icon={s.icon} />
                        </a>
                      )
                    )}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="p-6 bg-hero-bg rounded-lg card-accent-top relative overflow-hidden grain">
                  <div className="pointer-events-none absolute inset-0" aria-hidden>
                    <div className="bokeh top-[-20px] right-[6%] w-40 h-40 bg-accent/[0.12]" />
                  </div>
                  <div className="relative z-10">
                    <p className="eyebrow mb-2">Newsletter</p>
                    <p className="text-white/60 text-sm mb-4 max-w-md">
                      Subscribe for occasional updates on Chief Gadzama&apos;s work
                      in arbitration, ADR and the profession.
                    </p>
                    <NewsletterSignup source="contact-page" variant="dark" compact />
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right: Enquiry form */}
            <RevealOnScroll>
              <div className="card p-8">
                <h2 className="text-2xl text-text mb-2">Send an enquiry</h2>
                <p className="text-text-muted text-sm mb-6">
                  Your message is delivered by email to Chief&apos;s office; a
                  reply will come directly to the email address you provide.
                </p>

                {status === "ok" && (
                  <div className="mb-4 p-3 bg-accent/10 border border-accent/30 text-accent-deep text-sm">
                    Thank you, your message has been sent. We will be in touch
                    shortly.
                  </div>
                )}
                {status === "error" && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm">
                    {error} You can also email us directly at {contact.email}.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="eyebrow block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      className="form-input"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="eyebrow block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      className="form-input"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="eyebrow block mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      className="form-input min-h-[140px] resize-y"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-filled w-full justify-center disabled:opacity-60"
                    id="contact-submit"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-surface">
        <div className="w-full h-[360px] border-t border-hairline">
          <iframe
            title="J-K Gadzama Court location"
            src={mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
