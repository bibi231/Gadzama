import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import { awards, awardsIntro } from "@/content/awards";

export const metadata: Metadata = {
  title: "Honours, Awards & Titles",
  description:
    "National honours, traditional titles and international professional recognition conferred on Chief Joe-Kyari Gadzama, OFR, MFR, SAN.",
};

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="Honours, Awards & Titles"
        subtitle={awardsIntro}
      />

      <section className="bg-surface border-b border-hairline">
        <div className="section-container py-0">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="py-16 lg:pr-14 flex items-center">
                <div>
                  <p className="eyebrow eyebrow-line mb-6">A Career Recognised</p>
                  <p className="text-3xl sm:text-4xl text-text mb-6">
                    National Honours ·{" "}
                    <span className="display-italic text-accent-deep">
                      Traditional Titles
                    </span>{" "}
                    · International Acclaim
                  </p>
                  <p className="text-text-muted leading-relaxed max-w-md">
                    Chiefs Gadzama's record of service to law, to clients, and to
                    the nation has been recognised at every level, from the
                    Presidency of the Federal Republic to ancient royal stools, from
                    the Chambers directories of London to the halls of pan-African
                    scholarship.
                  </p>
                </div>
              </div>
              <div className="zoom-img relative h-64 lg:h-auto lg:min-h-[400px]">
                <Image
                  src="/images/gallery/g2-robe.jpg"
                  alt="Chief Joe-Kyari Gadzama, OFR, SAN in silk robes and wig"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/60 hidden lg:block" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-bg py-20 lg:py-24">
        <div className="section-container">
          <div className="space-y-20">
            {awards.map((group) => (
              <RevealOnScroll key={group.group}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <p className="eyebrow eyebrow-line mb-3">{group.eyebrow}</p>
                    <h2 className="text-2xl sm:text-3xl text-text">
                      {group.group}
                    </h2>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <div
                          key={item.title}
                          className="glow-row group/item flex gap-5 items-baseline px-4 py-4 border-b border-hairline/60"
                        >
                          <span className="year-badge text-sm w-14 shrink-0 tabular-nums">
                            {item.year || ""}
                          </span>
                          <div>
                            <h3 className="glow-title text-lg text-text font-display flex items-center gap-2.5">
                              <span className="glow-mark text-[10px]" aria-hidden>
                                ◆
                              </span>
                              {item.title}
                            </h3>
                            {item.detail && (
                              <p className="text-text-muted text-sm mt-1 leading-relaxed">
                                {item.detail}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hero-bg border-t border-navy-line py-16 lg:py-20 grain relative overflow-hidden">
        <div className="section-container relative z-10">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow eyebrow-line mb-4 font-bold">Academic Leadership</p>
                <h2 className="text-3xl sm:text-4xl text-nav-text mb-6">
                  Chancellor of <span className="display-italic text-accent">Newgate University</span>
                </h2>
                <p className="text-white/75 leading-relaxed max-w-xl mb-6">
                  In 2025, Chief Joe-Kyari Gadzama, OFR, SAN was invested as Chancellor of Newgate University, Minna. A crowning academic appointment honoring decades of mentorship, institutional leadership, and philanthropic dedication to tertiary education in Nigeria.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-accent text-xs font-semibold tracking-wider uppercase border border-accent/40 px-4 py-2 bg-navy-deep/60">
                    Invested 2025 · Minna, Niger State
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded overflow-hidden shadow-2xl border border-accent/30 bg-surface2 group">
                  <Image
                    src="/images/gallery/g12-chancellor.jpg"
                    alt="Chief Gadzama as Chancellor, Newgate University"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-4 right-4 text-white font-display text-sm font-semibold">
                    Investiture as Chancellor, Newgate University, Minna
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
