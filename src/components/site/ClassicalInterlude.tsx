import { useState, type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { useParallax } from "./useParallax";

/**
 * Full-bleed cinematic break: a classical Victorian-Greek painting with a
 * parallax drift and an overlaid aphorism. Breaks up text-heavy stretches.
 *
 * Image served from /public/paintings/<image>. Falls back to a toned
 * gradient + ornament if the file is absent.
 */
export function ClassicalInterlude({
  image,
  imageAlt,
  aphorism,
  attribution,
  accent = "var(--accent)",
}: {
  image: string;
  imageAlt: string;
  aphorism: ReactNode;
  attribution?: string;
  accent?: string;
}) {
  const layerRef = useParallax<HTMLDivElement>(0.18);
  const [broken, setBroken] = useState(false);

  return (
    <section className="relative overflow-hidden border-y border-border/60" style={{ height: "clamp(420px, 62vh, 640px)" }}>
      {/* Parallax image layer (oversized so drift never reveals edges) */}
      <div ref={layerRef} className="parallax-layer absolute inset-x-0 top-[-12%] h-[124%]">
        {!broken ? (
          <img
            src={`/paintings/${image}`}
            alt={imageAlt}
            className="h-full w-full object-cover"
            onError={() => setBroken(true)}
          />
        ) : (
          <div
            className="h-full w-full"
            style={{ background: "linear-gradient(160deg, oklch(0.18 0.02 265), oklch(0.1 0.008 265))" }}
          />
        )}
      </div>

      {/* Darkening scrims for legibility */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.09 0.01 265 / 0.55), oklch(0.09 0.01 265 / 0.35) 50%, oklch(0.09 0.01 265 / 0.75))" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, oklch(0.09 0.01 265 / 0.6))" }} />
      <div className="film-grain absolute inset-0" />

      {/* Aphorism */}
      <div className="relative flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <Reveal>
            <span className="mx-auto mb-7 flex w-fit items-center gap-3">
              <span className="rule-ornament w-10" />
              <span className="h-1.5 w-1.5 rotate-45" style={{ background: accent }} />
              <span className="rule-ornament w-10" />
            </span>
          </Reveal>
          <Reveal delay={120} variant="scale">
            <p className="font-display text-[clamp(1.8rem,4.2vw,3.4rem)] font-light italic leading-[1.12] tracking-[-0.02em] text-foreground">
              {aphorism}
            </p>
          </Reveal>
          {attribution && (
            <Reveal delay={240}>
              <p className="label-mono mt-8">{attribution}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
