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

/**
 * A single stage of a product's autonomous research loop. Rendered as a
 * sequential process (see DiscoveryLoop), not as a standalone feature card —
 * each stage is a step one system takes, not a separate tool.
 */
export interface DiscoveryStage {
  key: string;
  verb: string; // Ingest / Remember / Reason / Discover / Publish
  title: string;
  body: string;
  /** Optional second paragraph, for stages that carry the core claim. */
  extra?: string;
  /** Optional agent roster — only the stage that orchestrates agents. */
  roles?: { name: string; job: string }[];
  chips: string[];
  /** Marks the stage that should get the most visual weight on the page. */
  emphasis?: boolean;
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
  /** Flat feature list. Omit when `stages` is set — the loop replaces it. */
  features?: ProductFeature[];
  closing: string;

  /* ---- optional: positioning-led detail page ---------------------------- */
  /** Hero H1. When set, the product name renders as an eyebrow above it. */
  headline?: string;
  /** Hero sub-headline paragraph, replaces tagline + body in the hero. */
  subheadline?: string;
  /** Overrides tagline for meta description / og:description. */
  metaDescription?: string;
  /** When set, the loop replaces the flat feature panel list. */
  loopHeader?: string;
  loopIntro?: string;
  stages?: DiscoveryStage[];
  /** Short positioning paragraph rendered after the loop. */
  differentiator?: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "morbius",
    name: "Morbius",
    greek: "Ἐπιστήμη · Knowledge",
    tagline: "An AI Co-Scientist for autonomous scientific discovery",
    headline: "An AI Co-Scientist for Autonomous Discovery.",
    subheadline:
      "Morbius doesn't just summarize your literature or suggest an idea. It ingests evidence, builds lasting research memory, reasons over it, and autonomously generates and tests hypotheses — closing the loop from raw literature to verified, citable output.",
    metaDescription:
      "Morbius is an AI Co-Scientist that drives autonomous scientific discovery — from literature to verified, testable, publication-ready output, run end-to-end with minimal human input.",
    summary:
      "An AI Co-Scientist that runs the research loop end-to-end: ingesting evidence, holding it in persistent memory, reasoning over it, generating and testing hypotheses, and composing verified output.",
    body: "Morbius runs the full research loop with minimal human input — ingesting evidence, holding it in a persistent knowledge graph, orchestrating specialized agents to generate and test hypotheses, and composing findings that survive verification into publication-ready output.",
    status: "Live",
    live: true,
    colorVar: "var(--morbius)",
    capabilities: [
      "Runs the full loop: ingest → remember → reason → discover → publish",
      "Ten specialized agents generate, test, and audit hypotheses in parallel",
      "Every claim traces to a source paragraph, figure, and confidence score",
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
    loopHeader: "How Morbius Discovers",
    loopIntro:
      "Discovery is not a feature set. It is a loop — and Morbius runs every stage of it as one continuous process, carrying the output of each stage forward as the input to the next.",
    stages: [
      {
        key: "ingest",
        verb: "Ingest",
        title: "Evidence in, structure out.",
        body: "Morbius takes in PDFs, arXiv preprints, journal articles, technical reports, lecture recordings, and internal lab documents, then decomposes them. Sections, tables, figures, equations, citations, and individual claims are extracted and typed, so every later stage reasons over structured scientific evidence rather than undifferentiated text.",
        chips: ["PDF", "arXiv", "Journals", "Reports", "Lectures", "Internal docs"],
      },
      {
        key: "remember",
        verb: "Remember",
        title: "Research memory that compounds instead of resetting.",
        body: "Each ingested source is written into a persistent graph linking authors, concepts, methods, datasets, and results. This is the Co-Scientist's long-term memory: evidence read months ago remains available and, more importantly, remains connected. Context accumulates across sessions rather than being rebuilt from scratch in every conversation.",
        chips: ["Authors", "Concepts", "Methods", "Datasets", "Results", "Persistent"],
      },
      {
        key: "reason",
        verb: "Reason",
        title: "Grounded inference — the substrate, not the destination.",
        body: "Questions resolve against the graph, and every claim returns with its provenance: the source paragraph, the figure it came from, the citation, a confidence score. This stage exists to make the next one trustworthy. Hypotheses are only worth testing if the evidence they rest on can be inspected and challenged.",
        chips: ["Source paragraph", "Figure", "Citation", "Confidence score", "Provenance"],
      },
      {
        key: "discover",
        verb: "Discover",
        title: "Where the loop closes — hypotheses generated, then tested.",
        emphasis: true,
        body: "This is the core engine. Morbius runs ten specialized agents in parallel rather than prompting a single model repeatedly. Together they read the graph for structural weaknesses — where the literature contradicts itself, where a method has never been applied to the dataset that would test it, where a conclusion rests on one unreplicated study — and turn each into a candidate hypothesis with a design capable of falsifying it.",
        extra:
          "The loop advances without a human prompting each step. Hypotheses that fail the audit stage are discarded by Morbius rather than surfaced for a researcher to catch, so what reaches you has already survived internal scrutiny: a testable prediction, the experiment or analysis that would discriminate it from the alternatives, and the evidence trail behind both.",
        roles: [
          {
            name: "Reviewer",
            job: "Audits the evidence base for gaps, weak support, and contradiction.",
          },
          {
            name: "Hypothesis",
            job: "Proposes candidate explanations for what the graph leaves unresolved.",
          },
          {
            name: "Planner",
            job: "Designs the experiment or analysis that would discriminate between them.",
          },
          {
            name: "Statistician",
            job: "Specifies power, controls, and the result that would falsify the claim.",
          },
          {
            name: "Writer",
            job: "Renders reasoning and outcomes into reviewable scientific prose.",
          },
          {
            name: "Auditor",
            job: "Checks every surviving conclusion back against its source evidence.",
          },
        ],
        chips: [
          "Gap detected",
          "Contradiction",
          "Novel hypothesis",
          "Testable prediction",
          "Falsification check",
        ],
      },
      {
        key: "publish",
        verb: "Publish",
        title: "Verified findings, rendered publication-ready.",
        body: "Findings that survive verification are composed into output: a manuscript draft, conference slides, a poster, an executive summary, teaching material. Citations resolve back to the graph entries that produced them, so every claim and figure in the export remains traceable to the evidence it came from.",
        chips: ["Manuscript", "Slides", "Poster", "Summary", "Teaching material"],
      },
    ],
    differentiator:
      "Most AI research tools stop at one part of this loop — summarizing papers, or answering questions, or proposing an idea for a human to validate. Morbius is built to run the entire loop autonomously, closing the gap between a plausible answer and a verified one. That gap — not raw language ability — is what separates AI-assisted research from AI-driven discovery.",
    closing: "Discovery is a loop. Morbius runs all of it.",
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
