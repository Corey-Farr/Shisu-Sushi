import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  padded?: boolean;
  borderedTop?: boolean;
  borderedBottom?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  padded = true,
  borderedTop = false,
  borderedBottom = false
}: SectionProps) {
  const containerClasses = [
    "mx-auto max-w-content",
    padded ? "px-6 py-16" : "",
    borderedTop ? "border-t border-white/5" : "",
    borderedBottom ? "border-b border-white/5" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={containerClasses}>
      {(eyebrow || title || description) && (
        <div className="mb-8 space-y-3">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.35em] text-shisu-gold">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-xl font-medium text-shisu-ivory sm:text-2xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="max-w-xl text-sm text-white/65">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}


