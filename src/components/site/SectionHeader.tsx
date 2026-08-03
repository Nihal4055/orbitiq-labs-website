import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Victorian-Greek section header: roman numeral eyebrow, ornamented rule,
 * serif display title, optional lede.
 */
export function SectionHeader({
  numeral,
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  numeral?: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : ""}>
      <Reveal>
        <div className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
          {numeral && (
            <span className="font-display text-sm italic text-accent/80 tracking-wide">
              {numeral}
            </span>
          )}
          <span className="rule-ornament w-10" />
          <span className="label-mono">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-display mt-6 text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.02] font-light tracking-[-0.03em]">
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={180}>
          <p
            className={`mt-6 leading-relaxed text-muted-foreground ${center ? "mx-auto max-w-xl" : "max-w-xl"}`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
