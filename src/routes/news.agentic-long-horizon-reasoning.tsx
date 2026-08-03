import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { ArrowLeft } from "lucide-react";

const TITLE = "Long-Horizon Reasoning in Agentic AI — OrbitIQ Labs Research News";

export const Route = createFileRoute("/news/agentic-long-horizon-reasoning")({
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
              <span className="label-mono text-violet-400">Agentic Systems</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">August 2026</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display mt-4 text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.03em]">
              Long-Horizon Reasoning Is Still Agentic AI's Hardest Problem — New Benchmarks Show
              How Far Research Agents Have to Go
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-xl font-light leading-relaxed text-muted-foreground">
              As agentic systems get deployed against real scientific workflows, a wave of new
              benchmarks is converging on the same finding: agents that perform well on general
              browsing and coding tasks fall apart the moment a task requires sustained, multi-step
              reasoning over dozens of interdependent steps.
            </p>
          </Reveal>

          {/* Hero Image */}
          <Reveal delay={200}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border/60">
              <img
                src="/paintings/news-agentic-reasoning.jpg"
                alt="Long-horizon reasoning in agentic AI systems"
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
                    Long-horizon reasoning — the ability of an AI agent to plan, act, observe, and
                    revise a strategy coherently across dozens or hundreds of steps — has become
                    one of the most closely watched open problems in agentic AI research, precisely
                    because it is the capability that separates a useful research assistant from a
                    system that can only handle short, well-scoped tasks.
                  </p>

                  <p>
                    The clearest evidence comes from AutoResearchBench, a 2026 benchmark built over
                    more than three million arXiv papers to test whether agents can conduct
                    open-ended scientific literature discovery — deciding what to search for, when
                    to stop, and when to abstain because no answer exists. Frontier models that
                    perform strongly on general-purpose browsing benchmarks like BrowseComp collapse
                    on this task: the best systems achieve only 9.39% accuracy on the benchmark's
                    "Deep Research" track and 9.31% on its "Wide Research" track, with many strong
                    baselines scoring below 5%.
                  </p>

                  <p>
                    The authors describe this as a distinct capability gap that general browsing
                    benchmarks simply don't capture.
                  </p>

                  <p>
                    Related work on WebAnchor identifies a specific failure mechanism: the first
                    step of a long-horizon plan carries disproportionate weight. An error in that
                    first planning step can reduce an agent's success rate by up to 30 percentage
                    points downstream, because the agent has no reliable mechanism for detecting and
                    recovering from an early misstep. A proposed fix — anchoring reinforcement
                    learning rewards specifically to the quality of the first plan step —
                    outperforms uniform reward strategies, but remains a research mitigation rather
                    than a solved problem.
                  </p>

                  <p>
                    Architecture-level work tells a similar story. COMPASS, a hierarchical agent
                    design that separates context curation, strategic meta-thinking, and tactical
                    execution into distinct components, shows gains of up to 20 percentage points on
                    long-horizon tasks — but ablation studies show that removing either the context
                    manager or the meta-thinking layer causes the agent to fall back into blind
                    repetition or runaway token usage.
                  </p>

                  <p>
                    Separately, CubeBench finds that agents struggle to maintain or reconstruct a
                    global sense of state from partial observations, even in deterministic,
                    single-object tasks — a memory and perception bottleneck that shows up well
                    before an agent even reaches the reasoning-heavy part of a task. The current
                    benchmark landscape doesn't support a narrative of agentic systems having
                    "mastered" long-horizon scientific reasoning. Long-horizon coherence remains the
                    central open problem in agentic AI research right now.
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
                    "AutoResearchBench shows frontier agents scoring under 10% on open-ended scientific literature research, despite strong performance on general web-browsing benchmarks.",
                    "A single flawed first planning step can cut an agent's task success rate by up to 30 percentage points (WebAnchor).",
                    "Hierarchical architectures like COMPASS show up to +20pp gains on long-horizon tasks, but the gains are fragile and collapse under ablation.",
                    "Memory and state-tracking failures (CubeBench) appear even in simple, deterministic tasks — before reasoning difficulty is even a factor.",
                    "The research consensus as of early 2026 treats long-horizon reasoning as an unsolved, actively worked problem — not a demonstrated capability.",
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
                      text: "arXiv — “AutoResearchBench: Benchmarking AI Agents on Complex Scientific Literature Discovery” (Apr 2026).",
                      link: "https://arxiv.org/html/2604.25256v1",
                    },
                    {
                      text: "Emergent Mind — “Long-Horizon Reasoning Benchmarks” (Jan 2026), summarizing COMPASS, Anchor-GRPO, CubeBench, and related work.",
                      link: "https://www.emergentmind.com/topics/long-horizon-reasoning-benchmarks",
                    },
                    {
                      text: "arXiv — “WebAnchor: Anchoring Agent Planning to Stabilize Long-Horizon Web Reasoning” (Jan 2026).",
                      link: "https://arxiv.org/pdf/2601.03164",
                    },
                    {
                      text: "arXiv — “AMA-Bench: Evaluating Long-Horizon Memory for Agentic Applications” (Feb 2026).",
                      link: "https://arxiv.org/html/2602.22769v1",
                    },
                    {
                      text: "arXiv — “InquiTree: Evaluating AI Agents in the Scientific Inquiry Loop with Paper-Derived Research Trees.”",
                      link: "https://arxiv.org/pdf/2606.09550",
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