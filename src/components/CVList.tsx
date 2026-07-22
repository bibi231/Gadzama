import RevealOnScroll from "@/components/RevealOnScroll";
import type { CVSection } from "@/content/cv";

function LinkedText({
  text,
  url,
  className,
}: {
  text: string;
  url?: string;
  className?: string;
}) {
  if (!url) return <span className={className}>{text}</span>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className ?? ""} group/link inline-flex items-baseline gap-1 hover:text-accent-deep transition-colors`}
    >
      {text}
      <span
        className="text-accent opacity-0 group-hover/link:opacity-100 transition-opacity text-xs"
        aria-hidden
      >
        ↗
      </span>
    </a>
  );
}

export default function CVList({ sections }: { sections: CVSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <RevealOnScroll key={section.heading} className="mb-16">
          <p className="eyebrow mb-4">{section.heading}</p>
          <div className="border-t border-hairline">
            {section.entries.map((entry, i) => (
              <div
                key={i}
                className="glow-row py-4 px-3 border-b border-hairline flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1"
              >
                <div className="flex items-baseline gap-2.5">
                  <span className="glow-mark text-[9px] mt-0.5 shrink-0" aria-hidden>
                    ◆
                  </span>
                  <div>
                    {/* If there is an institution, the title is plain and the
                        institution carries the link; otherwise the title links. */}
                    {entry.institution ? (
                      <p className="glow-title text-text font-semibold text-[15px]">
                        {entry.title}
                      </p>
                    ) : (
                      <p className="glow-title text-text font-semibold text-[15px]">
                        <LinkedText text={entry.title} url={entry.url} />
                      </p>
                    )}
                    {entry.institution && (
                      <p className="text-text-muted text-sm">
                        <LinkedText text={entry.institution} url={entry.url} />
                      </p>
                    )}
                  </div>
                </div>
                {entry.year && (
                  <span className="year-badge text-sm shrink-0 sm:text-right pl-6 sm:pl-0">
                    {entry.year}
                  </span>
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      ))}
    </>
  );
}
