import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function FeaturePanel({
  index,
  title,
  body,
  visual,
  flip,
}: {
  index: number;
  title: string;
  body: string;
  visual: ReactNode;
  flip?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 border-t border-border/50 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
      <Reveal className={cn(flip && "lg:order-2")}>
        <p className="label-mono" style={{ color: "var(--accent)", opacity: 0.7 }}>
          {String(index).padStart(2, "0")}
        </p>
        <h3 className="font-display mt-5 text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.1] font-light tracking-[-0.02em]">
          {title}
        </h3>
        <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{body}</p>
      </Reveal>
      <Reveal delay={140} className={cn(flip && "lg:order-1")}>
        <div className="relative min-h-[220px] rounded-xl border border-border/50 bg-surface/40 p-6 backdrop-blur-sm">
          {visual}
        </div>
      </Reveal>
    </div>
  );
}

export function ChipCloud({ items, color }: { items: string[]; color: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span
          key={i}
          className="rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] uppercase transition-colors hover:bg-surface"
          style={{ borderColor: `color-mix(in oklab, ${color} 35%, transparent)`, color }}
        >
          {i}
        </span>
      ))}
    </div>
  );
}

export function ProductHero({
  name,
  tagline,
  body,
  status,
  color,
  cta,
  children,
  id,
}: {
  id: string;
  name: string;
  tagline: string;
  body: string;
  status: string;
  color: string;
  cta: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div
      id={id}
      className="scroll-mt-16 border-t border-border/50 pt-28 pb-10"
      style={{ ["--accentColor" as string]: color }}
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: color }}
              />
              <span className="label-mono" style={{ color }}>
                {status}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-[clamp(2.8rem,6.5vw,5.2rem)] leading-[0.91] font-light tracking-[-0.04em]">
              {name}
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 text-lg leading-snug font-light">{tagline}</p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{body}</p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-10 flex flex-wrap items-center gap-4">{cta}</div>
          </Reveal>
        </div>
        <Reveal delay={200}>{children}</Reveal>
      </div>
    </div>
  );
}

export function ClosingCTA({
  line,
  cta,
  color,
}: {
  line: string;
  cta: ReactNode;
  color: string;
}) {
  return (
    <Reveal>
      <div
        className="border-t border-border/50 py-20 text-center"
        style={{ ["--accentColor" as string]: color }}
      >
        <p className="font-display mx-auto max-w-2xl text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-light tracking-[-0.02em]">
          {line}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">{cta}</div>
      </div>
    </Reveal>
  );
}
