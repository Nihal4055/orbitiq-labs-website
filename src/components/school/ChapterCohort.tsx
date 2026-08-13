/**
 * Chapter 5 — Inside a Cohort
 * 
 * Weekly rhythm timeline + simulated research log feed.
 * Uses GSAP for staggered reveals of weekly cards and log entries.
 */

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const weeklyRhythm = [
  {
    day: "Monday",
    title: "Research Brief",
    description: "Understand the week's problem and define the question."
  },
  {
    day: "Tuesday",
    title: "Deep Reading",
    description: "Examine papers, assumptions, datasets, and competing methods."
  },
  {
    day: "Wednesday",
    title: "Lab Session",
    description: "Build, analyse, code, or test."
  },
  {
    day: "Thursday",
    title: "Critique",
    description: "Receive feedback from mentors and peers."
  },
  {
    day: "Friday",
    title: "Research Log",
    description: "Document what changed, what failed, and what comes next."
  }
];

const sampleLogEntries = [
  {
    time: "09:14",
    entry: 'Question narrowed from "AI for grid resilience" to "Early fault classification under limited labels"'
  },
  {
    time: "13:42",
    entry: "Baseline model failed on unseen operating conditions"
  },
  {
    time: "16:08",
    entry: "New experiment proposed: compare graph-based and temporal representations"
  }
];

export function ChapterCohort() {
  const sectionRef = useRef<HTMLElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;

    const weeklyCards = sectionRef.current.querySelectorAll('[data-weekly-card]');
    const logEntries = sectionRef.current.querySelectorAll('[data-log-entry]');

    // Animate weekly rhythm cards
    gsap.fromTo(
      weeklyCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        scrollTrigger: {
          trigger: weeklyCards[0],
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate research log entries with typing effect feel
    gsap.fromTo(
      logEntries,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: logEntries[0],
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [prefersReducedMotion]);
  return (
    <section 
      ref={sectionRef}
      id="chapter-5" 
      data-chapter="cohort"
      className="relative min-h-screen border-t border-border py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
            Inside a Cohort
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            The operating system of the cohort
          </p>
        </div>

        {/* Weekly rhythm */}
        <div className="mb-20">
          <h3 className="label-mono mb-8 text-center text-muted-foreground">
            Weekly Rhythm
          </h3>
          <div className="grid gap-6 md:grid-cols-5">
            {weeklyRhythm.map((item, i) => (
              <div
                key={i}
                data-weekly-card
                className="rounded-xl border border-border/60 bg-surface/20 p-6 text-center"
              >
                <div className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
                  {item.day}
                </div>
                <h4 className="mb-2 font-display text-lg font-light">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Research log feed */}
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center">
            <p className="text-sm text-muted-foreground">
              A typical research log might look like this.
            </p>
          </div>
          
          <div className="terminal-pane rounded-xl p-6">
            <div className="mb-4 flex items-center gap-2 border-b border-border/40 pb-3">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <div className="h-3 w-3 rounded-full bg-accent" />
              <div className="h-3 w-3 rounded-full bg-morbius" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                research.log
              </span>
            </div>
            
            <div className="space-y-3 font-mono text-sm">
              {sampleLogEntries.map((entry, i) => (
                <div key={i} data-log-entry className="flex gap-4">
                  <span className="text-muted-foreground">{entry.time}</span>
                  <span className="flex-1 text-foreground/90">{entry.entry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
