import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CVList from "@/components/CVList";
import { generalCV } from "@/content/cv";

export const metadata: Metadata = {
  title: "General CV",
  description:
    "General curriculum vitae of Chief Joe-Kyari Gadzama, OFR, SAN, education, career, national honours, practice areas, and professional associations.",
};

export default function GeneralCVPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curriculum Vitae"
        title="General CV"
      >
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex">
            <Link
              href="/cv/arbitration-adr"
              className="px-5 py-2 border border-hairline text-nav-text text-sm font-medium tracking-wider uppercase hover:bg-accent/10 transition-colors"
            >
              Arbitration &amp; ADR CV
            </Link>
            <span className="px-5 py-2 bg-accent text-btn-filled-text text-sm font-semibold tracking-wider uppercase">
              General CV
            </span>
          </div>
          <a
            href="/downloads/gadzama-general-cv.pdf"
            className="btn-outline text-nav-text border-nav-text hover:bg-nav-text hover:text-header-bg"
            download
            id="download-gen-cv"
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
                src="/images/gallery/g10-suit.jpg"
                alt="Chief Joe-Kyari Gadzama, OFR, SAN"
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
                Executive Profile
              </span>
              <h2 className="text-2xl font-bold text-text mt-1">
                Chief Joe-Kyari Gadzama
              </h2>
              <p className="text-accent-deep font-display italic text-sm mt-0.5">
                OFR, SAN, Life Bencher, FCIArb, C.Arb.
              </p>
              <p className="text-text-muted text-xs sm:text-sm mt-2 leading-relaxed">
                Founding Principal Partner of J-K Gadzama LLP. Elevated to Senior Advocate of Nigeria in 1998 with four decades of pre-eminent practice across litigation, corporate advisory, and national service.
              </p>
            </div>
          </div>

          <CVList sections={generalCV} />
        </div>
      </section>
    </>
  );
}
