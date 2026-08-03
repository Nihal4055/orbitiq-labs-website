import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { ArrowLeft } from "lucide-react";

const TITLE = "Autonomous AI Labs Compress Drug Discovery Timelines — OrbitIQ Labs Research News";

export const Route = createFileRoute("/news/autonomous-drug-discovery")({
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
              <span className="label-mono text-violet-400">Autonomous Discovery</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">August 2026</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display mt-4 text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.03em]">
              Autonomous AI Labs Are Compressing Drug Discovery Timelines From Years to Months
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-xl font-light leading-relaxed text-muted-foreground">
              Self-driving laboratories — closed-loop systems that fuse generative AI, robotics,
              and automated experimentation — are moving from research curiosity to funded
              infrastructure, with some programs now taking AI-designed candidates from discovery
              to first-in-human trials in under two years.
            </p>
          </Reveal>

          {/* Hero Image */}
          <Reveal delay={200}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border/60">
              <img
                src="/paintings/news-autonomous-labs.jpg"
                alt="Autonomous drug discovery laboratory"
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
                    For most of drug discovery's history, the design-make-test-learn cycle has been
                    the rate-limiting step: a hypothesis is proposed, a compound synthesized, an
                    assay run, and the results fed back into the next round of design — a loop that
                    has traditionally taken months per iteration. That loop is now being automated
                    end-to-end.
                  </p>

                  <p>
                    The clearest signal is the scale of capital moving into the space. Lila
                    Sciences, launched by Flagship Pioneering in March 2025 with $200 million in
                    seed funding, is building what it calls "AI Science Factories" — robotic,
                    closed-loop laboratories where specialized AI models plan and execute
                    experiments across biology, chemistry, and materials science with minimal human
                    intervention.
                  </p>

                  <p>
                    The company raised a $235 million Series A in September 2025, followed a month
                    later by an additional $115 million from investors including Nvidia's venture
                    arm, pushing its valuation past $1.3 billion and total funding to $550 million.
                    Lila has since signed a long-term lease for a 244,000-square-foot facility at
                    IQHQ's Alewife Park life sciences district in Cambridge, Massachusetts, and
                    plans to open the platform to commercial partners in drug development, energy,
                    and semiconductors.
                  </p>

                  <p>
                    On the clinical side, Iambic Therapeutics reported early clinical activity at
                    ESMO 2025 for an AI-designed HER2 inhibitor that moved from discovery to
                    first-in-human dosing in under two years — a timeline that would have been
                    unusual for a conventionally designed candidate. More broadly, dozens of
                    AI-designed drug candidates have now entered clinical trials, a sharp contrast
                    to 2020, when essentially none had reached human testing.
                  </p>

                  <p>
                    The acceleration isn't confined to a handful of flagship companies. A World
                    Economic Forum-recognized collaboration between SandboxAQ and UCSF's Institute
                    for Neurodegenerative Diseases used large quantitative AI models to compress
                    neurodegenerative disease research timelines from years to months, work
                    highlighted as part of the WEF's MINDS programme at AMNC 2025. And the
                    competitive landscape has globalized: AI-focused biotechs in China accounted for
                    nearly a third of global licensing deal value in AI-driven drug discovery in the
                    first quarter of 2025 alone.
                  </p>

                  <p>
                    Underneath the funding and clinical headlines is a genuine architectural shift.
                    Newer multi-agent systems — coordinating a "Literature Reader," "Experiment
                    Designer," and "Robot Operator" as distinct AI agents — are being used to run
                    chemical research largely on demand, with self-driving labs increasingly treated
                    as core R&D infrastructure rather than pilot projects. The main constraint
                    researchers now point to isn't robotics or model capability, but data:
                    proprietary datasets remain siloed across institutions, and closing that gap is
                    seen as the next bottleneck to further acceleration.
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
                    "Lila Sciences has raised $550M total (as of October 2025) to build robotic “AI Science Factories” spanning biology, chemistry, and materials science.",
                    "Iambic Therapeutics took an AI-designed HER2 inhibitor from discovery to first-in-human trials in under two years.",
                    "China-based AI biotechs captured nearly one-third of global AI drug-discovery licensing deal value in Q1 2025.",
                    "SandboxAQ and UCSF compressed neurodegenerative disease research timelines from years to months using large quantitative AI models.",
                    "Data siloing — not robotics or model quality — is emerging as the primary bottleneck to further acceleration.",
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
                      text: "BiopharmaTrend — “AI-driven Companies Creating Next Gen Infrastructure for Automated Drug Discovery” (Nov 2025).",
                      link: "https://www.biopharmatrend.com/next-gen-tools/remote-labs-are-coming-of-age-501/",
                    },
                    {
                      text: "World Economic Forum — “Using large quantitative models and AI in drug discovery” (Dec 2025).",
                      link: "https://www.weforum.org/stories/2025/12/large-quantitative-models-how-ai-is-accelerating-drug-discovery/",
                    },
                    {
                      text: "ScienceDirect — “Leading artificial intelligence–driven drug discovery platforms: 2025 landscape and global outlook.”",
                      link: "https://www.sciencedirect.com/science/article/abs/pii/S0031699725075118",
                    },
                    {
                      text: "OAE Publishing — “Artificial intelligence-driven autonomous laboratory for accelerating chemical discovery” (Sep 2025).",
                      link: "https://www.oaepublish.com/articles/cs.2025.66",
                    },
                    {
                      text: "arXiv — “Accelerating drug discovery with Artificial: a whole-lab orchestration and scheduling system for self-driving labs” (Apr 2025).",
                      link: "https://arxiv.org/html/2504.00986",
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