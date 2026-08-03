import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { AgentTerminal } from "./AgentTerminal";
import { PRODUCTS } from "./products";
import { cn } from "@/lib/utils";

export function ProductShowcase() {
  return (
    <section id="systems" className="scroll-mt-16 border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          numeral="III"
          eyebrow="The Systems"
          title={
            <>
              Three systems. <span className="italic text-accent">One orbit.</span>
            </>
          }
          lede="Autonomous intelligence for the domains where rigor matters most — scientific research, life sciences, and quantitative markets. Watch each one think in real time."
        />

        <div className="mt-20 space-y-24 lg:space-y-32">
          {PRODUCTS.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={p.slug}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Copy */}
                <Reveal className={cn(flip && "lg:order-2")}>
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: p.colorVar, animation: `orbit-pulse ${3 + i}s ease-in-out infinite` }}
                    />
                    <span className="label-mono" style={{ color: p.colorVar }}>
                      Status: {p.status}
                    </span>
                  </div>

                  <p className="mt-6 font-display text-xs italic tracking-wide text-muted-foreground">
                    {p.greek}
                  </p>
                  <h3 className="font-display mt-2 text-[clamp(2.4rem,4.5vw,3.6rem)] leading-[0.95] font-light tracking-[-0.03em]">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-lg font-light leading-snug">{p.tagline}</p>
                  <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{p.summary}</p>

                  <ul className="mt-7 space-y-2.5">
                    {p.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                          style={{ background: p.colorVar }}
                        />
                        {c}
                      </li>
                    ))}
                  </ul>

                  {/* metrics */}
                  <div className="mt-8 flex gap-8">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-2xl font-light" style={{ color: p.colorVar }}>
                          {m.value}
                        </p>
                        <p className="label-mono mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/$slug"
                    params={{ slug: p.slug }}
                    className="group mt-9 inline-flex items-center gap-2 rounded-full border px-6 py-3 font-mono text-[11px] tracking-widest uppercase transition-all hover:gap-3"
                    style={{
                      borderColor: `color-mix(in oklab, ${p.colorVar} 45%, transparent)`,
                      color: p.colorVar,
                    }}
                  >
                    Explore {p.name}
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </Reveal>

                {/* Terminal */}
                <Reveal delay={160} className={cn(flip && "lg:order-1")}>
                  <div
                    className="rounded-2xl p-1"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in oklab, ${p.colorVar} 22%, transparent), transparent 55%)`,
                    }}
                  >
                    <AgentTerminal
                      sessions={p.sessions}
                      color={p.colorVar}
                      label={`${p.slug} · agent session`}
                    />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
