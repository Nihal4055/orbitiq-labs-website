import { Link } from "@tanstack/react-router";
import { Reveal } from "../site/Reveal";
import { ArrowLeft, ExternalLink } from "lucide-react";

/**
 * Morbius Breakthrough Page — Autonomous Scientific Discovery
 * DeepMind-quality technical documentation
 */

export function MorbiusPage() {
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
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[oklch(0.75_0.15_290)]" />
              <span className="label-mono text-[oklch(0.75_0.15_290)]">Breakthrough System</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display mt-4 text-[clamp(3.5rem,8vw,7rem)] font-light leading-[0.92] tracking-[-0.04em]">
              Morbius
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-3xl text-2xl font-light leading-snug text-muted-foreground">
              The world's first autonomous scientific discovery system. An AI co-scientist that formulates novel hypotheses, designs experiments, and produces publication-ready outputs.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Unlike traditional research assistants, Morbius doesn't just answer questions—it generates testable hypotheses, designs experimental protocols, analyzes results, and creates publication-ready content across any scientific domain. Already proven in cutting-edge fields including Quantum Machine Learning and Tsetlin Machines.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-6">
              <div>
                <p className="font-display text-4xl font-light text-[oklch(0.75_0.15_290)]">326</p>
                <p className="label-mono mt-1">Scientific Workflows</p>
              </div>
              <div>
                <p className="font-display text-4xl font-light text-[oklch(0.75_0.15_290)]">22</p>
                <p className="label-mono mt-1">Disciplines</p>
              </div>
              <div>
                <p className="font-display text-4xl font-light text-[oklch(0.75_0.15_290)]">60+</p>
                <p className="label-mono mt-1">File Formats</p>
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
                src="/paintings/breakthrough-morbius.jpg"
                alt="Morbius autonomous discovery system visualization"
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
              <h2 className="font-display text-2xl font-light tracking-tight">Autonomous Discovery Pipeline</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-border/60 bg-surface/20 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.15_290)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    Autonomous Hypothesis Generation
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Identifies research gaps across 100+ papers simultaneously through advanced knowledge graph reasoning. Generates testable hypotheses grounded in current literature. Connects insights across disciplines—biology ↔ materials science ↔ machine learning. Proposes experimental designs and validation protocols.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-border/60 bg-surface/20 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.15_290)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    Multi-Hop Knowledge Synthesis
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Advanced RAG with LightRAG architecture. Cross-domain reasoning discovers patterns invisible to single-paper analysis. Persistent institutional knowledge graph that compounds over time. Context window supporting 50-500 papers per query.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-2xl border border-border/60 bg-surface/20 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.15_290)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    Specialized Research Agents
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Five autonomous agents: Literature Synthesis, Methodology Design, Data Analysis, Gap Identification, and Hypothesis Ranking. Each agent prioritizes ideas by feasibility, impact, and novelty across the complete research pipeline.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-border/60 bg-surface/20 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.15_290)]" />
                  <h3 className="font-display text-xl font-light tracking-tight">
                    326 Scientific Workflows
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Pre-configured research workflows spanning 22 disciplines: Biology, Chemistry, Materials Science, Physics, Quantum Computing, Machine Learning, Quantitative Finance, Clinical Research, and 14+ additional domains. Years of domain expertise encoded.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Research Studio & Content Pipeline */}
      <section className="border-b border-border py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-ornament w-12" />
              <h2 className="font-display text-2xl font-light tracking-tight">Research Studio: Complete Content Pipeline</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {[
              {
                title: "Summary Generator",
                desc: "Executive summaries optimized for rapid comprehension. Key findings extraction with citation linking. Methodology and results distillation. Configurable depth from abstract-level to technical deep-dive.",
              },
              {
                title: "Slide Deck Generator",
                desc: "Powered by Paper2Slides (industry-benchmark open-source). Automatic extraction of figures, tables, and key equations. Professional academic layouts, conference-ready. Publication-quality PDF export.",
              },
              {
                title: "Poster Generator",
                desc: "Conference poster layouts with figure placement optimization. A0/A1 standard sizes with proper DPI for print. Automatic visual hierarchy and typography. Export to PDF, PNG, or editable formats.",
              },
              {
                title: "Flashcard Generator",
                desc: "Spaced repetition-optimized study cards. Concept definitions, equations, and key results. Interactive web-based review interface. Export to Anki, Quizlet, or standalone formats.",
              },
              {
                title: "Podcast Generator",
                desc: "Natural conversational audio summaries of research papers. Multi-voice dialogue format (host + expert discussion). Configurable episode length and technical depth. MP3 export for mobile learning.",
              },
              {
                title: "60+ Scientific Formats",
                desc: "PDB, CIF, SDF/MOL (molecular), DICOM, NIfTI (medical), AnnData (genomics), HDF5, NetCDF (climate), MATLAB/NPY arrays, and 40+ additional domain-specific formats. Morbius understands structure, not just raw data.",
              },
            ].map((feature, i) => (
              <Reveal key={feature.title} delay={i * 80}>
                <div>
                  <h4 className="font-display text-lg font-light tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
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
                    Reasoning Engine
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Transformer-based architecture augmented with graph neural networks for molecular
                    representations. Trained on 47M chemical reactions, 120M molecules, and 8M
                    scientific papers. Reasons over both symbolic chemical knowledge (SMILES,
                    reaction templates) and continuous molecular embeddings.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-base font-light tracking-tight">
                    Experiment Planner
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Monte Carlo tree search over experimental action space, guided by learned value
                    functions. Balances exploration (testing novel hypotheses) and exploitation
                    (refining promising leads). Incorporates resource constraints, safety
                    considerations, and experimental feasibility.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-base font-light tracking-tight">
                    Knowledge Integration
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Real-time retrieval from chemical databases (PubChem, Reaxys), computational
                    predictions (DFT, MD simulations), and literature corpus. Causal inference module
                    extracts mechanistic relationships from observational data and experimental
                    perturbations.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-border/40 bg-background/40 p-6">
                  <p className="label-mono text-[9px]">Training Data</p>
                  <p className="font-display mt-2 text-3xl font-light text-[oklch(0.75_0.15_290)]">
                    47M
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Chemical Reactions</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-background/40 p-6">
                  <p className="label-mono text-[9px]">Molecule Database</p>
                  <p className="font-display mt-2 text-3xl font-light text-[oklch(0.75_0.15_290)]">
                    120M
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Unique Molecules</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-background/40 p-6">
                  <p className="label-mono text-[9px]">Literature Corpus</p>
                  <p className="font-display mt-2 text-3xl font-light text-[oklch(0.75_0.15_290)]">
                    8M
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Scientific Papers</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Performance Benchmarks */}
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
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Morbius demonstrates state-of-the-art performance across multiple drug discovery benchmarks, 
              consistently outperforming traditional methods and competing AI systems in molecular optimization, 
              property prediction, and discovery success rates.
            </p>
          </Reveal>

          {/* Benchmark Chart 1 */}
          <Reveal delay={120}>
            <div className="mt-16 overflow-hidden rounded-3xl border border-border/60 bg-surface/10">
              <img
                src="/paintings/morbius_benchmark_1.png"
                alt="Morbius benchmark performance comparison chart 1"
                className="w-full"
              />
            </div>
          </Reveal>

          {/* Benchmark Charts 2 & 3 - Side by Side on Desktop */}
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <Reveal delay={160}>
              <div className="overflow-hidden rounded-3xl border border-border/60 bg-surface/10">
                <img
                  src="/paintings/morbius_benchmark_2.png"
                  alt="Morbius benchmark performance comparison chart 2"
                  className="w-full"
                />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="overflow-hidden rounded-3xl border border-border/60 bg-surface/10">
                <img
                  src="/paintings/morbius_benchmark_3.png"
                  alt="Morbius benchmark performance comparison chart 3"
                  className="w-full"
                />
              </div>
            </Reveal>
          </div>

          {/* Key Performance Highlights */}
          <Reveal delay={240}>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[oklch(0.75_0.15_290)]/20 bg-[oklch(0.75_0.15_290)]/5 p-6">
                <p className="label-mono text-[oklch(0.75_0.15_290)]">Success Rate</p>
                <p className="font-display mt-2 text-4xl font-light text-[oklch(0.75_0.15_290)]">
                  43%
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Discovery success rate across multi-objective optimization tasks
                </p>
              </div>

              <div className="rounded-2xl border border-[oklch(0.75_0.15_290)]/20 bg-[oklch(0.75_0.15_290)]/5 p-6">
                <p className="label-mono text-[oklch(0.75_0.15_290)]">Efficiency Gain</p>
                <p className="font-display mt-2 text-4xl font-light text-[oklch(0.75_0.15_290)]">
                  2.8x
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Faster convergence compared to baseline approaches
                </p>
              </div>

              <div className="rounded-2xl border border-[oklch(0.75_0.15_290)]/20 bg-[oklch(0.75_0.15_290)]/5 p-6">
                <p className="label-mono text-[oklch(0.75_0.15_290)]">Novel Molecules</p>
                <p className="font-display mt-2 text-4xl font-light text-[oklch(0.75_0.15_290)]">
                  1,247
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Synthesizable candidates discovered in evaluation period
                </p>
              </div>
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
                href="https://chemrxiv.org/doi/full/10.26434/chemrxiv-2025-rjhxn"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-3 rounded-xl border border-border/60 bg-surface/20 p-6 transition-all hover:-translate-y-1 hover:border-border hover:bg-surface/30 sm:flex-row sm:gap-6"
              >
                <div className="flex-1">
                  <h4 className="font-display text-base font-light leading-snug tracking-tight transition-colors group-hover:text-accent">
                    AMODO-EO: Adaptive Objective Discovery in Multi-Objective Drug Optimization
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    OrbitIQ Labs Research · ChemRxiv · 2025
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
