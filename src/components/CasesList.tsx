"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { cases, caseCategories } from "@/content/cases";

export default function CasesList() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? cases : cases.filter((c) => c.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {caseCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] border transition-all duration-300 ${
              active === cat
                ? "bg-accent text-navy border-accent"
                : "bg-transparent text-text-muted border-hairline hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cases grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((c) => (
          <RevealOnScroll key={c.title}>
            <article className="card card-accent-top h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-[0.14em] text-accent-deep uppercase">
                  {c.year} · {c.category}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted border border-hairline px-3 py-1">
                  {c.outcome}
                </span>
              </div>
              <h3 className="text-2xl text-text mb-1">{c.title}</h3>
              <p className="text-accent-deep italic font-display mb-4">
                {c.court}
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                {c.summary}
              </p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </>
  );
}
