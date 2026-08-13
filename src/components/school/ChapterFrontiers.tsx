/**
 * Chapter 7 — The Tracks / Frontiers
 * 
 * Interactive 5-track selector with detail panels.
 * Uses GSAP for track card reveals and detail panel transitions.
 */

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type TrackId = "grid" | "maritime" | "satellite" | "carbon" | "ai-research";

interface Track {
  id: TrackId;
  name: string;
  openQuestion: string;
  directions: string[];
  exampleOutput: string;
  accent: string;
}

const tracks: Track[] = [
  {
    id: "grid",
    name: "Grid Intelligence",
    openQuestion: "How can a system detect a fault it has never seen before?",
    directions: [
      "Graph-based fault localization",
      "Forecasting under distribution shift",
      "Uncertainty-aware grid monitoring"
    ],
    exampleOutput: "A reproducible benchmark and research memo.",
    accent: "oklch(0.72 0.16 45)"
  },
  {
    id: "maritime",
    name: "Maritime Intelligence",
    openQuestion: "What patterns in vessel movement reveal intent beyond stated routes?",
    directions: [
      "Anomaly detection in trajectory data",
      "Route prediction under weather constraints",
      "Port congestion forecasting"
    ],
    exampleOutput: "An operational prototype with documented methodology.",
    accent: "oklch(0.70 0.14 210)"
  },
  {
    id: "satellite",
    name: "Satellite and Earth Observation",
    openQuestion: "How do we turn remote sensing into measurable environmental change?",
    directions: [
      "Multi-temporal land-use classification",
      "Cloud-robust vegetation monitoring",
      "Disaster impact assessment pipelines"
    ],
    exampleOutput: "A validated dataset and analysis framework.",
    accent: "oklch(0.74 0.13 168)"
  },
  {
    id: "carbon",
    name: "Carbon and Environmental MRV",
    openQuestion: "What evidence systems make environmental claims verifiable?",
    directions: [
      "Forest carbon stock estimation",
      "Emission source attribution",
      "Verification protocol design"
    ],
    exampleOutput: "A measurement framework and uncertainty analysis.",
    accent: "oklch(0.68 0.15 140)"
  },
  {
    id: "ai-research",
    name: "AI Research Systems",
    openQuestion: "How do we build agents that reason rigorously about scientific problems?",
    directions: [
      "Long-horizon reasoning for research",
      "Evaluation beyond benchmarks",
      "Reproducibility infrastructure"
    ],
    exampleOutput: "A working system and published analysis.",
    accent: "oklch(0.76 0.15 290)"
  }
];

export function ChapterFrontiers() {
  const [selectedTrack, setSelectedTrack] = useState<TrackId>("grid");
  const sectionRef = useRef<HTMLElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
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

    const trackButtons = sectionRef.current.querySelectorAll('[data-track-button]');

    // Animate track selector buttons
    gsap.fromTo(
      trackButtons,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: trackButtons[0],
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [prefersReducedMotion]);

  // Animate detail panel when track changes
  useEffect(() => {
    if (prefersReducedMotion || !detailRef.current) return;

    gsap.fromTo(
      detailRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, [selectedTrack, prefersReducedMotion]);
  
  const track = tracks.find(t => t.id === selectedTrack)!;

  return (
    <section 
      ref={sectionRef}
      id="chapter-7" 
      data-chapter="frontiers"
      className="relative min-h-screen border-t border-border py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
            The Frontiers
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Five tracks. Open questions. Real outputs.
          </p>
        </div>

        {/* Track selector */}
        <div className="mb-12">
          <div className="grid gap-4 md:grid-cols-5">
            {tracks.map((t) => (
              <button
                key={t.id}
                data-track-button
                onClick={() => setSelectedTrack(t.id)}
                className={`
                  rounded-xl border p-6 text-center transition-all
                  ${selectedTrack === t.id
                    ? 'border-accent bg-accent/10 shadow-lg'
                    : 'border-border/60 bg-surface/20 hover:border-accent/40 hover:bg-surface/30'
                  }
                `}
                style={{
                  borderColor: selectedTrack === t.id ? t.accent : undefined
                }}
              >
                <h3 className="font-display text-lg font-light leading-snug">
                  {t.name}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Track detail panel */}
        <div 
          ref={detailRef}
          className="mx-auto max-w-4xl rounded-2xl border border-border/60 bg-surface/20 p-10"
          style={{
            borderColor: track.accent,
            boxShadow: `0 8px 32px -8px ${track.accent}30`
          }}
        >
          {/* Open question */}
          <div className="mb-8">
            <p className="label-mono mb-4 text-muted-foreground">
              Open Question
            </p>
            <p className="font-display text-2xl font-light leading-relaxed tracking-tight">
              {track.openQuestion}
            </p>
          </div>

          {/* Research directions */}
          <div className="mb-8">
            <p className="label-mono mb-4 text-muted-foreground">
              Sample Research Directions
            </p>
            <ul className="space-y-3">
              {track.directions.map((direction, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span 
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: track.accent }}
                  />
                  <span className="leading-relaxed text-foreground/80">
                    {direction}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Example output */}
          <div className="mb-8">
            <p className="label-mono mb-4 text-muted-foreground">
              Example Output
            </p>
            <p className="leading-relaxed text-foreground/70">
              {track.exampleOutput}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#chapter-9"
              className="inline-flex items-center gap-2 rounded-full border px-8 py-3 font-mono text-sm uppercase tracking-wider transition-all hover:shadow-lg"
              style={{
                borderColor: track.accent,
                backgroundColor: `${track.accent}20`,
                color: track.accent
              }}
            >
              Explore this frontier
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
