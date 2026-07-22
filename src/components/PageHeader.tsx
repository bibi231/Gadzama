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
        <p className="eyebrow eyebrow-line mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-[56px] font-display font-bold text-nav-text leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/60 text-base md:text-lg max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
