import { Link } from "@tanstack/react-router";
import { Reveal } from "../site/Reveal";
import { ArrowRight, ExternalLink } from "lucide-react";
import React from "react";
import coverStochasticMinds from "@/assets/research/cover-stochastic-minds.png";
import coverStochasticFutures from "@/assets/research/cover-stochastic-futures.png";
import coverFixedPoint from "@/assets/research/cover-fixed-point.png";
import coverTheCascade from "@/assets/research/cover-the-cascade.png";

/**
 * Main Research Page — DeepMind quality
 * Structure: Hero → Breakthroughs → Publications → Latest News → From the Lab
 */

// ── Breakthrough Systems Data ──────────────────────────────────────────────
interface Breakthrough {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  coverImage: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
}

const BREAKTHROUGHS: Breakthrough[] = [
  {
    id: "morbius",
    name: "Morbius",
    tagline: "Autonomous scientific discovery across chemistry and materials science",
    description:
      "An agentic AI system that formulates hypotheses, designs experiments, interprets results, and generates novel chemical insights autonomously. Operates across molecular dynamics, materials discovery, and drug design.",
    color: "oklch(0.75 0.15 290)",
    coverImage: "/paintings/breakthrough-morbius.jpg",
    capabilities: [
      "Hypothesis generation from literature and experimental data",
      "Automated experiment design and protocol generation",
      "Real-time result interpretation with causal reasoning",
      "Novel molecular candidate synthesis pathways",
    ],
    metrics: [
      { label: "Discovery Success Rate", value: "43%" },
      { label: "Avg. Experiment Cycles", value: "12.4" },
      { label: "Domains Covered", value: "3" },
    ],
  },
  {
    id: "prometheus",
    name: "Prometheus",
    tagline: "Agentic research system for deep literature analysis and insight generation",
    description:
      "A long-horizon reasoning engine that reads scientific literature, extracts causal mechanisms, synthesizes insights across disciplines, and generates research proposals. Built for researchers who need to navigate vast knowledge graphs.",
    color: "oklch(0.72 0.18 45)",
    coverImage: "/paintings/breakthrough-prometheus.jpg",
    capabilities: [
      "Cross-disciplinary literature synthesis",
      "Causal mechanism extraction from papers",
      "Research gap identification and proposal generation",
      "Citation network analysis and relevance ranking",
    ],
    metrics: [
      { label: "Papers Analyzed", value: "2.4M+" },
      { label: "Insight Precision", value: "91%" },
      { label: "Time Saved vs Manual", value: "85%" },
    ],
  },
  {
    id: "parallax",
    name: "Parallax",
    tagline: "Quantitative research and portfolio optimization under uncertainty",
    description:
      "A formal reasoning system for financial research, combining causal inference, stochastic modeling, and portfolio theory. Designed for quantitative analysts who need rigorous, auditable decision frameworks.",
    color: "oklch(0.70 0.16 200)",
    coverImage: "/paintings/breakthrough-parallax.jpg",
    capabilities: [
      "Causal inference from market and economic data",
      "Multi-horizon portfolio optimization",
      "Risk decomposition and attribution analysis",
      "Scenario generation and stress testing",
    ],
    metrics: [
      { label: "Sharpe Ratio (backtest)", value: "2.14" },
      { label: "Drawdown Control", value: "< 12%" },
      { label: "Signal Latency", value: "< 50ms" },
    ],
  },
  {
    id: "aethel",
    name: "Aethel",
    tagline: "Foundation model built to reason like a scientist",
    description:
      "A ~1 trillion parameter Mixture-of-Experts architecture with native fluency across molecular structures, biological sequences, crystallographic data, and scientific imaging. Built to operate in iterative research loops, not answer single-shot questions.",
    color: "oklch(0.73 0.17 280)",
    coverImage: "/paintings/breakthrough-aethel.jpg",
    capabilities: [
      "Multimodal understanding: molecules, sequences, images, text",
      "Iterative reasoning: propose → observe → reason → revise",
      "Expert routing across 5 scientific domains",
      "22B active parameters per query from ~1T total",
    ],
    metrics: [
      { label: "Scientific Domains", value: "5" },
      { label: "Modalities", value: "6" },
      { label: "Active Parameters", value: "~22B" },
    ],
  },
];

