/**
 * Chapter 2 — The Problem
 * 
 * Sticky two-column layout: left visual changes state as right column scrolls through 4 steps.
 * Uses GSAP ScrollTrigger for pin and state transitions.
 */

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ChapterProblem() {
  const steps = [
    {
      id: 1,
      copy: (
        <>
          The literature is fragmented.
          <br />
          The tools are scattered.
          <br />
          The standards are rarely explained.
        </>
      ),
      visualState: "scattered"
    },
    {
      id: 2,
      copy: (
        <>
          You can complete a syllabus without ever discovering a problem.
          <br />
          You can learn a method without knowing when it should be trusted.
        </>
      ),
      visualState: "checklist"
    },
    {
      id: 3,
      copy: (
        <>
          A question becomes a hypothesis.
          <br />
          A hypothesis becomes an experiment.
          <br />
          An experiment fails.
          <br />
          The failure sharpens the question.
        </>
      ),
      visualState: "loop-forming"
    },
    {
      id: 4,
      copy: (
        <>
          The School exists to make that loop accessible, structured, and rigorous.
        </>
      ),
      visualState: "connected"
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !visualRef.current) return;

    const section = sectionRef.current;
    const visual = visualRef.current;
    const stepElements = section.querySelectorAll('[data-step]');

    // Create intersection observers for each step to update active state
    stepElements.forEach((el, index) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'center center',
        end: 'bottom center',
        onEnter: () => setActiveStep(index + 1),
        onEnterBack: () => setActiveStep(index + 1)
      });
    });

    // Pin the visual on desktop only
    if (window.innerWidth >= 1024) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        pin: visual,
        pinSpacing: false
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section || trigger.vars.trigger === visual) {
          trigger.kill();
        }
      });
    };
  }, [prefersReducedMotion]);

  return (
    <section 
      ref={sectionRef}
      id="chapter-2" 
      data-chapter="problem"
      className="relative min-h-screen border-t border-border py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left: Visual workspace (sticky on desktop) */}
          <div ref={visualRef} className="relative flex items-center justify-center lg:h-screen">
            <div className="relative h-full w-full max-w-md py-20">
              {/* Workspace visualization with state-based styling */}
              <div className={`
                flex h-full flex-col items-center justify-center gap-6 rounded-2xl border p-8 transition-all duration-700
                ${activeStep === 1 ? 'border-destructive/40 bg-destructive/5' : ''}
                ${activeStep === 2 ? 'border-accent/40 bg-accent/5' : ''}
                ${activeStep === 3 ? 'border-prometheus/40 bg-prometheus/5' : ''}
                ${activeStep === 4 ? 'border-morbius/40 bg-morbius/10 shadow-lg' : ''}
                ${activeStep < 4 ? 'border-border/40 bg-surface/20' : ''}
              `}>
                {/* Visual elements that change per step */}
                <div className={`
                  h-16 w-16 rounded-lg border transition-all duration-500
                  ${activeStep === 1 ? 'border-destructive/60 bg-destructive/20 rotate-12' : ''}
                  ${activeStep >= 2 ? 'border-accent/60 bg-accent/20 rotate-0' : 'border-border/60 bg-surface/40'}
                `} />
                
                <div className={`
                  h-24 w-full rounded-lg border transition-all duration-500 delay-100
                  ${activeStep === 2 ? 'border-accent/60 bg-accent/20 scale-105' : ''}
                  ${activeStep >= 3 ? 'border-prometheus/60 bg-prometheus/20' : 'border-border/60 bg-surface/40'}
                `} />
                
                <div className={`
                  grid grid-cols-2 gap-4 transition-all duration-500 delay-200
                  ${activeStep >= 3 ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}
                `}>
                  <div className="h-20 w-full rounded-lg border border-border/60 bg-surface/40" />
                  <div className="h-20 w-full rounded-lg border border-border/60 bg-surface/40" />
                </div>
                
                <div className={`
                  h-12 w-3/4 rounded-full border transition-all duration-700 delay-300
                  ${activeStep === 4 ? 'border-morbius bg-morbius/20 shadow-lg scale-110' : 'border-accent/40 bg-accent/10 scale-100'}
                `} />

                {/* Step indicator */}
                <div className="absolute bottom-4 left-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    Step {activeStep}/4
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scrolling narrative */}
          <div className="space-y-[60vh]">
            {steps.map((step) => (
              <div
                key={step.id}
                data-step={step.id}
                className="flex min-h-[40vh] items-center"
              >
                <div className="space-y-6">
                  <span className="label-mono text-muted-foreground">
                    Step {step.id.toString().padStart(2, '0')}
                  </span>
                  <p className="font-display text-2xl font-light leading-relaxed tracking-tight text-foreground md:text-3xl">
                    {step.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
