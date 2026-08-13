/**
 * Chapter 4 — The Research Loop (CENTERPIECE)
 * 
 * Scroll-controlled orbital diagram with 6 stations.
 * Uses GSAP ScrollTrigger for pinned rotation and station activation.
 * Includes reduced-motion fallback and keyboard accessibility.
 */

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Station {
  id: number;
  name: string;
  description: string;
  outputs: string[];
  angle: number; // degrees for positioning
}

const stations: Station[] = [
  {
    id: 1,
    name: "Observe",
    description: "Read beyond the abstract. Map the field, identify the dominant assumptions, and understand what has already been attempted.",
    outputs: [
      "Annotated papers",
      "Literature map",
      "Research landscape"
    ],
    angle: 0
  },
  {
    id: 2,
    name: "Frame",
    description: "Turn a broad interest into a question that can actually be investigated.",
    outputs: [
      "Problem statement",
      "Research question",
      "Hypothesis or analytical objective",
      "Scope and limitations"
    ],
    angle: 60
  },
  {
    id: 3,
    name: "Investigate",
    description: "Choose methods deliberately. Compare approaches, identify variables, define baselines, and decide what evidence would count.",
    outputs: [
      "Methodology matrix",
      "Experiment plan",
      "Dataset/data-source plan",
      "Evaluation protocol"
    ],
    angle: 120
  },
  {
    id: 4,
    name: "Build",
    description: "Make the idea executable. Write the analysis, build the prototype, run the experiment, or construct the model.",
    outputs: [
      "Code repository",
      "Notebook",
      "Prototype",
      "Dataset pipeline",
      "Analytical framework"
    ],
    angle: 180
  },
  {
    id: 5,
    name: "Validate",
    description: "A result is not strong because it is interesting. It is strong because it survives scrutiny.",
    outputs: [
      "Error analysis",
      "Ablation/sensitivity analysis",
      "Reproducibility checklist",
      "Peer-review response",
      "Limitations statement"
    ],
    angle: 240
  },
  {
    id: 6,
    name: "Communicate",
    description: "Make the work understandable to someone who was not present when you made it.",
    outputs: [
      "Research memo",
      "Paper draft",
      "Technical presentation",
      "Demo",
      "Public portfolio page"
    ],
    angle: 300
  }
];