// ── Books Data ─────────────────────────────────────────────────────────────
interface Book {
  title: string;
  subtitle: string;
  authors: string;
  venue: string;
  year: string;
  link: string;
  tags: string[];
  color: string;
  coverImage: string;
}

const FEATURED_BOOKS: Book[] = [
  {
    title: "Stochastic Minds",
    subtitle: "Math, Models, and the Beautiful Chaos of Getting It Almost Right",
    authors: "OrbitIQ Labs Founder",
    venue: "Amazon Publishing",
    year: "2024",
    link: "https://www.amazon.com/Stochastic-Minds-Beautiful-Getting-Intelligence/dp/B0GQM2DG96",
    tags: ["Probability", "Machine Learning", "Philosophy of Math"],
    color: "oklch(0.75 0.15 290)",
    coverImage: coverStochasticMinds,
  },
  {
    title: "Stochastic Futures",
    subtitle: "Agents, AGI, and the Mathematics of Control",
    authors: "OrbitIQ Labs Founder",
    venue: "Amazon Publishing",
    year: "2024",
    link: "https://www.amazon.com/Stochastic-Futures-Mathematics-Control-Intelligence/dp/B0GQGHQTHB",
    tags: ["AGI", "Control Theory", "Autonomous Agents"],
    color: "oklch(0.72 0.18 45)",
    coverImage: coverStochasticFutures,
  },
  {
    title: "The Fixed Point",
    subtitle: "How Metacognition Generates Thought and Builds the Self",
    authors: "OrbitIQ Labs Founder",
    venue: "Amazon Publishing",
    year: "2024",
    link: "https://www.amazon.com/dp/B0H2Y3JHWD",
    tags: ["Metacognition", "Consciousness", "Cognitive Science"],
    color: "oklch(0.70 0.16 200)",
    coverImage: coverFixedPoint,
  },
  {
    title: "The Cascade",
    subtitle: "A Network Science Autopsy of History's Most Enigmatic Collapse",
    authors: "OrbitIQ Labs Founder",
    venue: "Amazon Publishing",
    year: "2024",
    link: "https://www.amazon.com/Cascade-Network-Historys-Enigmatic-Collapse/dp/B0H2XRBHPD",
    tags: ["Network Science", "Complex Systems", "History"],
    color: "oklch(0.74 0.13 300)",
    coverImage: coverTheCascade,
  },
];

// ── Selected Publications Data ─────────────────────────────────────────────
interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link: string;
  tags: string[];
  color: string;
}

const FEATURED_PUBLICATIONS: Publication[] = [
  {
    title: "A Geometric Analysis of Quantum-Inspired Local Tensor Regression",
    authors: "OrbitIQ Labs Research",
    venue: "Research Square · Preprint",
    year: "2025",
    link: "https://www.researchsquare.com/article/rs-7917214/v1",
    tags: ["Quantum-Inspired ML", "Tensor Methods"],
    color: "oklch(0.75 0.15 290)",
  },
  {
    title: "AMODO-EO: Adaptive Objective Discovery in Multi-Objective Drug Optimization",
    authors: "OrbitIQ Labs Research",
    venue: "ChemRxiv",
    year: "2025",
    link: "https://chemrxiv.org/doi/full/10.26434/chemrxiv-2025-rjhxn",
    tags: ["Drug Discovery", "Multi-Objective Optimization"],
    color: "oklch(0.72 0.18 45)",
  },
  {
    title:
      "Transformer-Augmented Deep RL for Fault-Tolerant Autonomous Navigation in Aerospace Robotics",
    authors: "Rai, S. et al.",
    venue: "INJOERE",
    year: "2024",
    link: "https://injoere.com/index.php/injoere/article/view/1185",
    tags: ["Reinforcement Learning", "Aerospace"],
    color: "oklch(0.70 0.16 200)",
  },
  {
    title:
      "Graph Data Science Framework to Aid Auditory and Speech Impaired Individuals",
    authors: "Rai, S. et al.",
    venue: "Scientific Reports",
    year: "2024",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:_kc_bZDykSQC",
    tags: ["Graph Data Science", "Accessibility"],
    color: "oklch(0.73 0.17 280)",
  },
  {
    title: "Sentiment Analysis Using Machine Learning Classifiers: Evaluation of Performance",
    authors: "Rai, S. et al.",
    venue: "IEEE Conference",
    year: "2023",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:W7OEmFMy1HYC",
    tags: ["Machine Learning", "NLP"],
    color: "oklch(0.72 0.15 160)",
  },
  {
    title: "Intelligent Framework for Early Prediction of Type-II Diabetes using Palm Print Analysis",
    authors: "Rai, S. et al.",
    venue: "Medical Imaging Journal",
    year: "2024",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:3fE2CSJIrl8C",
    tags: ["Medical AI", "Computer Vision"],
    color: "oklch(0.71 0.14 320)",
  },
];

