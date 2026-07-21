"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import SocialIcon from "@/components/SocialIcon";
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
              <div className="space-y-8">
                <div>
                  <p className="eyebrow eyebrow-line mb-3">Office</p>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-2 text-text not-italic text-[15px] leading-relaxed hover:text-accent-deep transition-colors"
                  >
                    <address className="not-italic">
                      {contact.address.line1}
                      <br />
                      {contact.address.line2}
                      <br />
                      {contact.address.line3}
                    </address>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                      ↗
                    </span>
                  </a>
                  <p className="text-text-muted text-xs mt-2">
                    Click to open in Google Maps
                  </p>
                </div>

                <div>
                  <p className="eyebrow eyebrow-line mb-3">Phone</p>
                  <a
                    href={telHref}
                    className="text-text text-[15px] hover:text-accent transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>

                <div>
                  <p className="eyebrow eyebrow-line mb-3">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-accent text-[15px] hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <p className="eyebrow eyebrow-line mb-4">Connect</p>
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
