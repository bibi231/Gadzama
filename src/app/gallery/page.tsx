import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A photographic gallery of Chief Joe-Kyari Gadzama, OFR, SAN, Senior Advocate of Nigeria and Chartered Arbitrator.",
};

const photos = [
  { src: "/images/gallery/g1-blue-suit.jpg", span: "lg:col-span-2 lg:row-span-2", alt: "Chief Joe-Kyari Gadzama, SAN" },
  { src: "/images/gallery/g6-san-seated.jpg", span: "", alt: "Chief Gadzama in Senior Advocate silk robes and wig" },
  { src: "/images/gallery/g8-profile.jpg", span: "", alt: "Chief Gadzama in barrister's robe, profile portrait" },
  { src: "/images/gallery/g9-desk.jpg", span: "lg:col-span-2", alt: "Chief Gadzama in chambers with law reports" },
  { src: "/images/gallery/g2-robe.jpg", span: "", alt: "Chief Gadzama in barrister's robe and wig" },
  { src: "/images/gallery/g7-san-robes.jpg", span: "", alt: "Chief Gadzama in Senior Advocate robes" },
  { src: "/images/gallery/g10-suit.jpg", span: "", alt: "Chief Gadzama portrait in suit" },
  { src: "/images/gallery/g11-san-studio.jpg", span: "", alt: "Chief Gadzama in full Senior Advocate ceremonial robes" },
  { src: "/images/gallery/g3-bookshelf.jpg", span: "", alt: "Chief Gadzama in chambers" },
  { src: "/images/gallery/g12-chancellor.jpg", span: "lg:col-span-2", alt: "Chief Gadzama as Chancellor, Newgate University, Minna" },
  { src: "/images/gallery/g5.jpg", span: "", alt: "Chief Gadzama portrait" },
  { src: "/images/gallery/g13-academic.jpg", span: "lg:col-span-2", alt: "Chief Gadzama in academic robes" },
  { src: "/images/gallery/g4-casual.jpg", span: "", alt: "Chief Gadzama" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="In Pictures"
        title="Gallery"
        subtitle="Moments from a distinguished career in law, arbitration and public service."
      />

      <section className="bg-bg py-20 lg:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] gap-4">
            {photos.map((p) => (
              <RevealOnScroll key={p.src} className={p.span}>
                <div className="relative w-full h-full overflow-hidden group">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-accent/0 group-hover:ring-accent/40 transition-all duration-500" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
