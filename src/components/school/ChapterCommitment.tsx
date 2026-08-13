/**
 * Chapter 9 — The Commitment
 * 
 * Readiness framing + checklist + application CTA.
 * Using modal-with-existing-form default for Q4 (reversible).
 */

import { useState } from "react";

const readinessItems = [
  "I can commit consistent weekly time.",
  "I am comfortable being wrong in public.",
  "I am willing to document unfinished work.",
  "I can receive and use critical feedback.",
  "I want to produce something that can be examined."
];

interface ChapterCommitmentProps {
  onOpenApplication?: () => void;
}

export function ChapterCommitment({ onOpenApplication }: ChapterCommitmentProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newChecked = new Set(checked);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setChecked(newChecked);
  };

  return (
    <section 
      id="chapter-9" 
      data-chapter="commitment"
      className="relative min-h-screen border-t border-border py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Framing */}
        <div className="mb-16 text-center">
          <p className="font-display text-3xl font-light leading-relaxed tracking-tight text-foreground md:text-4xl">
            The work is structured.
            <br />
            The questions are open.
            <br />
            Your progress will depend on what you are willing to investigate.
          </p>
        </div>

        {/* Readiness checklist */}
        <div className="mb-16">
          <h3 className="label-mono mb-8 text-center text-muted-foreground">
            Readiness Checklist
          </h3>
          <div className="space-y-4">
            {readinessItems.map((item, index) => (
              <button
                key={index}
                onClick={() => toggleItem(index)}
                className="group flex w-full items-start gap-4 rounded-xl border border-border/60 bg-surface/20 p-6 text-left transition-all hover:border-accent/40 hover:bg-surface/30"
              >
                <div className={`
                  mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 transition-colors
                  ${checked.has(index) 
                    ? 'border-accent bg-accent' 
                    : 'border-border group-hover:border-accent/40'
                  }
                `}>
                  {checked.has(index) && (
                    <svg 
                      className="h-4 w-4 text-background" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2.5" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="leading-relaxed text-foreground/80">
                  {item}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-4 text-center">
          <button
            onClick={onOpenApplication}
            className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-10 py-4 font-mono text-sm uppercase tracking-wider text-background transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            Begin your application
          </button>
          
          <div>
            <a
              href="#subscribe"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-10 py-4 font-mono text-sm uppercase tracking-wider text-foreground transition-all hover:border-accent/50 hover:bg-surface"
            >
              Join the next research briefing
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
