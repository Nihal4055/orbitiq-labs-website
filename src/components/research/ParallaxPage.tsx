import { Link } from "@tanstack/react-router";
import { Reveal } from "../site/Reveal";
import { ArrowLeft, ExternalLink } from "lucide-react";

/**
 * Parallax Breakthrough Page — Quantitative Research System
 * DeepMind-quality technical documentation
 */

export function ParallaxPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border pb-20 pt-32 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Link
              to="/research"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-violet-400 transition-all hover:gap-3"
            >
              <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
              Back to Research
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[oklch(0.70_0.16_200)]" />
              <span className="label-mono text-[oklch(0.70_0.16_200)]">Breakthrough System</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display mt-4 text-[clamp(3.5rem,8vw,7rem)] font-light leading-[0.92] tracking-[-0.04em]">
              Parallax
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-3xl text-2xl font-light leading-snug text-muted-foreground">
              A formal reasoning system for quantitative research, combining causal inference,
              stochastic modeling, and portfolio theory under uncertainty.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Designed for quantitative analysts who need rigorous, auditable decision frameworks.
              Parallax doesn't chase correlations — it constructs causal models, reasons about
              regime shifts, and optimizes portfolios for robustness rather than historical fit.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-6">
              <div>
                <p className="font-display text-4xl font-light text-[oklch(0.70_0.16_200)]">2.14</p>
                <p className="label-mono mt-1">Sharpe Ratio (backtest)</p>
              </div>
              <div>
                <p className="font-display text-4xl font-light text-[oklch(0.70_0.16_200)]">
                  &lt; 12%
                </p>
                <p className="label-mono mt-1">Max Drawdown</p>
              </div>
              <div>
                <p className="font-display text-4xl font-light text-[oklch(0.70_0.16_200)]">
                  &lt; 50ms
                </p>
                <p className="label-mono mt-1">Signal Latency</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cover Image */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-32">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border/60">
              <img
                src="/paintings/breakthrough-parallax.jpg"
                alt="Parallax quantitative research system visualization"
                className="aspect-[21/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="border-b border-border py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-ornament w-12" />
              <h2 className="font-display text-2xl font-light tracking-tight">Core Capabilities</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-border/60 bg-surface/20 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.70_0.16_200)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    Causal Inference
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Constructs directed acyclic graphs (DAGs) from market and economic data using
                  constraint-based and score-based methods. Distinguishes causal relationships from
                  spurious correlations, identifies confounders, and estimates intervention effects
                  under distributional shifts.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-border/60 bg-surface/20 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.70_0.16_200)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    Multi-Horizon Optimization
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Optimizes portfolios across multiple time horizons simultaneously: intraday
                  execution, tactical rebalancing, and strategic allocation. Accounts for
                  transaction costs, market impact, tax considerations, and rebalancing frequency
                  constraints.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-2xl border border-border/60 bg-surface/20 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.70_0.16_200)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    Risk Decomposition
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Decomposes portfolio risk into systematic factors, idiosyncratic components, and
                  tail events. Attributes performance to specific bets and market exposures. Monitors
                  unintended factor tilts and provides actionable rebalancing recommendations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-border/60 bg-surface/20 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.70_0.16_200)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    Scenario Generation
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Generates forward-looking scenarios via generative models trained on historical
                  market regimes. Stress-tests portfolios under tail events, regime transitions, and
                  policy interventions. Estimates value-at-risk and conditional value-at-risk under
                  non-Gaussian distributions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Research Methodologies */}
      <section className="border-b border-border py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-ornament w-12" />
              <h2 className="font-display text-2xl font-light tracking-tight">
                Research Methodologies
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {[
              {
                title: "Factor Discovery",
                desc: "Automatically identifies latent factors driving asset returns using sparse PCA, independent component analysis, and causal discovery algorithms. Tests factor persistence across regimes and validates out-of-sample predictive power.",
              },
              {
                title: "Regime Detection",
                desc: "Classifies market states (trending, mean-reverting, volatile, calm) using hidden Markov models and change-point detection. Estimates transition probabilities and adjusts strategy parameters dynamically as regimes shift.",
              },
              {
                title: "Alpha Signal Generation",
                desc: "Constructs predictive signals from alternative data sources: earnings call transcripts, supply chain networks, satellite imagery, credit card transactions. Validates signals via causal inference to avoid overfitting historical patterns.",
              },
            ].map((method, i) => (
              <Reveal key={method.title} delay={i * 80}>
                <div>
                  <h4 className="font-display text-lg font-light tracking-tight">{method.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {method.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="border-b border-border py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-ornament w-12" />
              <h2 className="font-display text-2xl font-light tracking-tight">
                System Architecture
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_400px]">
            <Reveal delay={80}>
              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-base font-light tracking-tight">
                    Causal Engine
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Implements constraint-based (PC algorithm), score-based (GES), and hybrid causal
                    discovery methods. Handles time-series data with temporal dependencies, latent
                    confounders, and selection bias. Provides uncertainty quantification via
                    bootstrapping and Bayesian model averaging.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-base font-light tracking-tight">
                    Optimization Core
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Convex optimization for mean-variance, risk parity, and Black-Litterman models.
                    Non-convex optimization via sequential quadratic programming for constraints on
                    turnover, factor exposures, and tail risk. Real-time rebalancing with market
                    impact models.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-base font-light tracking-tight">
                    Data Infrastructure
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Tick-level market data from 50+ exchanges, fundamental data from SEC filings,
                    alternative data from satellite imagery and web scraping. Real-time data
                    pipelines with sub-50ms latency. Historical backtesting infrastructure covering
                    20+ years across global markets.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-border/40 bg-background/40 p-6">
                  <p className="label-mono text-[9px]">Asset Coverage</p>
                  <p className="font-display mt-2 text-3xl font-light text-[oklch(0.70_0.16_200)]">
                    15K+
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Global Securities</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-background/40 p-6">
                  <p className="label-mono text-[9px]">Backtest History</p>
                  <p className="font-display mt-2 text-3xl font-light text-[oklch(0.70_0.16_200)]">
                    20+
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Years of Data</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-background/40 p-6">
                  <p className="label-mono text-[9px]">Execution Latency</p>
                  <p className="font-display mt-2 text-3xl font-light text-[oklch(0.70_0.16_200)]">
                    &lt; 50ms
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Signal to Trade</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benchmarks Placeholder */}
      <section className="border-b border-border py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-ornament w-12" />
              <h2 className="font-display text-2xl font-light tracking-tight">
                Performance Benchmarks
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 rounded-3xl border border-border/60 bg-surface/20 p-16 text-center">
              <p className="label-mono text-violet-400">Coming Soon</p>
              <p className="mt-4 text-lg text-muted-foreground">
                Detailed benchmark results, comparison tables, and performance metrics will be
                published here.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Publications */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-ornament w-12" />
              <h2 className="font-display text-2xl font-light tracking-tight">
                Related Publications
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 space-y-8">
            <Reveal delay={80}>
              <a
                href="https://www.researchsquare.com/article/rs-7917214/v1"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-3 rounded-xl border border-border/60 bg-surface/20 p-6 transition-all hover:-translate-y-1 hover:border-border hover:bg-surface/30 sm:flex-row sm:gap-6"
              >
                <div className="flex-1">
                  <h4 className="font-display text-base font-light leading-snug tracking-tight transition-colors group-hover:text-accent">
                    A Geometric Analysis of Quantum-Inspired Local Tensor Regression
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    OrbitIQ Labs Research · Research Square · 2025
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-violet-400" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
