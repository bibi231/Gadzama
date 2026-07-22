"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  publications,
  booksEmpty,
  papersEmpty,
  acquisition,
  llpNewsletter,
} from "@/content/publications";

export default function PublicationsPage() {
  const [activeTab, setActiveTab] = useState<"book" | "paper">("book");

  const filtered = publications.filter((p) => p.type === activeTab);

  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Books & Papers"
      >
        {/* Tab toggle */}
        <div className="mt-6 flex">
          <button
            onClick={() => setActiveTab("book")}
            className={`px-6 py-2 text-sm font-semibold tracking-wider uppercase transition-colors ${
              activeTab === "book"
                ? "bg-accent text-btn-filled-text"
                : "border border-hairline text-nav-text hover:bg-accent/10"
            }`}
            id="tab-books"
          >
            Books
          </button>
          <button
            onClick={() => setActiveTab("paper")}
            className={`px-6 py-2 text-sm font-semibold tracking-wider uppercase transition-colors ${
              activeTab === "paper"
                ? "bg-accent text-btn-filled-text"
                : "border border-hairline text-nav-text hover:bg-accent/10"
            }`}
            id="tab-papers"
          >
            Papers
          </button>
        </div>
      </PageHeader>

      {/* Publications Grid */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="section-container">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((pub, i) => (
                <RevealOnScroll key={i}>
                  <div className="card card-accent-top h-full flex flex-col">
                    {/* Book cover placeholder */}
                    <div className="flex gap-4 mb-4">
                      <div className="w-16 h-20 bg-surface2 rounded shrink-0 flex items-center justify-center">
                        <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-text font-semibold text-base leading-snug">
                          {pub.title}
                        </h3>
                        <p className="text-text-muted text-sm mt-1">
                          {pub.publisher} · {pub.year}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto">
                      {pub.format && (
                        <p className="text-text-muted text-xs mb-2">
                          {pub.format}
                          {pub.isbn && ` · ${pub.isbn}`}
                        </p>
                      )}
                      {pub.downloadUrl && (
                        <a
                          href={pub.downloadUrl}
                          download
                          className="text-accent font-semibold text-sm tracking-wider uppercase hover:underline"
                        >
                          Download PDF ↓
                        </a>
                      )}
                      {pub.externalUrl && (
                        <a
                          href={pub.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent font-semibold text-sm tracking-wider uppercase hover:underline"
                        >
                          View →
                        </a>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          ) : (
            /* Empty state */
            <RevealOnScroll>
              <div className="bg-surface border border-hairline rounded-lg p-8 text-center">
                <p className="text-text-muted italic text-sm">
                  {activeTab === "book" ? booksEmpty : papersEmpty}
                </p>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </section>

      {/* ── Where to buy / collect + LLP newsletter ─────────────────────────── */}
      <section className="bg-surface border-t border-hairline py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Acquire the books */}
            <RevealOnScroll>
              <div className="card card-accent-top h-full flex flex-col">
                <p className="eyebrow eyebrow-line mb-5">Acquire the works</p>
                <h2 className="text-2xl sm:text-3xl text-text mb-4">
                  {acquisition.heading}
                </h2>
                <p className="text-text-muted leading-relaxed mb-8">
                  {acquisition.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-4">
                  {acquisition.links.map((l) =>
                    l.external ? (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-filled"
                      >
                        {l.label} ↗
                      </a>
                    ) : (
                      <Link key={l.label} href={l.url} className="btn-outline !text-text !border-hairline hover:!border-accent hover:!text-accent-deep">
                        {l.label} →
                      </Link>
                    )
                  )}
                </div>
              </div>
            </RevealOnScroll>

            {/* LLP newsletter */}
            <RevealOnScroll>
              <div className="card card-accent-top h-full flex flex-col bg-hero-bg grain relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0" aria-hidden>
                  <div className="bokeh top-[-30px] right-[8%] w-56 h-56 bg-accent/[0.10]" />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <p className="eyebrow eyebrow-line mb-5">Stay informed</p>
                  <h2 className="text-2xl sm:text-3xl text-nav-text mb-4">
                    {llpNewsletter.heading}
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-8">
                    {llpNewsletter.body}
                  </p>
                  <a
                    href={llpNewsletter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-filled mt-auto self-start"
                  >
                    {llpNewsletter.cta} ↗
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
