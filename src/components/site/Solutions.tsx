import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

interface Capability {
  name: string;
  cat: string;
}

type TabKey = "academic" | "enterprise";

const ACADEMIC: Capability[] = [
  { name: "AI Research Assistant", cat: "CORE" },
  { name: "End-to-End Research Automation", cat: "CORE" },
  { name: "Multi-Agent Autonomous Discovery", cat: "CORE" },
  { name: "Conversational Paper Analysis", cat: "READING" },
  { name: "Literature Review & Evidence Synthesis", cat: "READING" },
  { name: "Hypothesis & Experiment Generation", cat: "DISCOVERY" },
  { name: "Research Podcast Generation", cat: "OUTPUT" },
  { name: "Paper-to-Slides & Poster Studio", cat: "OUTPUT" },
  { name: "Flashcards, Notes & Summaries", cat: "LEARNING" },
  { name: "Grant & Manuscript Drafting", cat: "OUTPUT" },
  { name: "Lab Knowledge-Graph for Research Groups", cat: "MEMORY" },
  { name: "AI Literacy & Researcher Training", cat: "LEARNING" },
];

const ENTERPRISE: Capability[] = [
  { name: "Competitive & Market Intelligence", cat: "INTEL" },
  { name: "Patent Prior-Art & IP Landscaping", cat: "INTEL" },
  { name: "Technology Scouting & Horizon Scanning", cat: "INTEL" },
  { name: "Regulatory & Compliance Monitoring", cat: "GOVERNANCE" },
  { name: "Technical Due-Diligence Automation", cat: "DILIGENCE" },
  { name: "R&D Portfolio & Pipeline Analysis", cat: "STRATEGY" },
  { name: "Data-Room Synthesis & Board Briefs", cat: "REPORTING" },
  { name: "Institutional Knowledge Management", cat: "MEMORY" },
  { name: "Custom Domain-Model Fine-Tuning", cat: "PLATFORM" },
  { name: "Secure On-Prem / Private-VPC Deployment", cat: "PLATFORM" },
  { name: "SSO, RBAC & Immutable Audit Governance", cat: "GOVERNANCE" },
  { name: "Custom Agent Orchestration for R&D", cat: "PLATFORM" },
];

const TABS: Record<
  TabKey,
  { label: string; title: string; lede: string; items: Capability[]; manifest: string; stats: { v: string; l: string }[] }
> = {
  academic: {
    label: "Academic R&D",
    title: "For the labs asking the questions.",
    lede: "Give researchers, departments, and academic groups a unified system that carries an idea from literature to hypothesis to publication — without losing rigor.",
    items: ACADEMIC,
    manifest: "orbitiq · academic manifest",
    stats: [
      { v: "12", l: "Research capabilities" },
      { v: "10", l: "Specialized agents" },
      { v: "∞", l: "Group memory" },
    ],
  },
  enterprise: {
    label: "Enterprise R&D",
    title: "For the organizations betting on discovery.",
    lede: "Deploy OrbitIQ across your enterprise as a governed capability layer — competitive intelligence, IP landscaping, and secure private-model infrastructure at institutional scale.",
    items: ENTERPRISE,
    manifest: "orbitiq · enterprise manifest",
    stats: [
      { v: "12", l: "Enterprise workflows" },
      { v: "VPC", l: "Private deployment" },
      { v: "SLA", l: "Enterprise support" },
    ],
  },
};