// ── Latest News Data ───────────────────────────────────────────────────────
interface NewsItem {
  date: string;
  title: string;
  summary: string;
  thumbnail: string;
  category: string;
  link: string;
}

const LATEST_NEWS: NewsItem[] = [
  {
    date: "August 2026",
    title: "Autonomous AI Labs Are Compressing Drug Discovery Timelines From Years to Months",
    summary:
      "Self-driving laboratories — closed-loop systems that fuse generative AI, robotics, and automated experimentation — are moving from research curiosity to funded infrastructure, with some programs now taking AI-designed candidates from discovery to first-in-human trials in under two years.",
    thumbnail: "/paintings/news-autonomous-labs.jpg",
    category: "Autonomous Discovery",
    link: "/news/autonomous-drug-discovery",
  },
  {
    date: "August 2026",
    title: "Multimodal Foundation Models Move From Narrow Tools to General-Purpose Scientific Reasoning Systems",
    summary:
      "Research institutions are shifting away from single-purpose machine learning models toward multimodal foundation models that unify structure, sequence, imaging, and text into one representation — a pattern now visible across materials science, molecular biology, and cell biology alike.",
    thumbnail: "/paintings/news-foundation-models.jpg",
    category: "Foundation Models",
    link: "/news/multimodal-foundation-models-science",
  },
  {
    date: "August 2026",
    title: "Long-Horizon Reasoning Is Still Agentic AI's Hardest Problem",
    summary:
      "As agentic systems get deployed against real scientific workflows, new benchmarks converge on the same finding: agents that perform well on general browsing and coding tasks fall apart the moment a task requires sustained, multi-step reasoning over dozens of interdependent steps.",
    thumbnail: "/paintings/news-agentic-reasoning.jpg",
    category: "Agentic Systems",
    link: "/news/agentic-long-horizon-reasoning",
  },
  {
    date: "August 2026",
    title: "Causal Inference Emerges as Quant Finance's Next Frontier for Factor Investing",
    summary:
      "After decades of correlation-driven models, quantitative finance is absorbing causal inference methods at scale — from factor investing to portfolio risk to bankruptcy prediction — with the National Bureau of Economic Research treating it as a core methodological shift.",
    thumbnail: "/paintings/news-causal-finance.jpg",
    category: "Quantitative Research",
    link: "/news/causal-inference-quant-finance",
  },
];

