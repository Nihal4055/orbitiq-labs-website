/**
 * Chapter 4 — The Research Loop (CENTERPIECE)
 * 
 * Scroll-controlled orbital diagram with 6 stations.
 * This will be fully built with GSAP ScrollTrigger NEXT (after scaffold is complete).
 * Currently: static layout to validate content and structure.
 */

interface Station {
  id: number;
  name: string;
  description: string;
  outputs: string[];
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

export function ChapterLoop() {
  return (
    <section 
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

        {/* Orbital diagram placeholder */}
        <div className="relative mx-auto mb-20 flex h-[500px] w-full max-w-2xl items-center justify-center">
          {/* Will become scroll-controlled rotating SVG */}
          <div className="relative h-96 w-96 rounded-full border border-border/40 bg-surface/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="label-mono text-muted-foreground">
                  Interactive Loop
                </p>
                <p className="mt-2 font-mono text-sm text-foreground/60">
                  Scroll to rotate
                </p>
              </div>
            </div>
            
            {/* Station markers (will be positioned on orbital path) */}
            {stations.map((station) => (
              <div
                key={station.id}
                className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-accent/20"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(${(station.id - 1) * 60}deg)
                    translate(180px)
                  `
                }}
              />
            ))}
          </div>
        </div>

        {/* Station details (will be updated by scroll position) */}
        <div className="space-y-16">
          {stations.map((station) => (
            <div 
              key={station.id}
              data-station={station.id}
              className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-surface/20 p-8"
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
