import { Reveal } from "./Reveal";
import { ClassicalFlashcard } from "./ClassicalFlashcard";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative border-t border-border py-32 lg:py-48">
      <div className="marble-sheen pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-sm italic text-accent/80">I.</span>
            <span className="rule-ornament w-10" />
            <span className="label-mono">AI for Autonomous Science</span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mt-10 text-[clamp(3rem,9.5vw,8.5rem)] leading-[0.86] font-light tracking-[-0.045em]">
            Accelerating
            <br />
            <span className="italic text-accent">Every Discovery.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 border-t border-border/60 pt-10 md:grid-cols-2">
          <Reveal delay={160}>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Scientists use OrbitIQ Labs&rsquo; agentic systems to move from literature to
              hypothesis to publication — without losing the rigor that makes science science.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="max-w-md text-lg leading-relaxed">
              By scientists. For scientists.
              <br />
              <span className="text-muted-foreground">
                AI designed to extend human inquiry, not replace it.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="border-t border-border bg-surface/20 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 flex items-center gap-4">
            <span className="font-display text-sm italic text-accent/80">II.</span>
            <span className="rule-ornament w-10" />
            <span className="label-mono">The research stack is broken</span>
          </div>
        </Reveal>

        <ClassicalFlashcard
          image="ariadne-thread.jpg"
          imageAlt="Classical painting — Ariadne's thread through the labyrinth"
          eyebrow="One thread through the labyrinth"
          title={
            <>
              Discovery shouldn&rsquo;t require this much <span className="italic text-accent">translation.</span>
            </>
          }
          paragraphs={[
            "Modern science runs on twenty disconnected tools — a reference manager here, a lab notebook there, a chat window for review, a deck for presenting, a separate system for tracking what has already been tried and failed.",
            "Every handoff leaks context. Every tool forgets what the last one knew. Research memory evaporates the moment a project ends.",
            "OrbitIQ builds unified, agentic operating systems that carry a researcher's work — and an organization's memory — from first question to final publication, without the seams.",
          ]}
          cta={{ label: "See how it works", href: "#systems" }}
        />
      </div>
    </section>
  );
}
