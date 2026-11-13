import React from "react";

interface SectionHeaderProps {
  number: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  eyebrow,
  title,
  highlight,
  description,
  className = "",
}) => {
  return (
    <div className={`space-y-3 mb-12 sm:mb-16 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-bold text-accent tracking-widest px-2 py-0.5 rounded bg-accent/10 border border-accent/25">
          SYS.{number}
        </span>
        <span className="w-8 h-[1px] bg-canvas-border" />
        <span className="font-mono text-xs text-sand-muted tracking-futuristic uppercase font-medium">
          // {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-sand font-sans">
        {title} {highlight && <span className="text-accent drop-shadow-[0_0_18px_rgba(0,229,255,0.4)]">{highlight}</span>}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-sand-muted max-w-2xl leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
