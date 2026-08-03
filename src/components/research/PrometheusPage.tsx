import { Link } from "@tanstack/react-router";
import { Reveal } from "../site/Reveal";
import { ArrowLeft, ExternalLink } from "lucide-react";

/**
 * Prometheus Breakthrough Page — Agentic Research Assistant
 * DeepMind-quality technical documentation
 */

export function PrometheusPage() {
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
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[oklch(0.72_0.18_45)]" />
              <span className="label-mono text-[oklch(0.72_0.18_45)]">Breakthrough System</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display mt-4 text-[clamp(3.5rem,8vw,7rem)] font-light leading-[0.92] tracking-[-0.04em]">
              Prometheus
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-3xl text-2xl font-light leading-snug text-muted-foreground">
              A long-horizon reasoning engine that reads scientific literature, extracts causal
              mechanisms, and generates research insights across disciplines.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Built for researchers who need to navigate vast knowledge graphs, identify research
              gaps, and synthesize insights from millions of papers. Prometheus doesn't just search
              — it reads, understands causal relationships, and proposes novel research directions.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-6">
              <div>
                <p className="font-display text-4xl font-light text-[oklch(0.72_0.18_45)]">2.4M+</p>
                <p className="label-mono mt-1">Papers Analyzed</p>
              </div>
              <div>
                <p className="font-display text-4xl font-light text-[oklch(0.72_0.18_45)]">91%</p>
                <p className="label-mono mt-1">Insight Precision</p>
              </div>
              <div>
                <p className="font-display text-4xl font-light text-[oklch(0.72_0.18_45)]">85%</p>
                <p className="label-mono mt-1">Time Saved vs Manual</p>
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
                src="/paintings/breakthrough-prometheus.jpg"
                alt="Prometheus agentic research system visualization"
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
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.18_45)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    Cross-Disciplinary Synthesis
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Extracts common patterns, methodologies, and causal mechanisms across disparate
                  fields. Identifies when techniques from one domain (e.g., statistical physics)
                  could address unsolved problems in another (e.g., protein folding).
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-border/60 bg-surface/20 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.18_45)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    Causal Mechanism Extraction
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Parses experimental evidence, control conditions, and causal language in papers to
                  construct directed causal graphs. Distinguishes correlation from causation and
                  identifies confounding variables explicitly discussed or implicitly present.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-2xl border border-border/60 bg-surface/20 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.18_45)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    Research Gap Identification
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Maps the frontier of knowledge in a given field by analyzing what has been studied,
                  what remains open, and where conflicting results exist. Generates concrete research
                  proposals with testable hypotheses and suggested methodologies.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-border/60 bg-surface/20 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.18_45)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    Citation Network Analysis
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Traverses citation graphs to identify foundational works, emerging trends, and
                  underexplored connections. Ranks papers not by citation count but by relevance to
                  specific research questions, accounting for recency, reproducibility, and
                  methodological rigor.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Research Workflows */}
      <section className="border-b border-border py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-ornament w-12" />
              <h2 className="font-display text-2xl font-light tracking-tight">Research Workflows</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {[
              {
                title: "Literature Review Automation",
                desc: "Given a research question, Prometheus retrieves relevant papers, extracts key findings, identifies methodological patterns, and generates structured summaries organized by theme rather than chronology.",
              },
              {
                title: "Hypothesis Generation",
                desc: "Combines insights from multiple papers to propose novel hypotheses. Reasons about what would be true if certain mechanisms hold, what experiments would distinguish competing theories, and what gaps exist in current understanding.",
              },
              {
                title: "Methodology Transfer",
                desc: "Identifies when a technique proven in one field could be adapted to another. Suggests concrete adaptations accounting for domain-specific constraints, data availability, and validation requirements.",
              },
            ].map((workflow, i) => (
              <Reveal key={workflow.title} delay={i * 80}>
                <div>
                  <h4 className="font-display text-lg font-light tracking-tight">
                    {workflow.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {workflow.desc}
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
                    Reasoning Core
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Large language model fine-tuned on 2.4M scientific papers with a focus on causal
                    reasoning, experimental design, and cross-disciplinary transfer. Maintains
                    coherent research context across 100K+ token documents.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-base font-light tracking-tight">
                    Knowledge Graph
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Dynamic graph database connecting papers, authors, institutions, methodologies,
                    and concepts. Edges represent citation relationships, methodological similarity,
                    and causal mechanisms. Continuously updated as new papers are indexed.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-base font-light tracking-tight">
                    Retrieval System
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Hybrid search combining dense embeddings, sparse keyword matching, and citation
                    graph traversal. Learns user-specific relevance models from feedback to improve
                    ranking over time. Supports filtering by methodology, domain, publication venue,
                    and temporal constraints.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-border/40 bg-background/40 p-6">
                  <p className="label-mono text-[9px]">Paper Corpus</p>
                  <p className="font-display mt-2 text-3xl font-light text-[oklch(0.72_0.18_45)]">
                    2.4M+
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Scientific Publications</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-background/40 p-6">
                  <p className="label-mono text-[9px]">Context Window</p>
                  <p className="font-display mt-2 text-3xl font-light text-[oklch(0.72_0.18_45)]">
                    100K+
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Token Capacity</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-background/40 p-6">
                  <p className="label-mono text-[9px]">Update Frequency</p>
                  <p className="font-display mt-2 text-3xl font-light text-[oklch(0.72_0.18_45)]">
                    Daily
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">New Papers Indexed</p>
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

          <div className="mt-12">
            <Reveal delay={80}>
              <p className="text-muted-foreground">
                Publications specific to Prometheus architecture and capabilities coming soon.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
