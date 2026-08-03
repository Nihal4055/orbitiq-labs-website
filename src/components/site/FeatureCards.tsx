/**
 * ResearchRabbit-style feature cards:
 * Large rounded soft-colored cards, illustration on top,
 * bold short title, short body copy, subtle CTA.
 */
import exploreImg from "@/assets/feature/vg-explore-literature.png";
import organizedImg from "@/assets/feature/vg-organized-library.png";
import writeImg from "@/assets/feature/vg-write-evidence.png";
import experimentImg from "@/assets/feature/vg-autonomous-experiment.png";
import marketImg from "@/assets/feature/vg-market-intelligence.png";
import learnImg from "@/assets/feature/vg-learn-discover.png";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export interface FeatureCardData {
  num: string;
  color: string;
  bgClass: string;
  title: string;
  body: string;
  illustrationSrc?: string;
  illustrationSlot: string;
  cta?: { label: string; href: string };
}

const CARDS: FeatureCardData[] = [
  {
    num: "01",
    color: "var(--morbius)",
    bgClass: "bg-[oklch(0.22_0.04_245)]",
    title: "Explore the literature",
    body: "Start with one paper. Morbius expands your search across authors, methods, and emerging topics — the more you explore, the more ideas surface.",
    illustrationSrc: exploreImg,
    illustrationSlot: "vg-explore-literature.png",
    cta: { label: "Find papers", href: "#morbius" },
  },
  {
    num: "02",
    color: "var(--prometheus)",
    bgClass: "bg-[oklch(0.22_0.04_62)]",
    title: "Stay organized",
    body: "Your papers, notes, and hypotheses connected in one living knowledge graph. No idea gets left stranded, no thread forgotten.",
    illustrationSrc: organizedImg,
    illustrationSlot: "vg-organized-library.png",
    cta: { label: "Build your graph", href: "#morbius" },
  },
  {
    num: "03",
    color: "var(--parallax)",
    bgClass: "bg-[oklch(0.21_0.04_168)]",
    title: "Write with evidence",
    body: "Every Morbius output is grounded in traceable citations. Draft manuscripts, posters, and slide decks — all backed by your own evidence graph.",
    illustrationSrc: writeImg,
    illustrationSlot: "vg-write-evidence.png",
    cta: { label: "Start writing", href: "#morbius" },
  },
  {
    num: "04",
    color: "oklch(0.74 0.13 300)",
    bgClass: "bg-[oklch(0.21_0.04_300)]",
    title: "Run autonomous experiments",
    body: "From hypothesis to testable prediction to experimental protocol — Morbius generates the plan, flags confounds, and recommends validation checkpoints.",
    illustrationSrc: experimentImg,
    illustrationSlot: "vg-autonomous-experiment.png",
    cta: { label: "Design experiments", href: "#prometheus" },
  },
  {
    num: "05",
    color: "oklch(0.74 0.14 15)",
    bgClass: "bg-[oklch(0.21_0.04_15)]",
    title: "Quantify market intelligence",
    body: "Parallax brings the same rigour to quant research. Multi-agent market analysis, evidence-grounded signals, and reproducible strategy formation.",
    illustrationSrc: marketImg,
    illustrationSlot: "vg-market-intelligence.png",
    cta: { label: "Enter Parallax", href: "#parallax" },
  },
  {
    num: "06",
    color: "oklch(0.78 0.12 85)",
    bgClass: "bg-[oklch(0.22_0.03_85)]",
    title: "Learn as you discover",
    body: "Flashcards, concept maps, structured notes, and narrated research podcasts auto-generated from your reading list. Understanding compounds.",
    illustrationSrc: learnImg,
    illustrationSlot: "vg-learn-discover.png",
    cta: { label: "Explore features", href: "#morbius" },
  },
];

function IllustrationSlot({
  src,
  slot,
  color,
  bgClass,
}: {
  src?: string;
  slot: string;
  color: string;
  bgClass: string;
}) {
  if (src) {
    return (
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover"
          data-slot={slot}
        />
      </div>
    );
  }

  // Placeholder: subtle pattern + slot name
  return (
    <div
      className={cn("relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden flex items-center justify-center", bgClass)}
      data-slot={slot}
      style={{
        backgroundImage: "radial-gradient(circle, oklch(1 0 0 / 5%) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Decorative SVG — Victorian compass rose */}
      <svg viewBox="0 0 120 120" className="w-24 h-24 opacity-20" fill="none">
        <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 3" />
        <circle cx="60" cy="60" r="32" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="60" cy="60" r="6" stroke="currentColor" strokeWidth="1" />
        <line x1="60" y1="8" x2="60" y2="112" stroke="currentColor" strokeWidth="0.5" />
        <line x1="8" y1="60" x2="112" y2="60" stroke="currentColor" strokeWidth="0.5" />
        <polygon points="60,14 63,52 57,52" fill="currentColor" opacity="0.5" />
        <polygon points="60,106 57,68 63,68" fill="currentColor" opacity="0.5" />
        <text x="60" y="118" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="currentColor" opacity="0.5">{slot}</text>
      </svg>
    </div>
  );
}

export function FeatureCards() {
  return (
    <section className="border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="label-mono">What OrbitIQ builds</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mt-8 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] leading-[1.03] font-light tracking-[-0.03em]">
            Let your ideas multiply.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.num} delay={i * 80}>
              <article
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-surface/50 overflow-hidden transition-all duration-500 hover:border-border hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_oklch(0_0_0/0.5)]"
              >
                <IllustrationSlot
                  src={card.illustrationSrc}
                  slot={card.illustrationSlot}
                  color={card.color}
                  bgClass={card.bgClass}
                />

                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div className="flex items-start justify-between">
                    <span
                      className="font-mono text-[10px] tracking-[0.28em]"
                      style={{ color: card.color }}
                    >
                      {card.num}
                    </span>
                    <span
                      className="h-1.5 w-1.5 rounded-full mt-1"
                      style={{ backgroundColor: card.color, opacity: 0.6 }}
                    />
                  </div>

                  <h3 className="font-display text-xl font-light tracking-tight leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                    {card.body}
                  </p>

                  {card.cta && (
                    <a
                      href={card.cta.href}
                      className="mt-2 inline-flex items-center gap-2 rounded-full border px-5 py-2 font-mono text-[11px] tracking-widest uppercase transition-colors hover:bg-surface self-start"
                      style={{ borderColor: `color-mix(in oklab, ${card.color} 40%, transparent)`, color: card.color }}
                    >
                      {card.cta.label}
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
