import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import { vitalLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Vital Links",
  description:
    "Key links related to Chief Joe-Kyari Gadzama, SAN, J-K Gadzama LLP, JICAM, and Newgate University.",
};

function LinkIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "briefcase":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      );
    case "scale":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
        </svg>
      );
    case "graduation":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function VitalLinksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vital Links"
        title="Key Connections"
        subtitle="Institutions and organisations associated with Chief Joe-Kyari Gadzama, SAN."
      />

      <section className="py-16 md:py-24 bg-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {vitalLinks.map((link) => (
              <RevealOnScroll key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  id={`vital-link-${link.name.toLowerCase().replace(/[\s-]+/g, '-')}`}
                >
                  <div className="card card-accent-top h-full flex flex-col items-start min-h-[220px]">
                    <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                      <LinkIcon icon={link.icon} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-accent mb-2">
                      {link.name}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed flex-1">
                      {link.description}
                    </p>
                    <p className="text-accent font-semibold text-sm tracking-wider uppercase mt-4 group-hover:underline">
                      Visit →
                    </p>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
