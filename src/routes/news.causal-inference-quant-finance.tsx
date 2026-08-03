import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { ArrowLeft } from "lucide-react";

const TITLE = "Causal Inference in Quantitative Finance — OrbitIQ Labs Research News";

export const Route = createFileRoute("/news/causal-inference-quant-finance")({
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
              <span className="label-mono text-violet-400">Quantitative Research</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">August 2026</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display mt-4 text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.03em]">
              Causal Inference Emerges as Quant Finance's Next Frontier for Factor Investing and
              Risk Management
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-xl font-light leading-relaxed text-muted-foreground">
              After decades of correlation-driven models, quantitative finance is absorbing causal
              inference methods at scale — from factor investing to portfolio risk to bankruptcy
              prediction — with the National Bureau of Economic Research and leading
              academic-industry voices now treating it as a core methodological shift rather than a
              niche technique.
            </p>
          </Reveal>

          {/* Hero Image */}
          <Reveal delay={200}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border/60">
              <img
                src="/paintings/news-causal-finance.jpg"
                alt="Causal inference in quantitative finance"
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
                    Quantitative finance has long built its models on correlation and prediction:
                    identify a statistical pattern in historical data, and trade on the expectation
                    that it persists. The field's growing embrace of causal inference is a direct
                    response to the well-documented failure mode of that approach — factors and
                    signals that look robust in backtests but decay or invert out of sample because
                    they were never causally grounded in the first place.
                  </p>

                  <p>
                    The most prominent voice pushing this shift is Marcos López de Prado, whose
                    forthcoming 2026 Journal of Portfolio Management paper with Vincent Zoonekynd,
                    "Correcting the Factor Mirage," frames much of factor investing's
                    underperformance as a specification problem: models that treat correlated
                    variables as causal drivers misallocate capital in ways that only surface after
                    the fact.
                  </p>

                  <p>
                    Related 2025 work by López de Prado, Zoonekynd, and Alexander Lipton argues
                    that causal factor analysis is not just a nice-to-have refinement but a
                    necessary condition for investment efficiency — a notably strong methodological
                    claim from a widely cited voice in the field.
                  </p>

                  <p>
                    The academic mainstream is following. A 2026 NBER working paper, "Causal
                    Inference for Asset Pricing" by Valentin Haddad, Zhiguo He, Paul Huebner, Péter
                    Kondor, and Erik Loualiche, brings formal causal identification techniques
                    directly into asset pricing theory — a sign that causal methods are moving from
                    applied trading desks into core academic finance.
                  </p>

                  <p>
                    Risk management is adopting the same tools from a different angle. A
                    comprehensive ACM Computing Surveys review of causal inference across banking,
                    finance, and insurance — covering 45 papers published between 1992 and 2023 —
                    documents growing use of Bayesian causal networks, Granger causality, and
                    counterfactual analysis specifically to make AI/ML risk models explainable, a
                    requirement that's become increasingly non-negotiable for regulators.
                  </p>

                  <p>
                    In credit portfolios specifically, counterfactual analysis is being used to
                    model how classes of borrowers would have behaved under different conditions,
                    directly informing stress testing. On the more experimental end, a 2025 paper
                    (ARCADIA) applies agentic AI to automate causal discovery for corporate
                    bankruptcy prediction — using AI agents not just to predict default, but to
                    autonomously build the causal graph explaining why.
                  </p>

                  <p>
                    The throughline across all of this work is a shift in what "explainability"
                    means in finance: not just producing a feature-importance score after the fact,
                    but building models where the structure itself represents a causal claim that
                    can be tested, stress-tested, and — critically for regulators — explained.
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
                    "López de Prado and Zoonekynd's 2026 “Correcting the Factor Mirage” reframes factor investing underperformance as a causal specification problem, not just noise.",
                    "A 2026 NBER working paper brings formal causal identification methods directly into asset pricing theory, signaling academic mainstream adoption.",
                    "Causal spillover networks and causal factor-investing networks are an active, fast-growing subfield as of 2025–2026.",
                    "An ACM Computing Surveys review of 45 papers (1992–2023) documents Bayesian causal networks, Granger causality, and counterfactual analysis becoming standard tools for explainable risk modeling in banking, finance, and insurance.",
                    "Agentic AI is beginning to automate causal discovery itself, not just causal-informed prediction (e.g., ARCADIA for bankruptcy analysis).",
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
                      text: "CFA Institute Research Foundation — López de Prado, “Causality and Factor Investing: A Primer.”",
                      link: "https://rpc.cfainstitute.org/sites/default/files/docs/research-reports/rf_lopezdeprado_causalityprimer_online.pdf",
                    },
                    {
                      text: "NBER Working Paper 35413 — Haddad, He, Huebner, Kondor, Loualiche, “Causal Inference for Asset Pricing” (2026).",
                      link: "https://doi.org/10.3386/w35413",
                    },
                    {
                      text: "arXiv — “Is Causality Necessary for Efficient Portfolios? A Computational Perspective on Predictive Validity and Model Misspecification” (Feb 2026).",
                      link: "https://arxiv.org/html/2507.23138",
                    },
                    {
                      text: "ACM Computing Surveys — “A Comprehensive Review of Causal Inference in Banking, Finance, and Insurance.”",
                      link: "https://dl.acm.org/doi/10.1145/3736752",
                    },
                    {
                      text: "Clausius Press — Xu, “Causal Inference in Financial Risk Management: Applications of Counterfactual Analysis in Credit Portfolios” (2025).",
                      link: "https://www.clausiuspress.com/article/14838.html",
                    },
                    {
                      text: "arXiv — “ARCADIA: Scalable Causal Discovery for Corporate Bankruptcy Analysis Using Agentic AI.”",
                      link: "https://arxiv.org/pdf/2512.00839",
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