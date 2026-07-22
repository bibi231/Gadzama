"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

type Photo = {
  src: string;
  span: string;
  alt: string;
  caption: string;
};

const photos: Photo[] = [
  {
    src: "/images/gallery/g1-blue-suit.jpg",
    span: "lg:col-span-2 lg:row-span-2",
    alt: "Chief Joe-Kyari Gadzama, SAN",
    caption:
      "Chief Joe-Kyari Gadzama, OFR, SAN — Senior Advocate of Nigeria and Chartered Arbitrator.",
  },
  {
    src: "/images/gallery/g6-san-seated.jpg",
    span: "",
    alt: "Chief Gadzama in Senior Advocate silk robes and wig",
    caption: "Robed in the silk of a Senior Advocate of Nigeria.",
  },
  {
    src: "/images/gallery/g8-profile.jpg",
    span: "",
    alt: "Chief Gadzama in barrister's robe, profile portrait",
    caption: "A profile portrait in barrister's robes.",
  },
  {
    src: "/images/gallery/g9-desk.jpg",
    span: "lg:col-span-2",
    alt: "Chief Gadzama in chambers with law reports",
    caption: "At work in chambers, among the law reports.",
  },
  {
    src: "/images/gallery/g2-robe.jpg",
    span: "",
    alt: "Chief Gadzama in barrister's robe and wig",
    caption: "Robed and bewigged for court.",
  },
  {
    src: "/images/gallery/g7-san-robes.jpg",
    span: "",
    alt: "Chief Gadzama in Senior Advocate robes",
    caption: "In the ceremonial robes of a Senior Advocate.",
  },
  {
    src: "/images/gallery/g10-suit.jpg",
    span: "",
    alt: "Chief Gadzama portrait in suit",
    caption: "A study in counsel.",
  },
  {
    src: "/images/gallery/g11-san-studio.jpg",
    span: "",
    alt: "Chief Gadzama in full Senior Advocate ceremonial robes",
    caption: "Full ceremonial dress of a Senior Advocate of Nigeria.",
  },
  {
    src: "/images/gallery/g3-bookshelf.jpg",
    span: "",
    alt: "Chief Gadzama in chambers",
    caption: "In his chambers.",
  },
  {
    src: "/images/gallery/g12-chancellor.jpg",
    span: "lg:col-span-2",
    alt: "Chief Gadzama as Chancellor, Newgate University, Minna",
    caption: "As Chancellor of Newgate University, Minna.",
  },
  {
    src: "/images/gallery/g5.jpg",
    span: "",
    alt: "Chief Gadzama portrait",
    caption: "Portrait of Chief Gadzama, OFR, SAN.",
  },
  {
    src: "/images/gallery/g13-academic.jpg",
    span: "lg:col-span-2",
    alt: "Chief Gadzama in academic robes",
    caption: "In academic robes among fellow scholars.",
  },
  {
    src: "/images/gallery/g4-casual.jpg",
    span: "",
    alt: "Chief Gadzama",
    caption: "A candid moment.",
  },
];

export default function GalleryClient() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const show = useCallback(
    (dir: number) =>
      setOpen((i) =>
        i === null ? i : (i + dir + photos.length) % photos.length
      ),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(1);
      else if (e.key === "ArrowLeft") show(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, show]);

  const current = open === null ? null : photos[open];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] gap-4">
        {photos.map((p, i) => (
          <RevealOnScroll key={p.src} className={p.span}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Enlarge photo: ${p.alt}`}
              className="relative w-full h-full overflow-hidden group block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/25 transition-colors duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-accent/0 group-hover:ring-accent/40 transition-all duration-500" />
              {/* expand hint */}
              <span className="absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-navy/70 text-accent opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </span>
            </button>
          </RevealOnScroll>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-navy-deep/90 backdrop-blur-sm animate-fadeIn"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
        >
          {/* close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 flex items-center justify-center rounded-full border border-white/25 text-white/80 hover:text-accent hover:border-accent transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); show(-1); }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-white/25 text-white/80 hover:text-accent hover:border-accent transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); show(1); }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-white/25 text-white/80 hover:text-accent hover:border-accent transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* card */}
          <figure
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[76vh] w-auto max-w-full object-contain rounded-sm shadow-2xl ring-1 ring-white/10"
            />
            <figcaption className="mt-5 text-center">
              <p className="text-white text-sm sm:text-base font-display">
                {current.caption}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {open! + 1} / {photos.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
