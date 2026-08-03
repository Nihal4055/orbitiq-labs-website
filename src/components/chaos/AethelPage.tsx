import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FeaturePanel, ChipCloud, ClosingCTA } from "@/components/site/FeaturePanel";
import { Reveal } from "@/components/site/Reveal";

/**
 * Aethel — A foundation model built to reason like a scientist.
 * Matches the exact design structure of Morbius/Prometheus/Parallax product pages.
 */

const COLOR = "oklch(0.74 0.150 300)"; // violet

interface AethelFeature {
  title: string;
  body: string;
  chips: string[];
  image: string;
}

const FEATURES: AethelFeature[] = [
  {
    title: "Mixture-of-Experts Architecture",
    body: "Large total parameter capacity — ~1 trillion parameter class — with only ~22B active per query. Depth of knowledge without inference latency cost. Specialized expert modules route dynamically based on query domain.",
    chips: ["~1T total", "~22B active", "Dynamic routing", "Low latency", "Specialized experts"],
    image: "/paintings/aethel-moe-architecture.jpg",
  },
  {
    title: "Native Multimodal Scientific Input",
    body: "Not a text model with plugins bolted on. One architecture trained across modalities from the start — molecular structures, crystallographic data, biological sequences, scientific imaging, time-series signals.",
    chips: ["Molecular", "Crystal data", "Sequences", "Imaging", "Time-series", "Text"],
    image: "/paintings/aethel-multimodal.jpg",
  },
  {
    title: "Cross-Disciplinary Reasoning Core",
    body: "Chemistry, materials science, biology, earth sciences, and mathematics addressed through one shared reasoning foundation. A single query can pull organic chemistry + materials prediction + biological sequence understanding together.",
    chips: ["Chemistry", "Materials", "Biology", "Earth science", "Mathematics"],
    image: "/paintings/aethel-cross-disciplinary.jpg",
  },
  {
    title: "Iterative Agentic Operation",
    body: "Designed to work inside a loop — propose hypothesis, execute or observe, score outcome, keep or revert — not just answer single-shot questions. This is what separates a model that answers questions about science from a system that does science.",
    chips: ["Propose", "Observe", "Reason", "Revise", "Loop continues"],
    image: "/paintings/aethel-reasoning-loop.jpg",
  },
  {
    title: "Research-Grade Math and Logic",
    body: "Complex multi-step problems at the level of graduate qualifying exams and olympiad-style reasoning. Symbolic manipulation, proof construction, constraint satisfaction.",
    chips: ["Graduate level", "Olympiad", "Proof construction", "Symbolic", "Multi-step"],
    image: "/paintings/aethel-mathematics.jpg",
  },
  {
    title: "Strong General Reasoning Retained",
    body: "Scientific specialization doesn't come at the cost of being broadly capable. Competitive with frontier general models on standard reasoning and knowledge benchmarks.",
    chips: ["Frontier class", "Broad capability", "General reasoning", "No trade-off"],
    image: "/paintings/aethel-general-reasoning.jpg",
  },
];

export function AethelPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="min-h-screen bg-background text-foreground"
      style={{ ["--accent" as string]: COLOR }}
    >
      <SiteNav />
      <AethelHero />
      <AethelFeatures />
      <AethelClosing />
      <SiteFooter />
    </main>
  );
}

/* ---------------------------------- HERO ---------------------------------- */

function AethelHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 80% 10%, color-mix(in oklab, ${COLOR} 12%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            ← OrbitIQ Labs
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span
                  className="h-2 w-2 animate-pulse rounded-full"
                  style={{ background: COLOR }}
                />
                <span className="label-mono" style={{ color: COLOR }}>
                  Status: In Active Development
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 font-display text-sm italic tracking-wide text-muted-foreground">
                Αἰθήρ · The upper air
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display mt-2 text-[clamp(3rem,8vw,6rem)] font-light leading-[0.9] tracking-[-0.04em]">
                Aethel
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-xl font-light leading-snug">
                A foundation model built to reason like a scientist.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Mixture-of-Experts architecture with native multimodal fluency across molecular structures,
                biological sequences, crystallographic data, and scientific imaging. Built to operate
                in an iterative research loop, not answer single-shot questions.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="solid" size="xl">
                  <a href="/#contact">Follow the Research</a>
                </Button>
                <Button asChild variant="wire" size="xl">
                  <a href="/#contact">Technical Brief</a>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={220}>
            <div
              className="rounded-2xl p-1"
              style={{
                background: `linear-gradient(135deg, color-mix(in oklab, ${COLOR} 24%, transparent), transparent 55%)`,
              }}
            >
              <TensionVisual />
            </div>
          </Reveal>
        </div>

        {/* metrics band */}
        <Reveal delay={200}>
          <div className="marble-sheen mt-16 grid grid-cols-3 divide-x divide-border/50 rounded-xl border border-border/50">
            <div className="px-6 py-7 text-center">
              <p className="font-display text-3xl font-light" style={{ color: COLOR }}>
                ~1T
              </p>
              <p className="label-mono mt-1">Parameter Class</p>
            </div>
            <div className="px-6 py-7 text-center">
              <p className="font-display text-3xl font-light" style={{ color: COLOR }}>
                6
              </p>
              <p className="label-mono mt-1">Modalities</p>
            </div>
            <div className="px-6 py-7 text-center">
              <p className="font-display text-3xl font-light" style={{ color: COLOR }}>
                5
              </p>
              <p className="label-mono mt-1">Scientific Domains</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- TENSION VISUAL ------------------------------ */

function TensionVisual() {
  return (
    <div className="relative min-h-[360px] rounded-xl border border-border/40 bg-surface/30 p-8 backdrop-blur-sm lg:min-h-[420px]">
      <div className="space-y-6">
        <div>
          <p className="label-mono text-[9px]">The Problem</p>
          <h3 className="mt-3 font-display text-lg font-light leading-tight text-muted-foreground">
            General-purpose models are breadth-optimized
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
            The more disciplines a model tries to serve equally, the less native fluency it has in
            any one of them.
          </p>
        </div>

        <div className="h-px bg-border/40" />

        <div>
          <p className="label-mono text-[9px]" style={{ color: COLOR }}>
            The Approach
          </p>
          <h3 className="mt-3 font-display text-lg font-light leading-tight">
            Scientific reasoning rewards depth
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
            Native fluency in non-text modalities — molecular structures, crystallographic data,
            biological sequences, time-series signals. These are not text problems with a visual
            wrapper.
          </p>
        </div>

        <div className="h-px bg-border/40" />

        <div>
          <p className="label-mono text-[9px]" style={{ color: COLOR }}>
            The Result
          </p>
          <h3 className="mt-3 font-display text-lg font-light leading-tight">
            Depth without sacrificing breadth
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
            Competitive with frontier general models on standard benchmarks. Scientific
            specialization that doesn't come at the cost of general capability.
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- FEATURES -------------------------------- */

function AethelFeatures() {
  // Features 1 and 6 get wider aspect ratio (index 0 and 5)
  const getAspectRatio = (index: number) => {
    return index === 0 || index === 5 ? "aspect-[3/2]" : "aspect-[4/3]";
  };

  return (
    <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
      {FEATURES.map((f, i) => (
        <FeaturePanel
          key={f.title}
          index={i + 1}
          title={f.title}
          body={f.body}
          visual={
            <AethelVisual 
              image={f.image} 
              chips={f.chips} 
              color={COLOR} 
              aspectRatio={getAspectRatio(i)}
            />
          }
          flip={i % 2 === 1}
        />
      ))}
    </section>
  );
}

/* -------------------------- CUSTOM VISUAL COMPONENT ----------------------- */

function AethelVisual({ 
  image, 
  chips, 
  color,
  aspectRatio = "aspect-[4/3]"
}: { 
  image: string; 
  chips: string[]; 
  color: string;
  aspectRatio?: string;
}) {
  return (
    <div className="space-y-4">
      {/* Image Preview - takes prominence with custom aspect ratio */}
      <div className={`relative ${aspectRatio} overflow-hidden rounded-lg border border-border/40`}>
        <img
          src={image}
          alt="Technical visualization"
          className="h-full w-full object-cover opacity-80 transition-opacity hover:opacity-100"
        />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent pointer-events-none" />
      </div>
      
      {/* Chip cloud below - organized and clean */}
      <div className="flex flex-wrap gap-2 pt-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-all hover:bg-surface/60"
            style={{ 
              borderColor: `color-mix(in oklab, ${color} 35%, transparent)`, 
              color 
            }}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- CLOSING --------------------------------- */

function AethelClosing() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
      <ClosingCTA
        color={COLOR}
        line="Aethel is part of the Morbius research infrastructure — the foundation model layer that enables research agents to operate with scientific fluency."
        cta={
          <>
            <Button asChild variant="solid" size="xl">
              <a href="/#contact">Follow Development</a>
            </Button>
            <Button asChild variant="wire" size="xl">
              <a href="/#contact">Get in Touch</a>
            </Button>
          </>
        }
      />

      {/* Link to Morbius */}
      <Reveal>
        <div className="border-t border-border/50 py-20">
          <p className="label-mono">Part of</p>
          <Link
            to="/$slug"
            params={{ slug: "morbius" }}
            className="group mt-8 flex items-center justify-between rounded-2xl border border-border/60 bg-surface/40 p-8 transition-all hover:-translate-y-1 hover:border-border"
          >
            <div>
              <p className="font-display text-xs italic text-muted-foreground">
                Ἐπιστήμη · Knowledge
              </p>
              <p className="font-display mt-1 text-2xl font-light tracking-tight">Morbius</p>
              <p className="mt-2 text-sm text-muted-foreground">
                The Scientific Operating System for Autonomous Research
              </p>
            </div>
            <span
              className="font-mono text-lg transition-transform group-hover:translate-x-1"
              style={{ color: "var(--morbius)" }}
            >
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
