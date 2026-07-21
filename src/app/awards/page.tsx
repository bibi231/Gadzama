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

      {/* ─── Photo feature ────────────────────────────────────────────────── */}
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
              <div className="relative h-64 lg:h-auto lg:min-h-[400px]">
                <Image
                  src="/images/gallery/g5.jpg"
                  alt="Chief Joe-Kyari Gadzama, OFR, SAN"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                {/* Gradient blend into the bg */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/60 hidden lg:block" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── Awards groups ────────────────────────────────────────────────── */}
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
                    <div className="divide-y divide-hairline">
                      {group.items.map((item) => (
                        <div
                          key={item.title}
                          className="py-5 flex gap-6 items-baseline"
                        >
                          <span className="font-display text-accent-deep text-sm w-16 shrink-0">
                            {item.year || ""}
                          </span>
                          <div>
                            <h3 className="text-lg text-text font-display">
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
    </>
  );
}
