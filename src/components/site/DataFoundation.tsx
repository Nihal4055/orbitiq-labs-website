import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

/** BenchSci-style bento of headline metrics + a live data-flow pipeline. */

interface Tile {
  value: string;
  label: string;
  tint: string; // oklch background
  fg: string; // number color
  span?: string; // grid span classes
  art?: "graph" | "matrix" | null;
}

const TILES: Tile[] = [
  { value: "210M+", label: "Scientific publications indexed", tint: "oklch(0.24 0.05 245)", fg: "oklch(0.82 0.12 245)" },
  { value: "3.4B", label: "Knowledge-graph relationship edges", tint: "oklch(0.22 0.05 265)", fg: "oklch(0.85 0.09 265)" },
  { value: "", label: "", tint: "oklch(0.2 0.02 265)", fg: "", art: "graph", span: "row-span-2" },
  { value: "40+", label: "Scientific domains covered", tint: "oklch(0.23 0.05 160)", fg: "oklch(0.82 0.12 160)" },
  { value: "250+", label: "On-demand data connectors", tint: "oklch(0.24 0.05 62)", fg: "oklch(0.84 0.12 62)" },
  { value: "98.7%", label: "Citation traceability accuracy", tint: "oklch(0.22 0.05 300)", fg: "oklch(0.83 0.11 300)" },
  { value: "12", label: "Specialized reasoning agents", tint: "oklch(0.23 0.05 25)", fg: "oklch(0.82 0.13 25)" },
  { value: "", label: "", tint: "oklch(0.2 0.02 265)", fg: "", art: "matrix" },
  { value: "<2s", label: "Full-paper ingestion latency", tint: "oklch(0.23 0.05 200)", fg: "oklch(0.83 0.12 200)" },
];

const SOURCES = [
  "All scientific publications",
  "Preprints",
  "Patents",
  "Omics datasets",
  "Clinical trials",
  "Ontologies & facts",
  "Reagents & methods",
  "Internal lab data",
];

const FLOW = [
  { k: "Ingest", d: "PDFs · arXiv · omics · filings" },
  { k: "Structure", d: "entities · claims · figures" },
  { k: "Graph", d: "persistent knowledge memory" },
  { k: "Reason", d: "multi-agent orchestration" },
  { k: "Deliver", d: "evidence-grounded output" },
];

function GraphArt() {
  const nodes = [
    [50, 50], [24, 26], [78, 30], [30, 74], [72, 70], [14, 52], [88, 56], [52, 14], [46, 88],
  ];
  const edges: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4], [1, 5], [2, 6], [1, 7], [3, 8], [4, 8], [2, 4],
  ];
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="var(--accent)" strokeWidth="0.4" opacity="0.35" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 2.6 : 1.6} fill="var(--accent)" opacity={0.5 + (i % 3) * 0.16}>
          <animate attributeName="opacity" values="0.4;0.95;0.4" dur={`${2.4 + (i % 4) * 0.6}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function MatrixArt() {
  // dot-matrix engraving nod to the classical bust
  return (
    <svg viewBox="0 0 100 60" className="h-full w-full opacity-60">
      {Array.from({ length: 200 }).map((_, i) => {
        const c = i % 20;
        const r = Math.floor(i / 20);
        const x = 6 + c * 4.4;
        const y = 6 + r * 5.4;
        // rough profile mask
        const inProfile = Math.sin(c / 3) * 12 + 30 > r * 5 && c > 3 && c < 17;
        return <circle key={i} cx={x} cy={y} r={inProfile ? 1.2 : 0.5} fill="var(--foreground)" opacity={inProfile ? 0.55 : 0.12} />;
      })}
    </svg>
  );
}

export function DataFoundation() {
  return (
    <section id="data" className="scroll-mt-16 border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left: narrative + sources */}
          <div>
            <SectionHeader
              numeral="IV"
              eyebrow="The Data Foundation"
              title={
                <>
                  It took years to build.
                  <br />
                  <span className="italic text-accent">It shows.</span>
                </>
              }
              lede="A knowledge substrate no competitor can replicate — years of ingestion, structuring, and curation across the entire scientific record, from publications to raw omics."
            />

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-2">
                {SOURCES.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border/60 bg-surface/40 px-3 py-2 font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: bento */}
          <Reveal delay={120}>
            <div className="grid auto-rows-[132px] grid-cols-2 gap-3 sm:grid-cols-3">
              {TILES.map((t, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-xl p-5 ${t.span ?? ""}`}
                  style={{ background: t.tint }}
                >
                  {t.art === "graph" && <div className="absolute inset-3"><GraphArt /></div>}
                  {t.art === "matrix" && <div className="absolute inset-2"><MatrixArt /></div>}
                  {t.value && (
                    <>
                      <p className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-none" style={{ color: t.fg }}>
                        {t.value}
                      </p>
                      <p className="absolute bottom-4 left-5 right-4 font-mono text-[9px] leading-snug tracking-[0.1em] uppercase text-white/55">
                        {t.label}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Live data-flow pipeline */}
        <Reveal delay={160}>
          <DataFlowRail />
        </Reveal>
      </div>
    </section>
  );
}

