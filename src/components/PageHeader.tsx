interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ eyebrow, title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="section-container">
        <p className="eyebrow eyebrow-line mb-4 animate-fadeIn">{eyebrow}</p>
        <h1 className="text-4xl md:text-[56px] font-display font-bold text-nav-text leading-tight animate-fadeIn [animation-delay:120ms]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl animate-fadeIn [animation-delay:240ms]">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
