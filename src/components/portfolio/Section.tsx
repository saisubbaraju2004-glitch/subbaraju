import { type ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  label?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-border/60 py-20 sm:py-28 ${className}`}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        {(label || title) && (
          <header className="mb-12 max-w-2xl">
            {label && (
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
                {label}
              </p>
            )}
            {title && (
              <h2 id={`${id}-heading`} className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
