import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { AgentTerminal } from "./AgentTerminal";
import { FeaturePanel, ChipCloud, ClosingCTA } from "./FeaturePanel";
import { Reveal } from "./Reveal";
import { PRODUCTS, type Product } from "./products";
import { MorbiusAccessForm } from "./MorbiusAccessForm";

export function ProductDetail({ product }: { product: Product }) {
  const C = product.colorVar;
  const [showAccessForm, setShowAccessForm] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.slug]);

  const others = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <main
      className="min-h-screen bg-background text-foreground"
      style={{ ["--accent" as string]: C }}
    >
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40">
        {/* ambient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 80% 10%, color-mix(in oklab, ${C} 12%, transparent), transparent 70%)`,
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              ← OrbitIQ Labs
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: C }} />
                  <span className="label-mono" style={{ color: C }}>
                    Status: {product.status}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-6 font-display text-sm italic tracking-wide text-muted-foreground">
                  {product.greek}
                </p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="font-display mt-2 text-[clamp(3rem,8vw,6rem)] leading-[0.9] font-light tracking-[-0.04em]">
                  {product.name}
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 text-xl font-light leading-snug">{product.tagline}</p>
              </Reveal>
              <Reveal delay={280}>
                <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{product.body}</p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button 
                    variant="solid" 
                    size="xl"
                    onClick={() => setShowAccessForm(true)}
                  >
                    {product.live ? `Try ${product.name} Desktop →` : "Join the Beta Waitlist"}
                  </Button>
                  <Button 
                    variant="wire" 
                    size="xl"
                    onClick={() => setShowDemoForm(true)}
                  >
                    Book an Institutional Demo
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={220}>
              <div
                className="rounded-2xl p-1"
                style={{ background: `linear-gradient(135deg, color-mix(in oklab, ${C} 24%, transparent), transparent 55%)` }}
              >
                <AgentTerminal sessions={product.sessions} color={C} label={`${product.slug} · agent session`} />
              </div>
            </Reveal>
          </div>

          {/* metrics band */}
          <Reveal delay={200}>
            <div className="mt-16 grid grid-cols-3 divide-x divide-border/50 rounded-xl border border-border/50 marble-sheen">
              {product.metrics.map((m) => (
                <div key={m.label} className="px-6 py-7 text-center">
                  <p className="font-display text-3xl font-light" style={{ color: C }}>
                    {m.value}
                  </p>
                  <p className="label-mono mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {product.features.map((f, i) => (
          <FeaturePanel
            key={f.title}
            index={i + 1}
            title={f.title}
            body={f.body}
            visual={<ChipCloud color={C} items={f.chips} />}
            flip={i % 2 === 1}
          />
        ))}

        <ClosingCTA
          color={C}
          line={product.closing}
          cta={
            <>
              <Button 
                variant="solid" 
                size="xl"
                onClick={() => setShowAccessForm(true)}
              >
                {product.live ? `Try ${product.name} Desktop Free →` : "Request Early Access"}
              </Button>
              <Button 
                variant="wire" 
                size="xl"
                onClick={() => setShowDemoForm(true)}
              >
                Request Institutional Demo
              </Button>
            </>
          }
        />
      </section>

      {/* Performance Benchmarks - Only for Morbius */}
      {product.slug === "morbius" && (
        <section className="border-t border-border/60 py-28 lg:py-40">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="rule-ornament w-12" style={{ background: C }} />
                <h2 className="font-display text-2xl font-light tracking-tight">
                  Performance Benchmarks
                </h2>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Morbius demonstrates state-of-the-art performance across multiple drug discovery benchmarks, 
                consistently outperforming traditional methods and competing AI systems in scientific quality, 
                research execution, and overall discovery success rates.
              </p>
            </Reveal>

            {/* Benchmark Chart 1 - Full Width Hero */}
            <Reveal delay={120}>
              <div className="mt-16 overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-surface/30 to-surface/10">
                <img
                  src="/paintings/morbius_benchmark_1png.png"
                  alt="Mean co-primary performance across platforms - Morbius leads with 89.8% in scientific quality"
                  className="w-full"
                />
              </div>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                <strong style={{ color: C }}>Chart A:</strong> Mean co-primary performance across 20 prompts. 
                Co-primary means include 95% bootstrap CIs; diamonds mark means.
              </p>
            </Reveal>

            {/* Benchmark Charts 2 & 3 - Side by Side */}
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <Reveal delay={200}>
                <div>
                  <div className="overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-surface/30 to-surface/10">
                    <img
                      src="/paintings/morbius_benchmark_2.png"
                      alt="Secondary composite distribution - Morbius median 80.6 out of 100"
                      className="w-full"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    <strong style={{ color: C }}>Chart B:</strong> Secondary composite distribution. 
                    Morbius achieves median score of 80.6/100.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div>
                  <div className="overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-surface/30 to-surface/10">
                    <img
                      src="/paintings/morbius_benchmark_3.png"
                      alt="First-place finishes by outcome - Morbius: 16 scientific, 20 execution firsts"
                      className="w-full"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    <strong style={{ color: C }}>Chart C:</strong> First-place finishes by co-primary outcome. 
                    Morbius leads with 36 total wins.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Key Performance Highlights */}
            <Reveal delay={280}>
              <div className="mt-20 grid gap-6 md:grid-cols-3">
                <div 
                  className="rounded-2xl border p-8 backdrop-blur-sm"
                  style={{ 
                    borderColor: `color-mix(in oklab, ${C} 20%, transparent)`,
                    background: `color-mix(in oklab, ${C} 5%, transparent)`
                  }}
                >
                  <p className="label-mono" style={{ color: C }}>Scientific Quality</p>
                  <p className="font-display mt-2 text-4xl font-light" style={{ color: C }}>
                    89.8%
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Mean performance on scientific quality evaluation across 20 research prompts
                  </p>
                </div>

                <div 
                  className="rounded-2xl border p-8 backdrop-blur-sm"
                  style={{ 
                    borderColor: `color-mix(in oklab, ${C} 20%, transparent)`,
                    background: `color-mix(in oklab, ${C} 5%, transparent)`
                  }}
                >
                  <p className="label-mono" style={{ color: C }}>First-Place Wins</p>
                  <p className="font-display mt-2 text-4xl font-light" style={{ color: C }}>
                    36/40
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Total first-place finishes (16 scientific quality + 20 research execution)
                  </p>
                </div>

                <div 
                  className="rounded-2xl border p-8 backdrop-blur-sm"
                  style={{ 
                    borderColor: `color-mix(in oklab, ${C} 20%, transparent)`,
                    background: `color-mix(in oklab, ${C} 5%, transparent)`
                  }}
                >
                  <p className="label-mono" style={{ color: C }}>Median Composite</p>
                  <p className="font-display mt-2 text-4xl font-light" style={{ color: C }}>
                    80.6
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Secondary composite score out of 100 across all evaluation dimensions
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Cross-links */}
      <section className="border-t border-border/60 py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="label-mono">Explore the other systems</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/$slug"
                params={{ slug: o.slug }}
                className="group flex items-center justify-between rounded-2xl border border-border/60 bg-surface/40 p-8 transition-all hover:-translate-y-1 hover:border-border"
              >
                <div>
                  <p className="font-display text-xs italic text-muted-foreground">{o.greek}</p>
                  <p className="font-display mt-1 text-2xl font-light tracking-tight">{o.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{o.tagline}</p>
                </div>
                <span
                  className="font-mono text-lg transition-transform group-hover:translate-x-1"
                  style={{ color: o.colorVar }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      
      {/* Access Form Modals */}
      <MorbiusAccessForm 
        isOpen={showAccessForm} 
        onClose={() => setShowAccessForm(false)} 
        formType="individual"
      />
      <MorbiusAccessForm 
        isOpen={showDemoForm} 
        onClose={() => setShowDemoForm(false)} 
        formType="institutional"
      />
    </main>
  );
}
