import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CVList from "@/components/CVList";
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

            <section className="py-12 md:py-16 bg-bg">
        <div className="section-container max-w-4xl">
          <div className="mb-12 p-6 sm:p-8 bg-surface border border-accent/25 rounded shadow-lg flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative w-28 h-36 sm:w-32 sm:h-40 shrink-0 rounded overflow-hidden border border-accent/40 shadow-md">
              <Image
                src="/images/gallery/g8-profile.jpg"
                alt="Chief Joe-Kyari Gadzama, Chartered Arbitrator"
                fill
                unoptimized
                sizes="150px"
                className="object-cover object-top"
              />
              <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-accent" />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-accent" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-deep">
                ADR &amp; Arbitral Credentials
              </span>
              <h2 className="text-2xl font-bold text-text mt-1">
                Chief Joe-Kyari Gadzama
              </h2>
              <p className="text-accent-deep font-display italic text-sm mt-0.5">
                C.Arb, FCIArb, DiplCArb (Keble College, Oxford)
              </p>
              <p className="text-text-muted text-xs sm:text-sm mt-2 leading-relaxed">
                Chartered Arbitrator of the Chartered Institute of Arbitrators (UK) and Chairman, Board of Trustees, Janada International Centre for Arbitration and Mediation (JICAM). Decades of international and domestic tribunal appointments.
              </p>
            </div>
          </div>

          <CVList sections={arbitrationCV} />
        </div>
      </section>
    </>
  );
}
