/**
 * Published research — real works by the founder.
 * Book cover art is optional: drop images in src/assets/research/ using the
 * `cover` filenames below and wire them via the import block to replace the
 * engraved placeholders.
 */
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import coverStochasticMinds from "@/assets/research/cover-stochastic-minds.png";
import coverStochasticFutures from "@/assets/research/cover-stochastic-futures.png";
import coverFixedPoint from "@/assets/research/cover-fixed-point.png";
import coverTheCascade from "@/assets/research/cover-the-cascade.png";

interface Book {
  numeral: string;
  title: string;
  subtitle: string;
  desc: string;
  href: string;
  tags: string[];
  color: string;
  art: string;
  cover: string; // expected asset filename
}

interface Paper {
  ref: string;
  title: string;
  venue: string;
  desc: string;
  href: string;
  tags: string[];
  color: string;
}

const BOOKS: Book[] = [
  {
    numeral: "I",
    title: "Stochastic Minds",
    subtitle: "Math, Models, and the Beautiful Chaos of Getting It Almost Right",
    desc: "On the probabilistic mathematics beneath intelligence — why noise, approximation, and being “almost right” are features, not failures, of every learning system.",
    href: "https://www.amazon.com/Stochastic-Minds-Beautiful-Getting-Intelligence/dp/B0GQM2DG96",
    tags: ["Probability", "Machine Learning", "Philosophy of Math"],
    color: "var(--morbius)",
    cover: "cover-stochastic-minds.png",
    art: coverStochasticMinds,
  },
  {
    numeral: "II",
    title: "Stochastic Futures",
    subtitle: "Agents, AGI, and the Mathematics of Control",
    desc: "A mathematical treatment of autonomous agents and AGI trajectories — and the control theory required to steer intelligent systems we do not fully understand.",
    href: "https://www.amazon.com/Stochastic-Futures-Mathematics-Control-Intelligence/dp/B0GQGHQTHB",
    tags: ["AGI", "Control Theory", "Autonomous Agents"],
    color: "var(--prometheus)",
    cover: "cover-stochastic-futures.png",
    art: coverStochasticFutures,
  },
  {
    numeral: "III",
    title: "The Fixed Point",
    subtitle: "How Metacognition Generates Thought and Builds the Self",
    desc: "A theory of mind in which recursive self-reference — a cognitive fixed point — gives rise to thought, awareness, and the emergent sense of a self.",
    href: "https://www.amazon.com/dp/B0H2Y3JHWD",
    tags: ["Metacognition", "Consciousness", "Cognitive Science"],
    color: "var(--parallax)",
    cover: "cover-fixed-point.png",
    art: coverFixedPoint,
  },
  {
    numeral: "IV",
    title: "The Cascade",
    subtitle: "A Network Science Autopsy of History’s Most Enigmatic Collapse",
    desc: "Complex-systems forensics applied to one of history’s most mysterious societal collapses — reconstructing how cascading failures propagate through a network.",
    href: "https://www.amazon.com/Cascade-Network-Historys-Enigmatic-Collapse/dp/B0H2XRBHPD",
    tags: ["Network Science", "Complex Systems", "History"],
    color: "oklch(0.74 0.13 300)",
    cover: "cover-the-cascade.png",
    art: coverTheCascade,
  },
];

const PAPERS: Paper[] = [
  {
    ref: "P.01",
    title: "A Geometric Analysis of Quantum-Inspired Local Tensor Regression",
    venue: "Research Square · Preprint",
    desc: "Formal proofs of convergence and computational tractability for a quantum-inspired local tensor-regression method, analyzed through the lens of differential geometry.",
    href: "https://www.researchsquare.com/article/rs-7917214/v1",
    tags: ["Quantum-Inspired ML", "Tensor Methods", "Convergence Proofs"],
    color: "var(--morbius)",
  },
  {
    ref: "P.02",
    title: "AMODO-EO: Adaptive Objective Discovery in Multi-Objective Drug Optimization",
    venue: "ChemRxiv · 2025",
    desc: "A practical framework that discovers optimization objectives adaptively during multi-objective drug design, rather than fixing them a priori — improving molecular candidate search.",
    href: "https://chemrxiv.org/doi/full/10.26434/chemrxiv-2025-rjhxn",
    tags: ["Drug Discovery", "Multi-Objective Optimization", "Cheminformatics"],
    color: "var(--prometheus)",
  },
  {
    ref: "P.03",
    title: "Transformer-Augmented Deep RL for Fault-Tolerant Autonomous Navigation in Aerospace Robotics",
    venue: "INJOERE",
    desc: "Combines transformer architectures with deep reinforcement learning to achieve resilient, fault-tolerant autonomous navigation for aerospace robotic systems under component failure.",
    href: "https://injoere.com/index.php/injoere/article/view/1185",
    tags: ["Reinforcement Learning", "Transformers", "Aerospace Robotics"],
    color: "var(--parallax)",
  },
];