// ── From the Lab Stories ───────────────────────────────────────────────────
interface LabStory {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

const LAB_STORIES: LabStory[] = [
  {
    id: "training-aethel",
    title: "Training Aethel: Building a Foundation Model for Science",
    excerpt:
      "The architecture decisions, data curation strategies, and training dynamics behind Aethel — our 1 trillion parameter scientific reasoning model.",
    date: "February 2025",
  },
  {
    id: "morbius-first-discovery",
    title: "Morbius' First Autonomous Discovery",
    excerpt:
      "How our agentic system independently formulated a novel hypothesis about catalyst behavior and designed the experiments to validate it.",
    date: "January 2025",
  },
  {
    id: "building-prometheus",
    title: "Building Prometheus: An Agentic Research Assistant",
    excerpt:
      "The technical challenges of creating a long-horizon reasoning system that reads, synthesizes, and generates research insights from millions of papers.",
    date: "December 2024",
  },
  {
    id: "parallax-portfolio-theory",
    title: "Rethinking Portfolio Theory with Causal Inference",
    excerpt:
      "Why traditional mean-variance optimization fails under regime shifts, and how Parallax uses causal graphs to build robust strategies.",
    date: "November 2024",
  },
];

// ── Components ─────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative border-b border-border pb-20 pt-32 lg:pb-32 lg:pt-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            <span className="label-mono text-violet-400">Research</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.04em]">
            We work on some of the most{" "}
            <span className="italic text-violet-400">complex and interesting challenges</span> in
            AI
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
            From autonomous scientific discovery to foundation models trained on molecular
            structures, our research pushes the boundaries of what AI systems can reason about,
            discover, and create.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function BreakthroughsSection() {
  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="rule-ornament w-12" />
            <h2 className="font-display text-2xl font-light tracking-tight">Breakthroughs</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {BREAKTHROUGHS.map((breakthrough, i) => (
            <Reveal key={breakthrough.id} delay={(i % 2) * 90}>
              <Link
                to={`/research/${breakthrough.id}`}
                className="group block overflow-hidden rounded-2xl border border-border/60 bg-surface/20 transition-all hover:-translate-y-1 hover:border-border hover:shadow-2xl"
              >
                {/* Cover Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={breakthrough.coverImage}
                    alt={`${breakthrough.name} breakthrough visualization`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: breakthrough.color }}
                    />
                    <h3
                      className="font-display text-2xl font-light tracking-tight transition-colors"
                      style={{ color: breakthrough.color }}
                    >
                      {breakthrough.name}
                    </h3>
                  </div>

                  <p className="mt-3 font-light leading-snug text-muted-foreground">
                    {breakthrough.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                    {breakthrough.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 space-y-2">
                    {breakthrough.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: breakthrough.color }}
                        />
                        <span className="text-xs leading-relaxed text-muted-foreground">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="mt-6 flex gap-6 border-t border-border/40 pt-6">
                    {breakthrough.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p
                          className="font-display text-xl font-light"
                          style={{ color: breakthrough.color }}
                        >
                          {metric.value}
                        </p>
                        <p className="label-mono mt-0.5 text-[9px]">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-transform group-hover:translate-x-1">
                    <span style={{ color: breakthrough.color }}>Learn More</span>
                    <ArrowRight className="h-3 w-3" style={{ color: breakthrough.color }} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PublicationsSection() {
  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="rule-ornament w-12" />
              <h2 className="font-display text-2xl font-light tracking-tight">Publications</h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Link
              to="/publications"
              className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-violet-400 transition-all hover:gap-3"
            >
              View All Publications
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Books Section */}
        <div className="mt-12">
          <Reveal>
            <h3 className="label-mono mb-6">Books · IV Volumes</h3>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_BOOKS.map((book, i) => (
              <Reveal key={i} delay={i * 60}>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-xl border border-border/60 bg-surface/20 transition-all hover:-translate-y-1 hover:border-border hover:bg-surface/30"
                >
                  {/* Book Cover */}
                  <div className="aspect-[3/4] overflow-hidden bg-surface/40">
                    <img
                      src={book.coverImage}
                      alt={`${book.title} cover`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h4 className="font-display line-clamp-2 text-base font-light leading-snug tracking-tight transition-colors group-hover:text-accent">
                      {book.title}
                    </h4>
                    <p className="mt-1 text-xs italic text-muted-foreground line-clamp-2">
                      {book.subtitle}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {book.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded border px-2 py-0.5 font-mono text-[7px] uppercase tracking-wider"
                          style={{
                            borderColor: `color-mix(in oklab, ${book.color} 25%, transparent)`,
                            color: book.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest transition-transform group-hover:translate-x-0.5">
                      <span style={{ color: book.color }}>Read on Amazon</span>
                      <ExternalLink className="h-3 w-3" style={{ color: book.color }} />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Papers Section */}
        <div className="mt-16">
          <Reveal>
            <h3 className="label-mono mb-6">Papers</h3>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PUBLICATIONS.map((pub, i) => (
              <Reveal key={i} delay={(i % 3) * 60}>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-xl border border-border/60 bg-surface/20 p-6 transition-all hover:-translate-y-1 hover:border-border hover:bg-surface/30"
                >
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="label-mono">{pub.venue}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{pub.year}</span>
                  </div>

                  <h4 className="font-display mt-4 line-clamp-2 text-base font-light leading-snug tracking-tight transition-colors group-hover:text-accent">
                    {pub.title}
                  </h4>

                  <p className="mt-2 text-xs text-muted-foreground">{pub.authors}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider"
                        style={{
                          borderColor: `color-mix(in oklab, ${pub.color} 25%, transparent)`,
                          color: pub.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest transition-transform group-hover:translate-x-0.5">
                    <span style={{ color: pub.color }}>Read Paper</span>
                    <ExternalLink className="h-3 w-3" style={{ color: pub.color }} />
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

function LatestNewsSection() {
  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="rule-ornament w-12" />
            <h2 className="font-display text-2xl font-light tracking-tight">Latest News</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {LATEST_NEWS.map((news, i) => (
            <Reveal key={i} delay={(i % 2) * 80}>
              <Link
                to={news.link}
                className="group block overflow-hidden rounded-2xl border border-border/60 bg-surface/20 transition-all hover:-translate-y-1 hover:border-border hover:shadow-xl"
              >
                {/* Thumbnail */}
                <div className="aspect-[21/9] overflow-hidden bg-surface/40">
                  <img
                    src={news.thumbnail}
                    alt={news.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[10px]">
                    <span className="label-mono text-violet-400">{news.category}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{news.date}</span>
                  </div>

                  <h4 className="font-display mt-3 text-lg font-light leading-snug tracking-tight transition-colors group-hover:text-accent">
                    {news.title}
                  </h4>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {news.summary}
                  </p>

                  <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-violet-400 transition-transform group-hover:translate-x-1">
                    Learn More
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FromTheLabSection() {
  const [playingVideo, setPlayingVideo] = React.useState(false);

  return (
    <section className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="rule-ornament w-12" />
            <h2 className="font-display text-2xl font-light tracking-tight">From the Lab</h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Behind-the-scenes stories, technical deep dives, and insights from our research team.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[400px_1fr]">
          {/* Left: Story List - Below video on mobile, left sidebar on desktop */}
          <Reveal delay={120} className="order-2 lg:order-1">
            <div className="space-y-6">
              {LAB_STORIES.map((story, i) => (
                <Link
                  key={story.id}
                  to={`/research/lab/${story.id}`}
                  className="group block border-b border-border/40 pb-6 transition-colors last:border-0 hover:border-border"
                >
                  <span className="label-mono text-[9px] text-violet-400">{story.date}</span>
                  <h4 className="font-display mt-2 text-base font-light leading-snug tracking-tight transition-colors group-hover:text-accent">
                    {story.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {story.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-violet-400 transition-transform group-hover:translate-x-1">
                    Read Story
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Right: Featured Video - Full width on mobile, right side on desktop */}
          <Reveal delay={200} className="order-1 lg:order-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/60 bg-surface/40">
              {!playingVideo ? (
                <>
                  <img
                    src="/paintings/youtube-preview.png"
                    alt="CASML 2025 Conference Presentation"
                    className="h-full w-full object-cover"
                  />
                  {/* Video play overlay - smaller button on mobile, positioned lower */}
                  <button
                    onClick={() => setPlayingVideo(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all hover:bg-black/30"
                    aria-label="Play video"
                  >
                    {/* Small play button on mobile (bottom-right), larger on desktop (center) */}
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm transition-transform hover:scale-110 md:static md:h-16 md:w-16">
                      <div className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white md:border-y-[9px] md:border-l-[16px]" />
                    </div>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                    <span className="label-mono text-[8px] text-violet-400 md:text-[9px]">Featured Talk · CASML 2025</span>
                    <p className="font-display mt-1 text-sm font-light text-white md:text-lg">
                      A Geometric Analysis of Quantum-Inspired Local Tensor Regression
                    </p>
                  </div>
                </>
              ) : (
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/cNUEQqaj_es?autoplay=1"
                  title="CASML 2025 Conference Presentation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export function ResearchPage() {
  return (
    <>
      <Hero />
      <BreakthroughsSection />
      <PublicationsSection />
      <LatestNewsSection />
      <FromTheLabSection />
    </>
  );
}
