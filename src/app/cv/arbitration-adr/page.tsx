import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import { arbitrationCV } from "@/content/cv";

export const metadata: Metadata = {
  title: "Arbitration & ADR CV",
  description:
    "Arbitration and Alternative Dispute Resolution curriculum vitae of Chief Joe-Kyari Gadzama, OFR, SAN, education, appointments, and recognition.",
};

export default function ArbitrationCVPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curriculum Vitae"
        title="Arbitration & ADR CV"
      >
        {/* Tab toggle + Download */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex">
            <span className="px-5 py-2 bg-accent text-btn-filled-text text-sm font-semibold tracking-wider uppercase">
              Arbitration &amp; ADR CV
            </span>
            <Link
              href="/cv/general"
              className="px-5 py-2 border border-hairline text-nav-text text-sm font-medium tracking-wider uppercase hover:bg-accent/10 transition-colors"
            >
              General CV
            </Link>
          </div>
          <a
            href="/downloads/gadzama-arbitration-adr-cv.pdf"
            className="btn-outline text-nav-text border-nav-text hover:bg-nav-text hover:text-header-bg"
            download
            id="download-arb-cv"
          >
            Download PDF ↓
          </a>
        </div>
      </PageHeader>

      {/* CV Body */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="section-container max-w-4xl">
          {arbitrationCV.map((section) => (
            <RevealOnScroll key={section.heading} className="mb-16">
              <p className="eyebrow mb-4">{section.heading}</p>
              <div className="border-t border-hairline">
                {section.entries.map((entry, i) => (
                  <div
                    key={i}
                    className="py-5 border-b border-hairline flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1"
                  >
                    <div>
                      <p className="text-text font-semibold text-[15px]">
                        {entry.title}
                      </p>
                      {entry.institution && (
                        <p className="text-text-muted text-sm">
                          {entry.institution}
                        </p>
                      )}
                    </div>
                    {entry.year && (
                      <span className="text-text-muted text-sm shrink-0 sm:text-right">
                        {entry.year}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
