import { Reveal } from "./Reveal";
import { ChipCloud } from "./FeaturePanel";
import type { DiscoveryStage } from "./products";

/**
 * Renders a product's research loop as one sequential process.
 *
 * Deliberately not a feature grid: the stages are numbered, connected by a
 * continuous rail, and closed at the end by a return marker — so a reader
 * understands these are steps a single system takes, not separate tools.
 */
export function DiscoveryLoop({
  stages,
  color,
  header,
  intro,
}: {
  stages: DiscoveryStage[];
  color: string;
  header: string;
  intro?: string;
}) {
  return (
    <section
      aria-labelledby="discovery-loop-heading"
      className="border-t border-border/50 py-20 lg:py-28"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="rule-ornament w-12" style={{ background: color }} />
          <h2
            id="discovery-loop-heading"
            className="font-display text-2xl font-light tracking-tight"
          >
            {header}
          </h2>
        </div>
      </Reveal>

      {intro && (
        <Reveal delay={80}>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
      )}

      {/* stage rail */}
      <ol className="relative mt-16 space-y-px">
        {/* continuous connector — decorative, hidden from AT */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-2 bottom-16 left-[11px] hidden w-px lg:block"
          style={{
            background: `linear-gradient(to bottom, color-mix(in oklab, ${color} 45%, transparent), color-mix(in oklab, ${color} 12%, transparent))`,
          }}
        />

        {stages.map((stage, i) => (
          <Stage key={stage.key} stage={stage} index={i + 1} color={color} />
        ))}
      </ol>

      {/* loop-closes marker */}
      <Reveal>
        <div className="mt-12 flex items-center gap-4 lg:pl-[58px]">
          <span aria-hidden="true" className="font-mono text-sm" style={{ color }}>
            ↺
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Verified output re-enters the graph as evidence, and the loop runs again — each pass
            reasoning over a larger, better-supported body of work than the last.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Stage({ stage, index, color }: { stage: DiscoveryStage; index: number; color: string }) {
  const { verb, title, body, extra, roles, chips, emphasis } = stage;

  return (
    <li className="relative">
      <div className="grid gap-6 py-10 lg:grid-cols-[24px_1fr] lg:gap-10">
        {/* node + number */}
        <div className="flex items-center gap-4 lg:block">
          <span
            aria-hidden="true"
            className="relative z-10 block h-[9px] w-[9px] shrink-0 rounded-full lg:mt-[10px] lg:ml-[7px]"
            style={{
              background: emphasis ? color : "var(--background)",
              border: `1px solid ${color}`,
              boxShadow: emphasis
                ? `0 0 0 4px color-mix(in oklab, ${color} 18%, transparent)`
                : "none",
            }}
          />
          <span className="label-mono lg:hidden">
            {String(index).padStart(2, "0")} · {verb}
          </span>
        </div>

        <div
          className={emphasis ? "rounded-2xl border p-7 backdrop-blur-sm lg:p-10" : "lg:pt-1"}
          style={
            emphasis
              ? {
                  borderColor: `color-mix(in oklab, ${color} 22%, transparent)`,
                  background: `color-mix(in oklab, ${color} 4%, transparent)`,
                }
              : undefined
          }
        >
          <div className="hidden items-baseline gap-4 lg:flex">
            <span className="label-mono" style={{ color, opacity: 0.75 }}>
              {String(index).padStart(2, "0")}
            </span>
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase" style={{ color }}>
              {verb}
            </span>
          </div>

          <h3 className="font-display mt-4 max-w-2xl text-[clamp(1.4rem,2.4vw,2.05rem)] leading-[1.12] font-light tracking-[-0.02em]">
            {title}
          </h3>

          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{body}</p>

          {extra && <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{extra}</p>}

          {roles && (
            <dl className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {roles.map((role) => (
                <div key={role.name} className="border-t border-border/50 pt-4">
                  <dt
                    className="font-mono text-[10px] tracking-[0.18em] uppercase"
                    style={{ color }}
                  >
                    {role.name}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.job}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-8">
            <ChipCloud color={color} items={chips} />
          </div>
        </div>
      </div>
    </li>
  );
}
