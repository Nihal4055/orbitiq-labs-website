/**
 * Chapter 6 — The Output / Dossier
 * 
 * Progressive reveal of 7 research artifacts.
 * Scroll-based reveal animation deferred to later phase.
 */

const artifacts = [
  {
    id: 1,
    title: "Research question",
    description: "A question precise enough to investigate."
  },
  {
    id: 2,
    title: "Literature map",
    description: "A structured view of what the field knows, debates, and ignores."
  },
  {
    id: 3,
    title: "Experimental design",
    description: "A defensible plan for producing evidence."
  },
  {
    id: 4,
    title: "Working system",
    description: "A model, analysis, prototype, dataset, or method."
  },
  {
    id: 5,
    title: "Research memo",
    description: "A written argument supported by evidence."
  },
  {
    id: 6,
    title: "Final presentation",
    description: "A clear explanation of what was attempted, discovered, and learned."
  },
  {
    id: 7,
    title: "Research identity",
    description: "A body of work that tells the world what kind of problems you are prepared to investigate."
  }
];

export function ChapterDossier() {
  return (
    <section 
      id="chapter-6" 
      data-chapter="dossier"
      className="relative min-h-screen border-t border-border py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
            The Output
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            What you will leave with
          </p>
        </div>

        {/* Artifacts */}
        <div className="space-y-8">
          {artifacts.map((artifact) => (
            <div
              key={artifact.id}
              data-artifact={artifact.id}
              className="group relative rounded-2xl border border-border/60 bg-surface/20 p-8 transition-all hover:border-accent/40 hover:bg-surface/30"
              style={{
                boxShadow: '0 4px 16px -4px oklch(0 0 0 / 0.3)'
              }}
            >
              {/* Paper texture overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-5 film-grain" />
              
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-sm font-medium text-accent">
                    {artifact.id.toString().padStart(2, '0')}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="mb-2 font-display text-2xl font-light tracking-tight">
                    {artifact.title}
                  </h3>
                  <p className="leading-relaxed text-foreground/70">
                    {artifact.description}
                  </p>
                </div>
              </div>

              {/* Subtle corner ticks (dossier aesthetic) */}
              <div className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-accent/20" />
              <div className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-accent/20" />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 rounded-xl border border-border/40 bg-surface/10 p-8">
          <p className="text-center text-sm leading-relaxed text-muted-foreground">
            Selected projects may be developed further toward publication, open-source release,
            industry collaboration, or continued work within OrbitIQ Labs, subject to research
            quality and review.
          </p>
        </div>

      </div>
    </section>
  );
}
