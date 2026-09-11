import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import CasesList from "@/components/CasesList";
import { caseIntro, internationalRecognition } from "@/content/cases";

export const metadata: Metadata = {
  title: "Notable Cases & Appointments",
  description:
    "A distinguished record of landmark legal engagements of Chief Joe-Kyari Gadzama, OFR, SAN, spanning electoral, constitutional, corporate, banking and international matters.",
};

export default function CasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Track Record"
        title="Notable Cases & Appointments"
        subtitle={caseIntro}
      />

      <section className="bg-surface border-b border-hairline py-14 bg-pattern-lattice">
        <div className="section-container">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-3">
                <div className="relative w-full aspect-[3/4] overflow-hidden shadow-lg border border-accent/20">
                  <Image
                    src="/images/cases-portrait.webp"
                    alt="Chief Joe-Kyari Gadzama, SAN"
                    fill
                    sizes="(max-width: 1024px) 60vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-accent" />
                </div>
              </div>

              <div className="lg:col-span-9">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { num: "40", label: "Years at the Bar" },
                    { num: "15+", label: "Landmark Cases" },
                    { num: "4", label: "Superior Court Levels" },
                    { num: "3", label: "International Jurisdictions" },
                  ].map((s) => (
                    <div key={s.label} className="text-center lg:text-left">
                      <p
                        className="font-display font-bold text-navy leading-none mb-2"
                        style={{ fontSize: "clamp(44px, 6vw, 72px)" }}
                      >
                        {s.num}
                        <span className="text-accent-deep">.</span>
                      </p>
                      <p className="text-text-muted text-sm uppercase tracking-[0.14em] font-semibold">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-text-muted text-sm leading-relaxed mt-8 max-w-2xl">
                  From the Supreme Court of Nigeria to the Tribunal de Grande
                  Instance de Toulouse, Chief Gadzama has carried the flag of
                  Nigerian legal excellence into every forum. The cases below
                  represent the signature engagements of a career defined by
                  constitutional weight and commercial complexity.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-bg py-20 lg:py-24">
        <div className="section-container">
          <CasesList />

          <RevealOnScroll>
            <div className="mt-20 border-t border-hairline pt-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <p className="eyebrow eyebrow-line">International Recognition</p>
                </div>
                <div className="lg:col-span-8">
                  <p className="pull-quote text-text">{internationalRecognition}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-hero-bg relative overflow-hidden grain py-20 bg-pattern-grid-fine">
        <div className="section-container relative z-10">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="eyebrow eyebrow-line mb-6">The Trusted Counsel</p>
                <h2 className="text-nav-text text-3xl sm:text-4xl mb-6">
                  Called when the{" "}
                  <span className="display-italic text-accent">stakes are highest</span>
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Whether defending a governor's tenure, representing a sovereign
                  national body on an election petition, or providing expert opinion
                  to a French tribunal, Chief Gadzama has been the lawyer his
                  clients and his country turn to when there is no room for error.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden shadow-xl border border-accent/20">
                <Image
                  src="/images/gallery/g4-casual.webp"
                  alt="Chief Gadzama"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-hero-bg/25" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
