import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

const marqueeItems = [
  "Called to the Bar 1986",
  "Senior Advocate of Nigeria 1998",
  "Chartered Arbitrator (C.Arb.) · FCIArb",
  "National Leader in Arbitration, Who's Who Legal",
  "Band One, Chambers & Partners",
  "500 Leading Lawyers Worldwide · ICFM",
  "Founder & Chair, JICAM · Abuja",
  "Immediate Past Chair, CIArb Abuja Chapter",
  "Life Bencher, Body of Benchers",
  "OFR · MFR National Honours",
  "Fellow, FICMC · Member, AAA",
  "Chancellor, Newgate University, Minna",
  "Thomas Sankara Pan-African Prize 2024",
  "DiplCArb, Keble College, Oxford",
];

const authorityAreas = [
  {
    num: "01",
    title: "Arbitration & Mediation",
    text: "Chartered Arbitrator and certified mediator; domestic and cross-border ADR including institutional and ad-hoc proceedings.",
  },
  {
    num: "02",
    title: "Dispute Resolution & Litigation",
    text: "Landmark matters before Nigerian superior courts and foreign jurisdictions across four decades of advocacy.",
  },
  {
    num: "03",
    title: "Election Petitions",
    text: "Lead counsel to INEC and major political parties in nationally significant electoral disputes.",
  },
  {
    num: "04",
    title: "Corporate & Regulatory Counsel",
    text: "Adviser to banks, multinationals and government institutions; SEC-registered capital market consultant.",
  },
];

