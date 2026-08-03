import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

/**
 * Brief Research showcase on main page — DeepMind style.
 * Elegant card showing research focus areas.
 */

export function ResearchShowcase() {
  return (
    <section className="border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-surface/40 to-surface/20 p-12 lg:p-16">
            {/* Ambient glow */}
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-20">
              {/* Left: Research focus areas */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                  <span className="label-mono text-violet-400">Research at OrbitIQ</span>
                </div>

                <h2 className="font-display mt-6 text-[clamp(2.4rem,5vw,4rem)] font-light leading-[0.95] tracking-[-0.03em]">
                  We work on some of the most{" "}
                  <span className="italic text-violet-400">complex challenges</span> in AI
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Our research spans autonomous scientific discovery, agentic reasoning systems, 
                  and foundation models trained to operate like scientists — not answer engines.
                </p>

                {/* Research focus areas - DeepMind style grid */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div className="group">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      <div>
                        <h4 className="font-display text-base font-light tracking-tight">
                          Autonomous Discovery
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          AI systems that design experiments, interpret results, and generate 
                          novel hypotheses across chemistry, materials, and biology.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <div>
                        <h4 className="font-display text-base font-light tracking-tight">
                          Agentic Reasoning
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          Long-horizon reasoning systems that operate in research loops, 
                          continuously refining hypotheses through iterative observation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <div>
                        <h4 className="font-display text-base font-light tracking-tight">
                          Scientific Foundation Models
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          Multimodal architectures with native understanding of molecular 
                          structures, biological sequences, and scientific literature.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <div>
                        <h4 className="font-display text-base font-light tracking-tight">
                          Quantitative Research Systems
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          Formal reasoning over financial data, causal inference, 
                          and portfolio optimization under uncertainty.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/research"
                  className="group mt-10 inline-flex items-center gap-2 rounded-full border border-violet-400/40 px-7 py-3.5 font-mono text-[11px] uppercase tracking-widest text-violet-400 transition-all hover:gap-3 hover:border-violet-400/60 hover:bg-violet-400/5"
                >
                  Explore Our Research
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Right: Stats card */}
              <div className="flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="rounded-2xl border border-border/40 bg-background/40 p-6 backdrop-blur-sm">
                    <p className="font-display text-4xl font-light text-violet-400">4</p>
                    <p className="label-mono mt-1.5">Breakthrough Systems</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Morbius, Prometheus, Parallax, Aethel
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/40 bg-background/40 p-6 backdrop-blur-sm">
                    <p className="font-display text-4xl font-light text-blue-400">40+</p>
                    <p className="label-mono mt-1.5">Publications</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Peer-reviewed research spanning AI, robotics, and scientific computing
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/40 bg-background/40 p-6 backdrop-blur-sm">
                    <p className="font-display text-4xl font-light text-cyan-400">5</p>
                    <p className="label-mono mt-1.5">Scientific Domains</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Chemistry, materials, biology, earth sciences, mathematics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
