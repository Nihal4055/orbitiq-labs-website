import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { FounderMessage } from "./FounderMessage";

const PRINCIPLES = [
  {
    numeral: "α",
    kicker: "First principle",
    title: "Autonomous Discovery",
    body: "Systems that reason, hypothesize, and validate alongside researchers — not chatbots that merely answer questions about the work.",
  },
  {
    numeral: "β",
    kicker: "Second principle",
    title: "Agentic Architecture",
    body: "Specialized agents that mirror how real research teams operate: coordinated, adversarial when needed, and always traceable to evidence.",
  },
  {
    numeral: "γ",
    kicker: "Third principle",
    title: "Scientific Literacy",
    body: "Frontier intelligence made legible to the entire scientific community — not reserved for the AI-native fringe.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          numeral="VIII"
          eyebrow="About OrbitIQ Labs"
          title={
            <>
              The tools scientists use should move as fast as the{" "}
              <span className="italic text-accent">questions they ask.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <Reveal delay={120} variant="left">
            <p className="font-display text-[clamp(1.5rem,2.6vw,2.3rem)] font-light leading-[1.18] tracking-[-0.02em]">
              Built by a scientist, for the scientific community — OrbitIQ Labs exists to close the
              gap between what a researcher can <span className="italic">imagine</span> and what a
              researcher can <span className="italic">execute in a single afternoon.</span>
            </p>
          </Reveal>
          <Reveal delay={220} variant="right">
            <div className="space-y-6 leading-relaxed text-muted-foreground lg:pt-2">
              <p>
                We advance the industry toward autonomous discovery, agentic intelligence, and AI
                literacy — building the connective infrastructure that fragmented research tools
                never could.
              </p>
              <p className="text-foreground">
                We are not building AI to replace scientists. We are building the infrastructure
                that lets scientists work at the speed of their curiosity.
              </p>
              <div className="flex flex-wrap gap-8 border-t border-border/60 pt-6">
                {[
                  { v: "Est.", l: "Inquiry" },
                  { v: "3", l: "Frontier systems" },
                  { v: "40+", l: "Scientific domains" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-2xl font-light text-accent">{s.v}</p>
                    <p className="label-mono mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} variant="scale">
              <div className="group flex h-full flex-col gap-5 bg-[oklch(0.13_0.01_265)] p-9 transition-colors hover:bg-surface/50">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl italic text-accent/80">{p.numeral}</span>
                  <span className="label-mono">{p.kicker}</span>
                </div>
                <h3 className="font-display text-2xl font-light tracking-tight">{p.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <span className="block h-px w-full origin-left scale-x-0 bg-accent/60 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FounderNote() {
  return (
    <section id="founder" className="hidden scroll-mt-16 border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          eyebrow="A message from our founder"
          align="center"
          title={
            <>
              Why we&rsquo;re building <span className="italic text-accent">OrbitIQ.</span>
            </>
          }
        />
        <Reveal delay={160} variant="scale">
          <div className="mx-auto mt-14 max-w-4xl">
            <FounderVideo />
            <div className="mt-6 flex flex-col items-center gap-1 text-center">
              <p className="font-display text-lg tracking-tight">Shetty Nihal Naveen</p>
              <p className="label-mono">Founder &amp; Chief Scientist · Mangaluru</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Elegant animated slideshow instead of video — professional founder message storytelling
 */
function FounderVideo() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-border/60"
      style={{ boxShadow: "0 40px 120px -40px oklch(0 0 0 / 0.75)", aspectRatio: "16 / 9" }}
    >
      <FounderMessage />
      
      {/* cinematic edge vignette */}
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: "inset 0 0 120px 10px oklch(0 0 0 / 0.35)" }} />

      {/* corner ticks */}
      <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-accent/50" />
      <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-accent/50" />
    </div>
  );
}