export default function HomePage() {
  return (
    <>
      <section
        id="hero"
        className="relative bg-hero-bg overflow-hidden grain"
      >
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/hero-bokeh.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-hero-bg/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/20 via-hero-bg/45 to-hero-bg/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-hero-bg via-transparent to-transparent" />
        </div>

        <div className="xl:hidden pointer-events-none absolute inset-x-0 top-0 bottom-0 z-[1]" aria-hidden>
          <Image
            src="/images/chief-hero-cut-mobile.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-top scale-[1.12] sm:scale-[0.92] md:scale-[0.82] origin-top [object-position:center_top] drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-hero-bg/10 via-hero-bg/40 to-hero-bg" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-end min-h-[82vh] xl:min-h-[100vh]">
            <div className="hidden xl:block relative xl:col-span-6 h-[92vh] self-end xl:-ml-6">
              <div
                className="absolute inset-0 [background:radial-gradient(55%_46%_at_60%_80%,rgba(0,0,0,0.5),transparent_72%)]"
                aria-hidden
              />
              <Image
                src="/images/chief-hero-cut.webp"
                alt="Chief Joe-Kyari Gadzama, OFR, SAN"
                fill
                priority
                sizes="52vw"
                className="object-contain object-bottom scale-[1.3] origin-bottom drop-shadow-[34px_20px_46px_rgba(0,0,0,0.62)] [object-position:center_bottom]"
              />
            </div>

            <div className="xl:col-span-6 relative z-10 pt-[58vw] sm:pt-[46vw] md:pt-[40vw] pb-6 xl:py-24 xl:pt-24 xl:pl-6 animate-fadeIn [text-shadow:0_1px_24px_rgba(6,12,26,0.7)]">
              <p className="eyebrow eyebrow-line mb-5 xl:mb-7 !text-[#E0C979]">
                Senior Advocate of Nigeria · Chartered Arbitrator
              </p>

              <h1
                className="text-white font-bold text-5xl sm:text-6xl xl:text-[80px] leading-[1.03] mb-5 xl:mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Joe-Kyari{" "}
                <span
                  className="display-italic"
                  style={{ color: "#E7C97A", fontFamily: "var(--font-display)" }}
                >
                  Gadzama
                </span>
              </h1>

              <p className="font-display italic text-base sm:text-2xl mb-3" style={{ color: "#E7C97A" }}>
                OFR, SAN, Life Bencher, FCIArb, C.Arb.
              </p>

              <p className="text-white/85 leading-relaxed max-w-xl mb-8 xl:mb-10 font-medium text-sm sm:text-base">
                Founding Principal Partner of J-K Gadzama LLP. Four decades at
                the Nigerian Bar, resolving complex commercial disputes through
                arbitration, mediation and advocacy of the highest order.
              </p>

              <div className="flex flex-wrap gap-4 mb-16 xl:mb-0">
                <Link href="/cv/arbitration-adr" className="btn-filled">
                  Arbitration &amp; ADR CV
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

            <section
        className="bg-navy-deep border-t border-navy-line overflow-hidden py-5"
        aria-label="Credentials"
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center shrink-0 text-accent/90 text-[11px] font-semibold uppercase tracking-[0.22em] px-8"
            >
              {item}
              <span className="ml-16 text-accent/40" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </section>

      <section className="bg-bg py-24 lg:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <RevealOnScroll>
                <p className="eyebrow eyebrow-line mb-6 font-bold">The Practitioner</p>
                <p
                  className="font-display font-bold leading-none text-navy select-none"
                  style={{ fontSize: "clamp(72px, 10vw, 132px)" }}
                >
                  40<span className="text-accent-deep">+</span>
                </p>
                <p className="text-navy font-semibold text-base mt-3 tracking-wide">
                  years at the Nigerian Bar
                </p>

                <div className="mt-8 pt-6 border-t border-hairline grid grid-cols-2 gap-4 max-w-xs">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-deep">
                      Called to Bar
                    </p>
                    <p className="font-display text-lg text-navy font-bold mt-1">
                      1986
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-deep">
                      SAN Elevation
                    </p>
                    <p className="font-display text-lg text-navy font-bold mt-1">
                      1998
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
            <div className="lg:col-span-8">
              <RevealOnScroll>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-snug text-text mb-8">
                  A practitioner&apos;s authority across the full spectrum of{" "}
                  <span className="display-italic text-accent-deep">
                    dispute resolution
                  </span>
                  .
                </h2>
                <p className="text-text-muted max-w-2xl leading-relaxed mb-6">
                  Called to the Nigerian Bar in 1986 and elevated to Senior
                  Advocate of Nigeria in 1998, Chief Gadzama has advised
                  governments, multinational corporations and leading
                  institutions. A Fellow of the Chartered Institute of
                  Arbitrators and one of the few Chartered Arbitrators in
                  Nigeria, he chairs the Board of Trustees of JICAM and is
                  recognised on Who&apos;s Who Legal as an arbitration expert.
                </p>
                <Link href="/about" className="arrow-link">
                  Read full profile <span aria-hidden>→</span>
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-hairline py-24 lg:py-28">
        <div className="section-container">
          <RevealOnScroll>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="eyebrow eyebrow-line mb-5">Areas of Authority</p>
                <h2 className="text-3xl sm:text-4xl text-text">
                  Four decades of{" "}
                  <span className="display-italic text-accent-deep">counsel</span>
                </h2>
              </div>
              <Link href="/cv/general" className="arrow-link hidden sm:inline-flex">
                General CV <span aria-hidden>→</span>
              </Link>
            </div>
          </RevealOnScroll>

          <div>
            {authorityAreas.map((area) => (
              <RevealOnScroll key={area.num}>
                <div className="numbered-row">
                  <span className="num">{area.num}</span>
                  <div>
                    <h3 className="text-xl sm:text-2xl text-text mb-1.5">
                      {area.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed max-w-2xl">
                      {area.text}
                    </p>
                  </div>
                  <span className="text-accent hidden md:block" aria-hidden>
                    →
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hero-bg relative overflow-hidden grain py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="bokeh top-[-30px] left-[10%] w-64 h-64 bg-accent/[0.10]" />
          <div className="bokeh bottom-[-40px] right-[12%] w-72 h-72 bg-accent/[0.08]" />
        </div>
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <RevealOnScroll>
                <p className="eyebrow eyebrow-line mb-6">
                  Alternative Dispute Resolution
                </p>
                <h2 className="text-nav-text text-4xl sm:text-5xl mb-6">
                  JICAM
                </h2>
                <p className="text-white/75 leading-relaxed max-w-2xl mb-8">
                  The Janada International Centre for Arbitration and Mediation,
                  established 2015, is a leading neutral venue for domestic and
                  international commercial disputes. Chief J-K Gadzama, SAN
                  serves as Chairman of the Board of Trustees; since 2022 the
                  Centre has also served as a training hub for ADR
                  professionals.
                </p>
                <a
                  href="https://www.j-kgadzamallp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link"
                >
                  Visit JICAM <span aria-hidden>→</span>
                </a>
              </RevealOnScroll>
            </div>
            <div className="lg:col-span-4">
              <RevealOnScroll>
                <div className="border border-accent/40 bg-navy-deep/60 backdrop-blur-xs p-10 text-center shadow-lg">
                  <p className="font-display text-accent text-6xl mb-2">2015</p>
                  <p className="text-white/70 text-xs uppercase tracking-[0.2em]">
                    Established · Abuja
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-24 lg:py-32">
        <div className="section-container relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <span
                className="font-display text-accent text-7xl leading-none block mb-4"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="pull-quote mb-8">
                Recognised on Who&apos;s Who Legal as an arbitration expert and
                named among the 500 leading lawyers in the world.
              </p>
              <hr className="gold-rule mx-auto" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-surface border-t border-hairline py-24 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Curriculum Vitae",
                text: "Arbitration & ADR and General CVs, available to view and download.",
                href: "/cv/arbitration-adr",
                cta: "Explore",
              },
              {
                title: "Publications",
                text: "Books and scholarly papers on arbitration, ADR and Nigerian commercial law.",
                href: "/publications",
                cta: "Browse",
              },
              {
                title: "Vital Links",
                text: "J-K Gadzama LLP · JICAM · Newgate University, Minna.",
                href: "/vital-links",
                cta: "Visit",
              },
            ].map((card) => (
              <RevealOnScroll key={card.title}>
                <Link href={card.href} className="block h-full">
                  <div className="card-luxury card-accent-top h-full flex flex-col justify-between min-h-[230px] p-8 md:p-10 shadow-sm hover:shadow-xl">
                    <div>
                      <h3 className="text-2xl text-text mb-4 font-bold">{card.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                    <span className="arrow-link mt-8">
                      {card.cta} <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