export function ChapterLoop() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const [activeStation, setActiveStation] = useState(1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !orbitRef.current) {
      return;
    }

    const section = sectionRef.current;
    const orbit = orbitRef.current;

    // Create ScrollTrigger for pinned rotation
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=3000", // 3000px of scroll height for smooth progression
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        // Map scroll progress (0-1) to rotation (0-360deg) and active station (1-6)
        const progress = self.progress;
        const rotation = progress * 360;
        const stationIndex = Math.min(Math.floor(progress * 6), 5) + 1;

        // Rotate orbit
        gsap.to(orbit, {
          rotation: -rotation, // Negative for clockwise
          duration: 0.1,
          ease: "none"
        });

        // Update active station
        setActiveStation(stationIndex);
      }
    });

    return () => {
      trigger.kill();
    };
  }, [prefersReducedMotion]);

  const activeStationData = stations[activeStation - 1];

  // Click handler for station nodes
  const handleStationClick = (stationId: number) => {
    if (!sectionRef.current) return;
    
    // Calculate target scroll position for this station
    const trigger = ScrollTrigger.getById(sectionRef.current.id);
    if (trigger) {
      const progress = (stationId - 1) / 6;
      const targetScroll = trigger.start + (trigger.end - trigger.start) * progress;
      gsap.to(window, {
        scrollTo: targetScroll,
        duration: 1,
        ease: "power2.inOut"
      });
    }
  };

  if (prefersReducedMotion) {
    // Reduced motion fallback: static vertical list
    return (
      <section 
        id="chapter-4" 
        data-chapter="loop"
        className="relative border-t border-border py-32"
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
              The Research Loop
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Six stations. One continuous cycle of investigation.
            </p>
          </div>

          <div className="space-y-12">
            {stations.map((station) => (
              <div 
                key={station.id}
                className="rounded-2xl border border-border/60 bg-surface/20 p-8"
              >
                <div className="mb-4 flex items-baseline gap-4">
                  <span className="font-mono text-sm text-muted-foreground">
                    {station.id.toString().padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl font-light tracking-tight">
                    {station.name}
                  </h3>
                </div>
                
                <p className="mb-6 leading-relaxed text-foreground/80">
                  {station.description}
                </p>
                
                <div>
                  <p className="label-mono mb-3 text-muted-foreground">
                    Outputs
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {station.outputs.map((output, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        <span className="text-foreground/70">{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Full experience with scroll-controlled rotation
  return (
    <section 
      ref={sectionRef}
      id="chapter-4" 
      data-chapter="loop"
      className="relative min-h-screen border-t border-border py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
            The Research Loop
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Six stations. One continuous cycle of investigation.
          </p>
        </div>

        {/* Orbital diagram */}
        <div className="relative mx-auto mb-20 flex h-[600px] w-full max-w-3xl items-center justify-center">
          <div 
            ref={orbitRef}
            className="relative h-[500px] w-[500px]"
            style={{ willChange: "transform" }}
          >
            {/* Orbital ring */}
            <svg 
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 500 500"
              aria-hidden="true"
            >
              <circle
                cx="250"
                cy="250"
                r="200"
                fill="none"
                stroke="var(--line-orbital)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
            </svg>

            {/* Station nodes */}
            {stations.map((station) => {
              const isActive = station.id === activeStation;
              const radius = 200;
              const angleRad = (station.angle - 90) * (Math.PI / 180);
              const x = 250 + radius * Math.cos(angleRad);
              const y = 250 + radius * Math.sin(angleRad);

              return (
                <button
                  key={station.id}
                  onClick={() => handleStationClick(station.id)}
                  className={`
                    absolute flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all
                    ${isActive 
                      ? 'border-accent bg-accent scale-125 shadow-lg' 
                      : 'border-border/60 bg-surface/40 hover:border-accent/50 hover:scale-110'
                    }
                  `}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: `translate(-50%, -50%) rotate(${station.angle}deg)`,
                    boxShadow: isActive ? '0 0 32px -8px var(--accent)' : 'none'
                  }}
                  aria-label={`${station.name} station`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className={`font-mono text-sm font-medium ${isActive ? 'text-background' : 'text-foreground/60'}`}>
                    {station.id}
                  </span>
                </button>
              );
            })}

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="label-mono text-muted-foreground">
                  Research Loop
                </p>
                <p className="mt-2 font-mono text-xs text-foreground/40">
                  Scroll to rotate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Active station detail panel */}
        <div 
          ref={detailRef}
          className="mx-auto max-w-3xl"
          role="region"
          aria-live="polite"
          aria-atomic="true"
        >
          <div 
            key={activeStation}
            className="rounded-2xl border border-accent/60 bg-surface/20 p-8 shadow-lg"
            style={{
              boxShadow: '0 8px 32px -8px var(--accent)'
            }}
          >
            <div className="mb-6 flex items-baseline gap-4">
              <span className="font-mono text-sm text-accent">
                {activeStationData.id.toString().padStart(2, '0')}
              </span>
              <h3 className="font-display text-3xl font-light tracking-tight">
                {activeStationData.name}
              </h3>
            </div>
            
            <p className="mb-8 text-lg leading-relaxed text-foreground/90">
              {activeStationData.description}
            </p>
            
            <div>
              <p className="label-mono mb-4 text-muted-foreground">
                Outputs
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {activeStationData.outputs.map((output, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed text-foreground/80">{output}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {stations.map((station) => (
              <button
                key={station.id}
                onClick={() => handleStationClick(station.id)}
                className={`
                  h-2 rounded-full transition-all
                  ${station.id === activeStation 
                    ? 'w-8 bg-accent' 
                    : 'w-2 bg-border hover:bg-accent/50'
                  }
                `}
                aria-label={`Go to ${station.name}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
