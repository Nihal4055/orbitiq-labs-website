import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { ArrowLeft } from "lucide-react";

const TITLE =
  "Multimodal Foundation Models for Scientific Reasoning — OrbitIQ Labs Research News";

export const Route = createFileRoute("/news/multimodal-foundation-models-science")({
  head: () => ({
    meta: [{ title: TITLE }],
  }),
  component: NewsArticle,
});

function NewsArticle() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <article className="border-b border-border pb-20 pt-32 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-[800px] px-6 lg:px-10">
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
              <span className="label-mono text-violet-400">Foundation Models</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">August 2026</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display mt-4 text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.03em]">
              Multimodal Foundation Models Move From Narrow Tools to General-Purpose Scientific
              Reasoning Systems
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-xl font-light leading-relaxed text-muted-foreground">
              Research institutions are shifting away from single-purpose machine learning models
              toward multimodal foundation models that unify structure, sequence, imaging, and text
              into one representation — a pattern now visible across materials science, molecular
              biology, and cell biology alike.
            </p>
          </Reveal>

          {/* Hero Image */}
          <Reveal delay={200}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border/60">
              <img
                src="/paintings/news-foundation-models.jpg"
                alt="Multimodal foundation models in science"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Article Content */}
          <div className="mt-16 space-y-8">
            <Reveal delay={240}>
              <section>
                <h2 className="font-display mb-6 text-2xl font-light tracking-tight">
                  The story
                </h2>
                <div className="space-y-6 text-[17px] leading-relaxed text-foreground/90">
                  <p>
                    Machine learning in the physical and life sciences has historically been narrow
                    by necessity: a model trained to predict one material property, or one class of
                    protein interaction, using one data modality. That is changing. Across materials
                    science, chemistry, and biology, research groups are converging on the same
                    architectural idea — train one foundation model on many modalities at once, and
                    let it transfer across tasks it was never explicitly trained for.
                  </p>

                  <p>
                    In materials science, researchers at MIT introduced MultiMat, a framework for
                    self-supervised multimodal training on data from the Materials Project database.
                    Rather than learning a single structure-to-property mapping, MultiMat trains
                    across multiple axes of material data simultaneously, and the resulting shared
                    representation space allows the model to screen for novel stable materials via
                    latent-space similarity — a capability that single-modality models don't have.
                    The approach achieved state-of-the-art results on established material-property
                    prediction benchmarks.
                  </p>

                  <p>
                    The pattern repeats in the life sciences at larger scale. A recent AWS overview
                    of multimodal biological foundation models (BioFMs) notes that current models
                    are already unevenly but broadly deployed: roughly 20% of applications
                    concentrate on protein structure and molecule design, 30% on omics data (DNA,
                    epigenetics, RNA), 15% on medical imaging, and 35% on clinical documentation.
                  </p>

                  <p>
                    Single-cell biology is undergoing a related shift, with a 2026 Cell Systems
                    perspective describing a move from modality-specific models toward
                    "compositional" foundation models that unify chromatin accessibility, protein
                    abundance, spatial transcriptomics, microscopy, and text annotations into one
                    cellular representation — explicitly framed as a response to the limits of
                    single-modality models trained in isolation.
                  </p>

                  <p>
                    Drug discovery is where the trend is most mature. A 2026 review in Molecular
                    Informatics describes how foundation and multimodal models are becoming core
                    methodology in molecular informatics: large-scale pretraining on chemical and
                    biological corpora now supports transfer learning across property prediction
                    (QSAR/ADMET), virtual screening, reactivity prediction, and generative molecular
                    design, with protein language models supplying structural context that
                    integrates directly with ligand-based multimodal pipelines.
                  </p>

                  <p>
                    The field has matured enough that ICML 2026 is hosting its third dedicated
                    workshop on multimodal foundation models for the life sciences — itself a signal
                    that this has moved from a handful of papers to an established subfield with its
                    own recurring venue. The common thread across materials, cell biology, and drug
                    discovery is the same: institutions are betting that one well-trained multimodal
                    model, adapted to a new task, will outperform a purpose-built single-modality
                    model trained from scratch.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal delay={280}>
              <section className="border-t border-border/40 pt-8">
                <h2 className="font-display mb-6 text-2xl font-light tracking-tight">
                  Key takeaways
                </h2>
                <div className="space-y-4">
                  {[
                    "MultiMat (MIT) demonstrates that self-supervised multimodal pretraining on materials data beats single-modality models on standard property-prediction benchmarks.",
                    "Multimodal biological foundation models already span protein design, omics, medical imaging, and clinical documentation, per an AWS applied-AI review.",
                    "Cell biology is moving toward “compositional” multimodal models that unify five or more distinct measurement types into one representation.",
                    "Molecular informatics research now treats multimodal pretraining as core methodology for drug discovery, not an experimental add-on.",
                    "ICML's third dedicated workshop on the topic (2026) signals the field has moved from novelty to established subfield.",
                  ].map((takeaway, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      <p className="text-[15px] leading-relaxed text-foreground/90">{takeaway}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={320}>
              <section className="border-t border-border/40 pt-8">
                <h2 className="font-display mb-6 text-2xl font-light tracking-tight">
                  References
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      text: "Cell Press (Newton) — “Multimodal foundation models for material property prediction and discovery” (Feb 2025).",
                      link: "https://www.cell.com/newton/fulltext/S2950-6360(25)00008-8",
                    },
                    {
                      text: "AWS Machine Learning Blog — “Applying multimodal biological foundation models across therapeutics and patient care” (Apr 2026).",
                      link: "https://aws.amazon.com/blogs/machine-learning/applying-multimodal-biological-foundation-models-across-therapeutics-and-patient-care/",
                    },
                    {
                      text: "Cell Systems — “From modality-specific to compositional foundation models for cell biology” (Feb 2026).",
                      link: "https://www.cell.com/cell-systems/abstract/S2405-4712(26)00016-5",
                    },
                    {
                      text: "Molecular Informatics (Wiley) — “Foundation and Multimodal Models for Drug Discovery in Molecular Informatics: Principles, Evaluation, and Practical Guidance” (2026).",
                      link: "https://onlinelibrary.wiley.com/doi/10.1002/minf.70027",
                    },
                    {
                      text: "ICML 2026 — “3rd Workshop on Multi-modal Foundation Models and Large Language Models for Life Sciences.”",
                      link: "https://icml2026fm4ls.github.io/index.html",
                    },
                  ].map((ref, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="label-mono shrink-0 text-violet-400">{i + 1}.</span>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {ref.text}{" "}
                        <a
                          href={ref.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-violet-400 underline decoration-violet-400/30 underline-offset-2 transition-colors hover:decoration-violet-400"
                        >
                          Read more →
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}