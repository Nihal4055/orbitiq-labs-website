import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const FAQS = [
  {
    q: "How is our research data protected?",
    a: "Every deployment is encrypted end to end (AES-256 at rest, TLS 1.3 in transit), SOC 2 Type II audited, and available in a private VPC or fully on-premise. Access is governed by SSO, SAML/SCIM, and granular role-based controls, with an immutable audit log of every query and agent action.",
  },
  {
    q: "Do you train your models on our data?",
    a: "Never. Your literature, results, and intellectual property are isolated to your tenant and are never used to train shared or foundation models. Your knowledge graph is yours alone.",
  },
  {
    q: "How trustworthy are the outputs?",
    a: "Every claim OrbitIQ produces is grounded in retrievable evidence — you can inspect the source paragraph, figure, citation, and confidence score behind any answer. Nothing is a black box; every conclusion has a traceable lineage.",
  },
  {
    q: "How is this different from a general-purpose chatbot?",
    a: "A chatbot answers questions. OrbitIQ operates as a multi-agent research system: it ingests your literature into a persistent knowledge graph, orchestrates specialized agents, generates and tests hypotheses, and produces publication-ready output — all with evidentiary rigor a chatbot cannot offer.",
  },
  {
    q: "Can it integrate with our existing tools and data sources?",
    a: "Yes. OrbitIQ ships with 250+ connectors spanning publications, preprints, patents, clinical trials, omics databases, and internal document stores — and supports custom connectors for proprietary data during enterprise onboarding.",
  },
  {
    q: "What does deployment look like for an institution?",
    a: "Three paths: managed cloud, private VPC, or on-premise. Enterprise engagements include custom agent orchestration, domain-model fine-tuning, SSO/governance setup, and SLA-backed support.",
  },
  {
    q: "Are Prometheus and Parallax available yet?",
    a: "Morbius is live today. Prometheus (life sciences) and Parallax (quantitative research) are in closed beta with select research and institutional partners — join the waitlist from either product page.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Frequently asked"
              title={
                <>
                  The questions serious <span className="italic text-accent">institutions ask.</span>
                </>
              }
              lede="Security, accuracy, integration, and deployment — answered plainly. Still need specifics? Talk to the team."
            />
          </div>

          <Reveal delay={120} variant="right">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-border/60 last:border-0"
                >
                  <AccordionTrigger className="group py-6 font-display text-lg font-light tracking-tight hover:no-underline [&[data-state=open]]:text-accent">
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="max-w-2xl pl-9 leading-relaxed text-muted-foreground">{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
