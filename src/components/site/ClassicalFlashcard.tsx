import { useState, type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/**
 * QED-style editorial flashcard: a classical oil-painting panel on one side,
 * serif editorial copy on the other, inside a dark rounded card.
 *
 * The painting is served from /public/paintings/<image>. If the file is
 * absent, a classical engraved placeholder renders instead.
 */
export function ClassicalFlashcard({
  image,
  imageAlt,
  eyebrow,
  title,
  paragraphs,
  cta,
  accent = "var(--accent)",
  flip = false,
}: {
  image: string; // filename under /public/paintings/
  imageAlt: string;
  eyebrow: string;
  title: ReactNode;
  paragraphs: string[];
  cta?: { label: string; href: string };
  accent?: string;
  flip?: boolean;
}) {
  const [broken, setBroken] = useState(false);

  return (
    <Reveal>
      <div
        className="grid overflow-hidden rounded-3xl border border-border/60 bg-surface/40 lg:grid-cols-[0.85fr_1.15fr]"
        style={{ boxShadow: "0 40px 120px -40px oklch(0 0 0 / 0.7)" }}
      >
        {/* Painting */}
        <div className={cn("relative min-h-[340px] lg:min-h-[560px]", flip && "lg:order-2")}>
          {!broken ? (
            <img
              src={`/paintings/${image}`}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => setBroken(true)}
            />
          ) : (
            <ClassicalPlaceholder accent={accent} label={image} />
          )}
          {/* tonal edge blend into the card */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: flip
                ? "linear-gradient(to left, color-mix(in oklab, var(--surface) 55%, transparent), transparent 42%)"
                : "linear-gradient(to right, color-mix(in oklab, var(--surface) 55%, transparent), transparent 42%)",
            }}
          />
          {/* corner tick ornament */}
          <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t" style={{ borderColor: `color-mix(in oklab, ${accent} 55%, transparent)` }} />
          <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r" style={{ borderColor: `color-mix(in oklab, ${accent} 55%, transparent)` }} />
        </div>

        {/* Copy */}
        <div className={cn("flex flex-col justify-center p-8 lg:p-14", flip && "lg:order-1")}>
          <p className="font-display text-base italic tracking-wide" style={{ color: accent }}>
            {eyebrow}
          </p>
          <h3 className="font-display mt-4 text-[clamp(1.8rem,3.4vw,3rem)] font-light leading-[1.04] tracking-[-0.03em]">
            {title}
          </h3>
          <div className="mt-7 space-y-5 leading-relaxed text-muted-foreground">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-foreground/90" : ""}>
                {p}
              </p>
            ))}
          </div>
          {cta && (
            <a
              href={cta.href}
              className="group mt-9 inline-flex w-fit items-center gap-2 rounded-full border px-6 py-3 font-mono text-[11px] uppercase tracking-widest transition-all hover:gap-3"
              style={{ borderColor: `color-mix(in oklab, ${accent} 45%, transparent)`, color: accent }}
            >
              {cta.label}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

function ClassicalPlaceholder({ accent, label }: { accent: string; label: string }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, oklch(0.17 0.02 265), oklch(0.11 0.01 265))" }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(1 0 0 / 8%) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <svg viewBox="0 0 120 160" className="h-2/3 w-auto opacity-30" fill="none">
        <rect x="8" y="8" width="104" height="144" stroke={accent} strokeWidth="0.8" />
        <rect x="13" y="13" width="94" height="134" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.4" />
        <circle cx="60" cy="66" r="26" stroke={accent} strokeWidth="0.6" />
        <path d="M60 40 C74 40 82 54 78 70 C90 74 92 96 78 104 L42 104 C28 96 30 74 42 70 C38 54 46 40 60 40Z" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <text x="60" y="140" textAnchor="middle" fontFamily="monospace" fontSize="4.5" fill={accent} opacity="0.6">
          /paintings/{label}
        </text>
      </svg>
    </div>
  );
}