export function Solutions() {
  const [tab, setTab] = useState<TabKey>("academic");
  const cfg = TABS[tab];

  return (
    <section id="solutions" className="scroll-mt-16 border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          numeral="VI"
          eyebrow="Research & Development"
          title={
            <>
              One system, tuned to <span className="italic text-accent">how you discover.</span>
            </>
          }
        />

        {/* Tab switcher */}
        <Reveal delay={120}>
          <div className="mt-10 inline-flex rounded-full border border-border/60 bg-surface/40 p-1">
            {(Object.keys(TABS) as TabKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={cn(
                  "relative rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest transition-colors",
                  tab === k ? "text-background" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab === k && (
                  <span className="absolute inset-0 rounded-full bg-accent" style={{ transition: "all 300ms var(--ease-expo)" }} />
                )}
                <span className="relative">{TABS[k].label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* Left narrative — keyed so it re-animates on tab change */}
          <Reveal key={`copy-${tab}`} variant="left">
            <h3 className="font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-light leading-tight tracking-[-0.02em]">
              {cfg.title}
            </h3>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{cfg.lede}</p>
            <div className="mt-10 flex flex-wrap gap-8">
              {cfg.stats.map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl font-light text-accent">{s.v}</p>
                  <p className="label-mono mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Manifest — keyed so scan restarts on tab change */}
          <Reveal key={`manifest-${tab}`} delay={120} variant="right">
            <CapabilityManifest items={cfg.items} label={cfg.manifest} accent={tab === "enterprise" ? "var(--parallax)" : "var(--morbius)"} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CapabilityManifest({ items, label, accent }: { items: Capability[]; label: string; accent: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), 1300);
    return () => clearInterval(id);
  }, [items]);

  return (
    <div className="terminal-pane overflow-hidden rounded-2xl shadow-2xl" style={{ ["--tc" as string]: accent }}>
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground/70">{label}</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent, animation: "soft-blink 1.4s ease-in-out infinite" }} />
          <span className="font-mono text-[9px] tracking-widest" style={{ color: accent }}>
            DEPLOYING
          </span>
        </span>
      </div>

      <div className="px-2 py-2">
        {items.map((c, i) => {
          const on = active === i;
          return (
            <div
              key={c.name}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 transition-all duration-300"
              style={{
                background: on ? `color-mix(in oklab, ${accent} 10%, transparent)` : "transparent",
                borderLeft: `2px solid ${on ? accent : "transparent"}`,
              }}
            >
              <span className="w-6 shrink-0 font-mono text-[10px] tracking-widest text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="flex-1 text-sm transition-colors duration-300"
                style={{ color: on ? "var(--foreground)" : "var(--muted-foreground)" }}
              >
                {c.name}
              </span>
              <span
                className="hidden shrink-0 rounded-sm border px-2 py-0.5 font-mono text-[8px] tracking-[0.16em] sm:inline"
                style={{
                  borderColor: on ? `color-mix(in oklab, ${accent} 40%, transparent)` : "var(--border)",
                  color: on ? accent : "var(--muted-foreground)",
                }}
              >
                {c.cat}
              </span>
              <span className="w-16 shrink-0 text-right font-mono text-[9px] tracking-widest">
                {on ? (
                  <span style={{ color: accent, animation: "drift-up 300ms var(--ease-expo) both" }}>● live</span>
                ) : i < active ? (
                  <span className="text-muted-foreground/50">✓ ready</span>
                ) : (
                  <span className="text-muted-foreground/30">queued</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const CLIENTS = [
  { name: "Universities & Academic Institutions", note: "Labs, departments & research groups" },
  { name: "Corporate R&D Organizations", note: "Innovation & applied research teams" },
  { name: "Industrial Research Labs", note: "Materials, chemistry & engineering" },
  { name: "Government Research Centers", note: "National labs & public science" },
  { name: "Frontier AI Labs", note: "Alignment, evals & applied research" },
  { name: "Deeptech Companies", note: "Bio, quantum, aerospace & beyond" },
];

export function WhoWeServe() {
  return (
    <section className="border-t border-border bg-surface/20 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          eyebrow="Who we serve"
          title={
            <>
              Built for the institutions that <span className="italic text-accent">move science forward.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 80} variant="scale">
              <div className="group relative flex h-full min-h-44 flex-col justify-between bg-[oklch(0.13_0.01_265)] p-7 transition-colors hover:bg-surface/60">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-light leading-snug tracking-tight">{c.name}</h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {c.note}
                  </p>
                  <span className="mt-3 block h-px w-full origin-left scale-x-0 bg-accent/60 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
