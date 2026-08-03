/**
 * Central product data. Powers both the compact showcase on the home page
 * and the full detail routes (/morbius, /prometheus, /parallax).
 */

export interface AgentStep {
  label: string;
  meta?: string;
}

export interface AgentSession {
  topic: string;
  query: string;
  steps: AgentStep[];
}

export interface ProductFeature {
  title: string;
  body: string;
  chips: string[];
}

export interface Product {
  slug: string;
  name: string;
  greek: string; // Greek epithet / motto
  tagline: string;
  summary: string; // short — home showcase
  body: string; // longer — detail hero
  status: string;
  live: boolean;
  colorVar: string; // css var reference
  capabilities: string[]; // 3 quick bullets for showcase
  metrics: { value: string; label: string }[];
  sessions: AgentSession[];
  features: ProductFeature[];
  closing: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "morbius",
    name: "Morbius",
    greek: "Ἐπιστήμη · Knowledge",
    tagline: "The Scientific Operating System for Autonomous Research",
    summary:
      "Morbius reads your literature, builds your knowledge graph, generates hypotheses, plans experiments, and writes alongside you — every claim traceable, every step transparent.",
    body: "Morbius doesn't just answer questions about your research — it ingests your literature, constructs a living knowledge graph, orchestrates a team of specialized agents, generates novel hypotheses, and drafts publication-ready output. All grounded in retrievable evidence.",
    status: "Live",
    live: true,
    colorVar: "var(--morbius)",
    capabilities: [
      "Ingests PDFs, arXiv, journals & lab data into structured knowledge",
      "Orchestrates 10 specialized research agents in parallel",
      "Every answer grounded in traceable, inspectable evidence",
    ],
    metrics: [
      { value: "10", label: "Research Agents" },
      { value: "210M+", label: "Papers Indexed" },
      { value: "<2s", label: "Ingestion" },
    ],
    sessions: [
      {
        topic: "Autonomous Discovery",
        query: "Map the landscape of agentic AI in drug discovery over the last 3 years",
        steps: [
          { label: "Scanning PubMed & arXiv corpus", meta: "14.2k sources" },
          { label: "Extracting entity & citation graph", meta: "8,841 edges" },
          { label: "Clustering by methodology", meta: "23 clusters" },
          { label: "Identifying knowledge gaps & contradictions" },
          { label: "Generating hypothesis candidates" },
          { label: "Composing synthesis report" },
        ],
      },
      {
        topic: "Literature Synthesis",
        query: "Trace the evolution of attention mechanisms and open problems",
        steps: [
          { label: "Resolving seminal papers & lineage", meta: "312 papers" },
          { label: "Building concept dependency graph", meta: "1,204 nodes" },
          { label: "Detecting contradictory findings", meta: "7 conflicts" },
          { label: "Ranking open research questions" },
          { label: "Drafting annotated review" },
        ],
      },
    ],
    features: [
      {
        title: "Literature Acquisition, Instantly Structured",
        body: "Import from PDF, arXiv, journals, technical reports, lecture recordings, or internal documents. Morbius understands them — extracting sections, tables, figures, equations, citations, and claims into structured scientific knowledge.",
        chips: ["PDF", "arXiv", "Journals", "Reports", "Lectures", "Internal docs"],
      },
      {
        title: "A Knowledge Graph That Never Forgets",
        body: "Every paper becomes part of a continuously expanding graph — linking authors, concepts, methods, datasets, and results. Your research memory compounds instead of resetting each session.",
        chips: ["Authors", "Concepts", "Methods", "Datasets", "Results"],
      },
      {
        title: "Ask Anything. Get Evidence, Not Guesses.",
        body: "Every Morbius answer is grounded in retrievable evidence — inspect the source paragraph, the figure, the citation, the confidence score.",
        chips: ["Source paragraph", "Figure", "Citation", "Confidence score"],
      },
      {
        title: "A Team of Agents, Not a Single Chatbot",
        body: "Morbius orchestrates specialized agents working together, the way a real research team would.",
        chips: ["Reviewer", "Planner", "Writer", "Statistician", "Hypothesis", "Auditor"],
      },
      {
        title: "From Question to Hypothesis, Autonomously",
        body: "Morbius identifies knowledge gaps, flags inconsistencies across your literature, and proposes novel hypotheses and experiments worth pursuing.",
        chips: ["Gap detected", "Contradiction", "Novel hypothesis", "Testable prediction"],
      },
      {
        title: "Publication Studio",
        body: "Your research becomes conference slides, a poster, an executive summary, teaching material, or a full manuscript draft — all grounded in your evidence graph.",
        chips: ["Slides", "Poster", "Summary", "Manuscript", "Podcast"],
      },
    ],
    closing: "Your literature review shouldn't take three weeks.",
  },
  {
    slug: "prometheus",
    name: "Prometheus",
    greek: "Πρόνοια · Foresight",
    tagline: "Agentic Intelligence for Life Sciences Research",
    summary:
      "An autonomous research partner for biology, genomics, and biomedical discovery — reasoning across experimental data, literature, and lab protocols the way a domain expert would.",
    body: "Prometheus reasons across genomic, transcriptomic, and proteomic datasets alongside the published literature — designing experiments, flagging confounds, and moving hypotheses from computational reasoning to bench-ready plans with built-in safety awareness.",
    status: "In Beta",
    live: false,
    colorVar: "var(--prometheus)",
    capabilities: [
      "Reasons across multi-omics data and published literature",
      "Designs experiments, flags confounds, recommends controls",
      "Biosafety & research-ethics aware by construction",
    ],
    metrics: [
      { value: "3", label: "Omics Layers" },
      { value: "40+", label: "Protocol Types" },
      { value: "Beta", label: "Select Labs" },
    ],
    sessions: [
      {
        topic: "Genomics Research",
        query: "Identify novel therapeutic targets in BRCA1-mutated breast cancer pathways",
        steps: [
          { label: "Loading TCGA + GEO expression sets", meta: "4.2k samples" },
          { label: "Differential expression analysis", meta: "p < 0.001" },
          { label: "Cross-referencing interaction network", meta: "2,340 proteins" },
          { label: "Pathway enrichment scoring" },
          { label: "Ranking druggable candidates" },
          { label: "Literature validation pass" },
        ],
      },
      {
        topic: "Experiment Design",
        query: "Design a CRISPR knockout screen for autophagy regulators",
        steps: [
          { label: "Selecting guide library", meta: "18k gRNAs" },
          { label: "Power & replication analysis", meta: "3 replicates" },
          { label: "Flagging off-target confounds", meta: "12 flagged" },
          { label: "Emitting bench protocol" },
        ],
      },
    ],
    features: [
      {
        title: "Multi-Omics Reasoning",
        body: "Prometheus reasons across genomic, transcriptomic, and proteomic datasets alongside the published literature — connecting bench results to prior evidence automatically.",
        chips: ["Genomic", "Transcriptomic", "Proteomic", "Literature"],
      },
      {
        title: "Autonomous Experiment Design",
        body: "Given a research question, Prometheus proposes experimental designs, flags confounds, and recommends controls grounded in established biomedical methodology.",
        chips: ["Design", "Confound flagged", "Positive control", "Replication"],
      },
      {
        title: "Protocol & Lab Workflow Agent",
        body: "Converts experimental intent into structured wet-lab or dry-lab protocols, adaptable to your lab's existing equipment and reagent inventory.",
        chips: ["Intent", "Reagents matched", "Instrument constraints", "Protocol"],
      },
      {
        title: "Hypothesis-to-Bench Pipeline",
        body: "Moves a research hypothesis from computational reasoning to a bench-ready experimental plan, with built-in statistical power and validation checkpoints.",
        chips: ["Hypothesis", "Power analysis", "Checkpoint", "Bench-ready"],
      },
      {
        title: "Regulatory & Safety-Aware Reasoning",
        body: "Built-in awareness of biosafety and research-ethics considerations relevant to life-science experimentation, flagged proactively rather than after the fact.",
        chips: ["Biosafety level", "Ethics review", "Containment", "Proactive flagging"],
      },
    ],
    closing: "Prometheus is in closed beta with select research institutions.",
  },
  {
    slug: "parallax",
    name: "Parallax",
    greek: "Λόγος · Reason",
    tagline: "Agentic Intelligence for Quantitative Research",
    summary:
      "A research-grade multi-agent system for market analysis, strategy formation, and quantitative reasoning — built with the same evidentiary rigor we bring to scientific discovery.",
    body: "Parallax runs specialized agents for macro analysis, factor research, sentiment synthesis, and risk modeling on a single research thread. Every insight is traceable to its data source, every backtest self-critiqued for overfitting and regime-sensitivity.",
    status: "In Beta",
    live: false,
    colorVar: "var(--parallax)",
    capabilities: [
      "Multi-agent macro, factor, sentiment & risk reasoning",
      "Every signal traceable to filing, dataset or report",
      "Self-critiquing backtests flag overfit & regime risk",
    ],
    metrics: [
      { value: "4", label: "Agent Domains" },
      { value: "100%", label: "Traceable" },
      { value: "Beta", label: "Institutional" },
    ],
    sessions: [
      {
        topic: "Macro Finance",
        query: "Forecast US recession risk over the next 12 months",
        steps: [
          { label: "Pulling FRED macro indicators", meta: "38 series" },
          { label: "Engineering lag & spread features", meta: "121 features" },
          { label: "Training XGBoost + Bayesian model", meta: "AUC 0.94" },
          { label: "Backtesting 1990 – 2024" },
          { label: "Rendering probability timeline" },
        ],
      },
      {
        topic: "Factor Research",
        query: "Diagnose momentum factor decay across regimes",
        steps: [
          { label: "Constructing factor portfolios", meta: "12 deciles" },
          { label: "Regime segmentation", meta: "4 regimes" },
          { label: "Overfit & decay diagnostics", meta: "flagged" },
          { label: "Drafting reviewer-ready memo" },
        ],
      },
    ],
    features: [
      {
        title: "Multi-Agent Market Reasoning",
        body: "Specialized agents for macro, factor research, sentiment synthesis, and risk modeling collaborate on a single research thread — mirroring Morbius' architecture, applied to markets.",
        chips: ["Macro", "Factor", "Sentiment", "Risk"],
      },
      {
        title: "Evidence-Grounded Strategy Research",
        body: "Every generated insight is traceable to its underlying data source, filing, report, or dataset — no black-box signals.",
        chips: ["10-K", "Tick data", "Macro series", "Broker report", "Alt data"],
      },
      {
        title: "Autonomous Backtesting & Scenario Analysis",
        body: "Parallax proposes, runs, and critiques its own backtests — surfacing overfitting risk and regime-sensitivity automatically.",
        chips: ["Walk-forward", "Overfit risk", "Regime split", "Stress scenario"],
      },
      {
        title: "Narrative-to-Model Translation",
        body: "Converts qualitative market theses into structured, testable quantitative models — bridging discretionary and systematic research.",
        chips: ["Thesis", "Variables", "Specification", "Testable model"],
      },
      {
        title: "Institutional-Grade Audit Trail",
        body: "Every research conclusion is fully explainable and reproducible — built for institutions where \u201cwhy\u201d matters as much as \u201cwhat.\u201d",
        chips: ["Lineage", "Versioning", "Reproducible run", "Sign-off"],
      },
    ],
    closing: "Parallax is in closed beta with select institutional partners.",
  },
];

export function productBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