const FLOW_META = [
  { throughput: "14.2k docs/min", detail: "PDFs · arXiv · omics · filings" },
  { throughput: "8.8k entities/s", detail: "sections · claims · figures" },
  { throughput: "3.4B edges", detail: "persistent knowledge memory" },
  { throughput: "12 agents live", detail: "multi-agent orchestration" },
  { throughput: "evidence-linked", detail: "manuscripts · decks · reports" },
];

/** Live processing pipeline — a data packet travels the rail, lighting each
 *  stage in turn, echoing the agent-terminal aesthetic. No icons. */
function DataFlowRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % FLOW.length), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-24">
      <div className="flex items-center gap-4">
        <span className="rule-ornament w-10" />
        <span className="label-mono">How the data moves</span>
        <span className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-muted-foreground/70">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" style={{ animation: "soft-blink 1.4s ease-in-out infinite" }} />
          LIVE PIPELINE
        </span>
        <span className="rule-ornament flex-1" />
      </div>

      <div className="relative mt-10 rounded-2xl border border-border/60 bg-[oklch(0.11_0.008_265)] p-6 lg:p-10">
        {/* the rail */}
        <div className="relative">
          {/* horizontal connector (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-px md:block">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            {/* travelling packet */}
            <span
              className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 12px 2px color-mix(in oklab, var(--accent) 60%, transparent)",
                animation: "rail-travel 7.5s linear infinite",
              }}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-5 md:gap-3">
            {FLOW.map((f, i) => {
              const on = active === i;
              return (
                <div key={f.k} className="relative">
                  {/* node dot on the rail */}
                  <div className="mb-5 hidden justify-center md:flex">
                    <span
                      className="relative z-10 h-3 w-3 rounded-full border transition-all duration-500"
                      style={{
                        borderColor: on ? "var(--accent)" : "var(--border)",
                        background: on ? "var(--accent)" : "oklch(0.11 0.008 265)",
                        boxShadow: on ? "0 0 16px 3px color-mix(in oklab, var(--accent) 55%, transparent)" : "none",
                      }}
                    />
                  </div>

                  <div
                    className="h-full rounded-xl border p-5 transition-all duration-500"
                    style={{
                      borderColor: on ? "color-mix(in oklab, var(--accent) 50%, transparent)" : "var(--border)",
                      background: on ? "color-mix(in oklab, var(--accent) 7%, transparent)" : "color-mix(in oklab, var(--surface) 40%, transparent)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-widest" style={{ color: on ? "var(--accent)" : "var(--muted-foreground)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {on && (
                        <span className="font-mono text-[9px] tracking-widest text-accent" style={{ animation: "drift-up 400ms var(--ease-expo) both" }}>
                          processing<span style={{ animation: "soft-blink 1s step-end infinite" }}>▌</span>
                        </span>
                      )}
                    </div>
                    <p className="font-display mt-3 text-xl font-light tracking-tight">{f.k}</p>
                    <p className="mt-1.5 font-mono text-[10px] leading-relaxed tracking-wide text-muted-foreground">
                      {f.d}
                    </p>
                    <div className="mt-4 border-t border-border/50 pt-3">
                      <span
                        className="font-mono text-[10px] tracking-wide transition-colors duration-500"
                        style={{ color: on ? "var(--accent)" : "var(--muted-foreground)" }}
                      >
                        {FLOW_META[i].throughput}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
