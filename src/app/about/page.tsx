import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Chief Joe-Kyari Gadzama, OFR, SAN, his distinguished career, national honours, professional associations and ADR memberships.",
};

const recognitionBadges = [
  { label: "Who's Who Legal", sub: "National Leader in Arbitration" },
  { label: "Chambers & Partners", sub: "Band One Litigation Lawyer" },
  { label: "ICFM 2015", sub: "500 Leading Lawyers Worldwide" },
  { label: "YOUPAD 2024", sub: "Thomas Sankara Pan-African Prize" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={aboutContent.headline}
        subtitle={aboutContent.subtitle}
      />

      {/* ═══ PROFILE ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Portrait (left, 2 cols) */}
            <div className="lg:col-span-2">
              <RevealOnScroll>
                <div className="relative">
                  <div className="relative w-full aspect-[3/4] rounded overflow-hidden bg-surface2">
                    <Image
                      src="/images/chief-about.jpg"
                      alt="Chief Joe-Kyari Gadzama, OFR, SAN"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Gold accent bar */}
                  <div className="absolute left-0 top-8 bottom-8 w-1 bg-accent rounded-full" />
                </div>
              </RevealOnScroll>
            </div>

            {/* Profile prose (right, 3 cols) */}
            <div className="lg:col-span-3">
              <RevealOnScroll>
                <div className="space-y-6">
                  {aboutContent.profileParagraphs.map((para, i) => (
                    <p key={i} className="text-text leading-relaxed text-[15px]">
                      {para}
                    </p>
                  ))}
                </div>
              </RevealOnScroll>

              {/* Pull quote */}
              <RevealOnScroll className="mt-10">
                <blockquote className="pull-quote">
                  &ldquo;{aboutContent.pullQuote}&rdquo;
                </blockquote>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RECOGNITION STRIP ══════════════════════════════════════════════ */}
      <section className="bg-hero-bg border-y border-navy-line py-14">
        <div className="section-container">
          <RevealOnScroll>
            <p className="eyebrow text-center mb-10">International Recognition</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recognitionBadges.map((b) => (
                <div
                  key={b.label}
                  className="border border-accent/25 p-6 text-center hover:border-accent/60 transition-colors"
                >
                  <p className="font-display text-accent text-sm font-bold uppercase tracking-[0.15em] mb-2">
                    {b.label}
                  </p>
                  <p className="text-white/60 text-xs leading-relaxed">{b.sub}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ ROBE PHOTO BREAK ════════════════════════════════════════════════ */}
      <section className="bg-bg py-16 md:py-24">
        <div className="section-container">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Photo */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/gallery/g5.jpg"
                    alt="Chief Joe-Kyari Gadzama in legal robes"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top"
                  />
                  {/* Decorative gold corner */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent" />
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <p className="eyebrow eyebrow-line mb-6">A Record of Firsts</p>
                <h2 className="text-3xl sm:text-4xl text-text mb-6">
                  The first{" "}
                  <span className="display-italic text-accent-deep">SAN</span>{" "}
                  from the University of Maiduguri and the North-East of Nigeria
                </h2>
                <p className="text-text-muted leading-relaxed mb-6">
                  Graduating as best student at the University of Maiduguri, Chief
                  Gadzama went on to found J-K Gadzama LLP in 1989, now a
                  national institution spanning Abuja, Lagos and Port Harcourt.
                  His elevation to Senior Advocate in 1998 broke a regional glass
                  ceiling, and his subsequent attainment of the Chartered
                  Arbitrator rank (C.Arb.) placed him among an elite handful in
                  all of Nigeria.
                </p>
                <p className="text-text-muted leading-relaxed mb-6">
                  In 2015 he founded JICAM, the Janada International Centre for
                  Arbitration and Mediation, providing Nigeria and the continent
                  with a modern, independent neutral seat for commercial dispute
                  resolution. Since 2022 it has also operated as a training hub
                  for ADR professionals.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Appointed Chancellor of Newgate University in 2025 and Chairman
                  of the Chief Justice's Young Lawyers Mentoring Committee in
                  2021, the thread through his career is an unwavering commitment
                  to growing the next generation of Nigerian legal professionals.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ NATIONAL HONOURS & TITLES ═════════════════════════════════════ */}
      <section className="py-16 bg-surface border-y border-hairline">
        <div className="section-container">
          <RevealOnScroll>
            <p className="eyebrow mb-6">National Honours &amp; Titles</p>
            <div className="flex flex-wrap gap-4 md:gap-6 items-center">
              {aboutContent.honoursAndTitles.map((h) => (
                <span key={h.title} className="text-text text-sm md:text-base">
                  <strong>{h.title}</strong>
                  {h.year && ` (${h.year})`}
                  {h.detail && (
                    <span className="text-text-muted">
                      {" "}· {h.detail}
                    </span>
                  )}
                </span>
              ))}
            </div>

            {/* Traditional titles */}
            {aboutContent.traditionalTitles.length > 0 && (
              <p className="mt-4 text-text-muted text-sm">
                Traditional titles:{" "}
                {aboutContent.traditionalTitles.join(" · ")}
              </p>
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══ ASSOCIATIONS & ADR ═════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Professional Associations */}
            <RevealOnScroll>
              <p className="eyebrow eyebrow-line mb-6">Professional Associations</p>
              <ul className="divide-y divide-hairline">
                {aboutContent.professionalAssociations.map((a) => (
                  <li key={a.name}>
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 text-text text-sm leading-relaxed hover:text-accent-deep transition-colors"
                    >
                      <span>{a.name}</span>
                      <span className="text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            {/* ADR Memberships */}
            <RevealOnScroll>
              <p className="eyebrow eyebrow-line mb-6">ADR Memberships &amp; Positions</p>
              <ul className="divide-y divide-hairline">
                {aboutContent.adrMemberships.map((m) => (
                  <li key={m.name}>
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 text-text text-sm leading-relaxed hover:text-accent-deep transition-colors"
                    >
                      <span>{m.name}</span>
                      <span className="text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ BOOKSHELF / SCHOLAR PHOTO CODA ════════════════════════════════ */}
      <section className="bg-surface border-t border-hairline overflow-hidden">
        <div className="section-container py-0">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Photo, full bleed on right */}
              <div className="relative h-64 lg:h-auto lg:min-h-[380px] order-2 lg:order-1">
                <Image
                  src="/images/gallery/g3-bookshelf.jpg"
                  alt="Chief Gadzama in his chamber"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/70 hidden lg:block" />
              </div>

              {/* Text */}
              <div className="order-1 lg:order-2 flex items-center py-16 px-0 lg:pl-14">
                <div>
                  <p className="eyebrow eyebrow-line mb-6">Scholar &amp; Teacher</p>
                  <h2 className="text-3xl sm:text-4xl text-text mb-6">
                    PhD Candidate &amp;{" "}
                    <span className="display-italic text-accent-deep">
                      Part-Time Lecturer
                    </span>
                  </h2>
                  <p className="text-text-muted leading-relaxed max-w-md">
                    Beyond the Bar, Chief Gadzama pursues a PhD at Nile University
                    of Nigeria while teaching the next generation of lawyers. A
                    Keble College Oxford alumnus, he bridges the worlds of academic
                    jurisprudence and live practice, holding that rigour in
                    scholarship and rigour in advocacy are inseparable.
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