// ── Book cover — real art, with a classical framed treatment ──────────────────
function BookCover({ book }: { book: Book }) {
  return (
    <div
      className="group/cover relative aspect-[3/4] w-full overflow-hidden rounded-md border border-border/50 shadow-[0_18px_40px_-18px_oklch(0_0_0/0.8)]"
      data-slot={book.cover}
    >
      <img
        src={book.art}
        alt={`${book.title} — cover`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      {/* spine shadow + gilt edge */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/45 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset"
        style={{ boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${book.color} 22%, transparent)` }}
      />
      {/* subtle top sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-black/25" />
    </div>
  );
}

export function Research() {
  return (
    <section id="research" className="scroll-mt-16 border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          numeral="V"
          eyebrow="Published Research"
          title={
            <>
              The intellectual <span className="italic text-accent">foundation.</span>
            </>
          }
          lede="Four books and three peer-reviewed papers on the mathematics of intelligence, autonomous agents, and complex systems — written by the mind building OrbitIQ."
        />

        {/* Books */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-ornament w-10" />
              <span className="label-mono">Books · IV Volumes</span>
              <span className="rule-ornament flex-1" />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {BOOKS.map((book, i) => (
              <Reveal key={book.title} delay={(i % 2) * 90}>
                <a
                  href={book.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[110px_1fr] gap-5 rounded-2xl border border-border/60 bg-surface/30 p-5 transition-all hover:-translate-y-1 hover:border-border"
                >
                  <BookCover book={book} />
                  <div className="flex flex-col">
                    <span className="font-display text-xs italic" style={{ color: book.color }}>
                      Vol. {book.numeral}
                    </span>
                    <h4 className="font-display mt-1 text-xl font-light leading-tight tracking-tight">
                      {book.title}
                    </h4>
                    <p className="mt-1 font-display text-[13px] italic leading-snug text-muted-foreground">
                      {book.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
                      {book.desc}
                    </p>
                    <div className="mt-auto pt-4 flex flex-wrap items-center gap-2">
                      {book.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-sm border px-2 py-0.5 font-mono text-[8px] tracking-[0.16em] uppercase"
                          style={{ borderColor: `color-mix(in oklab, ${book.color} 28%, transparent)`, color: book.color }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span
                      className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase transition-transform group-hover:translate-x-0.5"
                      style={{ color: book.color }}
                    >
                      Read on Amazon →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Papers */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-ornament w-10" />
              <span className="label-mono">Peer-Reviewed Papers · III</span>
              <span className="rule-ornament flex-1" />
            </div>
          </Reveal>

          <div className="mt-6">
            {PAPERS.map((p, i) => (
              <Reveal key={p.ref} delay={i * 80}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-5 rounded-xl border-b border-border/40 px-4 py-7 -mx-4 transition-colors hover:bg-surface/30"
                >
                  <span className="shrink-0 pt-1 font-mono text-[10px] tracking-[0.2em]" style={{ color: p.color }}>
                    {p.ref}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="label-mono">{p.venue}</span>
                    </div>
                    <h4 className="font-display mt-2 text-lg font-light leading-snug tracking-tight group-hover:text-accent transition-colors">
                      {p.title}
                    </h4>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-sm border px-2 py-0.5 font-mono text-[8px] tracking-[0.16em] uppercase"
                          style={{ borderColor: `color-mix(in oklab, ${p.color} 25%, transparent)`, color: p.color }}
                        >
                          {t}
                        </span>
                      ))}
                      <span
                        className="ml-1 font-mono text-[10px] tracking-widest uppercase transition-transform group-hover:translate-x-0.5"
                        style={{ color: p.color }}
                      >
                        Read paper →
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
